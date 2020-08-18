export const darkMode = (instance: any) => {
  // const theme = instance.element.closest("midwest-theme") as any;
  const theme = closestElement("midwest-theme", instance.element) as any;

  if (theme) {
    instance.dark = theme.store.get("dark")
    theme.store.onChange("dark", (dark) => { instance.dark = dark; })
  }
}

const closestElement = (selector, base) => {
  function __closestFrom(el) {
      if (!el || el === document || el === window) return null;
      let found = el.closest(selector);
      return found ? found : __closestFrom(el.getRootNode().host);
  }

  return __closestFrom(base);
}