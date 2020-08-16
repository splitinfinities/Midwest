import{G as t}from"./p-f8f84121.js";export{G as GESTURE_CONTROLLER}from"./p-f8f84121.js";const e=(t,e,n,r)=>{const s=o(t)?{capture:!!r.capture,passive:!!r.passive}:!!r.capture;let i,c;return t.__zone_symbol__addEventListener?(i="__zone_symbol__addEventListener",c="__zone_symbol__removeEventListener"):(i="addEventListener",c="removeEventListener"),t[i](e,n,s),()=>{t[c](e,n,s)}},o=t=>{if(void 0===n)try{const e=Object.defineProperty({},"passive",{get:()=>{n=!0}});t.addEventListener("optsTest",()=>{},e)}catch(e){n=!1}return!!n};let n;const r=t=>t instanceof Document?t:t.ownerDocument,s=o=>{let n=!1,s=!1,u=!0,d=!1;const l=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},o),v=l.canStart,m=l.onWillStart,p=l.onStart,f=l.onEnd,y=l.notCaptured,_=l.onMove,h=l.threshold,b=l.passive,E=l.blurOnStart,L={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},x=((t,e,o)=>{const n=o*(Math.PI/180),r="x"===t,s=Math.cos(n),i=e*e;let c=0,a=0,u=!1,d=0;return{start(t,e){c=t,a=e,d=0,u=!0},detect(t,e){if(!u)return!1;const o=t-c,n=e-a,l=o*o+n*n;if(l<i)return!1;const v=Math.sqrt(l),m=(r?o:n)/v;return d=m>s?1:m<-s?-1:0,u=!1,!0},isGesture:()=>0!==d,getDirection:()=>d}})(l.direction,l.threshold,l.maxAngle),D=t.createGesture({name:o.gestureName,priority:o.gesturePriority,disableScroll:o.disableScroll}),T=()=>{n&&(d=!1,_&&_(L))},g=()=>!(D&&!D.capture()||(n=!0,u=!1,L.startX=L.currentX,L.startY=L.currentY,L.startTime=L.currentTime,m?m(L).then(j):j(),0)),j=()=>{E&&(()=>{if("undefined"!=typeof document){const t=document.activeElement;null!==t&&t.blur&&t.blur()}})(),p&&p(L),u=!0},G=()=>{n=!1,s=!1,d=!1,u=!0,D.release()},O=t=>{const e=n,o=u;G(),o&&(i(L,t),e?f&&f(L):y&&y(L))},X=((t,o,n,s,i)=>{let c,a,u,d,l,v,m,p=0;const f=r=>{p=Date.now()+2e3,o(r)&&(!a&&n&&(a=e(t,"touchmove",n,i)),u||(u=e(t,"touchend",_,i)),d||(d=e(t,"touchcancel",_,i)))},y=s=>{p>Date.now()||o(s)&&(!v&&n&&(v=e(r(t),"mousemove",n,i)),m||(m=e(r(t),"mouseup",h,i)))},_=t=>{b(),s&&s(t)},h=t=>{E(),s&&s(t)},b=()=>{a&&a(),u&&u(),d&&d(),a=u=d=void 0},E=()=>{v&&v(),m&&m(),v=m=void 0},L=()=>{b(),E()},x=(o=!0)=>{o?(c||(c=e(t,"touchstart",f,i)),l||(l=e(t,"mousedown",y,i))):(c&&c(),l&&l(),c=l=void 0,L())};return{enable:x,stop:L,destroy:()=>{x(!1),s=n=o=void 0}}})(l.el,t=>{const e=a(t);return!(s||!u)&&(c(t,L),L.startX=L.currentX,L.startY=L.currentY,L.startTime=L.currentTime=e,L.velocityX=L.velocityY=L.deltaX=L.deltaY=0,L.event=t,(!v||!1!==v(L))&&(D.release(),!!D.start()&&(s=!0,0===h?g():(x.start(L.startX,L.startY),!0))))},t=>{n?!d&&u&&(d=!0,i(L,t),requestAnimationFrame(T)):(i(L,t),x.detect(L.currentX,L.currentY)&&(x.isGesture()&&g()||Y()))},O,{capture:!1,passive:b}),Y=()=>{G(),X.stop(),y&&y(L)};return{enable(t=!0){t||(n&&O(void 0),G()),X.enable(t)},destroy(){D.destroy(),X.destroy()}}},i=(t,e)=>{if(!e)return;const o=t.currentX,n=t.currentY,r=t.currentTime;c(e,t);const s=t.currentX,i=t.currentY,u=(t.currentTime=a(e))-r;if(u>0&&u<100){const e=(i-n)/u;t.velocityX=(s-o)/u*.7+.3*t.velocityX,t.velocityY=.7*e+.3*t.velocityY}t.deltaX=s-t.startX,t.deltaY=i-t.startY,t.event=e},c=(t,e)=>{let o=0,n=0;if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];o=t.clientX,n=t.clientY}else void 0!==t.pageX&&(o=t.pageX,n=t.pageY)}e.currentX=o,e.currentY=n},a=t=>t.timeStamp||Date.now();export{s as createGesture}