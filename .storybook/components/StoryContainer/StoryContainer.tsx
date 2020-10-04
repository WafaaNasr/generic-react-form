import React from 'react';
import { ThemeProvider } from 'styled-components';

import { darkTheme } from '../../../src/styles/themes/theme';
import CssReset from '../../../src/styles/CssReset';
import { StoryContainerProps } from './StoryContainer.types';

const StoryContainer = ({ children }: StoryContainerProps) =>
    <ThemeProvider theme={new darkTheme()}>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;1,200&display=swap" rel="stylesheet"></link>
        <CssReset />
        {children}
    </ThemeProvider>



export default StoryContainer;
