import { Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { ROUTER_UTILS } from '../core/utils/router.utils';

export const dashboardRoutes: Routes = [
  {
    path: ROUTER_UTILS.home.categories,
    loadChildren: async () =>
      (await import('../pages/dashboard/pages/categories/categories.module')).CategoriesModule,

    canLoad: [AuthGuard],
  },

  // {
  //   path: ROUTER_UTILS.home.topUp.root,
  //   loadChildren: async () =>
  //     (await import('../pages/dashboard/pages/top-up/top-up.module')).TopUpModule,
  //   canLoad: [AuthGuard],
  // },
  // {
  //   path: ROUTER_UTILS.home.billPayment.root,
  //   loadChildren: async () =>
  //     (await import('../pages/dashboard/pages/bill-payment/bill-payment.module')).BillPaymentModule,
  //   canLoad: [AuthGuard],
  // },
  // {
  //   path: ROUTER_UTILS.home.notifications.root,
  //   loadChildren: async () =>
  //     (await import('../pages/dashboard/pages/notifications/notifications.module'))
  //       .NotificationsModule,
  //   canLoad: [AuthGuard],
  // },
  {
    path: ROUTER_UTILS.home.referrals.root,
    loadChildren: async () =>
      (await import('../pages/dashboard/pages/referral/referral.module')).ReferralModule,
    canLoad: [AuthGuard],
  },
  {
    path: ROUTER_UTILS.home.transactionHistory.root,
    loadChildren: async () =>
      (await import('../pages/dashboard/pages/transaction-history/transaction-history.module'))
        .TransactionHistoryModule,
    canLoad: [AuthGuard],
  },
  // {
  //   path: ROUTER_UTILS.home.p2pTransfer.root,
  //   loadChildren: async () =>
  //     (await import('../pages/dashboard/pages/p2p-transfer/p2p-transfer.module')).P2pTransferModule,
  //   canLoad: [AuthGuard],
  // },
];
