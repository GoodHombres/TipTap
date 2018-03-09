import tip from './calculateTip'

/**
 * calculateTotal - Calculates total based on tip and amount
 *
 * @param {number} amount
 * @param {number} tipPct
 */
export default (amount, tipPct) =>
  !amount || !tipPct || isNaN(amount) || isNaN(tipPct)
    ? // If not valid amount or tip percentage, return default value
      0
    : // Otherwise return total
      amount + tip(amount, tipPct)
