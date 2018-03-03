export default (amount) => {
  // If no amount return default value
  if (!amount || isNaN(amount)) return '0.00';

  // Return amount as USD
  return (amount / 100)
    .toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    .substr(1);
}