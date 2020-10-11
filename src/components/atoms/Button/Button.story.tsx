import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import StoryContainer from '../../../../.storybook/components/StoryContainer/StoryContainer';
import Button from './Button.component';
import markdown from './Button.story.md';

storiesOf('components/atoms/Button', module).add(
    'Primary Button',
    () => (
        <StoryContainer>
            <Button parentHasErrors={false} onClick={action('Button clicked')}>
                Click me!
            </Button>
        </StoryContainer>
    ),
    {
        notes: markdown,
    },
);
