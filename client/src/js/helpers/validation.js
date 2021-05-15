import {renderError} from './render'

export const validateLogin = (login) => {
  const reg = new RegExp(/^[a-zA-Z0-9]{3,25}/, "i");
  if (!reg.test(login)) return false;
  return true;
};

export const validatePassword = (password) => {
  const reg = new RegExp(/^[a-zA-Z0-9]{6,25}/, "i");
  if (!reg.test(password)) return false;
  return true;
};

export const compare = (left, right, node) => {
  if (left === right) return true;
 renderError(node, 'password !== confirm password')
 return false;
};
