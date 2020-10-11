import React, { useCallback, useEffect, useState } from 'react';

import useGenericForm from '../../../hooks/useGenericForm/useGenericForm';

import TextField from '../../molecules/TextField/TextField.component';
import Button from '../../atoms/Button/Button.component';

import { FormProps } from './Form.types';
import { FormContainer } from './Form.styles';
import { ReturnedReactComponent } from '../../../common.types';

const Form = <T extends Record<string, any>>({
    formFields,
    submitBtnLabel,
    formDefaultValues,
    validationSchema,
    validationMode,
    onSubmitCb,
}: FormProps<T>): ReturnedReactComponent => {
    const { handleSubmit, errors, formState, setValue, getValues } = useGenericForm<T>({
        formDefaultValues,
        validationSchema,
        validationMode: validationMode,
    });

    const [formValues, setFormValues] = useState(formDefaultValues);
    if (!formFields || !submitBtnLabel) {
        return null;
    }
    const hasErrors = Object.keys(errors).length;

    const setFieldValue = (fieldName: string) => (event: any) => {
        const {
            target: { value },
        } = event;
        setValue(fieldName, value ? value.trim() : '');
        setFormValues(getValues());
    };
    return (
        //TODO Disable form after submitting
        <FormContainer onSubmit={handleSubmit(onSubmitCb)}>
            {formFields.map((textField) => (
                <TextField
                    {...textField}
                    value={formValues[textField.name]}
                    key={textField.name}
                    error={errors[textField.name]}
                    onTextChange={setFieldValue(textField.name)}
                />
            ))}
            <Button type="submit" parentHasErrors={formState.isSubmitting || formState.isSubmitSuccessful}>
                {submitBtnLabel}
            </Button>
            {formState.isSubmitSuccessful && <div className="success">Form submitted successfully</div>}
        </FormContainer>
    );
};

export default Form;
