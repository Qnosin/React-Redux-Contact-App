import { createGlobalStyle } from "styled-components"

export const GlobalStyles =  createGlobalStyle`
body{
    width: 100%;
    min-height: 100vh;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
button{
    padding: .5rem;
    border-radius: 10px;
    cursor: pointer;
}

`