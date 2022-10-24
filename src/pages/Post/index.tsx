import * as S from "./styles";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faArrowLeft,
  faCalendarDay,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";
import { ProfileDataContext } from "../../context/ProfileDataContext";
import { PostsContext } from "../../context/PostsContext";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

export const Posts = () => {
  const { profile } = useContext(ProfileDataContext);
  const { currentPost } = useContext(PostsContext);

  return (
    <S.PostContainer>
      <S.Container>
        <S.Header>
          <S.Nav>
            <Link to="/">
              <FontAwesomeIcon icon={faArrowLeft} /> voltar
            </Link>
            <a href="">
              ver no github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </S.Nav>

          <h2>
            {currentPost ? currentPost?.title : "Erro ao carregar o titulo"}
          </h2>

          <S.Footer>
            <span>
              <FontAwesomeIcon icon={faGithub} /> {profile.login}
            </span>
            <span>
              <FontAwesomeIcon icon={faCalendarDay} /> Há 1 dia
            </span>
            <span>
              <FontAwesomeIcon icon={faComment} /> 5 comentários
            </span>
          </S.Footer>
        </S.Header>

        <S.Content>
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {currentPost ? currentPost?.body : "Erro ao carregar o post"}
          </ReactMarkdown>
        </S.Content>
      </S.Container>
    </S.PostContainer>
  );
};
