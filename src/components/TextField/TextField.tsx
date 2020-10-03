import React from 'react';
import { TextFieldWrapper } from './TextField.styles';


const TextField = () => {
    return (
        <TextFieldWrapper>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
        </TextFieldWrapper>
    );
};

export default TextField;