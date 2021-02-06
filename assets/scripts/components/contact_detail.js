import { STORE } from "../data.js";
import { PageTemplate } from "./template.js";
import { showContact, deleteContact } from "./../services/contacts_fetch.js";
import { ContactableIndex } from "./contactable_index.js";
import { editContactForm } from "./edit_contact_form.js";

async function showContactDetail(id) {
  id = parseInt(id);
  let contact = await showContact(id);

  let template = `
  <section>
    <div>
      <h1>${contact.name}</h1>
      <p>${contact.relation}</p>
    </div>
    <div>
      <p>Number: ${contact.number}</p>
      <p>Email: ${contact.email}</p>
    </div>
    <footer class="footer footer--line">
      <a href="" class="js-back-anchor btn">Back</a>
      <a href="" class="js-delete-anchor btn">Delete</a>
      <a href="" class="js-edit-anchor btn">Edit</a>
    </footer>
  </section>
  `;

  return {
    render: function () {
      PageTemplate("Contact Details", template);
      this.redirectToHomeAnchorClickListener();
      this.deleteContactClickListener();
      this.editContactClickListener();
    },
    redirectToHomeAnchorClickListener: function () {
      const anchor = document.querySelector(".js-back-anchor");
      if (!anchor) return;

      anchor.addEventListener("click", (e) => {
        if (e.targe === anchor) {
          e.preventDefault();

          ContactableIndex().render();
        }
      });
    },
    deleteContactClickListener: function () {
      let anchor = document.querySelector(".js-delete-anchor");
      if (!anchor) return;

      anchor.addEventListener("click", async (e) => {
        if (e.target === anchor) {
          e.preventDefault();

          let response = await deleteContact(id);

          if (response) {
            STORE.contacts = STORE.contacts.filter(
              (contact) => contact.id != id
            );
            ContactableIndex().render();
          }
        }
      });
    },
    editContactClickListener: function () {
      const anchor = document.querySelector(".js-edit-anchor");
      if (!anchor) return;

      anchor.addEventListener("click", (e) => {
        console.log(contact, anchor);
        if (e.target === anchor) {
          e.preventDefault();

          editContactForm(contact).render();
        }
      });
    },
  };
}

export { showContactDetail };
