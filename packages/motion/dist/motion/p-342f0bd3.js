import{C as o,p as e,w as t,a as n,d as s,N as r}from"./p-7dc2349f.js";const a="undefined"!=typeof Deno,p=!(a||"undefined"==typeof global||"function"!=typeof require||!global.process||"string"!=typeof __filename||global.origin&&"string"==typeof global.origin),i=(a&&Deno,p?process:a&&Deno,p?process:a&&Deno,()=>o&&o.supports&&o.supports("color","var(--c)")?n():__sc_import_motion("./p-24fc4ba9.js").then(()=>(e.o=t.__cssshim)?(!1).i():0)),c=()=>{e.o=t.__cssshim;const o=Array.from(s.querySelectorAll("script")).find(o=>RegExp(`/${r}(\\.esm)?\\.js($|\\?|#)`).test(o.src)||o.getAttribute("data-stencil-namespace")===r),a=o["data-opts"]||{};return"onbeforeload"in o&&!history.scrollRestoration?{then(){}}:(a.resourcesUrl=new URL(".",new URL(o.getAttribute("data-resources-url")||o.src,t.location.href)).href,m(a.resourcesUrl,o),t.customElements?n(a):__sc_import_motion("./p-46109683.js").then(()=>a))},m=(o,e)=>{const n="__sc_import_"+r.replace(/\s|-/g,"_");try{t[n]=Function("w","return import(w);//"+Math.random())}catch(a){const r=new Map;t[n]=a=>{const p=new URL(a,o).href;let i=r.get(p);if(!i){const o=s.createElement("script");o.type="module",o.crossOrigin=e.crossOrigin,o.src=URL.createObjectURL(new Blob([`import * as m from '${p}'; window.${n}.m = m;`],{type:"application/javascript"})),i=new Promise(e=>{o.onload=()=>{e(t[n].m),o.remove()}}),r.set(p,i),s.head.appendChild(o)}return i}}};export{i as a,c as p}