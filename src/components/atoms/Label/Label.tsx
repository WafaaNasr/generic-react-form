import React from 'react';

import { LabelProps } from './Label.types';
import {
    LabelContainer,
    LabelWrapper
} from './Label.styles';

const Label = ({ children }: LabelProps) => {
    return <LabelContainer>
             <LabelWrapper>{children}</LabelWrapper>
        </LabelContainer>
};

export default Label;