import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { wait, posts, genRandom } from '../utils';
import { PostPayload } from './postEcample.models';

export const usePostExample = () => {
  const [title, settitle] = useState('');
  const [abstract, setabstract] = useState('');

  const newPostMutation = useMutation<void, Error, PostPayload>({
    mutationFn: async ({ title, abstract }) => {
      await wait(3000);
      posts.push({ title, abstract, id: genRandom() });
    },
  });

  return {
    abstract,
    newPostMutation,
    title,
    setabstract,
    settitle,
  };
};
