import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`



    *,*::before,*::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;

    }   

    html {
        font-size: 62.5%; //10px
    }

    body{
        font-size: 1.6rem;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Barlow', sans-serif;
        font-family: 'Barlow Condensed', sans-serif;



    }`;

export default GlobalStyle;
