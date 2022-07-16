import { Contact } from './contact';

export class Transaction {
  constructor(
    reciever: Contact,
    sender: Contact,
    total: number,
    fee: number | undefined,
    tax: number | undefined,
    type: string,
    id: string,
    date: Date | string,
    recieversCode?: string,
    operator?: string,
    address?: string,
    toBank?: string,
    originalAmount?: number,
    discount?: number,
    discountPercentage?: number,
  ) {
    this.reciever = reciever;
    this.sender = sender;
    this.total = total;
    this.fee = fee;
    this.tax = tax;
    this.transactionType = type;
    this.id = id;
    this.date = date;
    this.recieversCode = recieversCode;
    this.operator = operator;
    this.address = address;
    this.toBank = toBank;
    this.originalAmount = originalAmount;
    this.discount = discount;
    this.discountPercentage = discountPercentage;
  }

  transactionType: string;

  reciever: Contact;

  sender: Contact;

  total: number;

  fee?: number | undefined;

  tax?: number | undefined;

  id: string;

  date: Date | string;

  originalAmount?: number;

  discount?: number;

  discountPercentage?: number;

  recieversCode?: string;

  operator?: string;

  address?: string;

  toBank?: string;
}
