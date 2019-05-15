import React from 'react';
import PropTypes from 'prop-types';
import {Picker} from '@jahia/react-apollo';
import {PredefinedFragments} from '@jahia/apollo-dx';
import gql from 'graphql-tag';
import {PickerTreeViewMaterial} from '../../picker/PickerTreeViewMaterial';

const PickerItemsFragment = {
    mixinTypes: {
        applyFor: 'node',
        variables: {
            lang: 'String!'
        },
        gql: gql`fragment MixinTypes on JCRNode {
            mixinTypes {
                name
            }
        }`
    },
    isPublished: {
        applyFor: 'node',
        variables: {
            lang: 'String!'
        },
        gql: gql`fragment PublicationStatus on JCRNode {
            publicationStatus: aggregatedPublicationInfo(language: $lang) {
                publicationStatus
            }
        }`
    },
    primaryNodeType: {
        applyFor: 'node',
        gql: gql`fragment PrimaryNodeTypeName on JCRNode {
            primaryNodeType {
                name
            }
        }`
    }
};

class NodeTree extends React.Component {
    render() {
        let {rootPath, path, openPaths, handleOpen, handleSelect, lang, openableTypes, selectableTypes, rootLabel, setRefetch, dataCmRole, classes} = this.props;
        return (
            <Picker
                rootPaths={[rootPath]}
                openPaths={openPaths}
                openableTypes={openableTypes}
                selectableTypes={selectableTypes}
                queryVariables={{lang: lang}}
                selectedPaths={[path]}
                openSelection={false}
                setRefetch={setRefetch}
                fragments={[PickerItemsFragment.mixinTypes, PickerItemsFragment.primaryNodeType, PickerItemsFragment.isPublished, PredefinedFragments.displayName]}
                onOpenItem={(path, open) => handleOpen(path, open)}
                onSelectItem={path => handleSelect(path)}
            >
                {({handleSelect, ...others}) => (
                    <PickerTreeViewMaterial {...others} dataCmRole={dataCmRole} rootLabel={rootLabel} classes={classes}/>
                )}
            </Picker>
        );
    }
}

NodeTree.defaultProps = {
    classes: {}
};

NodeTree.propTypes = {
    classes: PropTypes.object,
    dataCmRole: PropTypes.string.isRequired,
    handleOpen: PropTypes.func.isRequired,
    handleSelect: PropTypes.func.isRequired,
    lang: PropTypes.string.isRequired,
    openPaths: PropTypes.arrayOf(PropTypes.string).isRequired,
    openableTypes: PropTypes.array.isRequired,
    path: PropTypes.string.isRequired,
    rootLabel: PropTypes.string.isRequired,
    rootPath: PropTypes.string.isRequired,
    selectableTypes: PropTypes.array.isRequired,
    setRefetch: PropTypes.func.isRequired
};

export default NodeTree;
