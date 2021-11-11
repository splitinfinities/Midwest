/*!
 * (C) Split Infinities https://splitinfinities.com - MIT License
 */
import { h, Host, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

const noShadowCss = ":host,:host *,:host *::before,:host *::after{box-sizing:border-box}:host{display:inline-block}example-no-shadow{display:block}example-no-shadow p{color:blue}example-no-shadow slot-fb p{color:green}";

let NoShadow = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return h(Host, null, h("p", null, "Inner text content"), h("slot", null, h("p", null, "Fallback content")), h("export-to-figma", null));
  }
  static get style() { return noShadowCss; }
};

const withShadowCss = ":host,:host *,:host *::before,:host *::after{box-sizing:border-box}:host{display:inline-block}:host{display:block;background:red}:host p{color:yellow}:host ::slotted(p){color:pink !important}";

let WithShadow = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return h(Host, null, h("p", null, "Inner text content"), h("slot", null, h("p", null, "Fallback content")), h("export-to-figma", null));
  }
  static get style() { return withShadowCss; }
};

const isHidden = (element) => {
  let el = element;
  do {
    const computed = getComputedStyle(el);
    if (
    // computed.opacity === '0' ||
    computed.display === "none" ||
      computed.visibility === "hidden") {
      return true;
    }
    // Some sites hide things by having overflow: hidden and height: 0, e.g. dropdown menus that animate height in
    if (computed.overflow !== "visible" &&
      el.getBoundingClientRect().height < 1) {
      return true;
    }
  } while ((el = el.parentElement));
  return false;
};

const defaults = (color) => {
  return {
    transform: "none",
    opacity: "1",
    borderRadius: "0px",
    backgroundImage: "none",
    backgroundPosition: "0% 0%",
    backgroundSize: "auto",
    backgroundColor: "rgba(0, 0, 0, 0)",
    backgroundAttachment: "scroll",
    border: "0px none " + color,
    borderTop: "0px none " + color,
    borderBottom: "0px none " + color,
    borderLeft: "0px none " + color,
    borderRight: "0px none " + color,
    borderWidth: "0px",
    borderColor: color,
    borderStyle: "none",
    boxShadow: "none",
    fontWeight: "400",
    textAlign: "start",
    justifyContent: "normal",
    alignItems: "normal",
    alignSelf: "auto",
    flexGrow: "0",
    textDecoration: "none solid " + color,
    lineHeight: "normal",
    letterSpacing: "normal",
    backgroundRepeat: "repeat",
    zIndex: "auto" // TODO
  };
};

const pick = (object, paths, color) => {
  const newObject = {};
  paths.forEach(path => {
    if (object[path]) {
      if (object[path] !== defaults(color)[path]) {
        newObject[path] = object[path];
      }
    }
  });
  return newObject;
};

const getAppliedComputedStyles = (element, pseudo) => {
  if (!(element instanceof HTMLElement || element instanceof SVGElement)) {
    return {};
  }
  const styles = getComputedStyle(element, pseudo);
  const list = [
    "opacity",
    "backgroundColor",
    "border",
    "borderTop",
    "borderLeft",
    "borderRight",
    "borderBottom",
    "borderRadius",
    "backgroundImage",
    "borderColor",
    "boxShadow"
  ];
  const color = styles.color;
  return pick(styles, list, color);
};

const size = (obj) => {
  return Object.keys(obj).length;
};

const getDirectionMostOfElements = (direction, elements) => {
  if (elements.length === 1) {
    return elements[0];
  }
  return elements.reduce((memo, value) => {
    if (!memo) {
      return value;
    }
    if (direction === "left" || direction === "top") {
      if (getBoundingClientRect(value)[direction] <
        getBoundingClientRect(memo)[direction]) {
        return value;
      }
    }
    else {
      if (getBoundingClientRect(value)[direction] >
        getBoundingClientRect(memo)[direction]) {
        return value;
      }
    }
    return memo;
  }, null);
};

const getAggregateRectOfElements = (elements) => {
  if (!elements.length) {
    return null;
  }
  const top = getBoundingClientRect(getDirectionMostOfElements("top", elements)).top;
  const left = getBoundingClientRect(getDirectionMostOfElements("left", elements)).left;
  const bottom = getBoundingClientRect(getDirectionMostOfElements("bottom", elements)).bottom;
  const right = getBoundingClientRect(getDirectionMostOfElements("right", elements)).right;
  const width = right - left;
  const height = bottom - top;
  return {
    top,
    left,
    bottom,
    right,
    width,
    height
  };
};

