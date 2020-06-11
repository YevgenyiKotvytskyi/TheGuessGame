'use strict';

/* jshint -W097 */
/*global
alert, confirm, console, prompt
*/

let isNumber = function (n) {
    return !isNaN(n) && isFinite(n);
};

function game() {
    let goalNumber = 10;

    function userTry(firstMessahe = '') {
        let tryNumber = prompt(`${firstMessahe}Введите число (Отмена - выход)`);
        if (tryNumber == null) {
            alert('Игра окончена пользователем.');
            return;
        } else if (!isNumber(tryNumber)) {
            alert('Введте число!');
            userTry();
        } else if (tryNumber < goalNumber) {
            userTry('Загаданное число меньше!\n');
        } else if (tryNumber > goalNumber) {
            userTry('Загаданное число больше!\n');
        } else {
            alert('Поздравляю! Вы угадали!');
            return;
        }
    }

    return userTry;
}

const gameTry = game();

let start = confirm('Начинаем игру');

if (start) gameTry();



