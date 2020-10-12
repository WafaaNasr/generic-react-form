


# Generic React Form
Shared library built on [Storybook](https://storybook.js.org/) to generate React generic forms supports schema-based form validation using [React-Form-Hook](https://react-hook-form.com/) with [Yup](https://medium.com/@rossbulat/introduction-to-yup-object-validation-in-react-9863af93dc0e)

## Installing
1. Clone the repo `git clone https://github.com/WafaaNasr/generic-react-form`
2. Run `yarn install`.
3. Run ` yarn start` which will start  `yarn start-storybook`

## Documentation
 - Library is built on Storybook and uses Atomic Design Principles [readmore](https://xd.adobe.com/ideas/process/ui-design/atomic-design-principles-methodology-101/)

 - Each component has two extra components
    - `xxx.story.tsx` for component's interaction 
    - `xxx.story.md` for component's documentation ex. `Register.story.md`![Alt text](images/Comonent-notes.png?raw=true "How To Use")

 -`<Form<T> />` the main organism's component, Generic accepts from the using component T type and other form props for more info please see `src/components/organisms/Form/Form.story.md`.

## How to use `<Form<T>/>`

Signin Form
````import { FormProps } from './Form.types';
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
  ````
