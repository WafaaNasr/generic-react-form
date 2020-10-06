import React from 'react';
import { useForm } from "react-hook-form";

import TextField from '../../molecules/TextField/TextField';
import Button from '../../atoms/Button/Button';

import { FormProps } from './Form.types';
import { FormContainer } from './Form.styles';
import { ReturnedReactComponent } from '../../../common.types';

const Form = ({ textFields }: FormProps): ReturnedReactComponent => {

    const { handleSubmit, register } = useForm<{}>({
        defaultValues: {

        }
    });

    if (!textFields) {
        return null
    }

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });
    return <FormContainer onSubmit={onSubmit}>
        {
            textFields.map(textField => (<TextField
                {...textField}
                register={register}
            />))
        }
        <Button type='submit'>Submit</Button>
    </FormContainer>
};

export default Form;