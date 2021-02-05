import { LoginForm } from "../components/login_form.js";
import { removeToken } from "../data.js";

async function apiFetch(...args) {
  try {
    let response = await fetch(...args);

    if (response.status === 204) return await response.text();

    let data = await response.json();
    if (!response.ok) throw new Error(data.errors);

    return data;
  } catch (error) {
    if (
      [
        "Access denied",
        "NetworkError when attempting to fetch resource.",
      ].includes(error.message)
    ) {
      removeToken();
      LoginForm().render();
    }
    alert(error.message);
    return false;
  }
}

export { apiFetch };
