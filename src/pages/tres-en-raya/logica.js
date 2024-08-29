import { activarFicha } from './tablero'
import { checkSolucion } from './tablero'
import { actualizarContador } from './contador'

export const logica = () => {
  const soluciones = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ]

  let puntuacionRed = localStorage.getItem('puntuacionRed') || 0
  puntuacionRed = parseInt(puntuacionRed) || 0
  let puntuacionBlue = localStorage.getItem('puntuacionBlue') || 0
  puntuacionBlue = parseInt(puntuacionBlue) || 0

  let indice = document.querySelector('.indice');
const fichas = document.querySelectorAll('.ficha');
const clickedRed = [];
const clickedBlue = [];

fichas.forEach((ficha) => {
    ficha.addEventListener('click', () => {
        if (
            clickedRed.length <= clickedBlue.length &&
            !ficha.classList.contains('activa')
        ) {
            activarFicha(
                ficha,
                'ficha-red',
                clickedRed,
                'https://comprarpegatinas.com/images/stories/virtuemart/product/pegatinas/pegatina_circulo_rojo.png'
            );

            if (checkSolucion(clickedRed, soluciones)) {
                indice.innerHTML = '<p>HA GANADO <span style="color: red;">RED</span>¡¡</p>';
                fichas.forEach((ficha) => ficha.classList.add('activa'));
                localStorage.setItem('puntuacionRed', (puntuacionRed += 1));
                actualizarContador();
            } else {
                const todasActivas = Array.from(fichas).every((ficha) =>
                    ficha.classList.contains('activa')
                );

                if (todasActivas) {
                    indice.innerHTML = '<p>No quedan movimientos</p>';
                } else {
                    indice.innerHTML =
                        '<p>Es el turno de <span style="color: blue;">BLUE</span></p>';
                }
            }
        } else if (!ficha.classList.contains('activa')) {
            activarFicha(
                ficha,
                'ficha-blue',
                clickedBlue,
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReFNW5MsUrr4NiOokuogzjWm4redW3GzUw4g&s'
            );

            if (checkSolucion(clickedBlue, soluciones)) {
                indice.innerHTML = '<p>HA GANADO <span style="color: blue;">BLUE</span>¡¡</p>';
                fichas.forEach((ficha) => ficha.classList.add('activa'));
                localStorage.setItem('puntuacionBlue', (puntuacionBlue += 1));
                actualizarContador();
            } else {
                const todasActivas = Array.from(fichas).every((ficha) =>
                    ficha.classList.contains('activa')
                );

                if (todasActivas) {
                    indice.innerHTML = '<p>No quedan movimientos</p>';
                } else {
                    indice.innerHTML =
                        '<p>Es el turno de <span style="color: red;">RED</span></p>';
                }
            }
        }
    });
});

}
