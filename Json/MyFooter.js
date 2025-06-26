export class MyFooter extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });

  
      this.shadowRoot.innerHTML = `

          <footer>
        <div class="FooterBarra">

            <img src="/Img/LogoUfra.png" alt="">
            <div class="logo">
                <h1><img src="/Img/ImgCapa (3).png" alt="">
                    <h1>Glossário<br>Botânico</h1></h1>
            </div>
        </div>
        <p>Desenvolvido por alunos do curso de Agronomia — UFRA Capanema • 2025.1<br>
            © Todos os direitos reservados
            </p>
    </footer>


    <style>
        .logo{
            display: flex;
            filter: drop-shadow(0.1px 0.1px 0 black);
        }
        .logo img{
            width: 3vh;
        }
        .logo h1{
            font-size: 1.5vh;
            color: #3a7048;
        }

        .FooterBarra img{
            width: 3vh;
            filter: drop-shadow(0.1px 0.1px 0 black);
        }

        .FooterBarra{
            display: flex;
            justify-content: space-around;
            align-items: center;
            background-color: #bdb5aaf6;
            box-shadow: 4px 4px 10px 0px #bdb5aa;
        }
        footer{
            text-align: center;
            background-color: #dbd4ca;
            height: 13vh;
        }
        footer p{
            font-size: 1.3vh;
        }
    </style>


         
      `;
    }
  }
  
