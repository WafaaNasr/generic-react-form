import * as yup from 'yup';

export interface IRegisterFormFields {
    department:string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordConfirmation: string;
}

export class RegisterFormFields implements IRegisterFormFields {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string,
        public passwordConfirmation: string,
        public department: string
    ) {
        return {
            firstName,
            lastName,
            email,
            password,
            passwordConfirmation,
            department
        };
    }
 
}

export const registerFormValidationSchema = (() =>
    yup.object().shape({
        department:yup.string().required('Department is required').matches(/^Wooga|wooga/,'Department must start with Wooga'),
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
