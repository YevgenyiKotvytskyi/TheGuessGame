'use strict';

/* jshint -W097 */
/*global
alert, confirm, console, prompt
*/


function DomElement(selector, height, width, bg, fontSize) {
    this.selector    =   selector;
    this.height      =   height; 
    this.width       =   width; 
    this.bg          =   bg; 
    this.fontSize    =   fontSize;
}

DomElement.prototype.getElement = function() {
    if (this.selector) {
        const selector = this.selector[0];
        let newElement = null;
        if ( selector=== '.') {
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
            document.body.append(newElement);
        }
    }
}

let divElement = new DomElement('.block','20px','200px','green','14px');
let paragraphElement = new DomElement('#block','20px','200px','blue','14px');
divElement.getElement();
paragraphElement.getElement();
