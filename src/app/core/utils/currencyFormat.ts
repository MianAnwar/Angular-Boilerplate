export const defaultCurrency = 'J$';

export const currencyFormat = (
  amount: string,
  symbol: string,
  hideSymbol: boolean = false,
  isNonDecimal: boolean = false,
) => {
  if (!amount) {
    return '';
  }
  const decimals = 2;
  const pieces = parseFloat(amount).toFixed(decimals).toString().split('');
  let ii = pieces.length - 3;
  while ((ii -= 3) > 0) {
    pieces.splice(ii, 0, ',');
  }
  const resultAmount = pieces.join('');
  if (isNonDecimal) {
    return resultAmount.split('.')[0];
  }

  if (hideSymbol) {
    return resultAmount;
  }
  return `${symbol || defaultCurrency} ${resultAmount}`;
};
