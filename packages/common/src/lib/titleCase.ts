export function titleCase(str: string) {
  const newstr = str.toLowerCase().split(" ");
  for (let i = 0; i < str.length; i++) {
    newstr[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return newstr.join(" ");
}
