import { TemplateRef } from '@angular/core';

export const shortcuts = 'shortcuts';
export const topPicks = 'topPicks';
export const paymentlist = 'paymentlist';
export const billingList = 'billingList';
export const inviteList = 'inviteList';

export interface ItemplateMapping {
  [key: string]: string;
}

export const templateMapping: ItemplateMapping = {
  wallet: 'Wallet',
  banners: 'Banners',
  shortcuts: 'Shortcuts',
  topPicks: 'TopPicks',
  paymentlist: 'PaymentList',
  inviteList: 'InviteList',
  billingList: 'BillingList',
};

export const templateReverseMapping: ItemplateMapping = {
  Wallet: 'wallet',
  Banners: 'banners',
  Shortcuts: 'shortcuts',
  TopPicks: 'topPicks',
  PaymentList: 'paymentlist',
  InviteList: 'inviteList',
  BillingList: 'billingList',
};

export class DashboardTemplate {
  constructor(
    Wallet: TemplateRef<Element>,
    Banners: TemplateRef<Element>,
    BillingList: TemplateRef<Element>,
    Shortcuts: TemplateRef<Element>,
    TopPicks: TemplateRef<Element>,
    PaymentList: TemplateRef<Element>,
    InviteList: TemplateRef<Element>,
  ) {
    this.Wallet = Wallet;
    this.Banners = Banners;
    this.BillingList = BillingList;
    this.Shortcuts = Shortcuts;
    this.TopPicks = TopPicks;
    this.PaymentList = PaymentList;
    this.InviteList = InviteList;
  }

  Wallet: TemplateRef<Element>;

  Banners: TemplateRef<Element>;

  BillingList: TemplateRef<Element>;

  Shortcuts: TemplateRef<Element>;

  TopPicks: TemplateRef<Element>;

  PaymentList: TemplateRef<Element>;

  InviteList: TemplateRef<Element>;
}
