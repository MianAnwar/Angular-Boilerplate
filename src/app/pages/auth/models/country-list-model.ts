export class CountryList {
  results?: Result;
}

class Result {
  dataItems?: DataItem[];

  message?: string;
}

export class DataItem {
  countryCode!: string;

  countryName!: string;

  flag?: string;

  id?: string;

  phonePrefix?: string;

  visible?: boolean;
}
