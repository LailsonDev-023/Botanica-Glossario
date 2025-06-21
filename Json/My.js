export class My extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });

  
      this.shadowRoot.innerHTML = `

         
      `;
    }
  }
  
