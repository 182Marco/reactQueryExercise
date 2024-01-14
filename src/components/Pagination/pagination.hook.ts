import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { paginatedJphPostsUrl } from '../../utils';

export const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = 25;

  const postQuery = useQuery({
    queryKey: ['posts', currentPage],
    queryFn: async () => {
      const res = await axios.get(paginatedJphPostsUrl(currentPage));
      console.log(`marcom ---> currentPage: `, currentPage);
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
