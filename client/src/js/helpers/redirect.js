export const redirect = (path) => {
  if (!path) return false;
  console.log(window.location.pathname);
  window.location.pathname = path;
};
