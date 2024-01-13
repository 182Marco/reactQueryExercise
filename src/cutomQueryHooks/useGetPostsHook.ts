import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { jsonplaceholderPostUrl } from '../utils';

const getPosts = async () => {
  const res = await axios.get(jsonplaceholderPostUrl);
  return res.data;
};

export const useGetPostsHook = () => {
  return useQuery({
    queryKey: ['AllPosts'],
    queryFn: () => getPosts(),
  });
};
