'use strict';

/* jshint -W097 */
/*global
alert, confirm, console, prompt
*/

const maxTry = 10;
const gameGoalRange = [1, 100];


let isNumber = function (n) {
    return !isNaN(n) && isFinite(n);
};

function randomInt(min, max) {
	return min + Math.floor((max - min) * Math.random());
}

function game() {

    let goalNumber;
    let tryCount;

    function initGame(){
        tryCount = maxTry;
        goalNumber = randomInt(gameGoalRange[0], gameGoalRange[1]);
    }

    function userTry(firstMessahe = '') {
        let tryNumber = prompt(`${firstMessahe}Введите число (Отмена - выход)`);
        if (tryNumber == null) {
            alert('Игра окончена пользователем');
            return;
        } else if (!isNumber(tryNumber)) {
            alert('Введте число!');
            userTry();
        } else if (tryCount == 1) {
            if (confirm('Попытки закончились, хотите сыграть еще?')) {
                initGame();
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
                initGame();
                userTry();
            }
        }
    }

    initGame();

    return userTry;
}

const gameTry = game();

let start = confirm('Начинаем игру');

if (start) gameTry();



