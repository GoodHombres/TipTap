/**
 * Converts decimal unit to percentage
 *
 * @param decimal
 * @returns
 */
export const formatTip = (decimal: number): number => decimal * 100;

/**
 * Converts percentage to decimal unit
 *
 * @param percentage
 * @returns
 */
export const parseTip = (percentage: number): number => percentage / 100;
