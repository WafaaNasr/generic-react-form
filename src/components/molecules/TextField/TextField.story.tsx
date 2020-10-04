import React from "react";
import { storiesOf } from "@storybook/react"

import StoryContainer from "../../../../.storybook/components/StoryContainer/StoryContainer";
import TextField from './TextField';




storiesOf("molecules/TextField", module)
        .add(
                'TextField',
                () => (
                        <StoryContainer><TextField /></StoryContainer>
                ));