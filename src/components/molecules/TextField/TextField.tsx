import React from 'react';

import Label from '../../atoms/Label/Label';
import { ReturnedReactComponent } from '../../../common.types';
import { TextFieldProps } from './TextField.types';
import {
    TextFieldContainer,
    TextFieldWrapper
} from './TextField.styles';


const TextField = ({ name, type, label, onTextChange, register, rules, error = {}, ...otherProps }: TextFieldProps): ReturnedReactComponent => {

    if (!name || !label || !type || !onTextChange) {
        return null;
    }
    console.log(error)
    return (
        <TextFieldContainer>
            <Label htmlFor={name}>{label}</Label>
            <TextFieldWrapper
                id={name}
                key={name}
                name={name}
                type={type}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onTextChange(e)}
                ref={register(rules)}
                {...otherProps}
            />
            { error && <div>{error.message}</div>}
        </TextFieldContainer>
    );
};

export default TextField;