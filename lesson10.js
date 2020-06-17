/* jshint -W097 */
/* jshint -W014 */
/*global
alert, confirm, console, prompt
*/

let 
    booksShell = document.querySelector('.books');
    bookContents = document.querySelectorAll('.book ul'),
    adv = document.querySelector('.adv'),
    newChapter = document.createElement('li');

let isNumber = function (n) {
    return !isNaN(n) && isFinite(n) && n.trim() !== '';
};

let  sortElements = function (host, childrenSelector, headword , sortTag = '') {

    
    const shellIndex = [];

    const children = host.querySelectorAll(childrenSelector);

    children.forEach( element => {

        let 
            shellName =  (sortTag != '' ) ? 
                element.querySelector(sortTag).textContent 
                : element.textContent,
            
                shellNumber = 0;

        if (shellName.indexOf(headword) >= 0) {
            shellName = shellName.replace(headword,'').trim();

            shellNumber = (isNumber(shellName[0])) ? 
                shellNumber = parseFloat(shellName) :
                shellNumber = shellName.charCodeAt(0);
        }


        if (shellNumber > 0) {
            shellIndex[shellNumber] = element;
        }

    });
    
    shellIndex.forEach( element  => {
        host.insertAdjacentElement('beforeend',element);
    });

};

sortElements(booksShell,'.book', 'Книга' , 'h2'  );

bookContents.forEach( element => sortElements(element,'li' , 'Глава ' ) );

bookContents.forEach( element => sortElements(element,'li' , 'Приложение ' ) );

document.body.style.backgroundImage ='url(./image/you-dont-know-js.jpg)';

booksShell.children[2].querySelector('h2 a').textContent = 'Книга 3. this и Прототипы Объектов';

newChapter.textContent = 'Глава 8: За пределами ES6';

let bookContent = booksShell.children[5].querySelectorAll('li');

bookContent.forEach (element => {
    
    const shortName = element.textContent.replace('Глава','').trim();

    if (shortName.indexOf('7') === 0) {
        console.log('element', element);
        element.after(newChapter);   
    }
} );

adv.remove();

function showScope(){}

console.dir(showScope);



