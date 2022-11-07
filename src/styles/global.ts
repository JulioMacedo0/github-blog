import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

::-webkit-scrollbar {
    width: 10px;
    height: 10px
}
::-webkit-scrollbar-track {
 

}


::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.20);
 

}
pre {
    margin: 1rem;
    border-radius: 8px;
    border: solid 1px #fff;
}

code {
    border-radius: 8px;
}
body {
    background-color: ${(props) => props.theme["base-input"]};
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
