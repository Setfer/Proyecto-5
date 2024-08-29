import './ruleta-style.css'
import { button } from '../../components/buttons/button'
import { insertarRuleta } from './insertarRuleta'
import { logicaRuleta } from './logica'
import { insertarApuestas } from './insertarApuestas'
import { verificarApuesta } from './logica'
import { actualizarSaldo } from './logica'

export const ruletaMain = () => {
  //creamos contenedor padre
  const padre = document.querySelector('main')
  const contenedorMain = document.createElement('div')
  contenedorMain.id = 'ruleta'
  padre.append(contenedorMain)

  //Insertamos dinero
  const contDinero = document.createElement('div')
  contDinero.id = 'dinero'
 

  let dinero = parseInt(localStorage.getItem('dinero') || 1000)
  localStorage.setItem('dinero', dinero)

  const saldo = document.createElement('h3')
  saldo.classList = 'saldo'
  saldo.innerText = `${dinero}$`
  contDinero.append(saldo)

  const dineroApostado = document.createElement('p')
  dineroApostado.classList = 'dinero-apostado'
  dineroApostado.textContent = 'Apuesta Actual: 0$'
  contDinero.append(dineroApostado)

  //reset saldo
  contDinero.innerHTML += button('reset Saldo', '', 'reset-saldo')

  


  //creamos flecha
  const flecha = document.createElement('img')
  flecha.src =
    'https://i.pinimg.com/originals/2d/e0/9a/2de09a70a2557df7c79ac0914646c746.png'
  flecha.id = 'flecha'


 


  //contenedor tablero-dinero
 const ruletaSaldo = document.createElement("div")
 ruletaSaldo.id="ruleta-saldo"
 ruletaSaldo.append(contDinero,flecha)
 contenedorMain.append(ruletaSaldo)
 ruletaSaldo.innerHTML += button('girar', '', 'boton-girar')
 ruletaSaldo.innerHTML += button('Nueva Tirada', '', 'boton-reset')
 const reset = document.querySelector('#boton-reset')
 reset.style.display = 'none'
 const girar = document.querySelector('#boton-girar')

 //insetamos rusleta
 insertarRuleta()
 
  //logica de la ruleta

  let apostado = {}

  girar.addEventListener('click', () => {
    let dinero = parseInt(localStorage.getItem('dinero'))
    let resultado = logicaRuleta()
    girar.style.display = 'none'
    const resetSaldo = document.querySelector('#reset-saldo')
    resetSaldo.style.display = 'none'
    let ganado = verificarApuesta(apostado, resultado)
    localStorage.setItem('dinero', (dinero += ganado))
    

    const blockApuestas = document.querySelector('#apuestas')
    blockApuestas.classList.add('block')

    setTimeout(() => {
      reset.style.display = 'block'
      let numeroGanadorTablero = document.querySelector(`#id${resultado}`)
      numeroGanadorTablero.classList.add('parpadeo-ruleta')
      actualizarSaldo(dinero)
      const dineroApostado = document.querySelector('.dinero-apostado')

      if (ganado === 0) {
        dineroApostado.textContent = `Has perdido`
      } else {
        dineroApostado.textContent = `HAS GANADO:${ganado}$`
      }
    }, 4300)
  })

  //boton reset
  reset.addEventListener('click', () => {
    apostado = {}
    const dineroApostado = document.querySelector('.dinero-apostado')
    dineroApostado.textContent = 'Apuesta Actual: 0$'
    const tablero = document.querySelector('#tablero')
    tablero.remove()
    const apuestas = document.querySelector('#apuestas')
    apuestas.remove()

    insertarRuleta()
    insertarApuestas(apostado)
    const resetSaldo = document.querySelector('#reset-saldo')
    resetSaldo.style.display = 'block'
    reset.style.display = 'none'
    girar.style.display = 'block'
  })
  
  //insertar tablero y apuestas
  insertarApuestas(apostado)
  const resetSaldo = document.querySelector('#reset-saldo')
  resetSaldo.addEventListener('click', () => {
    
    localStorage.setItem('dinero', 1000)
    actualizarSaldo(1000)
  })
}
