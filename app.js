import { ContactableIndex } from "./assets/scripts/components/contactable_index.js";
import { LoginForm } from "./assets/scripts/components/login_form.js";
import { getToken, STORE } from "./assets/scripts/data.js";
import { logoutClickListener } from "./assets/scripts/listeners/logout_listener.js";
import { listContacts } from "./assets/scripts/services/contacts_fetch.js";

async function init() {
  if (getToken()) {
    let response = await listContacts();

    if (response) {
      /**
        false if something was wrong
          - APIfetch will remove the token and redirect to login view.
        [Array] if was successfuly
        */
      STORE.contacts = response;
      ContactableIndex().render();
    }
    /** case ELSE is not necessary,
      because API fetch is handling
        - 'Access denied'
        - 'NetworkError when attempting to fetch resource.'
      errors in all requests to server */
  } else {
    LoginForm().render();
  }
  logoutClickListener();
}

init();
