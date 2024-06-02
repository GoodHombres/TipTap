const formatter = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 });

export function formatToUsd(amount: number) {
  return formatter.format(amount / 100);
}
