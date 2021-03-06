import axios from "axios";

const apiClient = axios.create();
apiClient.defaults.baseURL = APP_URL;

apiClient.interceptors.request.use(function (request) {
  const token = localStorage.getItem('token');
  if(token) {
    request.headers.authorization = `Bearer ${token}`;
  }
  return request;
});

apiClient.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});


export default apiClient;
