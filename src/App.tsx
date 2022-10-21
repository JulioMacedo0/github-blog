import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { PostsContextProvider } from "./context/PostsContext";
import { ProfiledataContextProvider } from "./context/ProfileDataContext";
import { Router } from "./Route";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <ProfiledataContextProvider>
          <PostsContextProvider>
            <Router />
          </PostsContextProvider>
        </ProfiledataContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};
