import { BASE_URL } from "./../data.js";
import { apiFetch } from "./api_fetch.js";

function signup(params) {
  return apiFetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
}

export { signup };
