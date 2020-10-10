import styled from 'styled-components';

export const LabelContainer = styled.div`
    display: flex;
    padding-top: 1rem;
`;

export const LabelWrapper = styled.span`
    color: ${(props) => props.theme.primaryColor};
`;
