import { getToken, removeToken } from "../data.js";
import { logout } from "../services/sessions_fetch.js"

let logoutClickListener = () => {
  const parent = document.querySelector("#app");
  parent.addEventListener("click", async (e)=>{
    const logoutBtn = document.querySelector(".js-logout-btn");
    if (e.target === logoutBtn) {
      e.preventDefault();
      await logout();
      removeToken();
      window.location = "/";
    }
  })
}

logoutClickListener()


function PageTemplate(title, body) {
  const divApp = document.querySelector("#app");
  divApp.innerHTML = `
    <header class="header-main header--line js-header">
      <h2 class="form-title">${title}</h2>
      ${getToken() ? `<a class="js-logout-btn" href="">Logout</a>` : ""}
    </header>

    <main>
      ${body}
    </main>
  `;
}

export { PageTemplate };
