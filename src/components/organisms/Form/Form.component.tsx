import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import TextField from '../../molecules/TextField/TextField.component';
import Button from '../../atoms/Button/Button.component';

import { FormProps, PostDataResult } from './Form.types';
import { FormContainer } from './Form.styles';
import { ReturnedReactComponent } from '../../../common.types';

const Form = <T extends Record<string, any>>({
    formFields,
    submitBtnLabel,
    formDefaultValues,
}: FormProps<T>): ReturnedReactComponent => {
    const { handleSubmit, register, errors, formState } = useForm<T>({
        defaultValues: formDefaultValues as any,
    });

    if (!formFields || !submitBtnLabel || !formDefaultValues) {
        return null;
    }
    const hasErrors = Object.keys(errors).length;

    //TODO Remove from here
    const postData = (data: FormData): Promise<PostDataResult<FormData>> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`${data} saved.`);
                resolve({ success: true, formData: data });
            }, 5000);
        });
    };
    const submitForm = useCallback(async (data: FormData) => {
        console.log('Submission starting', data);
        const result = await postData(data);
        console.log('Submitting complete', result);
    }, []);
    return (
        //TODO Disable form after submitting
        <FormContainer onSubmit={handleSubmit(submitForm)}>
            {formFields.map((textField) => (
                <TextField {...textField} key={textField.name} register={register} error={errors[textField.name]} />
            ))}
            <Button
                type="submit"
                parentHasErrors={hasErrors > 0 || formState.isSubmitting || formState.isSubmitSuccessful}
            >
                {submitBtnLabel}
            </Button>
            {formState.isSubmitSuccessful && <div className="success">Form submitted successfully</div>}
        </FormContainer>
    );
};

export default Form;
