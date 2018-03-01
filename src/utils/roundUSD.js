/**
 * roundUSD - Returns a numeric value rounded to two decimal places.
 *
 * @param {number} amount
 */
export default (amount) => {
 const factor = Math.pow(10, 2);

 return isNaN(amount)
  // If not a number return 0
  ? 0
  // Otherwise return rounded value
  : Math.round(amount * factor) / factor;
}