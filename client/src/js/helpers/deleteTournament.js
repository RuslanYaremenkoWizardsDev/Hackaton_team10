import { getRequest, postRequest, URL } from "../helpers/request.js";

export const onDeleteHandler = ({ target }) => {
  // function removeTournament(id) {
  //   const isConfirm = confirm("You want to delete tournament?");
  //   if (!isConfirm) return isConfirm;
  //   delete getRequest.id;
  //   return isConfirm;
  // }

  // function removeTournamentFromHtml(confirmed, el) {
  //   if (!confirmed) return;
  //   el.remove();
  // }

  // if (target.classList.contains("btn--remove")) {
  //   const parent = target.closest("filters-group");
  //   const id = parent.dataset.invoiceId;

  //   console.log(parent);
  //   const confirmed = removeTournament(id);
  //   removeTournamentFromHtml(confirmed, parent);
  // }

  // removeTournamentFromHtml(confirmed, parent);

  const clearAll = document.getElementById("clear-btn");
  console.log(clearAll);
};
