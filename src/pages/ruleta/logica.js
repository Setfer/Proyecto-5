export function logicaRuleta () {
  const ruleta = document.getElementById('tablero')

  const sectors = 21 // Cantidad total de sectores
  const rotationPerSector = 360 / sectors
  const giros = Math.floor(Math.random() * 10) + 5 // Número de giros completos (5 a 15 giros)
  const anguloFinal = Math.floor(Math.random() * 360) // Ángulo donde se detendrá
  let anguloTotal = giros * 360 + anguloFinal // Ángulo total para girar

  // Aplicar la rotación
  ruleta.style.transform = `rotate(${anguloTotal}deg)`

  // Calcular el número donde cae
  const numeroGanador = Math.floor(
    (360 - (anguloFinal % 360)) / rotationPerSector
  )
  return numeroGanador;
  
}
export const actualizarSaldo = (dinero)=>{
  const saldo = document.querySelector(".saldo")
  saldo.innerText = `${dinero}$`
}

export const activarNumero = (numero, img, apostado) => {
  let fichaExistente = numero.querySelector('#ficha')
  let contador = numero.getAttribute('data-contador') || 0
  contador = parseInt(contador) + 1
  let numeroId = parseInt(numero.id.slice(2))
  apostado[numeroId] = contador

  let dinero = parseInt(localStorage.getItem("dinero"))
  localStorage.setItem('dinero', (dinero -= 10))
  actualizarSaldo(dinero)

  if (fichaExistente) {
    // Si ya existe una ficha, cambia el contenido del multiplicador
    fichaExistente.nextElementSibling.textContent = `x${contador}`
  } else {
    // Si no hay ficha, agrega una nueva y un contador de x1
    let ficha = document.createElement('img')
    ficha.src = img
    ficha.id = 'ficha'
    numero.append(ficha)

    let multiplicador = document.createElement('p')
    multiplicador.textContent = `x${contador}`
    numero.append(multiplicador)

    numero.classList.add('activa')
  }

  // Actualizar el contador en el atributo data-contador
  numero.setAttribute('data-contador', contador)
}


export const verificarApuesta = (apostado, resultado) => {
  let ganado = 0
  if (resultado in apostado) {
    ganado += apostado[resultado] * 10 * 20
  }
  if (21 in apostado && resultado % 2 === 0 && resultado!==0) {
    ganado += apostado[21] * 10 * 2
  }
  if (22 in apostado && resultado % 2 !== 0) {
    ganado += apostado[22] * 10 * 2
  }
  return ganado
}


