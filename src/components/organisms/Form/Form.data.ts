import { FormProps } from "./Form.types";


export const formData: FormProps = {
    textFields: [
        {
            key: 'username',
            placeholder: 'Username',
            type: 'string',
            label: 'Username',
            name: 'username',
            rules: {},
            onTextChange: () => { }
        },
        {
            key: 'password',
            placeholder: 'Username',
            type: 'password',
            label: 'Password',
            name: 'password',
            rules: {},
            onTextChange: () => { }
        },
    ]

}