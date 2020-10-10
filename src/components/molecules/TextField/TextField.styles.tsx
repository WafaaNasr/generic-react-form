import styled from 'styled-components';
import { ProjectDefaultTheme } from '../../../styles/themes/theme';

type TextFielfWrapperProps = {
    error: boolean;
    theme: ProjectDefaultTheme;
};
export const TextFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
export const TextFieldWrapper = styled.input`
    margin: 1rem 0;
    height: 3rem;
    font-family: ${(props) => props.theme.typography.small.fontFamily};
    padding: 0.5rem;
    cursor: text;
    ${({ theme, error }: TextFielfWrapperProps) => error && `border:1px solid ${theme.colors.error}`}
`;

export const ValidationMessage = styled.div`
    color: ${({ theme }) => theme.colors.error};
`;
