import { IValidationFormFields } from '../../../hooks/useGenericForm/useGenericForm.types';
import { TextFieldProps } from '../../molecules/TextField/TextField.types';

export type FormProps<T> = IValidationFormFields<T> &
    React.FormHTMLAttributes<HTMLFormElement> & {
        formFields: TextFieldProps[];
        submitBtnLabel: string;
        onSubmitCb: (formData: FormData) => Promise<void> | void;
        successMessage: string;
        errorMessage: string;
    };
