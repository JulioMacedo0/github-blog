import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: ${(props) => props.theme["base-profile"]};
  width: 100%;
  display: flex;
  max-height: 18.5rem;
`;

export const Header = styled.header`
  width: 100%;
  height: 18.5rem;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 90rem;
`;

export const Effect = styled.img`
  height: auto;
`;
