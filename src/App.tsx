import React from 'react';

import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/themes/theme';
import CssReset from './styles/CssReset';

const App = () => <ThemeProvider theme={lightTheme}><CssReset /></ThemeProvider>



export default App;
