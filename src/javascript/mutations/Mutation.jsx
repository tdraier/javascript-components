import React, {Component} from 'react';
import {ApolloProvider, graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {client} from "@jahia/apollo-dx";
import {NodesTableData} from "../nodesTable/NodesTableData";
import {FlatButton, Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui';
import {MuiThemeProvider} from 'material-ui/styles/index';
import {muiTheme} from '../themeProvider';


class MutationExampleView extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        let fragment = gql`fragment Test on JCRNode {
            myprop:property(name:"myprop") {
                value
            }
        }`;

        // let query = gql`query GetNode($path:String!) {
        //     jcr {
        //         nodeByPath(path:$path) {
        //             uuid
        //             path
        //             ...Test
        //         }
        //     }
        // } ${fragment}`;
        //
        // let update = (proxy, mutationResult) => {
        //     let updatedPath = mutationResult.data.jcr.mutateNode.node.path;
        //
        //     let variables = {path:updatedPath};
        //     const data = proxy.readQuery({query, variables});
        //
        //     delete data.jcr.nodeByPath.myprop;
        //
        //     debugger;
        //
        //     proxy.writeQuery({query, variables, data});
        // }


        let frags = [{
            applyFor: "node",
            gql: fragment
        }];

        let RenderComponent = (props) => (<Table>
                <TableHeader displaySelectAll={false} >
                    <TableRow>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Value</TableHeaderColumn>
                        <TableHeaderColumn>Update</TableHeaderColumn>
                        <TableHeaderColumn>Delete</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false} selectable={false}>
                    {props.nodes ? props.nodes.map(node =>
                        <TableRow key={node.uuid}>
                            <TableRowColumn>{node.name}</TableRowColumn>
                            <TableRowColumn>{node.myprop.value}</TableRowColumn>
                            <TableRowColumn><FlatButton label={"Update"} onClick={() => this.props.setPropertyMutation({
                                variables:{
                                    path:node.path,
                                    value:("test:"+new Date())
                                },
                                refetchQueries: ["NodesQuery"]
                                // update: update
                            })}/></TableRowColumn>
                            <TableRowColumn><FlatButton label={"Delete"} onClick={() => this.props.removeNodeMutation({
                                variables:{
                                    path:node.path,
                                },
                                refetchQueries: ["NodesQuery"]
                            })}/></TableRowColumn>
                        </TableRow>
                    ) : []}
                </TableBody>
            </Table>
        )

        return (
            <MuiThemeProvider muiTheme={muiTheme()}>
            <div>
            <FlatButton label="New" onClick={() => this.props.addNodeMutation({
                variables:{
                    name:("name-"+(new Date().getTime())),
                    value:("test:"+new Date())
                },
                refetchQueries: ["NodesQuery"]
            })} />

            <NodesTableData path={"/"} types={["nt:unstructured"]} fragments={frags} renderComponent={RenderComponent}/>
            </div></MuiThemeProvider>
        )
    }
}

const setProperty = gql`
    mutation setProperty($value:String,$path:String!) {
        jcr {
            mutateNode(pathOrId:$path) {
                mutateProperty(name:"myprop") {
                    setValue(value:$value)
                }
                node {
                    path
                }
            }
        }
    }
`;

const addNode = gql`
    mutation addNode($value:String, $name:String!) {
        jcr {
            addNode(parentPathOrId:"/",name:$name,primaryNodeType:"nt:unstructured") {
                mutation {
                    mutateProperty(name:"myprop") {
                        setValue(value:$value)
                    }
                }
            }
        }
    }
`;

const removeNode = gql`
    mutation removeNode($path:String!) {
        jcr {
            deleteNode(pathOrId:$path) 
        }
    }
`;

class MutationExample extends React.Component {

    constructor(props) {
        super(props);
        this.Component =
            graphql(setProperty, { name: 'setPropertyMutation' })(
                graphql(addNode, { name: 'addNodeMutation' })(
                    graphql(removeNode, { name: 'removeNodeMutation' })(MutationExampleView)));
    }

    render() {
        let Component = this.Component;
        return (<ApolloProvider client={client}><Component/></ApolloProvider>)
    }
}

export { MutationExample};