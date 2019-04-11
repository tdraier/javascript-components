import React from 'react';
import PropTypes from 'prop-types';
import {getFileType, isBrowserImage, isPDF} from '../../utils';
import classNames from 'classnames';
import {Paper, withStyles} from '@material-ui/core';
import {previewQuery} from './ContentPreview.gql-queries';
import {lodash as _} from 'lodash';
import {Query, compose} from 'react-apollo';
import DocumentViewer from './DocumentViewer';
import PDFViewer from './PDFViewer';
import ImageViewer from './ImageViewer';

const styles = theme => ({
    contentContainer: {
        padding: (theme.spacing.unit * 3) + 'px'
    },
    contentPaper: {
        width: '100%',
        height: '100%',
        display: 'flex'
    },
    contentIframe: {
        border: 'none',
        width: '100%'
    },
    previewContainer: {
        flex: '1 1 0%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 0,
        backgroundColor: theme.palette.background.default
    }
});

class Preview extends React.Component {
    iframeLoadContent(assets, displayValue, element) {
        if (element) {
            let frameDoc = element.document;
            if (element.contentWindow) {
                frameDoc = element.contentWindow.document;
            }
            frameDoc.body.innerHTML = displayValue;
            frameDoc.body.style = '';
            if (assets !== null) {
                let iframeHeadEl = frameDoc.getElementsByTagName('head')[0];
                if (!iframeHeadEl) {
                    frameDoc.getElementsByTagName('html')[0].insertBefore(frameDoc.createElement('head'), frameDoc.body);
                    iframeHeadEl = frameDoc.getElementsByTagName('head')[0];
                }
                assets.forEach(asset => {
                    let linkEl = document.createElement('link');
                    linkEl.setAttribute('rel', 'stylesheet');
                    linkEl.setAttribute('type', 'text/css');
                    linkEl.setAttribute('href', asset.key);
                    iframeHeadEl.appendChild(linkEl);
                });
            }
        }
    }

    render() {
        const {path, dxContext, classes, t, previewMode, fullScreen, language} = this.props;

        const queryVariables = {
            path: path,
            templateType: 'html',
            view: 'cm',
            contextConfiguration: 'preview',
            language: language,
            workspace: previewMode.toUpperCase()
        };

        return (
            <Query query={previewQuery}
                   errorPolicy="all"
                   variables={queryVariables}
            >
                {({loading, data, refetch}) => {
                    this.refetchPreview = refetch;

                    if (!loading) {
                        if (!_.isEmpty(data)) {
                            const selectedData = data.jcr;

                            let displayValue = selectedData && selectedData.nodeByPath.renderedContent ? selectedData.nodeByPath.renderedContent.output : '';
                            if (displayValue === '') {
                                displayValue = t('label.contentManager.contentPreview.noViewAvailable');
                            }

                            // If node type is "jnt:file" use specific viewer
                            if (selectedData && selectedData.nodeByPath.isFile) {
                                let file = dxContext.contextPath + '/files/' + previewMode + selectedData.nodeByPath.path + '?lastModified=' + selectedData.nodeByPath.lastModified.value;

                                if (isPDF(selectedData.nodeByPath.path)) {
                                    return (
                                        <div className={classes.previewContainer}>
                                            <PDFViewer file={file} fullScreen={fullScreen}/>
                                        </div>
                                    );
                                }

                                if (isBrowserImage(selectedData.nodeByPath.path)) {
                                    return (
                                        <div className={classNames(classes.previewContainer, classes.mediaContainer)}>
                                            <ImageViewer file={file} fullScreen={fullScreen}/>
                                        </div>
                                    );
                                }

                                const type = getFileType(selectedData.nodeByPath.path);
                                const isMedia = (type === 'avi' || type === 'mp4' || type === 'video');
                                return (
                                    <div className={classNames(classes.previewContainer, isMedia && classes.mediaContainer)}>
                                        <DocumentViewer file={file} type={type} fullScreen={fullScreen}/>
                                    </div>
                                );
                            }

                            const assets = selectedData && selectedData.nodeByPath.renderedContent ? selectedData.nodeByPath.renderedContent.staticAssets : [];

                            return (
                                <div className={classNames(classes.previewContainer, classes.contentContainer)}>
                                    <Paper elevation={1} classes={{root: classes.contentPaper}}>
                                        <iframe ref={element => this.iframeLoadContent(assets, displayValue, element)}
                                                className={classes.contentIframe}
                                        />
                                    </Paper>
                                </div>
                            );
                        }
                    }
                    return null;
                }}
            </Query>
        );
    }
}

Preview.propTypes = {
    classes: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired,
    dxContext: PropTypes.object.isRequired,
    previewMode: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    fullScreen: PropTypes.bool
};

export const PreviewComponent = compose(
    withStyles(styles)
)(Preview);
