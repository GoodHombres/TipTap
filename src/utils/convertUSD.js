export default amount => {
  // If no amount return default value
  if (!amount || isNaN(amount)) return '0.00'

  // Return amount as USD
  return parseFloat(amount / 100).toFixed(2)
}
