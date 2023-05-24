/**
 * Напишите функцию getTimeDelta(x, y) определяющую,
 * сколько секунд прошло между двумя моментами времени x и y.
 *
 * Время передается в формате 'HH:MM:SS'. Минимальное значение – '00:00:00', максимальное – '23:59:59'.
 *
 * По условию x всегда меньше y.
 *
 * Пример:
 *
 * getTimeDelta('00:00:00', '00:00:01') === 1
 * getTimeDelta('01:01:01', '02:02:02') === 3661
 * getTimeDelta('01:19:30', '01:20:20') === 50
 *
 * @param {string} x
 * @param {string} y
 * @returns {number} разница между x и y в секундах
 */
// const [startH, startM, startS] = x.split(":")
// const [endH, endM, endS] = x.split(":")
function getTimeDelta(x, y) {
    const start = x.split(":")
    const end = y.split(":")
    const [hour, minute, second] = end.map((value, index) => Number(value) - Number(start[index]))
    return hour * 3600 + minute * 60 + second;
}

module.exports = getTimeDelta;
