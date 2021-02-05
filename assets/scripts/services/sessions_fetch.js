import { BASE_URL } from "../data.js";
import { apiFetch } from "./api_fetch.js";

function login(credentials) {
  return apiFetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
}

export { signup };
