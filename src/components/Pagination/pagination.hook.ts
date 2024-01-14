import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { paginatedJphPostsUrl } from '../../utils';

export const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = 25;
  const queryClient = useQueryClient();

  useEffect(() => {
    const nextPage = currentPage + 1;
    queryClient.prefetchQuery({
      queryKey: ['posts', nextPage],
      queryFn: async () => {
        const res = await axios.get(paginatedJphPostsUrl(currentPage));
        return res.data;
      },
    });
  }, [currentPage, queryClient]);

  const postQuery = useQuery({
    queryKey: ['posts', currentPage],
    queryFn: async () => {
      const res = await axios.get(paginatedJphPostsUrl(currentPage));
      return res.data;
    },
  });

  return {
    currentPage,
    data: postQuery.data,
    error: postQuery.error,
    maxPage,
    isLoading: postQuery.isLoading,
    isError: postQuery.isError,
    setCurrentPage,
  };
};
