import "regenerator-runtime/runtime";
import { redirect } from "../../src/js/helpers/redirect.js";

describe("renderError", function () {
  it("should be defined ", function () {
    expect(redirect).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof redirect).toBe("function");
  });
  it("should be without arguments", function () {
    expect(redirect()).toBe(false);
  });
  it("should with valid path", function () {
    const path = "testPath.html";
    delete window.location;
    window.location = {pathname: 'kek'};
    redirect(path);
    expect(window.location.pathname).toBe(path);
  });
});
