export class Myheader extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });

  
      this.shadowRoot.innerHTML = `

        <header class="headerDiv">

        <div class="liks">
            <nav>
                <ul>
                    <li><a href="#">Letras</a></li>
                    <li><a href="/Index.html">Inicio</a></li>
                    <li><a href="#">Sobre</a></li>
                </ul>
            </nav>
        </div>

        <div class="logo">
            <img src="/Img/ImgCapa (3).png" alt="">
            <h1>Glossário<br>Botânico</h1>
            
        </div>

    </header>

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');

        .headerDiv{
            box-shadow: 4px 4px 10px 0px #bdb5aa;
            display: flex;
            justify-content: space-around;
            font-family: "Dancing Script", cursive;
            align-items: center;
            background-color: #bdb5aaf6;


        }

        .headerDiv img{
            width: 3vh;
        }
        .headerDiv ul{
            list-style: none;
            display: flex;
            gap: 2vh;
        }
        .headerDiv a{
            color: #3a7048;
            text-decoration: none;
            filter: drop-shadow(0.1px 0.1px 0 black);
        }
        .headerDiv h1{
            font-size: 2vh;
            color: #3a7048;
        }
        
        .logo{
            display: flex;
            align-items: center;
            filter: drop-shadow(0.1px 0.1px 0 black);
        }
    </style>

         
      `;
    }
  }
  
