/**
 * Известны результаты каждой из 4х четвертей баскетбольной встречи.
 * Нужно определить победителя матча. Побеждает команда,
 * набравшая больше очков в течение всего матча.
 *
 * Напишите функцию getWinner(points) возвращающую номер победившей команды,
 * либо undefined в случае ничьей.
 *
 * Пример:

 * getWinner(['23-26', '24-30', '30-27', '35-31']) === 2
 * getWinner(['36-32', '32-24', '20-28', '30-26']) === 1
 * getWinner(['36-18', '22-31', '27-21', '19-34']) === undefined
 *
 * @param {string[]} points
 * @returns {(number|undefined)}
 */
function getWinner(points) {
    const results = points.map((total) => {
        const scoreOfCommands = total.split('-')
        return Number(scoreOfCommands[0]) - Number(scoreOfCommands[1])
    });
    const final = results.reduce((prev, curr) => prev + curr, 0)
    if (final === 0) {
        return undefined
    }
    return final > 0 ? 1 : 2;
}

module.exports = getWinner;
