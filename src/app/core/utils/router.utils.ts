export const ROUTER_UTILS = {
  base: {
    home: 'home',
  },
  auth: {
    root: 'auth',
    otp: 'otp',
    signIn: 'sign-in',
    signUp: 'sign-up',
    resetPin: 'reset-pin',
    verifyTrn: 'verify-trn',
    updatePin: 'update-pin',
    suspended: 'suspended',
  },
  settings: {
    root: 'settings',
    account: 'account',
    appearance: 'appearance',
    billing: 'billing',
    blockedUsers: 'blocked-users',
    notifications: 'notifications',
    security: 'security',
    securityLog: 'security-log',
  },
  account: {
    root: 'account',
    support: { root: 'support', faq: 'faq' },
    feedback: 'feedback',
    accountLimitSettings: 'setting',
    changePin: { root: 'change-pin', update: 'update-pin' },
    upgradeAccount: {
      root: 'upgrade-account',
      basicInfo: 'basic-info',
      kyc: 'kyc',
    },
    editProfile: {
      root: 'edit-profile',
      updateEmail: 'update-email-address',
      updateSourceOfIncome: 'update-source-of-income',
      updateAddress: 'update-address',
      emailOtpVerification: 'email-verify-otp',
    },
  },
  errorResponse: {
    notFound: '404',
  },
  home: {
    root: 'home',
    categories: 'categories',
    cashIn: {
      root: 'cash-in',
      cashInAgent: 'cash-in-agent',
      cashInAgentForm: 'cash-in-agent-form',
      cashInRequest: 'cash-in-request',
      map: 'map',
      guide: 'guide',
      newRequest: 'new',
    },
    search: 'search',
    p2pTransfer: {
      root: 'p2p-transfer',
      myCash: 'my-cash',
      addBeneficiary: 'add-beneficiary',
      submitted: 'submitted',
    },
    topUp: { root: 'top-up', form: 'form', postSubmit: 'invoice' },
    billPayment: {
      root: 'bill-payment',
      getBill: 'get-bill',
      billInfo: 'bill-info',
      payMultiple: 'pay-multiple-bills',
    },
    notifications: { root: 'notifications', detail: 'detail' },
    referrals: { root: 'referrals', invite: 'invite-now' },
    transactionHistory: {
      root: 'transaction-history',
      detail: 'transaction-history',
    },
  },
  legal: {
    termsCondition: 'legal',
    privacyPolicy: 'privacyPolicy',
  },
};

export const constructURL = (URLs: string[]): string => {
  let url = '';
  URLs.forEach((element) => {
    url += element + '/';
  });
  return url.slice(0, -1).trim();
};
