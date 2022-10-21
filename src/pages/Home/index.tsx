import { useEffect, useState } from "react";
import { api } from "../../API/api";
import { CardPost } from "../../Components/CardPost";
import { Input } from "../../Components/Input";
import { Profile } from "../../Components/Profile/Profile";
import * as S from "./styles";

interface PostInterface {
  id: number;
  url: string;
  title: string;
  body: string;
  created_at: string;
  comments: number;
}

export const Home = () => {
  const [post, setPost] = useState<PostInterface[]>([]);

  const getPosts = async () => {
    const response = await api.get("/repos/juliomacedo0/github-blog/issues");
    setPost(response.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <S.HomeContainer>
      <S.Container>
        <S.Main>
          <Profile />
          <Input />

          <S.Grid>
            {post.map((post) => {
              return (
                <CardPost title={post.title} body={post.body} key={post.id} />
              );
            })}
          </S.Grid>
        </S.Main>
      </S.Container>
    </S.HomeContainer>
  );
};
