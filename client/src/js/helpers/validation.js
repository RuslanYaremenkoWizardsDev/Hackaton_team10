import { renderError } from "./render";

export const validateLogin = (login) => {
  if (!login) return false;
  const reg = new RegExp(/^[a-z0-9_-]{3,25}$/, "i");
  if (!reg.test(login)) return false;

  return true;
};

export const validatePassword = (password) => {
  if (!password) return false;
  const reg = new RegExp(/^[a-z0-9_-]{6,25}$/, "i");
  console.log('reg', !reg.test(password));
  if (!reg.test(password)) {
    return false;
  }
  return true;
};

export const compare = (left, right, node) => {
  const validLeft = validatePassword(left);
  const validRight  = validatePassword(right);
  console.log('validLeft', validLeft);
  console.log('validRight', validRight);
  if (left === undefined || right === undefined || !node) {
    return false;
  }
  if (left !== right) {
    renderError(node, "password does not match");
    return false;
  }
  console.log('lr', left, right)
  return true;

};
