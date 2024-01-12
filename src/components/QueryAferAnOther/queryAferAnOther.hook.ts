import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { wait, posts, authors } from '../utils';
import { IShowBio } from './queryAferAnOther.models';

export const useQueryAferAnOther = () => {
  const [pickedAuth, setPickedAuth] = useState<string>();

  const postQuery = useQuery({
    queryKey: ['posts'],
    queryFn: () => {
      return wait(3000).then(() => [...posts]);
    },
  });

  const authQuery = useQuery({
    queryKey: [pickedAuth, 'name'],
    queryFn: () =>
      wait(3000).then(() => authors.find(e => e.fullname === pickedAuth)),
    enabled: !!pickedAuth,
  });

  const showBio: IShowBio = auth =>
    !!authQuery?.data?.bio && pickedAuth === auth;

  return {
    authQuery,
    bio: authQuery?.data?.bio,
    pickedAuth,
    postQuery,
    setPickedAuth,
    showBio,
  };
};
