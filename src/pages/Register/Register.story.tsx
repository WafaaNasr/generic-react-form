import React from 'react';
import { storiesOf } from '@storybook/react';

import StoryContainer from '../../../.storybook/components/StoryContainer/StoryContainer';

import Register from './Register.page';
import { formDataWithInitial, formDataWithOutInitial } from './Register.data';
import markdown from './Register.story.md';

storiesOf('pages/Register', module)
    .add('Register with initial data', () => (
        <StoryContainer>
            <Register registerFormFields={formDataWithInitial} />
        </StoryContainer>
    ), { notes: markdown })
    .add('Register without initial data ', () => (
        <StoryContainer>
            <Register registerFormFields={formDataWithOutInitial} />
        </StoryContainer>
    ), { notes: markdown });
