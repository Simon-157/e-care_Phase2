import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital@0;1&family=Mulish:wght@500&family=PT+Sans+Narrow&family=Poppins&display=swap');
    *{
        margin:0;
        padding:0;
    }
    html, body {
        height:100%;
    }

    body{
        font-family:Poppins;
        background-color:#c2cfe8;
    }

    a{
        text-decoration: none;
        color:#000;
      }

`