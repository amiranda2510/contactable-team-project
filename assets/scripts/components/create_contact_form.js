import { createcontact } from "./../services/contacts_fetch.js";
import { PageTemplate } from "./template";

function createContactForm() {
  let template = `
  <form class="form-wrapper js-create-contact-form">
        <div class="form__content">
          <label class="form__field">
            <input type="name" name="name" placeholder="Name" required>
            <span class="error-msg">Error message</span>
          </label>
      
          <label class="form__field">
            <input type="number" name="number" placeholder="Number" required>
            <span hidden class="error-msg">Error message</span>
          </label>

          <label class="form__field">
            <input type="email" name="email" placeholder="Email">
          </label>

          <label class="form__field">
            <select type="relation" name="relation" placeholder="Relation">
              <option>Family</option>
              <option>Friends</option>
              <option>Work</option>
              <option>Acquaintance</option>
            </select>
          </label>
        </div>

        <footer class="footer footer--line">
          <a href="" class="js-redirect-to-home-anchor btn-link">Cancel</a>
          <input type="submit" class="btn btn-link" value="Save">
        </footer>
      </form>`;

  return {
    render: function () {
      PageTemplate("Create new contact", template);
      this.createContactSubmitListener();
      this.redirectToHomeAnchorClickListener();
    },
    createContactSubmitListener: function () {
      let form = document.querySelector(".js-create-contact-form");
      if (!form) return;

      form.addEventListener("submit", async (e) => {
        if (e.target === form) {
          e.preventDefault();

          let { name, number, email, relation } = form;
          let newContact = await createcontact({
            name: name.value,
            number: number.value,
            email: email.value,
            relation: relation.value,
          });

          if (newContact) {
            console.log(newContact);
          }
        }
      });
    },
  };
}
