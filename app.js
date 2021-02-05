import { ContactableIndex } from "./assets/scripts/components/contactable_index.js";
import { LoginForm } from "./assets/scripts/components/login_form.js";
import { getToken, STORE } from "./assets/scripts/data.js";
import { start } from "./assets/scripts/render_temp.js";
import { listContacts } from "./assets/scripts/services/contacts_fetch.js";
//start();
////////////////////////////

async function init() {
  if (getToken()) {
    STORE.contacts = await listContacts();
    ContactableIndex().render();
  } else {
    LoginForm().render();
  }
}

init();