const getBoundingClientRect = (el) => {
  const computed = getComputedStyle(el);
  const display = computed.display;
  if (display && display.includes("inline") && el.children.length) {
    const elRect = el.getBoundingClientRect();
    const aggregateRect = getAggregateRectOfElements(Array.from(el.children));
    return Object.assign(Object.assign({}, aggregateRect), { height: elRect.height, width: elRect.width, top: elRect.top, bottom: elRect.bottom, left: elRect.left, right: elRect.right });
  }
  return el.getBoundingClientRect();
};

const getRgb = (colorString) => {
  if (!colorString) {
    return null;
  }
  // @ts-ignore
  const [_1, r, g, b, _2, a] = (colorString.match(/rgba?\(([\d\.]+), ([\d\.]+), ([\d\.]+)(, ([\d\.]+))?\)/) || []);
  const none = a && parseFloat(a) === 0;
  if (r && g && b && !none) {
    return {
      r: parseInt(r) / 255,
      g: parseInt(g) / 255,
      b: parseInt(b) / 255,
      a: a ? parseFloat(a) : 1
    };
  }
  return null;
};

const capitalize = (str) => str[0].toUpperCase() + str.substring(1);

const getUrl = (url) => {
  if (!url) {
    return "";
  }
  let final = url.trim();
  if (final.startsWith("//")) {
    final = "https:" + final;
  }
  if (final.startsWith("/")) {
    final = "https://" + location.host + final;
  }
  return final;
};

const LENGTH_REG = /^[0-9]+[a-zA-Z%]+?$/;
const isLength = (v) => v === "0" || LENGTH_REG.test(v);

const toNum = (v) => {
  // if (!/px$/.test(v) && v !== '0') return v;
  if (!/px$/.test(v) && v !== "0")
    return 0;
  const n = parseFloat(v);
  // return !isNaN(n) ? n : v;
  return !isNaN(n) ? n : 0;
};

const parseValue = (str) => {
  // TODO: this is broken for multiple box shadows
  if (str.startsWith("rgb")) {
    // Werid computed style thing that puts the color in the front not back
    const colorMatch = str.match(/(rgba?\(.+?\))(.+)/);
    if (colorMatch) {
      str = (colorMatch[2] + " " + colorMatch[1]).trim();
    }
  }
  const PARTS_REG = /\s(?![^(]*\))/;
  const parts = str.split(PARTS_REG);
  const inset = parts.includes("inset");
  const last = parts.slice(-1)[0];
  const color = !isLength(last) ? last : "rgba(0, 0, 0, 1)";
  const nums = parts
    .filter(n => n !== "inset")
    .filter(n => n !== color)
    .map(toNum);
  const [offsetX, offsetY, blurRadius, spreadRadius] = nums;
  return {
    inset,
    offsetX,
    offsetY,
    blurRadius,
    spreadRadius,
    color
  };
};

const parseUnits = (str) => {
  if (!str) {
    return null;
  }
  const match = str.match(/([\d\.]+)px/);
  const val = match && match[1];
  if (val) {
    return {
      unit: "PIXELS",
      value: parseFloat(val)
    };
  }
  return null;
};

const textNodesUnder = (el) => {
  let n = null;
  const a = [];
  const walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
  while ((n = walk.nextNode())) {
    a.push(n);
  }
  if (el.shadowRoot) {
    const shadowWalk = document.createTreeWalker(el.shadowRoot, NodeFilter.SHOW_TEXT, null, false);
    while ((n = shadowWalk.nextNode())) {
      a.push(n);
    }
  }
  return a;
};

const hasChildren = (node) => node && Array.isArray(node.children);

const traverse = (layer, cb, parent) => {
  if (layer) {
    cb(layer, parent);
    if (hasChildren(layer)) {
      layer.children.forEach(child => traverse(child, cb, layer));
    }
  }
};

const getParents = (node) => {
  let el = node instanceof Node && node.nodeType === Node.TEXT_NODE
    ? node.parentElement
    : node;
  let parents = [];
  while (el && (el = el.parentElement)) {
    parents.push(el);
  }
  return parents;
};

