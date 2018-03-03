import USD from './convertUSD';

/**
 * calculateTip - Returns tip value based on amount and percentage
 *
 * @param {number} amount
 * @param {number} tipPct
 */
export default (amount, tipPct) => (!amount || !tipPct || isNaN(amount) || isNaN(tipPct))
  // If not valid amount or tip percentage, return default value
  ? '0.00'
  // Otherwise return tip
  : USD((amount * tipPct) / 100);