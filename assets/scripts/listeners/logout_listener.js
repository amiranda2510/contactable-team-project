import { removeToken } from "../data.js";
import { logout } from "./../services/sessions_fetch.js";

let logoutClickListener = () => {
  const parent = document.querySelector("#app");
  parent.addEventListener("click", async (e) => {
    const logoutBtn = document.querySelector(".js-logout-btn");
    if (e.target === logoutBtn) {
      e.preventDefault();
      await logout();
      removeToken();
      window.location = "/";
    }
  });
};

export { logoutClickListener };
