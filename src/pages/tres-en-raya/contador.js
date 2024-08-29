

export let actualizarContador = () => {
  const contador = document.querySelector(".contador")
  contador.innerHTML = ''

  let puntuacionRed = localStorage.getItem("puntuacionRed") || 0;
  puntuacionRed = parseInt(puntuacionRed) || 0;
  let puntuacionBlue = localStorage.getItem("puntuacionBlue") || 0;
  puntuacionBlue = parseInt(puntuacionBlue) || 0;

  const contadorRed = document.createElement('h3')
  contadorRed.innerHTML = `La puntuación de <span style="color: red;">RED</span> es: ${puntuacionRed}`
  const contadorBlue = document.createElement('h3')
  contadorBlue.innerHTML = `La puntuación de <span style="color: blue;">BLUE</span> es: ${puntuacionBlue}`

  contador.append(contadorRed, contadorBlue)
}
