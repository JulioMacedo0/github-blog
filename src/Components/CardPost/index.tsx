import * as S from "./styles";
import { Link } from "react-router-dom";
interface CardPostProps {
  title: string;
  body: string;
}

export const CardPost = ({ title, body }: CardPostProps) => {
  return (
    <S.Wrapper>
      <Link to="/posts">
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
