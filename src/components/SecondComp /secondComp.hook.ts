import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { wait, posts, authors } from "../utils";
import { IShowBio } from "./secondComp.models";

export const useSecondComp = () => {
  const [pickedAuth, setPickedAuth] = useState("");

  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => {
      return wait(3000).then(() => [...posts]);
    },
  });

  const authQuery = useQuery({
    queryKey: [pickedAuth, "name"],
    queryFn: () =>
      wait(3000).then(() => authors.find((e) => e.fullname === pickedAuth)),
    enabled: !!pickedAuth,
  });

  const ShowBio: IShowBio = (auth) =>
    !!authQuery?.data?.bio && pickedAuth === auth;

  console.log(`marcom ---> pickedAuth: `, pickedAuth);

  return {
    authQuery,
    bio: authQuery?.data?.bio,
    pickedAuth,
    postQuery,
    setPickedAuth,
    ShowBio,
  };
};
