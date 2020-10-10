import styled from 'styled-components';
import { ProjectDefaultTheme } from '../../../styles/themes/theme';

interface MessageContainerDiv {
    type: string
}

type MessageContainerProps = {
    type: "warning" | "error" | "info";
    theme: ProjectDefaultTheme;
}

export const MessageContainer = styled.div`
    display:flex;
    align-content:flex-start;
    font:inherit;
    padding: 1rem;
    background-color:${({ theme, type }: MessageContainerProps) => theme.colors.message.background[(type)]};
    color: ${ ({ theme, type }: MessageContainerProps) => theme.colors.message.color[type] };
`;

export const ChildrenWrapper = styled.p`
display: flex;
`;