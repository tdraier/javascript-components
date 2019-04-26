import React from 'react';
import PropTypes from 'prop-types';
import {AppBar, Grid, Toolbar, withStyles} from '@material-ui/core';
import {Typography, IconButton} from '@jahia/ds-mui-theme';
import {lodash as _} from 'lodash';
import {compose} from 'react-apollo';
import NodeTree from "./NodeTree";

const styles = theme => ({
    listContainer: {
        flex: '1 0 0%',
        overflow: 'auto',
        width: theme.contentManager.treeDrawerWidth + 'px'
    },
    list: {
        width: 'fit-content',
        minWidth: '100%'
    },
    listItem: {
    }
});

class NodeTrees extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            lang, siteKey, path, openPaths, setPath, openPath,
            closePath, classes, nodeTreeConfigs, setRefetch
        } = this.props;
        const rootPath = '/sites/' + siteKey;
        const usedPath = path.startsWith(rootPath) ? path : rootPath;

        return (
            <React.Fragment>
                <div className={classes.listContainer}>
                    <div className={classes.list}>
                        {_.map(nodeTreeConfigs, nodeTreeConfig => {
                            return (
                                <NodeTree key={nodeTreeConfig.key}
                                          siteKey={siteKey}
                                          path={usedPath}
                                          rootPath={rootPath + nodeTreeConfig.rootPath}
                                          openPaths={openPaths}
                                          selectableTypes={nodeTreeConfig.selectableTypes}
                                          lang={lang}
                                          dataCmRole={nodeTreeConfig.key}
                                          handleOpen={(path, open) => (open ? openPath(path) : closePath(path))}
                                          handleSelect={path => setPath(path, {sub: false})}
                                          openableTypes={nodeTreeConfig.openableTypes}
                                          rootLabel={nodeTreeConfig.rootLabel}
                                          classes={{
                                              listItem: classes.listItem
                                          }}
                                          setRefetch={refetchingData => setRefetch ? setRefetch(nodeTreeConfig.key, refetchingData) : undefined}
                                />
                            );
                        })}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

NodeTrees.propTypes = {
    classes: PropTypes.object.isRequired,
    closePath: PropTypes.func.isRequired,
    closeTree: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    lang: PropTypes.string.isRequired,
    openPath: PropTypes.func.isRequired,
    openPaths: PropTypes.arrayOf(PropTypes.string).isRequired,
    path: PropTypes.string.isRequired,
    setPath: PropTypes.func.isRequired,
    siteKey: PropTypes.string.isRequired,
    nodeTreeConfigs: PropTypes.arrayOf(PropTypes.object).isRequired,
    setRefetch: PropTypes.func
};

NodeTrees = compose(
    withStyles(styles, {withTheme: true})
)(NodeTrees);

export {NodeTrees}