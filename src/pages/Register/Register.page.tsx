import React, { useCallback, useState } from 'react';

import { ReturnedReactComponent } from '../../common.types';

import { RegisterContainer, RegisterDataWrapper, DataWrapper } from './Register.styles';
import { RegisterFormProps } from './Register.types';
import { IRegisterFormFields } from './RegisterFormFields';
import Form from '../../components/organisms/Form/Form.component';
import { PostDataResult } from '../../hooks/useGenericForm/useGenericForm.types';

const Register = ({ registerFormFields }: RegisterFormProps): ReturnedReactComponent => {
    const [formValues, setFormValues] = useState<FormData>();

    const postData = (data: FormData): Promise<PostDataResult<FormData>> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`${data} saved.`);
                setFormValues(data);
                resolve({ success: true, formData: data });
            }, 3000);
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

            {formValues && (
                <RegisterDataWrapper>
                    {Object.entries(formValues as any).map((field, index) => (
                        <DataWrapper key={index}>{`${field[0]} : ${field[1]}`}</DataWrapper>
                    ))}
                </RegisterDataWrapper>
            )}
        </RegisterContainer>
    );
};

export default Register;
