

import { TextFieldProps } from '../../molecules/TextField/TextField.types';


export type FormProps =
    React.FormHTMLAttributes<HTMLFormElement> & {
       textFields: TextFieldProps[];
    }

