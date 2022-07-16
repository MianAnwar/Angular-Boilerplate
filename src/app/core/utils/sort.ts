export const sortItems = <T>(items: Array<T>, property: string) => {
  let sortResult = [];
  type ObjectKey = keyof typeof items[0];
  const propertyName = property as ObjectKey;
  sortResult = items.sort((a, b) => {
    return a[propertyName] < b[propertyName] ? -1 : 1;
  });
  return sortResult;
};
