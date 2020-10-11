import React, { useCallback, useEffect, useState } from 'react';

import useGenericForm from '../../../hooks/useGenericForm/useGenericForm';

import TextField from '../../molecules/TextField/TextField.component';
import Button from '../../atoms/Button/Button.component';
import Message from '../../atoms/Message/Message';

import { FormProps } from './Form.types';
import { FormContainer } from './Form.styles';
import { ReturnedReactComponent } from '../../../common.types';
import { MessageType } from '../../atoms/Message/Message.types';

const Form = <T extends Record<string, any>>({
    formFields,
    submitBtnLabel,
    formDefaultValues,
    validationSchema,
    validationMode,
    onSubmitCb,
}: FormProps<T>): ReturnedReactComponent => {
    const { handleSubmit, errors, formState, setValue, getValues, trigger } = useGenericForm<T>({
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
        trigger(fieldName as any);
        setFormValues(getValues());
    };
    console.log(errors);
    return formState.isSubmitSuccessful ? (
        <Message text="Form submitted successfully" messageType={MessageType.Info} />
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
                <Button type="submit" parentHasErrors={hasErrors > 0 || formState.isSubmitting || formState.isSubmitSuccessful}>
                    {submitBtnLabel}
                </Button>
            </FormContainer>
        );
};

export default Form;
