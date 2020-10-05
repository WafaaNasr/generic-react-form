import React from 'react';

import Label from '../../atoms/Label/Label';
import { ReturnedReactComponent } from '../../../common.types';
import { TextFieldProps } from './TextField.types';
import {
    TextFieldContainer,
    TextFieldWrapper
} from './TextField.styles';


const TextField = ({ name, type, label, onTextChange, register, rules = {}, ...otherProps }: TextFieldProps): ReturnedReactComponent => {

    if (!name || !label || !type  || !onTextChange) {
        return null;
    }
    return (
        <TextFieldContainer>
            <Label htmlFor={name}>{label}</Label>
            <TextFieldWrapper
                id={name}
                key={name}
                name={name}
                type={type}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onTextChange(e)}
                ref={register}
                {...otherProps}
            />
        </TextFieldContainer>
    );
};

export default TextField;