import { BASE_URL, getToken } from "../data.js";
import { apiFetch } from "./api_fetch.js";

function listContacts() {
  return apiFetch(`${BASE_URL}/contacts`, {
    method: "GET",
    headers: {
      Authorization: `Token token=${getToken()}`,
    },
  });
}

function editContact(id, args) {
  return apiFetch(`${BASE_URL}/contacts/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token token=${getToken()}`,
    },
    body: JSON.stringify(args),
  });
}

export { listContacts, editContact };
