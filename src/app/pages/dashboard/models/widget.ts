import { BillPayment } from './billPayment';
import { InviteWrapper } from './Invite';
import { SchedulePayment } from './schedulePayments';

export class DashboardData {
  constructor(dashboardItems: DashboardCard[]) {
    this.dashboardItems = dashboardItems;
  }

  dashboardItems: DashboardCard[];
}

export class DashboardCard {
  constructor(cardName: string, type: string, data: DashboardDataItem) {
    this.cardName = cardName;
    this.type = type;
    this.data = data;
  }

  cardName: string;

  type: string;

  data: DashboardDataItem;
}
export class Widget {
  constructor(
    id: string,
    categoryName: string,
    categoryStatus: string,
    cardName: string,
    cardId: string,
    identifier: string,
    categoryEnum: string,
    categoryId: string,
    sortOrder?: number,
    isTop?: boolean,
    isShortcut?: boolean,
    isEmpty = false,
    categoryIcon?: string,
    categoryIconKey?: string,
    hideWidget?: boolean,
  ) {
    this.id = id;
    this.categoryName = categoryName;
    this.categoryStatus = categoryStatus;
    this.cardName = cardName;
    this.cardId = cardId;
    this.sortOrder = sortOrder;
    this.identifier = identifier;
    this.isTop = isTop;
    this.categoryIcon = categoryIcon;
    this.categoryIconKey = categoryIconKey;
    this.categoryEnum = categoryEnum;
    this.categoryId = this.categoryId;
    this.isEditMode = false;
    this.isShortcut = isShortcut;
    this.isEmpty = isEmpty;
    this.hideWidget = hideWidget;
    this.categoryId = categoryId;
  }

  id: string;

  categoryName: string;

  categoryStatus: string;

  cardName: string;

  cardId: string;

  sortOrder?: number;

  isTop?: boolean;

  isEditMode: boolean;

  categoryIcon?: string;

  categoryIconKey?: string;

  identifier?: string;

  isShortcut?: boolean;

  isEmpty?: boolean;

  hideWidget?: boolean;

  categoryEnum: string;

  categoryId!: string;
}

export class DashboardDataItem {
  constructor(
    billingList: BillPayment[],
    inviteList: InviteWrapper[],
    paymentList: SchedulePayment[],
    shortcuts: Widget[],
    topPicks: Widget[],
    wallet: Widget[],
  ) {
    this.billingList = billingList;
    this.inviteList = inviteList;
    this.paymentList = paymentList;
    this.shortcuts = shortcuts;
    this.topPicks = topPicks;
    this.wallet = wallet;
  }


  billingList: BillPayment[];

  inviteList: InviteWrapper[];

  paymentList: SchedulePayment[];

  shortcuts: Widget[];

  topPicks: Widget[];

  wallet: Widget[];
}

export class KeyValueType {
  [key: string]: Widget[];
}

export class PostShortcut {
  constructor(userId: string, categories: Widget[]) {
    this.userId = userId;
    this.categories = categories;
  }

  userId: string;

  categories: Widget[];
}

export class PostShortcutResponse {
  constructor(categories: string[]) {
    this.categories = categories;
  }

  categories: string[];
}
