import{r as s,h as i,H as r,c as e}from"./p-3f0415fb.js";import{g as n,c as t,i as o}from"./p-19388ec1.js";import{s as c}from"./p-e92dc8db.js";import{S as a}from"./p-4908cb84.js";const h=class{constructor(i){s(this,i)}componentWillLoad(){if(void 0===this.pullingIcon){const s=n(this),i=void 0!==this.el.style.webkitOverflowScrolling?"lines":"arrow-down";this.pullingIcon=t.get("refreshingIcon","ios"===s&&o("mobile")?t.get("spinner",i):"circular")}if(void 0===this.refreshingSpinner){const s=n(this);this.refreshingSpinner=t.get("refreshingSpinner",t.get("spinner","ios"===s?"lines":"circular"))}}render(){const s=this.pullingIcon,e=null!=s&&void 0!==a[s],t=n(this);return i(r,{class:t},i("div",{class:"refresher-pulling"},this.pullingIcon&&e&&i("div",{class:"refresher-pulling-icon"},i("div",{class:"spinner-arrow-container"},i("ion-spinner",{name:this.pullingIcon,paused:!0}),"md"===t&&"circular"===this.pullingIcon&&i("div",{class:"arrow-container"},i("ion-icon",{name:"caret-back-sharp"})))),this.pullingIcon&&!e&&i("div",{class:"refresher-pulling-icon"},i("ion-icon",{icon:this.pullingIcon,lazy:!1})),this.pullingText&&i("div",{class:"refresher-pulling-text",innerHTML:c(this.pullingText)})),i("div",{class:"refresher-refreshing"},this.refreshingSpinner&&i("div",{class:"refresher-refreshing-icon"},i("ion-spinner",{name:this.refreshingSpinner})),this.refreshingText&&i("div",{class:"refresher-refreshing-text",innerHTML:c(this.refreshingText)})))}get el(){return e(this)}};export{h as ion_refresher_content}