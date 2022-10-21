import * as S from "./styles";
import logo from "../../assets/Logo.svg";
import leftEffect from "../../assets/left_effect.svg";
import rightEffect from "../../assets/right_effect.svg";

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Header>
        <S.LeftEffect src={leftEffect} height={188} />
        <S.Logo src={logo} alt="logo" />
        <S.BlurEffect />
        <S.RightEffect src={rightEffect} height={236} />
      </S.Header>
    </S.HeaderContainer>
  );
};
