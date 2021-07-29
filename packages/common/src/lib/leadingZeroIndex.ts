export const leadingZeroIndex = function(index) {
  let s = index + "";
  while (s.length < 2) { s = "0" + s; }
  return s;
};
