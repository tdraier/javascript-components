import {Button} from '@jahia/ds-mui-theme';
import React from 'react';
import {I18n} from 'react-i18next';
import {toIconComponent} from './toIconComponent';

let buttonRenderer = (buttonProps, showIcon, propagateEvent) => ({context}) => (
    <I18n ns={context.buttonLabelNamespace}>
        {t => (
            <Button data-sel-role={context.key}
                    icon={showIcon && context.buttonIcon && toIconComponent(context.buttonIcon)}
                    onClick={e => {
                        if (!propagateEvent) {
                            e.stopPropagation();
                        }

                        context.onClick(context, e);
                    }}
                    {...buttonProps}
            >
                <span dangerouslySetInnerHTML={{__html: t(context.buttonLabel, context.buttonLabelParams)}}/>
            </Button>
        )}
    </I18n>
);

export {buttonRenderer};
