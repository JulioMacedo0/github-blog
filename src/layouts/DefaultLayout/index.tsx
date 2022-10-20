import { Outlet } from "react-router-dom";
import { Header } from "../../Components/Header";
import * as S from "./styles";

export const DefaultLayout = () => {
  return (
    <S.LayoutContainer>
      <Header />
      <Outlet />
    </S.LayoutContainer>
  );
};
