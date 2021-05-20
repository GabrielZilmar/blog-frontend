const fetchAPI = async (props) => {
  const { method, url, body } = props;

  return fetch(`https://jsonplaceholder.typicode.com/${url}`, {
    method,
    body: body ? JSON.stringify(body) : null,
  })
    .then((response) => {
      if (response.status === 204) {
        return response.text();
      }
      return response.json();
    })
    .catch((error) => ({
      message: 'Request error!',
      description: error.message,
      response: error.response,
    }));
};

export default fetchAPI;
