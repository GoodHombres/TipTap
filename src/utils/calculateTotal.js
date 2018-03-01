import round from './roundUSD';
import tip from './calculateTip';

/**
 * calculateTotal - Calculates total based on tip and amount
 *
 * @param {number} amount
 * @param {number} tipPct
 */
export default (amount, tipPct) => round(amount + tip(amount, tipPct));