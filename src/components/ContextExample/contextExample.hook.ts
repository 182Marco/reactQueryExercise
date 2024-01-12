import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { wait, posts, singlePost } from '../utils';

export const useContextExample = () => {
  const [mutationContext, setMutationContext] = useState<unknown>({});

  const newPostMutation = useMutation({
    mutationFn: (title: string) =>
      wait(3000).then(() => posts.push({ ...singlePost, title: title })),
    onMutate: vars => ({ firstProp: 1 }), // perform actions before the mutation or set values inside the context
    onSuccess: (data, vars, context) => setMutationContext(context),
    onSettled: () => {}, // similar to 'finally' in Promises
  });

  return {
    newPostMutation,
    mutationContext,
  };
};
