import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import StoryContainer from '../../../../.storybook/components/StoryContainer/StoryContainer';
import Button from './Button';

storiesOf('atoms/Button', module).add('Primary Button', () => (
    <StoryContainer>
        <Button parentHasErrors={false} onClick={action('Button clicked')}>
            Click me!
        </Button>
    </StoryContainer>
));
