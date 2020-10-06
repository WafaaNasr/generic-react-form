import { ValidationRules, UseFormMethods } from "react-hook-form";


export type TextFieldProps =
    React.InputHTMLAttributes<HTMLInputElement> &
    Partial<Pick<UseFormMethods, "register" | "errors">> & {
        placeholder: string;
        type: string;
        key:string;
        label: string,
        name: string,
        rules?: ValidationRules;
        onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }


