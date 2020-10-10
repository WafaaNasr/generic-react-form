import React from 'react';
import { useForm } from 'react-hook-form';

import TextField from '../../molecules/TextField/TextField';
import Button from '../../atoms/Button/Button';

import { FormProps } from './Form.types';
import { FormContainer } from './Form.styles';
import { ReturnedReactComponent } from '../../../common.types';

const Form = ({ textFields }: FormProps): ReturnedReactComponent => {
    const { handleSubmit, register, errors } = useForm<unknown>({
        defaultValues: {},
    });

    if (!textFields) {
        return null;
    }
    const hasErrors = Object.keys(errors).length;
    const onSubmit = handleSubmit((data) => {
        console.log(data);
        console.log(errors);
    });
    return (
        <FormContainer onSubmit={onSubmit}>
            {textFields.map((textField) => (
                <TextField {...textField} key={textField.name} register={register} error={errors[textField.name]} />
            ))}
            <Button type="submit" parentHasErrors={hasErrors > 0}>
                Submit
            </Button>
        </FormContainer>
    );
};

export default Form;
