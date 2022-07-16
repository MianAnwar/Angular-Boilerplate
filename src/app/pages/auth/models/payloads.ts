
export class Payload {
  data?: Data;

  results?: Result;
}

class Result {
  message?: string;

  data?: Data;

  dataItems?: [];
}

export class Data {
  Verified?: boolean;

  userID?: string;

  signinStatus?: boolean;

  tempPin?: string;

  title?: string;

  condition?: string;

  id?: string;

  policy?: string;

  accountStatusCode?: string;

  dailyTransferLimit?: string;

  huaweiStatusCode?: string;

  huaweiPinStatus?: string;

  internationalRemittance?: boolean;

  upgradeToMax?: string;

  wallet?: string;

  walletLimit?: string;

  phoneNumber?: string;

  firstName?: string;

  lastName?: string;

  Status?: boolean;

  createdAt?: string;

  amount?: string;

  tax?: string;

  fees?: string;
}
