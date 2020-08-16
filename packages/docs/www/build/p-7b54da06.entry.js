import{r as t,h as o,H as e,c as n,e as i}from"./p-3f0415fb.js";import{g as s,c as r,i as a}from"./p-19388ec1.js";import{g as c}from"./p-6b2778af.js";import{a as h,d as u}from"./p-389a7f5c.js";import{l,t as d,s as f,L as p,a as m,b as w}from"./p-ee9f1add.js";import{a as v}from"./p-617d5a48.js";const b=class{constructor(o){t(this,o)}render(){return o("ion-app",null,o("ion-router",{useHash:!1},o("ion-route",{url:"/",component:"app-home"}),o("ion-route",{url:"/profile/:name",component:"app-profile"})),o("ion-nav",null))}};b.style="";const g=class{constructor(o){t(this,o)}componentDidLoad(){C(()=>{const t=a(window,"hybrid");r.getBoolean("_testing")||__sc_import_documentation("./p-577d7137.js").then(t=>t.startTapClick(r)),r.getBoolean("statusTap",t)&&__sc_import_documentation("./p-2b432ea8.js").then(t=>t.startStatusTap()),r.getBoolean("inputShims",y())&&__sc_import_documentation("./p-062bc985.js").then(t=>t.startInputShims(r)),r.getBoolean("hardwareBackButton",t)&&__sc_import_documentation("./p-4bef7ab5.js").then(t=>t.startHardwareBackButton()),"undefined"!=typeof window&&__sc_import_documentation("./p-b84a7bd4.js").then(t=>t.startKeyboardAssist(window)),__sc_import_documentation("./p-961c8b2e.js").then(t=>t.startFocusVisible())})}render(){const t=s(this);return o(e,{class:{[t]:!0,"ion-page":!0,"force-statusbar-padding":r.getBoolean("_forceStatusbarPadding")}})}get el(){return n(this)}},y=()=>a(window,"ios")&&a(window,"mobile"),C=t=>{"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)};g.style="html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";class _{constructor(t,o){this.component=t,this.params=o,this.state=1}async init(t){if(this.state=2,!this.element){const o=this.component;this.element=await v(this.delegate,t,o,["ion-page","ion-page-invisible"],this.params)}}_destroy(){h(3!==this.state,"view state must be ATTACHED");const t=this.element;t&&(this.delegate?this.delegate.removeViewFromDom(t.parentElement,t):t.remove()),this.nav=void 0,this.state=3}}const j=(t,o,e)=>{if(!t)return!1;if(t.component!==o)return!1;const n=t.params;if(n===e)return!0;if(!n&&!e)return!0;if(!n||!e)return!1;const i=Object.keys(n),s=Object.keys(e);if(i.length!==s.length)return!1;for(const r of i)if(n[r]!==e[r])return!1;return!0},P=(t,o)=>t?t instanceof _?t:new _(t,o):null,R=class{constructor(o){t(this,o),this.ionNavWillLoad=i(this,"ionNavWillLoad",7),this.ionNavWillChange=i(this,"ionNavWillChange",3),this.ionNavDidChange=i(this,"ionNavDidChange",3),this.transInstr=[],this.animationEnabled=!0,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0}swipeGestureChanged(){this.gesture&&this.gesture.enable(!0===this.swipeGesture)}rootChanged(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))}componentWillLoad(){if(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture){const t=s(this);this.swipeGesture=r.getBoolean("swipeBackEnabled","ios"===t)}this.ionNavWillLoad.emit()}async componentDidLoad(){this.rootChanged(),this.gesture=(await __sc_import_documentation("./p-f150e6f8.js")).createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged()}componentDidUnload(){for(const t of this.views)l(t.element,p),t._destroy();this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=this.views.length=0,this.destroyed=!0}push(t,o,e,n){return this.queueTrns({insertStart:-1,insertViews:[{component:t,componentProps:o}],opts:e},n)}insert(t,o,e,n,i){return this.queueTrns({insertStart:t,insertViews:[{component:o,componentProps:e}],opts:n},i)}insertPages(t,o,e,n){return this.queueTrns({insertStart:t,insertViews:o,opts:e},n)}pop(t,o){return this.queueTrns({removeStart:-1,removeCount:1,opts:t},o)}popTo(t,o,e){const n={removeStart:-1,removeCount:-1,opts:o};return"object"==typeof t&&t.component?(n.removeView=t,n.removeStart=1):"number"==typeof t&&(n.removeStart=t+1),this.queueTrns(n,e)}popToRoot(t,o){return this.queueTrns({removeStart:1,removeCount:-1,opts:t},o)}removeIndex(t,o=1,e,n){return this.queueTrns({removeStart:t,removeCount:o,opts:e},n)}setRoot(t,o,e,n){return this.setPages([{component:t,componentProps:o}],e,n)}setPages(t,o,e){return null==o&&(o={}),!0!==o.animated&&(o.animated=!1),this.queueTrns({insertStart:0,insertViews:t,removeStart:0,removeCount:-1,opts:o},e)}setRouteId(t,o,e,n){const i=this.getActiveSync();if(j(i,t,o))return Promise.resolve({changed:!1,element:i.element});let s;const r=new Promise(t=>s=t);let a;const c={updateURL:!1,viewIsReady:t=>{let o;const e=new Promise(t=>o=t);return s({changed:!0,element:t,markVisible:async()=>{o(),await a}}),e}};if("root"===e)a=this.setRoot(t,o,c);else{const i=this.views.find(e=>j(e,t,o));i?a=this.popTo(i,Object.assign(Object.assign({},c),{direction:"back",animationBuilder:n})):"forward"===e?a=this.push(t,o,Object.assign(Object.assign({},c),{animationBuilder:n})):"back"===e&&(a=this.setRoot(t,o,Object.assign(Object.assign({},c),{direction:"back",animated:!0,animationBuilder:n})))}return r}async getRouteId(){const t=this.getActiveSync();return t?{id:t.element.tagName,params:t.params,element:t.element}:void 0}getActive(){return Promise.resolve(this.getActiveSync())}getByIndex(t){return Promise.resolve(this.views[t])}canGoBack(t){return Promise.resolve(this.canGoBackSync(t))}getPrevious(t){return Promise.resolve(this.getPreviousSync(t))}getLength(){return this.views.length}getActiveSync(){return this.views[this.views.length-1]}canGoBackSync(t=this.getActiveSync()){return!(!t||!this.getPreviousSync(t))}getPreviousSync(t=this.getActiveSync()){if(!t)return;const o=this.views,e=o.indexOf(t);return e>0?o[e-1]:void 0}async queueTrns(t,o){if(this.isTransitioning&&null!=t.opts&&t.opts.skipIfBusy)return Promise.resolve(!1);const e=new Promise((o,e)=>{t.resolve=o,t.reject=e});if(t.done=o,t.opts&&!1!==t.opts.updateURL&&this.useRouter){const o=document.querySelector("ion-router");if(o){const e=await o.canTransition();if(!1===e)return Promise.resolve(!1);if("string"==typeof e)return o.push(e,t.opts.direction||"back"),Promise.resolve(!1)}}return t.insertViews&&0===t.insertViews.length&&(t.insertViews=void 0),this.transInstr.push(t),this.nextTrns(),e}success(t,o){if(this.destroyed)this.fireError("nav controller was destroyed",o);else if(o.done&&o.done(t.hasCompleted,t.requiresTransition,t.enteringView,t.leavingView,t.direction),o.resolve(t.hasCompleted),!1!==o.opts.updateURL&&this.useRouter){const o=document.querySelector("ion-router");o&&o.navChanged("back"===t.direction?"back":"forward")}}failed(t,o){this.destroyed?this.fireError("nav controller was destroyed",o):(this.transInstr.length=0,this.fireError(t,o))}fireError(t,o){o.done&&o.done(!1,!1,t),o.reject&&!this.destroyed?o.reject(t):o.resolve(!1)}nextTrns(){if(this.isTransitioning)return!1;const t=this.transInstr.shift();return!!t&&(this.runTransition(t),!0)}async runTransition(t){try{this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(t);const o=this.getActiveSync(),e=this.getEnteringView(t,o);if(!o&&!e)throw new Error("no views in the stack to be removed");e&&1===e.state&&await e.init(this.el),this.postViewInit(e,o,t);const n=(t.enteringRequiresTransition||t.leavingRequiresTransition)&&e!==o;n&&t.opts&&o&&("back"===t.opts.direction&&(t.opts.animationBuilder=t.opts.animationBuilder||e&&e.animationBuilder),o.animationBuilder=t.opts.animationBuilder);const i=n?await this.transition(e,o,t):{hasCompleted:!0,requiresTransition:!1};this.success(i,t),this.ionNavDidChange.emit()}catch(o){this.failed(o,t)}this.isTransitioning=!1,this.nextTrns()}prepareTI(t){const o=this.views.length;if(t.opts=t.opts||{},void 0===t.opts.delegate&&(t.opts.delegate=this.delegate),void 0!==t.removeView){h(void 0!==t.removeStart,"removeView needs removeStart"),h(void 0!==t.removeCount,"removeView needs removeCount");const o=this.views.indexOf(t.removeView);if(o<0)throw new Error("removeView was not found");t.removeStart+=o}void 0!==t.removeStart&&(t.removeStart<0&&(t.removeStart=o-1),t.removeCount<0&&(t.removeCount=o-t.removeStart),t.leavingRequiresTransition=t.removeCount>0&&t.removeStart+t.removeCount===o),t.insertViews&&((t.insertStart<0||t.insertStart>o)&&(t.insertStart=o),t.enteringRequiresTransition=t.insertStart===o);const e=t.insertViews;if(!e)return;h(e.length>0,"length can not be zero");const n=e.map(t=>t instanceof _?t:"component"in t?P(t.component,null===t.componentProps?void 0:t.componentProps):P(t,void 0)).filter(t=>null!==t);if(0===n.length)throw new Error("invalid views to insert");for(const i of n){i.delegate=t.opts.delegate;const o=i.nav;if(o&&o!==this)throw new Error("inserted view was already inserted");if(3===i.state)throw new Error("inserted view was already destroyed")}t.insertViews=n}getEnteringView(t,o){const e=t.insertViews;if(void 0!==e)return e[e.length-1];const n=t.removeStart;if(void 0!==n){const e=this.views,i=n+t.removeCount;for(let t=e.length-1;t>=0;t--){const s=e[t];if((t<n||t>=i)&&s!==o)return s}}}postViewInit(t,o,e){h(o||t,"Both leavingView and enteringView are null"),h(e.resolve,"resolve must be valid"),h(e.reject,"reject must be valid");const n=e.opts,i=e.insertViews,s=e.removeStart,r=e.removeCount;let a;if(void 0!==s&&void 0!==r){h(s>=0,"removeStart can not be negative"),h(r>=0,"removeCount can not be negative"),a=[];for(let e=0;e<r;e++){const n=this.views[e+s];n&&n!==t&&n!==o&&a.push(n)}n.direction=n.direction||"back"}const c=this.views.length+(void 0!==i?i.length:0)-(void 0!==r?r:0);if(h(c>=0,"final balance can not be negative"),0===c)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(i){let t=e.insertStart;for(const o of i)this.insertViewAt(o,t),t++;e.enteringRequiresTransition&&(n.direction=n.direction||"forward")}if(a&&a.length>0){for(const t of a)l(t.element,m),l(t.element,w),l(t.element,p);for(const t of a)this.destroyView(t)}}async transition(t,o,e){const n=e.opts,i=n.progressAnimation?t=>this.sbAni=t:void 0,a=s(this),c=t.element,h=o&&o.element,u=Object.assign({mode:a,showGoBack:this.canGoBackSync(t),baseEl:this.el,animationBuilder:this.animation||n.animationBuilder||r.get("navAnimation"),progressCallback:i,animated:this.animated&&r.getBoolean("animated",!0),enteringEl:c,leavingEl:h},n),{hasCompleted:l}=await d(u);return this.transitionFinish(l,t,o,n)}transitionFinish(t,o,e,n){const i=t?o:e;return i&&this.cleanup(i),{hasCompleted:t,requiresTransition:!0,enteringView:o,leavingView:e,direction:n.direction}}insertViewAt(t,o){const e=this.views,n=e.indexOf(t);n>-1?(h(t.nav===this,"view is not part of the nav"),e.splice(o,0,e.splice(n,1)[0])):(h(!t.nav,"nav is used"),t.nav=this,e.splice(o,0,t))}removeView(t){h(2===t.state||3===t.state,"view state should be loaded or destroyed");const o=this.views,e=o.indexOf(t);h(e>-1,"view must be part of the stack"),e>=0&&o.splice(e,1)}destroyView(t){t._destroy(),this.removeView(t)}cleanup(t){if(this.destroyed)return;const o=this.views,e=o.indexOf(t);for(let n=o.length-1;n>=0;n--){const t=o[n],i=t.element;i&&(n>e?(l(i,p),this.destroyView(t)):n<e&&f(i,!0))}}canStart(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.animationEnabled&&this.canGoBackSync()}onStart(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)}onMove(t){this.sbAni&&this.sbAni.progressStep(t)}onEnd(t,o,e){if(this.sbAni){this.animationEnabled=!1,this.sbAni.onFinish(()=>{this.animationEnabled=!0},{oneTimeCallback:!0});let n=t?-.001:.001;t?n+=c([0,0],[.32,.72],[0,1],[1,1],o)[0]:(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),n+=c([0,0],[1,0],[.68,.28],[1,1],o)[0]),this.sbAni.progressEnd(t?1:0,n,e)}}render(){return o("slot",null)}get el(){return n(this)}static get watchers(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}}};R.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";const k=class{constructor(o){t(this,o),this.ionRouteDataChanged=i(this,"ionRouteDataChanged",7),this.url=""}onUpdate(t){this.ionRouteDataChanged.emit(t)}onComponentProps(t,o){if(t===o)return;const e=t?Object.keys(t):[],n=o?Object.keys(o):[];if(e.length===n.length){for(const i of e)if(t[i]!==o[i])return void this.onUpdate(t)}else this.onUpdate(t)}connectedCallback(){this.ionRouteDataChanged.emit()}static get watchers(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}},E=t=>"/"+t.filter(t=>t.length>0).join("/"),S=t=>{if(null==t)return[""];const o=t.split("?")[0].split("/").map(t=>t.trim()).filter(t=>t.length>0);return 0===o.length?[""]:o},T=async(t,o,e,n,i=!1,s)=>{try{const r=L(t);if(n>=o.length||!r)return i;await r.componentOnReady();const a=o[n],c=await r.setRouteId(a.id,a.params,e,s);return c.changed&&(e="root",i=!0),i=await T(c.element,o,e,n+1,i,s),c.markVisible&&await c.markVisible(),i}catch(r){return console.error(r),!1}},O=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",L=t=>{if(!t)return;if(t.matches(O))return t;return t.querySelector(O)||void 0},V=(t,o)=>o.find(o=>((t,o)=>{const{from:e,to:n}=o;if(void 0===n)return!1;if(e.length>t.length)return!1;for(let i=0;i<e.length;i++){const o=e[i];if("*"===o)return!0;if(o!==t[i])return!1}return e.length===t.length})(t,o)),U=(t,o)=>{const e=Math.min(t.length,o.length);let n=0;for(;n<e&&t[n].toLowerCase()===o[n].id;n++);return n},B=(t,o)=>{const e=new N(t);let n,i=!1;for(let s=0;s<o.length;s++){const t=o[s].path;if(""===t[0])i=!0;else{for(const o of t){const t=e.next();if(":"===o[0]){if(""===t)return null;n=n||[],(n[s]||(n[s]={}))[o.slice(1)]=t}else if(t!==o)return null}i=!1}}return i&&i!==(""===e.next())?null:n?o.map((t,o)=>({id:t.id,path:t.path,params:D(t.params,n[o])})):o},D=(t,o)=>!t&&o?o:t&&!o?t:t&&o?Object.assign(Object.assign({},t),o):void 0,I=(t,o)=>{let e=null,n=0;for(const i of o){const o=B(t,i);if(null!==o){const t=A(o);t>n&&(n=t,e=o)}}return e},A=t=>{let o=1,e=1;for(const n of t)for(const t of n.path)":"===t[0]?o+=Math.pow(1,e):""!==t&&(o+=Math.pow(2,e)),e++;return o};class N{constructor(t){this.path=t.slice()}next(){return this.path.length>0?this.path.shift():""}}const x=t=>Array.from(t.children).filter(t=>"ION-ROUTE-REDIRECT"===t.tagName).map(t=>{const o=q(t,"to");return{from:S(q(t,"from")),to:null==o?void 0:S(o)}}),G=t=>z(W(t)),W=(t,o=t)=>Array.from(o.children).filter(t=>"ION-ROUTE"===t.tagName&&t.component).map(o=>{const e=q(o,"component");if(null==e)throw new Error("component missing in ion-route");return{path:S(q(o,"url")),id:e.toLowerCase(),params:o.componentProps,beforeLeave:o.beforeLeave,beforeEnter:o.beforeEnter,children:W(t,o)}}),q=(t,o)=>o in t?t[o]:t.hasAttribute(o)?t.getAttribute(o):null,z=t=>{const o=[];for(const e of t)H([],o,e);return o},H=(t,o,e)=>{const n=t.slice();if(n.push({id:e.id,path:e.path,params:e.params,beforeLeave:e.beforeLeave,beforeEnter:e.beforeEnter}),0!==e.children.length)for(const i of e.children)H(n,o,i);else o.push(n)},M=class{constructor(o){t(this,o),this.ionRouteWillChange=i(this,"ionRouteWillChange",7),this.ionRouteDidChange=i(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}async componentWillLoad(){console.debug("[ion-router] router will load"),await(L(document.body)?Promise.resolve():new Promise(t=>{window.addEventListener("ionNavWillLoad",t,{once:!0})})),console.debug("[ion-router] found nav"),await this.onRoutesChanged()}componentDidLoad(){window.addEventListener("ionRouteRedirectChanged",u(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",u(this.onRoutesChanged.bind(this),100))}async onPopState(){const t=this.historyDirection();let o=this.getPath();const e=await this.runGuards(o);return!0!==e?("object"==typeof e&&(o=S(e.redirect)),!1):(console.debug("[ion-router] URL changed -> update nav",o,t),this.writeNavStateRoot(o,t))}onBackButton(t){t.detail.register(0,t=>{this.back(),t()})}async canTransition(){const t=await this.runGuards();return!0===t||"object"==typeof t&&t.redirect}async push(t,o="forward",e){t.startsWith(".")&&(t=new URL(t,window.location.href).pathname),console.debug("[ion-router] URL pushed -> updating nav",t,o);let n=S(t),i=t.split("?")[1];const s=await this.runGuards(n);if(!0!==s){if("object"!=typeof s)return!1;n=S(s.redirect),i=s.redirect.split("?")[1]}return this.setPath(n,o,i),this.writeNavStateRoot(n,o,e)}back(){return window.history.back(),Promise.resolve(this.waitPromise)}async printDebug(){console.debug("CURRENT PATH",this.getPath()),console.debug("PREVIOUS PATH",this.previousPath),(t=>{console.group(`[ion-core] ROUTES[${t.length}]`);for(const o of t){const t=[];o.forEach(o=>t.push(...o.path));const e=o.map(t=>t.id);console.debug("%c "+E(t),"font-weight: bold; padding-left: 20px","=>\t",`(${e.join(", ")})`)}console.groupEnd()})(G(this.el)),(t=>{console.group(`[ion-core] REDIRECTS[${t.length}]`);for(const o of t)o.to&&console.debug("FROM: ","$c "+E(o.from),"font-weight: bold"," TO: ","$c "+E(o.to),"font-weight: bold");console.groupEnd()})(x(this.el))}async navChanged(t){if(this.busy)return console.warn("[ion-router] router is busy, navChanged was cancelled"),!1;const{ids:o,outlet:e}=await(async()=>{const t=[];let o,e=window.document.body;for(;o=L(e),o;){const n=await o.getRouteId();if(!n)break;e=n.element,n.element=void 0,t.push(n)}return{ids:t,outlet:o}})(),n=((t,o)=>{let e=null,n=0;const i=t.map(t=>t.id);for(const s of o){const t=U(i,s);t>n&&(e=s,n=t)}return e?e.map((o,e)=>({id:o.id,path:o.path,params:D(o.params,t[e]&&t[e].params)})):null})(o,G(this.el));if(!n)return console.warn("[ion-router] no matching URL for ",o.map(t=>t.id)),!1;const i=(t=>{const o=[];for(const e of t)for(const t of e.path)if(":"===t[0]){const n=e.params&&e.params[t.slice(1)];if(!n)return null;o.push(n)}else""!==t&&o.push(t);return o})(n);return i?(console.debug("[ion-router] nav changed -> update URL",o,i),this.setPath(i,t),await this.safeWriteNavState(e,n,"root",i,null,o.length),!0):(console.warn("[ion-router] router could not match path because some required param is missing"),!1)}onRedirectChanged(){const t=this.getPath();t&&V(t,x(this.el))&&this.writeNavStateRoot(t,"root")}onRoutesChanged(){return this.writeNavStateRoot(this.getPath(),"root")}historyDirection(){const t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href));const o=t.history.state,e=this.lastState;return this.lastState=o,o>e||o>=e&&e>0?"forward":o<e?"back":"root"}async writeNavStateRoot(t,o,e){if(!t)return console.error("[ion-router] URL is not part of the routing set"),!1;const n=x(this.el),i=V(t,n);let s=null;i&&(this.setPath(i.to,o),s=i.from,t=i.to);const r=G(this.el),a=I(t,r);return a?this.safeWriteNavState(document.body,a,o,t,s,0,e):(console.error("[ion-router] the path does not match any route"),!1)}async safeWriteNavState(t,o,e,n,i,s=0,r){const a=await this.lock();let c=!1;try{c=await this.writeNavState(t,o,e,n,i,s,r)}catch(h){console.error(h)}return a(),c}async lock(){const t=this.waitPromise;let o;return this.waitPromise=new Promise(t=>o=t),void 0!==t&&await t,o}async runGuards(t=this.getPath(),o=S(this.previousPath)){if(!t||!o)return!0;const e=G(this.el),n=I(t,e),i=I(o,e),s=n&&n[n.length-1].beforeEnter,r=i&&i[i.length-1].beforeLeave,a=!r||await r();if(!1===a||"object"==typeof a)return a;const c=!s||await s();return!1!==c&&"object"!=typeof c||c}async writeNavState(t,o,e,n,i,s=0,r){if(this.busy)return console.warn("[ion-router] router is busy, transition was cancelled"),!1;this.busy=!0;const a=this.routeChangeEvent(n,i);a&&this.ionRouteWillChange.emit(a);const c=await T(t,o,e,s,!1,r);return this.busy=!1,c&&console.debug("[ion-router] route changed",n),a&&this.ionRouteDidChange.emit(a),c}setPath(t,o,e){this.state++,((t,o,e,n,i,s,r)=>{let a=E([...S(this.root),...n]);e&&(a="#"+a),void 0!==r&&(a=a+"?"+r),"forward"===i?t.pushState(s,"",a):t.replaceState(s,"",a)})(window.history,0,this.useHash,t,o,this.state,e)}getPath(){return((t,o)=>{let e=t.pathname;if(this.useHash){const o=t.hash;e="#"===o[0]?o.slice(1):""}return((t,o)=>{if(t.length>o.length)return null;if(t.length<=1&&""===t[0])return o;for(let e=0;e<t.length;e++)if(t[e].length>0&&t[e]!==o[e])return null;return o.length===t.length?[""]:o.slice(t.length)})(S(o),S(e))})(window.location,this.root)}routeChangeEvent(t,o){const e=this.previousPath,n=E(t);return this.previousPath=n,n===e?null:{from:e,redirectedFrom:o?E(o):null,to:n}}get el(){return n(this)}};export{b as app_root,g as ion_app,R as ion_nav,k as ion_route,M as ion_router}