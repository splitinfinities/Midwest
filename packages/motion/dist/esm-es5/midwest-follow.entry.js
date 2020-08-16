import { r as registerInstance, h, g as getElement } from './index-1f198cf0.js';
import './_commonjsHelpers-4cfcaab1.js';
import { p as properties } from './css-custom-properties.min-dc1a55f4.js';
var followCss = ":host,:host *,:host *::before,:host *::after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block}:host{--translate-y:calc(-50% + var(--top));--translate-x:calc(-50% + var(--left));position:fixed;top:0;left:0;z-index:20;-webkit-transform:translate3d(var(--translate-x), var(--translate-y), 0);transform:translate3d(var(--translate-x), var(--translate-y), 0);pointer-events:none;contain:content}";
var Follow = /** @class */ (function () {
    function Follow(hostRef) {
        registerInstance(this, hostRef);
        this.type = "cursor";
        this.distance = 0.5;
        this.padding = 40;
    }
    Follow.prototype.componentWillLoad = function () {
        this.update();
        properties.properties.set({ "--left": "50%", "--top": "-3000px" }, this.element);
    };
    Follow.prototype.componentDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.update();
        }, 200);
    };
    Object.defineProperty(Follow.prototype, "offset", {
        get: function () {
            return window.innerHeight * this.distance;
        },
        enumerable: false,
        configurable: true
    });
    Follow.prototype.update = function () {
        if (this.type === "scroll") {
            this.attachScroll();
        }
        else if (this.type === "cursor") {
            this.attachCursor();
        }
    };
    Follow.prototype.attachScroll = function () {
        var _this = this;
        properties.properties.set({ "--top": window.pageYOffset + this.offset + "px" }, this.element);
        // @ts-ignore
        window.addEventListener("scroll", function () {
            properties.properties.set({ "--top": window.pageYOffset + _this.offset + "px" }, _this.element);
        }, { passive: true });
    };
    Follow.prototype.attachCursor = function () {
        var _this = this;
        // @ts-ignore
        window.addEventListener("mousemove", function (e) {
            properties.properties.set({ "--top": e.clientY + "px" }, _this.element);
            properties.properties.set({ "--left": _this.minmaxx(e.clientX) + "px" }, _this.element);
        }, { passive: true });
        window.addEventListener("deviceorientation", function (e) {
            var z = Math.abs(e.alpha);
            var value = z / 360;
            var percentage = value * 100;
            properties.properties.set({ "--left": _this.minmaxx(percentage) + "px" }, _this.element);
        }, true);
    };
    Follow.prototype.minmaxx = function (x) {
        var left = (this.padding + (this.element.offsetWidth / 2));
        var right = (window.innerWidth - left);
        if (x <= left) {
            x = left;
        }
        else if (x >= right) {
            x = right;
        }
        return x;
    };
    Follow.prototype.render = function () {
        return h("slot", null);
    };
    Object.defineProperty(Follow.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Follow, "watchers", {
        get: function () {
            return {
                "type": ["update"],
                "distance": ["update"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return Follow;
}());
Follow.style = followCss;
export { Follow as midwest_follow };
