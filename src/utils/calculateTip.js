/**
 * calculateTip - Returns tip value based on amount and percentage
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
    : // Otherwise return tip
      amount * tipPct / splits / 100;
