import { TextFieldProps } from '../../molecules/TextField/TextField.types';

export type FormProps<T> = React.FormHTMLAttributes<HTMLFormElement> & {
    formFields: TextFieldProps[];
    submitBtnLabel: string;
    formDataType: T;
    formDefaultValues: T;
};

export interface PostDataResult<T> {
    success: boolean;
    formData: T;
}
