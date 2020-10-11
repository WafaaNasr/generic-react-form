import React from 'react';
import { storiesOf } from '@storybook/react';

import StoryContainer from '../../../../.storybook/components/StoryContainer/StoryContainer';
import Label from './Label.component';

storiesOf('components/atoms/Label', module).add('Label', () => (
    <StoryContainer>
        <Label htmlFor="wafaa">Wafaa</Label>
    </StoryContainer>
));
