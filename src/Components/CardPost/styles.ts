import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  max-width: 26rem;
  height: 16.25rem;
  padding: 2rem;
  background-color: ${(props) => props.theme["base-post"]};
  border-radius: 10px;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: ${(props) => props.theme["base-text"]};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h3 {
      max-width: 80%;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 160%;
      color: ${(props) => props.theme["base-title"]};
    }

    span {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;
      color: ${(props) => props.theme["base-span"]};
    }
  }
`;
