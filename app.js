import { SignupForm } from "./assets/scripts/components/signup_form.js";
import { PageTemplate } from "./assets/scripts/components/template.js";
import { getToken } from "./assets/scripts/data.js";
import { start } from "./assets/scripts/render_temp.js";
//start();
////////////////////////////

function init() {
  if (getToken()) {
    PageTemplate("Contactable", "Main");
  } else {
    SignupForm().render();
  }
}

init();
