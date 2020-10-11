import React from 'react';
import { storiesOf } from '@storybook/react';

import StoryContainer from '../../../../.storybook/components/StoryContainer/StoryContainer';
import Form from './Form.component';
import { formData, ISignInFormFields } from './Form.data';
import markdown from './Form.story.md';

storiesOf('components/organisms/Form', module).add('Signin Form', () => (
    <StoryContainer>
        <Form<ISignInFormFields> {...formData} />
    </StoryContainer>
), {
    notes: markdown
});
