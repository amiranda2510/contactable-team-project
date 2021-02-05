import { getToken } from "../data.js";

function PageTemplate(title, body) {
  const divApp = document.querySelector("#app");
  divApp.innerHTML = `
    <header class="js-header">
      <h2>${title}</h2>
      ${getToken() ? `<a href="">Logout</a>` : ""}
    </header>

    <main>
      ${body}
    </main>
  `;
}

export { PageTemplate };
