import { getToken } from "../data.js";

function PageTemplate(title, body) {
  const divApp = document.querySelector("#app");
  divApp.innerHTML = `
    <header class="header-main ${
      title != "Contactable" ? "header--line" : ""
    } js-header">
      <h2 class="form-title ${
        title == "Contactable" ? "logo__title" : ""
      }">${title}</h2>
      ${getToken() ? `<a class="js-logout-btn" href="">Logout</a>` : ""}
    </header>

    <div class="js-notifications"></div>
    
      <main>
      ${body}
    </main>
  `;
}

export { PageTemplate };
