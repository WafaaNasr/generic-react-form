import { FormProps } from './Form.types';

export const formData: FormProps = {
    textFields: [
        {
            key: 'username',
            placeholder: 'Username',
            type: 'string',
            label: 'Username',
            name: 'username',
            rules: { required: 'Please enter username' },
            onTextChange: null,
        },
        {
            key: 'password',
            placeholder: 'Username',
            type: 'password',
            label: 'Password',
            name: 'password',
            rules: { required: 'Please enter password' },
            onTextChange: null,
        },
    ],
};
