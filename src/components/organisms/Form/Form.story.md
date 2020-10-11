## Form

Displaying Form

### Props

| Name                       | Type    | Required | Default | Allowed values           |
| -------------------------- | ------- | -------- | ------- | ------------------------ |
| formFields                 | TextFieldProps[]  | yes    |        |                      |
| submitBtnLabel             | string  | yes    |                   | string                      |
| successMessage             | string  | yes    |        | string                      |
| onSubmitCb                 | Function | yes|              |  (formData:T) => Promise or  void   |
| validationSchema           | ObjectSchema  | yes     |        |                       |
| formDefaultValues          | T | yes |         |                     |
| errorMessage               | string  | no     |        | string                      |

### How to import

```jsx
import Form from 'generic-react-form/components/organisms/Form/Form';
```

### How to use


```jsx
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

const signInFormValidationSchema = (() =>
    yup.object().shape({
        username: yup.string().required('First name is required') 
        .matches(/^Wooga|wooga/, 'Username must start with Wooga'),
        password: yup.string().required('Password is required'),
    }))();

 const formData: FormProps<ISignInFormFields> = {
    formFields: [
        {
            placeholder: 'Username',
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

  <Form<ISignInFormFields> {...formData} />
```
