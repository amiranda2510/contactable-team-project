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
export { listContacts };
