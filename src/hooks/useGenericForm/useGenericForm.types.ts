import { Mode } from 'react-hook-form';
import { ObjectSchema } from 'yup';

export interface IValidationFormFields<T> {
    formDefaultValues: T;
    validationSchema: ObjectSchema;
}
export interface IGenericFormProps<T> extends IValidationFormFields<T> {

}

export interface PostDataResult<T> {
    success: boolean;
    formData: T;
}
