import round from './roundUSD';
import tip from './calculateTip';
import moneyToNumber from './moneyToNumber';

/**
 * calculateTotal - Calculates total based on tip and amount
 *
 * @param {number} amount
 * @param {number} tipPct
 */
export default (amount, tipPct) => (!amount || !tipPct || isNaN(amount) || isNaN(tipPct))
    ? '0.00'
    : round((amount / 100) + moneyToNumber(tip(amount, tipPct)));