System.register(["./p-d33d3376.system.js"],(function(o){"use strict";var e,i,n,t,r;return{setters:[function(o){e=o.e;i=o.r;n=o.h;t=o.H;r=o.g}],execute:function(){var s;var a=function(){if(typeof window==="undefined"){return new Map}else{if(!s){var o=window;o.Ionicons=o.Ionicons||{};s=o.Ionicons.map=o.Ionicons.map||new Map}return s}};var c=function(o){var e=u(o.src);if(e){return e}e=f(o.name,o.icon,o.mode,o.ios,o.md);if(e){return l(e)}if(o.icon){e=u(o.icon);if(e){return e}e=u(o.icon[o.mode]);if(e){return e}}return null};var l=function(o){var i=a().get(o);if(i){return i}return e("svg/"+o+".svg")};var f=function(o,e,i,n,t){i=(i&&v(i))==="ios"?"ios":"md";if(n&&i==="ios"){o=v(n)}else if(t&&i==="md"){o=v(t)}else{if(!o&&e&&!d(e)){o=e}if(h(o)){o=v(o)}}if(!h(o)||o.trim()===""){return null}var r=o.replace(/[a-z]|-|\d/gi,"");if(r!==""){return null}return o};var u=function(o){if(h(o)){o=o.trim();if(d(o)){return o}}return null};var d=function(o){return o.length>0&&/(\/|\.)/.test(o)};var h=function(o){return typeof o==="string"};var v=function(o){return o.toLowerCase()};var b=function(o){if(o&&typeof document!=="undefined"){var e=document.createElement("div");e.innerHTML=o;for(var i=e.childNodes.length-1;i>=0;i--){if(e.childNodes[i].nodeName.toLowerCase()!=="svg"){e.removeChild(e.childNodes[i])}}var n=e.firstElementChild;if(n&&n.nodeName.toLowerCase()==="svg"){var t=n.getAttribute("class")||"";n.setAttribute("class",(t+" s-ion-icon").trim());if(m(n)){return e.innerHTML}}}return""};var m=function(o){if(o.nodeType===1){if(o.nodeName.toLowerCase()==="script"){return false}for(var e=0;e<o.attributes.length;e++){var i=o.attributes[e].value;if(h(i)&&i.toLowerCase().indexOf("on")===0){return false}}for(var e=0;e<o.childNodes.length;e++){if(!m(o.childNodes[e])){return false}}}return true};var p=new Map;var g=new Map;var w=function(o){var e=g.get(o);if(!e){if(typeof fetch!=="undefined"){e=fetch(o).then((function(e){if(e.ok){return e.text().then((function(e){p.set(o,b(e))}))}p.set(o,"")}));g.set(o,e)}else{p.set(o,"");return Promise.resolve()}}return e};var y=":host,:host *,:host *::before,:host *::after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block}:host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}";var x=o("ion_icon",function(){function o(o){i(this,o);this.isVisible=false;this.mode=k();this.lazy=false}o.prototype.connectedCallback=function(){var o=this;this.waitUntilVisible(this.el,"50px",(function(){o.isVisible=true;o.loadIcon()}))};o.prototype.disconnectedCallback=function(){if(this.io){this.io.disconnect();this.io=undefined}};o.prototype.waitUntilVisible=function(o,e,i){var n=this;if(this.lazy&&typeof window!=="undefined"&&window.IntersectionObserver){var t=this.io=new window.IntersectionObserver((function(o){if(o[0].isIntersecting){t.disconnect();n.io=undefined;i()}}),{rootMargin:e});t.observe(o)}else{i()}};o.prototype.loadIcon=function(){var o=this;if(this.isVisible){var e=c(this);if(e){if(p.has(e)){this.svgContent=p.get(e)}else{w(e).then((function(){return o.svgContent=p.get(e)}))}}}if(!this.ariaLabel){var i=f(this.name,this.icon,this.mode,this.ios,this.md);if(i){this.ariaLabel=i.replace(/\-/g," ")}}};o.prototype.render=function(){var o,e;var i=this.mode||"md";var r=this.flipRtl||this.ariaLabel&&(this.ariaLabel.indexOf("arrow")>-1||this.ariaLabel.indexOf("chevron")>-1)&&this.flipRtl!==false;return n(t,{role:"img",class:Object.assign(Object.assign((o={},o[i]=true,o),C(this.color)),(e={},e["icon-"+this.size]=!!this.size,e["flip-rtl"]=!!r&&this.el.ownerDocument.dir==="rtl",e))},this.svgContent?n("div",{class:"icon-inner",innerHTML:this.svgContent}):n("div",{class:"icon-inner"}))};Object.defineProperty(o,"assetsDirs",{get:function(){return["svg"]},enumerable:false,configurable:true});Object.defineProperty(o.prototype,"el",{get:function(){return r(this)},enumerable:false,configurable:true});Object.defineProperty(o,"watchers",{get:function(){return{name:["loadIcon"],src:["loadIcon"],icon:["loadIcon"]}},enumerable:false,configurable:true});return o}());var k=function(){return typeof document!=="undefined"&&document.documentElement.getAttribute("mode")||"md"};var C=function(o){var e;return o?(e={"ion-color":true},e["ion-color-"+o]=true,e):null};x.style=y}}}));