/**
 * Напишите функцию isPalindrome(value) определяющую,
 * является ли переданная строка палиндромом, то есть строкой,
 * которая одинаково читается слева направо и справа налево.
 *
 * Пример:
 *
 * isPalindrome('121') === true
 * isPalindrome('boob') === true
 * isPalindrome('true') === false
 *
 * @param {string} value
 * @returns {boolean}
 */
function isPalindrome(value) {
    for(let i = 0; i < value.length / 2; i++) {
        if (value[i] !== value[value.length - 1 - i]) {
            return false
        }
    }
    return true;
}

module.exports = isPalindrome;
