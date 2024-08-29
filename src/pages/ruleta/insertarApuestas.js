import { activarNumero } from './logica'
export const insertarApuestas = (apostado) => {
  let contenedorMain = document.querySelector('#ruleta')
  let tablero = document.createElement('div')
  tablero.id = 'apuestas'
  contenedorMain.append(tablero)

  for (let i = 20; i > -1; i--) {
    let numero = document.createElement('div')
    numero.innerHTML = `${i}`
    numero.id = `id${i}`
    let color
    if (i === 0) {
      color = 'green'
    } else if (i % 2 === 0) {
      color = 'red'
    } else {
      color = 'black'
    }
    numero.classList.add(`${color}`, 'numero-tablero')
    tablero.append(numero)
  }
  const apuestaRed = document.createElement('div')
  apuestaRed.id = 'id21'
  apuestaRed.classList.add('red', 'numero-tablero', `apuesta-red`)
  apuestaRed.innerHTML = 'Apostar Red'

  const apuestaBlack = document.createElement('div')
  ;(apuestaBlack.id = 'id22'),
    apuestaBlack.classList.add('black', 'numero-tablero', `apuesta-black`)
  tablero.append(apuestaRed, apuestaBlack)
  apuestaBlack.innerHTML = 'Apostar Black'
  const numeros = document.querySelectorAll('.numero-tablero')
  let contadorDineroApostado = 0
  numeros.forEach((numero) => {
    numero.addEventListener('click', () => {
      const blockApuestas = document.querySelector('#apuestas')
      if (!blockApuestas.classList.contains('block')) {
        activarNumero(
          numero,
          'https://cdn-icons-png.flaticon.com/512/864/864778.png',
          apostado
        )
       
        contadorDineroApostado += 10
        const dineroApostado = document.querySelector('.dinero-apostado')
        dineroApostado.textContent = `Apuesta Actual: ${contadorDineroApostado}$`
      }
    })
  })
}
