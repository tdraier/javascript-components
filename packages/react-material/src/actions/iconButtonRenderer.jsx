import {IconButton} from '@jahia/ds-mui-theme';
import {Tooltip} from '@material-ui/core';
import {I18n} from 'react-i18next';
import React from 'react';
import {toIconComponent} from './toIconComponent';

let iconButtonRenderer = (buttonProps, iconProps, propagateEvent) => ({context}) => {
    let button = (
        <IconButton data-sel-role={context.key}
                    icon={toIconComponent(context.buttonIcon, iconProps)}
                    onClick={e => {
                        if (!propagateEvent) {
                            e.stopPropagation();
                        }

                        context.onClick(context, e);
                    }}
                    {...buttonProps}
        />
    );

    if (context.buttonLabel) {
        return (
            <I18n ns={context.buttonLabelNamespace}>
                {t => <Tooltip title={t(context.buttonLabel, context.buttonLabelParams)}>{button}</Tooltip>}
            </I18n>
        );
    }

    return button;
};

export {iconButtonRenderer};
