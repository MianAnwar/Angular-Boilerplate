export class ListItem {
  constructor(icon: string, mainText: string, lowerText?: string, userId?: string, id?: string) {
    this.icon = icon;
    this.mainText = mainText;
    this.lowerText = lowerText;
    this.userId = userId;
    this.id = id;
  }

  icon: string;

  mainText: string;

  lowerText?: string = undefined;

  userId?: string = undefined;

  id?: string = undefined;
}
