export const redirect = (path) => {
  if (!path) return false;
  window.location.pathname = path;
};
