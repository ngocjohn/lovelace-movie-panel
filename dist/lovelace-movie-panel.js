/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=globalThis,e$3=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$3=new WeakMap;let n$3 = class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$3&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$3.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$3.set(s,t));}return t}toString(){return this.cssText}};const r$3=t=>new n$3("string"==typeof t?t:t+"",void 0,s$2),i$4=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n$3(o,t,s$2)},S$1=(s,o)=>{if(e$3)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$2.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$3?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$3(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$3,defineProperty:e$2,getOwnPropertyDescriptor:r$2,getOwnPropertyNames:h$1,getOwnPropertySymbols:o$2,getPrototypeOf:n$2}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$3(t,s),y$1={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=y$1){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,s);void 0!==r&&e$2(this.prototype,t,r);}}static getPropertyDescriptor(t,s,i){const{get:e,set:h}=r$2(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get(){return e?.call(this)},set(s){const r=e?.call(this);h.call(this,s),this.requestUpdate(t,r,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$2(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...h$1(t),...o$2(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$EC(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e,this[e]=r.fromAttribute(s,t.type),this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??f$1)(this[t],s))return;this.P(t,s,i);}!1===this.isUpdatePending&&(this._$ES=this._$ET());}P(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t);}async _$ET(){this.isUpdatePending=!0;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.P(s,this[s],i);}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EU();}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return !0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU();}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[d$1("elementProperties")]=new Map,b[d$1("finalized")]=new Map,p$1?.({ReactiveElement:b}),(a$1.reactiveElementVersions??=[]).push("2.0.4");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,i$2=t$1.trustedTypes,s$1=i$2?i$2.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$1="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o$1="?"+h,n$1=`<${o$1}>`,r$1=document,l=()=>r$1.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r$1.createTreeWalker(r$1,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$1?s$1.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n$1:d>=0?(o.push(a),s.slice(0,d)+e$1+s.slice(d)+h+x):s+h+(-2===d?i:x);}return [C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e$1)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t);}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i$2?i$2.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l());}}}else if(8===r.nodeType)if(r.data===o$1)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1;}c++;}}static createElement(t,i){const s=r$1.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$1).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=E.nextNode(),o++);}return E.currentNode=r$1,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t);}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t));}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r$1.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new S(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}k(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.S(l()),this.S(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class k extends R{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===T?void 0:t;}}class H extends R{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==T);}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t);}}const Z=t$1.litHtmlPolyfillSupport;Z?.(V,M),(t$1.litHtmlVersions??=[]).push("3.1.2");const j=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new M(i.insertBefore(l(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class s extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=j(i,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1);}render(){return w}}s._$litElement$=!0,s[("finalized")]=!0,globalThis.litElementHydrateSupport?.({LitElement:s});const r=globalThis.litElementPolyfillSupport;r?.({LitElement:s});(globalThis.litElementVersions??=[]).push("4.0.4");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>(...e)=>({_$litDirective$:t,values:e});let i$1 = class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n="important",i=" !"+n,o=e(class extends i$1{constructor(t$1){if(super(t$1),t$1.type!==t.ATTRIBUTE||"style"!==t$1.name||t$1.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(r)),this.render(r);for(const t of this.ft)null==r[t]&&(this.ft.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in r){const e=r[t];if(null!=e){this.ft.add(t);const r="string"==typeof e&&e.endsWith(i);t.includes("-")||r?s.setProperty(t,r?e.slice(0,-11):e,r?n:""):s[t]=e;}}return w}});

