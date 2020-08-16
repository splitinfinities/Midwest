export function convert(s, val) {
  var names = s.replace(/^\w+/, "$&]").replace(/]$/, "").split("][");
  var result = {};
  var obj = result;
  var last;

  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    if (typeof last !== "undefined") {
      obj[last] = name === "" ? [] : {};
      obj = obj[last];
    }
    last = name === "" ? 0 : name;
  }

  obj[last] = val;

  return result;
}