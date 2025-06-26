export class MyTermo extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });

      const titulo = this.getAttribute('titulo') || 'Nome';
      const texto = this.getAttribute('texto') || 'Explicacao do termo';
      const imagem = `/Img/termos/${titulo.toLowerCase().replace(/\s+/g, '-')}.png`;
      const inverso = this.hasAttribute('inv');
  
      this.shadowRoot.innerHTML = `
      <section class="TermoConteiner">
                <div class="text">
                    <h1>${titulo}</h1>
                    <h5>${texto}</h5>
    
                </div>
                <img src="${imagem}" alt="" class="Imgs">
            </section>
    
            <style>
                
                .TermoConteiner{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 1.5vh;
                    padding: 1vh;
                    border: 1px solid #b8b2aa ;
                    box-shadow: 1px 1px 1.2px 1.2px #b8b2aa;
                    border-radius: 10px;
                    gap: 2vh;
                    
                    height: 30vh;
                    width: 45vh;
                    
                    flex-direction: ${inverso ? 'row-reverse' : 'row'};
                }
                .text{
                    width: 50%;
                    display: flex;
                    flex-direction: column;
                    text-align: center;
    
                }
                .text h1{
                    margin: 0;
                    font-size: 2.8vh;
                    filter: drop-shadow(0.1px 0.1px 0 black);
                }
                .text h5{
                    font-size: 1.4vh;
                    
                }
                .Imgs{
                    width: 40%;
                    height: 50%;
                    filter: drop-shadow(0.2px 0.2px 0 black);
                }
            </style>
      `;
    }
  }
  
