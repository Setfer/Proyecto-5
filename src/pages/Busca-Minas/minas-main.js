import './minas-style.css'
import { insertarTablero } from './crear-tablero'
import { colocarMinas } from './logica'
import { detectarMinasCerca } from './logica'
import { button } from '../../components/buttons/button'
import { actualizarPuntuacion } from "./logica";
export function minasMain() {


  //creamos contenedores y variables
  const main = document.querySelector('main')
  const buscaMinas = document.createElement('div')
  buscaMinas.classList.add('busca-minas')
  main.append(buscaMinas)

  const tamaño = 10 // Tamaño del tablero 10x10
  const numeroMinas = 10 // Numero de minas
  const celdas = []
  const estadoJuego = {
    gameOver: false,
    numeroMostradas: 0,
    celdasSinMinas: tamaño * tamaño - numeroMinas
  }

  //inciar juego

  function startGame() {
    let puntuacion = parseInt(localStorage.getItem('puntuacionMinas') || 0)
    localStorage.setItem('puntuacionMinas', puntuacion)
    let contPuntuacion = document.createElement('div')
    contPuntuacion.classList.add('puntuacion')
    contPuntuacion.textContent = `Tu puntuacion es: ${puntuacion}`
    buscaMinas.append(contPuntuacion)

    insertarTablero(tamaño, celdas, estadoJuego, numeroMinas)
    colocarMinas(numeroMinas, celdas, tamaño)
    detectarMinasCerca(tamaño, celdas)
  }

  startGame()

  //botones reset
  const resetButton = button('Reset', 'button', 'reset-button-minas')
  const resetPuntuacion = button(
    'Reinciar puntuación',
    'button',
    'reset-button-puntuacion'
  )
  const divReset = document.createElement('div')
  divReset.classList = 'reset-minas'
  divReset.innerHTML = resetButton
  divReset.innerHTML += resetPuntuacion
  buscaMinas.append(divReset)

  //reinicio juego
  document
    .querySelector('#reset-button-minas')
    .addEventListener('click', () => {
      buscaMinas.innerHTML = ''
      startGame()
      buscaMinas.append(divReset)
      estadoJuego.gameOver = false
      estadoJuego.winner = false
      estadoJuego.numeroMostradas = 0
    })

  //reset puntuacion
  document
    .querySelector('#reset-button-puntuacion')
    .addEventListener('click', () => {
      localStorage.setItem('puntuacionMinas', 0)
      actualizarPuntuacion()
    })

  
}
