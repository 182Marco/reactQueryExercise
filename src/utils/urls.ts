export const jsonplaceholderPostUrl =
  'https://jsonplaceholder.typicode.com/posts';

export const paginatedJphPostsUrl = (pageN: number) =>
  `https://jsonplaceholder.typicode.com/posts?_limit=4&_page=${pageN}`;
