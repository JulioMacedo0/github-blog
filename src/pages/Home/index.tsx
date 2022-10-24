import { useContext, useEffect, useState } from "react";
import { api } from "../../API/api";
import { CardPost } from "../../Components/CardPost";
import { Input } from "../../Components/Input";
import { Profile } from "../../Components/Profile/Profile";
import { PostsContext } from "../../context/PostsContext";
import * as S from "./styles";

export const Home = () => {
  const { post } = useContext(PostsContext);
  return (
    <S.HomeContainer>
      <S.Container>
        <S.Main>
          <Profile />
          <Input />

          <S.Grid>
            {post.map((post) => {
              return (
                <CardPost
                  title={post.title}
                  body={post.body}
                  key={post.id}
                  postId={post.id}
                />
              );
            })}
          </S.Grid>
        </S.Main>
      </S.Container>
    </S.HomeContainer>
  );
};
