export const humanize = (name: string|Array<string>) => {
  if (name === null) return null;
  if (Array.isArray(name)) {
    return name.map((item) => {
      return humanize(item);
    });
  }

  return name.replace(/_/g, " ").replace(/(\w+)/g, function(match) {
    return match.charAt(0).toUpperCase() + match.slice(1);
  });
};  
