import styled from 'styled-components';
import { MessageType } from '../../components/atoms/Alert/Alert.types';

export const RegisterContainer = styled.div`
    width: 100%;
`;
export const RegisterDataWrapper = styled.div`
    margin: 2rem;
    width: 100;
    background-color: ${({ theme }) => theme.colors.message.background[MessageType.Info]};
    color: ${({ theme }) => theme.colors.message.color[MessageType.Info]};
`;

export const DataWrapper = styled.p`
    padding: 1rem;
`;
