export class Contact {
  constructor(name: string, phone: string, accTitle?: string, imageURL?: string, userId?: string) {
    this.name = name;
    this.phone = phone;
    this.AccountTitle = accTitle;
    this.MSISDN = phone;
    this.imageURL = imageURL;
    this.userId = userId;
  }

  name: string;

  Name?: string;

  phone: string;

  MSISDN?: string;

  AccountTitle?: string;

  imageURL?: string;

  userId?: string;
}
