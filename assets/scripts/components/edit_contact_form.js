import { STORE } from "../data.js";
import { PageTemplate } from "./template.js";
import { ContactableIndex } from "./contactable_index.js";
import { editContact } from "./../services/contacts_fetch.js";

function editContactForm(contact) {
  let template = `
  <form class="form-wrapper js-edit-contact-form">
        <div class="form__content">
          <label class="form__field">
            <input value="${
              contact.name
            }" type="name" name="name" placeholder="Name" required>
          </label>
      
          <label class="form__field">
            <input value="${
              contact.number
            }" type="number" name="number" placeholder="Number" required>
          </label>

          <label class="form__field">
            <input value="${
              contact.email
            }" type="email" name="email" placeholder="Email">
          </label>

          <label class="form__field">
            <select type="relation" name="relation">
              <option value="Family" ${
                contact.relation == "Family" ? "selected" : ""
              }>Family</option>
              <option value="Friends" ${
                contact.relation == "Friends" ? "selected" : ""
              }>Friends</option>
              <option value="Work" ${
                contact.relation == "Work" ? "selected" : ""
              }>Work</option>
              <option value="Acquaintance" ${
                contact.relation == "Acquaintance" ? "selected" : ""
              }>Acquaintance</option>
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
      PageTemplate("Edit contact", template);
      this.editContactSubmitListener();
      this.redirectToHomeAnchorClickListener();
    },
    editContactSubmitListener: function () {
      let form = document.querySelector(".js-edit-contact-form");
      if (!form) return;

      form.addEventListener("submit", async (e) => {
        if (e.target === form) {
          e.preventDefault();

          let { name, number, email, relation } = form;
          let editedContact = await editContact(contact.id, {
            name: name.value,
            number: number.value,
            email: email.value,
            relation: relation.value,
          });

          if (editedContact) {
            STORE.contacts = STORE.contacts.map((el) => {
              if (el.id === editedContact.id) {
                return editedContact;
              } else {
                return el;
              }
            });
            ContactableIndex().render();
          }
        }
      });
    },
    redirectToHomeAnchorClickListener: function () {
      const anchor = document.querySelector(".js-redirect-to-home-anchor");
      if (!anchor) return;

      anchor.addEventListener("click", (e) => {
        if (e.targe === anchor) {
          e.preventDefault();

          ContactableIndex().render();
        }
      });
    },
  };
}

export { editContactForm };