var dialogCss = i$4`
  #popup-dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 0;
    transform: translate(-50%, -50%);
    max-width: 80vw;
    max-height: 80vh;
    height: 100%;
    width: 100%;
    overflow: visible;
    border-radius: 0.75rem;
    border: none;
    z-index: 1; /* Ensure dialog is below close button */
    &::backdrop {
      position: fixed;
      inset: 0px;
      background: rgba(0, 0, 0, 0.85);
      backdrop-filter: blur(12px);
    }
    .popup-content {
      height: 100%;
      width: 100%;
      overflow-y: hidden;
    }
    /* The Close Button */
    .close {
      cursor: pointer;
      position: absolute;
      top: -10px;
      right: -10px;
      fill: white;
      stroke: black;
      stroke-width: 2;
      &:hover,
      &:active {
        fill: var(--accent-color);
      }
    }
  }

  #toast {
    visibility: hidden;
    max-width: fit-content;
    height: 50px;
    margin-left: -125px;
    margin: auto;
    background-color: var(--accent-color);
    text-align: center;
    border-radius: 10px;
    position: fixed;
    z-index: 99;
    left: 0;
    right: 0;
    top: 80px;
    font-size: 1rem;
    border: solid black;
  }
  #toast #img {
    width: 50px;
    height: 50px;
    float: left;
    box-sizing: border-box;
    background-color: var(--secondary-bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
    & path {
      fill: var(--accent-color);
    }
  }
  #toast #desc {
    font-size: large;
    color: #000;
    padding: 1rem;
    overflow: hidden;
    white-space: nowrap;
  }
  #toast.show {
    visibility: visible;
    -webkit-animation: fadein 0.5s, expand 0.5s 0.5s, stay 3s 1s, shrink 0.5s 2s,
      fadeout 0.5s 2.5s;
    animation: fadein 0.5s, expand 0.5s 0.5s, stay 3s 1s, shrink 0.5s 4s,
      fadeout 0.5s 4.5s;
  }
  @-webkit-keyframes fadein {
    from {
      top: 0;
      opacity: 0;
    }
    to {
      top: 80px;
      opacity: 1;
    }
  }

  @keyframes fadein {
    from {
      top: 0;
      opacity: 0;
    }
    to {
      top: 80px;
      opacity: 1;
    }
  }

  @-webkit-keyframes expand {
    from {
      min-width: 50px;
    }
    to {
      min-width: 350px;
    }
  }

  @keyframes expand {
    from {
      min-width: 50px;
    }
    to {
      min-width: 350px;
    }
  }
  @-webkit-keyframes stay {
    from {
      min-width: 350px;
    }
    to {
      min-width: 350px;
    }
  }

  @keyframes stay {
    from {
      min-width: 350px;
    }
    to {
      min-width: 350px;
    }
  }
  @-webkit-keyframes shrink {
    from {
      min-width: 350px;
    }
    to {
      min-width: 50px;
    }
  }

  @keyframes shrink {
    from {
      min-width: 350px;
    }
    to {
      min-width: 50px;
    }
  }

  @-webkit-keyframes fadeout {
    from {
      top: 80px;
      opacity: 1;
    }
    to {
      top: 0px;
      opacity: 0;
    }
  }

  @keyframes fadeout {
    from {
      top: 80px;
      opacity: 1;
    }
    to {
      top: 0px;
      opacity: 0;
    }
  }
`;

var headerCss = i$4`
  .header {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    height: calc(var(--header-height) + 1px);
    background-color: #000;
    filter: drop-shadow(2px 4px 6px black);
    backdrop-filter: blur(15px) brightness(0.7);
    z-index: 5;
    margin: 0;
    padding: 0 1rem 0 1rem;
    overflow: hidden;
    width: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;

    ul {
      list-style-type: none;
      padding: 0;
      display: flex;
      align-items: flex-end;
    }
    li {
      float: left;

      a {
        display: block;
        text-decoration: none;
        text-align: center;
        padding: 1rem 16px;
        text-transform: capitalize;
        color: var(--accent-color);
        font-size: 20px;
        font-weight: 700;
        font-family: 'Raleway';
        border-bottom: 2px solid transparent;
        transition: border-bottom 0.3s ease-in;
        &:hover:not(.active) {
          background-color: var(--secondary-bg-color);
          color: white;
        }

        &.active {
          border-bottom: 2px solid var(--accent-color);
          color: white;
        }
      }
    }
  }

  #search-container {
    display: inline-flex;
    justify-content: end;
    align-items: center;
    max-width: 400px;
    width: 100%;
    height: 100%;
    .search-icon,
    .reset-icon {
      cursor: pointer;
      transition: all 0.3s ease;
      order: 2;
      display: block;
      flex-shrink: 0;
      & path {
        fill: var(--accent-color);
      }
      &:hover path {
        fill: white;
      }
    }

    #form {
      flex-grow: 0;
      transition: width 0.3s ease-in-out;
      display: flex;
      align-items: center;
      width: 0;
      overflow: hidden;
      order: 1;

      .search-input {
        width: 100%;
        padding: 8px 10px;
        border-radius: 1rem;
        font-size: 16px;
        /* background-color: transparent; */
        background-color: var(--secondary-bg-color);
        border: 1px solid var(--secondary-color);
        transition: all 0.3s ease;
      }

      .search-input:focus {
        outline: none;
        border: 1px solid var(--accent-color);
        color: var(--accent-color);
      }
    }
    #form.show {
      width: calc(100% - 20px);
      margin-right: 20px;
    }
  }
`;

