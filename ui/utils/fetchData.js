export const fetchData = (url) => {
  return fetch(`http://localhost:8081/${url}`, {
    //TODO: no-cors mode is not working, please use chrome extension "Allow CORS: Access-Control-Allow-Origin"
    // mode: 'no-cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then((response) => {
    if (response.ok) {
      return response.json().then((json) => {
        return json.data;
      });
    }
  });
};
