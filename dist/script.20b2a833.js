parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"k87A":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];exports.default=p;
},{}],"mpVp":[function(require,module,exports) {
"use strict";var t=e(require("./gallery-items.js"));function e(t){return t&&t.__esModule?t:{default:t}}var r=function(t){return t.map(function(t){var e=t.preview,r=t.original,n=t.description;return'<li class="gallery__item">\n        <a\n          class="gallery__link"\n          href="'.concat(r,'">\n          <img\n            class="gallery__image"\n            src="').concat(e,'"\n            data-source="').concat(r,'"\n            alt="').concat(n,'"\n          />\n        </a>\n      </li>')}).join("")},n=document.querySelector(".js-gallery"),i=r(t.default);n.insertAdjacentHTML("beforeend",i);var a=function(t){return t.original===c.getAttribute("src")},s=function(e){if("ArrowRight"===e.code||"ArrowLeft"===e.code){var r=t.default.findIndex(a);if("ArrowRight"===e.code?r+=1:r-=1,r<0)return c.setAttribute("src",t.default[t.default.length-1].original),void c.setAttribute("alt",t.default[t.default.length-1].description);r<t.default.length?(c.setAttribute("src",t.default[r].original),c.setAttribute("alt",t.default[r].description)):(c.setAttribute("src",t.default[0].original),c.setAttribute("alt",t.default[0].description))}};document.body.addEventListener("keydown",s),document.body.addEventListener("keydown",s);var o=document.querySelector(".js-lightbox"),c=o.querySelector(".lightbox__image"),l=function(t){t.preventDefault(),t.target.classList.contains("gallery__image")&&(o.classList.add("is-open"),c.setAttribute("src",t.target.dataset.source),c.setAttribute("alt",t.target.getAttribute("alt")))};n.addEventListener("click",l);var d=function(t){("close-lightbox"===t.target.getAttribute("data-action")||t.target.classList.contains("lightbox__content"))&&(o.classList.remove("is-open"),c.setAttribute("src",""))};document.body.addEventListener("click",d);var u=function(t){"Escape"===t.code&&(o.classList.remove("is-open"),c.setAttribute("src",""),o.insertAdjacentHTML("beforeend",'<i class="material-icons">close</i>'))};document.body.addEventListener("keydown",u),console.log(Hello);
},{"./gallery-items.js":"k87A"}]},{},["mpVp"], null)
//# sourceMappingURL=/script.20b2a833.js.map