import { Card } from '../../../models/card';
import { DashboardCard, DashboardDataItem, Widget } from '../../../models/widget';
import { templateReverseMapping } from './templateMapping';

export const cardMapper = (inputCards: DashboardCard): Card[] => {
  let cards: Card[] = [];
  const type = templateReverseMapping[inputCards.type] as keyof DashboardDataItem;
  const card: Card = new Card(
    inputCards.cardName,
    inputCards.type,
    1,
    inputCards?.data[type] as Widget[],
    inputCards?.data[type] as Widget[],
  );
  cards.push(card);
  return cards;
};
