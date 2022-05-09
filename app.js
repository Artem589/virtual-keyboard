// import { keyboard } from "./keyboard.js";
// import { renderElement } from "./render.js";
import { keyboardEnLower } from './keyboard.js';
import { Keyboard, container } from './render.js'; 

const keyboard1 = new Keyboard(keyboardEnLower);
keyboard1.render(); 
keyboard1.find();

const text = document.querySelector('.input__text');
const buttons = document.querySelector('.buttons');
buttons.addEventListener('click', e => {
  e.preventDefault();
  checkBtn(e)
})



function caretText(text, symbol) {
  const start = text.selectionStart;
  const end = text.selectionEnd;
  text.value = `${text.value.slice(0, start)}${symbol}${text.value.slice(end)}`;
  text.setSelectionRange(start + 1, end + 1);
}


function checkBtn(e) {
  e.preventDefault();
  switch (e.key || e.target.textContent) {
    case "CapsLock":
    case "Shift":
    case "CapsLock":
    case "Ctrl":
    case "Alt":
    case "Del":
      caretText(text, "");
      break;
    case "Backspace":
      text.value = text.value.slice(0, -1);
      break;
    case "Enter":
      caretText(text, "\n");
      break;
    default:
      caretText(text, e.key || e.target.textContent);
  }
}

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  checkBtn(e);
});






