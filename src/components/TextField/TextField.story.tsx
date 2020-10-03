import React from "react";

import { storiesOf } from "@storybook/react"
import TextField from './TextField';




storiesOf("atoms/TextField", module)
.add(
    'TextField',
    () => (
            <TextField />   
    ));