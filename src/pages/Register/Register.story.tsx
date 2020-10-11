import React from 'react';
import { storiesOf } from '@storybook/react';

import StoryContainer from '../../../.storybook/components/StoryContainer/StoryContainer';

import Register from './Register.page';
import { formData } from './Register.data';

storiesOf('pages/Register', module).add('Register', () => (
    <StoryContainer>
        <Register registerFormFields={formData} />
    </StoryContainer>
));
