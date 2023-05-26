/**
 * В доме решили провести перепись всех жильцов и составили список,
 * в котором указали возраст и пол каждого жильца.
 *
 * Напишите функцию census(list) возвращающую номер в списке самого старшего жителя мужского пола.
 *
 * Пример:
 *
 * census([{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }]) === 2
 * census([{ age: 40, gender: 'Female' }]) === undefined
 *
 * @param {{age: number, gender: string}[]} list
 * @returns {undefined|number}
 */
function census(list) {
    const maleList = list.filter((value, index) => value.gender === 'Male')
        .sort((a, b) => Number(a.age) - Number(b.age));
    const result = list.indexOf(maleList[maleList.length - 1]);
    return result !== -1 ? result + 1 : undefined;
}

module.exports = census;
