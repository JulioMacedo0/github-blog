import * as S from "./styles";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { PostsContext } from "../../context/PostsContext";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
interface CardPostProps {
  title: string;
  body: string;
  postId: number;
  date: string;
}

export const CardPost = ({ title, body, postId, date }: CardPostProps) => {
  const { haddleChangeCurrentPostId } = useContext(PostsContext);

  const distanceBetweenDates = formatDistance(Date.parse(date), new Date(), {
    locale: ptBR,
  });

  return (
    <S.Wrapper>
      <Link to="/posts" onClick={() => haddleChangeCurrentPostId(postId)}>
        <S.Card>
          <div>
            <h3>{title} </h3>
            <span>{distanceBetweenDates}</span>
          </div>

          <p>{body}</p>
        </S.Card>
      </Link>
    </S.Wrapper>
  );
};
