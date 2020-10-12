import React, { useCallback, useEffect, useState } from 'react';

import useGenericForm from '../../../hooks/useGenericForm/useGenericForm';

import TextField from '../../molecules/TextField/TextField.component';
import Button from '../../atoms/Button/Button.component';
import Alert from '../../atoms/Alert/Alert';

import { FormProps } from './Form.types';
import { FormContainer, LoadingWrapper } from './Form.styles';
import { ReturnedReactComponent } from '../../../common.types';
import { MessageType } from '../../atoms/Alert/Alert.types';

const Form = <T extends Record<string, any>>({
    formFields,
    submitBtnLabel,
    formDefaultValues,
    validationSchema,
    onSubmitCb,
    successMessage,
    errorMessage,
}: FormProps<T>): ReturnedReactComponent => {
    const { handleSubmit, errors, formState, setValue, getValues, trigger } = useGenericForm<T>({
        formDefaultValues,
        validationSchema,
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
        trigger(fieldName as any);
        setFormValues(getValues());
    };
    return formState.isSubmitting ? (
        <LoadingWrapper>Loading.......</LoadingWrapper>
    ) : formState.isSubmitSuccessful ? (
        <Alert text={successMessage} messageType={MessageType.Success} />
    ) : (
        <FormContainer onSubmit={handleSubmit(onSubmitCb)}>
            {formFields.map((textField) => (
                <TextField
                    {...textField}
                    value={formValues[textField.name]}
                    key={textField.name}
                    onTextChange={setFieldValue(textField.name)}
                    error={errors[textField.name]}
                />
            ))}
            <Button
                type="submit"
                parentHasErrors={hasErrors > 0 || formState.isSubmitting || formState.isSubmitSuccessful}
            >
                {submitBtnLabel}
            </Button>
        </FormContainer>
    );
};

export default Form;
