import { renderAllTournaments } from "./getTournaments.js";

export const filterTournaments = (data) => {
  renderAllTournaments(data);
  let selectParticipants = document.getElementById("participants");
  let inputStartDate = document.getElementById("filter-start-date");
  let filter = inputStartDate.value.toUpperCase();
  // let field = document.querySelector(".table__content-item");
  // let txtValue;

  // for (let i = 0; i < field.length; i++) {
  //   p = field[i].getElementsByTagName("p")[0];
  //   txtValue = p.textContent || p.innerText;

  //   if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //     field[i].style.display = "";
  //   } else {
  //     field[i].style.display = "none";
  //   }
  // }

  console.log("gg", renderAllTournaments(data.number));
};
