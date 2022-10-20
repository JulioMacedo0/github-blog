import * as S from "./styles";
import logo from "../../assets/Logo.svg";
import leftEffect from "../../assets/left_effect.svg";
import rightEffect from "../../assets/right_effect.svg";
export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Effect src={leftEffect} height={188} />
      <S.Header>
        <img src={logo} alt="logo" />
      </S.Header>
      <S.Effect src={rightEffect} height={236} />
    </S.HeaderContainer>
  );
};
