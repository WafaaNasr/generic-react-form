import React from 'react';

import Label from '../../atoms/Label/Label';

import { ReturnedReactComponent } from '../../../common.types';
import { TextFieldProps } from './TextField.types';
import { TextFieldContainer, TextFieldWrapper, ValidationMessage } from './TextField.styles';

const TextField = ({
    name,
    type,
    label,
    onTextChange,
    register,
    rules,
    error = {},
    ...otherProps
}: TextFieldProps): ReturnedReactComponent => {
    if (!name || !label || !type) {
        return null;
    }
    return (
        <TextFieldContainer>
            <Label htmlFor={name}>{label}</Label>
            <TextFieldWrapper
                {...otherProps}
                id={name}
                name={name}
                type={type}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onTextChange(e)}
                ref={register && register(rules)}
                error={error.message}
            />
            {error && error.message && <ValidationMessage>{error.message}</ValidationMessage>}
        </TextFieldContainer>
    );
};

export default TextField;
