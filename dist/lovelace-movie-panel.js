/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $def2de46b9306e8a$var$t = globalThis, $def2de46b9306e8a$export$b4d10f6001c083c2 = $def2de46b9306e8a$var$t.ShadowRoot && (void 0 === $def2de46b9306e8a$var$t.ShadyCSS || $def2de46b9306e8a$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $def2de46b9306e8a$var$s = Symbol(), $def2de46b9306e8a$var$o = new WeakMap;
class $def2de46b9306e8a$export$505d1e8739bad805 {
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== $def2de46b9306e8a$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($def2de46b9306e8a$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $def2de46b9306e8a$var$o.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $def2de46b9306e8a$var$o.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const $def2de46b9306e8a$export$8d80f9cac07cdb3 = (t)=>new $def2de46b9306e8a$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $def2de46b9306e8a$var$s), $def2de46b9306e8a$export$dbf350e5966cf602 = (t, ...e)=>{
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[o + 1], t[0]);
    return new $def2de46b9306e8a$export$505d1e8739bad805(o, t, $def2de46b9306e8a$var$s);
}, $def2de46b9306e8a$export$2ca4a66ec4cecb90 = (s, o)=>{
    if ($def2de46b9306e8a$export$b4d10f6001c083c2) s.adoptedStyleSheets = o.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet);
    else for (const e of o){
        const o = document.createElement("style"), n = $def2de46b9306e8a$var$t.litNonce;
        void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
}, $def2de46b9306e8a$export$ee69dfd951e24778 = $def2de46b9306e8a$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $def2de46b9306e8a$export$8d80f9cac07cdb3(e);
    })(t) : t;


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { is: $19fe8e3abedf4df0$var$i, defineProperty: $19fe8e3abedf4df0$var$e, getOwnPropertyDescriptor: $19fe8e3abedf4df0$var$r, getOwnPropertyNames: $19fe8e3abedf4df0$var$h, getOwnPropertySymbols: $19fe8e3abedf4df0$var$o, getPrototypeOf: $19fe8e3abedf4df0$var$n } = Object, $19fe8e3abedf4df0$var$a = globalThis, $19fe8e3abedf4df0$var$c = $19fe8e3abedf4df0$var$a.trustedTypes, $19fe8e3abedf4df0$var$l = $19fe8e3abedf4df0$var$c ? $19fe8e3abedf4df0$var$c.emptyScript : "", $19fe8e3abedf4df0$var$p = $19fe8e3abedf4df0$var$a.reactiveElementPolyfillSupport, $19fe8e3abedf4df0$var$d = (t, s)=>t, $19fe8e3abedf4df0$export$7312b35fbf521afb = {
    toAttribute (t, s) {
        switch(s){
            case Boolean:
                t = t ? $19fe8e3abedf4df0$var$l : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, s) {
        let i = t;
        switch(s){
            case Boolean:
                i = null !== t;
                break;
            case Number:
                i = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    i = JSON.parse(t);
                } catch (t) {
                    i = null;
                }
        }
        return i;
    }
}, $19fe8e3abedf4df0$export$53a6892c50694894 = (t, s)=>!$19fe8e3abedf4df0$var$i(t, s), $19fe8e3abedf4df0$var$y = {
    attribute: !0,
    type: String,
    converter: $19fe8e3abedf4df0$export$7312b35fbf521afb,
    reflect: !1,
    hasChanged: $19fe8e3abedf4df0$export$53a6892c50694894
};
Symbol.metadata ??= Symbol("metadata"), $19fe8e3abedf4df0$var$a.litPropertyMetadata ??= new WeakMap;
class $19fe8e3abedf4df0$export$c7c07a37856565d extends HTMLElement {
    static addInitializer(t) {
        this._$Ei(), (this.l ??= []).push(t);
    }
    static get observedAttributes() {
        return this.finalize(), this._$Eh && [
            ...this._$Eh.keys()
        ];
    }
    static createProperty(t, s = $19fe8e3abedf4df0$var$y) {
        if (s.state && (s.attribute = !1), this._$Ei(), this.elementProperties.set(t, s), !s.noAccessor) {
            const i = Symbol(), r = this.getPropertyDescriptor(t, i, s);
            void 0 !== r && $19fe8e3abedf4df0$var$e(this.prototype, t, r);
        }
    }
    static getPropertyDescriptor(t, s, i) {
        const { get: e, set: h } = $19fe8e3abedf4df0$var$r(this.prototype, t) ?? {
            get () {
                return this[s];
            },
            set (t) {
                this[s] = t;
            }
        };
        return {
            get () {
                return e?.call(this);
            },
            set (s) {
                const r = e?.call(this);
                h.call(this, s), this.requestUpdate(t, r, i);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) ?? $19fe8e3abedf4df0$var$y;
    }
    static _$Ei() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("elementProperties"))) return;
        const t = $19fe8e3abedf4df0$var$n(this);
        t.finalize(), void 0 !== t.l && (this.l = [
            ...t.l
        ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty($19fe8e3abedf4df0$var$d("properties"))) {
            const t = this.properties, s = [
                ...$19fe8e3abedf4df0$var$h(t),
                ...$19fe8e3abedf4df0$var$o(t)
            ];
            for (const i of s)this.createProperty(i, t[i]);
        }
        const t = this[Symbol.metadata];
        if (null !== t) {
            const s = litPropertyMetadata.get(t);
            if (void 0 !== s) for (const [t, i] of s)this.elementProperties.set(t, i);
        }
        this._$Eh = new Map;
        for (const [t, s] of this.elementProperties){
            const i = this._$Eu(t, s);
            void 0 !== i && this._$Eh.set(i, t);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s) {
        const i = [];
        if (Array.isArray(s)) {
            const e = new Set(s.flat(1 / 0).reverse());
            for (const s of e)i.unshift((0, $def2de46b9306e8a$export$ee69dfd951e24778)(s));
        } else void 0 !== s && i.push((0, $def2de46b9306e8a$export$ee69dfd951e24778)(s));
        return i;
    }
    static _$Eu(t, s) {
        const i = s.attribute;
        return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    constructor(){
        super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
    }
    _$Ev() {
        this._$ES = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t)=>t(this));
    }
    addController(t) {
        (this._$EO ??= new Set).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
    }
    removeController(t) {
        this._$EO?.delete(t);
    }
    _$E_() {
        const t = new Map, s = this.constructor.elementProperties;
        for (const i of s.keys())this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
        t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
        const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $def2de46b9306e8a$export$2ca4a66ec4cecb90)(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t)=>t.hostConnected?.());
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        this._$EO?.forEach((t)=>t.hostDisconnected?.());
    }
    attributeChangedCallback(t, s, i) {
        this._$AK(t, i);
    }
    _$EC(t, s) {
        const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
        if (void 0 !== e && !0 === i.reflect) {
            const r = (void 0 !== i.converter?.toAttribute ? i.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb).toAttribute(s, i.type);
            this._$Em = t, null == r ? this.removeAttribute(e) : this.setAttribute(e, r), this._$Em = null;
        }
    }
    _$AK(t, s) {
        const i = this.constructor, e = i._$Eh.get(t);
        if (void 0 !== e && this._$Em !== e) {
            const t = i.getPropertyOptions(e), r = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== t.converter?.fromAttribute ? t.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb;
            this._$Em = e, this[e] = r.fromAttribute(s, t.type), this._$Em = null;
        }
    }
    requestUpdate(t, s, i) {
        if (void 0 !== t) {
            if (i ??= this.constructor.getPropertyOptions(t), !(i.hasChanged ?? $19fe8e3abedf4df0$export$53a6892c50694894)(this[t], s)) return;
            this.P(t, s, i);
        }
        !1 === this.isUpdatePending && (this._$ES = this._$ET());
    }
    P(t, s, i) {
        this._$AL.has(t) || this._$AL.set(t, s), !0 === i.reflect && this._$Em !== t && (this._$Ej ??= new Set).add(t);
    }
    async _$ET() {
        this.isUpdatePending = !0;
        try {
            await this._$ES;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
            if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
                for (const [t, s] of this._$Ep)this[t] = s;
                this._$Ep = void 0;
            }
            const t = this.constructor.elementProperties;
            if (t.size > 0) for (const [s, i] of t)!0 !== i.wrapped || this._$AL.has(s) || void 0 === this[s] || this.P(s, this[s], i);
        }
        let t = !1;
        const s = this._$AL;
        try {
            t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach((t)=>t.hostUpdate?.()), this.update(s)) : this._$EU();
        } catch (s) {
            throw t = !1, this._$EU(), s;
        }
        t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        this._$EO?.forEach((t)=>t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$EU() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$ES;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        this._$Ej &&= this._$Ej.forEach((t)=>this._$EC(t, this[t])), this._$EU();
    }
    updated(t) {}
    firstUpdated(t) {}
}
$19fe8e3abedf4df0$export$c7c07a37856565d.elementStyles = [], $19fe8e3abedf4df0$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("elementProperties")] = new Map, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("finalized")] = new Map, $19fe8e3abedf4df0$var$p?.({
    ReactiveElement: $19fe8e3abedf4df0$export$c7c07a37856565d
}), ($19fe8e3abedf4df0$var$a.reactiveElementVersions ??= []).push("2.0.4");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $f58f44579a4747ac$var$t = globalThis, $f58f44579a4747ac$var$i = $f58f44579a4747ac$var$t.trustedTypes, $f58f44579a4747ac$var$s = $f58f44579a4747ac$var$i ? $f58f44579a4747ac$var$i.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $f58f44579a4747ac$var$e = "$lit$", $f58f44579a4747ac$var$h = `lit$${(Math.random() + "").slice(9)}$`, $f58f44579a4747ac$var$o = "?" + $f58f44579a4747ac$var$h, $f58f44579a4747ac$var$n = `<${$f58f44579a4747ac$var$o}>`, $f58f44579a4747ac$var$r = document, $f58f44579a4747ac$var$l = ()=>$f58f44579a4747ac$var$r.createComment(""), $f58f44579a4747ac$var$c = (t)=>null === t || "object" != typeof t && "function" != typeof t, $f58f44579a4747ac$var$a = Array.isArray, $f58f44579a4747ac$var$u = (t)=>$f58f44579a4747ac$var$a(t) || "function" == typeof t?.[Symbol.iterator], $f58f44579a4747ac$var$d = "[ 	\n\f\r]", $f58f44579a4747ac$var$f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $f58f44579a4747ac$var$v = /-->/g, $f58f44579a4747ac$var$_ = />/g, $f58f44579a4747ac$var$m = RegExp(`>|${$f58f44579a4747ac$var$d}(?:([^\\s"'>=/]+)(${$f58f44579a4747ac$var$d}*=${$f58f44579a4747ac$var$d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $f58f44579a4747ac$var$p = /'/g, $f58f44579a4747ac$var$g = /"/g, $f58f44579a4747ac$var$$ = /^(?:script|style|textarea|title)$/i, $f58f44579a4747ac$var$y = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $f58f44579a4747ac$export$c0bb0b647f701bb5 = $f58f44579a4747ac$var$y(1), $f58f44579a4747ac$export$7ed1367e7fa1ad68 = $f58f44579a4747ac$var$y(2), $f58f44579a4747ac$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $f58f44579a4747ac$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $f58f44579a4747ac$var$A = new WeakMap, $f58f44579a4747ac$var$E = $f58f44579a4747ac$var$r.createTreeWalker($f58f44579a4747ac$var$r, 129);
function $f58f44579a4747ac$var$C(t, i) {
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.createHTML(i) : i;
}
const $f58f44579a4747ac$var$P = (t, i)=>{
    const s = t.length - 1, o = [];
    let r, l = 2 === i ? "<svg>" : "", c = $f58f44579a4747ac$var$f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, y = 0;
        for(; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);)y = c.lastIndex, c === $f58f44579a4747ac$var$f ? "!--" === u[1] ? c = $f58f44579a4747ac$var$v : void 0 !== u[1] ? c = $f58f44579a4747ac$var$_ : void 0 !== u[2] ? ($f58f44579a4747ac$var$$.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = $f58f44579a4747ac$var$m) : void 0 !== u[3] && (c = $f58f44579a4747ac$var$m) : c === $f58f44579a4747ac$var$m ? ">" === u[0] ? (c = r ?? $f58f44579a4747ac$var$f, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? $f58f44579a4747ac$var$m : '"' === u[3] ? $f58f44579a4747ac$var$g : $f58f44579a4747ac$var$p) : c === $f58f44579a4747ac$var$g || c === $f58f44579a4747ac$var$p ? c = $f58f44579a4747ac$var$m : c === $f58f44579a4747ac$var$v || c === $f58f44579a4747ac$var$_ ? c = $f58f44579a4747ac$var$f : (c = $f58f44579a4747ac$var$m, r = void 0);
        const x = c === $f58f44579a4747ac$var$m && t[i + 1].startsWith("/>") ? " " : "";
        l += c === $f58f44579a4747ac$var$f ? s + $f58f44579a4747ac$var$n : d >= 0 ? (o.push(a), s.slice(0, d) + $f58f44579a4747ac$var$e + s.slice(d) + $f58f44579a4747ac$var$h + x) : s + $f58f44579a4747ac$var$h + (-2 === d ? i : x);
    }
    return [
        $f58f44579a4747ac$var$C(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : "")),
        o
    ];
};
class $f58f44579a4747ac$var$V {
    constructor({ strings: t, _$litType$: s }, n){
        let r;
        this.parts = [];
        let c = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = $f58f44579a4747ac$var$P(t, s);
        if (this.el = $f58f44579a4747ac$var$V.createElement(f, n), $f58f44579a4747ac$var$E.currentNode = this.el.content, 2 === s) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = $f58f44579a4747ac$var$E.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith($f58f44579a4747ac$var$e)) {
                    const i = v[a++], s = r.getAttribute(t).split($f58f44579a4747ac$var$h), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: c,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? $f58f44579a4747ac$var$k : "?" === e[1] ? $f58f44579a4747ac$var$H : "@" === e[1] ? $f58f44579a4747ac$var$I : $f58f44579a4747ac$var$R
                    }), r.removeAttribute(t);
                } else t.startsWith($f58f44579a4747ac$var$h) && (d.push({
                    type: 6,
                    index: c
                }), r.removeAttribute(t));
                if ($f58f44579a4747ac$var$$.test(r.tagName)) {
                    const t = r.textContent.split($f58f44579a4747ac$var$h), s = t.length - 1;
                    if (s > 0) {
                        r.textContent = $f58f44579a4747ac$var$i ? $f58f44579a4747ac$var$i.emptyScript : "";
                        for(let i = 0; i < s; i++)r.append(t[i], $f58f44579a4747ac$var$l()), $f58f44579a4747ac$var$E.nextNode(), d.push({
                            type: 2,
                            index: ++c
                        });
                        r.append(t[s], $f58f44579a4747ac$var$l());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === $f58f44579a4747ac$var$o) d.push({
                    type: 2,
                    index: c
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf($f58f44579a4747ac$var$h, t + 1));)d.push({
                        type: 7,
                        index: c
                    }), t += $f58f44579a4747ac$var$h.length - 1;
                }
            }
            c++;
        }
    }
    static createElement(t, i) {
        const s = $f58f44579a4747ac$var$r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $f58f44579a4747ac$var$N(t, i, s = t, e) {
    if (i === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = $f58f44579a4747ac$var$c(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = $f58f44579a4747ac$var$N(t, h._$AS(t, i.values), h, e)), i;
}
class $f58f44579a4747ac$var$S {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? $f58f44579a4747ac$var$r).importNode(i, !0);
        $f58f44579a4747ac$var$E.currentNode = e;
        let h = $f58f44579a4747ac$var$E.nextNode(), o = 0, n = 0, l = s[0];
        for(; void 0 !== l;){
            if (o === l.index) {
                let i;
                2 === l.type ? i = new $f58f44579a4747ac$var$M(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new $f58f44579a4747ac$var$L(h, this, t)), this._$AV.push(i), l = s[++n];
            }
            o !== l?.index && (h = $f58f44579a4747ac$var$E.nextNode(), o++);
        }
        return $f58f44579a4747ac$var$E.currentNode = $f58f44579a4747ac$var$r, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $f58f44579a4747ac$var$M {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $f58f44579a4747ac$var$N(this, t, i), $f58f44579a4747ac$var$c(t) ? t === $f58f44579a4747ac$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && this._$AR(), this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee) : t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : $f58f44579a4747ac$var$u(t) ? this.k(t) : this._(t);
    }
    S(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.S(t));
    }
    _(t) {
        this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && $f58f44579a4747ac$var$c(this._$AH) ? this._$AA.nextSibling.data = t : this.T($f58f44579a4747ac$var$r.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = $f58f44579a4747ac$var$V.createElement($f58f44579a4747ac$var$C(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new $f58f44579a4747ac$var$S(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $f58f44579a4747ac$var$A.get(t.strings);
        return void 0 === i && $f58f44579a4747ac$var$A.set(t.strings, i = new $f58f44579a4747ac$var$V(t)), i;
    }
    k(t) {
        $f58f44579a4747ac$var$a(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new $f58f44579a4747ac$var$M(this.S($f58f44579a4747ac$var$l()), this.S($f58f44579a4747ac$var$l()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        for(this._$AP?.(!1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
    }
}
class $f58f44579a4747ac$var$R {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = $f58f44579a4747ac$var$N(this, t, i, 0), o = !$f58f44579a4747ac$var$c(t) || t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = $f58f44579a4747ac$var$N(this, e[s + n], i, n), r === $f58f44579a4747ac$export$9c068ae9cc5db4e8 && (r = this._$AH[n]), o ||= !$f58f44579a4747ac$var$c(r) || r !== this._$AH[n], r === $f58f44579a4747ac$export$45b790e32b2810ee ? t = $f58f44579a4747ac$export$45b790e32b2810ee : t !== $f58f44579a4747ac$export$45b790e32b2810ee && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === $f58f44579a4747ac$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class $f58f44579a4747ac$var$k extends $f58f44579a4747ac$var$R {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $f58f44579a4747ac$export$45b790e32b2810ee ? void 0 : t;
    }
}
class $f58f44579a4747ac$var$H extends $f58f44579a4747ac$var$R {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== $f58f44579a4747ac$export$45b790e32b2810ee);
    }
}
class $f58f44579a4747ac$var$I extends $f58f44579a4747ac$var$R {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = $f58f44579a4747ac$var$N(this, t, i, 0) ?? $f58f44579a4747ac$export$45b790e32b2810ee) === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return;
        const s = this._$AH, e = t === $f58f44579a4747ac$export$45b790e32b2810ee && s !== $f58f44579a4747ac$export$45b790e32b2810ee || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== $f58f44579a4747ac$export$45b790e32b2810ee && (s === $f58f44579a4747ac$export$45b790e32b2810ee || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class $f58f44579a4747ac$var$L {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $f58f44579a4747ac$var$N(this, t);
    }
}
const $f58f44579a4747ac$export$8613d1ca9052b22e = {
    P: $f58f44579a4747ac$var$e,
    A: $f58f44579a4747ac$var$h,
    C: $f58f44579a4747ac$var$o,
    M: 1,
    L: $f58f44579a4747ac$var$P,
    R: $f58f44579a4747ac$var$S,
    D: $f58f44579a4747ac$var$u,
    V: $f58f44579a4747ac$var$N,
    I: $f58f44579a4747ac$var$M,
    H: $f58f44579a4747ac$var$R,
    N: $f58f44579a4747ac$var$H,
    U: $f58f44579a4747ac$var$I,
    B: $f58f44579a4747ac$var$k,
    F: $f58f44579a4747ac$var$L
}, $f58f44579a4747ac$var$Z = $f58f44579a4747ac$var$t.litHtmlPolyfillSupport;
$f58f44579a4747ac$var$Z?.($f58f44579a4747ac$var$V, $f58f44579a4747ac$var$M), ($f58f44579a4747ac$var$t.litHtmlVersions ??= []).push("3.1.2");
const $f58f44579a4747ac$export$b3890eb0ae9dca99 = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new $f58f44579a4747ac$var$M(i.insertBefore($f58f44579a4747ac$var$l(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class $ab210b2da7b39b9d$export$3f2f9f5909897157 extends (0, $19fe8e3abedf4df0$export$c7c07a37856565d) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        const t = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t.firstChild, t;
    }
    update(t) {
        const i = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $f58f44579a4747ac$export$b3890eb0ae9dca99)(i, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(!0);
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(!1);
    }
    render() {
        return 0, $f58f44579a4747ac$export$9c068ae9cc5db4e8;
    }
}
$ab210b2da7b39b9d$export$3f2f9f5909897157._$litElement$ = !0, $ab210b2da7b39b9d$export$3f2f9f5909897157["finalized"] = !0, globalThis.litElementHydrateSupport?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$var$r = globalThis.litElementPolyfillSupport;
$ab210b2da7b39b9d$var$r?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$export$f5c524615a7708d6 = {
    _$AK: (t, e, i)=>{
        t._$AK(e, i);
    },
    _$AL: (t)=>t._$AL
};
(globalThis.litElementVersions ??= []).push("4.0.4");


/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $a00bca1a101a9088$export$6acf61af03e62db = !1;





/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $107bb7d062dde330$export$9ba3b3f20a85bfa = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}, $107bb7d062dde330$export$99b43ad1ed32e735 = (t)=>(...e)=>({
            _$litDirective$: t,
            values: e
        });
class $107bb7d062dde330$export$befdefbdce210f91 {
    constructor(t){}
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AT(t, e, i) {
        this._$Ct = t, this._$AM = e, this._$Ci = i;
    }
    _$AS(t, e) {
        return this.update(t, e);
    }
    update(t, e) {
        return this.render(...e);
    }
}


/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $19f464fcda7d2482$var$n = "important", $19f464fcda7d2482$var$i = " !" + $19f464fcda7d2482$var$n, $19f464fcda7d2482$export$1e5b4ce2fa884e6a = (0, $107bb7d062dde330$export$99b43ad1ed32e735)(class extends (0, $107bb7d062dde330$export$befdefbdce210f91) {
    constructor(t){
        if (super(t), t.type !== (0, $107bb7d062dde330$export$9ba3b3f20a85bfa).ATTRIBUTE || "style" !== t.name || t.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
    }
    render(t) {
        return Object.keys(t).reduce((e, r)=>{
            const s = t[r];
            return null == s ? e : e + `${r = r.includes("-") ? r : r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s};`;
        }, "");
    }
    update(e, [r]) {
        const { style: s } = e.element;
        if (void 0 === this.ft) return this.ft = new Set(Object.keys(r)), this.render(r);
        for (const t of this.ft)null == r[t] && (this.ft.delete(t), t.includes("-") ? s.removeProperty(t) : s[t] = null);
        for(const t in r){
            const e = r[t];
            if (null != e) {
                this.ft.add(t);
                const r = "string" == typeof e && e.endsWith($19f464fcda7d2482$var$i);
                t.includes("-") || r ? s.setProperty(t, r ? e.slice(0, -11) : e, r ? $19f464fcda7d2482$var$n : "") : s[t] = e;
            }
        }
        return 0, $f58f44579a4747ac$export$9c068ae9cc5db4e8;
    }
});



var $1a7c5d625ead7579$export$2e2bcd8739ae039 = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
  :host {
    --primary-color: #181625;
    --secondary-bg-color: #373258;
    --secondary-color: #403c55;
    --accent-color: rgb(146, 144, 195);
    --maxPrimarySectionWidth: 85vw;
  }
  * {
    font-family: 'Montserrat', sans-serif;
    color: white;
    margin: 0;
    overflow: hidden;
  }
	@media (max-width: 768px) {
		.header {
			padding: 1rem 1rem 1rem 1rem !important;
		}
	}
  .header {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    padding: 1rem 70px;
    justify-content: space-between;
    box-sizing: border-box;
    background-color: var(--primary-color);
    filter: drop-shadow(2px 4px 6px black);
    backdrop-filter: blur(15px) brightness(0.7);
    transition: background-color 0.5s ease;
    z-index: 5;
    height: auto;
    display: flex;
    align-items: center;
    & nav {
      display: flex;
    }
    & a,
    h1 {
      text-decoration: none;
      margin: 0 1rem 0 0;
      color: var(--accent-color);
      text-transform: capitalize;
      &:hover {
        color: white;
      }
    }
  }

  main {
    margin: 0;
    background-color: var(--primary-color);
    transition: background-color 0.4s ease;
  }
  button {
    cursor: pointer;
  }

  section.inner_content {
    min-height: 100vh;
  }

  @media (max-width: 768px) {
    section.inner_content {
      max-width: 100vw;
    }
  }

  .search {
    background-color: transparent;
    border: 1px solid var(--secondary-color);
    border-radius: 50px;
    font-family: inherit;
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }

  .search::placeholder {
    color: var(--secondary-color);
  }

  .search:focus {
    outline: none;
    border: 1px solid var(--accent-color);
    color: var(--accent-color);
  }

  .horizontal-header {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-x: auto;
  }
  .horizontal-header h2 {
    position: sticky;
    top: 0;
    left: 1rem;
    margin: 2rem 1rem 0 1rem;
  }
  .horizontal-list {
    display: flex;
    flex-direction: row;
    width: fit-content;
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
    /* position: absolute;
    padding: 1.5rem;
    bottom: 25%;
    z-index: 2; */
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

  .items-container,
  .searched {
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-columns: repeat( auto-fill, minmax(210px, 1fr) );
    grid-auto-flow: dense;
    grid-template-rows: auto;
    align-items: stretch;
  }
  /* #kodi-movies > .horizontal-header > .items-container > .movie-s:nth-child(4), #kodi-movies > .horizontal-header > .items-container > .movie-s:nth-child(7) {
    grid-column: span 2;
    grid-row: span 2;
  }
  #tmdb-movies > .horizontal-header > .items-container > .movie-s:nth-child(2), #tmdb-movies > .horizontal-header > .items-container > .movie-s:nth-child(6) {
    grid-column: span 2;
    grid-row: span 2;
  } */
  .items-container h2 {
    width: 100%;
    margin: 2rem 1rem 0 1rem;
    display: flex;
  }

  .movie-s img,
  .movie-l img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 2px 2px 14px 0px #000000;
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
    z-index: 4;
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
  position: absolute;
  top: -10px;
  right: -10px;
  color: #aaaaaa;
  float: right;
  font-size: 1.4rem;
  font-weight: bold;
  background-color: white;
  border-radius: 100%;
  padding: 0.4rem 0.7rem;
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;


const $927e8cf0f6fe9586$export$bce7bb55f21f013 = 'https://api.themoviedb.org/3/search/movie?api_key=62dce7dcd2282d8e5f63556d214eaa74&query="';
const $927e8cf0f6fe9586$export$927457973eb16419 = "https://image.tmdb.org/t/p/w1280";
const $927e8cf0f6fe9586$export$923ea8233b386e99 = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=62dce7dcd2282d8e5f63556d214eaa74&page=1";
const $927e8cf0f6fe9586$export$4c1fa0ac0eff2ac = "https://www.themoviedb.org/movie/";


class $1189ae3e6c799a16$export$904090fa8350021 extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    _hass;
    static get properties() {
        return {
            _entity: {
                state: true
            },
            _name: {
                state: true
            },
            _state: {
                state: true
            },
            _status: {
                state: true
            },
            movies: {
                type: Array
            },
            kodiMovies: {
                type: Array
            },
            search: {
                type: String
            },
            searchResults: {
                type: Array
            },
            isSearchActive: {
                type: Boolean
            }
        };
    }
    static styles = [
        (0, $1a7c5d625ead7579$export$2e2bcd8739ae039)
    ];
    constructor(){
        super();
        this.cinemaMovies = [];
        this.kodiMovies = [];
        this.search = "";
        this.searchResults = [];
        this.isSearchActive = false;
        this.API_URL = `${0, $927e8cf0f6fe9586$export$923ea8233b386e99}`;
        this.IMG_PATH = `${0, $927e8cf0f6fe9586$export$927457973eb16419}`;
        this.URL_PATH = `${0, $927e8cf0f6fe9586$export$4c1fa0ac0eff2ac}`;
        this.SEARCH_API = `${0, $927e8cf0f6fe9586$export$bce7bb55f21f013}`;
        this.getCinemaMovies(this.API_URL);
    }
    // Method to set configuration
    setConfig(config) {
        this._entity = config.entity;
        if (this._hass) this.hass = this._hass;
    }
    /**
   * @param {{ states: { [x: string]: any; }; callService: (arg0: string, arg1: string, arg2: { file: any; }) => void; }} hass
   */ set hass(hass) {
        this._hass = hass;
        this._state = hass.states[this._entity];
        if (this._state) {
            this._status = this._state.state;
            let fn = this._state.attributes.friendly_name;
            this._name = fn ? fn : this._entity;
            // Fetch Kodi movies after entity state is updated
            this.getKodiMovies();
        }
    }
    connectedCallback() {
        super.connectedCallback();
        window.addEventListener("scroll", this.handleScroll.bind(this));
    }
    disconnectedCallback() {
        window.removeEventListener("scroll", this.handleScroll.bind(this));
        super.disconnectedCallback();
    }
    /* ------------------------------ FETCH MOVIES ------------------------------ */ async getCinemaMovies(url) {
        try {
            const res = await fetch(url);
            const data = await res.json();
            this.cinemaMovies = data.results;
            this.requestUpdate(); // Forces update
        // console.log(this.cinemaMovies);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    }
    getKodiMovies() {
        if (this._state && this._state.attributes && this._state.attributes.data) {
            let data = this._state.attributes.data;
            this.kodiMovies = data;
        } else console.error("Kodi Movies data is not available.");
    }
    /* -------------------------------------------------------------------------- */ /*                               RENDER SECTIONS                              */ /* -------------------------------------------------------------------------- */ renderMovie(movie, isMostPopular, isKodiMovie = false) {
        const debug = false;
        const movieClass = isMostPopular ? "movie-l" : "movie-s";
        const movieTitle = isKodiMovie ? movie.title : movie.title;
        const movieRating = isKodiMovie ? movie.rating : movie.vote_average;
        const moviePlot = isKodiMovie ? movie.plot : movie.overview;
        const movieURL = isKodiMovie ? movie.tmdb_link : this.URL_PATH + movie.id;
        const movieStreamUrl = isKodiMovie ? movie.strm_url : "";
        // console.log(movieStreamUrl);
        let moviePath;
        if (isKodiMovie) {
            if (isMostPopular) // Use fanart_url, but if it's falsy (undefined, null, empty string, etc.), fallback to poster_url
            moviePath = movie.fanart_url ? movie.fanart_url : movie.poster_url;
            else moviePath = movie.poster_url;
        } else moviePath = this.IMG_PATH + (isMostPopular ? movie.backdrop_path : movie.poster_path);
        let ratingGradient;
        if (movieRating >= 8 && movieRating <= 10) ratingGradient = `#008704`;
        else if (movieRating >= 6.5 && movieRating < 8) ratingGradient = `#8a5200`;
        else ratingGradient = `#0000007d`;
        const ratingGradientBg = {
            background: `linear-gradient(15deg, #bbbbbb 0%, ${ratingGradient} 40%)`
        };
        if (debug) console.log(`%cMovie rating: ${movieRating} Rating gradient color: ${ratingGradient}`, `color: white; background: ${ratingGradient}`);
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <div class="${movieClass}">
        <img src="${moviePath}" alt="${movieTitle}" />
        <div class="movie-info">
          ${!isMostPopular && movieRating ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<h3>${movieTitle}</h3>
                <span class="vote" style=${(0, $19f464fcda7d2482$export$1e5b4ce2fa884e6a)(ratingGradientBg)}
                  >⭐ ${movieRating.toFixed(1)}</span
                >` : !movieRating ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<h3>${movieTitle}</h3>` : ""}
        </div>
        <div class="overview ${!isMostPopular ? "hidden" : "visible"}">
          <h3>${movieTitle}</h3>
          <p>${moviePlot}</p>
          <div class="buttons">
            <button
              class="watch-now"
              @click="${()=>this._playMovie(movieStreamUrl)}"
            >
              Watch now
            </button>
            <button
              class="watch-later"
              @click="${()=>this._openPopup(movieURL)}"
            >
              +
            </button>
          </div>
        </div>
      </div>
    `;
    }
    renderMovies() {
        const mostPopularMovies = this.cinemaMovies.slice(0, 5).map((movie)=>this.renderMovie(movie, true));
        const recommendedMovies = this.cinemaMovies.slice(5).map((movie)=>this.renderMovie(movie, false));
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <div class="horizontal-header">
        <h2>Most Popular</h2>
        <div class="horizontal-list">${mostPopularMovies}</div>
      </div>
      <div class="horizontal-header">
        <h2>Recommended for you</h2>
        <div class="items-container">${recommendedMovies}</div>
      </div>
    `;
    }
    renderKodiMovies() {
        const mostPopularKodiMovies = this.kodiMovies.slice(0, 7).map((movie)=>this.renderMovie(movie, true, true));
        const recommendedKodiMovies = this.kodiMovies.slice(7).map((movie)=>this.renderMovie(movie, false, true));
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <div class="horizontal-header">
        <h2>Recently added</h2>
        <div class="horizontal-list">${mostPopularKodiMovies}</div>
      </div>
      <div class="horizontal-header">
        <h2>Kodi library</h2>
        <div class="items-container">${recommendedKodiMovies}</div>
      </div>
    `;
    }
    renderSearchResults() {
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <div class="searched">
        ${this.searchResults.map((movie)=>this.renderMovie(movie, false, false))}
      </div>
    `;
    }
    /* -------------------------------------------------------------------------- */ /*                              MAIN PAGE RENDER                              */ /* -------------------------------------------------------------------------- */ render() {
        // console.log('Rendering component...');
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <div class="header">
        <nav>
          <a href="#" data-target="kodi-movies" @click="${this.scrollToSection}"
            ><h1>Kodi</h1></a
          >
          <a href="#" data-target="tmdb-movies" @click="${this.scrollToSection}"
            ><h1>Cinema</h1></a
          >
        </nav>
        <form id="form" @submit="${this.handleSearch}">
          <input
            type="text"
            .value="${this.search}"
            @input="${this.updateSearch}"
            class="search"
            placeholder="search"
          />
        </form>
      </div>
      <main>
        <section id="kodi-movies" class="inner_content">
          ${this.isSearchActive ? this.renderSearchResults() : this.renderKodiMovies()}
        </section>
        ${!this.isSearchActive ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<section id="tmdb-movies" class="inner_content">
              ${this.renderMovies()}
            </section>` : (0, $f58f44579a4747ac$export$45b790e32b2810ee)}
        <dialog id="popup-dialog"></dialog>
      </main>
    `;
    }
    /* -------------------------------------------------------------------------- */ /*                               ACTIONS HANDLER                              */ /* -------------------------------------------------------------------------- */ scrollToSection(event) {
        event.preventDefault(); // Prevent default behavior of anchor tag
        const targetId = event.currentTarget.getAttribute("data-target"); // Get the hash value
        const section = this.shadowRoot.querySelector(`#${targetId}`); // Get the corresponding section
        const headerHeight = this.shadowRoot.querySelector(".header").offsetHeight; // Get header height
        if (section) {
            // Calculate the target scroll position considering the header height
            const targetScrollPosition = section.getBoundingClientRect().top + window.scrollY - headerHeight;
            // Scroll to the target position
            window.scrollTo({
                top: targetScrollPosition,
                behavior: "smooth"
            });
        }
    }
    handleScroll() {
        // console.log('Scrolling....');
        const sections = this.shadowRoot.querySelectorAll(".inner_content");
        const mainElement = this.shadowRoot.querySelector("main");
        const headerElement = this.shadowRoot.querySelector(".header");
        let isPrimarySectionAtTop = false;
        sections.forEach((section, index)=>{
            const rect = section.getBoundingClientRect();
            // Check if the top of the section is near the top of the viewport
            if (rect.top >= 0 && rect.top <= headerElement.offsetHeight) isPrimarySectionAtTop = index % 2 === 0;
        });
        // console.log(isPrimarySectionAtTop);
        // Apply the background color to the main element based on the section index
        mainElement.style.backgroundColor = isPrimarySectionAtTop ? "var(--primary-color)" : "var(--secondary-bg-color)";
        // Change header background color when a primary-colored section is at the top
        headerElement.style.backgroundColor = isPrimarySectionAtTop ? "var(--primary-color)" : "rgba(0, 0, 0, 0.5)";
    }
    // Method to open the more info dialog
    _openPopup(url) {
        const dialog = this.shadowRoot.querySelector("#popup-dialog");
        dialog.innerHTML = `
    <span class="close">&times;</span>
    <div class="popup-content">
    <iframe src="${url}" frameborder="0" width="100%" height="100%" ></iframe>
    </div>
  `;
        dialog.showModal();
        const closeButton = dialog.querySelector(".close");
        closeButton.addEventListener("click", ()=>this._closePopup());
        // Add event listener to close the popup when clicked outside
        dialog.addEventListener("click", (event)=>{
            if (event.target === dialog) this._closePopup();
        });
    }
    _closePopup() {
        const dialog = this.shadowRoot.querySelector("#popup-dialog");
        dialog.close();
    }
    /* ------------------------- PLAY MOVIE CALLSERVICE ------------------------- */ _playMovie(strm_url) {
        this._hass.callService("script", "run_plugin", {
            file: strm_url
        });
    }
    /* ------------------------------ SEARCH HANDLE ----------------------------- */ updateSearch(e) {
        this.search = e.target.value;
    }
    async handleSearch(e) {
        e.preventDefault();
        const searchTerm = this.search.trim();
        if (searchTerm) try {
            const response = await fetch(`${this.SEARCH_API}${searchTerm}`);
            const data = await response.json();
            this.searchResults = data.results;
            this.isSearchActive = true;
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
        else {
            this.isSearchActive = false;
            this.getMovies(this.API_URL);
        }
    }
    static getStubConfig() {
        return {
            entity: "sensor.kodi_all_movies"
        };
    }
}


// Registering the custom element
customElements.define("movie-app-panel", (0, $1189ae3e6c799a16$export$904090fa8350021));
console.info("%c \uD83D\uDCFB Movie App Panel ", "background: #222; color: #bada55");
window.customCards = window.customCards || [];
window.customCards.push({
    preview: false,
    type: "movie-app-panel",
    name: "Movie App Panel"
});


//# sourceMappingURL=lovelace-movie-panel.js.map
