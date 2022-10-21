import { useContext } from "react";
import { PostsContext } from "../../context/PostsContext";
import * as S from "./styles";

export const Input = () => {
  const { post } = useContext(PostsContext);
  return (
    <S.HeaderContainer>
      <div>
        <p>Publicações</p> <span>{post.length} publicações</span>
      </div>
      <input type="text" placeholder="Buscar conteúdo" />
    </S.HeaderContainer>
  );
};
