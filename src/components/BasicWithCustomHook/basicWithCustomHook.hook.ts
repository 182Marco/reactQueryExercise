import { useGetPostsHook } from '../../cutomQueryHooks';

export const useBasicWithCustomHook = () => {
  const { data, error, isLoading, isError } = useGetPostsHook();

  return {
    data: data as Record<string, string | number>[],
    error,
    isLoading,
    isError,
  };
};
