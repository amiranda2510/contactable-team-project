const Header = (title) => `
  <header class="header-main header--line js-header">
    <h2 class="title logo__title ">${title}</h2>
    <a href="">Logout</a>
  </header>
`;

function FormLogin() {
  return `
<form action="" class="form-wrapper">
  <div class="form__content">
    <label class="form__field">
      <input type="email" name="email" placeholder="email">
      <span>error</span>
    </label>

    <label class="form__field">
      <input type="password" name="password" placeholder="password">
      <span hidden>error</span>
    </label>
  </div>
  <footer class="footer footer--line">
    <a href="" class="btn-link">Signup</a>
    <input type="submit" class="btn-link" value="Login">
  </footer>
</form>`;
}

function ContactDetails() {
  return `
  <div>
    <img src="" alt="profile">
    <h4>Brian Vaughn</h4>
    <span>Friends</span>
  </div>
  <div>
    <p>Number</p>
    <p>987654213</p>

    <p>Email</p>
    <p>email@mail.com</p>
  </div>
  `;
}

function Contacts() {
  return `
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

  <a href="#add-contact">+</a>
  `;
}

function Main() {
  FormLogin();
  ContactDetails();
  return `
    <main>
     ${FormLogin()}
    </main>
  `;
}

function Footer() {
  return `
  <footer class="footer">
    <a href="#" class="btn-link">Link 1</a>
    <a href="#" class="btn-link">Link 2</a>
    <a href="#" class="btn-link">Link 3</a>
  </footer>
`;
}

export function start() {
  const page = document.querySelector("#app");

  page.innerHTML = `
  ${Header("Contactable")}
  ${Main()}
  `;
}
