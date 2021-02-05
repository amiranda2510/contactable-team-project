import { PageTemplate } from "./template.js";

function ContactableIndex() {
  let content = `
  <h3>FAVORITES</h3>
  <ul>    
    <li>
      <img src="" alt="profile">
      <p>Brian</p>
      <span>Start</span>
    </li>

  </ul>

  <h3>Contacts</h3>
  <ul>
    <li>
      <img src="" alt="profile">
      <p>Dan</p>
      <span>Start</span>
    </li>
  </ul>

  <a href="#add-contact" class="js-anchor-to-add-new-contact">+</a>
  `;

  return {
    render: function () {
      PageTemplate("Contactable", content);
      this.anchorToAddNewContactClickListener();
    },
    anchorToAddNewContactClickListener: function () {
      const anchor = document.querySelector(".js-anchor-to-add-new-contact");
      if (!anchor) return;

      anchor.addEventListener("click", (e) => {
        if (e.target === anchor) {
          e.preventDefault();

          PageTemplate("Create new contact", "My form");
        }
      });
    },
  };
}
export { ContactableIndex };
