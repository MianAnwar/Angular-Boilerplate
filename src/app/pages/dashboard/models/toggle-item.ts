export class ToggleItem {
  constructor(id: string, icon?: string, mainText?: string) {
    this.id = id;
    this.icon = icon;
    this.mainText = mainText;
  }

  id: string;

  icon?: string;

  mainText?: string;
}
