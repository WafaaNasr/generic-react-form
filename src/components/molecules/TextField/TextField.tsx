import React from 'react';
import Label from '../../atoms/Label/Label';

import {
    TextFieldContainer,
    TextFieldWrapper
} from './TextField.styles';


const TextField = () => {

    return (
        <TextFieldContainer>
            {/* TODO add for or otherProps */}
            <Label>Name</Label>
            <TextFieldWrapper name="name" type="text" />
        </TextFieldContainer>
    );
};

export default TextField;