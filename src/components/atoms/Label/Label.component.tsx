import React, { FC } from 'react';

import { ReturnedReactComponent } from '../../../common.types';
import { LabelProps } from './Label.types';
import { LabelContainer, LabelWrapper } from './Label.styles';

const Label = ({ children, ...otherProps }: LabelProps): ReturnedReactComponent => {
    if (!children) return null;

    return (
        <LabelContainer>
            <LabelWrapper {...otherProps}>{children}</LabelWrapper>
        </LabelContainer>
    );
};

export default Label;
