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
  html_url: string;
}
interface PostsContextType {
  post: PostInterface[];
  haddleChangeCurrentPostId: (id: number) => void;
  currentPost: PostInterface | undefined;
  filteredPost: PostInterface[] | undefined;
  onChangeSetInput: (input: string) => void;
  inputValue: string;
}

export const PostsContext = createContext({} as PostsContextType);

export const PostsContextProvider = ({ children }: PostsContextProps) => {
  const [post, setPost] = useState<PostInterface[]>([]);
  const [currentPostId, setCurrentPostId] = useState(0);
  const [inputValue, setInput] = useState("");

  const currentPost = post.find((post) => post.id == currentPostId);
  const filteredPost = post.filter((post) => post.title.includes(inputValue));

  console.log(`post filtrado: ${filteredPost}`);
  const haddleChangeCurrentPostId = (id: number) => {
    setCurrentPostId(id);
  };

  const getPosts = async () => {
    const response = await api.get("/repos/juliomacedo0/github-blog/issues");
    setPost(response.data);
  };

  const onChangeSetInput = (input: string) => {
    setInput(input);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <PostsContext.Provider
      value={{
        post,
        haddleChangeCurrentPostId,
        currentPost,
        filteredPost,
        onChangeSetInput,
        inputValue,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
