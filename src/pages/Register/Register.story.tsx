import React from 'react';
import { storiesOf } from '@storybook/react';

import StoryContainer from '../../../.storybook/components/StoryContainer/StoryContainer';

import Register from './Register.page';
import { formDataWithInitial, formDataWithOutInitial } from './Register.data';

storiesOf('pages/Register', module)
    .add('Register with initial data', () => (
        <StoryContainer>
            <Register registerFormFields={formDataWithInitial} />
        </StoryContainer>
    ))
    .add('Register without initial data ', () => (
        <StoryContainer>
            <Register registerFormFields={formDataWithOutInitial} />
        </StoryContainer>
    ));
