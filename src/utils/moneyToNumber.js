/**
 * moneyToNumber - Returns money value as a number
 *
 * @param {string} amount
 */
export default (amount) => parseInt(amount.replace(/[^0-9-.]/g, ''), 10);