import styled from "styled-components";

export const PostContainer = styled.div`
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

export const Header = styled.section`
  position: absolute;
  left: calc(50% - 864px / 2);
  top: 208px;
  width: 54rem;
  height: 10.5rem;
  padding: 2rem 2.5rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme["base-profile"]};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  h2 {
    color: ${(props) => props.theme["base-title"]};
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;
  }
`;

export const Nav = styled.div`
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > a {
    gap: 0.5rem;
    display: flex;
    justify-content: space-between;

    font-style: normal;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 160%;
    text-transform: uppercase;
    text-decoration: none;
    color: ${(props) => props.theme["blue"]};
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.5s;

    :hover {
      border-bottom: 1px solid ${(props) => props.theme["blue"]};
    }
  }
  > svg {
    align-self: center;
    color: ${(props) => props.theme["blue"]};
    width: 0.75rem;
    height: 0.75rem;
  }
`;

export const Footer = styled.div`
  margin-top: 0.75rem;
  display: flex;
  gap: 2rem;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 160%;
  color: ${(props) => props.theme["base-span"]};

  svg {
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const Content = styled.main`
  margin-top: 5rem;
  padding: 2.5rem 2rem;
  width: 54rem;

  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 160%;
  color: ${(props) => props.theme["base-text"]};
`;
