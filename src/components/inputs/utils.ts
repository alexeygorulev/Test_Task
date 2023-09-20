export const getCaretPosition = (value: string, beforeCaretPosValue: string, firstPosition: number) => {
  let pos = 0;
  let conj = 0;
  if (beforeCaretPosValue) {
    value.split('').forEach((symbol) => {
      pos += 1;
      if (symbol === beforeCaretPosValue[conj]) {
        conj += 1;
        if (conj === beforeCaretPosValue.length) return true;
      }
      return false;
    });
  }
  if (firstPosition && pos < firstPosition) return firstPosition;
  return pos;
};
