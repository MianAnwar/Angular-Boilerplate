export const groupby = function (list: Array<any>, key: string) {
  let val;
  let index;
  let values = [];
  let result = [];
  for (let i = 0; i < list.length; i++) {
    val = list[i][key];
    index = values.indexOf(val);
    if (index > -1) result[index].push(list[i]);
    else {
      values.push(val);
      result.push([list[i]]);
    }
  }
  return result;
};

export const deflateObj = function (list: Array<any>) {
  let result: any = [];
  for (const item of list) {
    const newItem = {
      cardName: item[0].cardName,
      sortOrder: item[0].sortOrder,
      widgets: item,
    };
    result.push(newItem);
  }
  return result;
};
