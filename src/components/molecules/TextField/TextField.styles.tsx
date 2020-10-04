import styled from 'styled-components';

export const TextFieldContainer = styled.div`
    display:flex;
    flex-direction: column;
`;

export const TextFieldWrapper = styled.input`
    margin: 1rem 0;
    height: 3rem;
    font-family: ${props=>props.theme.typography.small.fontFamily};
    padding: 0.5rem;
    cursor:text;
`;