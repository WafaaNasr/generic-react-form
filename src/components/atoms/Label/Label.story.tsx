import React from "react";
import { storiesOf } from "@storybook/react"

import StoryContainer from '../../../../.storybook/components/StoryContainer/StoryContainer';
import Label from './Label';




storiesOf("atoms/Label", module)
    .add(
        'Label',
        () => (
            <StoryContainer>
                <Label>Wafaa</Label>
            </StoryContainer>
        ));