export const encodeParam = (param: string): string => {
  return encodeURIComponent(btoa(param));
};

export const decodeParam = (param: string): string => {
  return atob(decodeURIComponent(param));
};
