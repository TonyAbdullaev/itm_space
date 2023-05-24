/**
 * На экскурсионном маршруте автобусу высотой 512 см встречаются несколько мостов.
 *
 * Напишите функцию checkBusTour(bridges) вычисляющую номер моста под которым не сможет проехать автобус.
 *
 * Пример:
 *
 * checkBusTour([600, 512]) === 2
 * checkBusTour([600, 1024]) === undefined  # Автобус успешно проедет по маршруту
 *
 * @param {number[]} bridges высоты мостов встречающихся на маршруте
 * @returns {undefined|number}
 */
function checkBusTour(bridges) {
    let result;
    for(let i = 0; i < bridges.length; i += 1) {
        if(bridges[i] <= 512) {
            result = i + 1;
            break;
        }
    }
    return result;
}

module.exports = checkBusTour;