const getDepth = (node) => {
  return getParents(node).length;
};

const getParent = (root, layer) => {
  let response = null;
  try {
    traverse(root, child => {
      if (child &&
        child.children &&
        child.children.includes(layer)) {
        response = child;
        // Deep traverse short circuit hack
        throw "DONE";
      }
    });
  }
  catch (err) {
    if (err === "DONE") ;
    else {
      console.error(err.message);
    }
  }
  return response;
};

const makeTree = (root, layers) => {
  const refMap = new WeakMap();
  layers.forEach(layer => {
    if (layer.ref) {
      refMap.set(layer.ref, layer);
    }
  });
  let updated = true;
  let iterations = 0;
  while (updated) {
    updated = false;
    if (iterations++ > 10000) {
      console.error("Too many tree iterations 1");
      break;
    }
    traverse(root, (layer, originalParent) => {
      // const node = layer.ref!;
      const node = layer.ref;
      let parentElement = (node && node.parentElement) || null;
      do {
        if (parentElement === document.body) {
          break;
        }
        if (parentElement && parentElement !== document.body) {
          // Get least common demoninator shared parent and make a group
          const parentLayer = refMap.get(parentElement);
          if (parentLayer === originalParent) {
            break;
          }
          if (parentLayer && parentLayer !== root) {
            if (hasChildren(parentLayer)) {
              if (originalParent) {
                const index = originalParent.children.indexOf(layer);
                originalParent.children.splice(index, 1);
                parentLayer.children.push(layer);
                updated = true;
                return;
              }
            }
            else {
              let parentRef = parentLayer.ref;
              if (parentRef &&
                parentRef instanceof Node &&
                parentRef.nodeType === Node.TEXT_NODE) {
                parentRef = parentRef.parentElement;
              }
              const overflowHidden = parentRef instanceof Element &&
                getComputedStyle(parentRef).overflow !== "visible";
              const newParent = {
                type: "FRAME",
                clipsContent: !!overflowHidden,
                // type: 'GROUP',
                x: parentLayer.x,
                y: parentLayer.y,
                width: parentLayer.width,
                height: parentLayer.height,
                ref: parentLayer.ref,
                backgrounds: [],
                children: [parentLayer, layer]
              };
              const parent = getParent(root, parentLayer);
              if (!parent) {
                console.warn("\n\nCANT FIND PARENT\n", JSON.stringify(Object.assign(Object.assign({}, parentLayer), { ref: null })));
                continue;
              }
              if (originalParent) {
                const index = originalParent.children.indexOf(layer);
                originalParent.children.splice(index, 1);
              }
              delete parentLayer.ref;
              const newIndex = parent.children.indexOf(parentLayer);
              refMap.set(parentElement, newParent);
              parent.children.splice(newIndex, 1, newParent);
              updated = true;
              return;
            }
          }
        }
      } while (parentElement &&
        (parentElement = parentElement.parentElement));
    });
  }
  // Collect tree of depeest common parents and make groups
  let secondUpdate = true;
  let secondIterations = 0;
  while (secondUpdate) {
    if (secondIterations++ > 10000) {
      console.error("Too many tree iterations 2");
      break;
    }
    secondUpdate = false;
    traverse(root, (layer, _) => {
      if (secondUpdate) {
        return;
      }
      if (layer.type === "FRAME") {
        // Final all child elements with layers, and add groups around  any with a shared parent not shared by another
        const ref = layer.ref;
        if (layer.children && layer.children.length > 2) {
          const childRefs = layer.children &&
            layer.children.map(child => child.ref);
          let lowestCommonDenominator = layer.ref;
          let lowestCommonDenominatorDepth = getDepth(lowestCommonDenominator);
          // Find lowest common demoninator with greatest depth
          for (const childRef of childRefs) {
            const otherChildRefs = childRefs.filter(item => item !== childRef);
            const childParents = getParents(childRef);
            for (const otherChildRef of otherChildRefs) {
              const otherParents = getParents(otherChildRef);
              for (const parent of otherParents) {
                if (childParents.includes(parent) &&
                  layer.ref.contains(parent)) {
                  const depth = getDepth(parent);
                  if (depth > lowestCommonDenominatorDepth) {
                    lowestCommonDenominator = parent;
                    lowestCommonDenominatorDepth = depth;
                  }
                }
              }
            }
          }
          if (lowestCommonDenominator &&
            lowestCommonDenominator !== layer.ref) {
            // Make a group around all children elements
            const newChildren = layer.children.filter((item) => lowestCommonDenominator.contains(item.ref));
            if (newChildren.length !== layer.children.length) {
              const lcdRect = getBoundingClientRect(lowestCommonDenominator);
              const overflowHidden = lowestCommonDenominator instanceof Element &&
                getComputedStyle(lowestCommonDenominator).overflow !==
                  "visible";
              const newParent = {
                type: "FRAME",
                clipsContent: !!overflowHidden,
                ref: lowestCommonDenominator,
                x: lcdRect.left,
                y: lcdRect.top,
                width: lcdRect.width,
                height: lcdRect.height,
                backgrounds: [],
                children: newChildren
              };
              refMap.set(lowestCommonDenominator, ref);
              let firstIndex = layer.children.length - 1;
              for (const child of newChildren) {
                const childIndex = layer.children.indexOf(child);
                if (childIndex > -1 && childIndex < firstIndex) {
                  firstIndex = childIndex;
                }
              }
              layer.children.splice(firstIndex, 0, newParent);
              for (const child of newChildren) {
                const index = layer.children.indexOf(child);
                if (index > -1) {
                  layer.children.splice(index, 1);
                }
              }
              secondUpdate = true;
            }
          }
        }
      }
    });
  }
  // Update all positions
  traverse(root, layer => {
    if (layer.type === "FRAME" || layer.type === "GROUP") {
      const { x, y } = layer;
      if (x || y) {
        traverse(layer, child => {
          if (child === layer) {
            return;
          }
          child.x = child.x - x;
          child.y = child.y - y;
        });
      }
    }
  });
  return { root, layers };
};

