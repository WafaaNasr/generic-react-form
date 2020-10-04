import React from 'react';
import { useForm } from "react-hook-form";

import TextField from '../../molecules/TextField/TextField';
import Button from '../../atoms/Button/Button';

import { FormProps } from './Form.types';
import { FormContainer } from './Form.styles';

const Form = () => {
    const { handleSubmit, register } = useForm<FormProps>({
        defaultValues: {
          username: 'joy',
          password:'doe'
        }});


    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });
    return <FormContainer onSubmit={onSubmit}>
       
         <TextField
            type="text"
            placeholder="Wafaa"
            name="username"
            label="Username"
            register={register}
            onTextChange={(e) =>{} } />

        <TextField
            type="password"
            placeholder="Please enter a valid password"
            name="password"
            label="Password"
            register={register}
            onTextChange={(e) => {}} /> 

            <Button type='submit'>Submit</Button>
    </FormContainer>
};

export default Form;