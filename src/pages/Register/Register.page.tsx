import React, { useCallback } from 'react';

import { ReturnedReactComponent } from '../../common.types';

import { RegisterContainer } from './Register.styles';
import { RegisterFormProps } from './Register.types';
import { IRegisterFormFields, RegisterFormFields } from './RegisterFormFields';
import Form from '../../components/organisms/Form/Form.component';
import { PostDataResult } from '../../hooks/useGenericForm/useGenericForm.types';

const Register = ({ registerFormFields }: RegisterFormProps): ReturnedReactComponent => {
    //TODO Remove from here
    const postData = (data: FormData): Promise<PostDataResult<FormData>> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`${data} saved.`);
                resolve({ success: true, formData: data });
            }, 5000);
        });
    };

    const submitForm = useCallback(async (data: FormData): Promise<void> => {
        console.log('Submission starting', data);
        const result = await postData(data);
        console.log('Submitting complete', result);
    }, []);

    return (
        <RegisterContainer>
            <Form<IRegisterFormFields> {...registerFormFields} onSubmitCb={submitForm} />
        </RegisterContainer>
    );
};

export default Register;
