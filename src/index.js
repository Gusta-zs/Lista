import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'


ReactDOM.render ( 
      <div >
         <header id="header">
          <Tittle Tittle='Poupe' tittle2='e Pague.'
     ></Tittle>
         </header>
         <h3> Lista de Produtos </h3>
   <div>
 <main>
     <section id="home">
        <products>
           <ul>
               <li>Manga 
                    <form>
                        <input type="button" value="+" onClick={() => Compras("Manga")}></input>
                    </form></li>
               <li>Banana 
                   <form>
                        <input type="button" value="+" onClick={() => Compras("Banana")}></input>
                   </form></li>
               <li>Pera 
                    <form>
                        <input type="button" value="+" onClick={() => Compras("Pera")}></input>
                   </form></li>
               <li>Uva  
                   <form>
                        <input type="button" value="+" onClick={() => Compras("Uva")}></input>
                   </form></li>
               <li>Maracujá  
                   <form>
                        <input type="button" value="+" onClick={() => Compras("Maracujá")}></input>
                   </form></li>
                <li>
                    <form>
                        <input className="finalizar" type="button" value="Finalizar compra" onClick={() => Compras(document.write('O total de sua compra foi de: R$ ' + resultado + '<br> Os produtos selecionados foram: ' + lista))}></input>
                    </form>
                </li>
           </ul>
        </products>
      </section>
 </main>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Poppins:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    </div>
    </div>,
    document.getElementById('root')
)


function Tittle (props) {
    return (
        <div>
            <h1 className="logo">{props.Tittle}</h1> <h2 id="logo">{props.tittle2}</h2>
            <h3 className="sub">{props.Subtitulo}</h3>
        </div>
    )
}



const frutas= ['Manga', 'Banana', 'Pera', 'Uva', 'Maracujá']
const valores= [5, 5, 7, 9, 9]
let posicao= 0
let resultado= 0
let total= 0
let i= 0
var lista=[]
var j= 0




function Compras(button) {
    for(i=0; i<frutas.length; i++) 
    if (button=== frutas[i]) {
        posicao= frutas[i];
        total= valores[i];
        lista[j]= frutas[i];
        j++
    }
        resultado += total
        console.log(resultado)
}




