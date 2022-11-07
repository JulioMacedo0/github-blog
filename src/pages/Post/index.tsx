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
import { useContext, useEffect } from "react";
import { ProfileDataContext } from "../../context/ProfileDataContext";
import { PostsContext } from "../../context/PostsContext";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
import "highlight.js/styles/github.css";
export const Posts = () => {
  const { profile } = useContext(ProfileDataContext);
  const { currentPost } = useContext(PostsContext);

  const distanceBetweenDates = formatDistance(
    Date.parse(currentPost!.created_at),
    new Date(),
    { locale: ptBR, addSuffix: true }
  );

  const howManyComments = currentPost!.comments;
  return (
    <S.PostContainer>
      <S.Container>
        <S.Header>
          <S.Nav>
            <Link to="/">
              <FontAwesomeIcon icon={faArrowLeft} /> voltar
            </Link>
            <a href={currentPost?.html_url} target="_blank">
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
              <FontAwesomeIcon icon={faCalendarDay} /> {distanceBetweenDates}
            </span>
            <span>
              <FontAwesomeIcon icon={faComment} />{" "}
              {howManyComments >= 1 ? howManyComments : ""}
              {howManyComments == 0 ? " Nenhum " : ""}
              {howManyComments <= 1 ? " comentário" : " comentários"}
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
