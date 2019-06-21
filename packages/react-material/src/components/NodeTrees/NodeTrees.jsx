import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core';
import {compose} from 'react-apollo';

const styles = () => ({
    listContainer: {
        flex: '1 0 0%',
        overflow: 'auto',
        width: '260px'
    },
    list: {
        width: 'fit-content',
        minWidth: '100%'
    }
});

const NodeTreesCmp = ({path, siteKey, classes, nodeTreeConfigs, setRefetch, children}) => {
    const rootPath = '/sites/' + siteKey;
    const usedPath = path.startsWith(rootPath) ? path : rootPath;

    return (
        <div className={classes.listContainer}>
            <div className={classes.list}>
                {nodeTreeConfigs.map(nodeTreeConfig => (
                    <React.Fragment key={nodeTreeConfig.key}>
                        {children({
                            path: usedPath,
                            rootPath: rootPath + nodeTreeConfig.rootPath,
                            selectableTypes: nodeTreeConfig.selectableTypes,
                            dataCmRole: nodeTreeConfig.key,
                            openableTypes: nodeTreeConfig.openableTypes,
                            rootLabel: nodeTreeConfig.rootLabel,
                            setRefetch: refetchingData => setRefetch ? setRefetch(nodeTreeConfig.key, refetchingData) : undefined
                        })}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

NodeTreesCmp.defaultProps = {
    setRefetch: null
};

NodeTreesCmp.propTypes = {
    classes: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    siteKey: PropTypes.string.isRequired,
    nodeTreeConfigs: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired,
    setRefetch: PropTypes.func
};

export const NodeTrees = compose(
    withStyles(styles, {withTheme: true})
)(NodeTreesCmp);
