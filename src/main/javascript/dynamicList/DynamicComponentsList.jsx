import React from 'react';
import {SimpleListView} from './SimpleListView'
import {ApolloProvider, graphql} from 'react-apollo';
import gql from "graphql-tag";
import * as _ from "lodash";
import {client, replaceFragmentsInDocument} from "@jahia/apollo-dx";

class DynamicComponentsList extends React.Component {

    componentCache = [];

    constructor(props) {
        super(props);
    }

    mapResultsToProps({data, ownProps}) {
        let components = [];

        let jcr = data.jcr;

        if (jcr && jcr.nodesByQuery) {
            components = _.map(_.flatMap(jcr.nodesByQuery.nodes, "children.nodes"),(n)=> eval("(" + n.renderedView.output + ")"));
        }

        return {
            ...ownProps,
            components: components,
        };
    }

    mapPropsToOptions(props) {
        return {
            variables : {
                query: "select * from [reactnt:componentsFolder] where [react:id]='" + props.id + "'"
            }
        };
    }

    render() {
        let renderComponent = this.props.renderComponent;

        let cacheMatch = _.find(this.componentCache, (f) => f.renderComponent === renderComponent);
        let Component;
        if (cacheMatch) {
            Component = cacheMatch.dataComponent;
        } else {
            let query = gql`
                query ComponentsQuery($query:String!) {
                    jcr {
                        nodesByQuery(query:$query) {
                            nodes {
                                name
                                path
                                primaryNodeType {
                                    name
                                }
                                children {
                                    nodes {
                                        name
                                        path
                                        primaryNodeType {
                                            name
                                        }
                                        renderedView(templateType:"js", view:"react") {
                                            output
                                        }
                                    }
                                }
                            }
                        }
                    }
                }`;

            Component = graphql(query, {
                props: this.mapResultsToProps,
                options: this.mapPropsToOptions
            })(renderComponent || SimpleListView);

            this.componentCache.push({renderComponent: renderComponent, dataComponent: Component});
        }

        return (<ApolloProvider client={client}><Component {...this.props} /></ApolloProvider>);
    }
}

export {DynamicComponentsList};
