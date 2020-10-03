import React from 'react';

import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/themes/theme';

const App = () => <ThemeProvider theme={lightTheme}></ThemeProvider>



export default App;
