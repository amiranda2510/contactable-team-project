import { BASE_URL, getToken } from "../data.js";
import { apiFetch } from "./api_fetch.js";

function createcontact(params) {
  return apiFetch(`${BASE_URL}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token token=${getToken()}`,
    },
    body: JSON.stringify(params),
  });
}

function listContacts() {
  return apiFetch(`${BASE_URL}/contacts`, {
    method: "GET",
    headers: {
      Authorization: `Token token=${getToken()}`,
    },
  });
}

function showContact(id) {
  return apiFetch(`${BASE_URL}/contacts/${id}`, {
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

function deleteContact(id) {
  return apiFetch(`${BASE_URL}/contacts/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token token=${getToken()}`,
    },
  });
}

export { listContacts, editContact, createcontact, showContact, deleteContact };
