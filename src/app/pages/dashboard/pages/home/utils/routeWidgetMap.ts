import { ROUTER_UTILS } from 'src/app/core/utils/router.utils';

interface IRouteWidgetMap {
  [key: string]: string;
}
export const routeWidgetMap: IRouteWidgetMap = {
  ADD_MONEY: `/${ROUTER_UTILS.home.cashIn.root}`,
  WITHDRAW_CASH: `/${ROUTER_UTILS.home.cashIn.root}`,
  ELECTRICITY: `/${ROUTER_UTILS.home.billPayment.root}`,
  WATER: `/${ROUTER_UTILS.home.billPayment.root}`,
  GAS: `/${ROUTER_UTILS.home.billPayment.root}`,
  INTERNET: `/${ROUTER_UTILS.home.billPayment.root}`,
  TELEPHONE: `/${ROUTER_UTILS.home.billPayment.root}`,
  TRN_TRANSFER: `/${ROUTER_UTILS.home.p2pTransfer.root}`,
  MYCASH_TRANSFER: `/${ROUTER_UTILS.home.p2pTransfer.root}`,
  // CREDIT_CARD: `/${ROUTER_UTILS.home.cashIn.root}`,
  // PREPAID_TOPUP: `/${ROUTER_UTILS.home.cashIn.root}`,
  // POSTPAID_BILL: `/${ROUTER_UTILS.home.cashIn.root}`,
  // MOBILE_BUNDLES: `/${ROUTER_UTILS.home.cashIn.root}`,
  // BANK_TRANSFER: `/${ROUTER_UTILS.home.cashIn.root}`,
};
