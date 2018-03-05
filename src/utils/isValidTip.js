export default (tip) => {

  // Invalidate if tip is empty, 0, null or undefined
  if (!tip) return false;

  // Invalidate if tip is not a number
  if (isNaN(tip)) return false;

  // Invalidate any tip less than 1
  if (tip < 1) return false;

  return true;
}