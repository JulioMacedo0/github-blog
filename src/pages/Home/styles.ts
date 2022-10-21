import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 90rem;

  background-color: ${(props) => props.theme["base-background"]};
`;

export const Main = styled.main`
  width: 100%;
  max-width: 54rem;
`;

export const Grid = styled.div`
  margin-bottom: 14.625rem;
  padding: 0px 1rem;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;
