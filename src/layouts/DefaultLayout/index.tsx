import { Outlet } from "react-router-dom";
import { Header } from "../../Components/Header";
import * as S from "./styles";

export const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
