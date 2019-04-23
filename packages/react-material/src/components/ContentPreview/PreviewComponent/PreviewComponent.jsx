import React from 'react';
import PropTypes from 'prop-types';
import {getFileType, isBrowserImage, isPDF} from '../../../utils';
import classNames from 'classnames';
import {Paper, withStyles} from '@material-ui/core';
import DocumentViewer from './DocumentViewer';
import PDFViewer from './PDFViewer';
import ImageViewer from './ImageViewer';
import {DxContext} from './../../DxContext';

class PreviewComponent extends React.Component {
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
        let {classes, t, data, workspace, fullScreen} = this.props;
        let displayValue = data && data.nodeByPath.renderedContent ? data.nodeByPath.renderedContent.output : '';
        if (displayValue === '') {
            displayValue = t('label.contentManager.contentPreview.noViewAvailable');
        }

        // If node type is "jnt:file" use specific viewer
        if (data && data.nodeByPath.isFile) {
            return (<DxContext.Consumer>
                {dxContext => {
                    let file = dxContext.contextPath + '/files/' + (workspace === 'edit' ? 'default' : 'live') + data.nodeByPath.path + '?lastModified=' + data.nodeByPath.lastModified.value;
                    if (isPDF(data.nodeByPath.path)) {
                        return (
                            <div className={classes.previewContainer}>
                                <PDFViewer file={file} fullScreen={fullScreen}/>
                            </div>
                        );
                    }

                    if (isBrowserImage(data.nodeByPath.path)) {
                        return (
                            <div className={classNames(classes.previewContainer, classes.mediaContainer)}>
                                <ImageViewer file={file} fullScreen={fullScreen}/>
                            </div>
                        );
                    }

                    const type = getFileType(data.nodeByPath.path);
                    const isMedia = (type === 'avi' || type === 'mp4' || type === 'video');
                    return (
                        <div className={classNames(classes.previewContainer, isMedia && classes.mediaContainer)}>
                            <DocumentViewer file={file} type={type} fullScreen={fullScreen}/>
                        </div>
                    );
                }}
            </DxContext.Consumer>);
        }

        const assets = data && data.nodeByPath.renderedContent ? data.nodeByPath.renderedContent.staticAssets : [];
        return (
            <div className={classNames(classes.previewContainer, classes.contentContainer)}>
                <Paper elevation={1} classes={{root: classes.contentPaper}}>
                    <iframe data-sel-role="preview-frame" ref={element => this.iframeLoadContent(assets, displayValue, element)}
                            className={classes.contentIframe}/>
                </Paper>
            </div>
        );
    }
}

PreviewComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    workspace: PropTypes.string.isRequired,
    fullScreen: PropTypes.bool
};

export default PreviewComponent;