var __spreadArrays=this&&this.__spreadArrays||function(){for(var n=0,r=0,e=arguments.length;r<e;r++)n+=arguments[r].length;for(var t=Array(n),i=0,r=0;r<e;r++)for(var a=arguments[r],f=0,o=a.length;f<o;f++,i++)t[i]=a[f];return t};System.register(["./p-e0c018d5.system.js"],(function(n){"use strict";var r;return{setters:[function(n){r=n.r}],execute:function(){var e;var t=function(n){n.forEach((function(n){for(var r in n){if(n.hasOwnProperty(r)){var e=n[r];if(r==="easing"){var t="animation-timing-function";n[t]=e;delete n[r]}else{var t=i(r);if(t!==r){n[t]=e;delete n[r]}}}}}));return n};var i=function(n){return n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()};var a=function(n){if(e===undefined){var r=n.style.animationName!==undefined;var t=n.style.webkitAnimationName!==undefined;e=!r&&t?"-webkit-":""}return e};var f=function(n,r,e){var t=r.startsWith("animation")?a(n):"";n.style.setProperty(t+r,e)};var o=function(n,r){var e=r.startsWith("animation")?a(n):"";n.style.removeProperty(e+r)};var u=function(n,r){var e;var t={passive:true};var i=function(){if(e){e()}};var a=function(e){if(n===e.target){i();r(e)}};if(n){n.addEventListener("webkitAnimationEnd",a,t);n.addEventListener("animationend",a,t);e=function(){n.removeEventListener("webkitAnimationEnd",a,t);n.removeEventListener("animationend",a,t)}}return i};var c=function(n){if(n===void 0){n=[]}return n.map((function(n){var r=n.offset;var e=[];for(var t in n){if(n.hasOwnProperty(t)&&t!=="offset"){e.push(t+": "+n[t]+";")}}return r*100+"% { "+e.join(" ")+" }"})).join(" ")};var v=[];var s=function(n){var r=v.indexOf(n);if(r<0){r=v.push(n)-1}return"ion-animation-"+r};var l=function(n){var r=n.getRootNode();return r.head||r};var d=function(n,r,e){var t=l(e);var i=a(e);var f=t.querySelector("#"+n);if(f){return f}var o=(e.ownerDocument||document).createElement("style");o.id=n;o.textContent="@"+i+"keyframes "+n+" { "+r+" } @"+i+"keyframes "+n+"-alt { "+r+" }";t.appendChild(o);return o};var m=function(n,r){if(n===void 0){n=[]}if(r!==undefined){var e=Array.isArray(r)?r:[r];return __spreadArrays(n,e)}return n};var h=n("c",(function(n){var e;var i;var a;var v;var l;var h;var p=[];var g=[];var y=[];var E=false;var A;var b={};var C=[];var w=[];var S={};var k=0;var T=false;var _=false;var D;var L;var P;var F;var I=true;var N=false;var O=true;var R;var W;var x=n;var j=[];var M=[];var $=[];var q=[];var z=[];var K=[];var Z=[];var B=[];var G=[];var H=[];var J=typeof AnimationEffect==="function"||typeof window.AnimationEffect==="function";var Q=typeof Element==="function"&&typeof Element.prototype.animate==="function"&&J;var U=100;var V=function(){return H};var X=function(n){q.forEach((function(r){r.destroy(n)}));Y(n);$.length=0;q.length=0;p.length=0;en();E=false;O=true;return W};var Y=function(n){tn();if(n){an()}};var nn=function(){T=false;_=false;O=true;L=undefined;P=undefined;F=undefined;k=0;N=false;I=true};var rn=function(n,r){var e=r&&r.oneTimeCallback?M:j;e.push({c:n,o:r});return W};var en=function(){j.length=0;M.length=0;return W};var tn=function(){if(Q){H.forEach((function(n){n.cancel()}));H.length=0}else{var n=$.slice();r((function(){n.forEach((function(n){o(n,"animation-name");o(n,"animation-duration");o(n,"animation-timing-function");o(n,"animation-iteration-count");o(n,"animation-delay");o(n,"animation-play-state");o(n,"animation-fill-mode");o(n,"animation-direction")}))}))}};var an=function(){z.forEach((function(n){if(n&&n.parentNode){n.parentNode.removeChild(n)}}));z.length=0};var fn=function(n){K.push(n);return W};var on=function(n){Z.push(n);return W};var un=function(n){B.push(n);return W};var cn=function(n){G.push(n);return W};var vn=function(n){g=m(g,n);return W};var sn=function(n){y=m(y,n);return W};var ln=function(n){if(n===void 0){n={}}b=n;return W};var dn=function(n){if(n===void 0){n=[]}for(var r=0,e=n;r<e.length;r++){var t=e[r];b[t]=""}return W};var mn=function(n){C=m(C,n);return W};var hn=function(n){w=m(w,n);return W};var pn=function(n){if(n===void 0){n={}}S=n;return W};var gn=function(n){if(n===void 0){n=[]}for(var r=0,e=n;r<e.length;r++){var t=e[r];S[t]=""}return W};var yn=function(){if(l!==undefined){return l}if(A){return A.getFill()}return"both"};var En=function(){if(L!==undefined){return L}if(h!==undefined){return h}if(A){return A.getDirection()}return"normal"};var An=function(){if(T){return"linear"}if(a!==undefined){return a}if(A){return A.getEasing()}return"linear"};var bn=function(){if(_){return 0}if(P!==undefined){return P}if(i!==undefined){return i}if(A){return A.getDuration()}return 0};var Cn=function(){if(v!==undefined){return v}if(A){return A.getIterations()}return 1};var wn=function(){if(F!==undefined){return F}if(e!==undefined){return e}if(A){return A.getDelay()}return 0};var Sn=function(){return p};var kn=function(n){h=n;Zn(true);return W};var Tn=function(n){l=n;Zn(true);return W};var _n=function(n){e=n;Zn(true);return W};var Dn=function(n){a=n;Zn(true);return W};var Ln=function(n){if(!Q&&n===0){n=1}i=n;Zn(true);return W};var Pn=function(n){v=n;Zn(true);return W};var Fn=function(n){A=n;return W};var In=function(n){if(n!=null){if(n.nodeType===1){$.push(n)}else if(n.length>=0){for(var r=0;r<n.length;r++){$.push(n[r])}}else{console.error("Invalid addElement value")}}return W};var Nn=function(n){if(n!=null){if(Array.isArray(n)){for(var r=0,e=n;r<e.length;r++){var t=e[r];t.parent(W);q.push(t)}}else{n.parent(W);q.push(n)}}return W};var On=function(n){p=n;return W};var Rn=function(){K.forEach((function(n){return n()}));Z.forEach((function(n){return n()}));var n=g;var r=y;var e=b;$.forEach((function(t){var i=t.classList;n.forEach((function(n){return i.add(n)}));r.forEach((function(n){return i.remove(n)}));for(var a in e){if(e.hasOwnProperty(a)){f(t,a,e[a])}}}))};var Wn=function(){Vn();B.forEach((function(n){return n()}));G.forEach((function(n){return n()}));var n=I?1:0;var r=C;var e=w;var t=S;$.forEach((function(n){var i=n.classList;r.forEach((function(n){return i.add(n)}));e.forEach((function(n){return i.remove(n)}));for(var a in t){if(t.hasOwnProperty(a)){f(n,a,t[a])}}}));j.forEach((function(r){return r.c(n,W)}));M.forEach((function(r){return r.c(n,W)}));M.length=0;O=true;if(I){N=true}I=true};var xn=function(){if(k===0){return}k--;if(k===0){Wn();if(A){A.animationFinish()}}};var jn=function(e){if(e===void 0){e=true}an();var i=t(p);$.forEach((function(t){if(i.length>0){var a=c(i);R=n!==undefined?n:s(a);var o=d(R,a,t);z.push(o);f(t,"animation-duration",bn()+"ms");f(t,"animation-timing-function",An());f(t,"animation-delay",wn()+"ms");f(t,"animation-fill-mode",yn());f(t,"animation-direction",En());var u=Cn()===Infinity?"infinite":Cn().toString();f(t,"animation-iteration-count",u);f(t,"animation-play-state","paused");if(e){f(t,"animation-name",o.id+"-alt")}r((function(){f(t,"animation-name",o.id||null)}))}}))};var Mn=function(){$.forEach((function(n){var r=n.animate(p,{id:x,delay:wn(),duration:bn(),easing:An(),iterations:Cn(),fill:yn(),direction:En()});r.pause();H.push(r)}));if(H.length>0){H[0].onfinish=function(){xn()}}};var $n=function(n){if(n===void 0){n=true}Rn();if(p.length>0){if(Q){Mn()}else{jn(n)}}E=true};var qn=function(n){n=Math.min(Math.max(n,0),.9999);if(Q){H.forEach((function(r){r.currentTime=r.effect.getComputedTiming().delay+bn()*n;r.pause()}))}else{var r="-"+bn()*n+"ms";$.forEach((function(n){if(p.length>0){f(n,"animation-delay",r);f(n,"animation-play-state","paused")}}))}};var zn=function(n){H.forEach((function(n){n.effect.updateTiming({delay:wn(),duration:bn(),easing:An(),iterations:Cn(),fill:yn(),direction:En()})}));if(n!==undefined){qn(n)}};var Kn=function(n,e){if(n===void 0){n=true}r((function(){$.forEach((function(t){f(t,"animation-name",R||null);f(t,"animation-duration",bn()+"ms");f(t,"animation-timing-function",An());f(t,"animation-delay",e!==undefined?"-"+e*bn()+"ms":wn()+"ms");f(t,"animation-fill-mode",yn()||null);f(t,"animation-direction",En()||null);var i=Cn()===Infinity?"infinite":Cn().toString();f(t,"animation-iteration-count",i);if(n){f(t,"animation-name",R+"-alt")}r((function(){f(t,"animation-name",R||null)}))}))}))};var Zn=function(n,r,e){if(n===void 0){n=false}if(r===void 0){r=true}if(n){q.forEach((function(t){t.update(n,r,e)}))}if(Q){zn(e)}else{Kn(r,e)}return W};var Bn=function(n,r){if(n===void 0){n=false}q.forEach((function(e){e.progressStart(n,r)}));Jn();T=n;if(!E){$n()}else{Zn(false,true,r)}return W};var Gn=function(n){q.forEach((function(r){r.progressStep(n)}));qn(n);return W};var Hn=function(n,r,e){T=false;q.forEach((function(t){t.progressEnd(n,r,e)}));if(e!==undefined){P=e}N=false;I=true;if(n===0){L=En()==="reverse"?"normal":"reverse";if(L==="reverse"){I=false}if(Q){Zn();qn(1-r)}else{F=(1-r)*bn()*-1;Zn(false,false)}}else if(n===1){if(Q){Zn();qn(r)}else{F=r*bn()*-1;Zn(false,false)}}if(n!==undefined){rn((function(){P=undefined;L=undefined;F=undefined}),{oneTimeCallback:true});if(!A){er()}}return W};var Jn=function(){if(E){if(Q){H.forEach((function(n){n.pause()}))}else{$.forEach((function(n){f(n,"animation-play-state","paused")}))}}};var Qn=function(){q.forEach((function(n){n.pause()}));Jn();return W};var Un=function(){D=undefined;xn()};var Vn=function(){if(D){clearTimeout(D)}};var Xn=function(){Vn();r((function(){$.forEach((function(n){if(p.length>0){f(n,"animation-play-state","running")}}))}));if(p.length===0||$.length===0){xn()}else{var n=wn()||0;var e=bn()||0;var t=Cn()||1;if(isFinite(t)){D=setTimeout(Un,n+e*t+U)}u($[0],(function(){Vn();r((function(){Yn();r(xn)}))}))}};var Yn=function(){$.forEach((function(n){o(n,"animation-duration");o(n,"animation-delay");o(n,"animation-play-state")}))};var nr=function(){H.forEach((function(n){n.play()}));if(p.length===0||$.length===0){xn()}};var rr=function(){if(Q){qn(0);zn()}else{Kn()}};var er=function(n){return new Promise((function(r){if(n&&n.sync){_=true;rn((function(){return _=false}),{oneTimeCallback:true})}if(!E){$n()}if(N){rr();N=false}if(O){k=q.length+1;O=false}rn((function(){return r()}),{oneTimeCallback:true});q.forEach((function(n){n.play()}));if(Q){nr()}else{Xn()}}))};var tr=function(){q.forEach((function(n){n.stop()}));if(E){tn();E=false}nn()};var ir=function(n,r){var e;var t=p[0];if(t!==undefined&&(t.offset===undefined||t.offset===0)){t[n]=r}else{p=__spreadArrays([(e={offset:0},e[n]=r,e)],p)}return W};var ar=function(n,r){var e;var t=p[p.length-1];if(t!==undefined&&(t.offset===undefined||t.offset===1)){t[n]=r}else{p=__spreadArrays(p,[(e={offset:1},e[n]=r,e)])}return W};var fr=function(n,r,e){return ir(n,r).to(n,e)};return W={parentAnimation:A,elements:$,childAnimations:q,id:x,animationFinish:xn,from:ir,to:ar,fromTo:fr,parent:Fn,play:er,pause:Qn,stop:tr,destroy:X,keyframes:On,addAnimation:Nn,addElement:In,update:Zn,fill:Tn,direction:kn,iterations:Pn,duration:Ln,easing:Dn,delay:_n,getWebAnimations:V,getKeyframes:Sn,getFill:yn,getDirection:En,getDelay:wn,getIterations:Cn,getEasing:An,getDuration:bn,afterAddRead:un,afterAddWrite:cn,afterClearStyles:gn,afterStyles:pn,afterRemoveClass:hn,afterAddClass:mn,beforeAddRead:fn,beforeAddWrite:on,beforeClearStyles:dn,beforeStyles:ln,beforeRemoveClass:sn,beforeAddClass:vn,onFinish:rn,progressStart:Bn,progressStep:Gn,progressEnd:Hn}}))}}}));