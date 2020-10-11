import { ReactNode } from 'react';

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
    htmlFor: string;
    children: ReactNode;
};
