parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"FZeS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Fragment=O,exports.className=w,exports.jsxs=exports.jsx=exports.h=exports.createElement=j,exports.createFactory=k,exports.useRef=exports.createRef=l,exports.isRef=f,exports.useCallback=exports.memo=t,exports.preventDefault=D,exports.stopPropagation=E,exports.useClassList=I,exports.useMemo=p,exports.useText=T,exports.SVGNamespace=exports.default=void 0;const e=Object.keys;function t(e){return e}function n(e){return"boolean"==typeof e}function r(e){return e&&"number"==typeof e.nodeType}function o(e){return"string"==typeof e}function s(e){return"number"==typeof e}function a(e){return"object"==typeof e?null!==e:i(e)}function i(e){return"function"==typeof e}function c(e){return a(e)&&"number"==typeof e.length&&"number"!=typeof e.nodeType}function u(t,n){if(t)for(const r of e(t))n(t[r],r)}function l(){return Object.seal({current:null})}function f(e){return a(e)&&"current"in e}function p(e){return e()}function d(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}const m={animationIterationCount:0,borderImageOutset:0,borderImageSlice:0,borderImageWidth:0,boxFlex:0,boxFlexGroup:0,boxOrdinalGroup:0,columnCount:0,columns:0,flex:0,flexGrow:0,flexPositive:0,flexShrink:0,flexNegative:0,flexOrder:0,gridArea:0,gridRow:0,gridRowEnd:0,gridRowSpan:0,gridRowStart:0,gridColumn:0,gridColumnEnd:0,gridColumnSpan:0,gridColumnStart:0,fontWeight:0,lineClamp:0,lineHeight:0,opacity:0,order:0,orphans:0,tabSize:0,widows:0,zIndex:0,zoom:0,fillOpacity:0,floodOpacity:0,stopOpacity:0,strokeDasharray:0,strokeDashoffset:0,strokeMiterlimit:0,strokeOpacity:0,strokeWidth:0};function x(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}const g=["Webkit","ms","Moz","O"];e(m).forEach(e=>{g.forEach(t=>{m[x(t,e)]=0})});const h="http://www.w3.org/2000/svg";exports.SVGNamespace=h;const y="http://www.w3.org/1999/xlink",b="http://www.w3.org/XML/1998/namespace";function v(e){return!n(e)&&null!=e}function w(t){return Array.isArray(t)?t.map(w).filter(Boolean).join(" "):a(t)?e(t).filter(e=>t[e]).join(" "):v(t)?""+t:""}const C={animate:0,circle:0,clipPath:0,defs:0,desc:0,ellipse:0,feBlend:0,feColorMatrix:0,feComponentTransfer:0,feComposite:0,feConvolveMatrix:0,feDiffuseLighting:0,feDisplacementMap:0,feDistantLight:0,feFlood:0,feFuncA:0,feFuncB:0,feFuncG:0,feFuncR:0,feGaussianBlur:0,feImage:0,feMerge:0,feMergeNode:0,feMorphology:0,feOffset:0,fePointLight:0,feSpecularLighting:0,feSpotLight:0,feTile:0,feTurbulence:0,filter:0,foreignObject:0,g:0,image:0,line:0,linearGradient:0,marker:0,mask:0,metadata:0,path:0,pattern:0,polygon:0,polyline:0,radialGradient:0,rect:0,stop:0,svg:0,switch:0,symbol:0,text:0,textPath:0,tspan:0,use:0,view:0};function k(e){return j.bind(null,e)}function O(e){const t=document.createDocumentFragment();return R(e.children,t),t}function j(e,t,...n){if((o(t)||Array.isArray(t))&&(n.unshift(t),t={}),(t=t||{}).namespaceURI||0!==C[e]||(t=Object.assign({},t,{namespaceURI:h})),null!=t.children&&!n.length){var r=t;({children:n}=r),t=d(r,["children"])}let s;return o(e)?(P(t,s=t.namespaceURI?document.createElementNS(t.namespaceURI,e):document.createElement(e)),S(n,s)):i(e)&&(a(e.defaultProps)&&(t=Object.assign({},e.defaultProps,{},t)),s=e(Object.assign({},t,{children:n}))),f(t.ref)?t.ref.current=s:i(t.ref)&&t.ref(s),s}function S(e,t){c(e)?R(e,t):o(e)||s(e)?t.appendChild(document.createTextNode(e)):null===e?t.appendChild(document.createComment("")):r(e)&&t.appendChild(e)}function R(e,t){for(const n of e)S(n,t);return t}function L(e){return e.replace(/[A-Z\d]/g,e=>":"+e.toLowerCase())}function A(e,t,n){switch(e){case"xlinkActuate":case"xlinkArcrole":case"xlinkHref":case"xlinkRole":case"xlinkShow":case"xlinkTitle":case"xlinkType":return void M(n,y,L(e),t);case"xmlnsXlink":return void F(n,L(e),t);case"xmlBase":case"xmlLang":case"xmlSpace":return void M(n,b,L(e),t)}switch(e){case"htmlFor":return void F(n,"for",t);case"dataset":return void u(t,(e,t)=>{null!=e&&(n.dataset[t]=e)});case"innerHTML":case"innerText":case"textContent":return void(n[e]=t);case"spellCheck":return void(n.spellcheck=t);case"class":case"className":return void(i(t)?t(n):F(n,"class",w(t)));case"ref":case"namespaceURI":return;case"style":if(a(t))return void u(t,(e,t)=>{s(e)&&0!==m[t]?n.style[t]=e+"px":n.style[t]=e})}i(t)?"o"===e[0]&&"n"===e[1]&&(n[e.toLowerCase()]=t):!0===t?F(n,e,""):!1!==t&&null!=t&&F(n,e,t)}function F(e,t,n){e.setAttribute(t,n)}function M(e,t,n,r){e.setAttributeNS(t,n,r)}function P(t,n){for(const r of e(t))A(r,t[r],n);return n}function T(e){const t=new Text;function n(e){t.textContent=e}return Object.defineProperty(t,"toString",{value(){return this.textContent}}),null!=e&&n(e),[t,n]}function I(e){const t=document.createElement("div");null!=e&&(t.className=w(e));let n=t.classList;function r(e){e.className=n.value,n=e.classList}return Object.defineProperties(r,Object.getOwnPropertyDescriptors({get size(){return n.length},get value(){return n.value},add(...e){n.add(...e)},remove(...e){n.remove(...e)},toggle(e,t){n.toggle(e,t)},contains:e=>n.contains(e)})),r}var N={createElement:j,Fragment:O};function D(e){return e.preventDefault(),e}function E(e){return e.stopPropagation(),e}var G=N;exports.default=G;
},{}],"Urtv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Component=void 0;class e extends HTMLElement{constructor(e){super(),this.shadow=this.attachShadow({mode:"open"}),e&&(this.state=e),this.update()}setState(e){this.state=e,this.update()}update(){const e=this.render();if(!(e instanceof HTMLElement))throw new Error("The render function doesn't return an HTMLElement");this.shadow.innerHTML="",this.shadow.append(e)}render(){const e=document.createElement("p");return e.innerText="This component does not contain any content",console.warn("A component does not contain any content"),e}}exports.Component=e;
},{}],"xtbm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MutationComponent=void 0;var t=require("./component.js");class e extends t.Component{constructor(t){super(t),this.mutationConfig={attributes:!0},this.observer=new MutationObserver(()=>this.update()),this.observer.observe(this,this.mutationConfig)}}exports.MutationComponent=e;
},{"./component.js":"Urtv"}],"z0LU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.html=void 0;const e=(e,...t)=>{const r=document.createElement("div");if(r.innerHTML=e.reduce((e,r,o)=>e+r+(t[o]?t[o]:""),"").replace("\t",""),1!=r.childElementCount)throw new Error("HTML can't have more or less than one root node.");return r.children[0]};exports.html=e;
},{}],"Md9C":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"MutationComponent",{enumerable:!0,get:function(){return e.MutationComponent}}),Object.defineProperty(exports,"Component",{enumerable:!0,get:function(){return t.Component}}),Object.defineProperty(exports,"html",{enumerable:!0,get:function(){return n.html}});var e=require("./mutationComponent.js"),t=require("./component.js"),n=require("./html.js");
},{"./mutationComponent.js":"xtbm","./component.js":"Urtv","./html.js":"z0LU"}],"vYuo":[function(require,module,exports) {
var __dirname = "/home/runner/work/stera/stera/tmp/home";
var r="/home/runner/work/stera/stera/tmp/home";function e(e){return{src:"".concat(r,"/").concat(e),tmp:"../tmp/".concat(e),name:e}}module.exports={home:"home",static:[e("card"),e("counter"),e("nav"),e("progressBar")],parcel:[e("jsx"),e("home")]};
},{}],"pWFO":[function(require,module,exports) {
"use strict";var e=r(require("jsx-dom")),t=require("stera"),n=r(require("./examples"));function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=y();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(r){a(c,t.Component);var o=f(c);function c(){return u(this,c),o.apply(this,arguments)}return i(c,[{key:"render",value:function(){return e.default.createElement("div",null,n.default.static.map(function(t){return e.default.createElement("square-link",{url:"./examples/".concat(t.name)},t.name)}),n.default.parcel.map(function(t){return e.default.createElement("square-link",{url:"./examples/".concat(t.name)},t.name)}))}}]),c}();customElements.define("example-links",b);var d=function(n){a(o,t.Component);var r=f(o);function o(){return u(this,o),r.apply(this,arguments)}return i(o,[{key:"render",value:function(){return e.default.createElement("a",{href:this.getAttribute("url"),style:{display:"block",textDecoration:"none",color:"black",background:"#e5e5e5",padding:"5px",margin:"10px",borderRadius:"3px"}},e.default.createElement("slot",null))}}]),o}();customElements.define("square-link",d);
},{"jsx-dom":"FZeS","stera":"Md9C","./examples":"vYuo"}]},{},["pWFO"], null)
//# sourceMappingURL=components.6afd6f7d.js.map