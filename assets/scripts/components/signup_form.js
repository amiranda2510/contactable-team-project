import { removeToken, setToken, STORE } from "../data.js";
import { listContacts } from "../services/contacts_fetch.js";
import { signup } from "./../services/users_fetch.js";
import { ContactableIndex } from "./contactable_index.js";
import { LoginForm } from "./login_form.js";
import { PageTemplate } from "./template.js";

function SignupForm() {
  let template = `
      <form class="js-signup-form">
        <div class="form__content">
          <label class="form__field">
            <input type="email" name="email" placeholder="email@mail.com" required>
            <span>error</span>
          </label>
      
          <label class="form__field">
            <input type="password" name="password" required>
            <span hidden>error</span>
          </label>
        </div>

        <footer class="footer">
          <a href="" class="js-signup-to-login-anchor btn-link">Login</a>
          <input type="submit" class="btn-link" value="Create Account">
        </footer>
      </form>`;

  return {
    render: function () {
      PageTemplate("Signup", template);
      this.usersSignupFormSubmitListener();
      this.usersAchorToLoginClickListener();
    },
    usersSignupFormSubmitListener: function () {
      let form = document.querySelector(".js-signup-form");
      if (!form) return;

      form.addEventListener("submit", async (e) => {
        if (e.target === form) {
          e.preventDefault();

          let { email, password } = form;
          let newUser = await signup({
            email: email.value,
            password: password.value,
          });

          if (newUser) {
            setToken(newUser.token);

            STORE.contacts = await listContacts();
            /** Render content */
            ContactableIndex().render();
          } else {
            removeToken();
          }
        }
      });
    },
    usersAchorToLoginClickListener: function () {
      const anchor = document.querySelector(".js-signup-to-login-anchor");
      if (!anchor) return;

      anchor.addEventListener("click", (e) => {
        if (e.target === anchor) {
          e.preventDefault();

          LoginForm().render();
        }
      });
    },
  };
}

export { SignupForm };
