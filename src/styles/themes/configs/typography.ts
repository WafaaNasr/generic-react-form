import { css } from 'styled-components';


export const ProjectFontFamily = css`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;1,200&display=swap');   
  @import url('https://fonts.googleapis.com/css2?family=Roboto:400,900');
 `;


type Font = {
    fontSize: string,
    fontFamily: string,
    lineHeight: number,
    letterSpacing: string
}
export interface ITypography {
    small: Font;
    medium: Font;
    large: Font
}

const defaultFont: Font = {
    fontSize: '16px',
    fontFamily: '"Poppins","Montserrat",sans-serif;',
    lineHeight: 24,
    letterSpacing: '0.015em'
}

export const Typography: ITypography = {
    small: {
        ...{ ...defaultFont },
        fontSize: '14px',
    },
    medium: {
        ...{ ...defaultFont },
    },
    large: {
        ...{ ...defaultFont },
        fontSize: '32px'
    }

}
