import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  max-height: 18.5rem;
`;

export const Header = styled.header`
  background-color: ${(props) => props.theme["base-profile"]};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 18.5rem;
  margin: 0 auto;
  display: flex;
  align-items: start;
  justify-content: space-between;
  max-width: 90rem;
`;

export const BlurEffect = styled.div`
  position: absolute;
  width: 891px;
  height: 52px;
  left: calc(50% - 891px / 2 - 2.5px);
  top: 235px;
  background: #14589c;
  filter: blur(106px);
`;

export const LeftEffect = styled.img`
  margin-top: 4.375rem;
  height: auto;
`;

export const RightEffect = styled.img`
  margin-top: 1.875rem;
  margin-right: 0.125rem;
  height: auto;
`;

export const Logo = styled.img`
  position: relative;
  left: -18px;
  margin-top: 4rem;
`;
