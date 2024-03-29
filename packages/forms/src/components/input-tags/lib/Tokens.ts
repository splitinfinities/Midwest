// @ts-nocheck
// tslint:disable
export let Tokens =
/******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	const installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
        /******/
      }
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
        /******/
      };
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
      /******/
    }
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
      /******/
    });
        /******/
      }
      /******/
    };
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		const getter = module && module.__esModule ?
/******/ 			function getDefault() { return module.default; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
      /******/
    };
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
    /******/
  })
/************************************************************************/
/******/([
/* 0 */
/***/ (function (module, _, __webpack_require__) {

      module.exports = __webpack_require__(1).default;


      /***/
    }),
/* 1 */
/***/ (function (_, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      const _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

      const _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

      const _createClass = function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps?) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

      const _events = __webpack_require__(2);

      const _events2 = _interopRequireDefault(_events);

      const _ajax = __webpack_require__(3);

      const _ajax2 = _interopRequireDefault(_ajax);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (let i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

      function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

      function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

      function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Input field with tagging/token/chip capabilities written in raw JavaScript
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * tokenfield 1.3.0 <https://github.com/KaneCohen/tokenfield>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 Kane Cohen <https://github.com/KaneCohen>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Available under BSD-3-Clause license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


      const _tokenfields = {};

      const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      const reHasRegExpChar = RegExp(reRegExpChar.source);

      const _factory = document.createElement('div');

      const _templates = {
        containerTokenfield: '<div class="tokenfield tokenfield-mode-tokens">\n      <input class="tokenfield-copy-helper"\n        style="display:none;position:fixed;top:-1000px;right:1000px;"\n        tabindex="-1"\n        type="text"\n      />\n      <div class="tokenfield-set">\n        <ul></ul>\n      </div>\n      <input class="tokenfield-input" />\n      <div class="tokenfield-suggest">\n        <ul class="tokenfield-suggest-list"></ul>\n      </div>\n    </div>',
        containerList: '<div class="tokenfield tokenfield-mode-list">\n      <input class="tokenfield-input" />\n      <div class="tokenfield-suggest">\n        <ul class="tokenfield-suggest-list"></ul>\n      </div>\n      <div class="tokenfield-set">\n        <ul></ul>\n      </div>\n    </div>',
        suggestItem: '<li class="tokenfield-suggest-item"></li>',
        setItem: '<li class="tokenfield-set-item">\n      <span class="item-label"></span>\n      <a href="#" class="item-remove" tabindex="-1">\xD7</a>\n      <input class="item-input" type="hidden" />\n    </li>'
      };

      function guid() {
        return ((1 + Math.random()) * 0x10000 | 0).toString(16) + ((1 + Math.random()) * 0x10000 | 0).toString(16);
      }

      function includes(arr, item) {
        return arr.indexOf(item) >= 0;
      }

      function getPath(node) {
        const nodes: any[] = [node];
        while (node.parentNode) {
          node = node.parentNode;
          nodes.push(node);
        }
        return nodes;
      }

      function findElement(input) {
        if (input.nodeName) {
          return input;
        } else if (typeof input === 'string') {
          return document.querySelector(input);
        }
        return null;
      }

      function build(html, all?) {
        if (html.nodeName) return html;
        html = html.replace(/(\t|\n$)/g, '');

        _factory.innerHTML = '';
        _factory.innerHTML = html;
        if (all === true) {
          return _factory.childNodes;
        } else {
          return _factory.childNodes[0];
        }
      }

      function toString(value) {
        if (typeof value == 'string') {
          return value;
        }
        if (value === null) {
          return '';
        }
        const result = value + '';
        return result === '0' && 1 / value === -Infinity ? '-0' : result;
      }

      function keyToChar(e) {
        if (e.key || e.keyIdentifier) {
          return e.key || String.fromCharCode(parseInt(e.keyIdentifier.substr(2), 16));
        }
        return null;
      }

      function escapeRegex(string) {
        string = toString(string);
        return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, '\\$&') : string;
      }

      function makeDefaultsAndOptions() {
        const _defaults = {
          focusedItem: null,
          cache: {},
          timer: null,
          xhr: null,
          suggested: false,
          suggestedItems: [],
          setItems: [],
          events: {},
          delimiters: {}
        };

        const _options = {
          el: null,
          form: true, // Listens to reset event on the specifiedform. If set to true listens to
          // immediate parent form. Also accepts selectors or elements.
          mode: 'tokenfield', // Display mode: tokenfield or list.
          addItemOnBlur: false, // Add token if input field loses focus.
          addItemsOnPaste: false, // Add tokens using `delimiters` option below to tokenize given string.
          keepItemsOrder: true, // Items and New Items values will be set in input with a specific position
          // in the list so that you can retreive correct position on the backend.
          setItems: [], // List of set items.
          items: [], // List of available items to work with.
          // Example: [{id: 143, value: 'Hello World'}, {id: 144, value: 'Foo Bar'}].
          newItems: true, // Allow input (on delimiter key) of new items.
          multiple: true, // Accept multiple items.
          maxItems: 0, // Set maximum allowed number of items.
          minLength: 0, // Minimum length of the string to be converted into token.
          keys: { // Various action keys.
            17: 'ctrl',
            16: 'shift',
            91: 'meta',
            8: 'delete', // Backspace
            27: 'esc',
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down',
            46: 'delete',
            65: 'select', // A
            67: 'copy', // C
            88: 'cut', // X
            13: 'delimiter', // Enter
            108: 'delimiter' // Numpad Enter
          },
          matchRegex: '{value}', // Match regex where {value} would be replaced by ecaped user input.
          matchFlags: 'i', // Flags used in regex matching.
          matchStart: false, // Set match regex to test from the beginning of the string.
          matchEnd: false, // Set match regex to test from the end of the string.
          delimiters: [], // Array of strings which act as delimiters during tokenization.
          copyProperty: 'name', // Property of the token used for copy event.
          copyDelimiter: ', ', // Delimiter used to populate clipboard with selected tokens.
          remote: {
            type: 'GET', // Ajax request type.
            url: null, // Full server url.
            queryParam: 'q', // What param to use when asking server for data.
            delay: 300, // Dealy between last keydown event and ajax request for data.
            timestampParam: 't',
            params: {},
            headers: {}
          },
          placeholder: null, // Hardcoded placeholder text. If not set, will use placeholder from the element itself.
          inputType: 'text', // HTML attribute for the input element which lets mobile browsers use various input modes.
          // Accepts text, email, url, and others.
          minChars: 2, // Number of characters before we start to look for similar items.
          maxSuggest: 10, // Max items in the suggest box.
          maxSuggestWindow: 10, // Limit height of the suggest box after given number of items.
          filterSetItems: true, // Filters already set items from the suggestions list.
          filterMatchCase: false, // Sets case-sensitivity for checking whether new item is already set in the list.

          singleInput: false, // Pushes all token values into a single. Accepts: true, 'selector', or an element.
          // When set to true - would use tokenfield target element as an input to fill.
          singleInputValue: 'id', // Which property of the item to use when using fillInput.
          singleInputDelimiter: ', ',

          itemLabel: 'name', // Property to use in order to render item label.
          itemName: 'items', // If set, for each tag/token there will be added
          // input field with array property name:
          // name="items[]".

          newItemName: 'items_new', // Suffix that will be added to the new tag in
          // case it was not available from the server:
          // name="items_new[]".

          itemValue: 'id', // Value that will be taken out of the results and inserted into itemAttr.
          newItemValue: 'name', // Value that will be taken out of the results and inserted into itemAttr.
          itemData: 'name' // Which property to search for.
        };
        return { _defaults, _options };
      }

      const Tokenfield = function (_EventEmitter) {
        _inherits(Tokenfield, _EventEmitter);

        function Tokenfield() {
          const options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          _classCallCheck(this, Tokenfield);

          // @ts-ignore
          const _this = _possibleConstructorReturn(this, (Tokenfield.__proto__ || Object.getPrototypeOf(Tokenfield)).call(this));

          const _makeDefaultsAndOptio = makeDefaultsAndOptions(),
            _defaults = _makeDefaultsAndOptio._defaults,
            _options = _makeDefaultsAndOptio._options;

          _this.id = guid();
          _this.key = 'key_' + _this.id;
          _this._vars = _extends({}, _defaults);
          _this._options = _extends({}, _options, options);
          _this._options.keys = _extends({}, _options.keys, options.keys);
          _this._options.remote = _extends({}, _options.remote, options.remote);
          _this._templates = _extends({}, _templates, options.templates);
          _this._vars.setItems = _this._prepareData(_this.remapData(_this._options.setItems || []));
          _this._focused = false;
          _this._input = null;
          _this._form = false;
          _this._html = {};

          const o = _this._options;

          // Make a hash map to simplify filtering later.
          o.delimiters.forEach(function (delimiter) {
            _this._vars.delimiters[delimiter] = true;
          });

          const el = findElement(o.el);
          if (el) {
            _this.el = el;
          } else {
            throw new Error('Selector: DOM Element ' + o.el + ' not found.');
          }

          if (o.singleInput) {
            const _el = findElement(o.singleInput);
            if (_el) {
              _this._input = _el;
            } else {
              _this._input = _this.el;
            }
          }

          _this.el.tokenfield = _this;

          if (o.placeholder === null) {
            o.placeholder = o.el.placeholder || '';
          }

          if (o.form) {
            let form = false;
            if (o.form.nodeName) {
              form = o.form;
            } else if (o.form === true) {
              let node = _this.el;
              while (node.parentNode) {
                if (node.nodeName === 'FORM') {
                  form = node;
                  break;
                }
                node = node.parentNode;
              }
            } else if (typeof form == 'string') {
              form = document.querySelector(form);
              if (!form) {
                throw new Error('Selector: DOM Element ' + o.form + ' not found.');
              }
            }
            _this._form = form;
          } else {
            throw new Error('Cannot create tokenfield without DOM Element.');
          }

          _tokenfields[_this.id] = _this;

          _this._render();
          return _this;
        }

        _createClass(Tokenfield, [{
          key: '_render',
          value: function _render() {
            const o = this._options;
            const html = this._html;

            if (o.mode === 'tokenfield') {
              html.container = build(this._templates.containerTokenfield);
            } else {
              html.container = build(this._templates.containerList);
            }
            html.suggest = html.container.querySelector('.tokenfield-suggest');
            html.suggestList = html.container.querySelector('.tokenfield-suggest-list');
            html.items = html.container.querySelector('.tokenfield-set > ul');
            html.input = html.container.querySelector('.tokenfield-input');
            html.input.setAttribute('type', o.inputType);
            html.input.placeholder = this._vars.setItems.length ? '' : o.placeholder;
            html.copyHelper = html.container.querySelector('.tokenfield-copy-helper');

            o.el.style.display = 'none';
            html.suggest.style.display = 'none';
            this._renderSizer();

            // Set tokenfield in DOM.
            html.container.tokenfield = this;
            o.el.parentElement.insertBefore(html.container, o.el);
            html.container.insertBefore(o.el, html.container.firstChild);

            this._setEvents();
            this._renderItems();
            if (o.mode === 'tokenfield') {
              this._resizeInput();
            }

            return this;
          }
        }, {
          key: '_renderSizer',
          value: function _renderSizer() {
            const html = this._html;
            const b = this._getBounds();
            const style = window.getComputedStyle(html.container);
            const compensate = parseInt(style.paddingLeft, 10) + parseInt(style.paddingRight, 10);

            const styles = {
              width: 'auto',
              height: 'auto',
              overflow: 'hidden',
              whiteSpace: 'pre',
              maxWidth: b.width - compensate + 'px',
              position: 'fixed',
              top: -10000 + 'px',
              left: 10000 + 'px',
              fontSize: style.fontSize,
              paddingLeft: style.paddingLeft,
              paddingRight: style.paddingRight
            };

            html.sizer = document.createElement('div');
            html.sizer.id = 'tokenfield-sizer';
            for (const key in styles) {
              html.sizer.style[key] = styles[key];
            }
            html.container.appendChild(html.sizer);
          }
        }, {
          key: '_refreshInput',
          value: function _refreshInput() {
            const empty = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            const v = this._vars;
            const html = this._html;

            if (empty) html.input.value = '';

            if (this._options.mode === 'tokenfield') {
              this._resizeInput();
              const placeholder = v.setItems.length ? '' : this._options.placeholder;
              html.input.setAttribute('placeholder', placeholder);
            }
            return this;
          }
        }, {
          key: '_resizeInput',
          value: function _resizeInput() {
            const val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            const html = this._html;
            const b = this._getBounds();
            const style = window.getComputedStyle(html.container);
            const compensate = parseInt(style.paddingRight, 10) + parseInt(style.borderRightWidth, 10);

            const fullCompensate = compensate + parseInt(style.paddingLeft, 10) + parseInt(style.borderLeftWidth, 10);

            html.sizer.innerHTML = val;
            html.sizer.style.maxWidth = b.width - compensate + 'px';

            if (b.width === 0) {
              html.input.style.width = '100%';
              return;
            } else {
              html.input.style.width = '20px';
            }

            const sb = html.sizer.getBoundingClientRect();
            const ib = html.input.getBoundingClientRect();
            const rw = b.width - (ib.left - b.left) - compensate;

            if (sb.width > rw) {
              html.input.style.width = b.width - fullCompensate + 'px';
            } else {
              html.input.style.width = rw + 'px';
            }
          }
        }, {
          key: '_fetchData',
          value: function _fetchData(val) {
            const _this2 = this;

            const v = this._vars;
            const o = this._options;
            const r = o.remote;
            const reqData = _extends({}, o.params);

            for (const key in r.params) {
              reqData[key] = r.params[key];
            }

            if (r.limit) {
              reqData[r.limit] = o.remote.limit;
            }

            reqData[r.queryParam] = val;
            reqData[r.timestampParam] = Math.round(new Date().getTime() / 1000);

            v.xhr = (_ajax2.default)(reqData, o.remote, function () {
              if (v.xhr && v.xhr.readyState == 4) {
                if (v.xhr.status == 200) {
                  const response = JSON.parse(v.xhr.responseText);
                  v.cache[val] = response;
                  const data = _this2._prepareData(_this2.remapData(response));
                  const items = _this2._filterData(val, data);
                  v.suggestedItems = o.filterSetItems ? _this2._filterSetItems(items) : items;
                  _this2.showSuggestions();
                } else if (v.xhr.status > 0) {
                  throw new Error('Error while loading remote data.');
                }
                _this2._abortXhr();
              }
            });
          }

          // Overwriteable method where you can change given data to appropriate format.

        }, {
          key: 'remapData',
          value: function remapData(data) {
            return data;
          }
        }, {
          key: '_prepareData',
          value: function _prepareData(data) {
            const _this3 = this;

            return data.map(function (item) {
              return _extends({}, item, _defineProperty({}, _this3.key, guid()));
            });
          }
        }, {
          key: '_filterData',
          value: function _filterData(val, data) {
            const o = this._options;
            let regex = o.matchRegex.replace('{value}', escapeRegex(val));
            if (o.matchStart) {
              regex = '^' + regex;
            } else if (o.matchEnd) {
              regex = regex + '$';
            }
            const pattern = new RegExp(regex, o.matchFlags);
            return data.filter(function (item) {
              return pattern.test(item[o.itemData]);
            });
          }
        }, {
          key: '_abortXhr',
          value: function _abortXhr() {
            const v = this._vars;
            if (v.xhr !== null) {
              v.xhr.abort();
              v.xhr = null;
            }
          }
        }, {
          key: '_filterSetItems',
          value: function _filterSetItems(items) {
            const key = this._options.itemValue;
            const v = this._vars;
            if (!v.setItems.length) return items;

            const setKeys = v.setItems.map(function (item) {
              return item[key];
            });

            return items.filter(function (item) {
              if (setKeys.indexOf(item[key]) === -1) {
                return true;
              }
              return false;
            });
          }
        }, {
          key: '_setEvents',
          value: function _setEvents() {
            const v = this._vars;
            const html = this._html;
            v.events.onClick = this._onClick.bind(this);
            v.events.onMouseDown = this._onMouseDown.bind(this);
            v.events.onMouseOver = this._onMouseOver.bind(this);
            v.events.onFocus = this._onFocus.bind(this);
            v.events.onResize = this._onResize.bind(this);
            v.events.onReset = this._onReset.bind(this);
            v.events.onKeyDown = this._onKeyDown.bind(this);
            v.events.onFocusOut = this._onFocusOut.bind(this);

            html.container.addEventListener('click', v.events.onClick);


            // Attach document event only once.
            if (Object.keys(_tokenfields).length === 1) {
              document.addEventListener('mousedown', v.events.onMouseDown);
              window.addEventListener('resize', v.events.onResize);
            }

            if (this._form && this._form.nodeName) {
              this._form.addEventListener('reset', v.events.onReset);
            }

            html.suggestList.addEventListener('mouseover', v.events.onMouseOver);
            html.input.addEventListener('focus', v.events.onFocus);
          }
        }, {
          key: '_onMouseOver',
          value: function _onMouseOver(e) {
            const target = e.target;
            if (target.classList.contains('tokenfield-suggest-item')) {
              const selected = [].slice.call(this._html.suggestList.querySelectorAll('.selected'));
              selected.forEach(function (item) {
                if (item !== target) item.classList.remove('selected');
              });
              target.classList.add('selected');
              this._selectItem(target.key, false);
              this._refreshItemsSelection();
            }
          }
        }, {
          key: '_onReset',
          value: function _onReset() {
            this.setItems(this._options.setItems);
          }
        }, {
          key: '_onFocus',
          value: function _onFocus() {
            const v = this._vars;
            const html = this._html;
            const o = this._options;

            html.input.removeEventListener('keydown', v.events.onKeyDown);
            html.input.addEventListener('keydown', v.events.onKeyDown);
            html.input.addEventListener('focusout', v.events.onFocusOut);

            if (o.addItemsOnPaste) {
              v.events.onPaste = this._onPaste.bind(this);
              html.input.addEventListener('paste', v.events.onPaste);
            }

            this._focused = true;
            this._html.container.classList.add('focused');
            this._resizeInput();

            if (html.input.value.trim().length >= o.minChars) {
              this.showSuggestions();
            }
          }
        }, {
          key: '_onFocusOut',
          value: function _onFocusOut(e) {
            const v = this._vars;
            const o = this._options;
            const html = this._html;
            html.input.removeEventListener('keydown', v.events.onKeyDown);
            html.input.removeEventListener('focusout', v.events.onFocusOut);

            if (typeof v.events.onPaste !== 'undefined') {
              html.input.removeEventListener('paste', v.events.onPaste);
            }

            if (e.relatedTarget && e.relatedTarget === html.copyHelper) {
              return;
            }

            const canAddItem = o.multiple && !o.maxItems || !o.multiple && !v.setItems.length || o.multiple && o.maxItems && v.setItems.length < o.maxItems;

            if (this._focused && o.addItemOnBlur && canAddItem && this._newItem(html.input.value)) {
              this._renderItems()._refreshInput();
            } else {
              this._defocusItems()._renderItems();
            }

            this._focused = false;
            this._html.container.classList.remove('focused');
          }
        }, {
          key: '_onMouseDown',
          value: function _onMouseDown(e) {
            // Added to make sure we aren't losing focus when 
            // selecting a sub element
            if(e.target.shadowRoot && e.target.shadowRoot.contains(this.el)) {
              e.preventDefault();
              return;
            }

            let tokenfield = null;
            for (const key in _tokenfields) {
              if (_tokenfields[key]._html.container.contains(e.target)) {
                tokenfield = _tokenfields[key];
                break;
              }
            }

            if (tokenfield) {
              for (const _key in _tokenfields) {
                if (_key !== tokenfield.id) {
                  _tokenfields[_key].hideSuggestions();
                  _tokenfields[_key].blur();
                }
              }

              // Prevent input blur.
              if (e.target !== tokenfield._html.input) {
                e.preventDefault();
              }
            } else {
              for (const _key2 in _tokenfields) {
                _tokenfields[_key2].hideSuggestions();
                _tokenfields[_key2].blur();
              }
            }
          }
        }, {
          key: '_onResize',
          value: function _onResize() {
            for (const key in _tokenfields) {
              _tokenfields[key]._resizeInput(_tokenfields[key]._html.input.value);
            }
          }
        }, {
          key: '_onPaste',
          value: function _onPaste(e) {
            const _this4 = this;

            const v = this._vars;
            const o = this._options;
            const val = e.clipboardData.getData('text');
            let tokens: any[] = [val];

            // Break input using delimiters option.
            if (o.delimiters.length) {
              const search = o.delimiters.join('|');
              const splitRegex = new RegExp('(' + search + ')', 'ig');
              tokens = val.split(splitRegex);
            }

            const items = tokens.map(function (token) {
              return token.trim();
            }).filter(function (token) {
              return token.length > 0 && token.length >= o.minLength && typeof v.delimiters[token] === 'undefined';
            }).map(function (token) {
              return _this4._newItem(token);
            });

            if (items.length) {
              setTimeout(function () {
                _this4._renderItems()._refreshInput()._deselectItems().hideSuggestions();
              }, 1);

              e.preventDefault();
            }
          }
        }, {
          key: '_onKeyDown',
          value: function _onKeyDown(e) {
            const _this5 = this;

            const v = this._vars;
            const o = this._options;
            const html = this._html;

            if (o.maxItems && v.setItems.length >= o.maxItems) {
              e.preventDefault();
            }

            if (o.mode === 'tokenfield') {
              setTimeout(function () {
                _this5._resizeInput(html.input.value);
              }, 1);
            }

            const key = keyToChar(e);
            if (typeof o.keys[e.keyCode] !== 'undefined' || includes(o.delimiters, key)) {
              if (this._keyAction(e)) return true;
            } else {
              this._defocusItems()._refreshItems();
            }

            clearTimeout(v.timer);
            this._abortXhr();

            if (!o.maxItems || v.setItems.length < o.maxItems) {
              setTimeout(function () {
                _this5._keyInput(e);
              }, 1);
            }

            return true;
          }
        }, {
          key: '_keyAction',
          value: function _keyAction(e) {
            const _this6 = this;

            let item = null;
            const v = this._vars;
            const o = this._options;
            const html = this._html;
            let keyName = o.keys[e.keyCode];
            let val = html.input.value.trim();
            const keyChar = keyToChar(e);

            if (includes(o.delimiters, keyChar) && typeof keyName === 'undefined') {
              keyName = 'delimiter';
            }

            const selected = this._getSelectedItems();
            if (selected.length) {
              item = selected[0];
            }

            switch (keyName) {
              case 'esc':
                this._deselectItems()._defocusItems()._renderItems().hideSuggestions();
                break;
              case 'up':
                if (this._vars.suggested) {
                  this._selectPrevItem()._refreshItemsSelection();
                  e.preventDefault();
                }
                this._defocusItems()._renderItems();
                break;
              case 'down':
                if (this._vars.suggested) {
                  this._selectNextItem()._refreshItemsSelection();
                  e.preventDefault();
                }
                this._defocusItems()._renderItems();
                break;
              case 'left':
                if (this.getFocusedItems().length || !html.input.selectionStart && !html.input.selectionEnd) {
                  this._focusPrevItem(e.shiftKey);
                  e.preventDefault();
                }
                break;
              case 'right':
                if (this.getFocusedItems().length || html.input.selectionStart === val.length) {
                  this._focusNextItem(e.shiftKey);
                  e.preventDefault();
                }
                break;
              case 'delimiter':
                this._abortXhr();
                this._defocusItems();

                if (!o.multiple && v.setItems.length >= 1) {
                  return false;
                }

                val = this.onInput(val, e);
                if (item) {
                  this._addItem(item);
                } else if (val.length) {
                  item = this._newItem(val);
                }

                if (item) {
                  this._renderItems().focus()._refreshInput()._refreshSuggestions()._deselectItems();
                }
                e.preventDefault();
                break;
              case 'select':
                if (!val.length && (e.ctrlKey || e.metaKey)) {
                  this._vars.setItems.forEach(function (item) {
                    item.focused = true;
                  });
                  this._refreshItems();
                } else {
                  return false;
                }
                break;
              case 'cut':
                {
                  const focusedItems = this.getFocusedItems();
                  if (focusedItems.length && (e.ctrlKey || e.metaKey)) {
                    this._copy()._delete(e);
                  } else {
                    return false;
                  }
                  break;
                }
              case 'copy':
                {
                  const _focusedItems = this.getFocusedItems();
                  if (_focusedItems.length && (e.ctrlKey || e.metaKey)) {
                    this._copy();
                  } else {
                    return false;
                  }
                  break;
                }
              case 'delete':
                {
                  this._abortXhr();
                  const _focusedItems2 = this.getFocusedItems();
                  if (!html.input.selectionEnd && e.keyCode === 8 || html.input.selectionStart === val.length && e.keyCode === 46 || _focusedItems2.length) {
                    this._delete(e);
                  } else {
                    v.timer = setTimeout(function () {
                      _this6._keyInput(e);
                    }, o.delay);
                  }
                  break;
                }
              default:
                break;
            }

            return true;
          }
        }, {
          key: '_copy',
          value: function _copy() {
            const o = this._options;
            const html = this._html;
            const copyString = this.getFocusedItems().map(function (item) {
              return item[o.copyProperty];
            }).join(o.copyDelimiter);

            html.copyHelper.style.display = 'block';
            html.copyHelper.value = copyString;
            html.copyHelper.focus();
            html.copyHelper.select();
            document.execCommand('copy');
            html.copyHelper.style.display = 'none';
            html.copyHelper.value = '';
            html.input.focus();

            return this;
          }
        }, {
          key: '_delete',
          value: function _delete(e) {
            const _this7 = this;

            const v = this._vars;
            const o = this._options;
            const key = this.key;
            const html = this._html;
            const focusedItems = this.getFocusedItems();

            if (o.mode === 'tokenfield' && v.setItems.length) {
              if (focusedItems.length) {
                focusedItems.forEach(function (item) {
                  _this7._removeItem(item[key]);
                });
                this._refreshSuggestions()._keyInput(e);
              } else if (!html.input.selectionStart) {
                this._focusItem(v.setItems[v.setItems.length - 1][key]);
              }
            } else if (focusedItems.length) {
              focusedItems.forEach(function (item) {
                _this7._removeItem(item[key]);
              });
              this._refreshSuggestions()._keyInput(e);
            }
            this._renderItems()._refreshInput(false);

            return this;
          }
        }, {
          key: '_keyInput',
          value: function _keyInput(e) {
            const _this8 = this;

            const v = this._vars;
            const o = this._options;
            const html = this._html;

            this._defocusItems()._refreshItems();

            const val = this.onInput(html.input.value.trim(), e);

            if (e.type === 'keydown') {
              this.emit('input', this, val, e);
            }

            if (val.length < o.minChars) {
              this.hideSuggestions();
              return false;
            }

            if (!o.multiple && v.setItems.length >= 1) {
              return false;
            }

            // Check if we have cache with this val.
            if (typeof v.cache[val] === 'undefined') {
              // Get new data.
              if (o.remote.url) {
                v.timer = setTimeout(function () {
                  _this8._fetchData(val);
                }, o.delay);
              } else if (!o.remote.url && o.items.length) {
                const data = this._prepareData(o.items);
                const items = this._filterData(val, data);
                v.suggestedItems = o.filterSetItems ? this._filterSetItems(items) : items;
                this.showSuggestions();
              }
            } else {
              // Work with cached data.
              const _data = this._prepareData(this.remapData(v.cache[val]));
              const _items = this._filterData(val, _data);
              v.suggestedItems = o.filterSetItems ? this._filterSetItems(_items) : _items;
              this.showSuggestions();
            }

            return this;
          }
        }, {
          key: '_onClick',
          value: function _onClick(e) {
            const target = e.target;

            if (target.classList.contains('item-remove')) {
              e.preventDefault();

              this._removeItem(target.key)._defocusItems()._renderItems()._refreshInput(false)._keyInput(e);
            } else if (target.classList.contains('tokenfield-suggest-item')) {
              const item = this._getSuggestedItem(target.key);
              this._addItem(item)._renderItems()._refreshInput()._refreshSuggestions();
            } else {
              const setItem = getPath(target).filter(function (node) {
                return node.classList && node.classList.contains('tokenfield-set-item');
              })[0];

              if (setItem) {
                this._focusItem(setItem.key, e.shiftKey, e.ctrlKey || e.metaKey, true);
                this._refreshItems();
              } else {
                this._keyInput(e);
              }
            }

            this.focus();
          }
        }, {
          key: '_selectPrevItem',
          value: function _selectPrevItem() {
            const key = this.key;
            const o = this._options;
            const items = this._vars.suggestedItems;
            const index = this._getSelectedItemIndex();

            if (!items.length) {
              return this;
            }

            if (index !== null) {
              if (index === 0) {
                if (o.newItems) {
                  this._deselectItems();
                } else {
                  this._selectItem(items[items.length - 1][key]);
                }
              } else {
                this._selectItem(items[index - 1][key]);
              }
            } else {
              this._selectItem(items[items.length - 1][key]);
            }

            return this;
          }
        }, {
          key: '_selectNextItem',
          value: function _selectNextItem() {
            const key = this.key;
            const o = this._options;
            const items = this._vars.suggestedItems;
            const index = this._getSelectedItemIndex();

            if (!items.length) {
              return this;
            }

            if (index !== null) {
              if (index === items.length - 1) {
                if (o.newItems) {
                  this._deselectItems();
                } else {
                  this._selectItem(items[0][key]);
                }
              } else {
                this._selectItem(items[index + 1][key]);
              }
            } else {
              this._selectItem(items[0][key]);
            }

            return this;
          }
        }, {
          key: '_focusPrevItem',
          value: function _focusPrevItem() {
            const multiple = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            const key = this.key;
            const items = this._vars.setItems;
            const index = this._getFocusedItemIndex();

            if (!items.length) {
              return this;
            }

            if (index !== null) {
              if (index === 0 && !multiple) {
                this._defocusItems();
              } else if (index === 0 && multiple) {
                const lastFocused = this._getFocusedItemIndex(true);
                this._defocusItem(items[lastFocused][key]);
              } else {
                this._focusItem(items[index - 1][key], multiple, false, true);
              }
            } else {
              this._focusItem(items[items.length - 1][key], false, false, true);
            }
            this._refreshItems();

            return this;
          }
        }, {
          key: '_focusNextItem',
          value: function _focusNextItem() {
            const multiple = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            const key = this.key;
            const items = this._vars.setItems;
            const index = this._getFocusedItemIndex(true);

            if (!items.length) {
              return this;
            }

            if (index !== null) {
              if (index === items.length - 1 && !multiple) {
                this._defocusItems();
              } else if (index === items.length - 1 && multiple) {
                this._focusItem(items[0][key], multiple);
              } else {
                this._focusItem(items[index + 1][key], multiple);
              }
            } else {
              this._focusItem(items[0][key], false);
            }
            this._refreshItems();

            return this;
          }
        }, {
          key: '_getSelectedItems',
          value: function _getSelectedItems() {
            const key = this.key;
            const setIds = this._vars.setItems.map(function (item) {
              return item[key];
            });
            return this._vars.suggestedItems.filter(function (v) {
              return v.selected && setIds.indexOf(v[key]) < 0;
            });
          }
        }, {
          key: '_selectItem',
          value: function _selectItem(key) {
            const _this9 = this;

            const scroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            this._vars.suggestedItems.forEach(function (v) {
              v.selected = v[_this9.key] === key;
              if (v.selected && scroll) {
                const height = parseInt(_this9._html.suggest.style.maxHeight, 10);
                if (height) {
                  const listBounds = _this9._html.suggestList.getBoundingClientRect();
                  const elBounds = v.el.getBoundingClientRect();
                  const top = elBounds.top - listBounds.top;
                  const bottom = top + elBounds.height;

                  if (bottom >= height + _this9._html.suggest.scrollTop) {
                    _this9._html.suggest.scrollTop = bottom - height;
                  } else if (top < _this9._html.suggest.scrollTop) {
                    _this9._html.suggest.scrollTop = top;
                  }
                }
              }
            });
          }
        }, {
          key: '_deselectItem',
          value: function _deselectItem(key) {
            const _this10 = this;

            this._vars.suggestedItems.every(function (v) {
              if (v[_this10.key] === key) {
                v.selected = false;
                return false;
              }
              return true;
            });
            return this;
          }
        }, {
          key: '_deselectItems',
          value: function _deselectItems() {
            this._vars.suggestedItems.forEach(function (v) {
              v.selected = false;
            });
            return this;
          }
        }, {
          key: '_refreshItemsSelection',
          value: function _refreshItemsSelection() {
            this._vars.suggestedItems.forEach(function (v) {
              if (v.selected && v.el) {
                v.el.classList.add('selected');
              } else if (v.el) {
                v.el.classList.remove('selected');
              }
            });
          }
        }, {
          key: '_getSelectedItemIndex',
          value: function _getSelectedItemIndex() {
            let index = null;
            this._vars.suggestedItems.every(function (v, k) {
              if (v.selected) {
                index = k;
                return false;
              }
              return true;
            });
            return index;
          }
        }, {
          key: '_getFocusedItemIndex',
          value: function _getFocusedItemIndex() {
            const last = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            let index = null;
            this._vars.setItems.every(function (v, k) {
              if (v.focused) {
                index = k;
                if (!last) {
                  return false;
                }
              }
              return true;
            });
            return index;
          }
        }, {
          key: '_getItem',
          value: function _getItem(val) {
            let prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            if (prop === null) prop = this.key;
            const items = this._filterItems(this._vars.setItems, val, prop);
            return items.length ? items[0] : null;
          }
        }, {
          key: '_getSuggestedItem',
          value: function _getSuggestedItem(val) {
            let prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            if (prop === null) prop = this.key;
            const items = this._filterItems(this._vars.suggestedItems, val, prop);
            return items.length ? items[0] : null;
          }
        }, {
          key: '_getAvailableItem',
          value: function _getAvailableItem(val) {
            let prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            if (prop === null) prop = this.key;
            const items = this._filterItems(this._options.items, val, prop);
            return items.length ? items[0] : null;
          }
        }, {
          key: '_filterItems',
          value: function _filterItems(items, val, prop) {
            const matchCase = this._options.filterMatchCase;
            return items.filter(function (v) {
              if (typeof v[prop] === 'string' && typeof val === 'string') {
                if (matchCase) return v[prop] === val;
                return v[prop].toLowerCase() == val.toLowerCase();
              }
              return v[prop] == val;
            });
          }
        }, {
          key: '_removeItem',
          value: function _removeItem(key) {
            const _this11 = this;

            this._vars.setItems.every(function (item, k) {
              if (item[_this11.key] === key) {
                _this11.emit('removeToken', _this11, item);
                _this11._vars.setItems.splice(k, 1);
                _this11.emit('removedToken', _this11, item);
                _this11.emit('change', _this11);
                return false;
              }
              return true;
            });
            return this;
          }
        }, {
          key: '_addItem',
          value: function _addItem(item) {
            item.focused = false;
            const o = this._options;
            // Check if item already exists in a given list.
            if (item.isNew && !this._getItem(item[o.itemData], o.itemData) || !this._getItem(item[o.itemValue], o.itemValue)) {
              this.emit('addToken', this, item);
              if (!this._options.maxItems || this._options.maxItems && this._vars.setItems.length < this._options.maxItems) {
                item.selected = false;
                const clonedItem = _extends({}, item);
                this._vars.setItems.push(clonedItem);
                this.emit('addedToken', this, clonedItem);
                this.emit('change', this);
              }
            }
            return this;
          }
        }, {
          key: 'getFocusedItem',
          value: function getFocusedItem() {
            const items = this._vars.setItems.filter(function (item) {
              return item.focused;
            })[0];
            if (items.length) return items[0];
            return null;
          }
        }, {
          key: 'getFocusedItems',
          value: function getFocusedItems() {
            return this._vars.setItems.filter(function (item) {
              return item.focused;
            });
          }
        }, {
          key: '_focusItem',
          value: function _focusItem(key) {
            const shift = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            const _this12 = this;

            const ctrl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            const add = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

            if (shift) {
              let first = null;
              let last = null;
              let target = null;
              const length = this._vars.setItems.length;
              this._vars.setItems.forEach(function (item, k) {
                if (item[_this12.key] === key) {
                  target = k;
                }
                if (first === null && item.focused) {
                  first = k;
                }
                if (item.focused) {
                  last = k;
                }
              });

              if ((target === 0 || target === length - 1) && first === null && last === null) {
                return;
              } else if (first === null && last === null) {
                this._vars.setItems[target].focused = true;
              } else if (target === 0 && last === length - 1 && !add) {
                this._vars.setItems[first].focused = false;
              } else {
                first = Math.min(target, first);
                last = Math.max(target, last);
                this._vars.setItems.forEach(function (item, k) {
                  item.focused = target === k || k >= first && k <= last;
                });
              }
            } else {
              this._vars.setItems.forEach(function (item) {
                if (ctrl) {
                  item.focused = item[_this12.key] === key ? !item.focused : item.focused;
                } else {
                  item.focused = item[_this12.key] === key;
                }
              });
            }
            return this;
          }
        }, {
          key: '_defocusItem',
          value: function _defocusItem(key) {
            const _this13 = this;

            return this._vars.setItems.filter(function (item) {
              if (item[_this13.key] === key) {
                item.focused = false;
              }
            });
          }
        }, {
          key: '_defocusItems',
          value: function _defocusItems() {
            this._vars.setItems.forEach(function (item) {
              item.focused = false;
            });
            return this;
          }
        }, {
          key: '_newItem',
          value: function _newItem(value) {
            const o = this._options;

            if (typeof value === 'string' && (!value.length || value.length < o.minLength)) return null;

            let item = this._getItem(value, o.itemData) || this._getSuggestedItem(value, o.itemData) || this._getAvailableItem(value, o.itemData);

            if (!item && o.newItems) {
              let _item;

              item = (_item = {
                isNew: true
              }, _defineProperty(_item, this.key, guid()), _defineProperty(_item, o.itemData, value), _item);
              this.emit('newToken', this, item);
            }

            if (item) {
              this._addItem(item);
              return item;
            }

            return null;
          }

          // Wrapper for build function in case some of the functions are overwritten.

        }, {
          key: '_buildEl',
          value: function _buildEl(html) {
            return build(html);
          }
        }, {
          key: '_getBounds',
          value: function _getBounds() {
            return this._html.container.getBoundingClientRect();
          }
        }, {
          key: '_renderItems',
          value: function _renderItems() {
            const _this14 = this;

            const v = this._vars;
            const o = this._options;
            const html = this._html;

            if (html.items) {
              html.items.innerHTML = '';
            }

            v.setItems.forEach(function (item, k) {
              const itemEl = _this14._renderItem(item, k);
              html.items.appendChild(itemEl);
              item.el = itemEl;
              if (item.focused) {
                item.el.classList.add('focused');
              } else {
                item.el.classList.remove('focused');
              }
            });

            if (v.setItems.length > 1 && o.mode === 'tokenfield') {
              html.input.setAttribute('placeholder', '');
            }

            if (this._input) {
              this._input.value = v.setItems.map(function (item) {
                return item[o.singleInputValue];
              }).join(o.singleInputDelimiter);
            }

            return this;
          }
        }, {
          key: '_refreshItems',
          value: function _refreshItems() {
            const v = this._vars;

            v.setItems.forEach(function (item) {
              if (item.el) {
                if (item.focused) {
                  item.el.classList.add('focused');
                } else {
                  item.el.classList.remove('focused');
                }
              }
            });
          }
        }, {
          key: '_renderItem',
          value: function _renderItem(item, k) {
            const o = this._options;

            const itemHtml = this.renderSetItemHtml(item);
            const label = itemHtml.querySelector('.item-label');
            const input = itemHtml.querySelector('.item-input');
            const remove = itemHtml.querySelector('.item-remove');
            const position = o.keepItemsOrder ? '[' + k + ']' : '[]';

            itemHtml.key = item[this.key];
            remove.key = item[this.key];
            input.setAttribute('name', (item.isNew ? o.newItemName : o.itemName) + position);

            input.value = item[item.isNew ? o.newItemValue : o.itemValue] || null;
            label.textContent = this.renderSetItemLabel(item);
            if (item.focused) {
              itemHtml.classList.add('focused');
            }

            return itemHtml;
          }
        }, {
          key: 'onInput',
          value: function onInput(value, _) {
            return value;
          }
        }, {
          key: 'renderSetItemHtml',
          value: function renderSetItemHtml() {
            return this._buildEl(this._templates.setItem);
          }
        }, {
          key: 'renderSetItemLabel',
          value: function renderSetItemLabel(item) {
            return item[this._options.itemLabel];
          }
        }, {
          key: 'renderSuggestions',
          value: function renderSuggestions(items) {
            const _this15 = this;

            const v = this._vars;
            const o = this._options;
            const html = this._html;
            const index = this._getSelectedItemIndex();

            if (!items.length) {
              return this;
            }

            if (o.maxSuggestWindow === 0) {
              html.suggest.style.maxHeight = null;
            }

            if (!v.suggestedItems.length) {
              return this;
            }

            if (!o.newItems && index === null) {
              items[0].selected = true;
            }

            let maxHeight = 0;

            items.every(function (item, k) {
              if (k >= o.maxSuggest) return false;
              const child = html.suggestList.childNodes[k];
              const el = item.el = _this15.renderSuggestedItem(item);

              if (child) {
                if (child.itemValue === item[o.itemValue]) {
                  child.key = item[_this15.key];
                  item.el = child;
                } else {
                  html.suggestList.replaceChild(el, child);
                }
              } else if (!child) {
                html.suggestList.appendChild(el);
              }

              if (o.maxSuggestWindow > 0 && k < o.maxSuggestWindow) {
                maxHeight += html.suggestList.childNodes[k].getBoundingClientRect().height;
              }

              if (o.maxSuggestWindow > 0 && k === o.maxSuggestWindow) {
                html.suggest.style.maxHeight = maxHeight + 'px';
              }

              return true;
            });

            const overflow = html.suggestList.childElementCount - items.length;
            if (overflow > 0) {
              for (let i = overflow - 1; i >= 0; i--) {
                html.suggestList.removeChild(html.suggestList.childNodes[items.length + i]);
              }
            }

            return this;
          }
        }, {
          key: 'renderSuggestedItem',
          value: function renderSuggestedItem(item) {
            const o = this._options;
            const el = this._buildEl(this._templates.suggestItem);
            el.key = item[this.key];
            el.itemValue = item[o.itemValue];
            el.innerHTML = this.renderSuggestedItemContent(item);
            el.setAttribute('title', item[o.itemData]);
            if (item.selected) {
              el.classList.add('selected');
            }
            if (!o.filterSetItems) {
              const setItem = this._getItem(item[o.itemValue], o.itemValue) || this._getItem(item[o.itemData], o.itemData);

              if (setItem) {
                el.classList.add('set');
              }
            }
            return el;
          }
        }, {
          key: 'renderSuggestedItemContent',
          value: function renderSuggestedItemContent(item) {
            return item[this._options.itemData];
          }
        }, {
          key: '_refreshSuggestions',
          value: function _refreshSuggestions() {
            const v = this._vars;
            const o = this._options;

            if (this._html.input.value.length < o.minChars) {
              this.hideSuggestions();
              return this;
            }

            const data = this._prepareData(o.items);
            const items = this._filterData(this._html.input.value, data);
            v.suggestedItems = o.filterSetItems ? this._filterSetItems(items) : items;

            if (v.suggestedItems.length) {
              if (!o.maxItems || o.maxItems && v.setItems.length < o.maxItems) {
                this.renderSuggestions(v.suggestedItems);
                return this;
              }
            }

            this.hideSuggestions();
            return this;
          }
        }, {
          key: 'showSuggestions',
          value: function showSuggestions() {
            const v = this._vars;
            const o = this._options;

            if (v.suggestedItems.length) {
              this.emit('showSuggestions', this);
              if (!o.maxItems || o.maxItems && v.setItems.length < o.maxItems) {
                this._html.suggest.style.display = 'block';
                v.suggested = true;
                this.renderSuggestions(v.suggestedItems);
              }
              this.emit('shownSuggestions', this);
            } else {
              this.hideSuggestions();
            }
            return this;
          }
        }, {
          key: 'hideSuggestions',
          value: function hideSuggestions() {
            this.emit('hideSuggestions', this);
            this._vars.suggested = false;
            this._html.suggest.style.display = 'none';
            this._html.suggestList.innerHTML = '';
            this.emit('hiddenSuggestions', this);
            return this;
          }
        }, {
          key: 'setSuggestedItems',
          value: function setSuggestedItems(items) {
            if (!Array.isArray(items)) {
              throw new Error('Argument must be an array of objects.');
            }

            this._options.items = items;
            this._refreshSuggestions();
          }
        }, {
          key: 'getItems',
          value: function getItems() {
            return this._vars.setItems.map(function (item) {
              return _extends({}, item);
            });
          }
        }, {
          key: 'setItems',
          value: function setItems() {
            const items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            this._vars.setItems = [];
            this.addItems(items);
            return this;
          }
        }, {
          key: 'addItems',
          value: function addItems() {
            const _this16 = this;

            let items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            const key = this._options.itemValue;
            if (!Array.isArray(items)) {
              items = [items];
            }

            this._prepareData(items).forEach(function (item) {
              if (item.isNew || typeof item[key] !== 'undefined') {
                _this16._addItem(item);
              }
            });

            this._renderItems()._refreshInput().hideSuggestions();

            return this;
          }
        }, {
          key: 'sortItems',
          value: function sortItems() {
            const _this17 = this;

            const items: any[] = [];

            [].concat(_toConsumableArray(this._html.items.childNodes)).forEach(function (el) {
              const item = _this17._getItem(el.key);
              if (item) {
                items.push(item);
              }
            });

            this.setItems(items);
          }
        }, {
          key: 'removeItem',
          value: function removeItem(value) {
            const o = this._options;
            if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && (value[o.itemValue] || value[o.newItemValue])) {
              value = value[o.itemValue] || value[o.newItemValue];
            }

            const item = this._getItem(value, o.itemValue) || this._getItem(value, o.newItemValue);

            if (!item) {
              return this;
            }

            this._removeItem(item[this.key])._renderItems();

            return this;
          }
        }, {
          key: 'emptyItems',
          value: function emptyItems() {
            this._vars.setItems = [];
            this._renderItems()._refreshInput().hideSuggestions();
            this.emit('change', this);
            return this;
          }
        }, {
          key: 'getSuggestedItems',
          value: function getSuggestedItems() {
            return this._vars.suggestedItems.map(function (item) {
              return _extends({}, item);
            });
          }
        }, {
          key: 'focus',
          value: function focus() {
            this._html.container.classList.add('focused');
            if (!this._focused) this._html.input.focus();
            return this;
          }
        }, {
          key: 'blur',
          value: function blur() {
            this._html.container.classList.remove('focused');
            if (this._focused) this._html.input.blur();
            return this;
          }
        }, {
          key: 'remove',
          value: function remove() {
            const html = this._html;

            html.container.parentElement.insertBefore(this.el, html.container);
            html.container.remove();
            this.el.style.display = 'block';

            if (Object.keys(_tokenfields).length === 1) {
              document.removeEventListener('mousedown', this._vars.events.onMouseDown);
              window.removeEventListener('resize', this._vars.events.onResize);
            }

            if (this._form && this._form.nodeName) {
              this._form.removeEventListener('reset', this._vars.events.onReset);
            }

            delete _tokenfields[this.id];
            delete this.el.tokenfield;
          }
        }]);

        return Tokenfield;
      }(_events2.default);

      exports.default = Tokenfield;

      /***/
    }),
