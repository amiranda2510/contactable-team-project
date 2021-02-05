import { removeToken, setToken } from "../data.js";
import { login } from "../services/sessions_fetch.js";
import { SignupForm } from "./signup_form.js";
import { PageTemplate } from "./template.js";

function LoginForm() {
  let formHTML = `
  <form class="js-login-form">
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
      <a href="" class="js-login-to-signup-anchor btn-link">Signup</a>
      <input type="submit" class="btn-link" value="Login">
    </footer>
  </form>`;

  return {
    render: function () {
      PageTemplate("Login", formHTML);
      this.loginFormSubmitListener();
      this.sessionsAnchorToSignupClickListener();
    },
    loginFormSubmitListener: function () {
      let form = document.querySelector(".js-login-form");
      if (!form) return;

      form.addEventListener("submit", async (e) => {
        if (e.target === form) {
          e.preventDefault();

          let { email, password } = form;
          let response = await login({
            email: email.value,
            password: password.value,
          });

          /** Update token */
          if (response) {
            console.log(response);
            setToken(response.token);

            /** Render content */
            form.reset();
            PageTemplate("Contactable", "contactable-content");
          } else {
            removeToken();
          }
        }
      });
    },
    sessionsAnchorToSignupClickListener: function () {
      const anchor = document.querySelector(".js-login-to-signup-anchor");
      if (!anchor) return;

      anchor.addEventListener("click", (e) => {
        if (e.target === anchor) {
          e.preventDefault();

          SignupForm().render();
        }
      });
    },
  };
}

export { LoginForm };