import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { wait, posts, singlePost } from '../utils';

export const useContextExample = () => {
  const [mutationContext, setMutationContext] = useState<unknown>({});

  const newPostMutation = useMutation({
    mutationFn: (title: string) =>
      wait(3000).then(() => posts.push({ ...singlePost, title: title })),
    onSuccess: (data, vars, context) => setMutationContext(context),
    onMutate: vars => ({ firstProp: 1 }),
  });

  return {
    newPostMutation,
    mutationContext,
  };
};