/* 2 */
/***/ (function (module, _) {

      // Copyright Joyent, Inc. and other Node contributors.
      //
      // Permission is hereby granted, free of charge, to any person obtaining a
      // copy of this software and associated documentation files (the
      // "Software"), to deal in the Software without restriction, including
      // without limitation the rights to use, copy, modify, merge, publish,
      // distribute, sublicense, and/or sell copies of the Software, and to permit
      // persons to whom the Software is furnished to do so, subject to the
      // following conditions:
      //
      // The above copyright notice and this permission notice shall be included
      // in all copies or substantial portions of the Software.
      //
      // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
      // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
      // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
      // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
      // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
      // USE OR OTHER DEALINGS IN THE SOFTWARE.

      function EventEmitter() {
        this._events = this._events || {};
        this._maxListeners = this._maxListeners || undefined;
      }
      module.exports = EventEmitter;

      // Backwards-compat with node 0.10.x
      EventEmitter.EventEmitter = EventEmitter;

      EventEmitter.prototype._events = undefined;
      EventEmitter.prototype._maxListeners = undefined;

      // By default EventEmitters will print a warning if more than 10 listeners are
      // added to it. This is a useful default which helps finding memory leaks.
      EventEmitter.defaultMaxListeners = 10;

      // Obviously not all Emitters should be limited to 10. This function allows
      // that to be increased. Set to zero for unlimited.
      EventEmitter.prototype.setMaxListeners = function (n) {
        if (!isNumber(n) || n < 0 || isNaN(n))
          throw TypeError('n must be a positive number');
        this._maxListeners = n;
        return this;
      };

      EventEmitter.prototype.emit = function (type) {
        let er, handler, len, args, i, listeners;

        if (!this._events)
          this._events = {};

        // If there is no 'error' event listener then throw.
        if (type === 'error') {
          if (!this._events.error ||
            (isObject(this._events.error) && !this._events.error.length)) {
            er = arguments[1];
            if (er instanceof Error) {
              throw er; // Unhandled 'error' event
            } else {
              // At least give some kind of context to the user
              const err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
              // @ts-ignore
              err.context = er;
              throw err;
            }
          }
        }

        handler = this._events[type];

        if (isUndefined(handler))
          return false;

        if (isFunction(handler)) {
          switch (arguments.length) {
            // fast cases
            case 1:
              handler.call(this);
              break;
            case 2:
              handler.call(this, arguments[1]);
              break;
            case 3:
              handler.call(this, arguments[1], arguments[2]);
              break;
            // slower
            default:
              args = Array.prototype.slice.call(arguments, 1);
              handler.apply(this, args);
          }
        } else if (isObject(handler)) {
          args = Array.prototype.slice.call(arguments, 1);
          listeners = handler.slice();
          len = listeners.length;
          for (i = 0; i < len; i++)
            listeners[i].apply(this, args);
        }

        return true;
      };

      EventEmitter.prototype.addListener = function (type, listener) {
        let m;

        if (!isFunction(listener))
          throw TypeError('listener must be a function');

        if (!this._events)
          this._events = {};

        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (this._events.newListener)
          this.emit('newListener', type,
            isFunction(listener.listener) ?
              listener.listener : listener);

        if (!this._events[type])
          // Optimize the case of one listener. Don't need the extra array object.
          this._events[type] = listener;
        else if (isObject(this._events[type]))
          // If we've already got an array, just append.
          this._events[type].push(listener);
        else
          // Adding the second element, need to change to array.
          this._events[type] = [this._events[type], listener];

        // Check for listener leak
        if (isObject(this._events[type]) && !this._events[type].warned) {
          if (!isUndefined(this._maxListeners)) {
            m = this._maxListeners;
          } else {
            m = EventEmitter.defaultMaxListeners;
          }

          if (m && m > 0 && this._events[type].length > m) {
            this._events[type].warned = true;
            console.error('(node) warning: possible EventEmitter memory ' +
              'leak detected. %d listeners added. ' +
              'Use emitter.setMaxListeners() to increase limit.',
              this._events[type].length);
            if (typeof console.trace === 'function') {
              // not supported in IE 10
              console.trace();
            }
          }
        }

        return this;
      };

      EventEmitter.prototype.on = EventEmitter.prototype.addListener;

      EventEmitter.prototype.once = function (type, listener) {
        if (!isFunction(listener))
          throw TypeError('listener must be a function');

        let fired = false;

        function g() {
          this.removeListener(type, g);

          if (!fired) {
            fired = true;
            listener.apply(this, arguments);
          }
        }

        g.listener = listener;
        this.on(type, g);

        return this;
      };

      // emits a 'removeListener' event iff the listener was removed
      EventEmitter.prototype.removeListener = function (type, listener) {
        let list, position, length, i;

        if (!isFunction(listener))
          throw TypeError('listener must be a function');

        if (!this._events || !this._events[type])
          return this;

        list = this._events[type];
        length = list.length;
        position = -1;

        if (list === listener ||
          (isFunction(list.listener) && list.listener === listener)) {
          delete this._events[type];
          if (this._events.removeListener)
            this.emit('removeListener', type, listener);

        } else if (isObject(list)) {
          for (i = length; i-- > 0;) {
            if (list[i] === listener ||
              (list[i].listener && list[i].listener === listener)) {
              position = i;
              break;
            }
          }

          if (position < 0)
            return this;

          if (list.length === 1) {
            list.length = 0;
            delete this._events[type];
          } else {
            list.splice(position, 1);
          }

          if (this._events.removeListener)
            this.emit('removeListener', type, listener);
        }

        return this;
      };

      EventEmitter.prototype.removeAllListeners = function (type) {
        let key, listeners;

        if (!this._events)
          return this;

        // not listening for removeListener, no need to emit
        if (!this._events.removeListener) {
          if (arguments.length === 0)
            this._events = {};
          else if (this._events[type])
            delete this._events[type];
          return this;
        }

        // emit removeListener for all listeners on all events
        if (arguments.length === 0) {
          for (key in this._events) {
            if (key === 'removeListener') continue;
            this.removeAllListeners(key);
          }
          this.removeAllListeners('removeListener');
          this._events = {};
          return this;
        }

        listeners = this._events[type];

        if (isFunction(listeners)) {
          this.removeListener(type, listeners);
        } else if (listeners) {
          // LIFO order
          while (listeners.length)
            this.removeListener(type, listeners[listeners.length - 1]);
        }
        delete this._events[type];

        return this;
      };

      EventEmitter.prototype.listeners = function (type) {
        let ret;
        if (!this._events || !this._events[type])
          ret = [];
        else if (isFunction(this._events[type]))
          ret = [this._events[type]];
        else
          ret = this._events[type].slice();
        return ret;
      };

      EventEmitter.prototype.listenerCount = function (type) {
        if (this._events) {
          const evlistener = this._events[type];

          if (isFunction(evlistener))
            return 1;
          else if (evlistener)
            return evlistener.length;
        }
        return 0;
      };

      EventEmitter.listenerCount = function (emitter, type) {
        return emitter.listenerCount(type);
      };

      function isFunction(arg) {
        return typeof arg === 'function';
      }

      function isNumber(arg) {
        return typeof arg === 'number';
      }

      function isObject(arg) {
        return typeof arg === 'object' && arg !== null;
      }

      function isUndefined(arg) {
        return arg === void 0;
      }


      /***/
    }),
/* 3 */
/***/ (function (_, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = ajax;
      /**
       * Simple AJAX handling module.
       * tokenfield 1.3.0 <https://github.com/KaneCohen/tokenfield>
       * Copyright 2018 Kane Cohen <https://github.com/KaneCohen>
       * Available under BSD-3-Clause license
       */
      function ajax(params) {
        const options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        const callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        const xhr = new XMLHttpRequest();
        let url = options.url;
        const paramsArr: any[] = [];
        for (const key in params) {
          paramsArr.push(key + '=' + encodeURIComponent(params[key]));
        }

        const paramsString = paramsArr.join('&');

        if (options.type.toLowerCase() === 'get') {
          url += '?' + paramsString;
        }

        xhr.open(options.type, url, true);

        for (const header in options.headers) {
          let value = options.headers[header];
          if (typeof value === 'function') {
            value = value(params, options);
          }
          xhr.setRequestHeader(header, value);
        }

        if (callback) {
          xhr.onreadystatechange = callback;
        }

        xhr.send(params);

        return xhr;
      }

      /***/
    })
/******/]);
// tslint:enable