var mainStyles = i$4`
  :host {
    --primary-color: #181625;
    --secondary-color: #403c55;
    --primary-bg-color: #442d47;
    --secondary-bg-color: #0d324d;
    --accent-color: rgb(146, 144, 195);
    --maxPrimarySectionWidth: 85vw;
  }
  * {
    font-family: 'Raleway', sans-serif;
    color: white;
    margin: 0;
  }

  main {
    margin: 0 auto 56px;
    background-color: var(--primary-color);
    transition: background-color 0.4s ease;
  }
  button {
    cursor: pointer;
    padding-top: 1rem;
  }

  section.inner_content {
    overflow: auto;
    display: block;
    align-items: normal;
  }

  .subsection {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  #subsection-title {
    position: -webkit-sticky; /* For Safari */
    position: sticky;
    top: 0;
    left: 1rem;
    margin: 2rem 1rem 0.5rem 1rem;
    background: inherit; /* This makes sure the title is readable over other content */
    align-self: flex-start;
  }
  .horizontal-list {
    display: flex;
    flex-direction: row;
    width: fit-content;
  }

  .items-container,
  .searched {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    grid-auto-flow: dense;
    padding: 0 1rem;
    grid-gap: 1rem;
    & .span-2 {
      grid-column: span 2;
      grid-row: span 2;
      align-self: center;
      margin: 0;
    }
  }

  .watch-now,
  .watch-later {
    color: var(--primary-color);
    background-color: var(--accent-color);
    border: none;
    border-radius: 100px;
  }

  .watch-now {
    padding: 0.5rem 1rem;
  }

  .watch-later {
    padding: 0.5rem 0.7rem;
  }

  .movie-l {
    width: 40rem;
    position: relative;
    margin: 1rem;
    border-radius: 10px;
    overflow: hidden;
    height: 20rem;
    box-shadow: 2px 2px 14px 0px #2d2d2d;
    background-image: linear-gradient(to top, black, transparent);
  }

  .movie-l::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to top,
      rgba(9, 1, 31, 0.719),
      rgba(0, 0, 0, 0)
    );
    z-index: 1;
  }

  .movie-l .movie-info {
    display: none;
  }

  .movie-l .overview.visible {
    padding: 1rem;
    position: absolute;
    bottom: 0%;
    width: 80%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    height: 50%;
    justify-content: space-between;
    & h3 {
      font-size: 1.4rem;
    }
    & p {
      margin-top: 0;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      /* Set the maximum number of lines before truncating */
      overflow: hidden;
      font-size: 14px;
      opacity: 0.7;
    }
  }

  .movie-s img,
  .movie-l img {
    width: 100%;
    border-radius: 10px;
    /* box-shadow: 2px 2px 14px 0px #000000; */
  }

  .movie-s {
    flex: 1;
    min-width: 200px;
    margin: 1rem;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    height: min-content;
  }

  .movie-s .movie-info {
    display: flex;
    align-items: start;
    justify-content: space-between;
    padding: 0.5rem;
    letter-spacing: 0.5px;
    font-size: 12px;
  }

  .movie-s .movie-info h3 {
    margin-top: 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    /* Set the maximum number of lines before truncating */
    overflow: hidden;
    font-size: 1rem;
  }

  .movie-s .movie-info span {
    white-space: nowrap;
    display: flex;
    position: absolute;
    top: 2%;
    right: 5%;
    border: none;
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 0.8rem;
    /* background: linear-gradient(15deg, #bbbbbb 0%, #008704 40%); */
    box-sizing: content-box;
    font-weight: 800;
  }

  .movie-s .overview.hidden {
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: -webkit-fill-available;
    top: 0;
    bottom: 0;
    font-size: 12px;
    background: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0.281));
    position: absolute;
    padding: 1rem;
    opacity: 0;
    transition: opacity 0.5s ease;
    overflow: hidden;
    text-overflow: ellipsis;
    z-index: 3;
    & .buttons {
      padding-top: 1rem;
    }
  }

  .movie-s .overview.hidden p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }

  .movie-s .overview.hidden h3 {
    margin: 0;
  }

  .movie-s:hover .overview.hidden {
    opacity: 1;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f100;
  }

  ::-webkit-scrollbar-track:horizontal {
    margin: 1.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--secondary-color);
    border-radius: 100px;
    cursor: -webkit-grab;
    cursor: grab;
  }

  .horizontal-list::-webkit-scrollbar-track {
    margin: 1rem;
  }
`;

