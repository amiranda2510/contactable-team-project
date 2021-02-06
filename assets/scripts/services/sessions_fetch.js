import { BASE_URL } from "../data.js";
import { apiFetch } from "./api_fetch.js";
import { getToken } from "../data.js"

function login(credentials) {
  return apiFetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
}

function logout() {
  return apiFetch(`${BASE_URL}/logout`, {
    method: "DELETE",
    headers: {
      Authorization: `Token token=${getToken()}`,
    },
  })
}

export { login, logout };
