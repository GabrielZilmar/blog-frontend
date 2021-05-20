import fetchAPI from '../utils/functions/request';

export const list = async () => fetchAPI({
  method: 'GET',
  url: 'posts',
});

export const getComments = async (id) => fetchAPI({
  method: 'GET',
  url: `posts/${id}/comments`,
});
