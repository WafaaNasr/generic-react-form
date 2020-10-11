import React from 'react';
import { ReturnedReactComponent } from '../../../common.types';

import { MessageContainer, ChildrenWrapper } from './Alert.styles';
import { MessageProps, MessageType } from './Alert.types';

const Message = ({ messageType = MessageType.Info, text }: MessageProps): ReturnedReactComponent => {
    if (!text) {
        return null;
    }
    return (
        <MessageContainer type={messageType}>
            <ChildrenWrapper> {text}</ChildrenWrapper>
        </MessageContainer>
    );
};

export default Message;
