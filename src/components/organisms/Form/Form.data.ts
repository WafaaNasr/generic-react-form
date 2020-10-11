import { FormProps } from './Form.types';
import * as yup from 'yup';

interface ISignInFormFields {
    username: string;
    password: string;
}

class SignInFormFields implements ISignInFormFields {
    constructor(public username: string, public password: string) {
        return { username, password };
    }
}

export const signInFormValidationSchema = (() =>
    yup.object().shape({
        username: yup.string().required('First name is required'),
        password: yup.string().required('Password is required'),
    }))();

export const formData: FormProps<ISignInFormFields> = {
    formFields: [
        {
            placeholder: 'Username',
            type: 'string',
            label: 'Username',
            name: 'username',
            onTextChange: null,
        },
        {
            placeholder: 'Username',
            type: 'password',
            label: 'Password',
            name: 'password',
            onTextChange: null,
        },
    ],
    submitBtnLabel: 'Submit',
    validationSchema: signInFormValidationSchema,
    formDefaultValues: new SignInFormFields('', ''),
    onSubmitCb: () => {
        debugger;
        console.log('Submitted');
    },
};
