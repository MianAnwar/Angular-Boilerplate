import { Balance } from '../../../models/balance';

export const getBalance = (wallet: number) => {
  let amount = wallet?.toString().split('.') || ['00', '00'];
  const nonDecimal = amount[0] || '00';
  const decimal = amount[1] || '00';
  return new Balance(nonDecimal, decimal);
};
