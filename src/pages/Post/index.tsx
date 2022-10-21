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
export const Posts = () => {
  const { profile } = useContext(ProfileDataContext);
  const { post } = useContext(PostsContext);
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

          <h2>JavaScript data tpes and data strutures</h2>

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

        <S.Content>{}</S.Content>
      </S.Container>
    </S.PostContainer>
  );
};
