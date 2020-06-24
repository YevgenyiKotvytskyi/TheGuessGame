'use strict';

/* jshint -W097 */
/*global
alert, confirm, console, prompt
*/


function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.getElement = function () {
    let newElement = null;
    if (this.selector) {
        const selector = this.selector[0];
        if (selector === '.') {
            newElement = document.createElement('div');
            newElement.textContent = 'The new div element';
            newElement.classList.add(this.selector.substring(1));
        } else if (selector === '#') {
            newElement = document.createElement('p');
            newElement.textContent = 'The new paragraph element';
            newElement.id = this.selector.substring(1);
        }
        if (newElement) {
            newElement.style.cssText = `
                height: ${this.height};
                width: ${this.width};
                background-color: ${this.bg};
                font-size: ${this.fontSize};
            `;
        }
    }
    return newElement;
};

let divElement = new DomElement('.block', '100px', '100px', 'green', '14px');

let newElement = divElement.getElement();

newElement.style.cssText += 'position: absolute; top: 50px; left: 50px;';

let moveElement = function () {

    function addPx(position, add = true) {
        let pos = parseInt(position);
        if (add) {
            pos += 10;
        } else {
            pos -= 10;
        }
        return (pos > 0) ? pos + 'px' : 0;
    }

    let style = newElement.style;

    switch (event.key) {
        case 'ArrowUp':
            style.top = addPx(style.top, false);
            break;
        case 'ArrowRight':
            style.left = addPx(style.left);
            break;
        case 'ArrowLeft':
            style.left = addPx(style.left, false);
            break;
        case 'ArrowDown':
            style.top = addPx(style.top);
            break;
    }

};

document.addEventListener('DOMContentLoaded', () => {
    document.body.append(newElement);
    document.body.addEventListener('keydown', moveElement);
});

