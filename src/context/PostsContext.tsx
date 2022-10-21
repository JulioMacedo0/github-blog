import { createContext, ReactNode } from "react";
import { useEffect, useState } from "react";
import { api } from "../API/api";

interface PostsContextProps {
  children: ReactNode;
}

interface PostInterface {
  id: number;
  url: string;
  title: string;
  body: string;
  created_at: string;
  comments: number;
}
interface PostsContextType {
  post: PostInterface[];
}

export const PostsContext = createContext({} as PostsContextType);

export const PostsContextProvider = ({ children }: PostsContextProps) => {
  const [post, setPost] = useState<PostInterface[]>([]);

  const getPosts = async () => {
    const response = await api.get("/repos/juliomacedo0/github-blog/issues");
    setPost(response.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ post }}>{children}</PostsContext.Provider>
  );
};
