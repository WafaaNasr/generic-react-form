import { FormProps } from './Form.types';
import * as yup from 'yup';

export interface ISignInFormFields {
    username: string;
    password: string;
}

class SignInFormFields implements ISignInFormFields {
    constructor (public username: string, public password: string) {
        return { username, password };
    }
}

export const signInFormValidationSchema = (() =>
    yup.object().shape({
        username: yup.string().required('First name is required').matches(/^Wooga|wooga/, 'Department must start with Wooga'),
        password: yup.string().required('Password is required'),
    }))();

export const formData: FormProps<ISignInFormFields> = {
    formFields: [
        {
            placeholder: 'Wooga.username',
            type: 'string',
            label: 'Username',
            name: 'username',
        },
        {
            placeholder: 'Username',
            type: 'password',
            label: 'Password',
            name: 'password',
        },
    ],
    submitBtnLabel: 'Sign in',
    validationSchema: signInFormValidationSchema,
    formDefaultValues: new SignInFormFields('', ''),
    onSubmitCb: (formData) => {
        console.log('Submitted', formData);
    },
    successMessage: 'Form Submitted Successfully!!!',
    errorMessage: 'Sorry, error occurred!.... Please try again',
};
