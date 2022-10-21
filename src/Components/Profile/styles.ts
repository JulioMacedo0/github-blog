import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: calc(50% - 864px / 2);
  top: 208px;
  width: 54rem;
  height: 13.25rem;
  padding: 2rem 2.5rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme["base-profile"]};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  header {
    margin-top: 0.6rem;
    display: flex;
    justify-content: space-between;
  }
  img {
    border-radius: 8px;
    width: 9.25rem;
    height: 9.25rem;
  }

  h2 {
    // font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-title"]};
  }

  p {
    // font-family: "Nunito";
    width: 37.8125rem;
    height: 5rem;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
    color: ${(props) => props.theme["base-text"]};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const linkContainer = styled.div`
  align-self: flex-start;
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.5s;

  :hover {
    border-bottom: 1px solid ${(props) => props.theme["blue"]};
  }

  a {
    padding: 0px;
    width: 4.1875rem;
    height: 1.1875rem;
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
  }
  svg {
    align-self: center;
    color: ${(props) => props.theme["blue"]};
    width: 0.75rem;
    height: 0.75rem;
  }
`;

export const Footer = styled.footer`
  display: flex;
  gap: 1.5rem;

  span {
    //  font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
    color: ${(props) => props.theme["base-text"]};
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  svg {
    color: ${(props) => props.theme["base-label"]};
    width: 1.125rem;
    height: 1.125rem;
  }
`;