const setData = (node, key, value) => {
  if (!node.data) {
    node.data = {};
  }
  node.data[key] = value;
};

const addConstraints = (root, layers) => {
  layers.forEach(layer => {
    traverse(layer, child => {
      if (child.type === "SVG") {
        child.constraints = {
          horizontal: "CENTER",
          vertical: "MIN"
        };
      }
      else {
        const ref = child.ref;
        if (ref) {
          const el = ref instanceof HTMLElement ? ref : ref.parentElement;
          const parent = el && el.parentElement;
          if (el && parent) {
            const currentDisplay = el.style.display;
            el.style.setProperty('display', 'none', '!important');
            let computed = getComputedStyle(el);
            const hasFixedWidth = computed.width && computed.width.trim().endsWith('px');
            const hasFixedHeight = computed.height && computed.height.trim().endsWith('px');
            el.style.display = currentDisplay;
            const parentStyle = getComputedStyle(parent);
            let hasAutoMarginLeft = computed.marginLeft === "auto";
            let hasAutoMarginRight = computed.marginRight === "auto";
            let hasAutoMarginTop = computed.marginTop === "auto";
            let hasAutoMarginBottom = computed.marginBottom === "auto";
            computed = getComputedStyle(el);
            if (["absolute", "fixed"].includes(computed.position)) {
              setData(child, 'position', computed.position);
            }
            if (hasFixedHeight) {
              setData(child, 'heightType', 'fixed');
            }
            if (hasFixedWidth) {
              setData(child, 'widthType', 'fixed');
            }
            const isInline = computed.display && computed.display.includes("inline");
            if (isInline) {
              const parentTextAlign = parentStyle.textAlign;
              if (parentTextAlign === "center") {
                hasAutoMarginLeft = true;
                hasAutoMarginRight = true;
              }
              else if (parentTextAlign === "right") {
                hasAutoMarginLeft = true;
              }
              if (computed.verticalAlign === "middle") {
                hasAutoMarginTop = true;
                hasAutoMarginBottom = true;
              }
              else if (computed.verticalAlign === "bottom") {
                hasAutoMarginTop = true;
                hasAutoMarginBottom = false;
              }
              setData(child, 'widthType', 'shrink');
            }
            const parentJustifyContent = parentStyle.display === "flex" &&
              ((parentStyle.flexDirection === "row" &&
                parentStyle.justifyContent) ||
                (parentStyle.flexDirection === "column" &&
                  parentStyle.alignItems));
            if (parentJustifyContent === "center") {
              hasAutoMarginLeft = true;
              hasAutoMarginRight = true;
            }
            else if (parentJustifyContent &&
              (parentJustifyContent.includes("end") ||
                parentJustifyContent.includes("right"))) {
              hasAutoMarginLeft = true;
              hasAutoMarginRight = false;
            }
            const parentAlignItems = parentStyle.display === "flex" &&
              ((parentStyle.flexDirection === "column" &&
                parentStyle.justifyContent) ||
                (parentStyle.flexDirection === "row" &&
                  parentStyle.alignItems));
            if (parentAlignItems === "center") {
              hasAutoMarginTop = true;
              hasAutoMarginBottom = true;
            }
            else if (parentAlignItems &&
              (parentAlignItems.includes("end") ||
                parentAlignItems.includes("bottom"))) {
              hasAutoMarginTop = true;
              hasAutoMarginBottom = false;
            }
            if (child.type === "TEXT") {
              if (computed.textAlign === "center") {
                hasAutoMarginLeft = true;
                hasAutoMarginRight = true;
              }
              else if (computed.textAlign === "right") {
                hasAutoMarginLeft = true;
                hasAutoMarginRight = false;
              }
            }
            child.constraints = {
              horizontal: hasAutoMarginLeft && hasAutoMarginRight
                ? "CENTER"
                : hasAutoMarginLeft
                  ? "MAX"
                  : "SCALE",
              vertical: hasAutoMarginBottom && hasAutoMarginTop
                ? "CENTER"
                : hasAutoMarginTop
                  ? "MAX"
                  : "MIN"
            };
          }
        }
        else {
          child.constraints = {
            horizontal: "SCALE",
            vertical: "MIN"
          };
        }
      }
    });
  });
  return { root, layers };
};

