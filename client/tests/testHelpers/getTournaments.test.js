import "regenerator-runtime/runtime";
import { renderAllTournaments } from "../../src/js/helpers/getTournaments.js";

describe("renderAllTournaments", function () {
  const data = {
    _id: "5ba37c48185c0c98e6880bed",
    number: 63805,
    date_created: "23-11-2015",
    date_supplied: "20-06-2016",
    comment: "ad do",
  };

  it("works as expected", function () {
    const content = document.createElement("div");
    content.classList.add("table__content-item");

    const field = document.createElement("p");
    field.classList.add("table__content-item", "table__item");
    field.textContent = data._id;

    document.body.innerHTML = `<div class="table__content" id="tournamentsContainer">
      <div class="table__content-item">
        <p class="table__content-item table__item"></p>
        <p class="table__content-item table__item"></p>
        <p class="table__content-item table__item"></p>
        <p class="table__content-item table__item"></p>
        <p class="table__content-item table__item"></p>
        <p class="table__content-item table__item"></p>
        <p class="table__content-item table__item"></p>
        <p class="table__content-item table__item"></p>
        <p class="table__content-item table__item"></p>
        <p class="table__content-item table__item"></p>
      </div>
    </div>`;

    const tournamentsContainer = document.getElementById(
      "tournamentsContainer"
    );

    expect(content.classList.contains("table__content-item")).toBe(true);
    expect(field.classList.contains("table__content-item", "table__item")).toBe(
      true
    );
    expect(field.textContent).toBe("5ba37c48185c0c98e6880bed");

    content.append(field);
    tournamentsContainer.append(content);
    expect(content.innerHTML).toBe(
      `<p class="table__content-item table__item"></p>`
    );
    // expect(tournamentsContainer.innerHTML).toBe(
    //   `<div class="table__content-item"></div>`
    // );
  });

  it("should be paint", function () {
    require("../../src/js/helpers/getTournaments");
  });
  it("should be defined ", function () {
    expect(renderAllTournaments).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof renderAllTournaments).toBe("function");
  });
  it("should be with data", function () {
    expect(renderAllTournaments(!data)).toBe("Pass the list of tournaments!");
  });
});
