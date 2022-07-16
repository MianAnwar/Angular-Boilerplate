export class TransactionHistory {
  ReceiptNumber?: string; // "1FN5001RHP",

  TransactionStatus?: string; // "Completed",

  TxnType?: string; // "P2P Transfer",

  InitiatorName?: string; // "18762926778 - waqas khan",

  Currency?: string; // "JMD",

  Amount?: string; // 5000,

  InitiatedTime?: string; // 20220623065959,

  CompletedTime?: string; // 20220623065959,

  Details?: string; // "Money Received from 18762926778 - waqas khan",

  direction?: boolean; // false
}

export class TransHistoryViewModel {
  returned?: number;

  total?: number;

  transHistory?: GroupedTranactionHistory[];
}

export class GroupedTranactionHistory {
  date?: string;

  history?: TransactionHistory[];
}
