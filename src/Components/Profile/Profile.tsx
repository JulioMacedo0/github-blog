import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { api } from "../../API/api";

interface ProfileInterface {
  avatar_url: string;
  company: string;
  followers: number;
  html_url: string;
  login: string;
  name: string;
  bio: string;
}

export const Profile = () => {
  const [profile, setProfile] = useState<ProfileInterface>(
    {} as ProfileInterface
  );

  const getProfile = async () => {
    const response = await api.get("/users/juliomacedo0");
    console.log(response.data);
    setProfile(response.data);
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <S.Container>
      <S.ProfileContainer>
        <img src={profile.avatar_url} alt="avatar" />
        <div>
          <header>
            <h2>{profile.name}</h2>
            <S.linkContainer>
              <a href={profile.html_url}>
                Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </S.linkContainer>
          </header>
          <p>{profile.bio ?? "Nenhuma biografia"}</p>

          <S.Footer>
            <span>
              <FontAwesomeIcon icon={faGithub} /> {profile.login}
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} />{" "}
              {profile.company ?? "Nenhuma"}
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} /> {profile.followers}{" "}
              seguidor{profile.followers == 1 ? "" : "es"}
            </span>
          </S.Footer>
        </div>
      </S.ProfileContainer>
    </S.Container>
  );
};
