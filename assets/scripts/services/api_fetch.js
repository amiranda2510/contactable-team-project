import { LoginForm } from "../components/login_form.js";
import { removeToken } from "../data.js";

async function apiFetch(...args) {
  try {
    let response = await fetch(...args);

    if (response.status === 204) return true;

    let data = await response.json();

    if (!response.ok) {
      if (data.errors && "Access denied" === data.errors[0]) {
        removeToken();
        LoginForm().render();
      }

      /** displaying error messages */
      const container = document.querySelector("div.js-notifications");

      if (container) {
        let errorMessage = Object.keys(data)
          .map((k) => `${k.toUpperCase()}: ${data[k].join(", ")}.`)
          .join("<br>");

        container.innerHTML = `
        <div class="error-msg">${errorMessage}</div>`;
        setTimeout(() => (container.innerHTML = ""), 5800);
      }

      /** END displaying error messages */

      throw new Error(data.errors);
    }

    return data;
  } catch (error) {
    const app = document.querySelector("div#app");
    if (app.innerHTML === "") {
      removeToken();
      LoginForm().render();
    }
    const container = document.querySelector("div.js-notifications");
    if (container) {
      container.innerHTML = `<div class="error-msg">${error.message}</div>`;
      setTimeout(() => (container.innerHTML = ""), 5800);
    }

    return false;
  }
}

export { apiFetch };
