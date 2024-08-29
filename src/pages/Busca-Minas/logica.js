export function colocarMinas(numeroMinas, celdas, tamaño) {
  let minasColocadas = 0

  while (minasColocadas < numeroMinas) {
    const row = Math.floor(Math.random() * tamaño)
    const col = Math.floor(Math.random() * tamaño)
    if (!celdas[row][col].esMina) {
      celdas[row][col].esMina = true
      minasColocadas++
    }
  }
}

export function detectarMinasCerca(tamaño, celdas) {
  for (let row = 0; row < tamaño; row++) {
    for (let col = 0; col < tamaño; col++) {
      if (celdas[row][col].esMina) continue

      let minasContador = 0

      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          const newRow = row + i
          const newCol = col + j

          if (
            newRow >= 0 &&
            newRow < tamaño &&
            newCol >= 0 &&
            newCol < tamaño
          ) {
            if (celdas[newRow][newCol].esMina) {
              minasContador++
            }
          }
        }
      }
      celdas[row][col].minasCercanas = minasContador
    }
  }
}


export function actualizarPuntuacion() {
  const puntuacionActual = parseInt(
    localStorage.getItem('puntuacionMinas') || 0
  )
  const contPuntuacion = document.querySelector('.puntuacion')
  contPuntuacion.innerHTML = `Tu puntuación es: ${puntuacionActual}`
  
}