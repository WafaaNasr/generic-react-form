import React from "react";
import { storiesOf } from "@storybook/react";

import StoryContainer from '../../../../.storybook/components/StoryContainer/StoryContainer';
import Button from './Button';




storiesOf("atoms/Button", module)
    .add(
        'Primary Button',
        () => (
            <StoryContainer>
                <Button onClick={()=>{}}>Click me!</Button>
            </StoryContainer>
        ));