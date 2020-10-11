import { ValidationRules, UseFormMethods, FieldErrors, FieldElement, Ref } from 'react-hook-form';

export type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> &
    Partial<Pick<UseFormMethods, 'errors'>> & {
        placeholder: string;
        type: string;
        label: string;
        name: string;
        value?: string;
        error?: FieldErrors;
        onTextChange: ((e: React.ChangeEvent<HTMLInputElement>) => void) | null;
    };
