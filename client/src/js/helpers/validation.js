import { renderError } from "./render";

export const validateLogin = (login) => {
  if (!login) return false;
  const reg = new RegExp(/^([a-z]+|\d+){3,25}$/, "i");
  if (!reg.test(login)) return false;

  return true;
};

export const validatePassword = (password) => {
  if (!password) return false;
  const reg = new RegExp(/^([a-z]+|\d+){6,25}$/, "i");
  if (!reg.test(password)) return false;
  return true;
};

export const compare = (left, right, node) => {
  if (!left || !right || !node) return false;
  if (left === right) {
    return true;
  }
  renderError(node, "password does not match");
  return false;
};
