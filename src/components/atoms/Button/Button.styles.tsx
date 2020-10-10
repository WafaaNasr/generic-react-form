import styled from 'styled-components';
import Colors from '../../../styles/themes/configs/colors';

export const ButtonContainer = styled.div`
    display: flex;
    padding-top: 1rem;
`;

export const ButtonWrapper = styled.button`
    color: ${({ theme }) => theme.secondaryColor};
    background-color: ${({ theme }) => theme.primaryColor};
    font-family: ${({ theme }) => theme.typography.small.fontFamily};
    border: 1rem solid ${({ theme }) => theme.primaryColor};
    padding: 0 3rem;
    width: auto;
    height: auto;
    cursor: pointer;

    :hover,
    :focus,
    :active {
        color: ${({ theme }) => theme.secondaryColor};
        background-color: ${({ theme }) => theme.primaryColor};
    }

    ${({ theme, disabled }) =>
        disabled
            ? `
           background-color:${theme.colors.gray};
           border-color:${theme.colors.gray};

        border-color:gray;
        
        &:hover,
        :focus,
        :active {
                color: ${theme.secondaryColor};
                background-color: gray;
                cursor:select;
            }
    `
            : ''};
`;
