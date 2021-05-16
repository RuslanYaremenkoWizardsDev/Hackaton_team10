import "regenerator-runtime/runtime";
import {
  validateLogin,
  validatePassword,
  compare,
} from "../../src/js/helpers/validation.js";

jest.mock("../../src/js/helpers/render.js", () => ({
  renderError : jest.fn()
}));

import {renderError} from "../../src/js/helpers/render.js"

describe("validateLogin", function () {
  it("should be defined ", function () {
    expect(validateLogin).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof validateLogin).toBe("function");
  });
  it("should be without arguments", function () {
    expect(validateLogin()).toBe(false);
  });
  it("should with no valid login", function () {
    const str1 = 'dassadsa21321%$&^($';
    const str2 = '21321%$&^($';
    const str3 = 'sad12^2';
    const str4 = 'ф1237126312';
    const str5 = 'ab';
    expect(validateLogin(str1)).toBe(false);
    expect(validateLogin(str2)).toBe(false);
    expect(validateLogin(str3)).toBe(false);
    expect(validateLogin(str4)).toBe(false);
    expect(validateLogin(str5)).toBe(false);
  });
  it("should with valid login", function () {
    const str1 = 'dsadsa21';
    const str2 = '2132121';
    const str3 = 'dsakjshadas'
    expect(validateLogin(str1)).toBe(true);
    expect(validateLogin(str2)).toBe(true);
    expect(validateLogin(str3)).toBe(true);
  });
});
describe("validatePassword", function () {
  it("should be defined ", function () {
    expect(validatePassword).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof validatePassword).toBe("function");
  });
  it("should be without arguments", function () {
    expect(validatePassword()).toBe(false);
  });
  it("should with no valid password", function () {
    const str1 = 'dassadsa21321%$&^($';
    const str2 = '21321%$&^($';
    const str3 = 'sad12^2';
    const str4 = 'ф1237126312';
    expect(validatePassword(str1)).toBe(false);
    expect(validatePassword(str2)).toBe(false);
    expect(validatePassword(str3)).toBe(false);
    expect(validatePassword(str4)).toBe(false);
  });
  it("should with valid password", function () {
    const str1 = 'dsadsa21';
    const str2 = '2132121';
    const str3 = 'dsakjshadas'
    expect(validatePassword(str1)).toBe(true);
    expect(validatePassword(str2)).toBe(true);
    expect(validatePassword(str3)).toBe(true);
  });
});


describe("compare", function () {
  it("should be defined ", function () {
    expect(compare).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof compare).toBe("function");
  });
  it("should be without arguments", function () {
    const a = '1';
    const b = '2';
    const c = '3';
    expect(compare()).toBe(false);
    expect(compare(a)).toBe(false);
    expect(compare(a,b)).toBe(false);
  });
  it("should be call renderError", function () {
    const left = 'leftarg';
    const right = 'rightarg';
    const node = {nodeKek: 123};
    expect(compare(left, right, node)).toBe(false);
    expect(renderError).toHaveBeenCalledWith(node, "password does not match")
  });
  it("should be call renderError", function () {
    const left = 'validpassword';
    const right = 'validpassword';
    const node = {nodeKek: 123};
    expect(compare(left, right, node)).toBe(true);
  });
});