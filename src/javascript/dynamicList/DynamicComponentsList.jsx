import React from 'react';
import ReactDOM from 'react-dom';
import {SimpleListView} from './SimpleListView'
import {graphql} from 'react-apollo';
import gql from "graphql-tag";
import * as _ from "lodash";
import {replaceFragmentsInDocument} from "@jahia/apollo-dx";
import PropTypes from 'prop-types';

class DynamicComponentsList extends React.Component {

    constructor(props) {
        super(props);
        this.componentCache = [];
    }

    mapResultsToProps({data, ownProps}) {
        let components = [];

        let jcr = data.jcr;
        let safeEval = eval;
        if (jcr && jcr.nodesByQuery) {
            components = _.map(_.flatMap(jcr.nodesByQuery.nodes, "children.nodes"),(n)=> safeEval("(" + n.renderedContent.output + ")"));
        }

        let imports = [];
        _.each(components, c => {
            imports = imports.concat(c.getImports())
        });
        let promise;
        if (imports.length > 0) {
            promise = Promise.all(_.map(imports, (imp) => SystemJS.import(imp))).then(m => {
                let reactElements = _.map(components, (c) => {
                    let s = c.getImports().length;
                    let r = c.createElement(React, ReactDOM, ...m);
                    m.splice(s);
                    return r;
                });
                return reactElements;
            });
        }

        return {
            ...ownProps,
            components: promise,
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
                                        renderedContent(templateType:"js", view:"react") {
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

        return (<Component {...this.props} />);
    }
}

DynamicComponentsList.propTypes = {
    /**
     * Id of the "componentsFolder" to look for
     */
    id: PropTypes.string.isRequired,

    /**
     * Component to use to do the rendering
     */
    renderComponent: PropTypes.element
}

export {DynamicComponentsList};
