import { ReactNode } from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    onClick?: () => void;
    parentHasErrors: boolean;
    children: ReactNode;
};
