export const insertarTablero = () => {
  const tablero = document.querySelector('.tablero')
  tablero.innerHTML = ''
  for (let i = 0; i < 9; i++) {
    const ficha = document.createElement('img')
    ficha.src =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-dHgrO3SvYLjEKUXPQT98LLO-E2BShxxj-w&s'
    ficha.id = i + 1
    ficha.classList = 'ficha'
    tablero.append(ficha)
  }
}

export const activarFicha = (ficha, color, clicked, img) => {
  ficha.classList.add(color)
  ficha.classList.add('activa')
  ficha.src = img
  clicked.push(parseInt(ficha.id))
}

export function checkSolucion(cliked, soluciones) {
  for (let solucion of soluciones) {
    const checkin = solucion.every((num) => cliked.includes(num))
    if (checkin) {
    
      let parpadear = document.querySelectorAll(
        `[id="${solucion[0]}"], [id="${solucion[1]}"], [id="${solucion[2]}"]`
      )
      parpadear.forEach((elemento) => {
        elemento.classList.add('parpadear')
      })
      return true
    }
  }
  return false
}
