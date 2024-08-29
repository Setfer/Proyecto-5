import './header-style.css'
import { button } from '../buttons/button'
const header = document.querySelector('header')

header.innerHTML = `${button(
  'Tres en Raya',
  ' button_header ',
  'button-ter'
)} ${button('Ruleta', ' button_header ', 'button-ruleta')}
 ${button('Busca Minas', ' button_header ', `button-minas`)}`

const footer = document.querySelector("footer")
footer.innerHTML="<ul><li>Contenido creado por Andres segura.</li><li>Tres en raya</li><li>Ruleta</li><li>Busca Minas</li>"