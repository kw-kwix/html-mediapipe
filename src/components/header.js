class Header extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  connectedCallback() {
    console.log("Custom square element added to page.");
  }

  render() {
    this.innerHTML = `
  <header>
    <nav class="navbar navbar-light bg-light">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link disabled" href="index.html">Pose</a>
        </li>
      </ul>
    </nav>
  </header>    
    `;
  }
}

const appHeader = document.createElement("app-header");

document.body.prepend(appHeader);

customElements.define("app-header", Header);