var mediaQueryStyles = i$4`
  @media (max-width: 768px) {
    #popup-dialog {
      max-width: 100vw !important;
      max-height: 100vh !important;
    }
    .header {
      width: 100%;
    }
    .movie-s {
      /* max-width: 180px !important; */
      min-width: 150px !important;
      margin: 0.5rem;
    }
    .items-container,
    .searched {
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    }
  }
`;

// combinedStyles.js

const combinedStyles = i$4`
  ${mainStyles}
  ${headerCss}
  ${dialogCss}
  ${mediaQueryStyles}
`;

// Material Design Icons v7.4.47
var mdiAlertCircleOutline = "M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z";
var mdiClose = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";
var mdiCloseCircle = "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z";
var mdiMagnify = "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z";

const SearchMixin = (superclass) =>
  class extends superclass {
    /* ------------------------------ SEARCH HANDLE ----------------------------- */

    renderSearchForm() {
      return x`
        <div id="search-container">
          ${this.search.length > 0
            ? x` <svg
                class="reset-icon"
                @click="${this.resetSearch}"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                aria-label="Reset search"
              >
                <path d="${mdiClose}" />
              </svg>`
            : x` <svg
                class="search-icon"
                @click="${(event) => this.manageSearchInputVisibility(event)}"
                @mouseover="${(event) =>
                  this.manageSearchInputVisibility(event)}"
                @mouseout="${(event) =>
                  this.manageSearchInputVisibility(event)}"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                aria-label="Search"
              >
                <path d="${mdiMagnify}" />
              </svg>`}
          <form id="form" @submit="${this.performSearch}" class="hidden">
            <input
              type="text"
              .value="${this.search}"
              @input="${this.updateSearch}"
              class="search-input"
              placeholder="Search..."
            />
          </form>
        </div>
      `;
    }

    updateSearch(e) {
      this.search = e.target.value;
    }

    async performSearch(e) {
      e.preventDefault();
      const searchTerm = this.search.trim();

      if (searchTerm) {
        try {
          const response = await fetch(`${this.SEARCH_API}${searchTerm}`);
          const data = await response.json();
          if (data.results && data.results.length > 0) {
            this.searchResults = data.results;
            this.isSearchActive = true;
          } else {
            // If the new search has no results, use last successful results if available
            this.searchResults.length === 0;
            const template = `No results found for '${searchTerm}'.`;
            this.launch_toast(template);
          }
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      } else {
        this.isSearchActive = false;
        this.searchResults = []; // Clear results if search term is empty
      }
      this.requestUpdate();
    }

    manageSearchInputVisibility(event) {
      const formEl = this.shadowRoot.querySelector('#form');
      if (!formEl) return;

      clearTimeout(this.searchTimeout); // Clear any existing timeout

      // Handle the click event specifically
      if (event.type === 'click') {
        formEl.classList.toggle('show');
        return; // Exit the function after handling click
      }

      // Handle mouseover and mouseout for empty search
      if (this.search.trim().length === 0) {
        if (!formEl.classList.contains('show') && event.type === 'mouseover') {
          // Show the input after a delay if it's not already shown
          this.searchTimeout = setTimeout(() => {
            if (this.search.trim().length === 0) {
              formEl.classList.add('show');
            }
          }, 1000);
        } else if (
          formEl.classList.contains('show') &&
          event.type === 'mouseout'
        ) {
          // Hide the input after a delay if still no search term
          this.searchTimeout = setTimeout(() => {
            if (this.search.trim().length === 0) {
              formEl.classList.remove('show');
            }
          }, 7000);
        }
      }
    }

    resetSearch() {
      this.search = '';
      this.shadowRoot.querySelector('#form').classList.remove('show');
      this.isSearchActive = false;
      // Fetch default content or reset
      this.getCinemaMovies(this.API_URL);
    }

    /* ---------------------------- TOAST NOTIFICATION --------------------------- */
    renderToast() {
      return x`
        <div id="toast">
          <div id="img">
            <svg width="24" height="24" viewBox="0 0 24 24" aria-label="Error">
              <path d="${mdiAlertCircleOutline}" />
            </svg>
          </div>
          <div id="desc">Notification search results</div>
        </div>
      `;
    }

    launch_toast(desc) {
      const toastEl = this.shadowRoot.querySelector('#toast');
      const descEl = this.shadowRoot.querySelector('#desc');

      if (toastEl) {
        descEl.innerHTML = desc;
        toastEl.classList.add('show');
        setTimeout(() => {
          toastEl.classList.remove('show');
        }, 5000);
      } else {
        console.error('Toast element not found');
      }
    }
  };

