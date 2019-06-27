import {Button} from '@jahia/design-system-kit';
import React from 'react';
import PropTypes from 'prop-types';
import {I18n} from 'react-i18next';
import {toIconComponent} from './toIconComponent';

export const buttonRenderer = (buttonProps, showIcon, propagateEvent, upperCaseLabel) => {
    const Render = ({context}) => (
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
                    {/* eslint-disable-next-line react/no-danger */}
                    <span dangerouslySetInnerHTML={{
                        __html: upperCaseLabel ?
                            t(context.buttonLabel, context.buttonLabelParams).toUpperCase()
                            : t(context.buttonLabel, context.buttonLabelParams)
                    }}/>
                </Button>
            )}
        </I18n>
    );

    Render.propTypes = {
        context: PropTypes.object.isRequired
    };

    return Render;
};
