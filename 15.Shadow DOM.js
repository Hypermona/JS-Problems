window.customElements.define(
  "c-dd",
  class extends HTMLElement {
    connectedCallback() {
      let shadowRoot = this.attachShadow({ mode: "open" });

      // Create a paragraph element
      const paragraph = document.createElement("p");

      // Append each child of the custom element to the paragraph
      Array.from(this.childNodes).forEach((child) => {
        paragraph.appendChild(child.cloneNode(true));
      });

      // Append the paragraph to the shadow DOM
      shadowRoot.appendChild(paragraph);
    }
  }
);
