import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { paginatedJphPostsUrl } from '../../utils';

const fetchPosts = async ({ pageParam = 1 }) => {
  const res = await axios.get(paginatedJphPostsUrl(pageParam));
  return res.data;
};

export const useInfiniteScroll = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isError,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ['paginated-posts'],
    queryFn: fetchPosts,
    getNextPageParam: lastPage => lastPage.nextCursor || undefined,
  });

  return {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isError,
    isFetching,
    isLoading,
  };
};
