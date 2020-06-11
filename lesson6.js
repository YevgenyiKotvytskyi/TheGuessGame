'use strict';

/* jshint -W097 */
/*global
alert, confirm, console, prompt
*/

const gameGoalRange = [1, 100];

let isNumber = function (n) {
    return !isNaN(n) && isFinite(n);
};

function randomInt(min, max) {
	return min + Math.floor((max - min) * Math.random());
}

function game() {
    let goalNumber;

    function initGame(){
        goalNumber = randomInt(gameGoalRange[0], gameGoalRange[1]);
        console.log('goalNumber: ', goalNumber);
    }

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

    initGame();
    
    return userTry;
}

const gameTry = game();

let start = confirm('Начинаем игру');

if (start) gameTry();



