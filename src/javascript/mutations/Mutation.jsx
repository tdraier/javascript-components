import React, {Component} from 'react';
import {ApolloProvider, graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {client} from "@jahia/apollo-dx";
import {NodesTableData} from "../nodesTable/NodesTableData";
import {Button, Table, TableBody, TableCell, TableHead, TableRow} from 'material-ui';


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
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Value</TableCell>
                        <TableCell>Update</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.nodes ? props.nodes.map(node =>
                        <TableRow key={node.uuid}>
                            <TableCell>{node.name}</TableCell>
                            <TableCell>{node.myprop.value}</TableCell>
                            <TableCell><Button onClick={() => this.props.setPropertyMutation({
                                variables:{
                                    path:node.path,
                                    value:("test:"+new Date())
                                },
                                refetchQueries: ["NodesQuery"]
                                // update: update
                            })}>Update</Button></TableCell>
                            <TableCell><Button onClick={() => this.props.removeNodeMutation({
                                variables:{
                                    path:node.path,
                                },
                                refetchQueries: ["NodesQuery"]
                            })}>Delete</Button></TableCell>
                        </TableRow>
                    ) : []}
                </TableBody>
            </Table>
        );

        return (
            <div>
            <Button onClick={() => this.props.addNodeMutation({
                variables:{
                    name:("name-"+(new Date().getTime())),
                    value:("test:"+new Date())
                },
                refetchQueries: ["NodesQuery"]
            })} >New</Button>

            <NodesTableData path={"/"} types={["nt:unstructured"]} fragments={frags} renderComponent={RenderComponent}/>
            </div>
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
                mutateProperty(name:"myprop") {
                    setValue(value:$value)
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