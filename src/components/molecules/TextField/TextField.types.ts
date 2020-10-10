import { ValidationRules, UseFormMethods, FieldErrors, FieldElement, Ref } from "react-hook-form";


declare function registerFn(arg: TFValidationRules): (ref: (FieldElement & Ref));
interface TFValidationRules {
    name: string;
    rules?: ValidationRules;
}
export type TextFieldProps =
    React.InputHTMLAttributes<HTMLInputElement> &
    Partial<Pick<UseFormMethods, "register" | "errors">> & {
        placeholder: string;
        type: string;
        label: string,
        name: string,
        rules?: ValidationRules;
        key?: string;
        error?: FieldErrors;
        onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }


