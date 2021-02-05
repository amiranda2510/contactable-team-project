import { signup } from "./../services/users_fetch.js";
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
            sessionStorage.token = newUser.token;
            PageTemplate("Contactable", "contactable-content");
          } else {
            sessionStorage.removeItem("token");
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

          PageTemplate("Login", "Login form");
        }
      });
    },
  };
}

export { SignupForm };
