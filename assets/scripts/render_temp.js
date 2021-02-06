const Header = (title) => `
  <header class="header-main header--line js-header">
    <h2 class="title logo__title ">${title}</h2>
    <a href="">Logout</a>
  </header>
`;

function FormLogin() {
  return `
<form action="" class="form-wrapper js-login-form">
  <div class="form__content">
    <label class="form__field">
      <input type="email" name="email" placeholder="email" required>
      <span>error</span>
    </label>

    <label class="form__field">
      <input type="password" name="password" placeholder="password" required>
      <span hidden>error</span>
    </label>
  </div>
  <footer class="footer footer--line">
    <a href="" class="js-login-to-signup-anchor btn-link">Signup</a>
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
  <h3 class = "contact__type header--line">FAVORITES</h3>
  <ul class = "contact-wrapper">    
    <li class = "contact__field selected">
      <img class = "contact__img" src="" alt="profile">
      <p class = "contact__name">Brian Vaughn</p>
      <span class = "favorite-icon"><ion-icon name="star-outline"></ion-icon></span>
    </li>

  </ul>

  <h3 class = "contact__type header--line">Contacts</h3>
  <ul class = "contact-wrapper">
    <li class = "contact__field">
      <img class = "contact__img" src="" alt="profile">
      <p class = "contact__name">Dan</p>
      <span class = "favorite-icon"><ion-icon name="star-outline"></span>
    </li>
  </ul>

  <a class="btn--add" href="#add-contact">+</a>
  `;
}

function Main() {
  FormLogin();
  ContactDetails();
  return `
    <main>
     ${Contacts()}
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
