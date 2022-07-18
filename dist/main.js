(()=>{"use strict";var e={426:(e,n,r)=>{r.d(n,{Z:()=>p});var t=r(81),o=r.n(t),i=r(645),a=r.n(i),c=r(667),d=r.n(c),l=new URL(r(302),r.b),s=a()(o());s.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap);"]);var u=d()(l);s.push([e.id,":root {\r\n    --activeTabColor: #101b39;\r\n    --backgroundColor: #333136;\r\n    --cardColor: #6f6d72;\r\n    --tabColor: #b4b1b8;\r\n    --fontColor: #e9e8ee;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    outline: 0;\r\n    font-family: 'Roboto';\r\n    letter-spacing: 4px;\r\n    color: var(--fontColor);\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n    width: 100vw;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: url("+u+");\r\n    background-size: cover;\r\n}\r\n\r\n#navContainer {\r\n    flex: 0.15;\r\n    background-color: #333136bb;\r\n    box-shadow: 0px 3.5px #333136df;\r\n    display: grid;\r\n    grid-template-columns: clamp(300px, 15vw, 15vw) auto;\r\n    grid-template-rows: 100%;\r\n    align-items: center;\r\n}\r\n\r\n#navContainer > div:first-child{\r\n    /* For The Logo Container */\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#navContainer > div:nth-child(2){\r\n    /* For The Tabs Container */\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: right;\r\n}\r\n\r\n.tabContainer{\r\n    height: 100%;\r\n    width: fit-content;\r\n    padding-left: 1.5vw;\r\n    padding-right: 1.5vw;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: clamp(0.85rem, 1.1vw, 1.1vw);\r\n}\r\n\r\n.tabContainer:hover{\r\n    background-color: #333136c7;\r\n    cursor: pointer;\r\n}\r\n\r\n#banner {\r\n    flex: 1;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#banner > div:nth-child(1) {\r\n    width: clamp(250px, 40%, 40%);\r\n    height: 80%;\r\n    border-radius: 6px;\r\n    -webkit-border-radius: 6px;\r\n    -moz-border-radius: 6px;\r\n    -ms-border-radius: 6px;\r\n    -o-border-radius: 6px;\r\n    background-color: #4644489e;\r\n    display: grid;\r\n    grid-template-rows: 1fr 8fr;\r\n    grid-template-columns: 100%;\r\n}\r\n\r\n#banner > div > div:nth-child(1) {\r\n    color: white;\r\n    display: flex;\r\n    justify-content: right;\r\n    align-items: center;\r\n    height: 100%;\r\n}\r\n\r\n#banner > div > div:nth-child(1) > div:hover{\r\n    background-color: #333136c7;\r\n    cursor: pointer;\r\n}\r\n\r\n.menuTabOn{\r\n    background-color: #333136c7;\r\n}\r\n\r\n\r\n#menuContent {\r\n    display: grid;\r\n    grid-template-columns: 10fr 3px 10fr;\r\n    column-gap: 10px;\r\n\r\n}\r\n\r\n.contentSide {\r\n    display: grid;\r\n    grid-template-columns: auto auto;\r\n    padding: 10px;\r\n}\r\n\r\n#menuNav {\r\n    border-bottom: 1px solid white;\r\n}",""]);const p=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);t&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),r&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=r):s[2]=r),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),n.push(s))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var i={},a=[],c=0;c<e.length;c++){var d=e[c],l=t.base?d[0]+t.base:d[0],s=i[l]||0,u="".concat(l," ").concat(s);i[l]=s+1;var p=r(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=o(m,t);t.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,o){var i=t(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=r(i[a]);n[c].references--}for(var d=t(e,o),l=0;l<i.length;l++){var s=r(i[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}i=d}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},302:(e,n,r)=>{e.exports=r.p+"6ef6db913df93a631506.jpg"}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={id:t,exports:{}};return e[t](i,i.exports,r),i.exports}r.m=e,r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var n=r.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.b=document.baseURI||self.location.href,r.nc=void 0,(()=>{function e(){let e=document.querySelector("#menuContent > div:nth-child(1)"),n=document.querySelector("#menuContent > div:nth-child(3)");for(;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)n.removeChild(n.firstChild)}function n(e){let n=Object.keys(e),r=document.querySelector("#menuContent > div:nth-child(1)"),t=document.querySelector("#menuContent > div:nth-child(3)"),o=0;n.forEach((i=>{let a=document.createElement("p");a.innerText=i,a.style.maxWidth="80%";let c=document.createElement("p");c.innerText=e[i],c.style.textAlign="right",o<n.length/2?(r.appendChild(a),r.appendChild(c)):(t.appendChild(a),t.appendChild(c)),o++}))}function t(){e(),n({Hamburger:"$7.50",Cheeseburger:"$8.50","4oz Sirloin":"$9.50",Ribeye:"$10.50",BLT:"$8.00","Patty Melt":"$8.00","PB & J":"$5.00","Grilled Cheese":"$5.00","Chicken Noodle Soup":"$7.00","Sausage and Bacon":"$8.50"})}var o=r(379),i=r.n(o),a=r(795),c=r.n(a),d=r(569),l=r.n(d),s=r(565),u=r.n(s),p=r(216),m=r.n(p),h=r(589),f=r.n(h),v=r(426),g={};g.styleTagTransform=f(),g.setAttributes=u(),g.insert=l().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=m(),i()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals,function(){let e=document.querySelector("#navContainer"),n=document.createElement("div"),r=document.createElement("div");e.appendChild(n),e.appendChild(r);let t=document.createElement("h2");t.innerText="Logo Here",n.appendChild(t),Object.keys({menu:"linkToMenu",catering:"linkToCatering",about:"linkToAbout","contact us":"linkToContactUs"}).forEach((e=>{let n=document.createElement("div"),t=document.createElement("h3");t.innerText=e.toUpperCase(),n.classList.add("tabContainer"),n.appendChild(t),r.appendChild(n)}))}(),function(){let e=document.querySelector("#banner"),n=document.createElement("div"),r=document.createElement("div");r.id="menuNav";let t=document.createElement("div");t.id="menuContent",["Meat","Vegan","Drinks"].forEach((e=>{let n=document.createElement("div"),t=document.createElement("h4");t.innerText=e,n.style.cssText="display: flex; justify-content: center; align-items: center; padding-left: 0.625vw; padding-right: 0.625vw; height: 100%",n.appendChild(t),r.appendChild(n)}));let o=document.createElement("div");o.classList.add("contentSide");let i=document.createElement("div");i.classList.add("contentSide");let a=document.createElement("div");a.style.cssText="background-color: white; width: 1px; opacity: 80%; margin-top: 1px;",t.appendChild(o),t.appendChild(a),t.appendChild(i),n.appendChild(r),n.appendChild(t),e.appendChild(n)}(),t();let b=document.querySelector("#banner > div > div :first-child"),y=document.querySelector("#banner > div > div :nth-child(2)"),C=document.querySelector("#banner > div > div :nth-child(3)");b.addEventListener("click",(()=>{t(),b.classList.add("menuTabOn"),y.classList.remove("menuTabOn"),C.classList.remove("menuTabOn")})),y.addEventListener("click",(()=>{e(),n({"Caesar Salad":"$7.50",Brocoli:"$5.50","Brussel Sprouts":"$5.50","Green Tomatoes":"$6.00",Banana:"$2.00",Mushrooms:"$6.00"}),b.classList.remove("menuTabOn"),y.classList.add("menuTabOn"),C.classList.remove("menuTabOn")})),C.addEventListener("click",(()=>{e(),n({Coke:"$2.50",Pepsi:"$2.50",Sprite:"$2.50","Unsweetened Tea":"$2.00","Sweet Tea":"$2.00",Lemonade:"$3.00",Milk:"$2.00","Orange Juice":"$2.00"}),b.classList.remove("menuTabOn"),y.classList.remove("menuTabOn"),C.classList.add("menuTabOn")}))})()})();