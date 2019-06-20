import React from 'react';
import PropTypes from 'prop-types';
import {Picker} from '@jahia/react-apollo';
import {PickerTreeViewMaterial} from '../../picker/PickerTreeViewMaterial';

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
