import React from 'react';

import { ReturnedReactComponent } from '../../common.types';

import { RegisterContainer } from './Register.styles';
import { RegisterFormProps } from './Register.types';
import { IRegister } from './Register';
import Form from '../../components/organisms/Form/Form.component';

const Register = ({ registerFormFields }: RegisterFormProps): ReturnedReactComponent => {
    return (
        <RegisterContainer>
            <Form<IRegister> {...registerFormFields} />
        </RegisterContainer>
    );
};

export default Register;
