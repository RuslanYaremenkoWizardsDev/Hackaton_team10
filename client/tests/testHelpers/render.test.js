import "regenerator-runtime/runtime";
import { renderError } from "../../src/js/helpers/render.js";

describe("renderError", function () {
  it("should be defined ", function () {
    expect(renderError).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof renderError).toBe("function");
  });
  it("should be without arguments", function () {
      const node = {};
      const value = 'testValue';
    expect(renderError()).toBe(false);
    expect(renderError(node)).toBe(false);
    expect(renderError(value)).toBe(false);
  });
  it("should with valid login", function () {
      const changeValue = 'changedValue';
    const node = {textContent: 'testValue'}
    renderError(node, changeValue);
    expect(node.textContent).toBe(changeValue);
  });
});
