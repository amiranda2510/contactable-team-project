import { BASE_URL } from "./../data.js";
import { apiFetch } from "./api_fetch.js";

function createcontact(params) {
  return apiFetch(`${BASE_URL}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token token=${getToken}`,
    },
    body: JSON.stringify(params),
  });
}

export { createcontact };
