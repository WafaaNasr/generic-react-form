import { useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IGenericFormProps } from './useGenericForm.types';

const useGenericForm = <T>({ formDefaultValues, validationSchema }: IGenericFormProps<T>) => {
    const { handleSubmit, register, unregister, errors, formState, reset, setValue, getValues, trigger } = useForm<T>({
        defaultValues: formDefaultValues as any,
        resolver: yupResolver(validationSchema),
    });
    const formFields: any | undefined = validationSchema.fields && Object.keys(validationSchema.fields);

    useCallback(() => {
        const defaultValues = formFields?.reduce((acc: Record<string, any>, field: string) => {
            acc[field] = (formDefaultValues && (formDefaultValues as any)[field]) || '';
            return acc;
        }, {});

        reset(defaultValues);
    }, [formFields, reset, formDefaultValues]);

    useEffect(() => {
        formFields?.forEach(register);
        return () => {
            formFields?.forEach(unregister);
        };
    }, [register, unregister, formDefaultValues]);

    return { handleSubmit, register, setValue, getValues, errors, formState, trigger };
};

export default useGenericForm;
