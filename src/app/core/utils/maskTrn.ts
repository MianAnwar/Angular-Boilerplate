export const maskInput = (inputTrn: string) => {
  let trn = '';
  [...inputTrn].forEach((c, index) => {
    if ((index == 3 || index == 7) && c != '-') {
      trn += '-';
      trn += c;
    } else {
      trn += c;
    }
  });
  return trn;
};
