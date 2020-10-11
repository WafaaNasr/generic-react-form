import React from 'react';
import { storiesOf } from '@storybook/react';

import StoryContainer from '../../../../.storybook/components/StoryContainer/StoryContainer';
import Label from './Label.component';
import markdown from './Label.story.md';

storiesOf('components/atoms/Label', module).add('Label', () => (
    <StoryContainer>
        <Label htmlFor="test">Test Label</Label>
    </StoryContainer>
),{notes:markdown});
