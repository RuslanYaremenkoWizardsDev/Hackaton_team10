export const setCookie = (name) => {
  document.cookie = `${name}=${data.token}; max-age=3600`;
};
export const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
};
export const killCookie = () => {
  document.cookie = "token=;max-age=0";
  window.location.pathname = "index.html";
};
