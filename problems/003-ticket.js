/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number) {
    // console.log(number.split('').splice(3))
    const firstThree = number.split('').splice(0, 3).reduce((prev, curr) => Number(prev) + Number(curr))
    const lastThree = number.split('').splice(3).reduce((prev, curr) => Number(prev) + Number(curr))
    return firstThree === lastThree;
}

module.exports = checkTicket;
