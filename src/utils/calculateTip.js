import round from './roundUSD';

/**
 * calculateTip - Returns tip value based on amount and percentage
 *
 * @param {number} amount
 * @param {number} tipPct
 */
export default (amount, tipPct) => round(amount * (tipPct / 100));