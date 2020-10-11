import styled from 'styled-components';
import { ProjectDefaultTheme } from '../../../styles/themes/theme';

interface MessageContainerDiv {
    type: string;
}

type MessageContainerProps = {
    type: 'warning' | 'error' | 'info' | 'success';
    theme: ProjectDefaultTheme;
};

export const MessageContainer = styled.div`
    display: flex;
    width: 100%;
    align-content: flex-start;
    font: inherit;
    padding: 1rem;
    background-color: ${({ theme, type }: MessageContainerProps) => theme.colors.alert.background[type]};
    color: ${({ theme, type }: MessageContainerProps) => theme.colors.alert.color[type]};
`;

export const ChildrenWrapper = styled.p`
    display: flex;
`;
