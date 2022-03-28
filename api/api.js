import axios from "axios";

export const ApiRoutes = {
  GET_MAIN_CONTENT: `/home_page`,
  GET_SIDE_CONTENT: `/left_widget`,
  GET_ABOUT_US: `/about_page`,
  GET_EVENTS: `/events`,
  GET_FORM: `/events/form`,
  ADD_EVENT: `/events`,
};

export const ApiInformation = {
  BASE_URL: `https://demo-api.vsdev.space/api/elonus`,
  TIMEOUT: 50000,
  WITH_CREDENTIALS: false
};


export const createApi = () => {
  const api = axios.create({
    baseURL: ApiInformation.BASE_URL,
    timeout: ApiInformation.TIMEOUT,
    withCredentials: ApiInformation.withCredentials
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    throw err;
  }

  api.interceptors.response.use(onSuccess, onFail);

  return api;
}
