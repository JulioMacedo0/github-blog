import * as S from "./styles";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { PostsContext } from "../../context/PostsContext";
interface CardPostProps {
  title: string;
  body: string;
  postId: number;
}

export const CardPost = ({ title, body, postId }: CardPostProps) => {
  const { haddleChangeCurrentPostId } = useContext(PostsContext);
  return (
    <S.Wrapper>
      <Link to="/posts" onClick={() => haddleChangeCurrentPostId(postId)}>
        <S.Card>
          <div>
            <h3>{title} </h3>
            <span>Há 1 dia</span>
          </div>

          <p>{body}</p>
        </S.Card>
      </Link>
    </S.Wrapper>
  );
};
