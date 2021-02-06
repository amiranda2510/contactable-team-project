import { STORE } from "../data.js";
import { editContact } from "../services/contacts_fetch.js";
import { PageTemplate } from "./template.js";
import { createContactForm } from "./create_contact_form.js";

function ContactableIndex() {
  let loadContent = () => {
    let favorites = STORE.contacts.filter((contact) => contact.favorite);

    favorites = favorites.map(
      (favorite) => `
      <li data-id-contact='${favorite.id}' class="js-contact-element">
        <img src="" alt="profile">
        <p>${favorite.name}</p>
        <a class='js-to-change-favorite' href="#update-favorite-state">${favorite.favorite}</a>
      </li>
    `
    );

    let contacts = STORE.contacts.map(
      (contact) => `
      <li data-id-contact='${contact.id}' class="js-contact-element">
        <img src="" alt="profile">
        <p>${contact.name}</p>
        <a class='js-to-change-favorite' href="#update-favorite-state">${contact.favorite}</a>
      </li>
  `
    );

    return `
      ${
        favorites.length
          ? `
        <h3>FAVORITES</h3>
        <ul>
          ${favorites.join("")}
        </ul>`
          : ""
      }

      <h3>CONTACTS</h3>
      <ul>
        ${contacts.join("")}
      </ul>

      <a href="#add-contact" class="js-anchor-to-add-new-contact">+</a>
    `;
  };

  return {
    render: function () {
      PageTemplate("Contactable", loadContent());
      this.anchorToAddNewContactClickListener();
      this.toChangeFavoriteClickListener();
      this.redirectoShowProfileClickListener();
    },
    redirectoShowProfileClickListener: function () {
      const contactItems = document.querySelectorAll("li.js-contact-element");
      if (!contactItems.length) return;

      contactItems.forEach((contactItem) => {
        contactItem.addEventListener("click", (e) => {
          if (e.target === contactItem) {
            e.preventDefault();

            PageTemplate("Profile contact", "Content");
          }
        });
      });
    },
    toChangeFavoriteClickListener: function () {
      const anchors = document.querySelectorAll("li a.js-to-change-favorite");

      if (!anchors.length) return;

      anchors.forEach((anchor) => {
        anchor.addEventListener("click", async (e) => {
          if (anchor === e.target) {
            e.preventDefault();

            let idContact = parseInt(
              anchor.closest("li.js-contact-element").dataset.idContact
            );

            let contactSelected = STORE.contacts.find(
              (contact) => idContact === contact.id
            );

            let response = await editContact(idContact, {
              favorite: !contactSelected.favorite,
            });

            if (response) {
              STORE.contacts = STORE.contacts.map((contact) =>
                contact.id === idContact ? response : contact
              );
            }
            ContactableIndex().render();
          }
        });
      });
    },
    anchorToAddNewContactClickListener: function () {
      const anchor = document.querySelector(".js-anchor-to-add-new-contact");
      if (!anchor) return;

      anchor.addEventListener("click", (e) => {
        if (e.target === anchor) {
          e.preventDefault();

          createContactForm().render();
        }
      });
    },
  };
}

export { ContactableIndex };
