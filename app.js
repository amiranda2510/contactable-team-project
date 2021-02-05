import { ContactableIndex } from "./assets/scripts/components/contactable_index.js";
import { LoginForm } from "./assets/scripts/components/login_form.js";
import { getToken } from "./assets/scripts/data.js";
import { start } from "./assets/scripts/render_temp.js";
//start();
////////////////////////////

function init() {
  if (getToken()) {
    ContactableIndex().render();
  } else {
    LoginForm().render();
  }
}

init();
