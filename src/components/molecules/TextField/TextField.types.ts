import { ValidationRules, UseFormMethods, FieldErrors } from "react-hook-form";


export type TextFieldProps =
    React.InputHTMLAttributes<HTMLInputElement> &
    Partial<Pick<UseFormMethods, "register" | "errors">> & {
        placeholder: string;
        type: string;
        label: string,
        name: string,
        rules: ValidationRules;
        key?:string;
        error?:FieldErrors;
        onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }


