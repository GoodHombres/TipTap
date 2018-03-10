import tip from './calculateTip';

/**
 * calculateTotal - Calculates total based on tip and amount
 *
 * @param {number} amount
 * @param {number} tipPct
 */
export default (amount, tipPct, splits) =>
  !amount ||
  !tipPct ||
  !splits ||
  isNaN(amount) ||
  isNaN(tipPct) ||
  isNaN(splits)
    ? // If not valid amount or tip percentage, return default value
      0
    : // Otherwise return total
      amount / splits + tip(amount, tipPct, splits);
