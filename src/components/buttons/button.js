import './button-style.css'



export const button = (texto, clase = "" , id="") => {
  return `<button href="#" class =" button ${clase}" id="${id}"> ${texto}</button>`;
};