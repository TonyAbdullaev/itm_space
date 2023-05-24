/**
 * Напишите функцию getPower(n) возвращающую целочисленное значение степени >= 0,
 * в которую нужно возвести двойку, чтобы получить n
 *
 * Пример:
 *
 * getPower(2) === 1            # 2^1 = 2
 * getPower(3) === undefined
 * getPower(256) === 8          # 2^8 = 256
 *
 * @param {number} n
 * @returns {number|undefined}
 */
function getPower(n) {
    let count = 0;
    let factor = 1;
    for (let i = 0; i <= n; i++) {
        if (factor === n) {
            return count;
        }
        else if (factor > n) {
            return undefined
        } else {
            factor = factor * 2;
            count += 1;
        }
    }
    return count;
}

module.exports = getPower;
