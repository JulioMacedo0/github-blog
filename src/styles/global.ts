import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


body {
    background-color: ${(props) => props.theme["base-background"]};
    -webkit-font-smoothing: antialiased;
}
button {
  cursor: pointer;
}
body , input , textarea , button {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: normal;
}
`;
