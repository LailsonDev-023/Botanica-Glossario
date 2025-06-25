export class MyButton extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });

  
      this.shadowRoot.innerHTML = `
      <button><slot></slot></button>

      <style>
      button{
        color: white;
        background-color: #3a7048;
        border: none;
        border-radius: 10%;
        padding: 1vh;
      }
      </style>
         
      `;
    }
  }
  
