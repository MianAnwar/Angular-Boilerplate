export class SchedulePayment {
  constructor(
    to: Account,
    from: Account,
    totalAmount: number,
    fee: number,
    tax: number,
    type: string,
    id: number,
    date: Date,
    recieversCode?: string,
    operator?: string,
    address?: string,
    toBank?: string,
    discount?: number,
    discountPercentage?: number,
  ) {
    this.to = to;
    this.from = from;
    this.totalAmount = totalAmount;
    this.fee = fee;
    this.tax = tax;
    this.type = type;
    this.id = id;
    this.date = date;
    this.recieversCode = recieversCode;
    this.operator = operator;
    this.address = address;
    this.toBank = toBank;
    this.discount = discount;
    this.discountPercentage = discountPercentage;
  }

  type: string;

  to: Account;

  from: Account;

  totalAmount: number;

  fee: number;

  tax: number;

  id: number;

  date: Date;

  amount?: number;

  discount?: number;

  discountPercentage?: number;

  recieversCode?: string;

  operator?: string;

  address?: string;

  toBank?: string;

  parentId!: string;

  frequency!: string;

  nextRunDate!: string;

  deleted!: boolean;

  requestId!: string;

  createdAt!: string;

  status!: string;

  version!: number;
}

export class Account {
  MSISDN!: string;

  Name!: string;

  userId!: string;

  accountTitle!: string;
}
