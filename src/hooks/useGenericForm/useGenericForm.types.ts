import { Mode } from 'react-hook-form';
import { ObjectSchema } from 'yup';

export interface IValidationFormFields<T> {
    formDefaultValues: T;
    validationSchema: ObjectSchema;
    validationMode: Mode;
}
export interface IGenericFormProps<T> extends IValidationFormFields<T> {
    validationMode: Mode;
}

export interface PostDataResult<T> {
    success: boolean;
    formData: T;
}
