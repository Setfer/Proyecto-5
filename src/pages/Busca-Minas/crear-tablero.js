import { mostrarCelda } from './mostar-celda'
import { banderita } from "./mostar-celda";
export function insertarTablero(tamaño, celdas, estadoJuego,numeroMinas) {


  const main = document.querySelector('main')
  const tablero = document.createElement('div')
  tablero.classList.add('tablero-minas')
  const buscaMinas = document.querySelector('div')
  main.append(buscaMinas)
  buscaMinas.append(tablero)


  for (let row = 0; row < tamaño; row++) {
    celdas[row] = []
    for (let col = 0; col < tamaño; col++) {
      const celda = document.createElement('div')
      celda.classList.add('celda')
      celda.dataset.row = row
      celda.dataset.col = col

      celda.addEventListener('click', () => {
        if (!estadoJuego.gameOver) {
          mostrarCelda(row, col, celdas, tamaño, estadoJuego,numeroMinas)
        }
      })

      celda.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        banderita(row, col, celdas, estadoJuego)
      })

      tablero.appendChild(celda)
      celdas[row][col] = {
        elemento: celda,
        esMina: false,
        revelada: false,
        minasCercanas: 0
      }
    }
  }
}
