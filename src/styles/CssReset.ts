import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        font-family: "Poppins","Montserrat",sans-serif;
    }
    h1, h2, h3, h4, h5, h6, p, figure, ol, ul, span {
        margin: 0;
        padding: 0;
    }
    h1, h2, h3, h4, h5, h6 {
        font-size: inherit;
    }
   
`;