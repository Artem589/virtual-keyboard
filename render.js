import { keyboardRu,keyboardRuLower, keyboardEn, keyboardEnLower, } from "./keyboard.js";

const { body } = document;
export const container = document.createElement("div");
container.className = "container";
body.prepend(container);

const buttons = document.createElement("div");
buttons.className = "buttons english";
const input = document.createElement("div");
const title = document.createElement("p");
const textArea = document.createElement("textarea");

input.className = "input";
title.className = "input__title";
title.innerText = "Виртуальная клавиатура";
textArea.className = "input__text";
textArea.setAttribute("cols", 85);
textArea.setAttribute("rows", 15);
textArea.setAttribute("value", " ");
container.prepend(input);
container.append(buttons);

input.append(title);
input.append(textArea);



export class Keyboard {
  constructor(arr) {
    this.arr = arr;
  }

  render() {
    this.arr.map((btn) => {
      const item = document.createElement("div");
      switch (btn) {
        case "Backspace":
          item.className = "render backspace";
          break;
        case "Tab":
          item.className = "render tab";
          break;
        case "\\":
          item.className = "render backSlash";
          break;
        case "CapsLock":
          item.className = "render capslock";
          break;
        case "Enter":
          item.className = "render enter";
          break;
        case "Shift":
          item.className = "render shift";
          break;
        case "Ctrl":
          item.className = "render ctrl";
          break;
        case "Alt":
          item.className = "render alt";
          break;
        case "Win":
          item.className = "render win";
          break;
        case " ":
          item.className = "render space";
          break;
        default:
          item.className = "render";
      }
      buttons.append(item);
      item.innerHTML = btn;
    });
  }

  find() {
    const item = document.querySelectorAll(".render");
    const itemArray = Array.prototype.slice.call(item);
    document.addEventListener("keydown", (e) => {
      itemArray.forEach((btn) => {
        if (e.key === btn.textContent) {
          btn.classList.add("active");
        }
      });
    });
    document.addEventListener("keyup", (e) => {
      itemArray.forEach((btn) => {
        if (e.key === btn.textContent) {
          btn.classList.remove("active");
        }
      });
    });
  }
}


window.addEventListener("keydown", (e) => {
  const item = document.querySelectorAll(".render");
  let item_array = Array.prototype.slice.call(item);
  const filters = item_array.filter((btn) => {
    const filterLetters =
      btn.innerHTML.length === 1 &&
      btn.innerHTML.match(/[A-zА-я]/i) &&
      btn.innerHTML.match(/[^\\\[\]\`]/i);
    if (filterLetters) {
      return btn.innerHTML;
    }
  });

  if (e.key === "CapsLock") {
    filters.map((btn, idx) => {
      if (btn.innerHTML === btn.innerHTML.toLocaleUpperCase()) {
        btn.innerHTML = btn.innerHTML.toLocaleLowerCase();
      } else {
        btn.innerHTML = btn.innerHTML.toLocaleUpperCase();
      }
    });
  }

  if (e.shiftKey && e.altKey) {
    switch (buttons.className) {
      case "buttons english":
        item_array.filter((btn, idx) => {
            if(btn.innerHTML === keyboardEnLower[idx].toLocaleLowerCase()) {
              btn.innerHTML = keyboardRuLower[idx]
            } else 
                  if(btn.innerHTML === keyboardEnLower[idx].toLocaleUpperCase()) {
            btn.innerHTML = keyboardRu[idx]
            }
            
    });
        buttons.className = "buttons russian";
        break;
      case "buttons russian":
        item_array.map((btn, idx) => {    
            btn.innerHTML = keyboardEn[idx];
        });
        buttons.className = "buttons english";
        break;
    }
  }
});


buttons.addEventListener('click', (e) => {
  e.target.value
})