const removeRefs = (root, layers) => {
  layers.concat([root]).forEach(layer => {
    traverse(layer, child => {
      delete child.ref;
    });
  });
  return { root, layers };
};

// export const selectorToFigma(selector: string = "body", useFrames = false, time = false) {
// }
// export const nodeToFigma(element: HTMLElement, useFrames = false, time = false) {
// }
const htmlToFigma = (selector = "body", useFrames = false, time = false) => {
  if (time) {
    console.time("Parse dom");
  }
  let layers = [];
  const el = selector instanceof HTMLElement ? selector : document.querySelector(selector || "body");
  if (el) {
    // Process SVG <use> elements
    for (const use of Array.from(el.querySelectorAll("use"))) {
      try {
        const symbolSelector = use.href.baseVal;
        const symbol = document.querySelector(symbolSelector);
        if (symbol) {
          use.outerHTML = symbol.innerHTML;
        }
      }
      catch (err) {
        console.warn("Error querying <use> tag href", err);
      }
    }
    let els = Array.from(el.querySelectorAll("*"));
    if (el.shadowRoot) {
      const shadowEls = Array.from(el.shadowRoot.querySelectorAll("*"));
      els = [...shadowEls, ...els];
      els = els.filter(e => !["EXPORT-TO-FIGMA", "SLOT"].includes(e.tagName));
    }
    if (els) {
      // Include shadow dom
      for (const el of els) {
        if (el.shadowRoot) {
          const shadowEls = Array.from(el.shadowRoot.querySelectorAll('*'));
          els.push(...shadowEls);
        }
      }
      Array.from(els).forEach(el => {
        if (isHidden(el)) {
          return;
        }
        if (el instanceof SVGSVGElement) {
          const rect = el.getBoundingClientRect();
          // TODO: pull in CSS/computed styles
          // TODO: may need to pull in layer styles too like shadow, bg color, etc
          layers.push({
            type: "SVG",
            ref: el,
            svg: el.outerHTML,
            x: Math.round(rect.left),
            y: Math.round(rect.top),
            width: Math.round(rect.width),
            height: Math.round(rect.height)
          });
          return;
        }
        // Sub SVG Eleemnt
        else if (el instanceof SVGElement) {
          return;
        }
        if (el.parentElement &&
          el.parentElement instanceof HTMLPictureElement) {
          return;
        }
        const appliedStyles = getAppliedComputedStyles(el);
        const computedStyle = getComputedStyle(el);
        if ((size(appliedStyles) ||
          el instanceof HTMLImageElement ||
          el instanceof HTMLPictureElement ||
          el instanceof HTMLVideoElement) &&
          computedStyle.display !== "none") {
          const rect = getBoundingClientRect(el);
          if (rect.width >= 1 && rect.height >= 1) {
            const fills = [];
            let color = getRgb(computedStyle.backgroundColor);
            if (computedStyle.background.includes("gradient")) {
              // @ts-ignore
              var match = [...computedStyle.background.matchAll(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/g)];
              color = getRgb(match[1][0]);
            }
            // TODO: Add support for gradients
            if (color) {
              fills.push({
                type: "SOLID",
                color: {
                  r: color.r,
                  g: color.g,
                  b: color.b
                },
                opacity: color.a || 1
              });
            }
            const rectNode = {
              type: "RECTANGLE",
              ref: el,
              x: Math.round(rect.left),
              y: Math.round(rect.top),
              width: Math.round(rect.width),
              height: Math.round(rect.height),
              fills: fills
            };
            if (computedStyle.border) {
              const parsed = computedStyle.border.match(/^([\d\.]+)px\s*(\w+)\s*(.*)$/);
              if (parsed) {
                // @ts-ignore
                let [_, width, type, color] = parsed;
                if (width && width !== "0" && type !== "none" && color) {
                  const rgb = getRgb(color);
                  if (rgb) {
                    rectNode.strokes = [
                      {
                        type: "SOLID",
                        color: { r: rgb.r, b: rgb.b, g: rgb.g },
                        opacity: rgb.a || 1
                      }
                    ];
                    rectNode.strokeWeight = Math.round(parseFloat(width));
                  }
                }
              }
            }
            if (!rectNode.strokes) {
              const directions = ["top", "left", "right", "bottom"];
              for (const dir of directions) {
                const computed = computedStyle[("border" + capitalize(dir))];
                if (computed) {
                  const parsed = computed.match(/^([\d\.]+)px\s*(\w+)\s*(.*)$/);
                  if (parsed) {
                    // @ts-ignore
                    let [_match, borderWidth, type, color] = parsed;
                    if (borderWidth &&
                      borderWidth !== "0" &&
                      type !== "none" &&
                      color) {
                      const rgb = getRgb(color);
                      if (rgb) {
                        const width = ["top", "bottom"].includes(dir)
                          ? rect.width
                          : parseFloat(borderWidth);
                        const height = ["left", "right"].includes(dir)
                          ? rect.height
                          : parseFloat(borderWidth);
                        layers.push({
                          ref: el,
                          type: "RECTANGLE",
                          x: dir === "left"
                            ? rect.left - width
                            : dir === "right"
                              ? rect.right
                              : rect.left,
                          y: dir === "top"
                            ? rect.top - height
                            : dir === "bottom"
                              ? rect.bottom
                              : rect.top,
                          width,
                          height,
                          fills: [
                            {
                              type: "SOLID",
                              color: { r: rgb.r, b: rgb.b, g: rgb.g },
                              opacity: rgb.a || 1
                            }
                          ]
                        });
                      }
                    }
                  }
                }
              }
            }
            if (computedStyle.backgroundImage && computedStyle.backgroundImage !== "none") {
              const urlMatch = computedStyle.backgroundImage.match(/url\(['"]?(.*?)['"]?\)/);
              const url = urlMatch && urlMatch[1];
              if (url) {
                fills.push({
                  url,
                  type: "IMAGE",
                  // TODO: backround size, position
                  scaleMode: computedStyle.backgroundSize === "contain" ? "FIT" : "FILL",
                  imageHash: null
                });
              }
            }
            if (el instanceof SVGSVGElement) {
              const url = `data:image/svg+xml,${encodeURIComponent(el.outerHTML.replace(/\s+/g, " "))}`;
              if (url) {
                fills.push({
                  url,
                  type: "IMAGE",
                  // TODO: object fit, position
                  scaleMode: "FILL",
                  imageHash: null
                });
              }
            }
            if (el instanceof HTMLImageElement) {
              const url = el.src;
              if (url) {
                fills.push({
                  url,
                  type: "IMAGE",
                  // TODO: object fit, position
                  scaleMode: computedStyle.objectFit === "contain" ? "FIT" : "FILL",
                  imageHash: null
                });
              }
            }
            if (el instanceof HTMLPictureElement) {
              const firstSource = el.querySelector("source");
              if (firstSource) {
                const src = getUrl(firstSource.srcset.split(/[,\s]+/g)[0]);
                // TODO: if not absolute
                if (src) {
                  fills.push({
                    url: src,
                    type: "IMAGE",
                    // TODO: object fit, position
                    scaleMode: computedStyle.objectFit === "contain" ? "FIT" : "FILL",
                    imageHash: null
                  });
                }
              }
            }
            if (el instanceof HTMLVideoElement) {
              const url = el.poster;
              if (url) {
                fills.push({
                  url,
                  type: "IMAGE",
                  // TODO: object fit, position
                  scaleMode: computedStyle.objectFit === "contain" ? "FIT" : "FILL",
                  imageHash: null
                });
              }
            }
            if (computedStyle.boxShadow && computedStyle.boxShadow !== "none") {
              const parsed = parseValue(computedStyle.boxShadow);
              const color = getRgb(parsed.color);
              if (color) {
                rectNode.effects = [
                  {
                    color,
                    type: "DROP_SHADOW",
                    radius: parsed.blurRadius,
                    blendMode: "NORMAL",
                    visible: true,
                    offset: {
                      x: parsed.offsetX,
                      y: parsed.offsetY
                    }
                  }
                ];
              }
            }
            const borderTopLeftRadius = parseUnits(computedStyle.borderTopLeftRadius);
            if (borderTopLeftRadius) {
              rectNode.topLeftRadius = borderTopLeftRadius.value;
            }
            const borderTopRightRadius = parseUnits(computedStyle.borderTopRightRadius);
            if (borderTopRightRadius) {
              rectNode.topRightRadius = borderTopRightRadius.value;
            }
            const borderBottomRightRadius = parseUnits(computedStyle.borderBottomRightRadius);
            if (borderBottomRightRadius) {
              rectNode.bottomRightRadius = borderBottomRightRadius.value;
            }
            const borderBottomLeftRadius = parseUnits(computedStyle.borderBottomLeftRadius);
            if (borderBottomLeftRadius) {
              rectNode.bottomLeftRadius = borderBottomLeftRadius.value;
            }
            layers.push(rectNode);
          }
        }
      });
    }
    const textNodes = textNodesUnder(el);
    const fastClone = (data) => JSON.parse(JSON.stringify(data));
    for (const node of textNodes) {
      if (node.textContent && node.textContent.trim().length) {
        // @ts-ignore
        const parent = node.assignedSlot ? node.assignedSlot.parentElement : node.parentElement;
        if (parent) {
          if (isHidden(parent)) {
            continue;
          }
          // @ts-ignore
          const computedStyles = getComputedStyle(parent);
          const range = document.createRange();
          range.selectNode(node);
          const rect = fastClone(range.getBoundingClientRect());
          const lineHeight = parseUnits(computedStyles.lineHeight);
          range.detach();
          if (lineHeight && rect.height < lineHeight.value) {
            const delta = lineHeight.value - rect.height;
            rect.top -= delta / 2;
            rect.height = lineHeight.value;
          }
          if (rect.height < 1 || rect.width < 1) {
            continue;
          }
          const textNode = {
            x: Math.round(rect.left),
            ref: node,
            y: Math.round(rect.top),
            width: Math.round(rect.width),
            height: Math.round(rect.height),
            type: "TEXT",
            characters: node.textContent.trim().replace(/\s+/g, " ") || ""
          };
          const fills = [];
          const rgb = getRgb(computedStyles.color);
          if (rgb) {
            fills.push({
              type: "SOLID",
              color: {
                r: rgb.r,
                g: rgb.g,
                b: rgb.b
              },
              opacity: rgb.a || 1
            });
          }
          if (fills.length) {
            textNode.fills = fills;
          }
          const letterSpacing = parseUnits(computedStyles.letterSpacing);
          if (letterSpacing) {
            textNode.letterSpacing = letterSpacing;
          }
          if (lineHeight) {
            textNode.lineHeight = lineHeight;
          }
          const { textTransform } = computedStyles;
          switch (textTransform) {
            case "uppercase": {
              textNode.textCase = "UPPER";
              break;
            }
            case "lowercase": {
              textNode.textCase = "LOWER";
              break;
            }
            case "capitalize": {
              textNode.textCase = "TITLE";
              break;
            }
          }
          const fontSize = parseUnits(computedStyles.fontSize);
          if (fontSize) {
            textNode.fontSize = Math.round(fontSize.value);
          }
          if (computedStyles.fontFamily) {
            // const font = computedStyles.fontFamily.split(/\s*,\s*/);
            textNode.fontFamily = computedStyles.fontFamily;
          }
          if (computedStyles.textDecoration) {
            if (computedStyles.textDecoration === "underline" ||
              computedStyles.textDecoration === "strikethrough") {
              textNode.textDecoration = computedStyles.textDecoration.toUpperCase();
            }
          }
          if (computedStyles.textAlign) {
            if (["left", "center", "right", "justified"].includes(computedStyles.textAlign)) {
              textNode.textAlignHorizontal = computedStyles.textAlign.toUpperCase();
            }
          }
          layers.push(textNode);
        }
      }
    }
  }
  const computedStyle = getComputedStyle(el);
  let backgrounds = [];
  const rgb = getRgb(computedStyle.backgroundColor);
  if (rgb) {
    delete rgb.a;
    backgrounds = [{
        type: "SOLID",
        color: rgb,
        visible: true,
        opacity: Number(computedStyle.opacity)
      }];
  }
  // TODO: send frame: { children: []}
  let root = {
    type: "FRAME",
    // @ts-ignore
    width: el ? Math.round(el.offsetWidth) : Math.round(window.innerWidth),
    // @ts-ignore
    height: el ? Math.round(el.offsetHeight) : Math.round(window.innerHeight),
    x: 0,
    y: 0,
    ref: el,
    backgrounds
  };
  layers.unshift(root);
  // TODO: arg can be passed in
  const MAKE_TREE = useFrames;
  let result;
  if (MAKE_TREE) {
    root.children = layers.slice(1);
    result = makeTree(root, layers);
    root = result.root;
    layers = result.layers;
    result = addConstraints(root, layers);
    root = result.root;
    layers = result.layers;
    result = removeRefs(root, layers);
    root = result.root;
    layers = result.layers;
    if (time) {
      console.info("\n");
      console.timeEnd("Parse dom");
    }
    return { "layers": [root] };
  }
  result = removeRefs(root, layers);
  root = result.root;
  layers = result.layers;
  if (time) {
    console.info("\n");
    console.timeEnd("Parse dom");
  }
  if (layers.length === 1 && layers[0].width === 0 && layers[0].height === 0) {
    return false;
  }
  return { "layers": layers };
};

let ExportToFigma$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.noKey = false;
  }
  componentWillLoad() {
    if (!this.element) {
      // @ts-ignore
      this.element = this.el.parentNode && this.el.parentNode.constructor.name === 'ShadowRoot' ? this.el.parentNode.host : this.el.parentElement;
    }
  }
  handleSaveComponents(e) {
    if (!this.noKey) {
      if (e.key === 's' && e.shiftKey && e.metaKey && this.element.matches(':hover')) {
        e.preventDefault();
        this.get();
      }
    }
  }
  async export() {
    return await this.get();
  }
  async get() {
    const layers = await htmlToFigma(this.element);
    function download(exportObj, exportName) {
      var dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(exportObj));
      var downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute('href', dataStr);
      downloadAnchorNode.setAttribute('download', exportName + '.json');
      document.body.appendChild(downloadAnchorNode); // required for firefox
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    }
    if (layers) {
      download(layers, `${this.element.tagName.toLowerCase()}`);
    }
  }
  render() {
    return h(Host, { style: { display: 'none' } });
  }
  get el() { return this; }
};

const ExampleNoShadow = /*@__PURE__*/proxyCustomElement(NoShadow, [4,"example-no-shadow"]);
const ExampleWithShadow = /*@__PURE__*/proxyCustomElement(WithShadow, [1,"example-with-shadow"]);
const ExportToFigma = /*@__PURE__*/proxyCustomElement(ExportToFigma$1, [1,"export-to-figma",{"noKey":[4,"no-key"],"element":[1040]},[[8,"keydown","handleSaveComponents"]]]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      ExampleNoShadow,
  ExampleWithShadow,
  ExportToFigma
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { ExampleNoShadow, ExampleWithShadow, ExportToFigma, defineCustomElements };

//# sourceMappingURL=index.js.map