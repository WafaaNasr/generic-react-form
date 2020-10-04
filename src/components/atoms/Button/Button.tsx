import React, { FC } from 'react';
import { ReturnedReactComponent } from '../../../common.types';

import { ButtonContainer, ButtonWrapper } from './Button.styles';
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = ({ children, onClick, ...otherProps }): ReturnedReactComponent => {
    if (!children)
        return null;
    return (
        <ButtonContainer>
            <ButtonWrapper
                onClick={onClick}
                {...otherProps}>
                {children}
            </ButtonWrapper>
        </ButtonContainer>
    );
};

export default Button;