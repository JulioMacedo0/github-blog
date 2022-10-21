import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 0px 1rem;
  margin-top: 12.25rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 160%;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    span {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;
      text-align: right;
      color: ${(props) => props.theme["base-span"]};
    }
  }

  input {
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: solid 1px ${(props) => props.theme["base-border"]};
    width: 100%;
    background-color: ${(props) => props.theme["base-input"]};
    color: ${(props) => props.theme["base-title"]};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;

    ::placeholder {
      color: ${(props) => props.theme["base-label"]};
      opacity: 1;
    }
    :focus {
      outline: none;
      border: solid 1px ${(props) => props.theme["blue"]};
    }
  }
`;
