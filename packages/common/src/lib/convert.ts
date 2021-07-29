export function convert(s, val) {
  const names = s.replace(/^\w+/, "$&]").replace(/]$/, "").split("][");
  const result = {};
  let obj = result;
  let last;

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (typeof last !== "undefined") {
      obj[last] = name === "" ? [] : {};
      obj = obj[last];
    }
    last = name === "" ? 0 : name;
  }

  obj[last] = val;

  return result;
}
