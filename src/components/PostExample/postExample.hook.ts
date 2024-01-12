import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { genRandom, jsonplaceholderPostUrl } from '../utils';
import { IPost, ISendPost } from './postExample.models';

export const usePostExample = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [postedPost, setPostedPost] = useState<IPost>();

  const postMutation = useMutation<IPost, Error, IPost>({
    mutationFn: async addedpost => {
      const res = await axios.post(jsonplaceholderPostUrl, addedpost);
      return res?.data;
    },
    onMutate: () => console.log('this is before mutation'),
    onSuccess: data => setPostedPost(data),
  });

  const handleSubmit: ISendPost = ev => {
    ev.preventDefault();
    const addedPost = { title, body, id: genRandom() };
    postMutation.mutate(addedPost);
  };

  return {
    body,
    handleSubmit,
    postedPost,
    setBody,
    setTitle,
    title,
  };
};
