import './ter-style.css'
import { button } from '../../components/buttons/button'
import { actualizarContador } from './contador'
import { insertarTablero } from './tablero'
import { logica } from "./logica";
export const terMain=() =>{
  

//contenedor-main
let contenedor = document.createElement('div')
contenedor.id = 'tres-en-raya'
document.querySelector('main').append(contenedor)

//indice
const indice = document.createElement('div')
indice.classList = 'indice'
indice.innerHTML = '<p>Empieza <span style="color: red;">RED</span></p>'
contenedor.append(indice)
//contador
let contador = document.createElement('div')
contador.classList = 'contador'
document.querySelector('#tres-en-raya').append(contador)

actualizarContador()



//tablero 
const tablero = document.createElement('div')
tablero.classList = 'tablero'
contenedor.append(tablero)

insertarTablero()

//logica del juego

logica()

//reset
const resetButton = button('Reset', 'reset-button')
const divReset = document.createElement("div")
divReset.classList= "reset"
divReset.innerHTML=resetButton
const resetPuntos = button('Reinciar Puntuación', 'reset-marcador-ter')
divReset.innerHTML+=resetPuntos

contenedor.append(divReset)

document.querySelector(".reset-button").addEventListener('click', () => {
  insertarTablero()
  logica()
  indice.innerHTML = '<p>Empieza <span style="color: red;">RED</span></p>'
})

//reset puntuaciones

document.querySelector(".reset-marcador-ter").addEventListener("click",()=>{

  localStorage.setItem('puntuacionRed', 0);
  localStorage.setItem('puntuacionBlue', 0);
  actualizarContador()
})


}
