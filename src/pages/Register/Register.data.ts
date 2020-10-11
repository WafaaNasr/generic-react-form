import { FormProps } from '../../components/organisms/Form/Form.types';
import { IRegisterFormFields, RegisterFormFields, registerFormValidationSchema } from './RegisterFormFields';

export const formDataWithInitial: FormProps<IRegisterFormFields> = {
    formFields: [
        {
            placeholder: 'First name',
            type: 'string',
            label: 'First name',
            name: 'firstName',
            onTextChange: null,
        },
        {
            placeholder: 'Last name',
            type: 'string',
            label: 'Last Name',
            name: 'lastName',
            onTextChange: null,
        },
        {
            placeholder: 'abc@domain.com',
            type: 'email',
            label: 'E-mail',
            name: 'email',
            onTextChange: null,
        },
        {
            placeholder: '',
            type: 'password',
            label: 'Password',
            name: 'password',
            onTextChange: null,
        },
        {
            placeholder: '',
            type: 'password',
            label: 'Confirm Password',
            name: 'passwordConfirmation',
            onTextChange: null,
        },
    ],
    submitBtnLabel: 'Register',
    formDefaultValues: new RegisterFormFields(
        'Wafaa',
        'Nasr',
        'Wafaa@abc.de',
        'veryStrongP@ssword',
        'veryStrongP@ssword',
    ),
    validationSchema: registerFormValidationSchema,
    onSubmitCb: () => console.log('form submitted'),
    successMessage: 'Register Submitted Successfully!!!',
    errorMessage: 'Sorry, error occurred!.... Please try again',
};

export const formDataWithOutInitial: FormProps<IRegisterFormFields> = {
    formFields: [
        {
            placeholder: 'First name',
            type: 'string',
            label: 'First name',
            name: 'firstName',
            onTextChange: null,
        },
        {
            placeholder: 'Last name',
            type: 'string',
            label: 'Last Name',
            name: 'lastName',
            onTextChange: null,
        },
        {
            placeholder: 'abc@domain.com',
            type: 'email',
            label: 'E-mail',
            name: 'email',
            onTextChange: null,
        },
        {
            placeholder: '',
            type: 'password',
            label: 'Password',
            name: 'password',
            onTextChange: null,
        },
        {
            placeholder: '',
            type: 'password',
            label: 'Confirm Password',
            name: 'passwordConfirmation',
            onTextChange: null,
        },
    ],
    submitBtnLabel: 'Register',
    formDefaultValues: new RegisterFormFields('', '', '', '', ''),
    validationSchema: registerFormValidationSchema,
    validationMode: 'all',
    onSubmitCb: () => console.log('form submitted'),
    successMessage: 'Register Submitted Successfully!!!',
    errorMessage: 'Sorry, error occurred!.... Please try again',
};
