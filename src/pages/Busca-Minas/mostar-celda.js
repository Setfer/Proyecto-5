import { actualizarPuntuacion } from "./logica"

export function mostrarCelda(
  row,
  col,
  celdas,
  tamaño,
  estadoJuego,
  numeroMinas
) {
  const celda = celdas[row][col]

  if (celda.revelada) return

  celda.revelada = true
  celda.elemento.classList.add('revelada')

  if (celda.esMina) {
    celda.elemento.classList.add('mina')
    const contbcm = document.querySelector('.busca-minas')
    const hasPerdido = document.createElement('p')
    hasPerdido.textContent = 'Has perdido.'

    const puntuacion = localStorage.getItem('puntuacionMinas')
    localStorage.setItem('puntuacionMinas', puntuacion - 1)
    contbcm.append(hasPerdido)
    actualizarPuntuacion()
    estadoJuego.gameOver = true

    return
  }

  estadoJuego.numeroMostradas = (estadoJuego.numeroMostradas || 0) + 1
  if (estadoJuego.celdasSinMinas <= estadoJuego.numeroMostradas) {
   
    estadoJuego.gameOver = true
    const contbcm = document.querySelector('.busca-minas')
    const hasGanado = document.createElement('p')
    hasGanado.textContent = 'Has ganado.'
    const puntuacion = localStorage.getItem('puntuacionMinas')
    localStorage.setItem('puntuacionMinas', puntuacion + 1)
    actualizarPuntuacion()
    contbcm.append(hasGanado)
  }

  if (celda.minasCercanas > 0) {
    celda.elemento.textContent = celda.minasCercanas
  } else {
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        const ni = row + x
        const nj = col + y

        if (ni >= 0 && ni < tamaño && nj >= 0 && nj < tamaño) {
          mostrarCelda(ni, nj, celdas, tamaño, estadoJuego, numeroMinas)
        }
      }
    }
  }
}

export function banderita(row, col, celdas, estadoJuego) {
  const celda = celdas[row][col]
  if (celda.revelada) return
  if (!estadoJuego.gameOver) {
    celda.elemento.textContent = '🇪🇸'
  }
}
