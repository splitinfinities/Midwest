import{r as t,h as i,g as n}from"./p-7dc2349f.js";const o=class{constructor(i){t(this,i),this.float=!1,this.min=0,this.max=100,this.sizes=!1,this.colors=!1}componentWillLoad(){const t=this.element.querySelectorAll("*");Array.from(t).forEach(t=>{const i=this.randomFloat(),n=this.randomFloat();t.setAttribute("style",`top: ${i}%; left: ${n}%`),this.colors&&t.classList.add("fs"+this.fontScale()),this.sizes&&t.classList.add(`theme-${this.colorSwatch()}${this.colorScale()}`)})}randomFloat(){return this.min+Math.random()*(this.max+1-this.min)}randomNumber(t=2){return Math.floor(Math.random()*t)+1}fontScale(){return this.randomNumber(6)}colorScale(){return this.randomNumber(10)}colorSwatch(){return 1===this.randomNumber()?"base":"complement"}render(){return i("slot",null)}get element(){return n(this)}};o.style=":host,:host *,:host *::before,:host *::after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block}:host{contain:content;position:relative;display:contents;width:100%;height:100%}:host ::slotted(*){position:absolute}:host([float]) ::slotted(*:nth-of-type(3n+1)){-webkit-animation-direction:alternate;animation-direction:alternate}:host([float]) ::slotted(*:nth-of-type(3n+2)){animation-direction:reverse}:host([float]) ::slotted(*:nth-of-type(3n+3)){animation-direction:alternate-reverse}:host([float]) ::slotted(*:nth-of-type(5n+1)){-webkit-animation:floating-x 10s infinite;animation:floating-x 10s infinite}:host([float]) ::slotted(*:nth-of-type(5n+2)){-webkit-animation:floating-x-spin 15s infinite;animation:floating-x-spin 15s infinite}:host([float]) ::slotted(*:nth-of-type(5n+3)){-webkit-animation:floating-x-full-spin 35s infinite;animation:floating-x-full-spin 35s infinite}:host([float]) ::slotted(*:nth-of-type(5n+4)){-webkit-animation:floating-x-full-spin-rel 20s infinite;animation:floating-x-full-spin-rel 20s infinite}:host([float]) ::slotted(*:nth-of-type(5n+5)){-webkit-animation:floating-x-full-spin 25s infinite;animation:floating-x-full-spin 25s infinite}";export{o as midwest_scatter}