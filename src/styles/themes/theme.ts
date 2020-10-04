import { DefaultTheme } from 'styled-components';

import { ITypography, Typography } from './configs/typography';


declare module "styled-components" {
    export interface DefaultTheme {
        primaryColor: string,
        secondaryColor: string
        typography: ITypography,
    }
}

export class ProjectDefaultTheme implements DefaultTheme {
    primaryColor = '#333';
    secondaryColor = '#666';
    typography = { ...Typography }
}

export class darkTheme extends ProjectDefaultTheme {
    primaryColor = '#333';
    secondaryColor = '#666';
}

export class lightTheme extends ProjectDefaultTheme {
    primaryColor = '#fff';
    secondaryColor = '#cacaca';
}