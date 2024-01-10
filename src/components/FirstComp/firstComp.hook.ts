import { useMutation, useQuery } from "@tanstack/react-query";
import { wait, posts } from "../utils";

export const useFirstComp = () => {
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(3000).then(() => [...posts]),
    // queryFn: () => Promise.reject("error msg"),
  });

  return {
    data: postQuery.data,
    error: postQuery.error,
    isLoading: postQuery.isLoading,
    isError: postQuery.isError,
  };
};
