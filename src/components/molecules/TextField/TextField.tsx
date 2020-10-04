import React, { useState } from 'react';

import Label from '../../atoms/Label/Label';
import { ReturnedReactComponent } from '../../../common.types';
import { TextFieldProps } from './TextField.types';
import {
    TextFieldContainer,
    TextFieldWrapper
} from './TextField.styles';


const TextField = ({ name, type, label, onTextChange, ...otherProps }: TextFieldProps): ReturnedReactComponent => {

    if (!name || !label || !type || !onTextChange) {
        return null;
    }
    return (
        <TextFieldContainer>
            <Label key={name} name={name} htmlFor={name}>{label}</Label>
            <TextFieldWrapper
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onTextChange(e)}
                {...otherProps}
            />
        </TextFieldContainer>
    );
};

export default TextField;