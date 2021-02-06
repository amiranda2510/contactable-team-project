import { LoginForm } from "../components/login_form.js";
import { removeToken } from "../data.js";

async function apiFetch(...args) {
  try {
    let response = await fetch(...args);

    if (response.status === 204) return true;

    let data = await response.json();

    if (!response.ok) {
      let errors = data.errors;

      if (
        errors &&
        [
          "Access denied",
          "NetworkError when attempting to fetch resource.",
        ].includes(errors.message)
      ) {
        removeToken();
        LoginForm().render();
      }

      /** displaying error messages */
      const container = document.querySelector("div.js-notifications");

      if (container) {
        let errorMessage = Object.keys(data)
          .map((k) => `${k.toUpperCase()}: ${data[k].join(", ")}.`)
          .join("<br>");

        console.log(data);

        container.innerHTML = `
        <div class="error-msg">${errorMessage}</div>`;
        setTimeout(() => (container.innerHTML = ""), 5800);
      }
      /** END displaying error messages */

      throw new Error("Something was bad");
    }

    return data;
  } catch (error) {
    return false;
  }
}

export { apiFetch };
