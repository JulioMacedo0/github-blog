import * as S from "./styles";

interface CardPostProps {
  title: string;
  body: string;
}

export const CardPost = ({ title, body }: CardPostProps) => {
  return (
    <S.Card>
      <div>
        <h3>{title} </h3>
        <span>Há 1 dia</span>
      </div>

      <p>{body}</p>
    </S.Card>
  );
};
