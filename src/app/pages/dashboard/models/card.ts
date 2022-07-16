import { Widget } from './widget';

export class Card {
  constructor(
    cardName: string,
    type: string,
    sortOrder: number,
    widgets: Widget[],
    dataItems: Widget[],
  ) {
    this.cardName = cardName;
    this.type = type;
    this.sortOrder = sortOrder;
    this.widgets = widgets;
    this.dataItems = dataItems;
  }

  cardName: string;

  type: string;

  sortOrder: number;

  widgets: Widget[];

  dataItems: Widget[];
}
