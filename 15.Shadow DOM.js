// code below mainly works with client side rendered applications

window.customElements.define(
  "c-dd",
  class extends HTMLElement {
    connectedCallback() {
      let shadowRoot = this.attachShadow({ mode: "open" });

      // Create a paragraph element
      const paragraph = document.createElement("p");
      paragraph.textContent = "Shadow element ";

      // Append each child of the custom element to the paragraph
      Array.from(this.childNodes).forEach((child) => {
        paragraph.appendChild(child.cloneNode(true));
      });

      // Append the paragraph to the shadow DOM
      shadowRoot.appendChild(paragraph);
    }
  }
);

// attaching shadow element
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const span = document.createElement("span");
span.textContent = "I'm in the shadow DOM";
shadow.appendChild(span);

// root element of the shadowdom
setTimeout(() => {
  console.log(host.shadowRoot);
});

// adding stylesheet using js, for serverside check html template
const sheet = new CSSStyleSheet();
sheet.replaceSync("span { color: red; border: 2px dotted black;}");
// const host = document.querySelector("#host");
// const shadow = host.attachShadow({ mode: "open" });
shadow.adoptedStyleSheets = [sheet];

// const span = document.createElement("span");
// span.textContent = "I'm in the shadow DOM";
// shadow.appendChild(span);
