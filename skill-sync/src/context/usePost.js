import { useContext } from "react";
import { PostContext } from "./JobsContext";

export const usePost = () => useContext(PostContext);
