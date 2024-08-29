export const insertarRuleta = () => {

  const tablero = document.createElement('div')
tablero.id = 'tablero'

const imgFlecha = document.getElementById('flecha');
imgFlecha.insertAdjacentElement('afterend', tablero);

  let rotate = -73
  const sectors = 21 // Cantidad total de sectores
  const rotationPerSector = 360 / sectors // Ángulo de rotación por sector
  for (let i = 0; i < sectors; i++) {
    let colorClass
    if (i === 0) {
      colorClass = 'green'
    } else if (i % 2 === 0) {
      colorClass = 'red'
    } else {
      colorClass = 'black'
    }
    tablero.innerHTML += `
       <div class="sector ${colorClass}" style="transform: rotate(${rotate}deg);">
         <div class="numero" >
           ${i}
         </div>
       </div>
     `
    rotate += rotationPerSector
  }
}
