import React from 'react';
import { storiesOf } from '@storybook/react';

import StoryContainer from '../../../../.storybook/components/StoryContainer/StoryContainer';

import Message from './Message';
import { MessageType } from './Message.types';
import { text } from './Message.data';

storiesOf('components/atoms/Message', module)
    .add('Message Info', () => (
        <StoryContainer>
            <Message messageType={MessageType.Info} text={text} />
        </StoryContainer>
    ))
    .add('Message Warning', () => (
        <StoryContainer>
            <Message messageType={MessageType.Warning} text={text} />
        </StoryContainer>
    ))
    .add('Message Error', () => (
        <StoryContainer>
            <Message messageType={MessageType.Error} text={text} />
        </StoryContainer>
    ));
