import React from 'react';
import { useForm } from "react-hook-form";


import { FormContainer } from './Form.styles';
import { FormProps } from './Form.types';
import TextField from '../../molecules/TextField/TextField';

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

        <button type="submit">Submit</button>
    </FormContainer>
};

export default Form;