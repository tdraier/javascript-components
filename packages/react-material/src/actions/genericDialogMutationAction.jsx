import React from "react";
import {compose, Mutation} from "react-apollo";
import {componentRendererAction} from "./componentRendererAction";
import {composeActions} from "./composeActions";
import {ProgressOverlay} from "../layout/ProgressOverlay";
import {withNotifications} from "../notification/NotificationProvider";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,} from "@material-ui/core";
import {translate} from "react-i18next";

class GenericDialogMutation extends React.Component {

    onCompleted() {
        let {notificationContext, dialogData:{confirmMessage}} = this.props;
        notificationContext.notify(confirmMessage);
        this.props.onClose();
    }

    onError(ex) {
        let {t, notificationContext} = this.props;
        console.log(ex);
        let mess = ex.message;
        if (ex.graphQLErrors && ex.graphQLErrors.length > 0) {
            let graphQLError = ex.graphQLErrors[0];
            if (graphQLError.errorType === "GqlLocalSiteException") {
                mess = t("label.errors."+graphQLError.extensions.type, graphQLError.extensions);
            }
        }
        notificationContext.notify(mess, ['closeButton', 'noAutomaticClose']);
    }

    render() {
        const {t, dialogData:{mutation, mutationParams, title, description, beforeMutation}, onClose, open} = this.props;
        return (
            <Mutation mutation={mutation} onCompleted={() => this.onCompleted()} onError={(e)=> this.onError(e)}>
                {(mutationCall, {called, loading, data, error}) => <React.Fragment>
                    {loading &&  <ProgressOverlay/>}
                    <Dialog open={open} onClose={onClose} onExited={onClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">{description}</DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={onClose} color="primary" data-lsm-role="cancel-button">{t('label.cancel')}</Button>
                            <Button onClick={() => {beforeMutation && beforeMutation(); return mutationCall(mutationParams)}} color="primary" data-lsm-role="confirm-button">{t('label.confirm')}</Button>
                        </DialogActions>
                    </Dialog>
                </React.Fragment>}
            </Mutation>
        )
    }
}

GenericDialogMutation = compose(
    withNotifications(),
    translate()
)(GenericDialogMutation);

let genericDialogMutationAction = composeActions(componentRendererAction, {

    init(context) {
        context.openDialogMutation = (dialogData) => {
            if (context.componentId) {
                context.setComponentProps({open: true});
            } else {
                context.renderComponent(<GenericDialogMutation dialogData={dialogData} open={true} onClose={() => {
                    context.setComponentProps({open: false});
                    if (context.onClose) {
                        context.onClose();
                    }
                }}/>);
            }
            if (context.onOpen) {
                context.onOpen();
            }
        }
    },

});

export { genericDialogMutationAction};