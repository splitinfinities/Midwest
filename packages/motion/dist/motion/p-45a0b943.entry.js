import{r as n}from"./p-7dc2349f.js";import{c as r,a as t,u as e}from"./p-34a7377e.js";for(var a=r((function(n){(function(){var r,t,e,a,o,i;"undefined"!=typeof performance&&null!==performance&&performance.now?n.exports=function(){return performance.now()}:"undefined"!=typeof process&&null!==process&&process.hrtime?(n.exports=function(){return(r()-o)/1e6},t=process.hrtime,a=(r=function(){var n;return 1e9*(n=t())[0]+n[1]})(),i=1e9*process.uptime(),o=a-i):Date.now?(n.exports=function(){return Date.now()-e},e=Date.now()):(n.exports=function(){return(new Date).getTime()-e},e=(new Date).getTime())}).call(t)})),o="undefined"==typeof window?t:window,i=["moz","webkit"],u="AnimationFrame",s=o["request"+u],f=o["cancel"+u]||o["cancelRequest"+u],c=0;!s&&c<i.length;c++)s=o[i[c]+"Request"+u],f=o[i[c]+"Cancel"+u]||o[i[c]+"CancelRequest"+u];if(!s||!f){var d=0,l=0,p=[];s=function(n){if(0===p.length){var r=a(),t=Math.max(0,1e3/60-(r-d));d=t+r,setTimeout((function(){var n=p.slice(0);p.length=0;for(var r=0;r<n.length;r++)if(!n[r].cancelled)try{n[r].callback(d)}catch(t){setTimeout((function(){throw t}),0)}}),Math.round(t))}return p.push({handle:++l,callback:n,cancelled:!1}),l},f=function(n){for(var r=0;r<p.length;r++)p[r].handle===n&&(p[r].cancelled=!0)}}var v=function(n){return s.call(o,n)};v.cancel=function(){f.apply(o,arguments)},v.polyfill=function(n){n||(n=o),n.requestAnimationFrame=s,n.cancelAnimationFrame=f};const m=e(r((function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var t,e=(t=v)&&t.__esModule?t:{default:t},a=new WeakMap,o=function(n,r){return Math.abs(n-r)},i=function(n){return[].concat(function(n){if(Array.isArray(n)){for(var r=0,t=Array(n.length);r<n.length;r++)t[r]=n[r];return t}return Array.from(n)}(document.querySelectorAll("."+n))).map((function(n){var r="true"===n.dataset.relative,t=r?u(n):0,e=parseInt(n.dataset.end,10),a=parseInt(n.dataset.start,10),o=parseFloat(n.dataset.opacityStart),i=parseFloat(n.dataset.opacityEnd),s=parseInt(n.dataset.translatexStart,10),f=parseInt(n.dataset.translatexEnd,10),c=parseInt(n.dataset.translateyStart,10),d=parseInt(n.dataset.translateyEnd,10),l=parseFloat(n.dataset.scaleStart),p=parseFloat(n.dataset.scaleEnd),v={};return isNaN(o)||isNaN(i)||(v.opacity={end:i,start:o}),isNaN(s)||isNaN(f)||(v.translateX={end:f,start:s}),isNaN(c)||isNaN(d)||(v.translateY={end:d,start:c}),isNaN(l)||isNaN(p)||(v.scale={end:p,start:l}),void 0===e||void 0===a||0===Object.keys(v)?null:{el:n,end:e,offset:t,relative:r,start:a,updates:v}})).filter((function(n){return n}))},u=function(n){return f()+n.getBoundingClientRect().top},s=function(n,r,t){var e=o(n,r)*t;return n>r?n-e:n+e},f=function(){return parseInt(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,10)},c=function(n){var r=function(){var n=document.createElement("div"),r=["Webkit","webkit","Moz","moz","ms","o"];if(null!=n.style.transform)return"transform";for(var t in r){var e=r[t]+"Transform";if(void 0!==n.style[e])return e}}();return function(){var t=f();n.map((function(n){var e,i,u,f,c=n.el,d=n.offset,l=n.updates,p=d+n.start,v=d+n.end,m=a.get(c);if(t>=p&&t<=v||"before"!==m&&t<p||"after"!==m&&t>v){var w=0,N=0,h=1,y=(i=p,u=v,e=p,f=Math.max(Math.min(t,v),e),o(i,f)/o(i,u));if(l.opacity){var I=l.opacity,b=s(I.start,I.end,y).toFixed(2);c.style.opacity=b}if(l.translateX){var M=l.translateX;w=parseInt(s(M.start,M.end,y),10)}if(l.translateY){var j=l.translateY;N=parseInt(s(j.start,j.end,y),10)}if(l.scale){var k=l.scale;h=s(k.start,k.end,y).toFixed(2)}c.style[r]="translate3d("+w+"px, "+N+"px, 0) scale("+h+")",a.set(c,t<p?"before":t>v?"after":"during")}}))}},d=function(n){var r=function(){return n.map((function(n){n.relative&&(n.offset=u(n.el))}))},t=void 0;window.addEventListener("resize",(function(){window.clearTimeout(t),t=window.setTimeout(r,50)}))};r.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=n.className,t=void 0===r?"js-parallaxis":r,a=i(t);if(a.length){var o=c(a);d(a),o(),window.addEventListener("scroll",(function(){return(0,e.default)(o)}))}}}))),w=class{constructor(r){n(this,r),this.target="story"}componentWillLoad(){m({className:this.target})}};export{w as midwest_story}