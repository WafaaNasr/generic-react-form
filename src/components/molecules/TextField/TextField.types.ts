export type TextFieldProps =
    React.InputHTMLAttributes<HTMLInputElement> & {
        placeholder: string;
        type: string;
        label: string,
        name: string,
        onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }