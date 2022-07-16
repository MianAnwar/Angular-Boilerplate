export class ButtonStackItem {
  constructor(
    icon: string,
    mainText: string,
    lowerText?: string,
    url?: string,
    buttonType?: number,
    data?: Data,
  ) {
    this.icon = icon;
    this.mainText = mainText;
    this.lowerText = lowerText;
    this.redirectionUrl = url;
    this.buttonType = buttonType;
    this.data = data;
  }

  icon: string;

  mainText: string;

  redirectionUrl?: string;

  lowerText?: string = undefined;

  buttonType?: number;

  data?: Data; // todo change to T
}

class Data {
  paymentType?: string;

  id?: string;

  billShortCode?: string;
}
