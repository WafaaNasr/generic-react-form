import React from 'react';
import { storiesOf } from '@storybook/react';

import StoryContainer from '../../../../.storybook/components/StoryContainer/StoryContainer';
import Form from './Form.component';
import { formData } from './Form.data';

storiesOf('components/organisms/Form', module).add('Form', () => (
    <StoryContainer>
        <Form {...formData} />
    </StoryContainer>
));
