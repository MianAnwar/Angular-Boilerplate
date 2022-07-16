export class UserProfile {
  constructor(
    image?: string,

    emailAddress?: string,

    parish?: string,
    town?: string,
    fullAddress?: string,

    sourceOfIncome?: string,
  ) {
    this.image = image;
    this.emailAddress = emailAddress;
    this.parish = parish;
    this.town = town;
    this.fullAddress = fullAddress;
    this.sourceOfIncome = sourceOfIncome;
  }

  image: string | undefined;

  emailAddress: string | undefined;

  emailAddressOPTVerified: boolean = false;

  parish: string | undefined;

  town: string | undefined;

  fullAddress: string | undefined;

  sourceOfIncome: string | undefined;

}
