import "regenerator-runtime/runtime";
import {
  setCookie,
  getCookie,
  killCookie,
} from "../../src/js/helpers/cookieHelper";

describe("killCookie", function () {
  it("should be defined ", function () {
    expect(killCookie).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof killCookie).toBe("function");
  });
  it("should be function", function () {
/*     delete window.location;
    delete window.document.cookie
    window.document.cookie = "oldCookie";
    window.location = { pathname: "oldpath.html" };
    console.log(window.document.cookie);
    killCookie();
    expect(window.document.cookie).toBe("token=;max-age=0");
    expect(window.location.pathname).toBe("index.html"); */
  });
});
