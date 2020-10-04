import React from "react";
import { storiesOf } from "@storybook/react"

import StoryContainer from "../../../../.storybook/components/StoryContainer/StoryContainer";
import TextField from './TextField';
import data from './TextField.data';



storiesOf("molecules/TextField", module)
        .add('TextField',
                () => (
                        <StoryContainer><TextField  {...data} /></StoryContainer>
                ));