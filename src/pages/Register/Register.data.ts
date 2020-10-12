import { FormProps } from '../../components/organisms/Form/Form.types';
import { IRegisterFormFields, RegisterFormFields, registerFormValidationSchema } from './RegisterFormFields';

export const formDataWithInitial: FormProps<IRegisterFormFields> = {
    formFields: [
        {
            placeholder: 'ex: Wooga.X',
            type: 'string',
            label: 'Department',
            name: 'department',
        },
        {
            placeholder: 'First name',
            type: 'string',
            label: 'First name',
            name: 'firstName',
        },
        {
            placeholder: 'Last name',
            type: 'string',
            label: 'Last Name',
            name: 'lastName',
        },
        {
            placeholder: 'abc@domain.com',
            type: 'email',
            label: 'E-mail',
            name: 'email',
        },
        {
            placeholder: '',
            type: 'password',
            label: 'Password',
            name: 'password',
        },
        {
            placeholder: '',
            type: 'password',
            label: 'Confirm Password',
            name: 'passwordConfirmation',
        },
    ],
    submitBtnLabel: 'Register',
    formDefaultValues: new RegisterFormFields(
        'Wafaa',
        'Nasr',
        'Wafaa@abc.de',
        'veryStrongP@ssword',
        'veryStrongP@ssword',
        'Wooga.Engineering',
    ),
    validationSchema: registerFormValidationSchema,
    onSubmitCb: () => console.log('form submitted'),
    successMessage: 'Register Submitted Successfully!!!',
    errorMessage: 'Sorry, error occurred!.... Please try again',
};

export const formDataWithOutInitial: FormProps<IRegisterFormFields> = {
    formFields: [
        {
            placeholder: 'ex: Wooga.X',
            type: 'string',
            label: 'Department',
            name: 'department',
        },
        {
            placeholder: 'First name',
            type: 'string',
            label: 'First name',
            name: 'firstName',
        },
        {
            placeholder: 'Last name',
            type: 'string',
            label: 'Last Name',
            name: 'lastName',
        },
        {
            placeholder: 'abc@domain.com',
            type: 'email',
            label: 'E-mail',
            name: 'email',
        },
        {
            placeholder: '',
            type: 'password',
            label: 'Password',
            name: 'password',
        },
        {
            placeholder: '',
            type: 'password',
            label: 'Confirm Password',
            name: 'passwordConfirmation',
        },
    ],
    submitBtnLabel: 'Register',
    formDefaultValues: new RegisterFormFields('', '', '', '', '', ''),
    validationSchema: registerFormValidationSchema,
    onSubmitCb: () => console.log('form submitted'),
    successMessage: 'Register Submitted Successfully!!!',
    errorMessage: 'Sorry, error occurred!.... Please try again',
};
