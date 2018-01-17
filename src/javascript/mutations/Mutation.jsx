import React, {Component} from 'react';
import {ApolloProvider, graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {client} from "@jahia/apollo-dx";
import {withNodesFromPath} from "../nodesTable/withNodesFromPath";
import {Button, Table, TableBody, TableCell, TableHead, TableRow} from 'material-ui';


class MutationExampleView extends Component {

    constructor(props) {
        super(props);

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

        this.Component = withNodesFromPath([{
            applyFor: "node",
            gql: gql`fragment Test on JCRNode {
            myprop:property(name:"myprop") {
                value
            }
        }`
        }])(RenderComponent);
    }


    render() {
        let Component = this.Component;
        return (
            <div>
            <Button onClick={() => this.props.addNodeMutation({
                variables:{
                    name:("name-"+(new Date().getTime())),
                    value:("test:"+new Date())
                },
                refetchQueries: ["NodesQuery"]
            })} >New</Button>

            <Component path={"/"} types={["nt:unstructured"]}/>
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