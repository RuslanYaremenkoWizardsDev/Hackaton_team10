export const checkRoles = (tabs, nav) => {
  let role = localStorage.getItem("role");
  if (role === "user") {
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.add("hidden");
    }
  }
  if (role === "guest") {
    nav.classList.add("hidden");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.add("hidden");
    }
  }
};