const ActionsHandler = (Superclass) =>
  class extends Superclass {
    /* -------------------------------------------------------------------------- */
    /*                               ACTIONS HANDLER                              */
    /* -------------------------------------------------------------------------- */
    scrollToSection(event) {
      event.preventDefault(); // Prevent default behavior of anchor tag
      const targetId = event.currentTarget.getAttribute('href'); // Get the hash value
      const section = this.shadowRoot.querySelector(`${targetId}`); // Get the corresponding section
      const headerHeight =
        this.shadowRoot.querySelector('.header').offsetHeight; // Get header height
      if (section) {
        // Calculate the target scroll position considering the header height
        const targetScrollPosition =
          section.getBoundingClientRect().top + window.scrollY - headerHeight;
        // Scroll to the target position
        window.scrollTo({
          top: targetScrollPosition,
          behavior: 'smooth',
        });
      }
    }

    handleScroll() {
      this.updateNavOnLoad();
      const sections = this.shadowRoot.querySelectorAll('section');
      const mainElement = this.shadowRoot.querySelector('main');
      const headerElement = this.shadowRoot.querySelector('.header');
      const navLinks = this.shadowRoot.querySelectorAll('.header li a');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        // Check if the section is at least partially visible in the viewport
        const isVisible =
          rect.bottom > headerElement.offsetHeight &&
          rect.top <
            (window.innerHeight || document.documentElement.clientHeight) - 56;

        if (isVisible) {
          // console.log(`Visible section ID: ${section.id}`); // Debug log
          // // Change the background color based on odd or even index
          if (index % 2 === 0) {
            mainElement.style.backgroundColor = 'var(--secondary-color)';
          } else {
            mainElement.style.backgroundColor = 'var(--primary-color)';
          }
          // Update navigation link styles
          navLinks.forEach((link) => {
            if (link.getAttribute('data-target') === section.id) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });

          // Exit the loop once a visible section is found
          return;
        }
      });
    }

    updateNavOnLoad() {
      const sections = this.shadowRoot.querySelectorAll('section');
      const navLinks = this.shadowRoot.querySelectorAll('.header li a');
      sections.forEach((section, index) => {
        // Check if the section is at least partially visible in the viewport on load
        if (index === 0) {
          // Assuming the first section should be active initially
          navLinks.forEach((link) => {
            if (link.getAttribute('data-target') === section.id) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }

    /* ------------------------- AUTO SPAN GRID COLUMNS ------------------------- */

    createBentoGrid() {
      const containers = this.shadowRoot.querySelectorAll('.items-container');

      containers.forEach((container) => {
        const children = Array.from(container.children).slice(3, 10);

        if (children.length >= 2) {
          // Clear existing span-2 classes
          children.forEach((child) => child.classList.remove('span-2'));

          // Get two unique random indexes with a gap
          let firstRandomIndex = Math.floor(
            Math.random() * (children.length - 3)
          );
          let secondRandomIndex =
            firstRandomIndex +
            3 +
            Math.floor(
              Math.random() * (children.length - firstRandomIndex - 3)
            );

          // Apply styling to the randomly selected children
          if (
            firstRandomIndex < children.length &&
            secondRandomIndex < children.length
          ) {
            children[firstRandomIndex].classList.add('span-2');
            children[secondRandomIndex].classList.add('span-2');
          }
        }
      });
    }

    /* -------------------------------------------------------------------------- */
    /*                                POPUP DIALOG                                */
    /* -------------------------------------------------------------------------- */

    // Method to open the more info dialog

    _openPopup(content) {
      const dialog = this.shadowRoot.querySelector('#popup-dialog');

      if (typeof content === 'string') {
        // Check if content is a URL for an iframe
        if (content.startsWith('http') || content.startsWith('www')) {
          dialog.innerHTML = `
          <svg class="close"  width="24" height="24" viewBox="0 0 24 24">
            <path d="${mdiCloseCircle}" />
          </svg>
        <div class="popup-content">
          <iframe src="${content}" frameborder="0" width="100%" height="100%"></iframe>
        </div>
      `;
        } else {
          // Plain text or HTML string
          dialog.innerHTML = `
          <svg class="close"  width="24" height="24" viewBox="0 0 24 24">
            <path d="${mdiCloseCircle}" />
          </svg>
        <div class="popup-content">${content}</div>
      `;
        }
      }

      dialog.showModal();
      const closeButton = dialog.querySelector('.close');
      closeButton.addEventListener('click', () => this._closePopup());
      dialog.addEventListener('click', (event) => {
        if (event.target === dialog) {
          this._closePopup();
        }
      });
    }

    _closePopup() {
      const dialog = this.shadowRoot.querySelector('#popup-dialog');
      dialog.close();
    }

    /* ------------------------- PLAY MOVIE CALLSERVICE ------------------------- */

    _playMovie(strm_url) {
      this._hass.callService('script', 'run_plugin', {
        file: strm_url,
      });
    }
  };

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?include_adult=false&language=cs-CZ&api_key=62dce7dcd2282d8e5f63556d214eaa74&query="';

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&language=cs-CZ&api_key=62dce7dcd2282d8e5f63556d214eaa74&page=1';
const URL_PATH = 'https://www.themoviedb.org/movie/';

async function getResults() {
  const api_url = 'https://api.themoviedb.org/3/discover/movie';
  const apiKey = '62dce7dcd2282d8e5f63556d214eaa74';
  const currentDate = new Date();
  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const endOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );

  const formatDate = (date) => date.toISOString().split('T')[0];
  let page = 1;
  let allResults = [];

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const criteria = new URLSearchParams({
      api_key: apiKey,
      include_adult: false,
      include_video: false,
      page: page,
      region: 'CZ',
      language: 'cs-CZ',
      'release_date.gte': formatDate(startOfMonth),
      'release_date.lte': formatDate(endOfMonth),
      certification_country: 'CZ',
      sort_by: 'primary_release_date.asc',
      with_release_type: '3|2',
      'vote_average.gte': 0,
      'vote_average.lte': 10,
      'vote_count.gte': 0,
      watch_region: 'CZ',
    });

    const response = await fetch(`${api_url}?${criteria.toString()}`);

    if (response.ok) {
      const data = await response.json();
      allResults = [...allResults, ...data.results];

      if (page < data.total_pages) {
        page += 1;
      } else {
        break;
      }
    } else {
      console.error(
        `Error: Unable to fetch upcoming movies. Status Code: ${response.status}`
      );
      break;
    }
  }

  return allResults;
}

function loadCSS() {
  const link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href =
    'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap';
  document.head.appendChild(link);
}

const noImage =
  'data:image/svg+xml;base64,PHN2ZyBpZD0iZ2x5cGhpY29ucy1iYXNpYyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzIgMzIiPgogIDxwYXRoIGZpbGw9IiNiNWI1YjUiIGlkPSJwaWN0dXJlIiBkPSJNMjcuNSw1SDQuNUExLjUwMDA4LDEuNTAwMDgsMCwwLDAsMyw2LjV2MTlBMS41MDAwOCwxLjUwMDA4LDAsMCwwLDQuNSwyN2gyM0ExLjUwMDA4LDEuNTAwMDgsMCwwLDAsMjksMjUuNVY2LjVBMS41MDAwOCwxLjUwMDA4LDAsMCwwLDI3LjUsNVpNMjYsMTguNWwtNC43OTQyNS01LjIzMDFhLjk5MzgzLjk5MzgzLDAsMCwwLTEuNDQ0MjgtLjAzMTM3bC01LjM0NzQxLDUuMzQ3NDFMMTkuODI4MTIsMjRIMTdsLTQuNzkyOTEtNC43OTNhMS4wMDAyMiwxLjAwMDIyLDAsMCwwLTEuNDE0MTgsMEw2LDI0VjhIMjZabS0xNy45LTZhMi40LDIuNCwwLDEsMSwyLjQsMi40QTIuNDAwMDUsMi40MDAwNSwwLDAsMSw4LjEsMTIuNVoiLz4KPC9zdmc+Cg==';

class MovieAppPanel extends ActionsHandler(SearchMixin(s)) {
  _hass;
  _upcomingState;
  _kodiState;
  static get properties() {
    return {
      _entity: { state: true },
      _upcoming: { state: true },
      cinemaMovies: { type: Array },
      kodiMovies: { type: Array },
      upcomingMovies: { type: Array },
      search: { type: String },
      searchResults: { type: Array },
      isSearchActive: { type: Boolean },
    };
  }

  static get styles() {
    return [combinedStyles];
  }

  constructor() {
    super();
    loadCSS();
    this.boundHandleScroll = this.handleScroll.bind(this);
    this.cinemaMovies = [];
    this.kodiMovies = [];
    this.upcomingMovies = [];
    this.search = '';
    this.searchResults = [];
    this.isSearchActive = false;
    this.searchTimeout = null;
    this.API_URL = `${API_URL}`;
    this.IMG_PATH = `${IMG_PATH}`;
    this.URL_PATH = `${URL_PATH}`;
    this.SEARCH_API = `${SEARCH_API}`;
    this.getCinemaMovies(this.API_URL);
    this.getUpcomingMovies();
  }

  // Method to set configuration
  setConfig(config) {
    this._entity = config.entity;
    this._upcoming = config.upcoming;
    if (this._hass) {
      this.hass = this._hass;
    }
  }

  /**
   * @param {{ states: { [x: string]: any; }; callService: (arg0: string, arg1: string, arg2: { file: any; }) => void; }} hass
   */
  set hass(hass) {
    this._hass = hass;
    this._kodiState = hass.states[this._entity];
    if (this._kodiState) {
      // Fetch Kodi movies after entity state is updated
      this.getKodiMovies();
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.updateNavOnLoad();
    window.addEventListener('scroll', this.boundHandleScroll);
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this.boundHandleScroll);
    super.disconnectedCallback();
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    // Check if the relevant property has changed
    if (
      changedProperties.has('cinemaMovies') ||
      changedProperties.has('upcomingMovies') ||
      changedProperties.has('kodiMovies')
    ) {
      // console.log('bentoGrid');
      this.createBentoGrid();
    }
  }

  /* ------------------------------ FETCH MOVIES ------------------------------ */
  async getCinemaMovies(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();

      this.cinemaMovies = data.results;
      this.requestUpdate(); // Forces update
      // console.log(this.cinemaMovies);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  async getUpcomingMovies() {
    try {
      const movies = await getResults();
      this.upcomingMovies = movies;
      this.requestUpdate(); // Forces update
      // console.log(movies);
    } catch (error) {
      console.error('Error fetching upcoming movies:', error);
    }
  }

  getKodiMovies() {
    if (
      this._kodiState &&
      this._kodiState.attributes &&
      this._kodiState.attributes.data
    ) {
      let data = this._kodiState.attributes.data;
      this.kodiMovies = data;
    } else {
      console.error('Kodi Movies data is not available.');
    }
  }

  /* -------------------------------------------------------------------------- */
  /*                               RENDER SECTIONS                              */
  /* -------------------------------------------------------------------------- */

  renderMovie(movie, options = {}) {
    const { isLarge = false, useKodiData = false } = options;
    const movieClass = isLarge ? 'movie-l' : 'movie-s';
    const movieTitle = movie.title;
    const movieRating = useKodiData ? movie.rating : movie.vote_average;
    const moviePlot = useKodiData ? movie.plot : movie.overview;
    const movieURL = useKodiData ? movie.tmdb_link : this.URL_PATH + movie.id;
    const movieStreamUrl = useKodiData ? movie.strm_url : '';

    let moviePath;

    if (useKodiData) {
      // For Kodi movies
      moviePath = isLarge
        ? movie.fanart_url || noImage
        : movie.poster_url || noImage;
    } else {
      // For non-Kodi movies
      if (isLarge) {
        moviePath = movie.backdrop_path
          ? this.IMG_PATH + movie.backdrop_path
          : movie.poster_path
          ? this.IMG_PATH + movie.poster_path
          : noImage;
      } else {
        moviePath = movie.poster_path
          ? this.IMG_PATH + movie.poster_path
          : noImage;
      }
    }
    let ratingGradient = '#0000007d'; // default
    if (movieRating >= 8) ratingGradient = '#008704';
    else if (movieRating >= 6.5) ratingGradient = '#8a5200';

    const ratingGradientBg = {
      background: `linear-gradient(15deg, #bbbbbb 0%, ${ratingGradient} 40%)`,
    };

    return x`
      <div class="${movieClass}">
        <img src="${moviePath}" alt="${movieTitle}" />
        <div class="movie-info">
          ${!isLarge && movieRating
            ? x`<h3>${movieTitle}</h3>
                <span class="vote" style=${o(ratingGradientBg)}
                  >⭐ ${movieRating.toFixed(1)}</span
                >`
            : !movieRating
            ? x`<h3>${movieTitle}</h3>`
            : ''}
        </div>
        <div class="overview ${!isLarge ? 'hidden' : 'visible'}">
          <h3>${movieTitle}</h3>
          <p>${moviePlot}</p>
          <div class="buttons">
            ${useKodiData
              ? x`<button
                  class="watch-now"
                  @click="${() => this._playMovie(movieStreamUrl)}"
                >
                  Watch now
                </button>`
              : ''}

            <button
              class="watch-later"
              @click="${() => this._openPopup(movieURL)}"
            >
              +
            </button>
          </div>
        </div>
      </div>
    `;
  }

  renderMovieSections(sectionId, movies, subsections, useKodiData = false) {
    return x`
      <section id="${sectionId}" class="inner_content">
        ${subsections.map(({ title, id }, index) => {
          const sectionMovies =
            index === 0 ? movies.slice(0, 5) : movies.slice(5);
          const displayedMovies = sectionMovies.map((movie) =>
            this.renderMovie(movie, { isLarge: index === 0, useKodiData })
          );
          const containerClass =
            index === 0 ? 'horizontal-list' : 'items-container';

          return x`
            <div id="${id}" class="subsection">
              <h2 id="subsection-title">${title}</h2>
              <div class="${containerClass}">${displayedMovies}</div>
            </div>
          `;
        })}
      </section>
    `;
  }

  renderSearchResults() {
    // Render the current or last search results
    return x`
      <div class="searched">
        ${this.searchResults.map((movie) =>
          this.renderMovie(movie, false, false)
        )}
      </div>
    `;
  }

  renderNavLink(linkId, title) {
    const isActive = this.currentActiveSection === linkId;
    return x`
      <li>
        <a
          href="#${linkId}"
          data-target="${linkId}"
          @click="${this.scrollToSection}"
          class="${isActive ? 'active' : ''}"
          >${title}</a
        >
      </li>
    `;
  }

  /* -------------------------------------------------------------------------- */
  /*                              MAIN PAGE RENDER                              */
  /* -------------------------------------------------------------------------- */

  render() {
    // console.log(`Rendering with active section: ${this.currentActiveSection}`);
    return x`
      <div class="header">
        <ul>
          ${this.renderNavLink('kodi-movies', 'Kodi')}
          ${this.renderNavLink('upcoming-movies', 'Cinema')}
          ${this.renderNavLink('tmdb-movies', 'Popular')}
        </ul>
        ${this.renderSearchForm()}
      </div>
      <main>
        ${!this.isSearchActive
          ? x`
              ${this.renderMovieSections(
                'kodi-movies',
                this.kodiMovies,
                [{ title: 'Recently added' }, { title: 'Kodi library' }],
                true
              )}
              ${this.renderMovieSections(
                'upcoming-movies',
                this.upcomingMovies,
                [{ title: 'In cinemas' }, { title: 'Movies' }]
              )}
              ${this.renderMovieSections('tmdb-movies', this.cinemaMovies, [
                { title: 'Most Popular' },
                { title: 'Recommended for you' },
              ])}
            `
          : x`<section id="search-results" class="inner_content">
              ${this.renderSearchResults()}
            </section>`}
        ${this.renderToast()}
        <dialog id="popup-dialog"></dialog>
      </main>
    `;
  }

  static getStubConfig() {
    return {
      entity: 'sensor.kodi_all_movies',
      upcoming: 'sensor.upcoming_all_movies',
    };
  }
}

// Registering the custom element
customElements.define('movie-app-panel', MovieAppPanel);
console.info('%c 📻 Movie App Panel ', 'background: #222; color: #bada55');

window.customCards = window.customCards || [];
window.customCards.push({
  preview: false,
  type: 'movie-app-panel',
  name: 'Movie App Panel',
});
