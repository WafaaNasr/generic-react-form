import { FormProps } from '../../components/organisms/Form/Form.types';
import { IRegister, RegisterUser } from './Register';

export const formData: FormProps<IRegister> = {
    formFields: [
        {
            placeholder: 'First name',
            type: 'string',
            label: 'First name',
            name: 'firstName',
            rules: { required: 'First name is required' },
            onTextChange: null,
        },
        {
            placeholder: 'Last name',
            type: 'string',
            label: 'Last Name',
            name: 'lastNames',
            rules: { required: 'Last name is required' },
            onTextChange: null,
        },
        {
            placeholder: 'abc@domain.com',
            type: 'email',
            label: 'E-mail',
            name: 'email',
            rules: { required: 'E-mail is required' },
            onTextChange: null,
        },
        {
            placeholder: '',
            type: 'password',
            label: 'Password',
            name: 'password',
            rules: { required: 'Password name is required' },
            onTextChange: null,
        },
    ],
    submitBtnLabel: 'Register',
    formDefaultValues: new RegisterUser('Wafaa', 'Nasr', 'Wafaa@abc.de', 'veryStrongP@ssword'),
};
