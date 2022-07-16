import { decodeParam, encodeParam } from './paramEncoder';

export enum StorageItem {
  Auth = 'App/auth',
  MSISDN = 'App/msisdn',
  UserID = 'App/userId',
  Theme = 'App/theme',
}

export const getItem = (itemName: string) => {
  const item = localStorage.getItem(encodeParam(itemName));
  return item ? JSON.parse(decodeParam(item)) : null;
};

export const setItem = (itemName: string, value: unknown): void => {
  localStorage.setItem(encodeParam(itemName), encodeParam(JSON.stringify(value)));
};

export const removeItem = (itemName: string): void => {
  localStorage.removeItem(encodeParam(itemName));
};
