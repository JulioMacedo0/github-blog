import * as S from "./styles";

export const Input = () => {
  return (
    <S.HeaderContainer>
      <div>
        <p>Publicações</p> <span>6 publicações</span>
      </div>
      <input type="text" placeholder="Buscar conteúdo" />
    </S.HeaderContainer>
  );
};
