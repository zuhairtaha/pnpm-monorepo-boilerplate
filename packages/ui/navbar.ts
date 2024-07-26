class Navbar extends HTMLElement {
  #root = this.attachShadow({ mode: "open" });

  connectedCallback() {
    const sheet = new CSSStyleSheet();
    // sheet.replaceSync(`@import url('./index.css');`);
    sheet.replaceSync(`
      button {
        background-color: blue;
        color: white;
      }
    `);
    this.#root.adoptedStyleSheets = [sheet];

    this.#root.innerHTML = `
    <button>Click</button>
  `;

    this.#root.querySelector("button")?.addEventListener("click", () => {
      console.log("Clicked");
    });
  }
}
customElements.define("nav-bar", Navbar);
