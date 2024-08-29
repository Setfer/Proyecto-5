import './style.css'
import '../Proyecto-5/src/components/header-footer/header-footer'


import { terMain } from './src/pages/tres-en-raya/ter-main'
import { ruletaMain } from './src/pages/ruleta/ruleta-main'
import { minasMain } from './src/pages/Busca-Minas/minas-main'
const main = document.querySelector('main')

terMain()

let buttonTer = document.querySelector('#button-ter')
buttonTer.addEventListener('click', () => {
  main.innerHTML = ''
  terMain()
})

const buttonRuleta = document.querySelector('#button-ruleta')
buttonRuleta.addEventListener('click', () => {
  main.innerHTML = ''
  ruletaMain()
})

const buttonMinas = document.querySelector('#button-minas')

buttonMinas.addEventListener('click', () => {
  main.innerHTML = ''
  minasMain()
})
