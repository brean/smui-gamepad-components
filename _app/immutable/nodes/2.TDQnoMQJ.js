var di=Object.defineProperty;var ui=(r,t,e)=>t in r?di(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var H=(r,t,e)=>ui(r,typeof t!="symbol"?t+"":t,e);import{b as sn,e as fi,c as ct,a as D,t as It,n as hi,d as Qe}from"../chunks/CcVevay-.js";import{q as Wn,h as Dt,B as Oe,b as hn,R as o,au as gi,ad as vi,ae as yn,A as De,z as Ie,c as ue,C as Li,af as gn,a as je,ag as Kn,I as Vn,r as pi,a1 as mi,a7 as bn,av as Je,o as Pe,aw as wi,ax as _i,ay as yi,G as bi,az as Qi,d as vn,aA as xi,aB as Ii,x as Gn,D as Si,y as Fi,w as zn,E as qn,aC as on,K as Ci,ah as jn,u as Xn,ai as Ai,S as Ei,s as ki,ac as Mi,aD as Ti,aE as Ri,aF as Oi,aG as Di,aH as Pi,aI as Ni,aJ as Ui,as as Hi,n as ft,j as Qn,k as xn,m as Bi,L as pt,M as mt,aK as Ae,_ as Y,a2 as Lt,f as J,X as _t,Y as yt,W as Ut,Z as ut,aL as jt,aM as Ft,U as bt,e as Tt,aN as lt,aO as Wi,O as Ki,aP as Vi}from"../chunks/BbZV1MqI.js";import{i as Gi,a as In,b as zi,c as qi,d as Xe,n as ji,e as Xi,f as Yi,g as ve,o as Zi,s as xe}from"../chunks/8b1lIJxs.js";import{a as B,p as f,i as At,b as dt,c as Ee,s as Wt,r as kt,d as Ji,e as $i,f as Be}from"../chunks/DcCXenSd.js";import{s as Qt}from"../chunks/D21e4fLJ.js";import{o as ae,a as Ue,w as Sn}from"../chunks/DxKdBhZv.js";import"../chunks/CyIKNhRE.js";function tr(r,t){if(t){const e=document.body;r.autofocus=!0,Wn(()=>{document.activeElement===e&&r.focus()})}}function er(r,t){return t}function nr(r,t,e,n){for(var i=[],a=t.length,s=0;s<a;s++)yi(t[s].e,i,!0);var c=a>0&&i.length===0&&e!==null;if(c){var l=e.parentNode;bi(l),l.append(e),n.clear(),me(r,t[0].prev,t[a-1].next)}Qi(i,()=>{for(var g=0;g<a;g++){var L=t[g];c||(n.delete(L.k),me(r,L.prev,L.next)),vn(L.e,!c)}})}function Yn(r,t,e,n,i,a=null){var s=r,c={flags:t,items:new Map,first:null};Dt&&Oe();var l=null,g=!1,L=gi(()=>{var m=e();return pi(m)?m:m==null?[]:Vn(m)});hn(()=>{var m=o(L),d=m.length;if(g&&d===0)return;g=d===0;let h=!1;if(Dt){var p=s.data===vi;p!==(d===0)&&(s=yn(),De(s),Ie(!1),h=!0)}if(Dt){for(var _=null,y,v=0;v<d;v++){if(ue.nodeType===8&&ue.data===Li){s=ue,h=!0,Ie(!1);break}var w=m[v],I=n(w,v);y=Zn(ue,c,_,null,w,I,v,i,t,e),c.items.set(I,y),_=y}d>0&&De(yn())}Dt||ir(m,c,s,i,t,n,e),a!==null&&(d===0?l?gn(l):l=je(()=>a(s)):l!==null&&Kn(l,()=>{l=null})),h&&Ie(!0),o(L)}),Dt&&(s=ue)}function ir(r,t,e,n,i,a,s){var c=r.length,l=t.items,g=t.first,L=g,m,d=null,h=[],p=[],_,y,v,w;for(w=0;w<c;w+=1){if(_=r[w],y=a(_,w),v=l.get(y),v===void 0){var I=L?L.e.nodes_start:e;d=Zn(I,t,d,d===null?t.first:d.next,_,y,w,n,i,s),l.set(y,d),h=[],p=[],L=d.next;continue}if(rr(v,_,w),(v.e.f&Je)!==0&&gn(v.e),v!==L){if(m!==void 0&&m.has(v)){if(h.length<p.length){var C=p[0],E;d=C.prev;var Q=h[0],T=h[h.length-1];for(E=0;E<h.length;E+=1)Fn(h[E],C,e);for(E=0;E<p.length;E+=1)m.delete(p[E]);me(t,Q.prev,T.next),me(t,d,Q),me(t,T,C),L=C,d=T,w-=1,h=[],p=[]}else m.delete(v),Fn(v,L,e),me(t,v.prev,v.next),me(t,v,d===null?t.first:d.next),me(t,d,v),d=v;continue}for(h=[],p=[];L!==null&&L.k!==y;)(L.e.f&Je)===0&&(m??(m=new Set)).add(L),p.push(L),L=L.next;if(L===null)continue;v=L}h.push(v),d=v,L=v.next}if(L!==null||m!==void 0){for(var k=m===void 0?[]:Vn(m);L!==null;)(L.e.f&Je)===0&&k.push(L),L=L.next;var S=k.length;if(S>0){var V=null;nr(t,k,V,l)}}Pe.first=t.first&&t.first.e,Pe.last=d&&d.e}function rr(r,t,e,n){_i(r.v,t),r.i=e}function Zn(r,t,e,n,i,a,s,c,l,g){var L=(l&xi)!==0,m=(l&Ii)===0,d=L?m?mi(i):bn(i):i,h=(l&wi)===0?s:bn(s),p={i:h,v:d,k:a,a:null,e:null,prev:e,next:n};try{return p.e=je(()=>c(r,d,h,g),Dt),p.e.prev=e&&e.e,p.e.next=n&&n.e,e===null?t.first=p:(e.next=p,e.e.next=p.e),n!==null&&(n.prev=p,n.e.prev=p.e),p}finally{}}function Fn(r,t,e){for(var n=r.next?r.next.e.nodes_start:e,i=t?t.e.nodes_start:e,a=r.e.nodes_start;a!==n;){var s=Gn(a);i.before(a),a=s}}function me(r,t,e){t===null?r.first=e:(t.next=e,t.e.next=e&&e.e),e!==null&&(e.prev=t,e.e.prev=t&&t.e)}function ar(r,t,e,n,i){var a=r,s="",c;hn(()=>{if(s===(s=t()??"")){Dt&&Oe();return}c!==void 0&&(vn(c),c=void 0),s!==""&&(c=je(()=>{if(Dt){ue.data;for(var l=Oe(),g=l;l!==null&&(l.nodeType!==8||l.data!=="");)g=l,l=Gn(l);if(l===null)throw Si(),Fi;sn(ue,g),a=De(l);return}var L=s+"",m=fi(L);sn(zn(m),m.lastChild),a.before(m)}))})}function Cn(r,t,e,n,i,a){let s=Dt;Dt&&Oe();var c,l,g=null;Dt&&ue.nodeType===1&&(g=ue,Oe());var L=Dt?ue:r,m;hn(()=>{const d=t()||null;var h=d==="svg"?on:null;d!==c&&(m&&(d===null?Kn(m,()=>{m=null,l=null}):d===l?gn(m):(vn(m),In(!1))),d&&d!==l&&(m=je(()=>{if(g=Dt?g:h?document.createElementNS(h,d):document.createElement(d),sn(g,g),n){Dt&&Gi(d)&&g.append(document.createComment(""));var p=Dt?zn(g):g.appendChild(Ci());Dt&&(p===null?Ie(!1):De(p)),n(g,p)}Pe.nodes_end=g,L.before(g)})),c=d,c&&(l=c),In(!0))},qn),s&&(Ie(!0),De(L))}function $t(r,t,e){jn(()=>{var n=Xn(()=>t(r,e==null?void 0:e())||{});if(e&&(n!=null&&n.update)){var i=!1,a={};Ai(()=>{var s=e();Ei(s),i&&ki(a,s)&&(a=s,n.update(s))}),i=!0}if(n!=null&&n.destroy)return()=>n.destroy()})}function Jn(r){var t,e,n="";if(typeof r=="string"||typeof r=="number")n+=r;else if(typeof r=="object")if(Array.isArray(r)){var i=r.length;for(t=0;t<i;t++)r[t]&&(e=Jn(r[t]))&&(n&&(n+=" "),n+=e)}else for(e in r)r[e]&&(n&&(n+=" "),n+=e);return n}function sr(){for(var r,t,e=0,n="",i=arguments.length;e<i;e++)(r=arguments[e])&&(t=Jn(r))&&(n&&(n+=" "),n+=t);return n}function or(r){return typeof r=="object"?sr(r):r??""}function lr(r,t){t?r.hasAttribute("selected")||r.setAttribute("selected",""):r.removeAttribute("selected")}function ln(r,t,e,n){var i=r.__attributes??(r.__attributes={});Dt&&(i[t]=r.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&r.nodeName==="LINK")||i[t]!==(i[t]=e)&&(t==="style"&&"__styles"in r&&(r.__styles={}),t==="loading"&&(r[Ti]=e),e==null?r.removeAttribute(t):typeof e!="string"&&$n(r).includes(t)?r[t]=e:r.setAttribute(t,e))}function Kt(r,t,e,n,i=!1,a=!1,s=!1){let c=Dt&&a;c&&Ie(!1);var l=t||{},g=r.tagName==="OPTION";for(var L in t)L in e||(e[L]=null);e.class&&(e.class=or(e.class));var m=$n(r),d=r.__attributes??(r.__attributes={});for(const w in e){let I=e[w];if(g&&w==="value"&&I==null){r.value=r.__value="",l[w]=I;continue}var h=l[w];if(I!==h){l[w]=I;var p=w[0]+w[1];if(p!=="$$"){if(p==="on"){const C={},E="$$"+w;let Q=w.slice(2);var _=Xi(Q);if(zi(Q)&&(Q=Q.slice(0,-7),C.capture=!0),!_&&h){if(I!=null)continue;r.removeEventListener(Q,l[E],C),l[E]=null}if(I!=null)if(_)r[`__${Q}`]=I,Xe([Q]);else{let T=function(k){l[w].call(this,k)};l[E]=qi(Q,r,T,C)}else _&&(r[`__${Q}`]=void 0)}else if(w==="style"&&I!=null)r.style.cssText=I+"";else if(w==="autofocus")tr(r,!!I);else if(!a&&(w==="__value"||w==="value"&&I!=null))r.value=r.__value=I;else if(w==="selected"&&g)lr(r,I);else{var y=w;i||(y=ji(y));var v=y==="defaultValue"||y==="defaultChecked";if(I==null&&!a&&!v)if(d[w]=null,y==="value"||y==="checked"){let C=r;if(y==="value"){let E=C.defaultValue;C.removeAttribute(y),C.defaultValue=E}else{let E=C.defaultChecked;C.removeAttribute(y),C.defaultChecked=E}}else r.removeAttribute(w);else v||m.includes(y)&&(a||typeof I!="string")?r[y]=I:typeof I!="function"&&ln(r,y,I)}w==="style"&&"__styles"in r&&(r.__styles={})}}}return c&&Ie(!0),l}var An=new Map;function $n(r){var t=An.get(r.nodeName);if(t)return t;An.set(r.nodeName,t=[]);for(var e,n=r,i=Element.prototype;i!==n;){e=Ri(n);for(var a in e)e[a].set&&t.push(a);n=Mi(n)}return t}function St(r,t,e,n){var i=r.__styles??(r.__styles={});i[t]!==e&&(i[t]=e,e==null?r.style.removeProperty(t):r.style.setProperty(t,e,""))}const cr=()=>performance.now(),ge={tick:r=>requestAnimationFrame(r),now:()=>cr(),tasks:new Set};function ti(){const r=ge.now();ge.tasks.forEach(t=>{t.c(r)||(ge.tasks.delete(t),t.f())}),ge.tasks.size!==0&&ge.tick(ti)}function dr(r){let t;return ge.tasks.size===0&&ge.tick(ti),{promise:new Promise(e=>{ge.tasks.add(t={c:r,f:e})}),abort(){ge.tasks.delete(t)}}}function We(r,t){r.dispatchEvent(new CustomEvent(t))}function ur(r){if(r==="float")return"cssFloat";if(r==="offset")return"cssOffset";if(r.startsWith("--"))return r;const t=r.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(e=>e[0].toUpperCase()+e.slice(1)).join("")}function En(r){const t={},e=r.split(";");for(const n of e){const[i,a]=n.split(":");if(!i||a===void 0)break;const s=ur(i.trim());t[s]=a.trim()}return t}const fr=r=>r;function kn(r,t,e,n){var i=(r&Ni)!==0,a=(r&Ui)!==0,s=i&&a,c=(r&Pi)!==0,l=s?"both":i?"in":"out",g,L=t.inert,m=t.style.overflow,d,h;function p(){var I=Bi,C=Pe;Qn(null),xn(null);try{return g??(g=e()(t,(n==null?void 0:n())??{},{direction:l}))}finally{Qn(I),xn(C)}}var _={is_global:c,in(){var I;if(t.inert=L,!i){h==null||h.abort(),(I=h==null?void 0:h.reset)==null||I.call(h);return}a||d==null||d.abort(),We(t,"introstart"),d=cn(t,p(),h,1,()=>{We(t,"introend"),d==null||d.abort(),d=g=void 0,t.style.overflow=m})},out(I){if(!a){I==null||I(),g=void 0;return}t.inert=!0,We(t,"outrostart"),h=cn(t,p(),d,0,()=>{We(t,"outroend"),I==null||I()})},stop:()=>{d==null||d.abort(),h==null||h.abort()}},y=Pe;if((y.transitions??(y.transitions=[])).push(_),i&&Yi){var v=c;if(!v){for(var w=y.parent;w&&(w.f&qn)!==0;)for(;(w=w.parent)&&(w.f&Oi)===0;);v=!w||(w.f&Di)!==0}v&&jn(()=>{Xn(()=>_.in())})}}function cn(r,t,e,n,i){var a=n===1;if(Hi(t)){var s,c=!1;return Wn(()=>{if(!c){var y=t({direction:a?"in":"out"});s=cn(r,y,e,n,i)}}),{abort:()=>{c=!0,s==null||s.abort()},deactivate:()=>s.deactivate(),reset:()=>s.reset(),t:()=>s.t()}}if(e==null||e.deactivate(),!(t!=null&&t.duration))return i(),{abort:ft,deactivate:ft,reset:ft,t:()=>n};const{delay:l=0,css:g,tick:L,easing:m=fr}=t;var d=[];if(a&&e===void 0&&(L&&L(0,1),g)){var h=En(g(0,1));d.push(h,h)}var p=()=>1-n,_=r.animate(d,{duration:l});return _.onfinish=()=>{var y=(e==null?void 0:e.t())??1-n;e==null||e.abort();var v=n-y,w=t.duration*Math.abs(v),I=[];if(w>0){var C=!1;if(g)for(var E=Math.ceil(w/16.666666666666668),Q=0;Q<=E;Q+=1){var T=y+v*m(Q/E),k=En(g(T,1-T));I.push(k),C||(C=k.overflow==="hidden")}C&&(r.style.overflow="hidden"),p=()=>{var S=_.currentTime;return y+v*m(S/w)},L&&dr(()=>{if(_.playState!=="running")return!1;var S=p();return L(S,1-S),!0})}_=r.animate(I,{duration:w,fill:"forwards"}),_.onfinish=()=>{p=()=>n,L==null||L(n,1-n),i()}},{abort:()=>{_&&(_.cancel(),_.effect=null,_.onfinish=ft)},deactivate:()=>{i=ft},reset:()=>{n===0&&(L==null||L(1,0))},t:()=>p()}}const hr=r=>r;function Mn(r,{delay:t=0,duration:e=400,easing:n=hr}={}){const i=+getComputedStyle(r).opacity;return{delay:t,duration:e,easing:n,css:a=>`opacity: ${a*i}`}}class z{}H(z,"DOWN",0),H(z,"RIGHT",1),H(z,"LEFT",2),H(z,"UP",3),H(z,"BUMPER_LEFT",4),H(z,"BUMPER_RIGHT",5),H(z,"TRIGGER_LEFT",6),H(z,"TRIGGER_RIGHT",7),H(z,"VIEW",8),H(z,"MENU",9),H(z,"AXIS_BUTTON_LEFT",10),H(z,"AXIS_BUTTON_RIGHT",11),H(z,"DPAD_UP",12),H(z,"DPAD_DOWN",13),H(z,"DPAD_LEFT",14),H(z,"DPAD_RIGHT",15),H(z,"HOME",16),H(z,"CROSS",0),H(z,"CIRCLE",1),H(z,"SQUARE",2),H(z,"TRIANGLE",3),H(z,"L1",4),H(z,"R1",5),H(z,"L2",6),H(z,"R2",7),H(z,"SHARE",8),H(z,"OPTIONS",9),H(z,"PS",16),H(z,"A",0),H(z,"B",1),H(z,"X",2),H(z,"Y",3),H(z,"LB",4),H(z,"RB",5),H(z,"TL",6),H(z,"TR",7),H(z,"BACK",8),H(z,"START",9),H(z,"XBOX",16);const gr=(r,t)=>Math.sqrt(r**2+t**2),vr=(r,t)=>Math.atan2(t,r),Lr=(r,t)=>[r*Math.cos(t),r*Math.sin(t)],pr=(r,t)=>Math.min(Math.max(-t,r),t);function Ne(r,t){return r.gamepad===-1||r.gamepad===t.index}class Ln{constructor(t,e,n=!1,i=void 0,a=void 0,s=void 0){H(this,"focusElement");H(this,"requiresFocus");H(this,"input");H(this,"disabled",!1);H(this,"onpressedCallback");H(this,"onholdCallback");H(this,"onreleaseCallback");this.onpressedCallback=i,this.onholdCallback=a,this.onreleaseCallback=s,this.focusElement=e,this.input=t,console.log(e),this.requiresFocus=n}onpressed(){return this.onpressedCallback?this.onpressedCallback():!1}onhold(){this.onholdCallback&&this.onholdCallback()}onrelease(){this.onreleaseCallback&&this.onreleaseCallback()}thisGamepadButton(t,e){return Ne(this.input,t)}onbuttonpressed(t,e){return this.onpressed()}onbuttonrelease(t,e){this.onrelease()}onbuttonhold(t,e){this.onhold()}onupdate(t){}thisKey(t){return!1}onkeypressed(t){return this.onpressed()}onkeyrelease(t){this.onrelease()}onkeyhold(t){this.onhold()}}const xt=B({components:{},activeComponents:[],showHints:!1,context:"default"}),pn=(r,t)=>{r.forEach(e=>{xt.components[e]||(xt.components[e]=[]),xt.components[e].push(t)}),!t.requiresFocus&&r.includes("default")&&xt.activeComponents.push(t),t.focusElement&&t.requiresFocus&&(t.focusElement.addEventListener("focus",()=>{r.includes(xt.context)&&xt.activeComponents.push(t)}),t.focusElement.addEventListener("blur",()=>{xt.activeComponents.splice(xt.activeComponents.indexOf(t),1)}))},mn=(r,t)=>{r.forEach(e=>{xt.components[e]&&xt.components[e].splice(xt.components[e].indexOf(t),1)}),xt.activeComponents.includes(t)&&xt.activeComponents.slice(xt.activeComponents.indexOf(t))};function mr(r,t){pt(t,!0);let e=f(t,"updateUsingAnimationFrame",3,!1),n=f(t,"updateUsingInterval",3,!0),i=f(t,"timeout",3,1e3/25);const a=_=>{xt.activeComponents.forEach(v=>{v.focusElement&&v.focusElement.blur()}),xt.activeComponents=[],xt.components[_].forEach(v=>{(!v.requiresFocus||v.focusElement===document.activeElement)&&xt.activeComponents.push(v)}),xt.context=_};let s={},c={},l;const g=_=>{l=_.target.navigator},L=()=>{let _=xt.activeComponents;if(l){for(let y of l.getGamepads())if(y){for(let v=0;v<y.buttons.length;v++){if(y.buttons[v].pressed&&(_.forEach(w=>{w.thisGamepadButton(y,v)&&w.onbuttonhold(y,v)}),!s[v])){s[v]=!0;for(let w of _)if(w.thisGamepadButton(y,v)&&w.onbuttonpressed(y,v)===!0)break}s[v]&&!y.buttons[v].pressed&&(s[v]=!1,_.forEach(w=>{w.thisGamepadButton(y,v)&&w.onbuttonrelease(y,v)}))}_.forEach(v=>{Ne(v.input,y)&&v.onupdate(y)})}}},m=()=>{L(),requestAnimationFrame(m)};ae(()=>{e()?m():n()&&setInterval(L,i())});const d=_=>{let y=xt.activeComponents;for(let v of y)if(v.onkeypressed(_)===!0)break},h=_=>{const y=_.key.toLowerCase();c[y]||d(_);let v=xt.activeComponents;c[y]=!0,v.forEach(w=>{w.onkeyhold(_)})},p=_=>{const y=_.key.toLowerCase();delete c[y],xt.activeComponents.forEach(w=>{w.onkeyrelease(_)})};return ve("gamepadconnected",Ae,g),ve("keydown",Ae,h),ve("keyup",Ae,p),mt({changeContext:a})}class wr extends Ln{constructor(){super(...arguments);H(this,"pressed",!1)}thisGamepadButton(e,n){return super.thisGamepadButton(e,n)&&this.input.buttons.includes(n)}onpressed(){return this.disabled?!1:(this.pressed=!0,super.onpressed(),!0)}onhold(){super.onhold()}onrelease(){this.pressed=!1,super.onrelease()}thisKey(e){return e&&this.input.keys.includes(e.key.toLowerCase())||!1}onkeypressed(e){return this.thisKey(e)&&super.onkeypressed(e)}onkeyrelease(e){this.thisKey(e)&&super.onkeyrelease(e)}onkeyhold(e){this.thisKey(e)&&super.onkeyhold(e)}}class _r extends Ln{constructor(){super(...arguments);H(this,"xPos",!1);H(this,"xNeg",!1);H(this,"yPos",!1);H(this,"yNeg",!1);H(this,"gamepadActive",!1);H(this,"pos",[0,0]);H(this,"radius",50);H(this,"calcPos",(e,n)=>{});H(this,"updatePosition",(e,n)=>{});H(this,"activateGamepad",()=>{this.disabled||(this.gamepadActive=!0)})}onrelease(){let e=this.pos[0],n=this.pos[1];(this.xPos||this.xNeg)&&(e=0),(this.yPos||this.yNeg)&&(n=0),!(e==this.pos[0]&&n==this.pos[1])&&(this.calcPos(e*this.radius,n*this.radius),this.pos=[e,n],this.gamepadActive=!0)}onhold(){let e=this.pos[0],n=this.pos[1];this.xPos?e=1:this.xNeg&&(e=-1),this.yPos?n=1:this.yNeg&&(n=-1),!(e==this.pos[0]&&n==this.pos[1])&&(this.calcPos(e*this.radius,n*this.radius),this.pos=[e,n],this.gamepadActive=!1)}updateKeys(e){const n=this.input,i=e.key.toLowerCase();this.xPos=n.key_x_pos.includes(i),this.xNeg=n.key_x_neg.includes(i),this.yPos=n.key_y_pos.includes(i),this.yNeg=n.key_y_neg.includes(i)}onkeyrelease(e){this.disabled||!e||(this.updateKeys(e),super.onkeyrelease(e))}onkeyhold(e){this.disabled||!e||(this.updateKeys(e),super.onkeyhold(e))}updateButton(e){const n=this.input;this.xPos=n.button_x_pos.includes(e),this.xNeg=n.button_x_neg.includes(e),this.yPos=n.button_y_pos.includes(e),this.yNeg=n.button_y_neg.includes(e)}onbuttonhold(e,n){this.disabled||(this.updateButton(n),super.onbuttonhold(e,n))}onbuttonrelease(e,n){this.disabled||(this.updateButton(n),super.onbuttonrelease(e,n))}onupdate(e){if(this.disabled||!this.gamepadActive||!Ne(this.input,e))return;const n=this.input;let i=e.axes[n.axes_x],a=e.axes[n.axes_y];if(n.invert_x&&(i=-i),n.invert_y&&(a=-a),Math.abs(i)<n.deadzoneX&&Math.abs(a)<n.deadzoneY){this.updatePosition(!1,[0,0]);return}this.updatePosition(!0,[i,a])}}class yr extends Ln{constructor(){super(...arguments);H(this,"axesDown",-1);H(this,"changeFocus",e=>{})}onpressed(){return this.disabled?!1:super.onpressed()}onbuttonpressed(e,n){if(this.disabled||!Ne(this.input,e))return!1;const i=this.input;return i.buttons.includes(n)?this.onpressed():i.buttons_next.includes(n)?(this.changeFocus(1),!0):i.buttons_prev.includes(n)?(this.changeFocus(-1),!0):!1}onkeypressed(e){if(!e)return!1;const n=this.input,i=e.key.toLowerCase();return n.keys.includes(i)?this.onpressed():n.keys_next.includes(i)?(this.changeFocus(1),!0):n.keys_prev.includes(i)?(this.changeFocus(-1),!0):!1}onupdate(e){if(this.disabled||!Ne(this.input,e))return;const n=this.input;for(const i of n.axes){const a=e.axes[i];let s=n.sensitivity;if(a<-s&&this.axesDown!=i){this.changeFocus(-1),this.axesDown=i;continue}if(a>s&&this.axesDown!=i){this.changeFocus(1),this.axesDown=i;continue}a<s&&a>-s&&(this.axesDown=-1)}}}const br=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path
         stroke="none"
         fill="#7db700"
         d="m 32,20 q 0,5 -3.525,8.475 Q 25,32 20,32 15.025,32 11.5,28.475 8,25 8,20 8,15.025 11.5,11.5 15.025,8 20,8 25,8 28.475,11.5 32,15.025 32,20 m -9,5 h 2 L 21,15 h -2 l -4,10 h 2 l 0.8,-2 h 4.4 L 23,25 M 20,17.5 21.4,21 H 18.6 L 20,17.5"
         id="path4"
         style="stroke-width:0.500001" />
    <path
       stroke="none"
       fill="#7c66e8"
       d="m 40,38 -1.4,1.4 4.6,4.6 -4.6,4.6 1.400001,1.4 4.6,-4.6 4.6,4.6 1.4,-1.4 -4.6,-4.6 4.6,-4.6 -1.4,-1.4 -4.6,4.6 -4.6,-4.6 M 56,44 q 0,5 -3.525,8.475 Q 48.999999,56 43.999999,56 39.024999,56 35.499998,52.475 32,49 32,44 q 0,-4.975 3.499998,-8.5 3.525001,-3.5 8.500001,-3.5 5,0 8.475001,3.5 Q 56,39.025 56,44"
       id="path14"
       style="stroke-width:0.5" />
  </g>
</svg>
`,Qr=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
  <path
     stroke="none"
     fill="#ef4e29"
     d="m 32,20 q 0,5 -3.525,8.475001 -3.475,3.525 -8.475,3.525 -4.975,0 -8.5,-3.525 Q 8,25 8,20 8,15.025 11.5,11.5 15.025,8 20,8 25,8 28.475,11.5 32,15.025 32,20 m -9.5,-2 q 0,0.425 -0.275,0.7 H 22.2 Q 21.9,19 21.5,19 h -3 v -2 h 3 q 0.4,0 0.675,0.275 l 0.05,0.05 Q 22.5,17.6 22.5,18 m 2,4 q 0,-1.15 -0.75,-2 0.75,-0.85 0.75,-2 0,-1.225 -0.875,-2.1 L 23.6,15.875 Q 22.725,15 21.5,15 h -5 v 10 h 5 q 1.225,0 2.1,-0.875 L 23.625,24.1 Q 24.5,23.225 24.5,22 m -2,0 q 0,0.4 -0.275,0.675 l -0.05,0.05 Q 21.9,23 21.5,23 h -3 v -2 h 3 q 0.4,0 0.7,0.3 h 0.025 Q 22.5,21.575 22.5,22"
     id="path242"
     style="stroke-width:0.5" />
     <path
     stroke="none"
     fill="#ff6666"
     d="m 46.850002,41.175 q 1.15,1.15 1.15,2.825 0,1.674999 -1.15,2.849999 -1.175,1.15 -2.85,1.15 -1.65,0 -2.800001,-1.15 l -0.025,-0.025 q -1.175,-1.175 -1.175,-2.824999 0,-1.65 1.175,-2.825 h 0.025 Q 42.350002,40 44.000002,40 q 1.675,0 2.85,1.175 m 3.15,2.825 q 0,-2.5 -1.75,-4.25 -1.75,-1.75 -4.25,-1.75 -2.475001,0 -4.225001,1.75 -1.775,1.75 -1.775,4.25 0,2.499999 1.775,4.249999 1.75,1.75 4.225001,1.75 2.5,0 4.25,-1.75 1.75,-1.75 1.75,-4.249999 m 6,0 q 0,4.999999 -3.525,8.474999 -3.475,3.525 -8.475,3.525 -4.975001,0 -8.500002,-3.525 Q 32,48.999999 32,44 q 0,-4.975 3.5,-8.5 3.525001,-3.5 8.500002,-3.5 5,0 8.475,3.5 3.525,3.525 3.525,8.5"
     id="path254"
     style="stroke-width:0.5" />
  </g>
</svg>
`,xr=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path
     stroke="none"
     fill="#ff69f8"
     d="m 56,43.999999 q 0,4.999999 -3.525,8.474999 -3.475,3.525 -8.475,3.525 -4.975,0 -8.5,-3.525 Q 32,48.999998 32,43.999999 32,39.024999 35.5,35.5 39.025,32 44,32 49,32 52.475,35.5 56,39.024999 56,43.999999 m -18,-6 V 49.999998 H 50 V 37.999999 H 38 m 2,9.999999 v -7.999999 h 8 v 7.999999 h -8"
     id="path287"
     style="stroke-width:0.5" />
    <path
     stroke="none"
     fill="#009feb"
     d="m 32,19.999999 q 0,5 -3.525,8.475 Q 25,31.999998 19.999999,31.999998 15.025,31.999998 11.5,28.474999 8,24.999999 8,19.999999 8,15.025 11.5,11.5 15.025,8 19.999999,8 25,8 28.475,11.5 32,15.025 32,19.999999 M 15.5,16.5 l 2.999999,3.499999 -2.999999,3.5 v 0.5 l 1.124999,1 h 0.575 l 2.8,-3.25 2.825002,3.25 h 0.55 l 1.124999,-1 v -0.5 l -2.999999,-3.5 L 24.5,16.5 V 16 l -1.124999,-1 h -0.55 l -2.825002,3.275 -2.8,-3.275 h -0.575 L 15.5,16 v 0.5"
     id="path299"
     style="stroke-width:0.5" />
  </g>
</svg>
`,Ir=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path
     stroke="none"
     fill="#40e2a0"
     d="m 56,44 q 0,5 -3.525,8.475 Q 49,56 44,56 39.025,56 35.5,52.475 32,49 32,44 32,39.025 35.5,35.5 39.025,32 44,32 49,32 52.475,35.5 56,39.025 56,44 M 51,49 44,37 37,49 H 51 M 44,40.975 47.525,47 H 40.5 L 44,40.975"
     id="path9"
     style="stroke-width:0.5" /><path
     stroke="none"
     fill="#feb504"
     d="m 32,20 q 0,5 -3.525,8.475 Q 25,32 20,32 15.025,32 11.5,28.475 8,25 8,20 8,15.025 11.5,11.5 15.025,8 20,8 25,8 28.475,11.5 32,15.025 32,20 M 15.5,16.5 19,20.45 V 25 h 2 V 20.45 L 24.5,16.5 V 16 l -1.125,-1 h -0.55 L 20,18.275 17.2,15 H 16.625 L 15.5,16 v 0.5"
     id="path179"
     style="stroke-width:0.5" />
  </g>     
</svg>
`,Sr=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 L48 8 M39 26 L39 23 38 22 35 22 25 38 25 41 26 42 29 42 39 26"/>
  </g>
</svg>`,Fr=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 M30 24 L30 28.6 26.05 26.3 24.05 29.75 28 32.05 24.05 34.3 26.05 37.75 30 35.5 30 40 34 40 34 35.5 37.9 37.75 39.9 34.3 35.95 32.05 39.9 29.75 37.9 26.3 34 28.55 34 24 30 24"/>
  </g>
</svg>`,Cr=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q9.55 56 8.3 50.8 8 49.55 8 48 L8 16 Q8 14.45 8.3 13.2 9.55 8 16 8 M31 36 Q29 36 29 38 L29 40 Q29 42 31 42 L33 42 33 43 32.7 43.7 32 44 Q31.6 44 31.3 43.7 L29.9 45.1 Q30.8 46 32 46 33.2 46 34.1 45.1 35 44.2 35 43 L35 40.25 35 40 35 38 Q35 36 33 36 L31 36"/>
  </g>
</svg>`,Ar=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M31 36 Q29 36 29 38 L29 40 Q29 42 31 42 L33 42 Q35 42 35 40 L35 38 Q35 36 33 36 L31 36"/>
  </g>
</svg>`,Er=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M31 22 Q29 22 29 24 L29 26 Q29 28 31 28 L33 28 Q35 28 35 26 L35 24 Q35 22 33 22 L31 22 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M31 36 Q29 36 29 38 L29 40 Q29 42 31 42 L33 42 Q35 42 35 40 L35 38 Q35 36 33 36 L31 36"/>
  </g>
</svg>`,kr=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M31 36 Q29 36 29 38 L29 40 Q29 42 31 42 L33 42 33 43 32.7 43.7 32 44 Q31.6 44 31.3 43.7 L29.9 45.1 Q30.8 46 32 46 33.2 46 34.1 45.1 35 44.2 35 43 L35 40.25 35 40 35 38 Q35 36 33 36 L31 36 M31 22 Q29 22 29 24 L29 26 Q29 28 31 28 L33 28 Q35 28 35 26 L35 24 Q35 22 33 22 L31 22"/>
  </g>
</svg>`,Mr=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M32 26 L36 26 36 22 29 22 28 23 28 41 29 42 36 42 36 38 32 38 32 26"/>
  </g>
</svg>`,Tr=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M32 26 L32 38 28 38 28 42 35 42 36 41 36 23 35 22 28 22 28 26 32 26"/>
  </g>
</svg>`,Rr=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M40 30 L34 30 34 24 30 24 30 30 24 30 24 34 30 34 30 40 34 40 34 34 40 34 40 30 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 52.9 53 54.8 51.1 56 48 56 L16 56 Q12.9 56 11 54.8 8 52.9 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,Or=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M40 30 L24 30 24 34 40 34 40 30"/>
  </g>
</svg>`,Dr=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q9.55 56 8.3 50.8 8 49.55 8 48 L8 16 Q8 14.45 8.3 13.2 9.55 8 16 8 M27.5 28 Q24 28 21.55 30.65 20.95 31.25 21 32.1 21.05 32.9 21.65 33.5 22.25 34.05 23.1 34 23.9 33.95 24.5 33.35 25.7 32 27.5 32 29.3 32 30.55 33.35 33 36 36.5 36 40 36 42.5 33.35 43.05 32.75 43 31.95 42.95 31.1 42.35 30.55 41.75 29.95 40.95 30 40.1 30.05 39.55 30.65 38.3 32 36.5 32 34.7 32 33.5 30.65 31 28 27.5 28"/>
  </g>
</svg>`,Pr=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M26 41 L26 37 22 37 22 44 23 45 41 45 42 44 42 37 38 37 38 41 26 41"/>
  </g>
</svg>`,Nr=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M36 20 Q34 20 34 22 L34 28 Q34 30 36 30 L38 30 Q40 30 40 28 L40 22 Q40 20 38 20 L36 20 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M26 20 Q24 20 24 22 L24 28 Q24 30 26 30 L28 30 Q30 30 30 28 L30 22 Q30 20 28 20 L26 20"/>
  </g>
</svg>`,Ur=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 16 L48 16 Q56 16 56 24 L56 40 Q56 44.9 53 46.8 51.1 48 48 48 L16 48 Q12.9 48 11 46.8 8 44.9 8 40 L8 24 Q8 16 16 16 M20 32 L26 38 28 38 28 34 44 34 44 30 28 30 28 26 26 26 20 32"/>
  </g>
</svg>`,Hr=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 14 L48 14 Q56 14 56 22 L56 41 Q56 49 48 49 L16 49 Q8 49 8 41 L8 22 Q8 14 16 14 M36 42 L36 38 28 38 28 42 36 42 M32 20 L24 28 24 30 28 30 28 36 36 36 36 30 40 30 40 28 32 20"/>
  </g>
</svg>`,Br=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M44 31 L44 45 47 45 47 31 44 31 M48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 M23 26 L29 32 31 32 31 28 47 28 47 24 31 24 31 20 29 20 23 26 M41 38 L35 32 33 32 33 36 17 36 17 40 33 40 33 44 35 44 41 38 M17 19 L17 33 20 33 20 19 17 19"/>
  </g>
</svg>`,Wr=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 16 L48 16 Q56 16 56 24 L56 40 Q56 44.9 53 46.8 51.1 48 48 48 L16 48 Q12.9 48 11 46.8 8 44.9 8 40 L8 24 Q8 16 16 16 M32 24 L24 32 24 34 28 34 28 40 36 40 36 34 40 34 40 32 32 24"/>
  </g>
</svg>`,Kr=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M29 17 L35 17 Q39 17 39 21 L39 27 Q39 31 35 31 L29 31 Q25 31 25 27 L25 21 Q25 17 29 17 M45 33 L51 33 Q55 33 55 37 L55 43 Q55 47 51 47 L45 47 Q41 47 41 43 L41 37 Q41 33 45 33 M29 33 L35 33 Q39 33 39 37 L39 43 Q39 47 35 47 L29 47 Q25 47 25 43 L25 37 Q25 33 29 33"/>
    <path stroke="none" fill="#E73246" d="M13 33 L19 33 Q23 33 23 37 L23 43 Q23 47 19 47 L13 47 Q9 47 9 43 L9 37 Q9 33 13 33"/>
  </g>
</svg>`,Vr=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M29 17 L35 17 Q39 17 39 21 L39 27 Q39 31 35 31 L29 31 Q25 31 25 27 L25 21 Q25 17 29 17 M29 33 L35 33 Q39 33 39 37 L39 43 Q39 47 35 47 L29 47 Q25 47 25 43 L25 37 Q25 33 29 33 M13 33 L19 33 Q23 33 23 37 L23 43 Q23 47 19 47 L13 47 Q9 47 9 43 L9 37 Q9 33 13 33"/>
    <path stroke="none" fill="#E73246" d="M45 33 L51 33 Q55 33 55 37 L55 43 Q55 47 51 47 L45 47 Q41 47 41 43 L41 37 Q41 33 45 33"/>
  </g>
</svg>`,Gr=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#E73246" d="M29 17 L35 17 Q39 17 39 21 L39 27 Q39 31 35 31 L29 31 Q25 31 25 27 L25 21 Q25 17 29 17"/>
    <path stroke="none" fill="#FFFFFF" d="M45 33 L51 33 Q55 33 55 37 L55 43 Q55 47 51 47 L45 47 Q41 47 41 43 L41 37 Q41 33 45 33 M29 33 L35 33 Q39 33 39 37 L39 43 Q39 47 35 47 L29 47 Q25 47 25 43 L25 37 Q25 33 29 33 M13 33 L19 33 Q23 33 23 37 L23 43 Q23 47 19 47 L13 47 Q9 47 9 43 L9 37 Q9 33 13 33"/>
  </g>
</svg>`,zr=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M29 17 L35 17 Q39 17 39 21 L39 27 Q39 31 35 31 L29 31 Q25 31 25 27 L25 21 Q25 17 29 17 M45 33 L51 33 Q55 33 55 37 L55 43 Q55 47 51 47 L45 47 Q41 47 41 43 L41 37 Q41 33 45 33 M13 33 L19 33 Q23 33 23 37 L23 43 Q23 47 19 47 L13 47 Q9 47 9 43 L9 37 Q9 33 13 33"/>
    <path stroke="none" fill="#E73246" d="M29 33 L35 33 Q39 33 39 37 L39 43 Q39 47 35 47 L29 47 Q25 47 25 43 L25 37 Q25 33 29 33"/>
  </g>
</svg>`,qr=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M36.95 27 L35.95 27 Q35.55 27 35.25 27.3 34.95 27.6 34.95 28 34.95 28.4 35.25 28.7 L35.95 29 35.95 29.25 35.7 29.8 35.7 29.75 34.95 30 34.15 29.75 33.95 29.25 33.95 24.8 Q33.95 24.45 34.2 24.2 L34.15 24.3 Q34.5 24 34.95 24 L35.7 24.3 35.7 24.25 35.95 24.8 Q35.95 25.2 36.25 25.5 36.55 25.8 36.95 25.8 L37.65 25.5 37.95 24.8 Q37.95 23.65 37.05 22.8 L37 22.75 Q36.1 22 34.95 22 33.7 22 32.85 22.75 L32.8 22.8 Q31.95 23.65 31.95 24.8 L31.95 29.25 Q31.95 30.35 32.8 31.2 L32.85 31.3 Q33.7 32 34.95 32 36.1 32 37 31.3 L37.05 31.25 Q37.95 30.35 37.95 29.25 L37.95 28 37.65 27.3 36.95 27 M44 22 L40 22 Q39.6 22 39.3 22.3 39 22.6 39 23 L39 31 Q39 31.4 39.3 31.7 39.6 32 40 32 L44 32 44.7 31.7 45 31 44.7 30.3 Q44.4 30 44 30 L41 30 41 28 44 28 44.7 27.7 45 27 44.7 26.3 Q44.4 26 44 26 L41 26 41 24 44 24 44.7 23.7 45 23 44.7 22.3 Q44.4 22 44 22 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M40.95 35.8 L40.95 42 Q40.95 42.4 41.25 42.7 41.55 43 41.95 43 L42.65 42.7 42.95 42 42.95 35.8 Q42.95 35.45 43.2 35.2 L43.15 35.3 Q43.5 35 43.95 35 L44.7 35.3 44.7 35.25 44.95 35.8 44.95 42 Q44.95 42.4 45.25 42.7 45.55 43 45.95 43 L46.65 42.7 46.95 42 46.95 35.8 Q46.95 34.65 46.05 33.8 L46 33.75 Q45.1 33 43.95 33 42.7 33 41.85 33.75 L41.8 33.8 Q40.95 34.65 40.95 35.8 M31.95 34.15 L32.95 42.15 33.2 42.7 33.75 43 34.35 42.95 34.8 42.55 35.95 40.8 37.15 42.55 37.6 42.95 38.2 43 38.7 42.7 38.95 42.15 39.95 34.15 39.75 33.4 Q39.5 33.05 39.1 33 38.65 32.95 38.35 33.2 38 33.45 37.95 33.9 L37.3 39.2 36.8 38.45 36.3 38.05 35.65 38.05 35.15 38.45 34.65 39.2 33.95 33.9 33.6 33.2 Q33.25 32.95 32.85 33 32.4 33.05 32.15 33.4 31.9 33.7 31.95 34.15 M21.1 26 L20 26 20 24 21.05 24 21.7 24.25 22 25 21.75 25.7 21.7 25.7 21.45 25.9 21.1 26 M21.1 28 L22.35 27.7 22.45 27.65 23.1 27.15 23.1 27.1 Q24 26.25 24 25 24 23.75 23.1 22.85 22.25 22 21.05 22 L19 22 Q18.6 22 18.3 22.3 18 22.6 18 23 L18 31 Q18 31.4 18.3 31.7 18.6 32 19 32 L19.7 31.7 20 31 20 28 21.1 28 M27 24.8 L27.25 24.2 27.2 24.3 Q27.55 24 28 24 28.45 24 28.75 24.3 L28.75 24.25 29 24.8 29 27 27 27 27 24.8 M25 24.8 L25 31 Q25 31.4 25.3 31.7 25.6 32 26 32 L26.7 31.7 27 31 27 29 29 29 29 31 Q29 31.4 29.3 31.7 L30 32 Q30.4 32 30.7 31.7 L31 31 31 24.8 Q31 23.65 30.1 22.8 L30.05 22.75 Q29.15 22 28 22 26.75 22 25.9 22.75 L25.85 22.8 Q25 23.65 25 24.8 M25.8 33.8 Q24.95 34.65 24.95 35.8 L24.95 40.25 Q24.95 41.35 25.8 42.2 L25.85 42.3 Q26.7 43 27.95 43 29.1 43 30 42.3 L30.05 42.25 Q30.95 41.35 30.95 40.25 L30.95 35.8 Q30.95 34.65 30.05 33.8 L30 33.75 Q29.1 33 27.95 33 26.7 33 25.85 33.75 L25.8 33.8 M26.95 35.8 Q26.95 35.45 27.2 35.2 L27.15 35.3 Q27.5 35 27.95 35 L28.7 35.3 28.7 35.25 28.95 35.8 28.95 40.25 28.7 40.8 28.7 40.75 27.95 41 27.15 40.75 26.95 40.25 26.95 35.8 M23.05 33.75 Q22.15 33 21.05 33 L19 33 Q18.6 33 18.3 33.3 18 33.6 18 34 L18 42 Q18 42.4 18.3 42.7 18.6 43 19 43 L21.05 43 Q22.15 43 23.05 42.3 L23.1 42.25 Q24 41.35 24 40.25 L24 35.8 Q24 34.65 23.1 33.8 L23.05 33.75 M21.05 35 Q21.45 35 21.75 35.3 L21.75 35.25 22 35.8 22 40.25 21.75 40.8 21.75 40.75 21.05 41 20 41 20 35 21.05 35"/>
  </g>
</svg>`,jr=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M37 27 L36 27 Q35.6 27 35.3 27.3 35 27.6 35 28 L35.3 28.7 Q35.6 29 36 29 L36 29.25 35.75 29.8 35.75 29.75 35 30 34.2 29.75 34 29.25 34 24.8 Q34 24.45 34.25 24.2 L34.2 24.3 Q34.55 24 35 24 35.45 24 35.75 24.3 L35.75 24.25 36 24.8 Q36 25.2 36.3 25.5 L37 25.8 37.7 25.5 38 24.8 Q38 23.65 37.1 22.8 L37.05 22.75 Q36.15 22 35 22 33.75 22 32.9 22.75 L32.85 22.8 Q32 23.65 32 24.8 L32 29.25 Q32 30.35 32.85 31.2 L32.9 31.3 Q33.75 32 35 32 36.15 32 37.05 31.3 L37.1 31.25 Q38 30.35 38 29.25 L38 28 37.7 27.3 Q37.4 27 37 27 M44 26 L41 26 41 24 44 24 44.7 23.7 45 23 44.7 22.3 Q44.4 22 44 22 L40 22 Q39.6 22 39.3 22.3 39 22.6 39 23 L39 31 Q39 31.4 39.3 31.7 39.6 32 40 32 L44 32 44.7 31.7 45 31 44.7 30.3 Q44.4 30 44 30 L41 30 41 28 44 28 44.7 27.7 45 27 44.7 26.3 Q44.4 26 44 26 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M21.1 26 L20 26 20 24 21.05 24 21.7 24.25 22 25 21.75 25.7 21.7 25.7 21.45 25.9 21.1 26 M21.1 28 L22.35 27.7 22.45 27.65 23.1 27.15 23.1 27.1 Q24 26.25 24 25 24 23.75 23.1 22.85 22.25 22 21.05 22 L19 22 Q18.6 22 18.3 22.3 18 22.6 18 23 L18 31 Q18 31.4 18.3 31.7 18.6 32 19 32 L19.7 31.7 20 31 20 28 21.1 28 M27 24.8 L27.25 24.2 27.2 24.3 Q27.55 24 28 24 28.45 24 28.75 24.3 L28.75 24.25 29 24.8 29 27 27 27 27 24.8 M25 24.8 L25 31 Q25 31.4 25.3 31.7 25.6 32 26 32 L26.7 31.7 27 31 27 29 29 29 29 31 Q29 31.4 29.3 31.7 L30 32 Q30.4 32 30.7 31.7 L31 31 31 24.8 Q31 23.65 30.1 22.8 L30.05 22.75 Q29.15 22 28 22 26.75 22 25.9 22.75 L25.85 22.8 Q25 23.65 25 24.8 M28.1 37 L27 37 27 35 28.05 35 28.7 35.25 29 36 28.75 36.7 28.7 36.7 28.45 36.9 28.1 37 M28.1 39 L29.35 38.7 29.45 38.65 30.1 38.15 30.1 38.1 Q31 37.25 31 36 31 34.75 30.1 33.85 29.25 33 28.05 33 L26 33 Q25.6 33 25.3 33.3 25 33.6 25 34 L25 42 Q25 42.4 25.3 42.7 25.6 43 26 43 L26.7 42.7 27 42 27 39 28.1 39 M20 40.2 L20 34 19.7 33.3 Q19.4 33 19 33 18.6 33 18.3 33.3 18 33.6 18 34 L18 40.2 Q18 41.35 18.85 42.2 L18.9 42.3 Q19.75 43 21 43 22.15 43 23.05 42.3 L23.1 42.25 Q24 41.35 24 40.2 L24 34 23.7 33.3 Q23.4 33 23 33 22.6 33 22.3 33.3 22 33.6 22 34 L22 40.2 21.75 40.8 21.75 40.75 21 41 20.2 40.75 20 40.2"/>
  </g>
</svg>`,Xr=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M39 25 L39 38 41.5 38 Q43.8 38 45.35 36.4 L45.4 36.35 Q47 34.8 47 32.5 L47 30.5 Q47 28.2 45.4 26.7 L45.35 26.6 Q43.8 25 41.5 25 L39 25 M42 28.05 L43.2 28.75 43.25 28.75 43.3 28.8 Q44 29.45 44 30.5 L44 32.5 Q44 33.55 43.3 34.2 L43.2 34.3 Q42.7 34.8 42 34.95 L42 28.05 M17 25 L17 38 25 38 25 35 20 35 20 33 25 33 25 30 20 30 20 28 25 28 25 25 17 25 M37 38 L37 25 34 25 34 32 30 25 27 25 27 38 30 38 30 31 34 38 37 38"/>
  </g>
</svg>`,Yr=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M40 28 L40 36 Q40 36.4 40.3 36.7 L41 37 45 37 45.7 36.7 46 36 45.7 35.3 Q45.4 35 45 35 L42 35 42 33 45 33 45.7 32.7 46 32 45.7 31.3 Q45.4 31 45 31 L42 31 42 29 45 29 45.7 28.7 46 28 45.7 27.3 Q45.4 27 45 27 L41 27 40.7 27.05 Q40.45 27.1 40.3 27.3 40 27.6 40 28 M23 36 L23 28 22.7 27.3 Q22.55 27.1 22.3 27.05 L22 27 21.7 27.05 Q21.45 27.1 21.3 27.3 21 27.6 21 28 L21 31 19 31 19 28 18.7 27.3 Q18.55 27.1 18.3 27.05 L18 27 17.7 27.05 Q17.45 27.1 17.3 27.3 17 27.6 17 28 L17 36 Q17 36.4 17.3 36.7 L18 37 Q18.4 37 18.7 36.7 L19 36 19 33 21 33 21 36 Q21 36.4 21.3 36.7 21.6 37 22 37 L22.7 36.7 23 36 M39 36 L39 28 38.7 27.3 Q38.55 27.1 38.3 27.05 L38 27 37.7 27.05 Q37.45 27.1 37.3 27.3 L35 29.6 32.7 27.3 Q32.55 27.1 32.3 27.05 L32 27 31.7 27.05 Q31.45 27.1 31.3 27.3 31 27.6 31 28 L31 36 Q31 36.4 31.3 36.7 31.6 37 32 37 L32.7 36.7 33 36 33 30.4 34.3 31.7 Q34.6 32 35 32 L35.7 31.7 37 30.4 37 36 Q37 36.4 37.3 36.7 37.6 37 38 37 L38.7 36.7 39 36 M24.85 27.8 Q24 28.65 24 29.8 L24 34.25 Q24 35.35 24.85 36.2 L24.9 36.3 Q25.75 37 27 37 28.15 37 29.05 36.3 L29.1 36.25 Q30 35.35 30 34.25 L30 29.8 Q30 28.65 29.1 27.8 L29.05 27.75 Q28.4 27.2 27.6 27.05 L27 27 26.4 27.05 Q25.55 27.2 24.9 27.75 L24.85 27.8 M26 29.8 Q26 29.45 26.25 29.2 L26.2 29.3 Q26.55 29 27 29 27.45 29 27.75 29.3 L27.75 29.25 28 29.8 28 34.25 27.75 34.8 27.75 34.75 27 35 26.2 34.75 26 34.25 26 29.8"/>
  </g>
</svg>`,Zr=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M38.1 32.1 Q39 31.25 39 30 39 28.75 38.1 27.85 37.25 27 36.05 27 L34 27 Q33.6 27 33.3 27.3 33 27.6 33 28 L33 36 Q33 36.4 33.3 36.7 L34 37 Q34.4 37 34.7 36.7 L35 36 35 33 35.4 33 37.1 36.45 Q37.3 36.8 37.7 36.95 L38.45 36.9 38.95 36.35 38.9 35.55 37.45 32.65 38.1 32.15 38.1 32.1 M36.1 31 L35 31 35 29 36.05 29 Q36.45 29 36.7 29.25 L37 30 36.75 30.7 36.7 30.7 36.45 30.9 36.1 31 M40 28 L40 36 Q40 36.4 40.3 36.7 L41 37 45 37 45.7 36.7 46 36 45.7 35.3 Q45.4 35 45 35 L42 35 42 28 41.7 27.3 Q41.4 27 41 27 40.6 27 40.3 27.3 40 27.6 40 28 M56 22 L56 42 Q56 46.9 53 48.8 51.1 50 48 50 L16 50 Q12.9 50 11 48.8 8 46.9 8 42 L8 22 Q8 14 16 14 L48 14 Q56 14 56 22 M24.1 36.25 Q25 35.35 25 34.25 L24.7 33.55 Q24.4 33.25 24 33.25 23.6 33.25 23.3 33.55 23 33.85 23 34.25 L22.75 34.8 22.75 34.75 22 35 21.2 34.75 21 34.25 21 29.8 21.25 29.2 21.2 29.3 Q21.55 29 22 29 22.45 29 22.75 29.3 L22.75 29.25 23 29.8 Q23 30.2 23.3 30.5 23.6 30.8 24 30.8 L24.7 30.5 25 29.8 Q25 28.65 24.1 27.8 L24.05 27.75 Q23.15 27 22 27 20.75 27 19.9 27.75 L19.85 27.8 Q19 28.65 19 29.8 L19 34.25 Q19 35.35 19.85 36.2 L19.9 36.3 Q20.75 37 22 37 23.15 37 24.05 36.3 L24.1 36.25 M27 29 L28 29 28 36 Q28 36.4 28.3 36.7 28.6 37 29 37 L29.7 36.7 30 36 30 29 31 29 31.7 28.7 32 28 31.7 27.3 Q31.4 27 31 27 L27 27 Q26.6 27 26.3 27.3 26 27.6 26 28 L26.3 28.7 27 29"/>
  </g>
</svg>`,Jr=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 40 8 38.95 8 36 Q8 28 16 28 L28 28 28 16 Q28 8 36 8 L38.95 8 40 8 48 8 M29 41 L35 47 37 47 37 43 44.1 43 Q45.3 42.95 46.1 42.1 46.95 41.3 47 40.1 L47 29 43 29 43 39 37 39 37 35 35 35 29 41"/>
  </g>
</svg>`,$r=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M38 42 L42 42 34 22 30 22 22 42 26 42 27.6 38 36.4 38 38 42 M32 27 L34.8 34 29.2 34 32 27"/>
  </g>
</svg>`,ta=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M34 22 L25 22 24 23 24 41 25 42 34 42 Q36.45 42 38.2 40.25 L38.25 40.2 Q40 38.45 40 36 40 33.65 38.45 32 40 30.3 40 28 40 25.5 38.25 23.75 L38.2 23.7 Q36.45 22 34 22 M28 26 L34 26 Q34.8 26 35.4 26.6 L35.45 26.6 Q36 27.15 36 28 36 28.8 35.45 29.35 L35.35 29.45 Q34.8 29.95 34.15 30 L28 30 28 26 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M28 38 L28 34 34.15 34 Q34.85 34.05 35.4 34.6 L35.45 34.6 Q36 35.15 36 36 36 36.8 35.45 37.35 L35.35 37.45 Q34.8 38 34 38 L28 38"/>
  </g>
</svg>`,ea=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M24 30 L24 34.2 Q24.05 37.35 26.35 39.65 L28 40.95 Q29.8 42 32 42 34.2 42 36 40.95 L37.65 39.65 Q38.95 38.35 39.55 36.8 L35.8 35.35 34.85 36.85 Q33.65 38 32 38 30.35 38 29.2 36.85 28.05 35.7 28 34.1 L28 30 Q28 28.35 29.2 27.2 30.35 26 32 26 33.65 26 34.85 27.2 L35.8 28.7 39.55 27.2 Q38.95 25.65 37.65 24.35 35.3 22 32 22 28.7 22 26.35 24.35 24 26.7 24 30 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,na=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M28 26 L30.15 26 Q32.5 26.05 34.25 27.8 36 29.55 36 32 36 34.45 34.25 36.25 32.5 37.95 30.15 38 L28 38 28 26 M24 22 L24 42 30.25 42 Q34.25 41.9 37.1 39.1 L38.05 38 Q40 35.4 40 32 40 28.55 38.05 26 L37.1 24.95 Q34.25 22.1 30.25 22 L24 22"/>
  </g>
</svg>`,ia=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M24 22 L24 42 40 42 40 38 28 38 28 34 40 34 40 30 28 30 28 26 40 26 40 22 24 22 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,ra=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M24 22 L24 42 28 42 28 34 40 34 40 30 28 30 28 26 40 26 40 22 24 22"/>
  </g>
</svg>`,aa=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M39.25 24.8 Q36.45 22 32.5 22 28.55 22 25.8 24.8 23 27.55 23 31.5 L23 32.85 23.3 34.95 Q23.85 37.3 25.8 39.25 28.55 42 32.5 42 36.45 42 39.25 39.25 41.1 37.3 41.75 35 L41.8 34.85 42 32.85 42 32 41 31 31 31 31 35 37.45 35 36.4 36.4 Q34.75 38 32.5 38 30.25 38 28.65 36.4 27.55 35.3 27.2 34 L27 32.65 27 31.5 Q27 29.25 28.65 27.65 30.25 26 32.5 26 34.75 26 36.4 27.65 L36.85 28.15 39.7 25.3 39.25 24.8"/>
  </g>
</svg>`,sa=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q51.45 8 53.45 9.5 56 11.45 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 11.45 10.6 9.5 12.55 8 16 8 M24 22 L24 42 28 42 28 34 36 34 36 42 40 42 40 22 36 22 36 30 28 30 28 22 24 22"/>
  </g>
</svg>`,oa=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M30 22 L30 42 34 42 34 22 30 22"/>
  </g>
</svg>`,la=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M37 34.2 L37 22 33 22 33 34.1 Q32.95 35.7 31.85 36.85 30.65 38 29 38 L27 38 27 42 29.25 42 Q31.3 41.95 33 40.95 L34.65 39.65 Q36.95 37.35 37 34.2"/>
  </g>
</svg>`,ca=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M28 34 L31 34 37 42 40 42 40 39 34.75 32 40 25 40 22 37 22 31 30 28 30 28 22 24 22 24 42 28 42 28 34"/>
  </g>
</svg>`,da=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M24 42 L40 42 40 38 28 38 28 22 24 22 24 42"/>
  </g>
</svg>`,ua=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M22 42 L26 42 26 32 31 42 33 42 38 32 38 42 42 42 42 22 38 22 32 34 26 22 22 22 22 42 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,fa=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M28 42 L28 30 36 42 40 42 40 22 36 22 36 34 28 22 24 22 24 42 28 42"/>
  </g>
</svg>`,ha=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M40 32 Q40 27.85 37.65 24.9 35.3 22 32 22 28.65 22 26.3 24.9 24 27.85 24 32 24 36.15 26.3 39.1 28.65 42 32 42 35.3 42 37.65 39.1 40 36.15 40 32 M34.55 27.4 L34.55 27.45 Q36 29.35 36 32 36 34.65 34.55 36.6 33.45 37.9 32 38 30.5 37.9 29.4 36.6 28 34.65 28 32 28 29.35 29.4 27.45 30.5 26.1 32 26 33.45 26.1 34.55 27.4 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,ga=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M25 22 L24 23 24 42 28 42 28 36 34 36 34.2 36 Q35.75 35.95 37 35.2 L38.1 34.4 38.1 34.35 38.2 34.25 38.25 34.2 39.6 32.3 40 30 40 28 Q40 25.5 38.25 23.75 L38.2 23.7 37 22.8 Q35.75 22.05 34.2 22 L25 22 M28 26 L34 26 Q34.8 26 35.4 26.6 L35.45 26.6 Q36 27.15 36 28 L36 30.4 35.45 31.35 35.35 31.45 34.9 31.8 34.05 32 28 32 28 26 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,va=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M28 30 Q28 28.35 29.2 27.2 30.35 26 32 26 33.65 26 34.85 27.2 36 28.35 36 30 L36 34.1 35.9 34.9 35 34 32 34 32 37 32.9 37.9 32 38 Q30.35 38 29.2 36.85 28.05 35.7 28 34.1 L28 30 M24 30 L24 34.2 Q24.05 37.35 26.35 39.65 L28 40.95 Q29.8 42 32 42 34.2 42 36 41 L37 42 40 42 40 39 39 38 Q39.95 36.25 40 34.2 L40 30 Q40 26.7 37.65 24.35 35.3 22 32 22 28.7 22 26.35 24.35 24 26.7 24 30"/>
  </g>
</svg>`,La=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M25 22 L24 23 24 42 28 42 28 36 34 36 34.5 36 36 42 40 42 38.1 34.35 38.2 34.25 38.25 34.2 Q40 32.45 40 30 L40 28 Q40 25.5 38.25 23.75 L38.2 23.7 37 22.8 Q35.75 22.05 34.2 22 L25 22 M28 26 L34 26 Q34.8 26 35.4 26.6 L35.45 26.6 Q36 27.15 36 28 L36 30 Q36 30.8 35.45 31.35 L35.35 31.45 Q34.8 32 34 32 L28 32 28 26 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,pa=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M34 30 L30 30 Q29.2 30 28.6 29.4 28 28.8 28 28 28 27.2 28.55 26.65 L28.65 26.55 Q29.2 26 30 26 L34.05 26 Q34.8 26 35.35 26.55 L35.45 26.65 Q36 27.2 36 28 L39.85 26.5 39.7 26 Q39.25 24.8 38.25 23.8 L38.2 23.75 Q36.5 22.05 34.15 22 L30 22 Q27.55 22 25.8 23.75 L25.75 23.8 Q24 25.55 24 28 24 30.5 25.75 32.25 27.5 34 30 34 L34 34 Q34.8 34 35.4 34.6 36 35.2 36 36 36 36.8 35.45 37.35 L35.35 37.45 Q34.8 38 34 38 L29.95 38 Q29.2 38 28.65 37.45 L28.55 37.35 Q28 36.8 28 36 L24.2 37.55 24.35 38 Q24.75 39.2 25.75 40.2 L25.8 40.25 Q27.5 41.95 29.85 42 L34 42 Q36.45 42 38.2 40.25 L38.25 40.2 Q40 38.45 40 36 40 33.5 38.25 31.75 36.5 30 34 30 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,ma=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M40 22 L24 22 24 26 30 26 30 42 34 42 34 26 40 26 40 22"/>
  </g>
</svg>`,wa=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M40 22 L36 22 36 34.1 Q35.95 35.7 34.85 36.85 33.65 38 32 38 30.35 38 29.2 36.85 28.05 35.7 28 34.1 L28 22 24 22 24 34.2 Q24.05 37.35 26.35 39.65 L28 40.95 Q29.8 42 32 42 34.2 42 36 40.95 L37.65 39.65 Q39.95 37.35 40 34.2 L40 22"/>
  </g>
</svg>`,_a=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 56 Q8 56 8 48 L8 16 Q8 8 16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 M38 22 L32 37 26 22 22 22 30 42 34 42 42 22 38 22"/>
  </g>
</svg>`,ya=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M31 22 L28 31 25 22 21 22 21 24 27 42 29 42 32 33 35 42 37 42 43 24 43 22 39 22 36 31 33 22 31 22"/>
  </g>
</svg>`,ba=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M23 25 L29 32 23 39 23 40 25.25 42 26.4 42 32 35.5 37.65 42 38.75 42 41 40 41 39 35 32 41 25 41 24 38.75 22 37.65 22 32 28.55 26.4 22 25.25 22 23 24 23 25"/>
  </g>
</svg>`,Qa=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M23 25 L30 32.9 30 42 34 42 34 32.9 41 25 41 24 38.75 22 37.65 22 32 28.55 26.4 22 25.25 22 23 24 23 25"/>
  </g>
</svg>`,xa=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M24 22 L24 26 34 26 24 38 24 42 40 42 40 38 30 38 40 26 40 22 24 22"/>
  </g>
</svg>`,Ia=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M36.95 25.55 Q34.9 23.5 32 23.5 29.15 23.5 27.05 25.5 L27 25.55 Q25 27.65 25 30.5 L25 33.5 Q25 36.4 27.05 38.45 29.15 40.5 32 40.5 34.85 40.5 36.9 38.45 L36.95 38.4 Q39 36.35 39 33.5 L39 30.5 Q39 27.65 36.95 25.55 M32 27.5 Q33.2 27.5 34.1 28.4 35 29.25 35 30.5 L35 33.5 Q35 34.7 34.1 35.55 L34.05 35.6 Q33.2 36.5 32 36.5 30.75 36.5 29.9 35.6 29 34.7 29 33.5 L29 30.5 Q29 29.3 29.85 28.4 L29.9 28.35 Q30.8 27.5 32 27.5"/>
  </g>
</svg>`,Sa=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M35 24 L31 24 28 27 28 28.95 31 28.95 31 33.85 31 33.95 31 41 35 41 35 24"/>
  </g>
</svg>`,Fa=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M33.5 28.4 Q34.25 29.15 33 30.45 L26 37 26 41 30.85 41 30.95 41 38 41 38 37 32 37 36.45 32.55 Q38.65 30.35 37.4 27 L36.4 25.65 36.35 25.6 Q34.75 24 32.5 24 L30.85 24 Q28.9 24.05 27.5 25.4 L27.4 25.5 Q26.35 26.6 26.1 28 L26 29 30 29 Q30 28.6 30.3 28.3 30.55 28.05 30.85 28 L30.95 28 32.5 28 Q33.1 28 33.5 28.4"/>
  </g>
</svg>`,Ca=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M38 35.75 Q38.05 33.9 36.75 32.5 38.05 31.1 38 29.25 38.05 27.05 36.05 25.4 L36.1 25.5 Q34.4 24 32 24 29.6 24 27.9 25.45 26.05 26.95 26 29 L30.1 29 30.45 28.55 30.45 28.5 Q31.1 28 32 28 32.9 28 33.5 28.5 L33.55 28.55 Q33.95 28.85 34 29.25 L33.6 30 Q33 30.5 32.15 30.5 L30 30.5 30 34.5 32.15 34.5 32.7 34.55 Q33.2 34.65 33.6 35 L34 35.75 33.55 36.45 33.5 36.5 Q32.9 37 32 37 31.1 37 30.45 36.5 L30.45 36.45 30.1 36 26 36 Q26.05 38.05 27.9 39.55 29.6 41 32 41 34.4 41 36.1 39.5 L36.05 39.6 Q38.05 37.95 38 35.75"/>
  </g>
</svg>`,Aa=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M38 24 L34 24 34 30 30 30 30 24 26 24 26 32.05 Q26 32.85 26.55 33.4 27.15 34 27.95 34 L34 34 34 41 38 41 38 24"/>
  </g>
</svg>`,Ea=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M34.5 36.6 Q34.1 37 33.5 37 L30.95 37 Q30.6 37 30.3 36.7 30 36.4 30 36 L26 36 26.1 37 Q26.35 38.4 27.4 39.5 L27.5 39.6 Q28.9 40.95 30.85 41 L33.5 41 Q35.75 41 37.35 39.4 L37.4 39.35 Q38.8 37.95 39 36 L39 35.5 Q39 33.2 37.4 31.6 35.8 30 33.5 30 L30 30 30 28 39 28 39 24 26 24 26 34 33.5 34 Q34.1 34 34.55 34.45 35 34.9 35 35.5 35 36.1 34.6 36.5 L34.5 36.6"/>
  </g>
</svg>`,ka=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M37.25 30.75 Q35.5 29 33 29 L35 24 30 24 26.15 33.65 26.1 34 26 35 Q26 37.5 27.75 39.25 29.5 41 32 41 L33 41 Q35.45 41 37.2 39.25 L37.25 39.2 Q39 37.45 39 35 39 32.5 37.25 30.75 M33 33 Q33.8 33 34.4 33.6 35 34.2 35 35 35 35.8 34.45 36.35 L34.35 36.45 Q33.8 37 33 37 L32 37 Q31.2 37 30.6 36.4 30 35.8 30 35 30 34.45 30.25 34 L30.55 33.6 30.6 33.55 31.35 33.1 32 33 33 33"/>
  </g>
</svg>`,Ma=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M33 41 L38 28 38 24 25 24 25 28 33 28 28 41 33 41"/>
  </g>
</svg>`,Ta=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M32.5 41 Q34.75 41 36.35 39.4 L36.4 39.35 Q37.8 37.95 38 36 L38 35.5 Q38 33.6 36.9 32.2 38 30.85 38 29 38 26.95 36.6 25.5 L36.5 25.4 Q35.05 24 33.05 24 L29.95 24 28.65 24.2 Q27.45 24.5 26.5 25.4 L26.4 25.5 Q25 26.95 25 29 25 30.85 26.1 32.2 25 33.6 25 35.5 L25 36 Q25.2 37.95 26.6 39.35 L26.65 39.4 Q28.25 41 30.5 41 L32.5 41 M30 30 L29.3 29.7 Q29 29.4 29 29 29 28.6 29.3 28.3 29.6 28 29.95 28 L33.05 28 Q33.4 28 33.7 28.3 L34 29 33.7 29.7 33 30 30 30 M33.5 36.6 Q33.1 37 32.5 37 L30.5 37 Q29.9 37 29.5 36.6 L29.4 36.5 Q29 36.1 29 35.5 29 34.9 29.45 34.45 29.9 34 30.5 34 L32.55 34 Q33.1 34 33.55 34.45 34 34.9 34 35.5 34 36.1 33.6 36.5 L33.5 36.6"/>
  </g>
</svg>`,Ra=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M26.75 34.25 Q28.5 36 31 36 L29 41 34 41 37.85 31.35 37.9 31 38 30 Q38 27.5 36.25 25.75 34.5 24 32 24 L31 24 Q28.55 24 26.8 25.75 L26.75 25.8 Q25 27.55 25 30 25 32.5 26.75 34.25 M31 32 Q30.2 32 29.6 31.4 29 30.8 29 30 29 29.2 29.55 28.65 L29.65 28.55 Q30.2 28 31 28 L32 28 Q32.8 28 33.4 28.6 34 29.2 34 30 L33.75 31 33.45 31.4 33.4 31.45 32.65 31.9 32 32 31 32"/>
  </g>
</svg>`,Oa=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M43 24 L39 24 36 27 36 28.95 39 28.95 39 33.85 39 33.95 39 41 43 41 43 24 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M25 41 L25 35 32 35 32 31 28.15 31 28.05 31 25 31 25 28 32 28 32 24 28.15 24 28.05 24 21 24 21 33.85 21 33.95 21 41 25 41"/>
  </g>
</svg>`,Da=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M23 41 L23 35 30 35 30 31 23 31 23 28 30 28 30 24 24.15 24 24.05 24 19 24 19 33.85 19 33.95 19 41 23 41 M40.5 28.4 Q41.25 29.15 40 30.45 L33 37 33 41 37.85 41 37.95 41 45 41 45 37 39 37 43.45 32.55 Q45.65 30.35 44.4 27 L43.4 25.65 43.35 25.6 43.25 25.5 Q41.7 24 39.5 24 L37.85 24 Q35.9 24.05 34.5 25.4 L34.4 25.5 Q33.35 26.6 33.1 28 L33 29 37 29 Q37 28.6 37.3 28.3 37.55 28.05 37.85 28 L37.95 28 39.5 28 Q40.1 28 40.5 28.4"/>
  </g>
</svg>`,Pa=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M45 35.75 Q45.05 33.9 43.75 32.5 45.05 31.1 45 29.25 45.05 27.05 43.05 25.4 L43.1 25.5 Q41.4 24 39 24 36.6 24 34.9 25.45 33.05 26.95 33 29 L37.1 29 37.45 28.55 37.45 28.5 Q38.1 28 39 28 39.9 28 40.5 28.5 L40.55 28.55 41 29.25 40.6 30 Q40 30.5 39.15 30.5 L37 30.5 37 34.5 39.15 34.5 39.7 34.55 Q40.2 34.65 40.6 35 L41 35.75 40.55 36.45 40.5 36.5 Q39.9 37 39 37 38.1 37 37.45 36.5 L37.45 36.45 37.1 36 33 36 Q33.05 38.05 34.9 39.55 36.6 41 39 41 41.4 41 43.1 39.5 L43.05 39.6 Q45.05 37.95 45 35.75 M23 41 L23 35 30 35 30 31 26.15 31 26.05 31 23 31 23 28 30 28 30 24 26.15 24 26.05 24 19 24 19 33.85 19 33.95 19 41 23 41"/>
  </g>
</svg>`,Na=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M45 24 L41 24 41 30 37 30 37 24 33 24 33 32.05 Q33 32.85 33.55 33.4 34.15 34 34.95 34 L41 34 41 41 45 41 45 24 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M23 41 L23 35 30 35 30 31 26.15 31 26.05 31 23 31 23 28 30 28 30 24 26.15 24 26.05 24 19 24 19 33.85 19 33.95 19 41 23 41"/>
  </g>
</svg>`,Ua=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M41.5 36.6 Q41.1 37 40.5 37 L37.95 37 37.3 36.7 Q37 36.4 37 36 L33 36 33.1 37 Q33.35 38.4 34.4 39.5 L34.5 39.6 Q35.9 40.95 37.85 41 L40.5 41 Q42.75 41 44.35 39.4 L44.4 39.35 Q45.8 37.95 46 36 L46 35.5 Q46 33.2 44.4 31.6 42.8 30 40.5 30 L37 30 37 28 46 28 46 24 33 24 33 34 40.5 34 Q41.1 34 41.55 34.45 42 34.9 42 35.5 42 36.1 41.6 36.5 L41.5 36.6 M22 41 L22 35 29 35 29 31 25.15 31 25.05 31 22 31 22 28 29 28 29 24 25.15 24 25.05 24 18 24 18 33.85 18 33.95 18 41 22 41"/>
  </g>
</svg>`,Ha=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M44.25 30.75 Q42.5 29 40 29 L42 24 37 24 33.15 33.65 33.1 34 33 35 Q33 37.5 34.75 39.25 36.5 41 39 41 L40 41 Q42.45 41 44.2 39.25 L44.25 39.2 Q46 37.45 46 35 46 32.5 44.25 30.75 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M40 33 Q40.8 33 41.4 33.6 42 34.2 42 35 42 35.8 41.45 36.35 L41.35 36.45 Q40.8 37 40 37 L39 37 Q38.2 37 37.6 36.4 37 35.8 37 35 37 34.45 37.25 34 L37.55 33.6 37.6 33.55 Q37.95 33.25 38.35 33.1 L39 33 40 33 M23 41 L23 35 30 35 30 31 26.15 31 26.05 31 23 31 23 28 30 28 30 24 26.15 24 26.05 24 19 24 19 33.85 19 33.95 19 41 23 41"/>
  </g>
</svg>`,Ba=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M41 41 L46 28 46 24 33 24 33 28 41 28 36 41 41 41 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M22 41 L22 35 29 35 29 31 25.15 31 25.05 31 22 31 22 28 29 28 29 24 25.15 24 25.05 24 18 24 18 33.85 18 33.95 18 41 22 41"/>
  </g>
</svg>`,Wa=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M38 30 Q37.6 30 37.3 29.7 37 29.4 37 29 37 28.6 37.3 28.3 37.6 28 37.95 28 L41.05 28 Q41.4 28 41.7 28.3 L42 29 41.7 29.7 41 30 38 30 M40.5 41 Q42.75 41 44.35 39.4 L44.4 39.35 Q45.8 37.95 46 36 L46 35.5 Q46 33.6 44.9 32.2 46 30.85 46 29 46 26.95 44.6 25.5 L44.5 25.4 Q43.05 24 41.05 24 L37.95 24 36.65 24.2 Q35.45 24.5 34.5 25.4 L34.4 25.5 Q33 26.95 33 29 33 30.85 34.1 32.2 33 33.6 33 35.5 L33 36 Q33.2 37.95 34.6 39.35 L34.65 39.4 Q36.25 41 38.5 41 L40.5 41 M41.5 36.6 Q41.1 37 40.5 37 L38.5 37 Q37.9 37 37.5 36.6 L37.4 36.5 Q37 36.1 37 35.5 37 34.9 37.45 34.45 37.9 34 38.5 34 L40.55 34 Q41.1 34 41.55 34.45 42 34.9 42 35.5 42 36.1 41.6 36.5 L41.5 36.6 M22 41 L22 35 29 35 29 31 25.15 31 25.05 31 22 31 22 28 29 28 29 24 25.15 24 25.05 24 18 24 18 33.85 18 33.95 18 41 22 41"/>
  </g>
</svg>`,Ka=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M39 32 Q38.2 32 37.6 31.4 37 30.8 37 30 37 29.2 37.55 28.65 L37.65 28.55 Q38.2 28 39 28 L40 28 Q40.8 28 41.4 28.6 42 29.2 42 30 L41.75 31 41.45 31.4 41.4 31.45 40.65 31.9 40 32 39 32 M34.75 34.25 Q36.5 36 39 36 L37 41 42 41 45.85 31.35 45.9 31 46 30 Q46 27.5 44.25 25.75 42.5 24 40 24 L39 24 Q36.55 24 34.8 25.75 L34.75 25.8 Q33 27.55 33 30 33 32.5 34.75 34.25 M23 41 L23 35 30 35 30 31 26.15 31 26.05 31 23 31 23 28 30 28 30 24 26.15 24 26.05 24 19 24 19 33.85 19 33.95 19 41 23 41"/>
  </g>
</svg>`,Va=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M43 28 Q44.2 28 45.1 28.9 46 29.75 46 31 L46 34 Q46 35.2 45.1 36.05 L45.05 36.1 Q44.2 37 43 37 41.75 37 40.9 36.1 40 35.2 40 34 L40 31 Q40 29.8 40.85 28.9 L40.9 28.85 Q41.8 28 43 28 M47.95 26.05 Q45.9 24 43 24 40.15 24 38.05 26 L38 26.05 Q36 28.15 36 31 L36 34 Q36 36.9 38.05 38.95 40.15 41 43 41 45.85 41 47.9 38.95 L47.95 38.9 Q50 36.85 50 34 L50 31 Q50 28.15 47.95 26.05 M34 24 L30 24 27 27 27 28.95 30 28.95 30 33.85 30 33.95 30 41 34 41 34 24 M18 41 L18 35 25 35 25 31 21.15 31 21.05 31 18 31 18 28 25 28 25 24 21.15 24 21.05 24 14 24 14 33.85 14 33.95 14 41 18 41"/>
  </g>
</svg>`,Ga=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M47 24 L43 24 40 27 40 28.95 43 28.95 43 33.85 43 33.95 43 41 47 41 47 24 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M21 41 L21 35 28 35 28 31 24.15 31 24.05 31 21 31 21 28 28 28 28 24 24.15 24 24.05 24 17 24 17 33.85 17 33.95 17 41 21 41 M38 24 L34 24 31 27 31 28.95 34 28.95 34 33.85 34 33.95 34 41 38 41 38 24"/>
  </g>
</svg>`,za=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M34 24 L30 24 27 27 27 28.95 30 28.95 30 33.85 30 33.95 30 41 34 41 34 24 M18 41 L18 35 25 35 25 31 21.15 31 21.05 31 18 31 18 28 25 28 25 24 21.15 24 21.05 24 14 24 14 33.85 14 33.95 14 41 18 41 M44.5 28.4 Q45.25 29.15 44 30.45 L37 37 37 41 41.85 41 41.95 41 49 41 49 37 43 37 47.45 32.55 Q49.65 30.35 48.4 27 L47.4 25.65 47.35 25.6 Q45.75 24 43.5 24 L41.85 24 Q39.9 24.05 38.5 25.4 L38.4 25.5 Q37.35 26.6 37.1 28 L37 29 41 29 Q41 28.6 41.3 28.3 41.55 28.05 41.85 28 L41.95 28 43.5 28 Q44.1 28 44.5 28.4"/>
  </g>
</svg>`,qa=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#7C66E8" d="M22.8 20 L20 22.8 29.2 32 20 41.2 22.8 44 32 34.8 41.2 44 44 41.2 34.8 32 44 22.8 41.2 20 32 29.2 22.8 20 M56 32 Q56 42 48.95 48.95 42 56 32 56 22.05 56 15 48.95 8 42 8 32 8 22.05 15 15 22.05 8 32 8 42 8 48.95 15 56 22.05 56 32"/>
  </g>
</svg>`,ja=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FF6666" d="M37.7 26.35 Q40 28.65 40 32 40 35.35 37.7 37.7 35.35 40 32 40 28.7 40 26.4 37.7 L26.35 37.65 Q24 35.3 24 32 24 28.7 26.35 26.35 L26.4 26.35 Q28.7 24 32 24 35.35 24 37.7 26.35 M44 32 Q44 27 40.5 23.5 37 20 32 20 27.05 20 23.55 23.5 20 27 20 32 20 37 23.55 40.5 27.05 44 32 44 37 44 40.5 40.5 44 37 44 32 M56 32 Q56 42 48.95 48.95 42 56 32 56 22.05 56 15 48.95 8 42 8 32 8 22.05 15 15 22.05 8 32 8 42 8 48.95 15 56 22.05 56 32"/>
  </g>
</svg>`,Xa=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FF69F8" d="M56 32 Q56 42 48.95 48.95 42 56 32 56 22.05 56 15 48.95 8 42 8 32 8 22.05 15 15 22.05 8 32 8 42 8 48.95 15 56 22.05 56 32 M20 20 L20 44 44 44 44 20 20 20 M24 40 L24 24 40 24 40 40 24 40"/>
  </g>
</svg>`,Ya=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#40E2A0" d="M56 32 Q56 42 48.95 48.95 42 56 32 56 22.05 56 15 48.95 8 42 8 32 8 22.05 15 15 22.05 8 32 8 42 8 48.95 15 56 22.05 56 32 M46 42 L32 18 18 42 46 42 M32 25.95 L39.05 38 25 38 32 25.95"/>
  </g>
</svg>`,Za=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M42 25 L38 25 35 28 35 29.95 38 29.95 38 34.85 38 34.95 38 42 42 42 42 25 M12 30 Q12 21.7 17.8 15.8 20.2 13.45 22.95 12.1 27.05 10 32 10 40.25 10 46.1 15.8 49.85 19.55 51.25 24.3 L51.8 26.9 52 29.6 52 46 52 46.45 Q51.85 49.15 50.1 51.2 L49.65 51.65 49.45 51.85 Q48 53.2 46.25 53.7 L44 54 20 54 Q16.7 54 14.35 51.65 12 49.3 12 46 L12 30 M22 25 L22 42 34 42 34 38 26 38 26 25 22 25"/>
  </g>
</svg>`,Ja=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M21 25 L21 42 25 42 25 37 28 37 30.5 42 34.5 42 31.45 35.9 32.2 35.25 32.25 35.2 33.2 34 Q34 32.65 34 31 34 28.5 32.25 26.75 L31.35 26 Q29.9 25 28 25 L21 25 M43 25 L39 25 36 28 36 29.95 39 29.95 39 34.85 39 34.95 39 42 43 42 43 25 M12 30 Q12 21.7 17.8 15.8 23.7 10 32 10 40.25 10 46.1 15.8 49.85 19.55 51.25 24.3 L51.8 26.9 52 29.6 52 46 52 46.45 Q51.85 49.15 50.1 51.2 L49.65 51.65 49.45 51.85 Q48 53.2 46.25 53.7 L44 54 20 54 Q16.85 54 14.55 51.85 L14.35 51.65 Q12 49.3 12 46 L12 30 M28 29 Q28.8 29 29.4 29.6 30 30.2 30 31 30 31.8 29.45 32.35 L29.35 32.45 Q28.8 33 28 33 L25 33 25 29 28 29"/>
  </g>
</svg>`,$a=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M23 23 L23 40 35 40 35 36 27 36 27 23 23 23 M16 30 L16 16 Q16 12.7 18.35 10.35 20.7 8 24 8 L48 8 Q51.3 8 53.65 10.35 55.75 12.45 56 15.25 L56 16 56 40 Q56 46.6 51.3 51.3 46.6 56 40 56 L12.8 56 Q10.75 56 9.45 54.75 8 53.45 8 51.6 8 50.15 12 43.6 15.75 37.4 16 30 M44.5 27.4 Q45.25 28.15 44 29.45 L37 36 37 40 41.85 40 41.95 40 49 40 49 36 43 36 47.45 31.55 Q49.65 29.35 48.4 26 L47.4 24.65 47.35 24.6 Q45.75 23 43.5 23 L41.85 23 Q39.9 23.05 38.5 24.4 L38.4 24.5 Q37.35 25.6 37.1 27 L37 28 41 28 Q41 27.6 41.3 27.3 41.55 27.05 41.85 27 L41.95 27 43.5 27 Q44.1 27 44.5 27.4"/>
  </g>
</svg>`,ts=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M48 30 Q48.25 37.4 52 43.6 56 50.15 56 51.6 56 53.45 54.55 54.75 53.25 56 51.2 56 L24 56 Q17.4 56 12.7 51.3 8 46.6 8 40 L8 16 Q8 12.7 10.35 10.35 12.7 8 16 8 L40 8 Q43.3 8 45.65 10.35 48 12.7 48 16 L48 30 M37.5 27.4 Q38.25 28.15 37 29.45 L30 36 30 40 34.85 40 34.95 40 42 40 42 36 36 36 40.45 31.55 Q42.65 29.35 41.4 26 L40.4 24.65 40.35 24.6 Q38.75 23 36.5 23 L34.85 23 Q32.9 23.05 31.5 24.4 L31.4 24.5 Q30.35 25.6 30.1 27 L30 28 34 28 Q34 27.6 34.3 27.3 34.55 27.05 34.85 27 L34.95 27 36.5 27 Q37.1 27 37.5 27.4 M22 27 Q22.8 27 23.4 27.6 24 28.2 24 29 24 29.8 23.45 30.35 L23.35 30.45 Q22.8 31 22 31 L19 31 19 27 22 27 M15 23 L15 40 19 40 19 35 22 35 24.5 40 28.5 40 25.45 33.9 26.2 33.25 26.25 33.2 Q28 31.45 28 29 28 26.5 26.25 24.75 24.5 23 22 23 L15 23"/>
  </g>
</svg>`,es=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M28 19 L27.7 19.7 Q27.4 20 27 20 L26.3 19.7 26 19 26 16 24 16 24 19 23.7 19.7 23 20 Q22.6 20 22.3 19.7 22 19.4 22 19 L22 11 Q22 10.6 22.3 10.3 22.6 10 23 10 23.4 10 23.7 10.3 L24 11 24 14 26 14 26 11 Q26 10.6 26.3 10.3 26.6 10 27 10 27.4 10 27.7 10.3 L28 11 28 19 M18 12 Q17.6 12 17.3 12.3 17 12.6 17 13 17 13.4 17.3 13.7 17.6 14 17.95 14 L18.05 14 Q19.2 14 20.1 14.9 21 15.8 21 17 21 18.2 20.1 19.1 19.2 20 18 20 L16 20 15.3 19.7 Q15 19.4 15 19 15 18.6 15.3 18.3 15.6 18 16 18 L18 18 Q18.4 18 18.7 17.7 L19 17 18.7 16.3 Q18.4 16 18.05 16 L17.95 16 Q16.8 16 15.9 15.1 15 14.2 15 13 15 11.8 15.9 10.9 16.8 10 18 10 L20 10 Q20.4 10 20.7 10.3 L21 11 20.7 11.7 20 12 18 12 M39.1 14 L39.45 13.9 39.7 13.7 39.75 13.7 40 13 39.7 12.25 Q39.45 12 39.05 12 L38 12 38 14 39.1 14 M29 12.8 Q29 11.65 29.85 10.8 L29.9 10.75 Q30.75 10 32 10 33.15 10 34.05 10.75 L34.1 10.8 Q35 11.65 35 12.8 L35 19 34.7 19.7 Q34.4 20 34 20 L33.3 19.7 Q33 19.4 33 19 L33 17 31 17 31 19 30.7 19.7 Q30.4 20 30 20 L29.3 19.7 Q29 19.4 29 19 L29 12.8 M31 12.8 L31 15 33 15 33 12.8 32.75 12.25 32.75 12.3 Q32.45 12 32 12 31.55 12 31.2 12.3 L31.25 12.2 Q31 12.45 31 12.8 M41.1 15.1 L41.1 15.15 40.45 15.65 41.9 18.55 41.95 19.35 41.45 19.9 40.7 19.95 Q40.3 19.8 40.1 19.45 L38.4 16 38 16 38 19 37.7 19.7 37 20 36.3 19.7 Q36 19.4 36 19 L36 11 Q36 10.6 36.3 10.3 36.6 10 37 10 L39.05 10 Q40.25 10 41.1 10.85 42 11.75 42 13 42 14.25 41.1 15.1 M43 11 Q43 10.6 43.3 10.3 43.6 10 44 10 L48 10 Q48.4 10 48.7 10.3 L49 11 48.7 11.7 Q48.4 12 48 12 L45 12 45 14 48 14 Q48.4 14 48.7 14.3 L49 15 48.7 15.7 Q48.4 16 48 16 L45 16 45 18 48 18 Q48.4 18 48.7 18.3 L49 19 48.7 19.7 Q48.4 20 48 20 L44 20 Q43.6 20 43.3 19.7 43 19.4 43 19 L43 11 M32 26 Q35.3 26 37.65 28.35 40 30.7 40 34 L40 46 Q40 49.3 37.65 51.65 35.3 54 32 54 28.7 54 26.35 51.65 24 49.3 24 46 L24 34 Q24 30.7 26.35 28.35 28.7 26 32 26"/>
  </g>
</svg>`,ns=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M10.85 10.8 L10.9 10.75 Q11.75 10 13 10 14.15 10 15.05 10.75 L15.1 10.8 Q16 11.65 16 12.8 L16 17.25 Q16 18.35 15.1 19.25 L15.05 19.3 Q14.15 20 13 20 11.75 20 10.9 19.3 L10.85 19.2 Q10 18.35 10 17.25 L10 12.8 Q10 11.65 10.85 10.8 M12 12.8 L12 17.25 12.2 17.75 13 18 13.75 17.75 13.75 17.8 14 17.25 14 12.8 13.75 12.25 13.75 12.3 Q13.45 12 13 12 12.55 12 12.2 12.3 L12.25 12.2 12 12.8 M20.1 14 L20.45 13.9 20.7 13.7 20.75 13.7 21 13 20.7 12.25 Q20.45 12 20.05 12 L19 12 19 14 20.1 14 M19 19 L18.7 19.7 Q18.4 20 18 20 L17.3 19.7 Q17 19.4 17 19 L17 11 Q17 10.6 17.3 10.3 17.6 10 18 10 L20.05 10 Q21.25 10 22.1 10.85 23 11.75 23 13 23 14.25 22.1 15.1 L22.1 15.15 21.45 15.65 21.35 15.7 20.1 16 19 16 19 19 M25 12 L24.3 11.7 Q24 11.4 24 11 24 10.6 24.3 10.3 24.6 10 25 10 L29 10 29.7 10.3 30 11 29.7 11.7 29 12 28 12 28 19 27.7 19.7 Q27.4 20 27 20 L26.3 19.7 26 19 26 12 25 12 M36 12.8 L36 17.25 36.2 17.75 37 18 37.75 17.75 37.75 17.8 38 17.25 38 12.8 37.75 12.25 37.75 12.3 Q37.45 12 37 12 36.55 12 36.2 12.3 L36.25 12.2 36 12.8 M34.85 10.8 L34.9 10.75 Q35.75 10 37 10 38.15 10 39.05 10.75 L39.1 10.8 Q40 11.65 40 12.8 L40 17.25 Q40 18.35 39.1 19.25 L39.05 19.3 Q38.15 20 37 20 35.75 20 34.9 19.3 L34.85 19.2 Q34 18.35 34 17.25 L34 12.8 Q34 11.65 34.85 10.8 M33 19 L32.7 19.7 32 20 Q31.6 20 31.3 19.7 31 19.4 31 19 L31 11 Q31 10.6 31.3 10.3 31.6 10 32 10 32.4 10 32.7 10.3 L33 11 33 19 M47 19 L46.8 19.65 46.25 20 45.6 19.9 45.1 19.45 43 15.25 43 19 42.7 19.7 42 20 41.3 19.7 Q41 19.4 41 19 L41 11 Q41 10.65 41.25 10.4 L41.8 10.05 42.45 10.1 42.9 10.55 45 14.75 45 11 Q45 10.6 45.3 10.3 45.6 10 46 10 46.4 10 46.7 10.3 L47 11 47 19 M51 12 Q50.6 12 50.3 12.3 50 12.6 50 13 50 13.4 50.3 13.7 L50.95 14 51.05 14 Q52.2 14 53.1 14.9 54 15.8 54 17 54 18.2 53.1 19.1 52.2 20 51 20 L49 20 Q48.6 20 48.3 19.7 48 19.4 48 19 48 18.6 48.3 18.3 48.6 18 49 18 L51 18 Q51.4 18 51.7 17.7 L52 17 51.7 16.3 Q51.4 16 51.05 16 L50.95 16 Q49.8 16 48.9 15.1 48 14.2 48 13 48 11.8 48.9 10.9 49.8 10 51 10 L53 10 Q53.4 10 53.7 10.3 L54 11 53.7 11.7 53 12 51 12 M32 26 Q35.3 26 37.65 28.35 40 30.7 40 34 L40 46 39.85 47.6 Q39.4 49.9 37.65 51.65 35.3 54 32 54 28.7 54 26.35 51.65 24.6 49.9 24.15 47.6 L24 46 24 34 Q24 30.7 26.35 28.35 28.7 26 32 26"/>
  </g>
</svg>`,is=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M31.2 37 Q24.55 36.75 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.35 36.75 32.8 37 L31.2 37 M42.8 40.15 L46.55 37.7 46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4 12.1 33.45 17.4 37.65 L21.25 40.15 Q21 40.8 21 41.65 21 43.5 22.25 44.85 L22.3 44.95 28.7 51.6 Q30 53 32 53 33.85 53.05 35.3 51.65 L35.3 51.6 41.7 44.95 41.8 44.85 Q43 43.5 43 41.65 L42.8 40.15 M43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 22.05 8 32 8 42 8 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 M31 30 L31 20 28 20 28 33 37 33 37 30 31 30 M25.6 40 L38.4 40 Q39.05 40 39.55 40.5 L40 41.3 40 41.65 Q40 42.35 39.55 42.85 L33.15 49.5 Q32.65 50 32 50 31.3 50 30.85 49.5 L24.45 42.85 Q24 42.35 24 41.65 L24.05 41.3 24.45 40.5 Q24.9 40 25.6 40"/>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M25.6 40 Q24.9 40 24.45 40.5 L24.05 41.3 24 41.65 Q24 42.35 24.45 42.85 L30.85 49.5 Q31.3 50 32 50 32.65 50 33.15 49.5 L39.55 42.85 Q40 42.35 40 41.65 L40 41.3 39.55 40.5 Q39.05 40 38.4 40 L25.6 40 M32.8 37 L38.4 37 Q40.25 36.95 41.7 38.4 42.45 39.15 42.8 40.15 L43 41.65 Q43 43.5 41.8 44.85 L41.7 44.95 35.3 51.6 35.3 51.65 Q33.85 53.05 32 53 30 53 28.7 51.6 L22.3 44.95 22.25 44.85 Q21 43.5 21 41.65 21 40.8 21.25 40.15 21.55 39.2 22.25 38.5 23.55 37 25.6 37 L31.2 37 32.8 37"/>
  </g>
</svg>`,rs=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M31.2 37 Q24.55 36.75 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.35 36.75 32.8 37 L31.2 37 M42.8 40.15 L46.55 37.7 46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4 12.1 33.45 17.4 37.65 L21.25 40.15 Q21 40.8 21 41.65 21 43.5 22.25 44.85 L22.3 44.95 28.7 51.6 Q30 53 32 53 33.85 53.05 35.3 51.65 L35.3 51.6 41.7 44.95 41.8 44.85 Q43 43.5 43 41.65 L42.8 40.15 M43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 22.05 8 32 8 42 8 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 M33 30 L34 29.9 34 30 35 33 38 33 36.5 28.5 Q38 27.05 38 25 38 22.95 36.5 21.45 35.05 20 33 20 L27 20 27 33 30 33 30 30 33 30 M30 27 L30 23 33 23 Q33.85 23 34.4 23.55 35 24.15 35 25 35 25.85 34.4 26.4 33.85 27 33.05 27 L30 27 M30.85 49.5 L24.45 42.85 Q24 42.35 24 41.65 L24.05 41.3 24.45 40.5 Q24.9 40 25.6 40 L38.4 40 Q39.05 40 39.55 40.5 L40 41.3 40 41.65 Q40 42.35 39.55 42.85 L33.15 49.5 Q32.65 50 32 50 31.3 50 30.85 49.5"/>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M30.85 49.5 Q31.3 50 32 50 32.65 50 33.15 49.5 L39.55 42.85 Q40 42.35 40 41.65 L40 41.3 39.55 40.5 Q39.05 40 38.4 40 L25.6 40 Q24.9 40 24.45 40.5 L24.05 41.3 24 41.65 Q24 42.35 24.45 42.85 L30.85 49.5 M32.8 37 L38.4 37 Q40.25 36.95 41.7 38.4 42.45 39.15 42.8 40.15 L43 41.65 Q43 43.5 41.8 44.85 L41.7 44.95 35.3 51.6 35.3 51.65 Q33.85 53.05 32 53 30 53 28.7 51.6 L22.3 44.95 22.25 44.85 Q21 43.5 21 41.65 21 40.8 21.25 40.15 21.55 39.2 22.25 38.5 23.55 37 25.6 37 L31.2 37 32.8 37"/>
  </g>
</svg>`,as=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#E73246" d="M40 10 L40 19.15 Q40 20 39.45 20.6 L33.45 26.6 Q32.85 27.15 32 27.15 31.15 27.15 30.6 26.6 L24.6 20.6 Q24 20 24 19.15 L24 10 Q24 9.15 24.6 8.6 25.15 8 26 8 L38 8 Q38.85 8 39.45 8.6 40 9.15 40 10"/>
    <path stroke="none" fill="#FFFFFF" d="M56 26 L56 38 Q56 38.85 55.45 39.45 54.85 40 54 40 L44.85 40 Q44 40 43.45 39.45 L37.45 33.45 Q36.85 32.85 36.85 32 36.85 31.15 37.45 30.6 L43.45 24.6 Q44 24 44.85 24 L54 24 Q54.85 24 55.45 24.6 56 25.15 56 26 M33.45 37.45 L39.45 43.45 Q40 44 40 44.85 L40 54 Q40 54.85 39.45 55.45 38.85 56 38 56 L26 56 Q25.15 56 24.6 55.45 24 54.85 24 54 L24 44.85 Q24 44 24.6 43.45 L30.6 37.45 Q31.15 36.85 32 36.85 32.85 36.85 33.45 37.45 M19.15 40 L10 40 Q9.15 40 8.6 39.45 8 38.85 8 38 L8 26 Q8 25.15 8.6 24.6 9.15 24 10 24 L19.15 24 Q20 24 20.6 24.6 L26.6 30.6 Q27.15 31.15 27.15 32 27.15 32.85 26.6 33.45 L20.6 39.45 Q20 40 19.15 40"/>
  </g>
</svg>`,ss=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M40 10 L40 19.15 Q40 20 39.45 20.6 L33.45 26.6 Q32.85 27.15 32 27.15 31.15 27.15 30.6 26.6 L24.6 20.6 Q24 20 24 19.15 L24 10 Q24 9.15 24.6 8.6 25.15 8 26 8 L38 8 Q38.85 8 39.45 8.6 40 9.15 40 10 M56 26 L56 38 Q56 38.85 55.45 39.45 54.85 40 54 40 L44.85 40 Q44 40 43.45 39.45 L37.45 33.45 Q36.85 32.85 36.85 32 36.85 31.15 37.45 30.6 L43.45 24.6 Q44 24 44.85 24 L54 24 Q54.85 24 55.45 24.6 56 25.15 56 26 M19.15 40 L10 40 Q9.15 40 8.6 39.45 8 38.85 8 38 L8 26 Q8 25.15 8.6 24.6 9.15 24 10 24 L19.15 24 Q20 24 20.6 24.6 L26.6 30.6 Q27.15 31.15 27.15 32 27.15 32.85 26.6 33.45 L20.6 39.45 Q20 40 19.15 40"/>
    <path stroke="none" fill="#E73246" d="M33.45 37.45 L39.45 43.45 Q40 44 40 44.85 L40 54 Q40 54.85 39.45 55.45 38.85 56 38 56 L26 56 Q25.15 56 24.6 55.45 24 54.85 24 54 L24 44.85 Q24 44 24.6 43.45 L30.6 37.45 Q31.15 36.85 32 36.85 32.85 36.85 33.45 37.45"/>
  </g>
</svg>`,os=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M40 10 L40 19.15 Q40 20 39.45 20.6 L33.45 26.6 Q32.85 27.15 32 27.15 31.15 27.15 30.6 26.6 L24.6 20.6 Q24 20 24 19.15 L24 10 Q24 9.15 24.6 8.6 25.15 8 26 8 L38 8 Q38.85 8 39.45 8.6 40 9.15 40 10 M56 26 L56 38 Q56 38.85 55.45 39.45 54.85 40 54 40 L44.85 40 Q44 40 43.45 39.45 L37.45 33.45 Q36.85 32.85 36.85 32 36.85 31.15 37.45 30.6 L43.45 24.6 Q44 24 44.85 24 L54 24 Q54.85 24 55.45 24.6 56 25.15 56 26 M33.45 37.45 L39.45 43.45 Q40 44 40 44.85 L40 54 Q40 54.85 39.45 55.45 38.85 56 38 56 L26 56 Q25.15 56 24.6 55.45 24 54.85 24 54 L24 44.85 Q24 44 24.6 43.45 L30.6 37.45 Q31.15 36.85 32 36.85 32.85 36.85 33.45 37.45"/>
    <path stroke="none" fill="#E73246" d="M19.15 40 L10 40 Q9.15 40 8.6 39.45 8 38.85 8 38 L8 26 Q8 25.15 8.6 24.6 9.15 24 10 24 L19.15 24 Q20 24 20.6 24.6 L26.6 30.6 Q27.15 31.15 27.15 32 27.15 32.85 26.6 33.45 L20.6 39.45 Q20 40 19.15 40"/>
  </g>
</svg>`,ls=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M40 10 L40 19.15 Q40 20 39.45 20.6 L33.45 26.6 Q32.85 27.15 32 27.15 31.15 27.15 30.6 26.6 L24.6 20.6 Q24 20 24 19.15 L24 10 Q24 9.15 24.6 8.6 25.15 8 26 8 L38 8 Q38.85 8 39.45 8.6 40 9.15 40 10 M33.45 37.45 L39.45 43.45 Q40 44 40 44.85 L40 54 Q40 54.85 39.45 55.45 38.85 56 38 56 L26 56 Q25.15 56 24.6 55.45 24 54.85 24 54 L24 44.85 Q24 44 24.6 43.45 L30.6 37.45 Q31.15 36.85 32 36.85 32.85 36.85 33.45 37.45 M19.15 40 L10 40 Q9.15 40 8.6 39.45 8 38.85 8 38 L8 26 Q8 25.15 8.6 24.6 9.15 24 10 24 L19.15 24 Q20 24 20.6 24.6 L26.6 30.6 Q27.15 31.15 27.15 32 27.15 32.85 26.6 33.45 L20.6 39.45 Q20 40 19.15 40"/>
    <path stroke="none" fill="#E73246" d="M56 26 L56 38 Q56 38.85 55.45 39.45 54.85 40 54 40 L44.85 40 Q44 40 43.45 39.45 L37.45 33.45 Q36.85 32.85 36.85 32 36.85 31.15 37.45 30.6 L43.45 24.6 Q44 24 44.85 24 L54 24 Q54.85 24 55.45 24.6 56 25.15 56 26"/>
  </g>
</svg>`,cs=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M37.7 26.35 Q40 28.65 40 32 40 35.35 37.7 37.7 35.35 40 32 40 28.7 40 26.4 37.7 L26.35 37.65 Q24 35.3 24 32 24 28.7 26.35 26.35 L26.4 26.35 Q28.7 24 32 24 35.35 24 37.7 26.35 M44 32 Q44 27 40.5 23.5 37 20 32 20 27.05 20 23.55 23.5 20 27 20 32 20 37 23.55 40.5 27.05 44 32 44 37 44 40.5 40.5 44 37 44 32 M56 32 Q56 42 48.95 48.95 42 56 32 56 22.05 56 15 48.95 8 42 8 32 8 22.05 15 15 22.05 8 32 8 42 8 48.95 15 56 22.05 56 32"/>
  </g>
</svg>`,ds=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.05 37 32 37 24.85 37 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 M43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 22.05 8 32 8 42 8 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 M31 30 L31 20 28 20 28 33 37 33 37 30 31 30 M12 27.4 Q12.1 33.45 17.4 37.65 23.45 42.5 32 42.5 40.55 42.5 46.55 37.7 L46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4"/>
  </g>
</svg>`,us=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.05 37 32 37 24.85 37 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 M43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 22.05 8 32 8 42 8 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 M33 30 L34 29.9 34 30 35 33 38 33 36.5 28.5 Q38 27.05 38 25 38 22.95 36.5 21.45 35.05 20 33 20 L27 20 27 33 30 33 30 30 33 30 M30 27 L30 23 33 23 Q33.85 23 34.4 23.55 35 24.15 35 25 35 25.85 34.4 26.4 33.85 27 33.05 27 L30 27 M12 27.4 Q12.1 33.45 17.4 37.65 23.45 42.5 32 42.5 40.55 42.5 46.55 37.7 L46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4"/>
  </g>
</svg>`;var fs=It('<div class="svg-container svelte-1kt13e4"><!></div>');function de(r,t){pt(t,!0);let e=f(t,"width",3,40),n=f(t,"height",3,40),i=f(t,"color",3,"#666666");const a={0:qa,1:ja,2:Xa,3:Ya,4:Za,5:Ja,6:$a,7:ts,8:es,9:ns,10:is,11:rs,12:as,13:ss,14:os,15:ls,16:cs,axis_left:ds,axis_right:us},s={"/":Sr,"*":Fr,",":Cr,".":Ar,":":Er,";":kr,"[":Mr,"]":Tr,"+":Rr,"-":Or,"~":Dr," ":Pr,'"':Nr,backspace:Ur,capslock:Hr,tab:Br,shift:Wr,arrowleft:Kr,arrowright:Vr,arrowup:Gr,arrowdown:zr,pagedown:qr,pageup:jr,end:Xr,home:Yr,control:Zr,enter:Jr,a:$r,b:ta,c:ea,d:na,e:ia,f:ra,g:aa,h:sa,i:oa,j:la,k:ca,l:da,m:ua,n:fa,o:ha,p:ga,q:va,r:La,s:pa,t:ma,u:wa,v:_a,w:ya,x:ba,y:Qa,z:xa,0:Ia,1:Sa,2:Fa,3:Ca,4:Aa,5:Ea,6:ka,7:Ma,8:Ta,9:Ra,f1:Oa,f2:Da,f3:Pa,f4:Na,f5:Ua,f6:Ha,f7:Ba,f8:Wa,f9:Ka,f10:Va,f11:Ga,f12:za},c={0:br,1:Qr,2:xr,3:Ir};let l=Lt(void 0);switch(t.type,["ps4","ps5"].includes(t.type),t.type){case"keyboard_mouse":let d=t.input.toLowerCase();Y(l,B(s[d]));break;case"ps4":Y(l,B(a[t.input]));break;case"generic":t.input in c?Y(l,B(c[t.input])):Y(l,B(a[t.input]))}var g=ct(),L=J(g);{var m=d=>{var h=fs(),p=_t(h);ar(p,()=>o(l).replace("<g>",`<g transform="scale(${Math.min(e()/64,n()/64)})">`).replace('fill="#FFFFFF"',`fill="${i()}"`)),yt(h),Ut(()=>{St(h,"height",`${n()??""}px`),St(h,"width",`${e()??""}px`)}),D(d,h)};At(L,d=>{o(l)&&d(m)})}D(r,g),mt()}Xe(["pointerdown","click","pointerup","pointerout"]);var hs=()=>{},gs=()=>{},vs=It("<!> <br>",1),Ls=It("<!> <br>",1),ps=It('<div class="hints_container svelte-1annkz1"><div class="hint svelte-1annkz1"><!></div> <div class="hint hint-up svelte-1annkz1"><!> <!></div> <div class="hint hint-down svelte-1annkz1"><!> <!></div> <div class="hint hint-left svelte-1annkz1"><!> <!></div> <div class="hint hint-right svelte-1annkz1"><!> <!></div></div>'),ms=It('<div id="joystick_area" role="button" class="svelte-1annkz1"><!> <div class="joystick_container svelte-1annkz1"><div class="joystick_back svelte-1annkz1"></div> <div class="joystick_front svelte-1annkz1"></div></div></div>');function ws(r,t){pt(t,!0);let e=f(t,"disabled",3,!1),n=f(t,"size",3,100),i=f(t,"backgroundWidth",3,200),a=f(t,"backgroundHeight",3,200),s=f(t,"color",3,"rgb(106, 191, 163)"),c=f(t,"defaultOpacity",3,.5),l=f(t,"activeOpacity",3,.8),g=f(t,"border",3,1),L=f(t,"borderColor",3,"black"),m=f(t,"position",31,()=>B([0,0])),d=f(t,"style",3,"background-color: rgb(215, 219, 221);"),h=f(t,"inputMapping",19,()=>({name:"Virtual Joystick",gamepad:-1,axes_x:0,axes_y:1,button_x_pos:[z.DPAD_RIGHT],button_x_neg:[z.DPAD_LEFT],button_y_pos:[z.DPAD_DOWN],button_y_neg:[z.DPAD_UP],deadzoneX:.05,deadzoneY:.05,key_x_pos:["d"],key_x_neg:["a"],key_y_pos:["s"],key_y_neg:["w"],invert_x:!1,invert_y:!1})),p=f(t,"context",19,()=>["default"]),_=f(t,"requiresFocus",3,!1);const y=n()/2;let v=!1,w=Lt(B(c()));function I(b){if(e()||!h().gamepad||!v||!b.target)return;S&&(S.gamepadActive=!1);const R=b.target.getBoundingClientRect(),X=b.x-R.x,Z=b.y-R.y;C(X,Z)}function C(b,R){let X=b-i()/2,Z=R-a()/2;E(X,Z)}function E(b,R){const X=gr(b,R),Z=vr(b,R);let ht=pr(X,y),ot=Lr(ht,Z),rt=ot[0]/y,at=ot[1]/y;if(Math.abs(rt)<h().deadzoneX&&Math.abs(at)<h().deadzoneY){m([0,0]),Y(w,c());return}rt=Math.abs(rt)<1e-6?0:rt,at=Math.abs(at)<1e-6?0:at,Y(w,l()),m([rt,at])}function Q(){v=!1,Y(w,c()),m([0,0])}function T(b,R){Y(w,B(b?l():c())),m(R)}let k,S;ae(()=>(S=new _r(h(),k,_()),S.radius=y,S.calcPos=E,S.updatePosition=T,pn(p(),S),()=>{S&&mn(p(),S)}));var V=ms();ve("pointerup",Ae,Q),ln(V,"tabindex",0),V.__keydown=[hs],V.__click=()=>{k.focus()},V.__pointerdown=b=>{e()||(b.stopImmediatePropagation(),v=!0,I(b))},V.__pointerup=()=>{S==null||S.activateGamepad()},V.__pointermove=I,V.__touchstart=[gs],V.__touchend=()=>{S==null||S.activateGamepad()},V.__pointerout=()=>{S==null||S.activateGamepad()};var $=_t(V);{var G=b=>{var R=ps(),X=_t(R),Z=_t(X);{var ht=q=>{de(q,{type:"generic",input:"axis_left"})},ot=q=>{var gt=ct(),zt=J(gt);{var Me=P=>{de(P,{type:"generic",input:"axis_right"})};At(zt,P=>{[2,3].includes(h().axes_x)&&[2,3].includes(h().axes_y)&&P(Me)},!0)}D(q,gt)};At(Z,q=>{[0,1].includes(h().axes_x)&&[0,1].includes(h().axes_y)?q(ht):q(ot,!1)})}yt(X);var rt=ut(X,2),at=_t(rt);{var Nt=q=>{de(q,{type:"keyboard_mouse",get input(){return h().key_y_neg[0]}})};At(at,q=>{h().key_y_neg.length>0&&q(Nt)})}var Ct=ut(at,2);{var Ht=q=>{de(q,{type:"generic",get input(){return h().button_y_neg[0]}})};At(Ct,q=>{h().button_y_neg.length>0&&q(Ht)})}yt(rt);var A=ut(rt,2),W=_t(A);{var te=q=>{de(q,{type:"keyboard_mouse",get input(){return h().key_y_pos[0]}})};At(W,q=>{h().key_y_pos.length>0&&q(te)})}var Zt=ut(W,2);{var j=q=>{de(q,{type:"generic",get input(){return h().button_y_pos[0]}})};At(Zt,q=>{h().button_y_pos.length>0&&q(j)})}yt(A);var M=ut(A,2),U=_t(M);{var tt=q=>{var gt=vs(),zt=J(gt);de(zt,{type:"keyboard_mouse",get input(){return h().key_x_neg[0]}}),jt(2),D(q,gt)};At(U,q=>{h().key_x_neg.length>0&&q(tt)})}var wt=ut(U,2);{var Ot=q=>{de(q,{type:"generic",get input(){return h().button_x_neg[0]}})};At(wt,q=>{h().button_x_neg.length>0&&q(Ot)})}yt(M);var ee=ut(M,2),se=_t(ee);{var oe=q=>{var gt=Ls(),zt=J(gt);de(zt,{type:"keyboard_mouse",get input(){return h().key_x_pos[0]}}),jt(2),D(q,gt)};At(se,q=>{h().key_x_pos.length>0&&q(oe)})}var Jt=ut(se,2);{var ne=q=>{de(q,{type:"generic",get input(){return h().button_x_pos[0]}})};At(Jt,q=>{h().button_x_pos.length>0&&q(ne)})}yt(ee),yt(R),Ut(()=>{St(R,"width",i()+"px"),St(R,"height",a()+"px")}),kn(2,R,()=>Mn),kn(1,R,()=>Mn),D(b,R)};At($,b=>{xt.showHints&&p().includes(xt.context)&&b(G)})}var x=ut($,2),N=_t(x);St(N,"transition","none");var u=ut(N,2);St(u,"margin-top",y/2+"px"),St(u,"margin-left",y/2+"px"),St(u,"transition","opacity 0.2s ease-in-out"),St(u,"width",y+"px"),St(u,"height",y+"px"),yt(x),yt(V),dt(V,b=>k=b,()=>k),Ut(()=>{ln(V,"style",d()),St(V,"width",i()+"px"),St(V,"height",a()+"px"),St(x,"left",(i()-n())/2+"px"),St(x,"top",(a()-n())/2+"px"),St(N,"width",n()+"px"),St(N,"height",n()+"px"),St(N,"background",s()),St(N,"opacity",o(w)),St(N,"border",g()>0?g()+"px solid "+L():0),St(u,"left",m()[0]*y+"px"),St(u,"top",m()[1]*y+"px"),St(u,"background",s()),St(u,"opacity",o(w)),St(u,"border",g()>0?g()+"px solid "+L():0)}),ve("pointerleave",V,()=>{S==null||S.activateGamepad()}),D(r,V),mt()}Xe(["keydown","click","pointerdown","pointerup","pointermove","touchstart","touchend","pointerout"]);Xe(["pointerdown"]);function Pt(r){return Object.entries(r).filter(([t,e])=>t!==""&&e).map(([t])=>t).join(" ")}function re(r,t,e,n={bubbles:!0}){if(typeof Event>"u")throw new Error("Event not defined.");if(!r)throw new Error("Tried to dispatch event without element.");const i=new CustomEvent(t,Object.assign(Object.assign({},n),{detail:e}));return r==null||r.dispatchEvent(i),i}function He(r,t){let e=Object.getOwnPropertyNames(r);const n={};for(let i=0;i<e.length;i++){const a=e[i],s=a.indexOf("$");s!==-1&&t.indexOf(a.substring(0,s+1))!==-1||t.indexOf(a)===-1&&(n[a]=r[a])}return n}function we(r,t){let e=Object.getOwnPropertyNames(r);const n={};for(let i=0;i<e.length;i++){const a=e[i];a.substring(0,t.length)===t&&(n[a.substring(t.length)]=r[a])}return n}class wn{constructor(){this.elementMap=new Map}on(t,e,n,i){this.elementMap.has(t)||this.elementMap.set(t,{});const a=this.elementMap.get(t);if(a==null)throw new Error("Event map couldn't be created.");e in a||(a[e]=new Map),a[e].set(n,Zi(t,e,n,i))}off(t,e,n){const i=this.elementMap.get(t);if(i==null||!(e in i))return;const a=i[e],s=a.get(n);s!=null&&(s(),a.delete(n),a.size===0&&(delete i[e],Object.keys(i).length===0&&this.elementMap.delete(t)))}clear(){this.elementMap.forEach((t,e)=>{for(let[n,i]of Object.entries(t))i.forEach((a,s)=>{a()})}),this.elementMap.clear()}}function nt(r,t){let e=[];if(t)for(let n=0;n<t.length;n++){const i=t[n],a=Array.isArray(i)?i[0]:i;Array.isArray(i)&&i.length>1?e.push(a(r,i[1])):e.push(a(r))}return{update(n){if((n&&n.length||0)!=e.length)throw new Error("You must not change the length of an actions array.");if(n)for(let i=0;i<n.length;i++){const a=e[i];if(a&&a.update){const s=n[i];Array.isArray(s)&&s.length>1?a.update(s[1]):a.update()}}},destroy(){for(let n=0;n<e.length;n++){const i=e[n];i&&i.destroy&&i.destroy()}}}}var Ke;function _s(r,t){t===void 0&&(t=!1);var e=r.CSS,n=Ke;if(typeof Ke=="boolean"&&!t)return Ke;var i=e&&typeof e.supports=="function";if(!i)return!1;var a=e.supports("--css-vars","yes"),s=e.supports("(--css-vars: yes)")&&e.supports("color","#00000000");return n=a||s,t||(Ke=n),n}function ys(r,t,e){if(!r)return{x:0,y:0};var n=t.x,i=t.y,a=n+e.left,s=i+e.top,c,l;if(r.type==="touchstart"){var g=r;c=g.changedTouches[0].pageX-a,l=g.changedTouches[0].pageY-s}else{var L=r;c=L.pageX-a,l=L.pageY-s}return{x:c,y:l}}var dn=function(r,t){return dn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},dn(r,t)};function Xt(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");dn(r,t);function e(){this.constructor=r}r.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var Rt=function(){return Rt=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},Rt.apply(this,arguments)};function Ve(r){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&r[t],n=0;if(e)return e.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&n>=r.length&&(r=void 0),{value:r&&r[n++],done:!r}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function un(r,t){var e=typeof Symbol=="function"&&r[Symbol.iterator];if(!e)return r;var n=e.call(r),i,a=[],s;try{for(;(t===void 0||t-- >0)&&!(i=n.next()).done;)a.push(i.value)}catch(c){s={error:c}}finally{try{i&&!i.done&&(e=n.return)&&e.call(n)}finally{if(s)throw s.error}}return a}function bs(r,t,e){if(e||arguments.length===2)for(var n=0,i=t.length,a;n<i;n++)(a||!(n in t))&&(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return r.concat(a||Array.prototype.slice.call(t))}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var _e=function(){function r(t){t===void 0&&(t={}),this.adapter=t}return Object.defineProperty(r,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),r.prototype.init=function(){},r.prototype.destroy=function(){},r}();/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Qs(r){return r===void 0&&(r=window),xs(r)?{passive:!0}:!1}function xs(r){r===void 0&&(r=window);var t=!1;try{var e={get passive(){return t=!0,!1}},n=function(){};r.document.addEventListener("test",n,e),r.document.removeEventListener("test",n,e)}catch{t=!1}return t}const Is=Object.freeze(Object.defineProperty({__proto__:null,applyPassive:Qs},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Ss(r,t){if(r.closest)return r.closest(t);for(var e=r;e;){if(ei(e,t))return e;e=e.parentElement}return null}function ei(r,t){var e=r.matches||r.webkitMatchesSelector||r.msMatchesSelector;return e.call(r,t)}function Fs(r){var t=r;if(t.offsetParent!==null)return t.scrollWidth;var e=t.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);var n=e.scrollWidth;return document.documentElement.removeChild(e),n}const Ye=Object.freeze(Object.defineProperty({__proto__:null,closest:Ss,estimateScrollWidth:Fs,matches:ei},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Cs={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},As={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},Tn={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Rn=["touchstart","pointerdown","mousedown","keydown"],On=["touchend","pointerup","mouseup","contextmenu"],Ge=[],Es=function(r){Xt(t,r);function t(e){var n=r.call(this,Rt(Rt({},t.defaultAdapter),e))||this;return n.activationAnimationHasEnded=!1,n.activationTimer=0,n.fgDeactivationRemovalTimer=0,n.fgScale="0",n.frame={width:0,height:0},n.initialSize=0,n.layoutFrame=0,n.maxRadius=0,n.unboundedCoords={left:0,top:0},n.activationState=n.defaultActivationState(),n.activationTimerCallback=function(){n.activationAnimationHasEnded=!0,n.runDeactivationUXLogicIfReady()},n.activateHandler=function(i){n.activateImpl(i)},n.deactivateHandler=function(){n.deactivateImpl()},n.focusHandler=function(){n.handleFocus()},n.blurHandler=function(){n.handleBlur()},n.resizeHandler=function(){n.layout()},n}return Object.defineProperty(t,"cssClasses",{get:function(){return Cs},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return As},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return Tn},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){var e=this,n=this.supportsPressRipple();if(this.registerRootHandlers(n),n){var i=t.cssClasses,a=i.ROOT,s=i.UNBOUNDED;requestAnimationFrame(function(){e.adapter.addClass(a),e.adapter.isUnbounded()&&(e.adapter.addClass(s),e.layoutInternal())})}},t.prototype.destroy=function(){var e=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(t.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(t.cssClasses.FG_DEACTIVATION));var n=t.cssClasses,i=n.ROOT,a=n.UNBOUNDED;requestAnimationFrame(function(){e.adapter.removeClass(i),e.adapter.removeClass(a),e.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},t.prototype.activate=function(e){this.activateImpl(e)},t.prototype.deactivate=function(){this.deactivateImpl()},t.prototype.layout=function(){var e=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){e.layoutInternal(),e.layoutFrame=0})},t.prototype.setUnbounded=function(e){var n=t.cssClasses.UNBOUNDED;e?this.adapter.addClass(n):this.adapter.removeClass(n)},t.prototype.handleFocus=function(){var e=this;requestAnimationFrame(function(){return e.adapter.addClass(t.cssClasses.BG_FOCUSED)})},t.prototype.handleBlur=function(){var e=this;requestAnimationFrame(function(){return e.adapter.removeClass(t.cssClasses.BG_FOCUSED)})},t.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},t.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},t.prototype.registerRootHandlers=function(e){var n,i;if(e){try{for(var a=Ve(Rn),s=a.next();!s.done;s=a.next()){var c=s.value;this.adapter.registerInteractionHandler(c,this.activateHandler)}}catch(l){n={error:l}}finally{try{s&&!s.done&&(i=a.return)&&i.call(a)}finally{if(n)throw n.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},t.prototype.registerDeactivationHandlers=function(e){var n,i;if(e.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var a=Ve(On),s=a.next();!s.done;s=a.next()){var c=s.value;this.adapter.registerDocumentInteractionHandler(c,this.deactivateHandler)}}catch(l){n={error:l}}finally{try{s&&!s.done&&(i=a.return)&&i.call(a)}finally{if(n)throw n.error}}},t.prototype.deregisterRootHandlers=function(){var e,n;try{for(var i=Ve(Rn),a=i.next();!a.done;a=i.next()){var s=a.value;this.adapter.deregisterInteractionHandler(s,this.activateHandler)}}catch(c){e={error:c}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},t.prototype.deregisterDeactivationHandlers=function(){var e,n;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var i=Ve(On),a=i.next();!a.done;a=i.next()){var s=a.value;this.adapter.deregisterDocumentInteractionHandler(s,this.deactivateHandler)}}catch(c){e={error:c}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}},t.prototype.removeCssVars=function(){var e=this,n=t.strings,i=Object.keys(n);i.forEach(function(a){a.indexOf("VAR_")===0&&e.adapter.updateCssVariable(n[a],null)})},t.prototype.activateImpl=function(e){var n=this;if(!this.adapter.isSurfaceDisabled()){var i=this.activationState;if(!i.isActivated){var a=this.previousActivationEvent,s=a&&e!==void 0&&a.type!==e.type;if(!s){i.isActivated=!0,i.isProgrammatic=e===void 0,i.activationEvent=e,i.wasActivatedByPointer=i.isProgrammatic?!1:e!==void 0&&(e.type==="mousedown"||e.type==="touchstart"||e.type==="pointerdown");var c=e!==void 0&&Ge.length>0&&Ge.some(function(l){return n.adapter.containsEventTarget(l)});if(c){this.resetActivationState();return}e!==void 0&&(Ge.push(e.target),this.registerDeactivationHandlers(e)),i.wasElementMadeActive=this.checkElementMadeActive(e),i.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){Ge=[],!i.wasElementMadeActive&&e!==void 0&&(e.key===" "||e.keyCode===32)&&(i.wasElementMadeActive=n.checkElementMadeActive(e),i.wasElementMadeActive&&n.animateActivation()),i.wasElementMadeActive||(n.activationState=n.defaultActivationState())})}}}},t.prototype.checkElementMadeActive=function(e){return e!==void 0&&e.type==="keydown"?this.adapter.isSurfaceActive():!0},t.prototype.animateActivation=function(){var e=this,n=t.strings,i=n.VAR_FG_TRANSLATE_START,a=n.VAR_FG_TRANSLATE_END,s=t.cssClasses,c=s.FG_DEACTIVATION,l=s.FG_ACTIVATION,g=t.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var L="",m="";if(!this.adapter.isUnbounded()){var d=this.getFgTranslationCoordinates(),h=d.startPoint,p=d.endPoint;L=h.x+"px, "+h.y+"px",m=p.x+"px, "+p.y+"px"}this.adapter.updateCssVariable(i,L),this.adapter.updateCssVariable(a,m),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(c),this.adapter.computeBoundingRect(),this.adapter.addClass(l),this.activationTimer=setTimeout(function(){e.activationTimerCallback()},g)},t.prototype.getFgTranslationCoordinates=function(){var e=this.activationState,n=e.activationEvent,i=e.wasActivatedByPointer,a;i?a=ys(n,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):a={x:this.frame.width/2,y:this.frame.height/2},a={x:a.x-this.initialSize/2,y:a.y-this.initialSize/2};var s={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:a,endPoint:s}},t.prototype.runDeactivationUXLogicIfReady=function(){var e=this,n=t.cssClasses.FG_DEACTIVATION,i=this.activationState,a=i.hasDeactivationUXRun,s=i.isActivated,c=a||!s;c&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(n),this.fgDeactivationRemovalTimer=setTimeout(function(){e.adapter.removeClass(n)},Tn.FG_DEACTIVATION_MS))},t.prototype.rmBoundedActivationClasses=function(){var e=t.cssClasses.FG_ACTIVATION;this.adapter.removeClass(e),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},t.prototype.resetActivationState=function(){var e=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return e.previousActivationEvent=void 0},t.numbers.TAP_DELAY_MS)},t.prototype.deactivateImpl=function(){var e=this,n=this.activationState;if(n.isActivated){var i=Rt({},n);n.isProgrammatic?(requestAnimationFrame(function(){e.animateDeactivation(i)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){e.activationState.hasDeactivationUXRun=!0,e.animateDeactivation(i),e.resetActivationState()}))}},t.prototype.animateDeactivation=function(e){var n=e.wasActivatedByPointer,i=e.wasElementMadeActive;(n||i)&&this.runDeactivationUXLogicIfReady()},t.prototype.layoutInternal=function(){var e=this;this.frame=this.adapter.computeBoundingRect();var n=Math.max(this.frame.height,this.frame.width),i=function(){var s=Math.sqrt(Math.pow(e.frame.width,2)+Math.pow(e.frame.height,2));return s+t.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?n:i();var a=Math.floor(n*t.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&a%2!==0?this.initialSize=a-1:this.initialSize=a,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},t.prototype.updateLayoutCssVars=function(){var e=t.strings,n=e.VAR_FG_SIZE,i=e.VAR_LEFT,a=e.VAR_TOP,s=e.VAR_FG_SCALE;this.adapter.updateCssVariable(n,this.initialSize+"px"),this.adapter.updateCssVariable(s,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(i,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(a,this.unboundedCoords.top+"px"))},t}(_e);/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var $e="mdc-dom-focus-sentinel",ks=function(){function r(t,e){e===void 0&&(e={}),this.root=t,this.options=e,this.elFocusedBeforeTrapFocus=null}return r.prototype.trapFocus=function(){var t=this.getFocusableElements(this.root);if(t.length===0)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root),this.options.skipInitialFocus||this.focusInitialElement(t,this.options.initialFocusEl)},r.prototype.releaseFocus=function(){[].slice.call(this.root.querySelectorAll("."+$e)).forEach(function(t){t.parentElement.removeChild(t)}),!this.options.skipRestoreFocus&&this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},r.prototype.wrapTabFocus=function(t){var e=this,n=this.createSentinel(),i=this.createSentinel();n.addEventListener("focus",function(){var a=e.getFocusableElements(t);a.length>0&&a[a.length-1].focus()}),i.addEventListener("focus",function(){var a=e.getFocusableElements(t);a.length>0&&a[0].focus()}),t.insertBefore(n,t.children[0]),t.appendChild(i)},r.prototype.focusInitialElement=function(t,e){var n=0;e&&(n=Math.max(t.indexOf(e),0)),t[n].focus()},r.prototype.getFocusableElements=function(t){var e=[].slice.call(t.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));return e.filter(function(n){var i=n.getAttribute("aria-disabled")==="true"||n.getAttribute("disabled")!=null||n.getAttribute("hidden")!=null||n.getAttribute("aria-hidden")==="true",a=n.tabIndex>=0&&n.getBoundingClientRect().width>0&&!n.classList.contains($e)&&!i,s=!1;if(a){var c=getComputedStyle(n);s=c.display==="none"||c.visibility==="hidden"}return a&&!s})},r.prototype.createSentinel=function(){var t=document.createElement("div");return t.setAttribute("tabindex","0"),t.setAttribute("aria-hidden","true"),t.classList.add($e),t},r}();const ni=Object.freeze(Object.defineProperty({__proto__:null,FocusTrap:ks},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var it={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},Vt=new Set;Vt.add(it.BACKSPACE);Vt.add(it.ENTER);Vt.add(it.SPACEBAR);Vt.add(it.PAGE_UP);Vt.add(it.PAGE_DOWN);Vt.add(it.END);Vt.add(it.HOME);Vt.add(it.ARROW_LEFT);Vt.add(it.ARROW_UP);Vt.add(it.ARROW_RIGHT);Vt.add(it.ARROW_DOWN);Vt.add(it.DELETE);Vt.add(it.ESCAPE);Vt.add(it.TAB);var Yt={BACKSPACE:8,ENTER:13,SPACEBAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ESCAPE:27,TAB:9},Gt=new Map;Gt.set(Yt.BACKSPACE,it.BACKSPACE);Gt.set(Yt.ENTER,it.ENTER);Gt.set(Yt.SPACEBAR,it.SPACEBAR);Gt.set(Yt.PAGE_UP,it.PAGE_UP);Gt.set(Yt.PAGE_DOWN,it.PAGE_DOWN);Gt.set(Yt.END,it.END);Gt.set(Yt.HOME,it.HOME);Gt.set(Yt.ARROW_LEFT,it.ARROW_LEFT);Gt.set(Yt.ARROW_UP,it.ARROW_UP);Gt.set(Yt.ARROW_RIGHT,it.ARROW_RIGHT);Gt.set(Yt.ARROW_DOWN,it.ARROW_DOWN);Gt.set(Yt.DELETE,it.DELETE);Gt.set(Yt.ESCAPE,it.ESCAPE);Gt.set(Yt.TAB,it.TAB);var ye=new Set;ye.add(it.PAGE_UP);ye.add(it.PAGE_DOWN);ye.add(it.END);ye.add(it.HOME);ye.add(it.ARROW_LEFT);ye.add(it.ARROW_UP);ye.add(it.ARROW_RIGHT);ye.add(it.ARROW_DOWN);function Bt(r){var t=r.key;if(Vt.has(t))return t;var e=Gt.get(r.keyCode);return e||it.UNKNOWN}const{applyPassive:Dn}=Is,{matches:Ms}=Ye;function Ze(r,{ripple:t=!0,surface:e=!1,unbounded:n=!1,disabled:i=!1,color:a,active:s,rippleElement:c,eventTarget:l,activeTarget:g,addClass:L=p=>r.classList.add(p),removeClass:m=p=>r.classList.remove(p),addStyle:d=(p,_)=>r.style.setProperty(p,_),initPromise:h=Promise.resolve()}={}){let p,_=new wn,y=Ft("SMUI:addLayoutListener"),v,w=s,I=l,C=g;function E(){e?(L("mdc-ripple-surface"),a==="primary"?(L("smui-ripple-surface--primary"),m("smui-ripple-surface--secondary")):a==="secondary"?(m("smui-ripple-surface--primary"),L("smui-ripple-surface--secondary")):(m("smui-ripple-surface--primary"),m("smui-ripple-surface--secondary"))):(m("mdc-ripple-surface"),m("smui-ripple-surface--primary"),m("smui-ripple-surface--secondary")),p&&w!==s&&(w=s,s?p.activate():s===!1&&p.deactivate()),t&&!p?(p=new Es({addClass:L,browserSupportsCssVars:()=>_s(window),computeBoundingRect:()=>(c||r).getBoundingClientRect(),containsEventTarget:T=>r.contains(T),deregisterDocumentInteractionHandler:(T,k)=>_.off(document.documentElement,T,k),deregisterInteractionHandler:(T,k)=>_.off(l||r,T,k),deregisterResizeHandler:T=>window.removeEventListener("resize",T),getWindowPageOffset:()=>{var T,k;return{x:(T=window.pageXOffset)!==null&&T!==void 0?T:window.scrollX,y:(k=window.pageYOffset)!==null&&k!==void 0?k:window.scrollY}},isSurfaceActive:()=>s??Ms(g||r,":active"),isSurfaceDisabled:()=>!!i,isUnbounded:()=>!!n,registerDocumentInteractionHandler:(T,k)=>{const S=Dn();_.on(document.documentElement,T,k,typeof S=="boolean"?{capture:S}:S)},registerInteractionHandler:(T,k)=>{const S=Dn();_.on(l||r,T,k,typeof S=="boolean"?{capture:S}:S)},registerResizeHandler:T=>_.on(window,"resize",T),removeClass:m,updateCssVariable:d}),h.then(()=>{p&&(p.init(),p.setUnbounded(n))})):p&&!t&&h.then(()=>{p&&(p.destroy(),p=void 0,_.clear())}),p&&(I!==l||C!==g)&&(I=l,C=g,p.destroy(),requestAnimationFrame(()=>{p&&(p.init(),p.setUnbounded(n))})),!t&&n&&L("mdc-ripple-upgraded--unbounded")}E(),y&&(v=y(Q));function Q(){p&&p.layout()}return{update(T){({ripple:t,surface:e,unbounded:n,disabled:i,color:a,active:s,rippleElement:c,eventTarget:l,activeTarget:g,addClass:L,removeClass:m,addStyle:d,initPromise:h}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:k=>r.classList.add(k),removeClass:k=>r.classList.remove(k),addStyle:(k,S)=>r.style.setProperty(k,S),initPromise:Promise.resolve()},T)),E()},destroy(){p&&(p.destroy(),p=void 0,_.clear(),m("mdc-ripple-surface"),m("smui-ripple-surface--primary"),m("smui-ripple-surface--secondary")),v&&v()}}}function Pn(r,t){pt(t,!0);let e=f(t,"use",19,()=>[]),n=f(t,"class",3,""),i=f(t,"component",3,ke),a=f(t,"tag",3,"span"),s=kt(t,["$$slots","$$events","$$legacy","use","class","component","tag","children"]),c;const l=Ft("SMUI:label:context"),g=Ft("SMUI:label:tabindex");function L(){return c.getElement()}var m=ct(),d=J(m);const h=bt(()=>Pt({[n()]:!0,"mdc-button__label":l==="button","mdc-fab__label":l==="fab","mdc-tab__text-label":l==="tab","mdc-image-list__label":l==="image-list","mdc-snackbar__label":l==="snackbar","mdc-banner__text":l==="banner","mdc-segmented-button__label":l==="segmented-button","mdc-data-table__pagination-rows-per-page-label":l==="data-table:pagination","mdc-data-table__header-cell-label":l==="data-table:sortable-header-cell"}));return Ee(d,i,(p,_)=>{dt(_(p,Wt({get tag(){return a()},get use(){return e()},get class(){return o(h)}},l==="snackbar"?{"aria-atomic":"false"}:{},{tabindex:g},()=>s,{children:(y,v)=>{var w=ct(),I=J(w);Qt(I,()=>t.children??ft),D(y,w)},$$slots:{default:!0}})),y=>c=y,()=>c)}),D(r,m),mt({getElement:L})}var Ts=hi("<svg><!></svg>");function ke(r,t){pt(t,!0);let e=f(t,"use",19,()=>[]),n=f(t,"tag",3,"div"),i=kt(t,["$$slots","$$events","$$legacy","use","tag","children"]);const a=bt(()=>["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"].indexOf(n())>-1);let s;function c(){return s}var l=ct(),g=J(l);{var L=d=>{var h=Ts();let p;var _=_t(h);Qt(_,()=>t.children??ft),yt(h),dt(h,y=>s=y,()=>s),$t(h,(y,v)=>nt==null?void 0:nt(y,v),e),Ut(()=>p=Kt(h,p,{...i},void 0,!0)),D(d,h)},m=d=>{var h=ct(),p=J(h);{var _=v=>{var w=ct(),I=J(w);Cn(I,n,!1,(C,E)=>{dt(C,T=>s=T,()=>s),$t(C,(T,k)=>nt==null?void 0:nt(T,k),e);let Q;Ut(()=>Q=Kt(C,Q,{...i},void 0,C.namespaceURI===on,C.nodeName.includes("-")))}),D(v,w)},y=v=>{var w=ct(),I=J(w);Cn(I,n,!1,(C,E)=>{dt(C,S=>s=S,()=>s),$t(C,(S,V)=>nt==null?void 0:nt(S,V),e);let Q;Ut(()=>Q=Kt(C,Q,{...i},void 0,C.namespaceURI===on,C.nodeName.includes("-")));var T=ct(),k=J(T);Qt(k,()=>t.children??ft),D(E,T)}),D(v,w)};At(p,v=>{o(a)?v(_):v(y,!1)},!0)}D(d,h)};At(g,d=>{n()==="svg"?d(L):d(m,!1)})}return D(r,l),mt({getElement:c})}var Rs=It('<div class="mdc-button__touch"></div>'),Os=It('<div class="mdc-button__ripple"></div> <!><!>',1);function Ds(r,t){pt(t,!0);let e=f(t,"use",19,()=>[]),n=f(t,"class",3,""),i=f(t,"style",3,""),a=f(t,"ripple",3,!0),s=f(t,"color",3,"primary"),c=f(t,"variant",3,"text"),l=f(t,"touch",3,!1),g=f(t,"action",3,"close"),L=f(t,"defaultAction",3,!1),m=f(t,"secondary",3,!1),d=f(t,"component",3,ke),h=f(t,"tag",19,()=>t.href==null?"button":"a"),p=kt(t,["$$slots","$$events","$$legacy","use","class","style","ripple","color","variant","touch","href","action","defaultAction","secondary","component","tag","children"]),_,y=B({}),v=B({}),w=Ft("SMUI:button:context");const I=bt(()=>w==="dialog:action"&&g()!=null?{"data-mdc-dialog-action":g()}:{action:g()}),C=bt(()=>w==="dialog:action"&&L()?{"data-mdc-dialog-button-default":""}:{}),E=bt(()=>w==="banner"?{}:{secondary:m()});let Q=t.disabled;Tt(()=>{if(Q!==t.disabled){if(_){const R=$();"blur"in R&&R.blur()}Q=p.disabled}}),lt("SMUI:label:context","button"),lt("SMUI:icon:context","button");function T(R){y[R]||(y[R]=!0)}function k(R){(!(R in y)||y[R])&&(y[R]=!1)}function S(R,X){v[R]!=X&&(X===""||X==null?delete v[R]:v[R]=X)}function V(){w==="banner"&&re($(),m()?"SMUIBannerButtonSecondaryActionClick":"SMUIBannerButtonPrimaryActionClick")}function $(){return _.getElement()}var G=ct(),x=J(G);const N=bt(()=>[[Ze,{ripple:a(),unbounded:!1,color:s(),disabled:!!t.disabled,addClass:T,removeClass:k,addStyle:S}],...e()]),u=bt(()=>Pt({[n()]:!0,"mdc-button":!0,"mdc-button--raised":c()==="raised","mdc-button--unelevated":c()==="unelevated","mdc-button--outlined":c()==="outlined","smui-button--color-secondary":s()==="secondary","mdc-button--touch":l(),"mdc-card__action":w==="card:action","mdc-card__action--button":w==="card:action","mdc-dialog__button":w==="dialog:action","mdc-top-app-bar__navigation-icon":w==="top-app-bar:navigation","mdc-top-app-bar__action-item":w==="top-app-bar:action","mdc-snackbar__action":w==="snackbar:actions","mdc-banner__secondary-action":w==="banner"&&m(),"mdc-banner__primary-action":w==="banner"&&!m(),"mdc-tooltip__action":w==="tooltip:rich-actions",...y})),b=bt(()=>Object.entries(v).map(([R,X])=>`${R}: ${X};`).concat([i()]).join(" "));return Ee(x,d,(R,X)=>{dt(X(R,Wt({get tag(){return h()},get use(){return o(N)},get class(){return o(u)},get style(){return o(b)}},()=>o(I),()=>o(C),()=>o(E),{get href(){return t.href}},()=>p,{onclick:Z=>{var ht;V(),(ht=t.onclick)==null||ht.call(t,Z)},children:(Z,ht)=>{var ot=Os(),rt=ut(J(ot),2);Qt(rt,()=>t.children??ft);var at=ut(rt);{var Nt=Ct=>{var Ht=Rs();D(Ct,Ht)};At(at,Ct=>{l()&&Ct(Nt)})}D(Z,ot)},$$slots:{default:!0}})),Z=>_=Z,()=>_)}),D(r,G),mt({getElement:$})}function tn(r,t){pt(t,!0);let e=f(t,"children",3,void 0),n=f(t,"disabled",3,!1),i=f(t,"onpressed",3,void 0),a=f(t,"onhold",3,void 0),s=f(t,"onrelease",3,void 0);f(t,"onpointerout",3,void 0);let c=f(t,"color",3,"primary"),l=f(t,"cssclass",3,"vbutton"),g=f(t,"variant",3,"text"),L=f(t,"style",3,""),m=f(t,"inputMapping",19,()=>({name:"",gamepad:-1,buttons:[z.DOWN],keys:["e"," "]})),d=f(t,"context",19,()=>["default"]),h=f(t,"requiresFocus",3,!1),p=Lt(!1),_,y;function v(){Y(p,!0)}class w extends wr{onpressed(){const E=super.onpressed();return Y(p,!0),_&&(_.getElement().focus(),_.getElement().click()),E}onrelease(){Y(p,!1),super.onrelease()}}ae(()=>(y=new w(m(),_.getElement(),h(),i(),a(),s()),pn(d(),y),()=>{y&&mn(d(),y)}));const I=bt(()=>[[Ze,{active:o(p),unbounded:!1,color:c()}]]);dt(Ds(r,{get variant(){return g()},get style(){return L()},get disabled(){return n()},get class(){return l()},ripple:!1,get onclick(){return i()},onkeydowncapture:v,get use(){return o(I)},children:(C,E)=>{var Q=ct(),T=J(Q);Qt(T,()=>e()??ft),D(C,Q)},$$slots:{default:!0}}),C=>_=C,()=>_),mt()}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Le,fe,st={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"};Le={},Le[""+st.LIST_ITEM_ACTIVATED_CLASS]="mdc-list-item--activated",Le[""+st.LIST_ITEM_CLASS]="mdc-list-item",Le[""+st.LIST_ITEM_DISABLED_CLASS]="mdc-list-item--disabled",Le[""+st.LIST_ITEM_SELECTED_CLASS]="mdc-list-item--selected",Le[""+st.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-list-item__primary-text",Le[""+st.ROOT]="mdc-list";var Ce=(fe={},fe[""+st.LIST_ITEM_ACTIVATED_CLASS]="mdc-deprecated-list-item--activated",fe[""+st.LIST_ITEM_CLASS]="mdc-deprecated-list-item",fe[""+st.LIST_ITEM_DISABLED_CLASS]="mdc-deprecated-list-item--disabled",fe[""+st.LIST_ITEM_SELECTED_CLASS]="mdc-deprecated-list-item--selected",fe[""+st.LIST_ITEM_TEXT_CLASS]="mdc-deprecated-list-item__text",fe[""+st.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-deprecated-list-item__primary-text",fe[""+st.ROOT]="mdc-deprecated-list",fe),pe={ACTION_EVENT:"MDCList:action",SELECTION_CHANGE_EVENT:"MDCList:selectionChange",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:`
    .`+st.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+st.LIST_ITEM_CLASS+` a,
    .`+Ce[st.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+Ce[st.LIST_ITEM_CLASS]+` a
  `,DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:`
    .`+st.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+st.LIST_ITEM_CLASS+` a,
    .`+st.LIST_ITEM_CLASS+` input[type="radio"]:not(:disabled),
    .`+st.LIST_ITEM_CLASS+` input[type="checkbox"]:not(:disabled),
    .`+Ce[st.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+Ce[st.LIST_ITEM_CLASS]+` a,
    .`+Ce[st.LIST_ITEM_CLASS]+` input[type="radio"]:not(:disabled),
    .`+Ce[st.LIST_ITEM_CLASS]+` input[type="checkbox"]:not(:disabled)
  `,RADIO_SELECTOR:'input[type="radio"]',SELECTED_ITEM_SELECTOR:'[aria-selected="true"], [aria-current="true"]'},Et={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300};/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ps=["input","button","textarea","select"],ie=function(r){var t=r.target;if(t){var e=(""+t.tagName).toLowerCase();Ps.indexOf(e)===-1&&r.preventDefault()}};/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Ns(){var r={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""};return r}function Us(r,t){for(var e=new Map,n=0;n<r;n++){var i=t(n).trim();if(i){var a=i[0].toLowerCase();e.has(a)||e.set(a,[]),e.get(a).push({text:i.toLowerCase(),index:n})}}return e.forEach(function(s){s.sort(function(c,l){return c.index-l.index})}),e}function fn(r,t){var e=r.nextChar,n=r.focusItemAtIndex,i=r.sortedIndexByFirstChar,a=r.focusedItemIndex,s=r.skipFocus,c=r.isItemAtIndexDisabled;clearTimeout(t.bufferClearTimeout),t.bufferClearTimeout=setTimeout(function(){ri(t)},Et.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),t.typeaheadBuffer=t.typeaheadBuffer+e;var l;return t.typeaheadBuffer.length===1?l=Hs(i,a,c,t):l=Bs(i,c,t),l!==-1&&!s&&n(l),l}function Hs(r,t,e,n){var i=n.typeaheadBuffer[0],a=r.get(i);if(!a)return-1;if(i===n.currentFirstChar&&a[n.sortedIndexCursor].index===t){n.sortedIndexCursor=(n.sortedIndexCursor+1)%a.length;var s=a[n.sortedIndexCursor].index;if(!e(s))return s}n.currentFirstChar=i;var c=-1,l;for(l=0;l<a.length;l++)if(!e(a[l].index)){c=l;break}for(;l<a.length;l++)if(a[l].index>t&&!e(a[l].index)){c=l;break}return c!==-1?(n.sortedIndexCursor=c,a[n.sortedIndexCursor].index):-1}function Bs(r,t,e){var n=e.typeaheadBuffer[0],i=r.get(n);if(!i)return-1;var a=i[e.sortedIndexCursor];if(a.text.lastIndexOf(e.typeaheadBuffer,0)===0&&!t(a.index))return a.index;for(var s=(e.sortedIndexCursor+1)%i.length,c=-1;s!==e.sortedIndexCursor;){var l=i[s],g=l.text.lastIndexOf(e.typeaheadBuffer,0)===0,L=!t(l.index);if(g&&L){c=s;break}s=(s+1)%i.length}return c!==-1?(e.sortedIndexCursor=c,i[e.sortedIndexCursor].index):-1}function ii(r){return r.typeaheadBuffer.length>0}function ri(r){r.typeaheadBuffer=""}function Nn(r,t){var e=r.event,n=r.isTargetListItem,i=r.focusedItemIndex,a=r.focusItemAtIndex,s=r.sortedIndexByFirstChar,c=r.isItemAtIndexDisabled,l=Bt(e)==="ArrowLeft",g=Bt(e)==="ArrowUp",L=Bt(e)==="ArrowRight",m=Bt(e)==="ArrowDown",d=Bt(e)==="Home",h=Bt(e)==="End",p=Bt(e)==="Enter",_=Bt(e)==="Spacebar";if(e.altKey||e.ctrlKey||e.metaKey||l||g||L||m||d||h||p)return-1;var y=!_&&e.key.length===1;if(y){ie(e);var v={focusItemAtIndex:a,focusedItemIndex:i,nextChar:e.key.toLowerCase(),sortedIndexByFirstChar:s,skipFocus:!1,isItemAtIndexDisabled:c};return fn(v,t)}if(!_)return-1;n&&ie(e);var w=n&&ii(t);if(w){var v={focusItemAtIndex:a,focusedItemIndex:i,nextChar:" ",sortedIndexByFirstChar:s,skipFocus:!1,isItemAtIndexDisabled:c};return fn(v,t)}return-1}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Ws(r){return r instanceof Array}var Ks=["Alt","Control","Meta","Shift"];function Un(r){var t=new Set(r?Ks.filter(function(e){return r.getModifierState(e)}):[]);return function(e){return e.every(function(n){return t.has(n)})&&e.length===t.size}}var Vs=function(r){Xt(t,r);function t(e){var n=r.call(this,Rt(Rt({},t.defaultAdapter),e))||this;return n.wrapFocus=!1,n.isVertical=!0,n.isSingleSelectionList=!1,n.areDisabledItemsFocusable=!0,n.selectedIndex=Et.UNSET_INDEX,n.focusedItemIndex=Et.UNSET_INDEX,n.useActivatedClass=!1,n.useSelectedAttr=!1,n.ariaCurrentAttrValue=null,n.isCheckboxList=!1,n.isRadioList=!1,n.lastSelectedIndex=null,n.hasTypeahead=!1,n.typeaheadState=Ns(),n.sortedIndexByFirstChar=new Map,n}return Object.defineProperty(t,"strings",{get:function(){return pe},enumerable:!1,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return st},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return Et},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){},notifySelectionChange:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){},getPrimaryTextAtIndex:function(){return""}}},enumerable:!1,configurable:!0}),t.prototype.layout=function(){this.adapter.getListItemCount()!==0&&(this.adapter.hasCheckboxAtIndex(0)?this.isCheckboxList=!0:this.adapter.hasRadioAtIndex(0)?this.isRadioList=!0:this.maybeInitializeSingleSelection(),this.hasTypeahead&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex()))},t.prototype.getFocusedItemIndex=function(){return this.focusedItemIndex},t.prototype.setWrapFocus=function(e){this.wrapFocus=e},t.prototype.setVerticalOrientation=function(e){this.isVertical=e},t.prototype.setSingleSelection=function(e){this.isSingleSelectionList=e,e&&(this.maybeInitializeSingleSelection(),this.selectedIndex=this.getSelectedIndexFromDOM())},t.prototype.setDisabledItemsFocusable=function(e){this.areDisabledItemsFocusable=e},t.prototype.maybeInitializeSingleSelection=function(){var e=this.getSelectedIndexFromDOM();if(e!==Et.UNSET_INDEX){var n=this.adapter.listItemAtIndexHasClass(e,st.LIST_ITEM_ACTIVATED_CLASS);n&&this.setUseActivatedClass(!0),this.isSingleSelectionList=!0,this.selectedIndex=e}},t.prototype.getSelectedIndexFromDOM=function(){for(var e=Et.UNSET_INDEX,n=this.adapter.getListItemCount(),i=0;i<n;i++){var a=this.adapter.listItemAtIndexHasClass(i,st.LIST_ITEM_SELECTED_CLASS),s=this.adapter.listItemAtIndexHasClass(i,st.LIST_ITEM_ACTIVATED_CLASS);if(a||s){e=i;break}}return e},t.prototype.setHasTypeahead=function(e){this.hasTypeahead=e,e&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex())},t.prototype.isTypeaheadInProgress=function(){return this.hasTypeahead&&ii(this.typeaheadState)},t.prototype.setUseActivatedClass=function(e){this.useActivatedClass=e},t.prototype.setUseSelectedAttribute=function(e){this.useSelectedAttr=e},t.prototype.getSelectedIndex=function(){return this.selectedIndex},t.prototype.setSelectedIndex=function(e,n){n===void 0&&(n={}),this.isIndexValid(e)&&(this.isCheckboxList?this.setCheckboxAtIndex(e,n):this.isRadioList?this.setRadioAtIndex(e,n):this.setSingleSelectionAtIndex(e,n))},t.prototype.handleFocusIn=function(e){e>=0&&(this.focusedItemIndex=e,this.adapter.setAttributeForElementIndex(e,"tabindex","0"),this.adapter.setTabIndexForListItemChildren(e,"0"))},t.prototype.handleFocusOut=function(e){var n=this;e>=0&&(this.adapter.setAttributeForElementIndex(e,"tabindex","-1"),this.adapter.setTabIndexForListItemChildren(e,"-1")),setTimeout(function(){n.adapter.isFocusInsideList()||n.setTabindexToFirstSelectedOrFocusedItem()},0)},t.prototype.isIndexDisabled=function(e){return this.adapter.listItemAtIndexHasClass(e,st.LIST_ITEM_DISABLED_CLASS)},t.prototype.handleKeydown=function(e,n,i){var a=this,s,c=Bt(e)==="ArrowLeft",l=Bt(e)==="ArrowUp",g=Bt(e)==="ArrowRight",L=Bt(e)==="ArrowDown",m=Bt(e)==="Home",d=Bt(e)==="End",h=Bt(e)==="Enter",p=Bt(e)==="Spacebar",_=this.isVertical&&L||!this.isVertical&&g,y=this.isVertical&&l||!this.isVertical&&c,v=e.key==="A"||e.key==="a",w=Un(e);if(this.adapter.isRootFocused()){if((y||d)&&w([]))e.preventDefault(),this.focusLastElement();else if((_||m)&&w([]))e.preventDefault(),this.focusFirstElement();else if(y&&w(["Shift"])&&this.isCheckboxList){e.preventDefault();var I=this.focusLastElement();I!==-1&&this.setSelectedIndexOnAction(I,!1)}else if(_&&w(["Shift"])&&this.isCheckboxList){e.preventDefault();var I=this.focusFirstElement();I!==-1&&this.setSelectedIndexOnAction(I,!1)}if(this.hasTypeahead){var C={event:e,focusItemAtIndex:function(T){a.focusItemAtIndex(T)},focusedItemIndex:-1,isTargetListItem:n,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(T){return a.isIndexDisabled(T)}};Nn(C,this.typeaheadState)}return}var E=this.adapter.getFocusedElementIndex();if(!(E===-1&&(E=i,E<0))){if(_&&w([]))ie(e),this.focusNextElement(E);else if(y&&w([]))ie(e),this.focusPrevElement(E);else if(_&&w(["Shift"])&&this.isCheckboxList){ie(e);var I=this.focusNextElement(E);I!==-1&&this.setSelectedIndexOnAction(I,!1)}else if(y&&w(["Shift"])&&this.isCheckboxList){ie(e);var I=this.focusPrevElement(E);I!==-1&&this.setSelectedIndexOnAction(I,!1)}else if(m&&w([]))ie(e),this.focusFirstElement();else if(d&&w([]))ie(e),this.focusLastElement();else if(m&&w(["Control","Shift"])&&this.isCheckboxList){if(ie(e),this.isIndexDisabled(E))return;this.focusFirstElement(),this.toggleCheckboxRange(0,E,E)}else if(d&&w(["Control","Shift"])&&this.isCheckboxList){if(ie(e),this.isIndexDisabled(E))return;this.focusLastElement(),this.toggleCheckboxRange(E,this.adapter.getListItemCount()-1,E)}else if(v&&w(["Control"])&&this.isCheckboxList)e.preventDefault(),this.checkboxListToggleAll(this.selectedIndex===Et.UNSET_INDEX?[]:this.selectedIndex,!0);else if((h||p)&&w([])){if(n){var Q=e.target;if(Q&&Q.tagName==="A"&&h||(ie(e),this.isIndexDisabled(E)))return;this.isTypeaheadInProgress()||(this.isSelectableList()&&this.setSelectedIndexOnAction(E,!1),this.adapter.notifyAction(E))}}else if((h||p)&&w(["Shift"])&&this.isCheckboxList){var Q=e.target;if(Q&&Q.tagName==="A"&&h||(ie(e),this.isIndexDisabled(E)))return;this.isTypeaheadInProgress()||(this.toggleCheckboxRange((s=this.lastSelectedIndex)!==null&&s!==void 0?s:E,E,E),this.adapter.notifyAction(E))}if(this.hasTypeahead){var C={event:e,focusItemAtIndex:function(k){a.focusItemAtIndex(k)},focusedItemIndex:this.focusedItemIndex,isTargetListItem:n,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(k){return a.isIndexDisabled(k)}};Nn(C,this.typeaheadState)}}},t.prototype.handleClick=function(e,n,i){var a,s=Un(i);e!==Et.UNSET_INDEX&&(this.isIndexDisabled(e)||(s([])?(this.isSelectableList()&&this.setSelectedIndexOnAction(e,n),this.adapter.notifyAction(e)):this.isCheckboxList&&s(["Shift"])&&(this.toggleCheckboxRange((a=this.lastSelectedIndex)!==null&&a!==void 0?a:e,e,e),this.adapter.notifyAction(e))))},t.prototype.focusNextElement=function(e){var n=this.adapter.getListItemCount(),i=e,a=null;do{if(i++,i>=n)if(this.wrapFocus)i=0;else return e;if(i===a)return-1;a=a??i}while(!this.areDisabledItemsFocusable&&this.isIndexDisabled(i));return this.focusItemAtIndex(i),i},t.prototype.focusPrevElement=function(e){var n=this.adapter.getListItemCount(),i=e,a=null;do{if(i--,i<0)if(this.wrapFocus)i=n-1;else return e;if(i===a)return-1;a=a??i}while(!this.areDisabledItemsFocusable&&this.isIndexDisabled(i));return this.focusItemAtIndex(i),i},t.prototype.focusFirstElement=function(){return this.focusNextElement(-1)},t.prototype.focusLastElement=function(){return this.focusPrevElement(this.adapter.getListItemCount())},t.prototype.focusInitialElement=function(){var e=this.getFirstSelectedOrFocusedItemIndex();return this.focusItemAtIndex(e),e},t.prototype.setEnabled=function(e,n){this.isIndexValid(e,!1)&&(n?(this.adapter.removeClassForElementIndex(e,st.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(e,pe.ARIA_DISABLED,"false")):(this.adapter.addClassForElementIndex(e,st.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(e,pe.ARIA_DISABLED,"true")))},t.prototype.setSingleSelectionAtIndex=function(e,n){if(n===void 0&&(n={}),!(this.selectedIndex===e&&!n.forceUpdate)){var i=st.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass&&(i=st.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex!==Et.UNSET_INDEX&&this.adapter.removeClassForElementIndex(this.selectedIndex,i),this.setAriaForSingleSelectionAtIndex(e),this.setTabindexAtIndex(e),e!==Et.UNSET_INDEX&&this.adapter.addClassForElementIndex(e,i),this.selectedIndex=e,n.isUserInteraction&&!n.forceUpdate&&this.adapter.notifySelectionChange([e])}},t.prototype.setAriaForSingleSelectionAtIndex=function(e){this.selectedIndex===Et.UNSET_INDEX&&(this.ariaCurrentAttrValue=this.adapter.getAttributeForElementIndex(e,pe.ARIA_CURRENT));var n=this.ariaCurrentAttrValue!==null,i=n?pe.ARIA_CURRENT:pe.ARIA_SELECTED;if(this.selectedIndex!==Et.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,i,"false"),e!==Et.UNSET_INDEX){var a=n?this.ariaCurrentAttrValue:"true";this.adapter.setAttributeForElementIndex(e,i,a)}},t.prototype.getSelectionAttribute=function(){return this.useSelectedAttr?pe.ARIA_SELECTED:pe.ARIA_CHECKED},t.prototype.setRadioAtIndex=function(e,n){n===void 0&&(n={});var i=this.getSelectionAttribute();this.adapter.setCheckedCheckboxOrRadioAtIndex(e,!0),!(this.selectedIndex===e&&!n.forceUpdate)&&(this.selectedIndex!==Et.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,i,"false"),this.adapter.setAttributeForElementIndex(e,i,"true"),this.selectedIndex=e,n.isUserInteraction&&!n.forceUpdate&&this.adapter.notifySelectionChange([e]))},t.prototype.setCheckboxAtIndex=function(e,n){n===void 0&&(n={});for(var i=this.selectedIndex,a=n.isUserInteraction?new Set(i===Et.UNSET_INDEX?[]:i):null,s=this.getSelectionAttribute(),c=[],l=0;l<this.adapter.getListItemCount();l++){var g=a==null?void 0:a.has(l),L=e.indexOf(l)>=0;L!==g&&c.push(l),this.adapter.setCheckedCheckboxOrRadioAtIndex(l,L),this.adapter.setAttributeForElementIndex(l,s,L?"true":"false")}this.selectedIndex=e,n.isUserInteraction&&c.length&&this.adapter.notifySelectionChange(c)},t.prototype.toggleCheckboxRange=function(e,n,i){this.lastSelectedIndex=i;for(var a=new Set(this.selectedIndex===Et.UNSET_INDEX?[]:this.selectedIndex),s=!(a!=null&&a.has(i)),c=un([e,n].sort(),2),l=c[0],g=c[1],L=this.getSelectionAttribute(),m=[],d=l;d<=g;d++)if(!this.isIndexDisabled(d)){var h=a.has(d);s!==h&&(m.push(d),this.adapter.setCheckedCheckboxOrRadioAtIndex(d,s),this.adapter.setAttributeForElementIndex(d,L,""+s),s?a.add(d):a.delete(d))}m.length&&(this.selectedIndex=bs([],un(a)),this.adapter.notifySelectionChange(m))},t.prototype.setTabindexAtIndex=function(e){this.focusedItemIndex===Et.UNSET_INDEX&&e!==0?this.adapter.setAttributeForElementIndex(0,"tabindex","-1"):this.focusedItemIndex>=0&&this.focusedItemIndex!==e&&this.adapter.setAttributeForElementIndex(this.focusedItemIndex,"tabindex","-1"),!(this.selectedIndex instanceof Array)&&this.selectedIndex!==e&&this.adapter.setAttributeForElementIndex(this.selectedIndex,"tabindex","-1"),e!==Et.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(e,"tabindex","0")},t.prototype.isSelectableList=function(){return this.isSingleSelectionList||this.isCheckboxList||this.isRadioList},t.prototype.setTabindexToFirstSelectedOrFocusedItem=function(){var e=this.getFirstSelectedOrFocusedItemIndex();this.setTabindexAtIndex(e)},t.prototype.getFirstSelectedOrFocusedItemIndex=function(){return this.isSelectableList()?typeof this.selectedIndex=="number"&&this.selectedIndex!==Et.UNSET_INDEX?this.selectedIndex:Ws(this.selectedIndex)&&this.selectedIndex.length>0?this.selectedIndex.reduce(function(e,n){return Math.min(e,n)}):0:Math.max(this.focusedItemIndex,0)},t.prototype.isIndexValid=function(e,n){var i=this;if(n===void 0&&(n=!0),e instanceof Array){if(!this.isCheckboxList&&n)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return e.length===0?!0:e.some(function(a){return i.isIndexInRange(a)})}else if(typeof e=="number"){if(this.isCheckboxList&&n)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+e);return this.isIndexInRange(e)||this.isSingleSelectionList&&e===Et.UNSET_INDEX}else return!1},t.prototype.isIndexInRange=function(e){var n=this.adapter.getListItemCount();return e>=0&&e<n},t.prototype.setSelectedIndexOnAction=function(e,n){this.lastSelectedIndex=e,this.isCheckboxList?(this.toggleCheckboxAtIndex(e,n),this.adapter.notifySelectionChange([e])):this.setSelectedIndex(e,{isUserInteraction:!0})},t.prototype.toggleCheckboxAtIndex=function(e,n){var i=this.getSelectionAttribute(),a=this.adapter.isCheckboxCheckedAtIndex(e),s;n?s=a:(s=!a,this.adapter.setCheckedCheckboxOrRadioAtIndex(e,s)),this.adapter.setAttributeForElementIndex(e,i,s?"true":"false");var c=this.selectedIndex===Et.UNSET_INDEX?[]:this.selectedIndex.slice();s?c.push(e):c=c.filter(function(l){return l!==e}),this.selectedIndex=c},t.prototype.focusItemAtIndex=function(e){this.adapter.focusItemAtIndex(e),this.focusedItemIndex=e},t.prototype.checkboxListToggleAll=function(e,n){var i=this.adapter.getListItemCount();if(e.length===i)this.setCheckboxAtIndex([],{isUserInteraction:n});else{for(var a=[],s=0;s<i;s++)(!this.isIndexDisabled(s)||e.indexOf(s)>-1)&&a.push(s);this.setCheckboxAtIndex(a,{isUserInteraction:n})}},t.prototype.typeaheadMatchItem=function(e,n,i){var a=this;i===void 0&&(i=!1);var s={focusItemAtIndex:function(c){a.focusItemAtIndex(c)},focusedItemIndex:n||this.focusedItemIndex,nextChar:e,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:i,isItemAtIndexDisabled:function(c){return a.isIndexDisabled(c)}};return fn(s,this.typeaheadState)},t.prototype.typeaheadInitSortedIndex=function(){return Us(this.adapter.getListItemCount(),this.adapter.getPrimaryTextAtIndex)},t.prototype.clearTypeaheadBuffer=function(){ri(this.typeaheadState)},t}(_e);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var qt={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},Gs={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ai=function(r){Xt(t,r);function t(e){var n=r.call(this,Rt(Rt({},t.defaultAdapter),e))||this;return n.animationFrame=0,n.animationTimer=0,n}return Object.defineProperty(t,"strings",{get:function(){return Gs},enumerable:!1,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return qt},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),t.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},t.prototype.open=function(){var e=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(qt.OPEN),this.adapter.addClass(qt.ANIMATE),this.runNextAnimationFrame(function(){e.adapter.addClass(qt.OPENING)}),this.adapter.saveFocus())},t.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(qt.CLOSING)},t.prototype.isOpen=function(){return this.adapter.hasClass(qt.OPEN)},t.prototype.isOpening=function(){return this.adapter.hasClass(qt.OPENING)||this.adapter.hasClass(qt.ANIMATE)},t.prototype.isClosing=function(){return this.adapter.hasClass(qt.CLOSING)},t.prototype.handleKeydown=function(e){var n=e.keyCode,i=e.key,a=i==="Escape"||n===27;a&&this.close()},t.prototype.handleTransitionEnd=function(e){var n=qt.OPENING,i=qt.CLOSING,a=qt.OPEN,s=qt.ANIMATE,c=qt.ROOT,l=this.isElement(e.target)&&this.adapter.elementHasClass(e.target,c);l&&(this.isClosing()?(this.adapter.removeClass(a),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(s),this.adapter.removeClass(n),this.adapter.removeClass(i))},t.prototype.opened=function(){},t.prototype.closed=function(){},t.prototype.runNextAnimationFrame=function(e){var n=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){n.animationFrame=0,clearTimeout(n.animationTimer),n.animationTimer=setTimeout(e,0)})},t.prototype.isElement=function(e){return!!e.classList},t}(_e);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var zs=function(r){Xt(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.handleScrimClick=function(){this.close()},t.prototype.opened=function(){this.adapter.trapFocus()},t.prototype.closed=function(){this.adapter.releaseFocus()},t}(ai),qs=It("<aside><!></aside>");function js(r,t){pt(t,!0);const{FocusTrap:e}=ni;let n=f(t,"use",19,()=>[]),i=f(t,"class",3,""),a=f(t,"open",15,!1),s=f(t,"fixed",3,!0),c=kt(t,["$$slots","$$events","$$legacy","use","class","variant","open","fixed","children"]),l,g=Lt(void 0),L=new wn,m=Lt(B({})),d=Lt(null),h,p=Lt(!1);lt("SMUI:list:nav",!0),lt("SMUI:list:item:nav",!0),lt("SMUI:list:wrapFocus",!0),Tt(()=>{o(g)&&o(g).isOpen()!==a()&&(a()?o(g).open():o(g).close())});let _=t.variant;Tt(()=>{_!==t.variant&&(_=t.variant,o(g)&&o(g).destroy(),Y(m,B({})),Y(g,B(y())),o(g)&&o(g).init())}),ae(()=>{h=new e(l,{skipInitialFocus:!0}),Y(g,B(y())),o(g)&&o(g).init()}),Ue(()=>{o(g)&&o(g).destroy(),o(p)&&L.off(o(p),"SMUIDrawerScrimClick",C),L.clear()});function y(){var N;o(p)&&L.off(o(p),"SMUIDrawerScrimClick",C),t.variant==="modal"&&(Y(p,B(((N=T().parentNode)==null?void 0:N.querySelector(".mdc-drawer-scrim"))??!1)),o(p)&&L.on(o(p),"SMUIDrawerScrimClick",C));const x=t.variant==="dismissible"?ai:t.variant==="modal"?zs:void 0;return x?new x({addClass:w,removeClass:I,hasClass:v,elementHasClass:(u,b)=>u.classList.contains(b),saveFocus:()=>Y(d,B(document.activeElement)),restoreFocus:()=>{o(d)&&"focus"in o(d)&&T().contains(document.activeElement)&&o(d).focus()},focusActiveNavigationItem:()=>{const u=T().querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");u&&u.focus()},notifyClose:()=>{a(!1),re(T(),"SMUIDrawerClosed")},notifyOpen:()=>{a(!0),re(T(),"SMUIDrawerOpened")},trapFocus:()=>h.trapFocus(),releaseFocus:()=>h.releaseFocus()}):void 0}function v(x){return x in o(m)?o(m)[x]:T().classList.contains(x)}function w(x){o(m)[x]||(o(m)[x]=!0)}function I(x){(!(x in o(m))||o(m)[x])&&(o(m)[x]=!1)}function C(){o(g)&&"handleScrimClick"in o(g)&&o(g).handleScrimClick()}function E(x){a(x)}function Q(){return a()}function T(){return l}var k=qs(),S=x=>{var N;o(g)&&o(g).handleKeydown(x),(N=t.onkeydown)==null||N.call(t,x)},V=x=>{var N;o(g)&&o(g).handleTransitionEnd(x),(N=t.ontransitionend)==null||N.call(t,x)};let $;var G=_t(k);return Qt(G,()=>t.children??ft),yt(k),dt(k,x=>l=x,()=>l),$t(k,(x,N)=>nt==null?void 0:nt(x,N),n),Ut(x=>$=Kt(k,$,{class:x,...c,onkeydown:S,ontransitionend:V}),[()=>Pt({[i()]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":t.variant==="dismissible","mdc-drawer--modal":t.variant==="modal","smui-drawer__absolute":t.variant==="modal"&&!s(),...o(m)})]),D(r,k),mt({setOpen:E,isOpen:Q,getElement:T})}function be(r,t){pt(t,!0);let e=f(t,"use",19,()=>[]),n=f(t,"class",3,""),i=f(t,"component",3,ke),a=f(t,"tag",3,"div"),s=f(t,"_smuiClass",3,""),c=f(t,"_smuiClassMap",23,()=>({})),l=f(t,"_smuiContexts",19,()=>({})),g=f(t,"_smuiProps",19,()=>({})),L=kt(t,["$$slots","$$events","$$legacy","use","class","component","tag","_smuiClass","_smuiClassMap","_smuiContexts","_smuiProps","children"]),m;const d=[];Object.entries(c()).forEach(([v,w])=>{const I=Ft(w);I&&"subscribe"in I&&d.push(I.subscribe(C=>{c()[v]=C}))});for(let v in l())l().hasOwnProperty(v)&&lt(v,l()[v]);Ue(()=>{for(const v of d)v()});function h(){return m.getElement()}var p=ct(),_=J(p);const y=bt(()=>Pt({[n()]:!0,[s()]:!0,...c()}));return Ee(_,i,(v,w)=>{dt(w(v,Wt({get tag(){return a()},get use(){return e()},get class(){return o(y)}},g,()=>L,{children:(I,C)=>{var E=ct(),Q=J(E);Qt(Q,()=>t.children??ft),D(I,E)},$$slots:{default:!0}})),I=>m=I,()=>m)}),D(r,p),mt({getElement:h})}function Xs(r,t){pt(t,!0);let e=kt(t,["$$slots","$$events","$$legacy","children"]),n;function i(){return n.getElement()}return dt(be(r,Wt({_smuiClass:"mdc-drawer-app-content",tag:"div"},()=>e,{children:(a,s)=>{var c=ct(),l=J(c);Qt(l,()=>t.children??ft),D(a,c)},$$slots:{default:!0}})),a=>n=a,()=>n),mt({getElement:i})}function Hn(r,t){pt(t,!0);let e=kt(t,["$$slots","$$events","$$legacy","children"]),n;function i(){return n.getElement()}return dt(be(r,Wt({_smuiClass:"mdc-drawer__content",tag:"div"},()=>e,{children:(a,s)=>{var c=ct(),l=J(c);Qt(l,()=>t.children??ft),D(a,c)},$$slots:{default:!0}})),a=>n=a,()=>n),mt({getElement:i})}function Ys(r,t){pt(t,!0);let e=kt(t,["$$slots","$$events","$$legacy","children"]),n;function i(){return n.getElement()}return dt(be(r,Wt({_smuiClass:"mdc-drawer__header",tag:"div"},()=>e,{children:(a,s)=>{var c=ct(),l=J(c);Qt(l,()=>t.children??ft),D(a,c)},$$slots:{default:!0}})),a=>n=a,()=>n),mt({getElement:i})}function Zs(r,t){pt(t,!0);let e=kt(t,["$$slots","$$events","$$legacy","children"]),n;function i(){return n.getElement()}return dt(be(r,Wt({_smuiClass:"mdc-drawer__title",tag:"h1"},()=>e,{children:(a,s)=>{var c=ct(),l=J(c);Qt(l,()=>t.children??ft),D(a,c)},$$slots:{default:!0}})),a=>n=a,()=>n),mt({getElement:i})}function Js(r,t){pt(t,!0);let e=kt(t,["$$slots","$$events","$$legacy","children"]),n;function i(){return n.getElement()}return dt(be(r,Wt({_smuiClass:"mdc-drawer__subtitle",tag:"h2"},()=>e,{children:(a,s)=>{var c=ct(),l=J(c);Qt(l,()=>t.children??ft),D(a,c)},$$slots:{default:!0}})),a=>n=a,()=>n),mt({getElement:i})}function $s(r,t){pt(t,!0);const{closest:e,matches:n}=Ye;let i=Ft("SMUI:list:nav"),a=f(t,"use",19,()=>[]),s=f(t,"class",3,""),c=f(t,"nonInteractive",3,!1),l=f(t,"dense",3,!1),g=f(t,"textualList",3,!1),L=f(t,"avatarList",3,!1),m=f(t,"iconList",3,!1),d=f(t,"imageList",3,!1),h=f(t,"thumbnailList",3,!1),p=f(t,"videoList",3,!1),_=f(t,"twoLine",3,!1),y=f(t,"threeLine",3,!1),v=f(t,"vertical",3,!0),w=f(t,"wrapFocus",19,()=>Ft("SMUI:list:wrapFocus")??!1),I=f(t,"singleSelection",3,!1),C=f(t,"disabledItemsFocusable",3,!1),E=f(t,"selectedIndex",31,()=>-1),Q=f(t,"radioList",3,!1),T=f(t,"checkList",3,!1),k=f(t,"hasTypeahead",3,!1),S=f(t,"component",3,ke),V=f(t,"tag",3,i?"nav":"ul"),$=kt(t,["$$slots","$$events","$$legacy","use","class","nonInteractive","dense","textualList","avatarList","iconList","imageList","thumbnailList","videoList","twoLine","threeLine","vertical","wrapFocus","singleSelection","disabledItemsFocusable","selectedIndex","radioList","checkList","hasTypeahead","component","tag","children"]),G,x=Lt(void 0),N=[],u=Ft("SMUI:list:role");const b=new WeakMap;let R=Ft("SMUI:dialog:selection"),X=Ft("SMUI:addLayoutListener"),Z;lt("SMUI:list:nonInteractive",c()),lt("SMUI:separator:context","list"),u||(I()?(u="listbox",lt("SMUI:list:item:role","option")):Q()?(u="radiogroup",lt("SMUI:list:item:role","radio")):T()?(u="group",lt("SMUI:list:item:role","checkbox")):(u="list",lt("SMUI:list:item:role",void 0))),Tt(()=>{o(x)&&o(x).setVerticalOrientation(v())}),Tt(()=>{o(x)&&o(x).setWrapFocus(w())}),Tt(()=>{o(x)&&o(x).setHasTypeahead(k())}),Tt(()=>{o(x)&&o(x).setSingleSelection(I())}),Tt(()=>{o(x)&&o(x).setDisabledItemsFocusable(C())}),Tt(()=>{o(x)&&I()&&oe()!==E()&&o(x).setSelectedIndex(E())}),X&&(Z=X(Ot)),lt("SMUI:list:item:mount",P=>{N.push(P),b.set(P.element,P),I()&&P.selected&&E(wt(P.element))}),lt("SMUI:list:item:unmount",P=>{const K=(P&&N.findIndex(O=>O===P))??-1;K!==-1&&(N.splice(K,1),b.delete(P.element))});const ht=Ft("SMUI:list:mount"),ot=Ft("SMUI:list:unmount");ae(()=>{Y(x,B(new Vs({addClassForElementIndex:te,focusItemAtIndex:ne,getAttributeForElementIndex:(K,O)=>{var F;return((F=A()[K])==null?void 0:F.getAttr(O))??null},getFocusedElementIndex:()=>document.activeElement?A().map(K=>K.element).indexOf(document.activeElement):-1,getListItemCount:()=>N.length,getPrimaryTextAtIndex:tt,hasCheckboxAtIndex:K=>{var O;return((O=A()[K])==null?void 0:O.hasCheckbox)??!1},hasRadioAtIndex:K=>{var O;return((O=A()[K])==null?void 0:O.hasRadio)??!1},isCheckboxCheckedAtIndex:K=>{const O=A()[K];return((O==null?void 0:O.hasCheckbox)&&O.checked)??!1},isFocusInsideList:()=>G!=null&&q()!==document.activeElement&&q().contains(document.activeElement),isRootFocused:()=>G!=null&&document.activeElement===q(),listItemAtIndexHasClass:W,notifyAction:K=>{E(K),G!=null&&re(q(),"SMUIListAction",{index:K})},notifySelectionChange:K=>{G!=null&&re(q(),"SMUIListSelectionChange",{changedIndices:K})},removeClassForElementIndex:Zt,setAttributeForElementIndex:j,setCheckedCheckboxOrRadioAtIndex:(K,O)=>{A()[K].checked=O},setTabIndexForListItemChildren:(K,O)=>{const F=A()[K];Array.prototype.forEach.call(F.element.querySelectorAll("button:not(:disabled), a"),le=>{le.setAttribute("tabindex",O)})}})));const P={get element(){return q()},get items(){return N},get typeaheadInProgress(){if(!o(x))throw new Error("Instance is undefined.");return o(x).isTypeaheadInProgress()},typeaheadMatchItem(K,O){if(!o(x))throw new Error("Instance is undefined.");return o(x).typeaheadMatchItem(K,O,!0)},getOrderedList:A,focusItemAtIndex:ne,addClassForElementIndex:te,removeClassForElementIndex:Zt,setAttributeForElementIndex:j,removeAttributeForElementIndex:M,getAttributeFromElementIndex:U,getPrimaryTextAtIndex:tt};return ht&&ht(P),o(x).init(),o(x).layout(),()=>{var K;ot&&ot(P),(K=o(x))==null||K.destroy()}}),Ue(()=>{Z&&Z()});function rt(P){o(x)&&P.target&&o(x).handleKeydown(P,P.target.classList.contains("mdc-deprecated-list-item"),wt(P.target))}function at(P){o(x)&&P.target&&o(x).handleFocusIn(wt(P.target))}function Nt(P){o(x)&&P.target&&o(x).handleFocusOut(wt(P.target))}function Ct(P){o(x)&&P.target&&o(x).handleClick(wt(P.target),!n(P.target,'input[type="checkbox"], input[type="radio"]'),P)}function Ht(P){if(Q()||T()){const K=wt(P.target);if(K!==-1){const O=A()[K];O&&(Q()&&!O.checked||T())&&(n(P.detail.target,'input[type="checkbox"], input[type="radio"]')||(O.checked=!O.checked),O.activateRipple(),window.requestAnimationFrame(()=>{O.deactivateRipple()}))}}}function A(){return G==null?[]:[...q().children].map(P=>b.get(P)).filter(P=>P&&P._smui_list_item_accessor)}function W(P,K){const O=A()[P];return(O&&O.hasClass(K))??!1}function te(P,K){const O=A()[P];O&&O.addClass(K)}function Zt(P,K){const O=A()[P];O&&O.removeClass(K)}function j(P,K,O){const F=A()[P];F&&F.addAttr(K,O)}function M(P,K){const O=A()[P];O&&O.removeAttr(K)}function U(P,K){const O=A()[P];return O?O.getAttr(K):null}function tt(P){const K=A()[P];return(K&&K.getPrimaryText())??""}function wt(P){const K=e(P,".mdc-deprecated-list-item, .mdc-deprecated-list");return K&&n(K,".mdc-deprecated-list-item")?A().map(O=>O==null?void 0:O.element).indexOf(K):-1}function Ot(){if(!o(x))throw new Error("Instance is undefined.");return o(x).layout()}function ee(P,K){if(!o(x))throw new Error("Instance is undefined.");return o(x).setEnabled(P,K)}function se(){if(!o(x))throw new Error("Instance is undefined.");return o(x).isTypeaheadInProgress()}function oe(){if(!o(x))throw new Error("Instance is undefined.");return o(x).getSelectedIndex()}function Jt(){if(!o(x))throw new Error("Instance is undefined.");return o(x).getFocusedItemIndex()}function ne(P){const K=A()[P];K&&"focus"in K.element&&K.element.focus()}function q(){return G.getElement()}var gt=ct(),zt=J(gt);const Me=bt(()=>Pt({[s()]:!0,"mdc-deprecated-list":!0,"mdc-deprecated-list--non-interactive":c(),"mdc-deprecated-list--dense":l(),"mdc-deprecated-list--textual-list":g(),"mdc-deprecated-list--avatar-list":L()||R,"mdc-deprecated-list--icon-list":m(),"mdc-deprecated-list--image-list":d(),"mdc-deprecated-list--thumbnail-list":h(),"mdc-deprecated-list--video-list":p(),"mdc-deprecated-list--two-line":_(),"smui-list--three-line":y()&&!_()}));return Ee(zt,S,(P,K)=>{dt(K(P,Wt({get tag(){return V()},get use(){return a()},get class(){return o(Me)},role:u},()=>$,{onkeydown:O=>{var F;rt(O),(F=t.onkeydown)==null||F.call(t,O)},onfocusin:O=>{var F;at(O),(F=t.onfocusin)==null||F.call(t,O)},onfocusout:O=>{var F;Nt(O),(F=t.onfocusout)==null||F.call(t,O)},onclick:O=>{var F;Ct(O),(F=t.onclick)==null||F.call(t,O)},onSMUIAction:O=>{var F;Ht(O),(F=t.onSMUIAction)==null||F.call(t,O)},children:(O,F)=>{var et=ct(),le=J(et);Qt(le,()=>t.children??ft),D(O,et)},$$slots:{default:!0}})),O=>G=O,()=>G)}),D(r,gt),mt({layout:Ot,setEnabled:ee,getTypeaheadInProgress:se,getSelectedIndex:oe,getFocusedItemIndex:Jt,focusItemAtIndex:ne,getElement:q})}let to=0;var eo=It('<span class="mdc-deprecated-list-item__ripple"></span>'),no=It("<!><!>",1);function io(r,t){pt(t,!0);let e=()=>{};function n(M){return M===e}let i=Ft("SMUI:list:item:nav"),a=f(t,"use",19,()=>[]),s=f(t,"class",3,""),c=f(t,"style",3,""),l=f(t,"nonInteractive",19,()=>Ft("SMUI:list:nonInteractive")??!1),g=f(t,"ripple",19,()=>!l()),L=f(t,"wrapper",3,!1),m=f(t,"activated",15,!1),d=f(t,"role",19,()=>L()?"presentation":Ft("SMUI:list:item:role")),h=f(t,"selected",15,!1),p=f(t,"disabled",3,!1),_=f(t,"skipRestoreFocus",3,!1),y=f(t,"tabindex",15,e),v=f(t,"inputId",19,()=>"SMUI-form-field-list-"+to++),w=f(t,"component",3,ke),I=f(t,"tag",19,()=>i?t.href?"a":"span":"li"),C=kt(t,["$$slots","$$events","$$legacy","use","class","style","color","nonInteractive","ripple","wrapper","activated","role","selected","disabled","skipRestoreFocus","tabindex","inputId","href","component","tag","children"]);lt("SMUI:list:nonInteractive",void 0),lt("SMUI:list:item:role",void 0);let E,Q=B({}),T=B({}),k=B({}),S=Lt(void 0),V=Lt(void 0);const $=bt(()=>n(y())?!l()&&!p()&&(h()||o(S)&&o(S).checked)?0:-1:y());lt("SMUI:generic:input:props",{id:v()}),lt("SMUI:separator:context",void 0),lt("SMUI:generic:input:mount",M=>{("_smui_checkbox_accessor"in M||"_smui_radio_accessor"in M)&&Y(S,B(M))}),lt("SMUI:generic:input:unmount",()=>{Y(S,void 0)});const G=Ft("SMUI:list:item:mount"),x=Ft("SMUI:list:item:unmount");ae(()=>{if(!h()&&!l()){let U=!0,tt=E.getElement();for(;tt.previousElementSibling;)if(tt=tt.previousElementSibling,tt.nodeType===1&&tt.classList.contains("mdc-deprecated-list-item")&&!tt.classList.contains("mdc-deprecated-list-item--disabled")){U=!1;break}U&&Y(V,B(window.requestAnimationFrame(()=>ot(tt))))}const M={_smui_list_item_accessor:!0,get element(){return Ct()},get selected(){return h()},set selected(U){h(U)},hasClass:N,addClass:u,removeClass:b,getAttr:X,addAttr:Z,removeAttr:ht,getPrimaryText:Nt,get checked(){return(o(S)&&o(S).checked)??!1},set checked(U){o(S)&&(o(S).checked=!!U)},get hasCheckbox(){return!!(o(S)&&"_smui_checkbox_accessor"in o(S))},get hasRadio(){return!!(o(S)&&"_smui_radio_accessor"in o(S))},activateRipple(){o(S)&&o(S).activateRipple()},deactivateRipple(){o(S)&&o(S).deactivateRipple()},getValue(){return t.value},action:at,get tabindex(){return o($)},set tabindex(U){y(U)},get disabled(){return p()},get activated(){return m()},set activated(U){m(U)}};return G&&G(M),()=>{x&&x(M)}}),Ue(()=>{o(V)&&window.cancelAnimationFrame(o(V))});function N(M){return M in Q?Q[M]:Ct().classList.contains(M)}function u(M){Q[M]||(Q[M]=!0)}function b(M){(!(M in Q)||Q[M])&&(Q[M]=!1)}function R(M,U){T[M]!=U&&(U===""||U==null?delete T[M]:T[M]=U)}function X(M){return M in k?k[M]??null:Ct().getAttribute(M)}function Z(M,U){k[M]!==U&&(k[M]=U)}function ht(M){(!(M in k)||k[M]!=null)&&(k[M]=void 0)}function ot(M){let U=!0;for(;M.nextElementSibling;)if(M=M.nextElementSibling,M.nodeType===1&&M.classList.contains("mdc-deprecated-list-item")){const tt=M.attributes.getNamedItem("tabindex");if(tt&&tt.value==="0"){U=!1;break}}U&&y(0)}function rt(M){const U=M.key==="Enter",tt=M.key==="Space";(U||tt)&&at(M)}function at(M){p()||re(Ct(),"SMUIAction",M)}function Nt(){const M=Ct(),U=M.querySelector(".mdc-deprecated-list-item__primary-text");if(U)return U.textContent??"";const tt=M.querySelector(".mdc-deprecated-list-item__text");return tt?tt.textContent??"":M.textContent??""}function Ct(){return E.getElement()}var Ht=ct(),A=J(Ht);const W=bt(()=>[...l()?[]:[[Ze,{ripple:!o(S),unbounded:!1,color:(m()||h())&&t.color==null?"primary":t.color,disabled:p(),addClass:u,removeClass:b,addStyle:R}]],...a()]),te=bt(()=>Pt({[s()]:!0,"mdc-deprecated-list-item":!L(),"mdc-deprecated-list-item__wrapper":L(),"mdc-deprecated-list-item--activated":m(),"mdc-deprecated-list-item--selected":h(),"mdc-deprecated-list-item--disabled":p(),"mdc-menu-item--selected":!i&&d()==="menuitem"&&h(),"smui-menu-item--non-interactive":l(),...Q})),Zt=bt(()=>Object.entries(T).map(([M,U])=>`${M}: ${U};`).concat([c()]).join(" ")),j=bt(()=>_()||void 0);return Ee(A,w,(M,U)=>{dt(U(M,Wt({get tag(){return I()},get use(){return o(W)},get class(){return o(te)},get style(){return o(Zt)}},()=>i&&m()?{"aria-current":"page"}:{},()=>!i||L()?{role:d()}:{},()=>!i&&d()==="option"?{"aria-selected":h()?"true":"false"}:{},()=>!i&&(d()==="radio"||d()==="checkbox")?{"aria-checked":o(S)&&o(S).checked?"true":"false"}:{},()=>i?{}:{"aria-disabled":p()?"true":"false"},{get"data-menu-item-skip-restore-focus"(){return o(j)},get tabindex(){return o($)},get href(){return t.href}},()=>k,()=>C,{onclick:tt=>{var wt;at(tt),(wt=t.onclick)==null||wt.call(t,tt)},onkeydown:tt=>{var wt;rt(tt),(wt=t.onkeydown)==null||wt.call(t,tt)},children:(tt,wt)=>{var Ot=no(),ee=J(Ot);{var se=Jt=>{var ne=eo();D(Jt,ne)};At(ee,Jt=>{g()&&Jt(se)})}var oe=ut(ee);Qt(oe,()=>t.children??ft),D(tt,Ot)},$$slots:{default:!0}})),tt=>E=tt,()=>E)}),D(r,Ht),mt({action:at,getPrimaryText:Nt,getElement:Ct})}function ro(r,t){pt(t,!0);let e=kt(t,["$$slots","$$events","$$legacy","children"]),n;function i(){return n.getElement()}return dt(be(r,Wt({_smuiClass:"mdc-deprecated-list-item__text",tag:"span"},()=>e,{children:(a,s)=>{var c=ct(),l=J(c);Qt(l,()=>t.children??ft),D(a,c)},$$slots:{default:!0}})),a=>n=a,()=>n),mt({getElement:i})}function ao(r,t){pt(t,!0);let e=f(t,"children",3,void 0),n=f(t,"twoLine",3,!1),i=f(t,"onpressed",3,()=>!0);f(t,"disabled",3,!1);let a=f(t,"wrapFocus",3,!0),s=f(t,"style",3,""),c=f(t,"cssclass",3,"vlist"),l=f(t,"selectedIndex",15,0);f(t,"focussed",11,0);let g=f(t,"inputMapping",19,()=>({name:"List",gamepad:-1,axes:[1],sensitivity:.05,buttons:[z.DOWN],buttons_prev:[z.DPAD_UP],buttons_next:[z.DPAD_DOWN],keys_prev:["arrowup","w"],keys_next:["arrowdown","s"],keys:["enter","r"]})),L=f(t,"context",19,()=>["default"]),m=f(t,"requiresFocus",3,!0),d;const h=()=>d.getElement().children,p=_=>{const y=d.getFocusedItemIndex();let v=y+_;if(a()&&v<0){d.focusItemAtIndex(h().length-1);return}d.focusItemAtIndex(v),a()&&y===d.getFocusedItemIndex()&&d.focusItemAtIndex(0)};ae(()=>{const _=new yr(g(),d.getElement(),m(),i());return _.changeFocus=p,pn(L(),_),()=>{mn(L(),_)}}),dt($s(r,{get twoLine(){return n()},get style(){return s()},get wrapFocus(){return a()},get selectedIndex(){return l()},get class(){return c()},singleSelection:!0,children:(_,y)=>{var v=ct(),w=J(v);Qt(w,()=>e()??ft),D(_,v)},$$slots:{default:!0}}),_=>d=_,()=>d),mt()}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function so(r){return r?r.scrollHeight>r.offsetHeight:!1}function oo(r){return r?r.scrollTop===0:!1}function lo(r){return r?Math.ceil(r.scrollHeight-r.scrollTop)===r.clientHeight:!1}function co(r){var t=new Set;return[].forEach.call(r,function(e){return t.add(e.offsetTop)}),t.size>1}/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var uo=function(){function r(){this.rafIDs=new Map}return r.prototype.request=function(t,e){var n=this;this.cancel(t);var i=requestAnimationFrame(function(a){n.rafIDs.delete(t),e(a)});this.rafIDs.set(t,i)},r.prototype.cancel=function(t){var e=this.rafIDs.get(t);e&&(cancelAnimationFrame(e),this.rafIDs.delete(t))},r.prototype.cancelAll=function(){var t=this;this.rafIDs.forEach(function(e,n){t.cancel(n)})},r.prototype.getQueue=function(){var t=[];return this.rafIDs.forEach(function(e,n){t.push(n)}),t},r}();/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var vt={CLOSING:"mdc-dialog--closing",OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",SCROLLABLE:"mdc-dialog--scrollable",SCROLL_LOCK:"mdc-dialog-scroll-lock",STACKED:"mdc-dialog--stacked",FULLSCREEN:"mdc-dialog--fullscreen",SCROLL_DIVIDER_HEADER:"mdc-dialog-scroll-divider-header",SCROLL_DIVIDER_FOOTER:"mdc-dialog-scroll-divider-footer",SURFACE_SCRIM_SHOWN:"mdc-dialog__surface-scrim--shown",SURFACE_SCRIM_SHOWING:"mdc-dialog__surface-scrim--showing",SURFACE_SCRIM_HIDING:"mdc-dialog__surface-scrim--hiding",SCRIM_HIDDEN:"mdc-dialog__scrim--hidden"},Te={ACTION_ATTRIBUTE:"data-mdc-dialog-action",BUTTON_DEFAULT_ATTRIBUTE:"data-mdc-dialog-button-default",BUTTON_SELECTOR:".mdc-dialog__button",CLOSED_EVENT:"MDCDialog:closed",CLOSE_ACTION:"close",CLOSING_EVENT:"MDCDialog:closing",CONTAINER_SELECTOR:".mdc-dialog__container",CONTENT_SELECTOR:".mdc-dialog__content",DESTROY_ACTION:"destroy",INITIAL_FOCUS_ATTRIBUTE:"data-mdc-dialog-initial-focus",OPENED_EVENT:"MDCDialog:opened",OPENING_EVENT:"MDCDialog:opening",SCRIM_SELECTOR:".mdc-dialog__scrim",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item",".mdc-menu .mdc-deprecated-list-item"].join(", "),SURFACE_SELECTOR:".mdc-dialog__surface"},en={DIALOG_ANIMATION_CLOSE_TIME_MS:75,DIALOG_ANIMATION_OPEN_TIME_MS:150};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var qe;(function(r){r.POLL_SCROLL_POS="poll_scroll_position",r.POLL_LAYOUT_CHANGE="poll_layout_change"})(qe||(qe={}));var fo=function(r){Xt(t,r);function t(e){var n=r.call(this,Rt(Rt({},t.defaultAdapter),e))||this;return n.dialogOpen=!1,n.isFullscreen=!1,n.animationFrame=0,n.animationTimer=0,n.escapeKeyAction=Te.CLOSE_ACTION,n.scrimClickAction=Te.CLOSE_ACTION,n.autoStackButtons=!0,n.areButtonsStacked=!1,n.suppressDefaultPressSelector=Te.SUPPRESS_DEFAULT_PRESS_SELECTOR,n.animFrame=new uo,n.contentScrollHandler=function(){n.handleScrollEvent()},n.windowResizeHandler=function(){n.layout()},n.windowOrientationChangeHandler=function(){n.layout()},n}return Object.defineProperty(t,"cssClasses",{get:function(){return vt},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return Te},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return en},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addBodyClass:function(){},addClass:function(){},areButtonsStacked:function(){return!1},clickDefaultButton:function(){},eventTargetMatches:function(){return!1},getActionFromEvent:function(){return""},getInitialFocusEl:function(){return null},hasClass:function(){return!1},isContentScrollable:function(){return!1},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeBodyClass:function(){},removeClass:function(){},reverseButtons:function(){},trapFocus:function(){},registerContentEventHandler:function(){},deregisterContentEventHandler:function(){},isScrollableContentAtTop:function(){return!1},isScrollableContentAtBottom:function(){return!1},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){this.adapter.hasClass(vt.STACKED)&&this.setAutoStackButtons(!1),this.isFullscreen=this.adapter.hasClass(vt.FULLSCREEN)},t.prototype.destroy=function(){this.animationTimer&&(clearTimeout(this.animationTimer),this.handleAnimationTimerEnd()),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.animFrame.cancelAll(),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler)},t.prototype.open=function(e){var n=this;this.dialogOpen=!0,this.adapter.notifyOpening(),this.adapter.addClass(vt.OPENING),this.isFullscreen&&this.adapter.registerContentEventHandler("scroll",this.contentScrollHandler),e&&e.isAboveFullscreenDialog&&this.adapter.addClass(vt.SCRIM_HIDDEN),this.adapter.registerWindowEventHandler("resize",this.windowResizeHandler),this.adapter.registerWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),this.runNextAnimationFrame(function(){n.adapter.addClass(vt.OPEN),n.adapter.addBodyClass(vt.SCROLL_LOCK),n.layout(),n.animationTimer=setTimeout(function(){n.handleAnimationTimerEnd(),n.adapter.trapFocus(n.adapter.getInitialFocusEl()),n.adapter.notifyOpened()},en.DIALOG_ANIMATION_OPEN_TIME_MS)})},t.prototype.close=function(e){var n=this;e===void 0&&(e=""),this.dialogOpen&&(this.dialogOpen=!1,this.adapter.notifyClosing(e),this.adapter.addClass(vt.CLOSING),this.adapter.removeClass(vt.OPEN),this.adapter.removeBodyClass(vt.SCROLL_LOCK),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){n.adapter.releaseFocus(),n.handleAnimationTimerEnd(),n.adapter.notifyClosed(e)},en.DIALOG_ANIMATION_CLOSE_TIME_MS))},t.prototype.showSurfaceScrim=function(){var e=this;this.adapter.addClass(vt.SURFACE_SCRIM_SHOWING),this.runNextAnimationFrame(function(){e.adapter.addClass(vt.SURFACE_SCRIM_SHOWN)})},t.prototype.hideSurfaceScrim=function(){this.adapter.removeClass(vt.SURFACE_SCRIM_SHOWN),this.adapter.addClass(vt.SURFACE_SCRIM_HIDING)},t.prototype.handleSurfaceScrimTransitionEnd=function(){this.adapter.removeClass(vt.SURFACE_SCRIM_HIDING),this.adapter.removeClass(vt.SURFACE_SCRIM_SHOWING)},t.prototype.isOpen=function(){return this.dialogOpen},t.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction},t.prototype.setEscapeKeyAction=function(e){this.escapeKeyAction=e},t.prototype.getScrimClickAction=function(){return this.scrimClickAction},t.prototype.setScrimClickAction=function(e){this.scrimClickAction=e},t.prototype.getAutoStackButtons=function(){return this.autoStackButtons},t.prototype.setAutoStackButtons=function(e){this.autoStackButtons=e},t.prototype.getSuppressDefaultPressSelector=function(){return this.suppressDefaultPressSelector},t.prototype.setSuppressDefaultPressSelector=function(e){this.suppressDefaultPressSelector=e},t.prototype.layout=function(){var e=this;this.animFrame.request(qe.POLL_LAYOUT_CHANGE,function(){e.layoutInternal()})},t.prototype.handleClick=function(e){var n=this.adapter.eventTargetMatches(e.target,Te.SCRIM_SELECTOR);if(n&&this.scrimClickAction!=="")this.close(this.scrimClickAction);else{var i=this.adapter.getActionFromEvent(e);i&&this.close(i)}},t.prototype.handleKeydown=function(e){var n=e.key==="Enter"||e.keyCode===13;if(n){var i=this.adapter.getActionFromEvent(e);if(!i){var a=e.composedPath?e.composedPath()[0]:e.target,s=this.suppressDefaultPressSelector?!this.adapter.eventTargetMatches(a,this.suppressDefaultPressSelector):!0;n&&s&&this.adapter.clickDefaultButton()}}},t.prototype.handleDocumentKeydown=function(e){var n=e.key==="Escape"||e.keyCode===27;n&&this.escapeKeyAction!==""&&this.close(this.escapeKeyAction)},t.prototype.handleScrollEvent=function(){var e=this;this.animFrame.request(qe.POLL_SCROLL_POS,function(){e.toggleScrollDividerHeader(),e.toggleScrollDividerFooter()})},t.prototype.layoutInternal=function(){this.autoStackButtons&&this.detectStackedButtons(),this.toggleScrollableClasses()},t.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(vt.OPENING),this.adapter.removeClass(vt.CLOSING)},t.prototype.runNextAnimationFrame=function(e){var n=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){n.animationFrame=0,clearTimeout(n.animationTimer),n.animationTimer=setTimeout(e,0)})},t.prototype.detectStackedButtons=function(){this.adapter.removeClass(vt.STACKED);var e=this.adapter.areButtonsStacked();e&&this.adapter.addClass(vt.STACKED),e!==this.areButtonsStacked&&(this.adapter.reverseButtons(),this.areButtonsStacked=e)},t.prototype.toggleScrollableClasses=function(){this.adapter.removeClass(vt.SCROLLABLE),this.adapter.isContentScrollable()&&(this.adapter.addClass(vt.SCROLLABLE),this.isFullscreen&&(this.toggleScrollDividerHeader(),this.toggleScrollDividerFooter()))},t.prototype.toggleScrollDividerHeader=function(){this.adapter.isScrollableContentAtTop()?this.adapter.hasClass(vt.SCROLL_DIVIDER_HEADER)&&this.adapter.removeClass(vt.SCROLL_DIVIDER_HEADER):this.adapter.addClass(vt.SCROLL_DIVIDER_HEADER)},t.prototype.toggleScrollDividerFooter=function(){this.adapter.isScrollableContentAtBottom()?this.adapter.hasClass(vt.SCROLL_DIVIDER_FOOTER)&&this.adapter.removeClass(vt.SCROLL_DIVIDER_FOOTER):this.adapter.addClass(vt.SCROLL_DIVIDER_FOOTER)},t}(_e),ho=It('<div class="mdc-dialog__surface-scrim"></div>'),go=It('<div><div><div><!> <!></div></div> <div class="mdc-dialog__scrim"></div></div> <!>',1);function vo(r,t){pt(t,!0);const[e,n]=$i(),i=()=>Ji(G,"$aboveFullscreenShown",e),{FocusTrap:a}=ni,{closest:s,matches:c}=Ye;let l=f(t,"use",19,()=>[]),g=f(t,"class",3,""),L=f(t,"open",15,!1),m=f(t,"selection",3,!1),d=f(t,"escapeKeyAction",3,"close"),h=f(t,"scrimClickAction",3,"close"),p=f(t,"autoStackButtons",3,!0),_=f(t,"fullscreen",3,!1),y=f(t,"sheet",3,!1),v=f(t,"noContentPadding",3,!1),w=f(t,"container$class",3,""),I=f(t,"surface$class",3,""),C=kt(t,["$$slots","$$events","$$legacy","use","class","open","selection","escapeKeyAction","scrimClickAction","autoStackButtons","fullscreen","sheet","noContentPadding","container$class","surface$class","children","over"]),E,Q=Lt(void 0),T=new wn,k=B({}),S,V=Sn(!1),$=Ft("SMUI:dialog:aboveFullscreen"),G=Ft("SMUI:dialog:aboveFullscreenShown")??Sn(!1),x=Ft("SMUI:addLayoutListener"),N,u=[],b=F=>(u.push(F),()=>{const et=u.indexOf(F);et>=0&&u.splice(et,1)});lt("SMUI:dialog:actions:reversed",V),lt("SMUI:addLayoutListener",b),lt("SMUI:dialog:selection",m()),lt("SMUI:dialog:aboveFullscreen",$||_()),lt("SMUI:dialog:aboveFullscreenShown",G),y()&&lt("SMUI:icon-button:context","dialog:sheet"),Tt(()=>{o(Q)&&o(Q).getEscapeKeyAction()!==d()&&o(Q).setEscapeKeyAction(d())}),Tt(()=>{o(Q)&&o(Q).getScrimClickAction()!==h()&&o(Q).setScrimClickAction(h())}),Tt(()=>{o(Q)&&o(Q).getAutoStackButtons()!==p()&&o(Q).setAutoStackButtons(p())}),Tt(()=>{p()||Be(V,!0)}),x&&(N=x(Zt)),Tt(()=>{o(Q)&&o(Q).isOpen()!==L()&&(L()?o(Q).open({isAboveFullscreenDialog:!!$}):o(Q).close())});let R=i();Tt(()=>{_()&&o(Q)&&R!==i()&&(R=i(),i()?o(Q).showSurfaceScrim():o(Q).hideSurfaceScrim())}),ae(()=>(S=new a(E,{initialFocusEl:Nt()??void 0}),Y(Q,B(new fo({addBodyClass:F=>document.body.classList.add(F),addClass:Z,areButtonsStacked:()=>co(ot()),clickDefaultButton:()=>{const F=rt();F&&F.click()},eventTargetMatches:(F,et)=>F?c(F,et):!1,getActionFromEvent:F=>{if(!F.target)return"";const et=s(F.target,"[data-mdc-dialog-action]");return et&&et.getAttribute("data-mdc-dialog-action")},getInitialFocusEl:Nt,hasClass:X,isContentScrollable:()=>so(at()),notifyClosed:F=>{L(!1),re(j(),"SMUIDialogClosed",F?{action:F}:{})},notifyClosing:F=>re(j(),"SMUIDialogClosing",F?{action:F}:{}),notifyOpened:()=>re(j(),"SMUIDialogOpened",{}),notifyOpening:()=>re(j(),"SMUIDialogOpening",{}),releaseFocus:()=>S.releaseFocus(),removeBodyClass:F=>document.body.classList.remove(F),removeClass:ht,reverseButtons:()=>{Be(V,!0)},trapFocus:()=>S.trapFocus(),registerContentEventHandler:(F,et)=>{const le=at();le instanceof HTMLElement&&T.on(le,F,et)},deregisterContentEventHandler:(F,et)=>{const le=at();le instanceof HTMLElement&&T.off(le,F,et)},isScrollableContentAtTop:()=>oo(at()),isScrollableContentAtBottom:()=>lo(at()),registerWindowEventHandler:(F,et)=>T.on(window,F,et),deregisterWindowEventHandler:(F,et)=>T.off(window,F,et)}))),o(Q).init(),()=>{var F;(F=o(Q))==null||F.destroy(),T.clear()})),Ue(()=>{N&&N()});function X(F){return F in k?k[F]:j().classList.contains(F)}function Z(F){k[F]||(k[F]=!0)}function ht(F){(!(F in k)||k[F])&&(k[F]=!1)}function ot(){return[].slice.call(j().querySelectorAll(".mdc-dialog__button"))}function rt(){return j().querySelector("[data-mdc-dialog-button-default]")}function at(){return j().querySelector(".mdc-dialog__content")}function Nt(){return j().querySelector("[data-mdc-dialog-initial-focus]")}function Ct(){$&&Be(G,!0),requestAnimationFrame(()=>{u.forEach(F=>F())})}function Ht(){u.forEach(F=>F())}function A(){$&&Be(G,!1)}function W(){return L()}function te(F){L(F)}function Zt(){var F;return(F=o(Q))==null?void 0:F.layout()}function j(){return E}var M=go();ve("resize",Ae,()=>L()&&o(Q)&&o(Q).layout()),ve("orientationchange",Ae,()=>L()&&o(Q)&&o(Q).layout()),ve("keydown",Wi.body,F=>o(Q)&&o(Q).handleDocumentKeydown(F));var U=J(M),tt=F=>{var et;Ct(),(et=t.onSMUIDialogOpening)==null||et.call(t,F)},wt=F=>{var et;Ht(),(et=t.onSMUIDialogOpened)==null||et.call(t,F)},Ot=F=>{var et;A(),(et=t.onSMUIDialogClosed)==null||et.call(t,F)},ee=F=>{var et;o(Q)&&o(Q).handleClick(F),(et=t.onclick)==null||et.call(t,F)},se=F=>{var et;o(Q)&&o(Q).handleKeydown(F),(et=t.onkeydown)==null||et.call(t,F)};let oe;var Jt=_t(U);let ne;var q=_t(Jt);let gt;var zt=_t(q);Qt(zt,()=>t.children??ft);var Me=ut(zt,2);{var P=F=>{var et=ho();ve("transitionend",et,()=>o(Q)&&o(Q).handleSurfaceScrimTransitionEnd()),D(F,et)};At(Me,F=>{_()&&F(P)})}yt(q),yt(Jt),jt(2),yt(U),dt(U,F=>E=F,()=>E),$t(U,(F,et)=>nt==null?void 0:nt(F,et),l);var K=ut(U,2);Qt(K,()=>t.over??ft),Ut((F,et,le,oi,li,ci)=>{oe=Kt(U,oe,{class:F,role:"alertdialog","aria-modal":"true",...et,onSMUIDialogOpening:tt,onSMUIDialogOpened:wt,onSMUIDialogClosed:Ot,onclick:ee,onkeydown:se}),ne=Kt(Jt,ne,{class:le,...oi}),gt=Kt(q,gt,{class:li,role:"alertdialog","aria-modal":"true",...ci})},[()=>Pt({[g()]:!0,"mdc-dialog":!0,"mdc-dialog--stacked":!p(),"mdc-dialog--fullscreen":_(),"mdc-dialog--sheet":y(),"mdc-dialog--no-content-padding":v(),"smui-dialog--selection":m(),...k}),()=>He(C,["container$","surface$"]),()=>Pt({[w()]:!0,"mdc-dialog__container":!0}),()=>we(C,"container$"),()=>Pt({[I()]:!0,"mdc-dialog__surface":!0}),()=>we(C,"surface$")]),D(r,M);var O=mt({isOpen:W,setOpen:te,layout:Zt,getElement:j});return n(),O}function Lo(r,t){pt(t,!0);let e=kt(t,["$$slots","$$events","$$legacy","children"]),n;function i(){return n.getElement()}return dt(be(r,Wt({_smuiClass:"mdc-dialog__actions",_smuiClassMap:{"smui-dialog__actions--reversed":"SMUI:dialog:actions:reversed"},_smuiContexts:{"SMUI:button:context":"dialog:action"},tag:"div"},()=>e,{children:(a,s)=>{var c=ct(),l=J(c);Qt(l,()=>t.children??ft),D(a,c)},$$slots:{default:!0}})),a=>n=a,()=>n),mt({getElement:i})}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var si={ANIMATING:"mdc-tab-scroller--animating",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll",SCROLL_TEST:"mdc-tab-scroller__test"},po={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var _n=function(){function r(t){this.adapter=t}return r}();/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var mo=function(r){Xt(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.getScrollPositionRTL=function(){var e=this.adapter.getScrollAreaScrollLeft(),n=this.calculateScrollEdges().right;return Math.round(n-e)},t.prototype.scrollToRTL=function(e){var n=this.calculateScrollEdges(),i=this.adapter.getScrollAreaScrollLeft(),a=this.clampScrollValue(n.right-e);return{finalScrollPosition:a,scrollDelta:a-i}},t.prototype.incrementScrollRTL=function(e){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(n-e);return{finalScrollPosition:i,scrollDelta:i-n}},t.prototype.getAnimatingScrollPosition=function(e){return e},t.prototype.calculateScrollEdges=function(){var e=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:e-n}},t.prototype.clampScrollValue=function(e){var n=this.calculateScrollEdges();return Math.min(Math.max(n.left,e),n.right)},t}(_n);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var wo=function(r){Xt(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.getScrollPositionRTL=function(e){var n=this.adapter.getScrollAreaScrollLeft();return Math.round(e-n)},t.prototype.scrollToRTL=function(e){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(-e);return{finalScrollPosition:i,scrollDelta:i-n}},t.prototype.incrementScrollRTL=function(e){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(n-e);return{finalScrollPosition:i,scrollDelta:i-n}},t.prototype.getAnimatingScrollPosition=function(e,n){return e-n},t.prototype.calculateScrollEdges=function(){var e=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:n-e,right:0}},t.prototype.clampScrollValue=function(e){var n=this.calculateScrollEdges();return Math.max(Math.min(n.right,e),n.left)},t}(_n);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var _o=function(r){Xt(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.getScrollPositionRTL=function(e){var n=this.adapter.getScrollAreaScrollLeft();return Math.round(n-e)},t.prototype.scrollToRTL=function(e){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(e);return{finalScrollPosition:i,scrollDelta:n-i}},t.prototype.incrementScrollRTL=function(e){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(n+e);return{finalScrollPosition:i,scrollDelta:n-i}},t.prototype.getAnimatingScrollPosition=function(e,n){return e+n},t.prototype.calculateScrollEdges=function(){var e=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:e-n,right:0}},t.prototype.clampScrollValue=function(e){var n=this.calculateScrollEdges();return Math.min(Math.max(n.right,e),n.left)},t}(_n);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var yo=function(r){Xt(t,r);function t(e){var n=r.call(this,Rt(Rt({},t.defaultAdapter),e))||this;return n.isAnimating=!1,n}return Object.defineProperty(t,"cssClasses",{get:function(){return si},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return po},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{eventTargetMatchesSelector:function(){return!1},addClass:function(){},removeClass:function(){},addScrollAreaClass:function(){},setScrollAreaStyleProperty:function(){},setScrollContentStyleProperty:function(){},getScrollContentStyleValue:function(){return""},setScrollAreaScrollLeft:function(){},getScrollAreaScrollLeft:function(){return 0},getScrollContentOffsetWidth:function(){return 0},getScrollAreaOffsetWidth:function(){return 0},computeScrollAreaClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeScrollContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeHorizontalScrollbarHeight:function(){return 0}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){var e=this.adapter.computeHorizontalScrollbarHeight();this.adapter.setScrollAreaStyleProperty("margin-bottom",-e+"px"),this.adapter.addScrollAreaClass(t.cssClasses.SCROLL_AREA_SCROLL)},t.prototype.getScrollPosition=function(){if(this.isRTL())return this.computeCurrentScrollPositionRTL();var e=this.calculateCurrentTranslateX(),n=this.adapter.getScrollAreaScrollLeft();return n-e},t.prototype.handleInteraction=function(){this.isAnimating&&this.stopScrollAnimation()},t.prototype.handleTransitionEnd=function(e){var n=e.target;!this.isAnimating||!this.adapter.eventTargetMatchesSelector(n,t.strings.CONTENT_SELECTOR)||(this.isAnimating=!1,this.adapter.removeClass(t.cssClasses.ANIMATING))},t.prototype.incrementScroll=function(e){e!==0&&this.animate(this.getIncrementScrollOperation(e))},t.prototype.incrementScrollImmediate=function(e){if(e!==0){var n=this.getIncrementScrollOperation(e);n.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(n.finalScrollPosition))}},t.prototype.scrollTo=function(e){if(this.isRTL()){this.scrollToImplRTL(e);return}this.scrollToImpl(e)},t.prototype.getRTLScroller=function(){return this.rtlScrollerInstance||(this.rtlScrollerInstance=this.rtlScrollerFactory()),this.rtlScrollerInstance},t.prototype.calculateCurrentTranslateX=function(){var e=this.adapter.getScrollContentStyleValue("transform");if(e==="none")return 0;var n=/\((.+?)\)/.exec(e);if(!n)return 0;var i=n[1],a=un(i.split(","),6);a[0],a[1],a[2],a[3];var s=a[4];return a[5],parseFloat(s)},t.prototype.clampScrollValue=function(e){var n=this.calculateScrollEdges();return Math.min(Math.max(n.left,e),n.right)},t.prototype.computeCurrentScrollPositionRTL=function(){var e=this.calculateCurrentTranslateX();return this.getRTLScroller().getScrollPositionRTL(e)},t.prototype.calculateScrollEdges=function(){var e=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:e-n}},t.prototype.scrollToImpl=function(e){var n=this.getScrollPosition(),i=this.clampScrollValue(e),a=i-n;this.animate({finalScrollPosition:i,scrollDelta:a})},t.prototype.scrollToImplRTL=function(e){var n=this.getRTLScroller().scrollToRTL(e);this.animate(n)},t.prototype.getIncrementScrollOperation=function(e){if(this.isRTL())return this.getRTLScroller().incrementScrollRTL(e);var n=this.getScrollPosition(),i=e+n,a=this.clampScrollValue(i),s=a-n;return{finalScrollPosition:a,scrollDelta:s}},t.prototype.animate=function(e){var n=this;e.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(e.finalScrollPosition),this.adapter.setScrollContentStyleProperty("transform","translateX("+e.scrollDelta+"px)"),this.adapter.computeScrollAreaClientRect(),requestAnimationFrame(function(){n.adapter.addClass(t.cssClasses.ANIMATING),n.adapter.setScrollContentStyleProperty("transform","none")}),this.isAnimating=!0)},t.prototype.stopScrollAnimation=function(){this.isAnimating=!1;var e=this.getAnimatingScrollPosition();this.adapter.removeClass(t.cssClasses.ANIMATING),this.adapter.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter.setScrollAreaScrollLeft(e)},t.prototype.getAnimatingScrollPosition=function(){var e=this.calculateCurrentTranslateX(),n=this.adapter.getScrollAreaScrollLeft();return this.isRTL()?this.getRTLScroller().getAnimatingScrollPosition(n,e):n-e},t.prototype.rtlScrollerFactory=function(){var e=this.adapter.getScrollAreaScrollLeft();this.adapter.setScrollAreaScrollLeft(e-1);var n=this.adapter.getScrollAreaScrollLeft();if(n<0)return this.adapter.setScrollAreaScrollLeft(e),new wo(this.adapter);var i=this.adapter.computeScrollAreaClientRect(),a=this.adapter.computeScrollContentClientRect(),s=Math.round(a.right-i.right);return this.adapter.setScrollAreaScrollLeft(e),s===n?new _o(this.adapter):new mo(this.adapter)},t.prototype.isRTL=function(){return this.adapter.getScrollContentStyleValue("direction")==="rtl"},t}(_e);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var nn;function bo(r,t){if(t===void 0&&(t=!0),t&&typeof nn<"u")return nn;var e=r.createElement("div");e.classList.add(si.SCROLL_TEST),r.body.appendChild(e);var n=e.offsetHeight-e.clientHeight;return r.body.removeChild(e),t&&(nn=n),n}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Qo={ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"},xo={CONTENT_SELECTOR:".mdc-tab-indicator__content"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var he=function(r){Xt(t,r);function t(e){return r.call(this,Rt(Rt({},t.defaultAdapter),e))||this}return Object.defineProperty(t,"cssClasses",{get:function(){return Qo},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return xo},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},computeContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setContentStyleProperty:function(){}}},enumerable:!1,configurable:!0}),t.prototype.computeContentClientRect=function(){return this.adapter.computeContentClientRect()},t}(_e);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Io=function(r){Xt(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.activate=function(){this.adapter.addClass(he.cssClasses.ACTIVE)},t.prototype.deactivate=function(){this.adapter.removeClass(he.cssClasses.ACTIVE)},t}(he);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Bn=function(r){Xt(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.activate=function(e){if(!e){this.adapter.addClass(he.cssClasses.ACTIVE);return}var n=this.computeContentClientRect(),i=e.width/n.width,a=e.left-n.left;this.adapter.addClass(he.cssClasses.NO_TRANSITION),this.adapter.setContentStyleProperty("transform","translateX("+a+"px) scaleX("+i+")"),this.computeContentClientRect(),this.adapter.removeClass(he.cssClasses.NO_TRANSITION),this.adapter.addClass(he.cssClasses.ACTIVE),this.adapter.setContentStyleProperty("transform","")},t.prototype.deactivate=function(){this.adapter.removeClass(he.cssClasses.ACTIVE)},t}(he);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ze={ACTIVE:"mdc-tab--active"},Re={ARIA_SELECTED:"aria-selected",CONTENT_SELECTOR:".mdc-tab__content",INTERACTED_EVENT:"MDCTab:interacted",RIPPLE_SELECTOR:".mdc-tab__ripple",TABINDEX:"tabIndex",TAB_INDICATOR_SELECTOR:".mdc-tab-indicator"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var So=function(r){Xt(t,r);function t(e){var n=r.call(this,Rt(Rt({},t.defaultAdapter),e))||this;return n.focusOnActivate=!0,n}return Object.defineProperty(t,"cssClasses",{get:function(){return ze},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return Re},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},activateIndicator:function(){},deactivateIndicator:function(){},notifyInteracted:function(){},getOffsetLeft:function(){return 0},getOffsetWidth:function(){return 0},getContentOffsetLeft:function(){return 0},getContentOffsetWidth:function(){return 0},focus:function(){}}},enumerable:!1,configurable:!0}),t.prototype.handleClick=function(){this.adapter.notifyInteracted()},t.prototype.isActive=function(){return this.adapter.hasClass(ze.ACTIVE)},t.prototype.setFocusOnActivate=function(e){this.focusOnActivate=e},t.prototype.activate=function(e){this.adapter.addClass(ze.ACTIVE),this.adapter.setAttr(Re.ARIA_SELECTED,"true"),this.adapter.setAttr(Re.TABINDEX,"0"),this.adapter.activateIndicator(e),this.focusOnActivate&&this.adapter.focus()},t.prototype.deactivate=function(){this.isActive()&&(this.adapter.removeClass(ze.ACTIVE),this.adapter.setAttr(Re.ARIA_SELECTED,"false"),this.adapter.setAttr(Re.TABINDEX,"-1"),this.adapter.deactivateIndicator())},t.prototype.computeDimensions=function(){var e=this.adapter.getOffsetWidth(),n=this.adapter.getOffsetLeft(),i=this.adapter.getContentOffsetWidth(),a=this.adapter.getContentOffsetLeft();return{contentLeft:n+a,contentRight:n+a+i,rootLeft:n,rootRight:n+e}},t}(_e);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Mt={ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",ENTER_KEY:"Enter",HOME_KEY:"Home",SPACE_KEY:"Space",TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab"},ce={ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,ENTER_KEYCODE:13,EXTRA_SCROLL_AMOUNT:20,HOME_KEYCODE:36,SPACE_KEYCODE:32};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Se=new Set;Se.add(Mt.ARROW_LEFT_KEY);Se.add(Mt.ARROW_RIGHT_KEY);Se.add(Mt.END_KEY);Se.add(Mt.HOME_KEY);Se.add(Mt.ENTER_KEY);Se.add(Mt.SPACE_KEY);var Fe=new Map;Fe.set(ce.ARROW_LEFT_KEYCODE,Mt.ARROW_LEFT_KEY);Fe.set(ce.ARROW_RIGHT_KEYCODE,Mt.ARROW_RIGHT_KEY);Fe.set(ce.END_KEYCODE,Mt.END_KEY);Fe.set(ce.HOME_KEYCODE,Mt.HOME_KEY);Fe.set(ce.ENTER_KEYCODE,Mt.ENTER_KEY);Fe.set(ce.SPACE_KEYCODE,Mt.SPACE_KEY);var Fo=function(r){Xt(t,r);function t(e){var n=r.call(this,Rt(Rt({},t.defaultAdapter),e))||this;return n.useAutomaticActivation=!1,n}return Object.defineProperty(t,"strings",{get:function(){return Mt},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return ce},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{scrollTo:function(){},incrementScroll:function(){},getScrollPosition:function(){return 0},getScrollContentWidth:function(){return 0},getOffsetWidth:function(){return 0},isRTL:function(){return!1},setActiveTab:function(){},activateTabAtIndex:function(){},deactivateTabAtIndex:function(){},focusTabAtIndex:function(){},getTabIndicatorClientRectAtIndex:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabDimensionsAtIndex:function(){return{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:function(){return-1},getFocusedTabIndex:function(){return-1},getIndexOfTabById:function(){return-1},getTabListLength:function(){return 0},notifyTabActivated:function(){}}},enumerable:!1,configurable:!0}),t.prototype.setUseAutomaticActivation=function(e){this.useAutomaticActivation=e},t.prototype.activateTab=function(e){var n=this.adapter.getPreviousActiveTabIndex();if(!(!this.indexIsInRange(e)||e===n)){var i;n!==-1&&(this.adapter.deactivateTabAtIndex(n),i=this.adapter.getTabIndicatorClientRectAtIndex(n)),this.adapter.activateTabAtIndex(e,i),this.scrollIntoView(e),this.adapter.notifyTabActivated(e)}},t.prototype.handleKeyDown=function(e){var n=this.getKeyFromEvent(e);if(n!==void 0)if(this.isActivationKey(n)||e.preventDefault(),this.useAutomaticActivation){if(this.isActivationKey(n))return;var i=this.determineTargetFromKey(this.adapter.getPreviousActiveTabIndex(),n);this.adapter.setActiveTab(i),this.scrollIntoView(i)}else{var a=this.adapter.getFocusedTabIndex();if(this.isActivationKey(n))this.adapter.setActiveTab(a);else{var i=this.determineTargetFromKey(a,n);this.adapter.focusTabAtIndex(i),this.scrollIntoView(i)}}},t.prototype.handleTabInteraction=function(e){this.adapter.setActiveTab(this.adapter.getIndexOfTabById(e.detail.tabId))},t.prototype.scrollIntoView=function(e){if(this.indexIsInRange(e)){if(e===0){this.adapter.scrollTo(0);return}if(e===this.adapter.getTabListLength()-1){this.adapter.scrollTo(this.adapter.getScrollContentWidth());return}if(this.isRTL()){this.scrollIntoViewImplRTL(e);return}this.scrollIntoViewImpl(e)}},t.prototype.determineTargetFromKey=function(e,n){var i=this.isRTL(),a=this.adapter.getTabListLength()-1,s=n===Mt.END_KEY,c=n===Mt.ARROW_LEFT_KEY&&!i||n===Mt.ARROW_RIGHT_KEY&&i,l=n===Mt.ARROW_RIGHT_KEY&&!i||n===Mt.ARROW_LEFT_KEY&&i,g=e;return s?g=a:c?g-=1:l?g+=1:g=0,g<0?g=a:g>a&&(g=0),g},t.prototype.calculateScrollIncrement=function(e,n,i,a){var s=this.adapter.getTabDimensionsAtIndex(n),c=s.contentLeft-i-a,l=s.contentRight-i,g=l-ce.EXTRA_SCROLL_AMOUNT,L=c+ce.EXTRA_SCROLL_AMOUNT;return n<e?Math.min(g,0):Math.max(L,0)},t.prototype.calculateScrollIncrementRTL=function(e,n,i,a,s){var c=this.adapter.getTabDimensionsAtIndex(n),l=s-c.contentLeft-i,g=s-c.contentRight-i-a,L=g+ce.EXTRA_SCROLL_AMOUNT,m=l-ce.EXTRA_SCROLL_AMOUNT;return n>e?Math.max(L,0):Math.min(m,0)},t.prototype.findAdjacentTabIndexClosestToEdge=function(e,n,i,a){var s=n.rootLeft-i,c=n.rootRight-i-a,l=s+c,g=s<0||l<0,L=c>0||l>0;return g?e-1:L?e+1:-1},t.prototype.findAdjacentTabIndexClosestToEdgeRTL=function(e,n,i,a,s){var c=s-n.rootLeft-a-i,l=s-n.rootRight-i,g=c+l,L=c>0||g>0,m=l<0||g<0;return L?e+1:m?e-1:-1},t.prototype.getKeyFromEvent=function(e){return Se.has(e.key)?e.key:Fe.get(e.keyCode)},t.prototype.isActivationKey=function(e){return e===Mt.SPACE_KEY||e===Mt.ENTER_KEY},t.prototype.indexIsInRange=function(e){return e>=0&&e<this.adapter.getTabListLength()},t.prototype.isRTL=function(){return this.adapter.isRTL()},t.prototype.scrollIntoViewImpl=function(e){var n=this.adapter.getScrollPosition(),i=this.adapter.getOffsetWidth(),a=this.adapter.getTabDimensionsAtIndex(e),s=this.findAdjacentTabIndexClosestToEdge(e,a,n,i);if(this.indexIsInRange(s)){var c=this.calculateScrollIncrement(e,s,n,i);this.adapter.incrementScroll(c)}},t.prototype.scrollIntoViewImplRTL=function(e){var n=this.adapter.getScrollPosition(),i=this.adapter.getOffsetWidth(),a=this.adapter.getTabDimensionsAtIndex(e),s=this.adapter.getScrollContentWidth(),c=this.findAdjacentTabIndexClosestToEdgeRTL(e,a,n,i,s);if(this.indexIsInRange(c)){var l=this.calculateScrollIncrementRTL(e,c,n,i,s);this.adapter.incrementScroll(l)}},t}(_e),Co=It("<div><div><div><!></div></div></div>");function Ao(r,t){pt(t,!0);const{matches:e}=Ye;let n=f(t,"use",19,()=>[]),i=f(t,"class",3,""),a=f(t,"align",3,void 0),s=f(t,"scrollArea$use",19,()=>[]),c=f(t,"scrollArea$class",3,""),l=f(t,"scrollContent$use",19,()=>[]),g=f(t,"scrollContent$class",3,""),L=kt(t,["$$slots","$$events","$$legacy","use","class","align","scrollArea$use","scrollArea$class","scrollContent$use","scrollContent$class","children"]),m,d=Lt(void 0),h,p,_=B({}),y=B({}),v=B({}),w=B({});ae(()=>(Y(d,B(new yo({eventTargetMatchesSelector:(A,W)=>e(A,W),addClass:I,removeClass:C,addScrollAreaClass:E,setScrollAreaStyleProperty:Q,setScrollContentStyleProperty:T,getScrollContentStyleValue:k,setScrollAreaScrollLeft:A=>h.scrollLeft=A,getScrollAreaScrollLeft:()=>h.scrollLeft,getScrollContentOffsetWidth:()=>p.offsetWidth,getScrollAreaOffsetWidth:()=>h.offsetWidth,computeScrollAreaClientRect:()=>h.getBoundingClientRect(),computeScrollContentClientRect:()=>p.getBoundingClientRect(),computeHorizontalScrollbarHeight:()=>bo(document)}))),o(d).init(),()=>{var A;(A=o(d))==null||A.destroy()}));function I(A){_[A]||(_[A]=!0)}function C(A){(!(A in _)||_[A])&&(_[A]=!1)}function E(A){y[A]||(y[A]=!0)}function Q(A,W){v[A]!=W&&(W===""||W==null?delete v[A]:v[A]=W)}function T(A,W){w[A]!=W&&(W===""||W==null?delete w[A]:w[A]=W)}function k(A){return A in w?w[A]:getComputedStyle(p).getPropertyValue(A)}function S(){if(o(d)==null)throw new Error("Instance is undefined.");return o(d).getScrollPosition()}function V(){return p.offsetWidth}function $(A){var W;(W=o(d))==null||W.incrementScroll(A)}function G(A){var W;(W=o(d))==null||W.scrollTo(A)}function x(){return m}var N=Co();let u;var b=_t(N),R=A=>{var W;o(d)&&o(d).handleInteraction(),(W=t.scrollArea$onwheel)==null||W.call(t,A)},X=A=>{var W;o(d)&&o(d).handleInteraction(),(W=t.scrollArea$ontouchstart)==null||W.call(t,A)},Z=A=>{var W;o(d)&&o(d).handleInteraction(),(W=t.scrollArea$onpointerdown)==null||W.call(t,A)},ht=A=>{var W;o(d)&&o(d).handleInteraction(),(W=t.scrollArea$onmousedown)==null||W.call(t,A)},ot=A=>{var W;o(d)&&o(d).handleInteraction(),(W=t.scrollArea$onkeydown)==null||W.call(t,A)};let rt;var at=_t(b),Nt=A=>{var W;o(d)&&o(d).handleTransitionEnd(A),(W=t.scrollContent$ontransitionend)==null||W.call(t,A)};let Ct;var Ht=_t(at);return Qt(Ht,()=>t.children??ft),yt(at),dt(at,A=>p=A,()=>p),$t(at,(A,W)=>nt==null?void 0:nt(A,W),l),yt(b),dt(b,A=>h=A,()=>h),$t(b,(A,W)=>nt==null?void 0:nt(A,W),s),yt(N),dt(N,A=>m=A,()=>m),$t(N,(A,W)=>nt==null?void 0:nt(A,W),n),Ut((A,W,te,Zt,j,M,U,tt)=>{u=Kt(N,u,{class:A,...W}),rt=Kt(b,rt,{class:te,style:Zt,...j,onwheel:R,ontouchstart:X,onpointerdown:Z,onmousedown:ht,onkeydown:ot}),Ct=Kt(at,Ct,{class:M,style:U,...tt,ontransitionend:Nt})},[()=>Pt({[i()]:!0,"mdc-tab-scroller":!0,"mdc-tab-scroller--align-start":a()==="start","mdc-tab-scroller--align-end":a()==="end","mdc-tab-scroller--align-center":a()==="center",..._}),()=>He(L,["scrollArea$","scrollContent$"]),()=>Pt({[c()]:!0,"mdc-tab-scroller__scroll-area":!0,...y}),()=>Object.entries(v).map(([A,W])=>`${A}: ${W};`).join(" "),()=>we(L,"scrollArea$"),()=>Pt({[g()]:!0,"mdc-tab-scroller__scroll-content":!0}),()=>Object.entries(w).map(([A,W])=>`${A}: ${W};`).join(" "),()=>we(L,"scrollContent$")]),D(r,N),mt({getScrollPosition:S,getScrollContentWidth:V,incrementScroll:$,scrollTo:G,getElement:x})}var Eo=It("<div><!></div>");function ko(r,t){pt(t,!0);let e=f(t,"use",19,()=>[]),n=f(t,"class",3,""),i=f(t,"tabs",19,()=>[]),a=f(t,"key",3,u=>u),s=f(t,"focusOnActivate",3,!0),c=f(t,"focusOnProgrammatic",3,!1),l=f(t,"useAutomaticActivation",3,!0),g=f(t,"active",15),L=f(t,"tabindex",3,0),m=kt(t,["$$slots","$$events","$$legacy","use","class","tabs","key","focusOnActivate","focusOnProgrammatic","useAutomaticActivation","active","tabindex","tab"]),d,h=Lt(void 0),p,_=Lt(B(g()==null?-1:i().findIndex(u=>g()&&a()(u)===a()(g())))),y=B({}),v=Lt(new WeakMap),w=!1;lt("SMUI:tab:focusOnActivate",s()),lt("SMUI:tab:initialActive",{active:g()==null?null:a()(g()),key:a()}),Tt(()=>{(g()==null&&o(_)!==-1||g()!=null&&o(_)===-1||g()!=null&&a()(g())!==a()(i()[o(_)]))&&(Y(_,B(i().findIndex(u=>g()&&a()(u)===a()(g())))),o(h)&&(w=!c(),o(h).activateTab(o(_)),w=!1))}),Tt(()=>{if(i().length){const u=i()[0]instanceof Object?o(v).get(i()[0]):y[i()[0]];u&&u.forceAccessible(o(_)===-1)}});let I=!1;Tt(()=>{if(!o(h)){I=!1;return}I||(I=!0,o(h).setUseAutomaticActivation(l()))}),lt("SMUI:tab:mount",u=>{E(u.tabId,u)}),lt("SMUI:tab:unmount",u=>{Q(u.tabId)}),ae(()=>(Y(h,B(new Fo({scrollTo:u=>p.scrollTo(u),incrementScroll:u=>p.incrementScroll(u),getScrollPosition:()=>p.getScrollPosition(),getScrollContentWidth:()=>p.getScrollContentWidth(),getOffsetWidth:()=>k().offsetWidth,isRTL:()=>getComputedStyle(k()).getPropertyValue("direction")==="rtl",setActiveTab:u=>{var b;g(i()[u]),Y(_,B(u)),(b=o(h))==null||b.activateTab(u)},activateTabAtIndex:(u,b)=>{var R;return(R=C(i()[u]))==null?void 0:R.activate(b,w)},deactivateTabAtIndex:u=>{var b;return(b=C(i()[u]))==null?void 0:b.deactivate()},focusTabAtIndex:u=>{var b;return(b=C(i()[u]))==null?void 0:b.focus()},getTabIndicatorClientRectAtIndex:u=>{var b;return((b=C(i()[u]))==null?void 0:b.computeIndicatorClientRect())??new DOMRect},getTabDimensionsAtIndex:u=>{var b;return((b=C(i()[u]))==null?void 0:b.computeDimensions())??{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:()=>{var u;for(let b=0;b<i().length;b++)if((u=C(i()[b]))!=null&&u.active)return b;return-1},getFocusedTabIndex:()=>{const u=i().map(R=>{var X;return(X=C(R))==null?void 0:X.element}),b=document.activeElement;return u.indexOf(b)},getIndexOfTabById:u=>i().findIndex(b=>a()(b)===a()(u)),getTabListLength:()=>i().length,notifyTabActivated:u=>re(k(),"SMUITabBarActivated",{index:u})}))),o(h).init(),()=>{var u;(u=o(h))==null||u.destroy()}));function C(u){return u instanceof Object?o(v).get(u):y[u]}function E(u,b){u instanceof Object?(o(v).set(u,b),Y(v,o(v))):y[u]=b}function Q(u){u instanceof Object?(o(v).delete(u),Y(v,o(v))):delete y[u]}function T(u){var b;(b=o(h))==null||b.scrollIntoView(u)}function k(){return d}var S=Eo(),V=u=>{var b;o(h)&&o(h).handleKeyDown(u),(b=t.onkeydown)==null||b.call(t,u)},$=u=>{var b;o(h)&&o(h).handleTabInteraction(u),(b=t.onSMUITabInteracted)==null||b.call(t,u)};let G;var x=_t(S),N=bt(()=>we(m,"tabScroller$"));return dt(Ao(x,Wt(()=>o(N),{children:(u,b)=>{var R=ct(),X=J(R);Yn(X,17,i,Z=>a()(Z),(Z,ht)=>{var ot=ct(),rt=J(ot);Qt(rt,()=>t.tab,()=>o(ht)),D(Z,ot)}),D(u,R)},$$slots:{default:!0}})),u=>p=u,()=>p),yt(S),dt(S,u=>d=u,()=>d),$t(S,(u,b)=>nt==null?void 0:nt(u,b),e),Ut((u,b)=>G=Kt(S,G,{class:u,role:"tablist",tabindex:L(),...b,onkeydown:V,onSMUITabInteracted:$}),[()=>Pt({[n()]:!0,"mdc-tab-bar":!0}),()=>He(m,["tabScroller$"])]),D(r,S),mt({scrollIntoView:T,getElement:k})}var Mo=It("<span><span><!></span></span>");function To(r,t){pt(t,!0);let e=f(t,"use",19,()=>[]),n=f(t,"class",3,""),i=f(t,"active",15,!1),a=f(t,"type",3,"underline"),s=f(t,"transition",3,"slide"),c=f(t,"content$use",19,()=>[]),l=f(t,"content$class",3,""),g=kt(t,["$$slots","$$events","$$legacy","use","class","active","type","transition","content$use","content$class","children"]),L,m=Lt(void 0),d,h=Lt(B({})),p=Lt(B({})),_=B([]),y=s();Tt(()=>{y!==s()&&(y=s(),o(m)&&o(m).destroy(),Y(h,B({})),Y(p,B({})),Y(m,B(v())),o(m).init())}),Ki(()=>{_.length&&requestAnimationFrame(()=>{const u=_.shift()??[];for(const b of u)b()})}),ae(()=>(Y(m,B(v())),o(m).init(),()=>{var u;(u=o(m))==null||u.destroy()}));function v(){const u={fade:Io,slide:Bn}[s()]||Bn;return new u({addClass:(...b)=>w(()=>I(...b)),removeClass:(...b)=>w(()=>C(...b)),computeContentClientRect:k,setContentStyleProperty:(...b)=>w(()=>E(...b))})}function w(u){_.length?_[_.length-1].push(u):u()}function I(u){o(h)[u]||(o(h)[u]=!0)}function C(u){(!(u in o(h))||o(h)[u])&&(o(h)[u]=!1)}function E(u,b){o(p)[u]!=b&&(b===""||b==null?delete o(p)[u]:o(p)[u]=b)}function Q(u){var b;i(!0),(b=o(m))==null||b.activate(u)}function T(){var u;i(!1),(u=o(m))==null||u.deactivate()}function k(){return _.push([]),d.getBoundingClientRect()}function S(){return L}var V=Mo();let $;var G=_t(V);let x;var N=_t(G);return Qt(N,()=>t.children??ft),yt(G),dt(G,u=>d=u,()=>d),$t(G,(u,b)=>nt==null?void 0:nt(u,b),c),yt(V),dt(V,u=>L=u,()=>L),$t(V,(u,b)=>nt==null?void 0:nt(u,b),e),Ut((u,b,R,X,Z)=>{$=Kt(V,$,{class:u,...b}),x=Kt(G,x,{class:R,style:X,"aria-hidden":a()==="icon"?"true":void 0,...Z})},[()=>Pt({[n()]:!0,"mdc-tab-indicator":!0,"mdc-tab-indicator--active":i(),"mdc-tab-indicator--fade":s()==="fade",...o(h)}),()=>He(g,["content$"]),()=>Pt({[l()]:!0,"mdc-tab-indicator__content":!0,"mdc-tab-indicator__content--underline":a()==="underline","mdc-tab-indicator__content--icon":a()==="icon"}),()=>Object.entries(o(p)).map(([u,b])=>`${u}: ${b};`).join(" "),()=>we(g,"content$")]),D(r,V),mt({activate:Q,deactivate:T,computeContentClientRect:k,getElement:S})}var Ro=It('<span><!> <!></span> <!> <span class="mdc-tab__ripple"></span>',1);function Oo(r,t){pt(t,!0);const e=j=>{var M=bt(()=>we(_,"tabIndicator$"));dt(To(j,Wt(()=>o(M),{get active(){return o(S)},set active(U){Y(S,B(U))},children:(U,tt)=>{var wt=ct(),Ot=J(wt);Qt(Ot,()=>t.tabIndicator??ft),D(U,wt)},$$slots:{default:!0}})),U=>I=U,()=>I)};let n=f(t,"use",19,()=>[]),i=f(t,"class",3,""),a=f(t,"style",3,""),s=f(t,"ripple",3,!0),c=f(t,"stacked",3,!1),l=f(t,"minWidth",3,!1),g=f(t,"indicatorSpanOnlyContent",3,!1),L=f(t,"href",3,void 0),m=f(t,"content$use",19,()=>[]),d=f(t,"content$class",3,""),h=f(t,"component",3,ke),p=f(t,"tag",19,()=>L()==null?"button":"a"),_=kt(t,["$$slots","$$events","$$legacy","use","class","style","tab","ripple","stacked","minWidth","indicatorSpanOnlyContent","href","content$use","content$class","component","tag","children","tabIndicator"]),y,v=Lt(void 0),w,I,C=B({}),E=B({}),Q=B({}),T=Ft("SMUI:tab:focusOnActivate");const k=Ft("SMUI:tab:initialActive");let S=Lt(B(k.active!=null&&k.key(t.tab)===k.active)),V=Lt(!1);if(lt("SMUI:label:context","tab"),lt("SMUI:icon:context","tab"),!t.tab)throw new Error("The tab property is required! It should be passed down from the TabBar to the Tab.");let $=!1;Tt(()=>{if(!o(v)){$=!1;return}$||($=!0,o(v).setFocusOnActivate(T))});const G=Ft("SMUI:tab:mount"),x=Ft("SMUI:tab:unmount");ae(()=>{Y(v,B(new So({setAttr:X,addClass:u,removeClass:b,hasClass:N,activateIndicator:M=>I.activate(M),deactivateIndicator:()=>I.deactivate(),notifyInteracted:()=>re(rt(),"SMUITabInteracted",{tabId:t.tab}),getOffsetLeft:()=>rt().offsetLeft,getOffsetWidth:()=>rt().offsetWidth,getContentOffsetLeft:()=>w.offsetLeft,getContentOffsetWidth:()=>w.offsetWidth,focus:ot})));const j={tabId:t.tab,get element(){return rt()},get active(){return o(S)},forceAccessible(M){Y(V,B(M))},computeIndicatorClientRect:()=>I.computeContentClientRect(),computeDimensions:()=>{if(o(v)==null)throw new Error("Instance is undefined.");return o(v).computeDimensions()},focus:ot,activate:Z,deactivate:ht};return G&&G(j),o(v).init(),()=>{var M;x&&x(j),(M=o(v))==null||M.destroy()}});function N(j){return j in C?C[j]:rt().classList.contains(j)}function u(j){C[j]||(C[j]=!0)}function b(j){(!(j in C)||C[j])&&(C[j]=!1)}function R(j,M){E[j]!=M&&(M===""||M==null?delete E[j]:E[j]=M)}function X(j,M){Q[j]!==M&&(Q[j]=M)}function Z(j,M){var U,tt,wt;Y(S,!0),M&&((U=o(v))==null||U.setFocusOnActivate(!1)),(tt=o(v))==null||tt.activate(j),M&&((wt=o(v))==null||wt.setFocusOnActivate(T))}function ht(){var j;Y(S,!1),(j=o(v))==null||j.deactivate()}function ot(){rt().focus()}function rt(){return y.getElement()}var at=ct(),Nt=J(at);const Ct=bt(()=>[[Ze,{ripple:s(),unbounded:!1,addClass:u,removeClass:b,addStyle:R}],...n()]),Ht=bt(()=>Pt({[i()]:!0,"mdc-tab":!0,"mdc-tab--active":o(S),"mdc-tab--stacked":c(),"mdc-tab--min-width":l(),...C})),A=bt(()=>Object.entries(E).map(([j,M])=>`${j}: ${M};`).concat([a()]).join(" ")),W=bt(()=>o(S)?"true":"false"),te=bt(()=>o(S)||o(V)?"0":"-1");var Zt=bt(()=>He(_,["content$","tabIndicator$"]));return Ee(Nt,h,(j,M)=>{dt(M(j,Wt({get tag(){return p()},get use(){return o(Ct)},get class(){return o(Ht)},get style(){return o(A)},role:"tab",get"aria-selected"(){return o(W)},get tabindex(){return o(te)},get href(){return L()}},()=>Q,()=>o(Zt),{onclick:U=>{var tt;(tt=t.onclick)==null||tt.call(t,U),!U.defaultPrevented&&o(v)&&o(v).handleClick()},children:(U,tt)=>{var wt=Ro(),Ot=J(wt);let ee;var se=_t(Ot);Qt(se,()=>t.children??ft);var oe=ut(se,2);{var Jt=gt=>{e(gt)};At(oe,gt=>{g()&&gt(Jt)})}yt(Ot),dt(Ot,gt=>w=gt,()=>w),$t(Ot,(gt,zt)=>nt==null?void 0:nt(gt,zt),m);var ne=ut(Ot,2);{var q=gt=>{e(gt)};At(ne,gt=>{g()||gt(q)})}jt(2),Ut((gt,zt)=>ee=Kt(Ot,ee,{class:gt,...zt}),[()=>Pt({[d()]:!0,"mdc-tab__content":!0}),()=>we(_,"content$")]),D(U,wt)},$$slots:{default:!0}})),U=>y=U,()=>y)}),D(r,at),mt({activate:Z,deactivate:ht,focus:ot,getElement:rt})}var Do=It("<div><!></div>");function rn(r,t){pt(t,!0);let e=f(t,"use",19,()=>[]),n=f(t,"class",3,""),i=f(t,"variant",3,"raised"),a=f(t,"square",3,!1),s=f(t,"color",3,"default"),c=f(t,"elevation",3,1),l=f(t,"transition",3,!1),g=kt(t,["$$slots","$$events","$$legacy","use","class","variant","square","color","elevation","transition","children"]),L;function m(){return L}var d=Do();let h;var p=_t(d);return Qt(p,()=>t.children??ft),yt(d),dt(d,_=>L=_,()=>L),$t(d,(_,y)=>nt==null?void 0:nt(_,y),e),Ut(_=>h=Kt(d,h,{class:_,...g}),[()=>Pt({[n()]:!0,"smui-paper":!0,"smui-paper--raised":i()==="raised","smui-paper--unelevated":i()==="unelevated","smui-paper--outlined":i()==="outlined",["smui-paper--elevation-z"+c()]:c()!==0&&i()==="raised","smui-paper--rounded":!a(),["smui-paper--color-"+s()]:s()!=="default","smui-paper-transition":l()})]),D(r,d),mt({getElement:m})}function an(r,t){pt(t,!0);let e=kt(t,["$$slots","$$events","$$legacy","children"]),n;function i(){return n.getElement()}return dt(be(r,Wt({_smuiClass:"smui-paper__content",tag:"div"},()=>e,{children:(a,s)=>{var c=ct(),l=J(c);Qt(l,()=>t.children??ft),D(a,c)},$$slots:{default:!0}})),a=>n=a,()=>n),mt({getElement:i})}var Po=It('<span style="font-size: 10pt">Press x on gamepad / q on keyboard to select an item.</span>'),No=It("<!> <!>",1),Uo=It("<!> <!>",1),Ho=It("<br> <br>",1),Bo=It("Toggle drawer<br>",1),Wo=It('<main class="main-content"><div class="mdc-typography--body1 svelte-14waqp"> <br> <!><br> <br> <i>(Button 9 is OPTIONS on the DS4-controller)</i><br> <!> <br> Use the right thumbstick to control this virtual joystick, the keys i j k l or the mouse/touch:<br> <!> <div style="position: relative; left: 210px; top: -200px"> <br> </div></div></main>'),Ko=It("<!> <!> <!>",1),Vo=It('<div class="drawer-container"><!> <!></div> <!> <!>',1);function $o(r,t){pt(t,!0);let e=Lt("First"),n=Lt(B([0,0])),i=Lt(0),a=B({gamepad:-1,buttons:[z.DOWN],keys:["e"],name:"my button"}),s=B({gamepad:-1,buttons:[z.VIEW],keys:["q"],name:"toggle drawer"}),c=B({gamepad:-1,buttons:[z.RIGHT],keys:["q"],name:"cancel"});function l(C){return C.gamepad===-1?"any connected controller":`The controller with id "${C.gamepad}"`}let g=Lt(!1);const L=["Main","Second","Third","Settings","Fifth"];let m=Lt(0),d=Lt(B(L[0])),h=Lt(!1);var p=Vo(),_=J(p),y=_t(_);js(y,{variant:"dismissible",get open(){return o(g)},set open(C){Y(g,B(C))},children:(C,E)=>{var Q=Uo(),T=J(Q);Ys(T,{children:(S,V)=>{var $=No(),G=J($);Zs(G,{children:(N,u)=>{jt();var b=Qe("Gamepad Drawer");D(N,b)},$$slots:{default:!0}});var x=ut(G,2);Js(x,{children:(N,u)=>{var b=Po();D(N,b)},$$slots:{default:!0}}),D(S,$)},$$slots:{default:!0}});var k=ut(T,2);Hn(k,{children:(S,V)=>{ao(S,{onpressed:()=>(Y(d,B(L[o(m)])),!1),get selectedIndex(){return o(m)},set selectedIndex($){Y(m,B($))},children:($,G)=>{var x=ct(),N=J(x);Yn(N,17,()=>L,er,(u,b,R)=>{const X=bt(()=>o(m)===R);io(u,{onSMUIAction:()=>{Y(m,B(R)),console.log(o(m)),L[o(m)]==="Settings"&&(Y(h,!0),Y(e,"First"))},get selected(){return o(X)},children:(Z,ht)=>{ro(Z,{children:(ot,rt)=>{jt();var at=Qe();Ut(()=>xe(at,o(b))),D(ot,at)},$$slots:{default:!0}})},$$slots:{default:!0}})}),D($,x)},$$slots:{default:!0}})},$$slots:{default:!0}}),D(C,Q)},$$slots:{default:!0}});var v=ut(y,2);Xs(v,{class:"app-content",children:(C,E)=>{var Q=Wo(),T=_t(Q),k=_t(T),S=ut(k,3);tn(S,{get inputMapping(){return a},variant:"raised",cssclass:"my_button",onpressed:()=>(Vi(i),!1),children:(R,X)=>{var Z=Ho(),ht=ut(J(Z));jt(),Ut(()=>xe(ht,` You pressed ${o(i)??""} times.`)),D(R,Z)},$$slots:{default:!0}});var V=ut(S,2),$=ut(V,6);tn($,{get inputMapping(){return s},variant:"raised",onpressed:()=>(Y(g,!o(g)),!1),children:(R,X)=>{jt();var Z=Bo();jt(),D(R,Z)},$$slots:{default:!0}});var G=ut($,6);const x=bt(()=>({name:"my_joystick",gamepad:-1,axes_x:2,axes_y:3,key_x_pos:["l"],key_x_neg:["j"],key_y_pos:["k"],key_y_neg:["i"],button_x_pos:[z.DPAD_RIGHT],button_x_neg:[z.DPAD_LEFT],button_y_pos:[z.DPAD_DOWN],button_y_neg:[z.DPAD_UP],deadzoneX:.07,deadzoneY:.07,invert_x:!1,invert_y:!1}));ws(G,{get inputMapping(){return o(x)},style:"background-color: rgba(0, 0, 0, 0);",get position(){return o(n)},set position(R){Y(n,B(R))}});var N=ut(G,2),u=_t(N),b=ut(u,2);yt(N),yt(T),yt(Q),Ut((R,X)=>{xe(k,`Press button "${a.buttons[0]??""}" on ${R??""}, 
'${a.keys[0]??""}' on your keyboard or 
just click/touch to press this button:`),xe(V,` Press button "${s.buttons[0]??""}" on ${X??""}, 
'${s.keys[0]??""}' on your keyboard or 
just click/touch to toggle the drawer.`),xe(u,`X: ${o(n)[0]??""}`),xe(b,` Y: ${o(n)[1]??""}`)},[()=>l(a),()=>l(s)]),D(C,Q)},$$slots:{default:!0}}),yt(_);var w=ut(_,2);mr(w,{});var I=ut(w,2);vo(I,{get open(){return o(h)},set open(C){Y(h,B(C))},children:(C,E)=>{var Q=Ko(),T=J(Q);Hn(T,{id:"simple-content",children:(G,x)=>{ko(G,{tabs:["First","Second","Third"],get active(){return o(e)},set active(u){Y(e,B(u))},tab:(u,b=ft)=>{Oo(u,{get tab(){return b()},children:(R,X)=>{Pn(R,{children:(Z,ht)=>{jt();var ot=Qe();Ut(()=>xe(ot,b())),D(Z,ot)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{tab:!0}})},$$slots:{default:!0}});var k=ut(T,2);{var S=G=>{rn(G,{role:"tabpanel",variant:"unelevated",children:(x,N)=>{an(x,{children:(u,b)=>{jt();var R=Qe("Welcome to First! Press R1 to go to Second.");D(u,R)},$$slots:{default:!0}})},$$slots:{default:!0}})},V=G=>{var x=ct(),N=J(x);{var u=R=>{rn(R,{role:"tabpanel",variant:"unelevated",children:(X,Z)=>{an(X,{children:(ht,ot)=>{jt();var rt=Qe("Welcome to second!");D(ht,rt)},$$slots:{default:!0}})},$$slots:{default:!0}})},b=R=>{var X=ct(),Z=J(X);{var ht=ot=>{rn(ot,{role:"tabpanel",variant:"unelevated",children:(rt,at)=>{an(rt,{children:(Nt,Ct)=>{jt();var Ht=Qe("Welcome to third!");D(Nt,Ht)},$$slots:{default:!0}})},$$slots:{default:!0}})};At(Z,ot=>{o(d)==="Third"&&ot(ht)},!0)}D(R,X)};At(N,R=>{o(d)==="Second"?R(u):R(b,!1)},!0)}D(G,x)};At(k,G=>{o(d)==="First"?G(S):G(V,!1)})}var $=ut(k,2);Lo($,{children:(G,x)=>{tn(G,{get inputMapping(){return c},variant:"outlined",children:(N,u)=>{Pn(N,{children:(b,R)=>{jt();var X=Qe("quit");D(b,X)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),D(C,Q)},$$slots:{default:!0}}),D(r,p),mt()}export{$o as component};
