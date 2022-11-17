import 'normalize.css';
import './index.less';

function getDivs() {
    let arr = [];
    for (let i = 1; i < 7; ++i) {
        arr.push(document.querySelector(('.items_div' + i)));
    }

    return arr;
}

function getUls() {
    let arr = [];
    for (let i = 1; i < 7; ++i) {
        arr.push(document.querySelector(('.section_hidden_list' + i)));
    }

    return arr;
}

function getButtons() {
    let arr = [];
    for (let i = 1; i < 7; ++i) {
        arr.push(document.querySelector(('.open_menu' + i)))
    }

    return arr;
}

function setListeners(divs, uls, buttons) {
    for (let i = 0; i < 6; ++i) {
        console.log(divs[i]);
        divs[i].addEventListener('click', () => {
            buttons[i].classList.toggle('open');
            uls[i].classList.toggle('open');
        });
    }
}

let divs = getDivs();
let uls = getUls();
let buttons = getButtons();

setListeners(divs, uls, buttons);
