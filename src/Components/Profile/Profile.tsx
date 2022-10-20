import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
export const Profile = () => {
  return (
    <S.Container>
      <S.ProfileContainer>
        <img src="https://github.com/JulioMacedo0.png" alt="" />
        <div>
          <header>
            <h2>Julio Macedo</h2>
            <S.linkContainer>
              <a href="">
                Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </S.linkContainer>
          </header>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>

          <S.Footer>
            <span>
              <FontAwesomeIcon icon={faGithub} /> cameronwll
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} /> Rocketseat
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} /> 32 seguidores
            </span>
          </S.Footer>
        </div>
      </S.ProfileContainer>
    </S.Container>
  );
};
