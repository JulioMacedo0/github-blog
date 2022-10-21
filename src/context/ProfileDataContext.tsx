import { createContext, ReactNode } from "react";
import { useEffect, useState } from "react";
import { api } from "../API/api";

interface ProfileInterface {
  avatar_url: string;
  company: string;
  followers: number;
  html_url: string;
  login: string;
  name: string;
  bio: string;
}

interface ProfiledataContextProps {
  children: ReactNode;
}

interface ProfileDataContextType {
  profile: ProfileInterface;
}

export const ProfileDataContext = createContext({} as ProfileDataContextType);

export const ProfiledataContextProvider = ({
  children,
}: ProfiledataContextProps) => {
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
    <ProfileDataContext.Provider value={{ profile }}>
      {children}
    </ProfileDataContext.Provider>
  );
};
