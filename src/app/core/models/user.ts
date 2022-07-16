export class User {
  constructor(
    id: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    wallet: number,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.wallet = wallet;
  }

  id: string;

  firstName: string;

  lastName: string;

  phoneNumber: string;

  wallet: number;
}
