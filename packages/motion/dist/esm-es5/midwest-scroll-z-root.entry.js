var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, h, g as getElement } from './index-1f198cf0.js';
import './_commonjsHelpers-4cfcaab1.js';
import { p as properties } from './css-custom-properties.min-dc1a55f4.js';
var scrollZRootCss = ":host,:host *,:host *::before,:host *::after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block}:host{contain:content;height:calc(var(--sectionHeight) * 1px);display:block;opacity:calc(var(--cameraZ) + 1);will-change:opacity;-webkit-transition:opacity 200ms ease 0s;transition:opacity 200ms ease 0s}:host .container{position:fixed;top:0;left:0;width:100%;height:100%;-webkit-perspective:calc(var(--scenePerspective) * var(--cameraSpeed) * 1px);perspective:calc(var(--scenePerspective) * var(--cameraSpeed) * 1px);-webkit-perspective-origin:calc(var(--scenePerspectiveOriginX) * 1%) calc(var(--scenePerspectiveOriginY) * 1%);perspective-origin:calc(var(--scenePerspectiveOriginX) * 1%) calc(var(--scenePerspectiveOriginY) * 1%);will-change:perspective-origin;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}:host .scene{position:absolute;top:0;height:100vh;width:100%;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:translateZ(calc(var(--cameraZ) * 1px));transform:translateZ(calc(var(--cameraZ) * 1px));will-change:transform}:host ::slotted(midwest-scroll-z-section){position:absolute;display:block;width:100%;top:40%;z-index:2}@media only screen and (min-width: 600px){:host ::slotted(midwest-scroll-z-section){width:45%}}";
var ScrollZRoot = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.initialOriginX = 50;
        this.initialOriginY = 30;
        this.itemZ = 10;
        this.cameraSpeed = 150;
        this.cameraZ = -1;
        this.scenePerspective = 1;
        this.distanceFromTop = 0;
        this.distanceFromBottom = 0;
        this.perspectiveOrigin = { x: 0, y: 0, maxGap: 10 };
    }
    class_1.prototype.randomFloat = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    class_1.prototype.componentWillLoad = function () {
        this.distanceFromTop = this.element.getBoundingClientRect().top;
        this.distanceFromBottom = this.element.getBoundingClientRect().bottom;
        this.prepare();
    };
    class_1.prototype.prepare = function () {
        this.sections = Array.from(this.element.querySelectorAll('midwest-scroll-z-section'));
        properties.properties.set({
            '--scenePerspective': this.scenePerspective,
            '--scenePerspectiveOriginX': this.initialOriginX,
            '--scenePerspectiveOriginY': this.initialOriginY,
            '--itemZ': this.itemZ,
            '--cameraSpeed': this.cameraSpeed,
            '--cameraZ': this.cameraZ,
            '--sectionHeight': 0
        }, document.documentElement);
        this.perspectiveOrigin = {
            x: parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--scenePerspectiveOriginX")),
            y: parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--scenePerspectiveOriginY")),
            maxGap: 10
        };
        this.setSceneHeight();
        this.scatter();
    };
    class_1.prototype.scatter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.sections.forEach(function (section, index) {
                    var x = "calc(" + _this.randomFloat(-30, 30) + "rem + 50%)";
                    var y = "calc(" + _this.randomFloat(-30, 30) + "rem + 50%)";
                    var z = "calc(var(--itemZ) * var(--cameraSpeed) * " + index + " * -1px)";
                    section.style.setProperty('transform', "translate3D(" + x + ", " + y + ", " + z + ")");
                });
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.setSceneHeight = function () {
        var numberOfItems = this.sections.length;
        var itemZ = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--itemZ"));
        var scenePerspective = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--scenePerspective"));
        var cameraSpeed = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--cameraSpeed"));
        var height = window.innerHeight +
            scenePerspective * cameraSpeed +
            (itemZ / 2) * cameraSpeed * numberOfItems;
        document.documentElement.style.setProperty("--sectionHeight", "" + height);
    };
    class_1.prototype.moveCamera = function () {
        this.distanceFromTop = this.element.getBoundingClientRect().top;
        this.distanceFromBottom = this.element.getBoundingClientRect().bottom;
        var offset = window.pageYOffset - this.distanceFromTop;
        if (offset >= 0) {
            document.documentElement.style.setProperty("--cameraZ", "" + offset);
        }
        else {
            document.documentElement.style.setProperty("--cameraZ", "-1");
        }
    };
    class_1.prototype.moveCameraAngle = function (event) {
        var xGap = (((event.clientX - window.innerWidth / 2) * 100) / (window.innerWidth / 2)) * -1;
        var yGap = (((event.clientY - window.innerHeight / 2) * 100) / (window.innerHeight / 2)) * -1;
        var newPerspectiveOriginX = this.perspectiveOrigin.x + (xGap * this.perspectiveOrigin.maxGap) / 100;
        var newPerspectiveOriginY = this.perspectiveOrigin.y + (yGap * this.perspectiveOrigin.maxGap) / 100;
        document.documentElement.style.setProperty("--scenePerspectiveOriginX", "" + newPerspectiveOriginX);
        document.documentElement.style.setProperty("--scenePerspectiveOriginY", "" + newPerspectiveOriginY);
    };
    class_1.prototype.render = function () {
        return h("div", { class: "container" }, h("div", { class: "scene" }, h("slot", null)));
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return class_1;
}());
ScrollZRoot.style = scrollZRootCss;
export { ScrollZRoot as midwest_scroll_z_root };
