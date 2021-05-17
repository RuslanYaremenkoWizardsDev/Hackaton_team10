import "regenerator-runtime/runtime";
import { renderAllTournaments } from "../../src/js/helpers/getTournaments.js";

describe("renderAllTournaments", function () {
  it("should be defined ", function () {
    expect(renderAllTournaments).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof renderAllTournaments).toBe("function");
  });
  it("should be with data", function () {
    expect(renderAllTournaments()).toBe("Pass the list of tournaments!");
  });
 /*  it("") */
});
