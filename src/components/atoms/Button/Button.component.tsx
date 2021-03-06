import React, { FC } from 'react';
import { ReturnedReactComponent } from '../../../common.types';

import { ButtonContainer, ButtonWrapper } from './Button.styles';
import { ButtonProps } from './Button.types';

const Button = ({ children, onClick, parentHasErrors = false, ...otherProps }: ButtonProps): ReturnedReactComponent => {
    if (!children) return null;
    return (
        <ButtonContainer>
            <ButtonWrapper onClick={onClick} disabled={parentHasErrors} {...otherProps}>
                {children}
            </ButtonWrapper>
        </ButtonContainer>
    );
};

export default Button;
