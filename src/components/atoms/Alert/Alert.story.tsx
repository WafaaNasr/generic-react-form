import React from 'react';
import { storiesOf } from '@storybook/react';

import StoryContainer from '../../../../.storybook/components/StoryContainer/StoryContainer';

import Alert from './Alert';
import { MessageType } from './Alert.types';
import { text } from './Alert.data';

storiesOf('components/atoms/Alert', module)
    .add('Success', () => (
        <StoryContainer>
            <Alert messageType={MessageType.Success} text={text} />
        </StoryContainer>
    ))
    .add('Info', () => (
        <StoryContainer>
            <Alert messageType={MessageType.Info} text={text} />
        </StoryContainer>
    ))
    .add('Warning', () => (
        <StoryContainer>
            <Alert messageType={MessageType.Warning} text={text} />
        </StoryContainer>
    ))
    .add('Error', () => (
        <StoryContainer>
            <Alert messageType={MessageType.Error} text={text} />
        </StoryContainer>
    ));
