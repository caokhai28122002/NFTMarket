import axios from "axios";

let request = axios.create({});

const handleError = async (error: any) => {
  const data = error?.response?.data;
  return Promise.reject(data);
};

request.interceptors.response.use((response) => response.data, handleError);

export default request;
