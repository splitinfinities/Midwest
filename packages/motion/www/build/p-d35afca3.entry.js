import{r as n,h as t,g as o}from"./p-7dc2349f.js";import{c as r,u,b as i}from"./p-34a7377e.js";const e=u(r((function(n){n.exports=function n(t,o,r){function u(c,a){if(!o[c]){if(!t[c]){var f="function"==typeof i&&i;if(!a&&f)return f(c,!0);if(e)return e(c,!0);var s=new Error("Cannot find module '"+c+"'");throw s.code="MODULE_NOT_FOUND",s}var l=o[c]={exports:{}};t[c][0].call(l.exports,(function(n){return u(t[c][1][n]||n)}),l,l.exports,n,t,o,r)}return o[c].exports}for(var e="function"==typeof i&&i,c=0;c<r.length;c++)u(r[c]);return u}({1:[function(n,t){t.exports=function(n){var t=2.5949095;return(n*=2)<1?n*n*((t+1)*n-t)*.5:.5*((n-=2)*n*((t+1)*n+t)+2)}},{}],2:[function(n,t){t.exports=function(n){var t=1.70158;return n*n*((t+1)*n-t)}},{}],3:[function(n,t){t.exports=function(n){var t=1.70158;return--n*n*((t+1)*n+t)+1}},{}],4:[function(n,t){var o=n("./bounce-out");t.exports=function(n){return n<.5?.5*(1-o(1-2*n)):.5*o(2*n-1)+.5}},{"./bounce-out":6}],5:[function(n,t){var o=n("./bounce-out");t.exports=function(n){return 1-o(1-n)}},{"./bounce-out":6}],6:[function(n,t){t.exports=function(n){var t=n*n;return n<4/11?7.5625*t:n<8/11?9.075*t-9.9*n+3.4:n<.9?4356/361*t-35442/1805*n+16061/1805:10.8*n*n-20.52*n+10.72}},{}],7:[function(n,t){t.exports=function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}},{}],8:[function(n,t){t.exports=function(n){return 1-Math.sqrt(1-n*n)}},{}],9:[function(n,t){t.exports=function(n){return Math.sqrt(1- --n*n)}},{}],10:[function(n,t){t.exports=function(n){return n<.5?4*n*n*n:.5*Math.pow(2*n-2,3)+1}},{}],11:[function(n,t){t.exports=function(n){return n*n*n}},{}],12:[function(n,t){t.exports=function(n){var t=n-1;return t*t*t+1}},{}],13:[function(n,t){t.exports=function(n){return n<.5?.5*Math.sin(13*Math.PI/2*2*n)*Math.pow(2,10*(2*n-1)):.5*Math.sin(-13*Math.PI/2*(2*n-1+1))*Math.pow(2,-10*(2*n-1))+1}},{}],14:[function(n,t){t.exports=function(n){return Math.sin(13*n*Math.PI/2)*Math.pow(2,10*(n-1))}},{}],15:[function(n,t){t.exports=function(n){return Math.sin(-13*(n+1)*Math.PI/2)*Math.pow(2,-10*n)+1}},{}],16:[function(n,t){t.exports=function(n){return 0===n||1===n?n:n<.5?.5*Math.pow(2,20*n-10):-.5*Math.pow(2,10-20*n)+1}},{}],17:[function(n,t){t.exports=function(n){return 0===n?n:Math.pow(2,10*(n-1))}},{}],18:[function(n,t){t.exports=function(n){return 1===n?n:1-Math.pow(2,-10*n)}},{}],19:[function(n,t){t.exports={backInOut:n("./back-in-out"),backIn:n("./back-in"),backOut:n("./back-out"),bounceInOut:n("./bounce-in-out"),bounceIn:n("./bounce-in"),bounceOut:n("./bounce-out"),circInOut:n("./circ-in-out"),circIn:n("./circ-in"),circOut:n("./circ-out"),cubicInOut:n("./cubic-in-out"),cubicIn:n("./cubic-in"),cubicOut:n("./cubic-out"),elasticInOut:n("./elastic-in-out"),elasticIn:n("./elastic-in"),elasticOut:n("./elastic-out"),expoInOut:n("./expo-in-out"),expoIn:n("./expo-in"),expoOut:n("./expo-out"),linear:n("./linear"),quadInOut:n("./quad-in-out"),quadIn:n("./quad-in"),quadOut:n("./quad-out"),quartInOut:n("./quart-in-out"),quartIn:n("./quart-in"),quartOut:n("./quart-out"),quintInOut:n("./quint-in-out"),quintIn:n("./quint-in"),quintOut:n("./quint-out"),sineInOut:n("./sine-in-out"),sineIn:n("./sine-in"),sineOut:n("./sine-out")}},{"./back-in":2,"./back-in-out":1,"./back-out":3,"./bounce-in":5,"./bounce-in-out":4,"./bounce-out":6,"./circ-in":8,"./circ-in-out":7,"./circ-out":9,"./cubic-in":11,"./cubic-in-out":10,"./cubic-out":12,"./elastic-in":14,"./elastic-in-out":13,"./elastic-out":15,"./expo-in":17,"./expo-in-out":16,"./expo-out":18,"./linear":20,"./quad-in":22,"./quad-in-out":21,"./quad-out":23,"./quart-in":25,"./quart-in-out":24,"./quart-out":26,"./quint-in":28,"./quint-in-out":27,"./quint-out":29,"./sine-in":31,"./sine-in-out":30,"./sine-out":32}],20:[function(n,t){t.exports=function(n){return n}},{}],21:[function(n,t){t.exports=function(n){return(n/=.5)<1?.5*n*n:-.5*(--n*(n-2)-1)}},{}],22:[function(n,t){t.exports=function(n){return n*n}},{}],23:[function(n,t){t.exports=function(n){return-n*(n-2)}},{}],24:[function(n,t){t.exports=function(n){return n<.5?8*Math.pow(n,4):-8*Math.pow(n-1,4)+1}},{}],25:[function(n,t){t.exports=function(n){return Math.pow(n,4)}},{}],26:[function(n,t){t.exports=function(n){return Math.pow(n-1,3)*(1-n)+1}},{}],27:[function(n,t){t.exports=function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}},{}],28:[function(n,t){t.exports=function(n){return n*n*n*n*n}},{}],29:[function(n,t){t.exports=function(n){return--n*n*n*n*n+1}},{}],30:[function(n,t){t.exports=function(n){return-.5*(Math.cos(Math.PI*n)-1)}},{}],31:[function(n,t){t.exports=function(n){var t=Math.cos(n*Math.PI*.5);return Math.abs(t)<1e-14?1:1-t}},{}],32:[function(n,t){t.exports=function(n){return Math.sin(n*Math.PI/2)}},{}],33:[function(n,t){t.exports=function(n,t){t||(t=[0,""]),n=String(n);var o=parseFloat(n,10);return t[0]=o,t[1]=n.match(/[\d.\-\+]*\s*(.*)/)[1]||"",t}},{}],34:[function(n,t,o){Object.defineProperty(o,"__esModule",{value:!0}),o.create=void 0;var r=i(n("parse-unit")),u=i(n("eases"));function i(n){return n&&n.__esModule?n:{default:n}}function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var c,a,f=[],s="undefined"!=typeof window,l=function(){return(document.scrollingElement||document.documentElement).scrollTop},b=function(){return window.innerHeight||window.outerHeight},p=function(n){return!1===isNaN((0,r.default)(n)[0])},d=function(n){var t=(0,r.default)(n);return{value:t[0],unit:t[1]}},h=function(n){return null!==String(n).match(/^[a-z]+-[a-z]+$/)},m=function(n,t){return!0===n?t.elem:n instanceof HTMLElement==1?t.direct:t.global},w=function(n,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l(),r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:b(),u=t.getBoundingClientRect(),i=n.match(/^[a-z]+/)[0],e=n.match(/[a-z]+$/)[0],c=0;return"top"===e&&(c-=0),"middle"===e&&(c-=r/2),"bottom"===e&&(c-=r),"top"===i&&(c+=u.top+o),"middle"===i&&(c+=u.top+o+u.height/2),"bottom"===i&&(c+=u.top+o+u.height),"".concat(c,"px")},v=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l(),o=n.getData(),r=o.to.value-o.from.value,u=t-o.from.value,i=u/(r/100),e=Math.min(Math.max(i,0),100),c=m(o.direct,{global:document.documentElement,elem:o.elem,direct:o.direct}),a=Object.keys(o.props).reduce((function(n,t){var r=o.props[t],u=r.from.unit||r.to.unit,i=r.from.value-r.to.value,c=r.timing(e/100),a=Math.round(1e4*(r.from.value-i*c))/1e4;return n[t]=a+u,n}),{}),f=i>=0&&i<=100,s=i<0||i>100;return!0===f&&o.inside(n,i,a),!0===s&&o.outside(n,i,a),{elem:c,props:a}},y=function(n,t){Object.keys(t).forEach((function(o){return function(n,t){n.style.setProperty(t.key,t.value)}(n,{key:o,value:t[o]})}))};o.create=function(n){var t=null,o=!1,r={isActive:function(){return o},getData:function(){return t},calculate:function(){t=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(n=Object.assign({},n)).inside&&(n.inside=function(){}),null==n.outside&&(n.outside=function(){}),null==n.direct&&(n.direct=!1),null==n.track&&(n.track=!0),null==n.props&&(n.props={}),null==n.from)throw new Error("Missing property `from`");if(null==n.to)throw new Error("Missing property `to`");if("function"!=typeof n.inside)throw new Error("Property `inside` must be undefined or a function");if("function"!=typeof n.outside)throw new Error("Property `outside` must be undefined or a function");if("boolean"!=typeof n.direct&&n.direct instanceof HTMLElement==0)throw new Error("Property `direct` must be undefined, a boolean or a DOM element/node");if(!0===n.direct&&null==n.elem)throw new Error("Property `elem` is required when `direct` is true");if("boolean"!=typeof n.track)throw new Error("Property `track` must be undefined or a boolean");if("object"!==e(n.props))throw new Error("Property `props` must be undefined or an object");if(null==n.elem){if(!1===p(n.from))throw new Error("Property `from` must be a absolute value when no `elem` has been provided");if(!1===p(n.to))throw new Error("Property `to` must be a absolute value when no `elem` has been provided")}else!0===h(n.from)&&(n.from=w(n.from,n.elem)),!0===h(n.to)&&(n.to=w(n.to,n.elem));return n.from=d(n.from),n.to=d(n.to),n.props=Object.keys(n.props).reduce((function(t,o){var r=Object.assign({},n.props[o]);if(!1===p(r.from))throw new Error("Property `from` of prop must be a absolute value");if(!1===p(r.to))throw new Error("Property `from` of prop must be a absolute value");if(r.from=d(r.from),r.to=d(r.to),null==r.timing&&(r.timing=u.default.linear),"string"!=typeof r.timing&&"function"!=typeof r.timing)throw new Error("Property `timing` of prop must be undefined, a string or a function");if("string"==typeof r.timing&&null==u.default[r.timing])throw new Error("Unknown timing for property `timing` of prop");return"string"==typeof r.timing&&(r.timing=u.default[r.timing]),t[o]=r,t}),{}),n}(n)},update:function(){var n=v(r),t=n.props;return y(n.elem,t),t},start:function(){o=!0},stop:function(){o=!1},destroy:function(){f[i]=void 0}},i=f.push(r)-1;return r.calculate(),r},!0===s?(function n(t,o){var r=function(){requestAnimationFrame((function(){return n(t,o)}))},u=function(n){return n.filter((function(n){return null!=n&&n.isActive()}))}(f);if(0===u.length)return r();var i=l();if(o===i)return r();o=i,u.map((function(n){return v(n,i)})).forEach((function(n){return y(n.elem,n.props)})),r()}(),window.addEventListener("resize",(c=function(){(function(n){return n.filter((function(n){return null!=n&&n.getData().track}))})(f).forEach((function(n){n.calculate(),n.update()}))},a=null,function(){for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];clearTimeout(a),a=setTimeout((function(){return c.apply(void 0,t)}),50)}))):console.warn("basicScroll is not executing because you are using it in an environment without a `window` object")},{eases:19,"parse-unit":33}]},{},[34])(34)}))),c=class{constructor(t){n(this,t),this.center=!1,this.horizontal=!1,this.easeBoxes=[]}componentWillLoad(){document.querySelectorAll("midwest-parallax-section").forEach(n=>{e&&this.easeBoxes.push(e.create({elem:n,from:"top-bottom",to:"bottom-top",direct:!0,props:{"--ty":{from:-2*n.speed+"%",to:2*n.speed+"%"}}}))}),this.easeBoxes.forEach(n=>{n.start()}),window.onresize=()=>{this.easeBoxes.forEach(n=>{n.calculate(),n.update()})}}render(){return t("slot",null)}get el(){return o(this)}};c.style=":host,:host *,:host *::before,:host *::after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block}midwest-parallax{display:grid;overflow:hidden;position:absolute;width:100%;height:100%;top:0;left:0;right:0;bottom:0;contain:content}";const a=class{constructor(t){n(this,t),this.speed=1}};a.style=":host,:host *,:host *::before,:host *::after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block}midwest-parallax-section{grid-area:1/1;-webkit-transform:translateY(var(--ty));transform:translateY(var(--ty));will-change:transform;contain:content}midwest-parallax-section.double{-webkit-transform:translateY(var(--ty)) scale(1.125);transform:translateY(var(--ty)) scale(1.125)}";export{c as midwest_parallax,a as midwest_parallax_section}