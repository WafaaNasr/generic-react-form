## Register

Displaying Register

### Props

| Name                       | Type    | Required | Default | Allowed values           |
| -------------------------- | ------- | -------- | ------- | ------------------------ |
| registerFormFields                 | FormProps of IRegisterFormFields | yes    |        |                      |

### How to import

```jsx
import Register from 'generic-react-form/pages/Register/Register';
```

### How to use


```jsx
 interface IRegisterFormFields {
    department: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordConfirmation: string;
}

 class RegisterFormFields implements IRegisterFormFields {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string,
        public passwordConfirmation: string,
        public department: string,
    ) {
        return {
            firstName,
            lastName,
            email,
            password,
            passwordConfirmation,
            department,
        };
    }
}

 const registerFormValidationSchema = (() =>
    yup.object().shape({
        department: yup
            .string()
            .required('Department is required')
            .matches(/^Wooga|wooga/, 'Department must start with Wooga'),
        firstName: yup.string().required('First name is required'),
        lastName: yup.string().required('Last name is required'),
        email: yup.string().email().required('Email is required'),
        password: yup.string().required('Password is required'),
        passwordConfirmation: yup
            .string()
            .required('Confirm Password is required')
            .test({
                name: 'password-confirmation',
                message: 'Passwords need to match',
                test: function () {
                    const { password, passwordConfirmation } = this.parent;
                    return password && passwordConfirmation === password;
                },
            }),
    }))();

  const formDataWithInitial: FormProps<IRegisterFormFields> = {
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

  <Register registerFormFields={formDataWithInitial} />
```
