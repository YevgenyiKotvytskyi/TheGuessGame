'use strict';

/* jshint -W097 */
/*global
alert, confirm, console, prompt
*/

const maxTry = 10;
const gameGoalNumber = 10;


let isNumber = function (n) {
    return !isNaN(n) && isFinite(n);
};

function game() {
    let goalNumber = gameGoalNumber;
    let tryCount = maxTry;

    function userTry(firstMessahe = '') {
        let tryNumber = prompt(`${firstMessahe}Введите число (Отмена - выход)`);
        if (tryNumber == null) {
            alert('Игра окончена пользователем.');
        } else if (!isNumber(tryNumber)) {
            alert('Введте число!');
            userTry();
        } else if (tryCount == 1) {
            if (confirm('Попытки закончились, хотите сыграть еще?')) {
                tryCount = maxTry;
                userTry();
            }
            alert('Игра окончена. Все попытки потрачены!');
        }
        else if (tryNumber < goalNumber) {
            userTry(`Загаданное число больше ${tryNumber}! Осталось ${--tryCount}\n`);
        } else if (tryNumber > goalNumber) {
            userTry(`Загаданное число меньше ${tryNumber}! Осталось ${--tryCount}\n`);
        } else {
            if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
                tryCount = maxTry;
                userTry();
            }
        }
    }

    return userTry;
}

const gameTry = game();

let start = confirm('Начинаем игру');

if (start) gameTry();



