import styled from 'styled-components';

export const ButtonContainer = styled.div`
    display:flex;
    padding-top:1rem;
`;

export const ButtonWrapper = styled.button`
    color:${props => props.theme.secondaryColor};
    background-color:${props => props.theme.primaryColor};
    font-family: ${props => props.theme.typography.small.fontFamily};
    border: 1rem solid ${props => props.theme.primaryColor};
    padding: 0 3rem;
    width : auto;
    height : auto;
    cursor: pointer;

    :hover,
    :focus,
    :active {
        color: ${props => props.theme.secondaryColor};
        background-color: ${props => props.theme.primaryColor};
    }
`;