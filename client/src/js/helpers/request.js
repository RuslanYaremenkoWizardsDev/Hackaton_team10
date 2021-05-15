import { getCookie } from "./cookieHelper.js";

export const URL = `http://localhost:8085/`;

export const getRequest = async (url, options) => {
  const answer = await fetch(url, options);
  return answer.json();
};
export const postRequest = async (url, options) => {

  const answer = await fetch(url, options);
  return answer.json();
};
export const putRequest = async (url, options) => {
  const answer = await fetch(url, options);
  return answer.json();
};
export const deleteRequest = async (url, options) => {
  const answer = await fetch(url, options);
  return answer.json();
};
