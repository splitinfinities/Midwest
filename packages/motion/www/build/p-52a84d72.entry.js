import{r as e,h as t,g as s}from"./p-7dc2349f.js";import"./p-34a7377e.js";import{p as i}from"./p-6ab612a8.js";const r=class{constructor(t){e(this,t),this.initialOriginX=50,this.initialOriginY=30,this.itemZ=10,this.cameraSpeed=150,this.cameraZ=-1,this.scenePerspective=1,this.distanceFromTop=0,this.distanceFromBottom=0,this.perspectiveOrigin={x:0,y:0,maxGap:10}}randomFloat(e,t){return Math.floor(Math.random()*(t-e))+e}componentWillLoad(){this.distanceFromTop=this.element.getBoundingClientRect().top,this.distanceFromBottom=this.element.getBoundingClientRect().bottom,this.prepare()}prepare(){this.sections=Array.from(this.element.querySelectorAll("midwest-scroll-z-section")),i.properties.set({"--scenePerspective":this.scenePerspective,"--scenePerspectiveOriginX":this.initialOriginX,"--scenePerspectiveOriginY":this.initialOriginY,"--itemZ":this.itemZ,"--cameraSpeed":this.cameraSpeed,"--cameraZ":this.cameraZ,"--sectionHeight":0},document.documentElement),this.perspectiveOrigin={x:parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--scenePerspectiveOriginX")),y:parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--scenePerspectiveOriginY")),maxGap:10},this.setSceneHeight(),this.scatter()}async scatter(){this.sections.forEach((e,t)=>{const s=`calc(${this.randomFloat(-30,30)}rem + 50%)`,i=`calc(${this.randomFloat(-30,30)}rem + 50%)`;e.style.setProperty("transform",`translate3D(${s}, ${i}, calc(var(--itemZ) * var(--cameraSpeed) * ${t} * -1px))`)})}setSceneHeight(){const e=this.sections.length,t=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--itemZ")),s=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--scenePerspective")),i=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--cameraSpeed")),r=window.innerHeight+s*i+t/2*i*e;document.documentElement.style.setProperty("--sectionHeight",""+r)}moveCamera(){this.distanceFromTop=this.element.getBoundingClientRect().top,this.distanceFromBottom=this.element.getBoundingClientRect().bottom;const e=window.pageYOffset-this.distanceFromTop;e>=0?document.documentElement.style.setProperty("--cameraZ",""+e):document.documentElement.style.setProperty("--cameraZ","-1")}moveCameraAngle(e){const t=100*(e.clientX-window.innerWidth/2)/(window.innerWidth/2)*-1,s=100*(e.clientY-window.innerHeight/2)/(window.innerHeight/2)*-1,i=this.perspectiveOrigin.y+s*this.perspectiveOrigin.maxGap/100;document.documentElement.style.setProperty("--scenePerspectiveOriginX",""+(this.perspectiveOrigin.x+t*this.perspectiveOrigin.maxGap/100)),document.documentElement.style.setProperty("--scenePerspectiveOriginY",""+i)}render(){return t("div",{class:"container"},t("div",{class:"scene"},t("slot",null)))}get element(){return s(this)}};r.style=":host,:host *,:host *::before,:host *::after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block}:host{contain:content;height:calc(var(--sectionHeight) * 1px);display:block;opacity:calc(var(--cameraZ) + 1);will-change:opacity;-webkit-transition:opacity 200ms ease 0s;transition:opacity 200ms ease 0s}:host .container{position:fixed;top:0;left:0;width:100%;height:100%;-webkit-perspective:calc(var(--scenePerspective) * var(--cameraSpeed) * 1px);perspective:calc(var(--scenePerspective) * var(--cameraSpeed) * 1px);-webkit-perspective-origin:calc(var(--scenePerspectiveOriginX) * 1%) calc(var(--scenePerspectiveOriginY) * 1%);perspective-origin:calc(var(--scenePerspectiveOriginX) * 1%) calc(var(--scenePerspectiveOriginY) * 1%);will-change:perspective-origin;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}:host .scene{position:absolute;top:0;height:100vh;width:100%;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:translateZ(calc(var(--cameraZ) * 1px));transform:translateZ(calc(var(--cameraZ) * 1px));will-change:transform}:host ::slotted(midwest-scroll-z-section){position:absolute;display:block;width:100%;top:40%;z-index:2}@media only screen and (min-width: 600px){:host ::slotted(midwest-scroll-z-section){width:45%}}";export{r as midwest_scroll_z_root}