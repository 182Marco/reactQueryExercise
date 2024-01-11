import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { wait, posts, singlePost } from "../utils";

export const useSecondComp = () => {
  const queryClient = useQueryClient();

  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: ({ queryKey }) => {
      console.log(`marcom ---> obj: `, queryKey);
      return wait(3000).then(() => [...posts]);
    },
    staleTime: 5000,
    refetchInterval: 5000,
    // queryFn: () => Promise.reject("error msg"),
  });

  const newPostMutation = useMutation({
    mutationFn: (title: string) =>
      wait(3000).then(() => posts.push({ ...singlePost, title: title })),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });

  return {
    data: postQuery.data,
    error: postQuery.error,
    isLoading: postQuery.isLoading,
    isError: postQuery.isError,
    newPostMutation,
  };
};
