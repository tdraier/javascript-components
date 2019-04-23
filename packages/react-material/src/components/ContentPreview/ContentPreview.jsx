import React from 'react';
import PropTypes from 'prop-types';
import {compose, Query} from 'react-apollo';
import {translate} from 'react-i18next';
import {lodash as _} from 'lodash';
import {withStyles} from '@material-ui/core';
import {previewQuery} from './ContentPreview.gql-queries';
import PreviewComponent from './PreviewComponent';

const styles = theme => ({
    root: {
        flex: '1 1 0%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        minHeight: 0
    },
    previewContainer: {
        flex: '1 1 0%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 0,
        backgroundColor: theme.palette.background.default
    },
    noPreviewContainer: {
        flex: '1 1 0%',
        backgroundColor: theme.palette.background.default,
        display: 'flex'
    },
    center: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        color: theme.palette.text.disabled
    },
    centerIcon: {
        margin: '8 auto'
    },
    mediaContainer: {
        backgroundColor: theme.palette.background.dark
    },
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
    }
});

class ContentPreview extends React.Component {
    constructor(props) {
        super(props);
        this.refetchPreview = () => {
        };
    }

    componentDidUpdate(prevProps) {
        // todo allow external refetch of the preview BACKLOG-10101
        /*if (this.props.selection && prevProps.selection && prevProps.selection.lastPublished !== this.props.selection.lastPublished) {
            this.refetchPreview();
        }*/
    }

    render() {
        const {classes, path, workspace, language, templateType, view, contextConfiguration, setRefetch} = this.props;

        const queryVariables = {
            path: path,
            templateType: templateType,
            view: view,
            contextConfiguration: contextConfiguration,
            language: language,
            workspace: workspace.toUpperCase()
        };

        return (
            <div className={classes.root}>
                <Query query={previewQuery}
                       errorPolicy="all"
                       variables={queryVariables}
                >
                    {({loading, data, refetch}) => {
                        if (setRefetch) {
                            setRefetch({
                                query: previewQuery,
                                queryParams: queryVariables,
                                refetch: refetch
                            });
                        }

                        if (!loading) {
                            if (!_.isEmpty(data)) {
                                return (
                                    <PreviewComponent data={data.jcr}
                                                      {...this.props}/>
                                );
                            }
                        }
                        return null;
                    }}
                </Query>
            </div>
        );
    }
}

ContentPreview.propTypes = {
    classes: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    workspace: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    templateType: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired,
    contextConfiguration: PropTypes.string.isRequired,
    fullScreen: PropTypes.bool.isRequired,
    setRefetch: PropTypes.func,
};

ContentPreview = compose(
    translate(),
    withStyles(styles)
)(ContentPreview);

export {ContentPreview}
