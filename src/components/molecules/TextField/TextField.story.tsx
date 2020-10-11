import React from 'react';
import { storiesOf } from '@storybook/react';

import StoryContainer from '../../../../.storybook/components/StoryContainer/StoryContainer';
import TextField from './TextField.component';
import data from './TextField.data';

storiesOf('components/molecules/TextField', module).add('TextField', () => (
    <StoryContainer>
        <TextField {...data} />
    </StoryContainer>
));
