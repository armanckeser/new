var Jn=Array.isArray,Qn=Array.from,Xn=Object.isFrozen,nt=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,qn=Object.getOwnPropertyDescriptors,rt=Object.prototype,ut=Array.prototype,Dn=Object.getPrototypeOf;function et(n){return typeof n=="function"}const k=2,tn=4,D=8,rn=16,y=32,K=64,O=128,M=256,E=512,g=1024,R=2048,q=4096,b=8192,Rn=16384,un=32768,lt=65536,bn=1<<18,W=Symbol("$state"),st=Symbol("$state.frozen"),ot=Symbol("");function en(n){return n===this.v}function Cn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function ln(n){return!Cn(n,this.v)}function Nn(n){throw new Error("effect_in_teardown")}function jn(){throw new Error("effect_in_unowned_derived")}function Ln(n){throw new Error("effect_orphan")}function Mn(){throw new Error("effect_update_depth_exceeded")}function it(){throw new Error("hydration_failed")}function ft(n){throw new Error("props_invalid_value")}function Yn(){throw new Error("state_unsafe_mutation")}function sn(n){return{f:0,v:n,reactions:null,equals:en,version:0}}function at(n){var r;const t=sn(n);return t.equals=ln,c!==null&&c.l!==null&&((r=c.l).s??(r.s=[])).push(t),t}function In(n,t){return f!==null&&U()&&f.f&k&&Yn(),n.equals(t)||(n.v=t,n.version=Tn(),on(n,g),U()&&i!==null&&i.f&E&&!(i.f&y)&&(a!==null&&a.includes(n)?(h(i,g),B(i)):m===null?$n([n]):m.push(n))),t}function on(n,t){var r=n.reactions;if(r!==null)for(var u=U(),l=r.length,e=0;e<l;e++){var s=r[e],o=s.f;o&g||!u&&s===i||(h(s,t),o&(E|O)&&(o&k?on(s,R):B(s)))}}function fn(n){i===null&&f===null&&Ln(),f!==null&&f.f&O&&jn(),G&&Nn()}function Z(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function C(n,t,r,u=!0){var l=(n&K)!==0,e={ctx:c,deps:null,nodes:null,f:n|g,first:null,fn:t,last:null,next:null,parent:l?null:i,prev:null,teardown:null,transitions:null,version:0};if(r){var s=d;try{J(!0),P(e),e.f|=Rn}finally{J(s)}}else t!==null&&B(e);var o=r&&e.deps===null&&e.first===null&&e.nodes===null&&e.teardown===null;return!o&&!l&&u&&(i!==null&&Z(e,i),f!==null&&f.f&k&&Z(e,f)),e}function _t(n){const t=C(D,null,!1);return h(t,E),t.teardown=n,t}function ct(n){fn();var t=i!==null&&(i.f&D)!==0&&c!==null&&!c.m;if(t){var r=c;(r.e??(r.e=[])).push(n)}else{var u=an(n);return u}}function vt(n){return fn(),_n(n)}function pt(n){const t=C(K,n,!0);return()=>{$(t)}}function an(n){return C(tn,n,!1)}function _n(n){return C(D,n,!0)}function ht(n){return _n(n)}function wt(n,t=0){return C(D|rn|t,n,!0)}function Et(n,t=!0){return C(D|y,n,!0,t)}function cn(n){var t=n.teardown;if(t!==null){const r=G,u=f;Q(!0),X(null);try{t.call(null)}finally{Q(r),X(u)}}}function $(n,t=!0){var r=!1;if((t||n.f&bn)&&n.nodes!==null){for(var u=n.nodes.start,l=n.nodes.end;u!==null;){var e=u===l?null:u.nextSibling;u.remove(),u=e}r=!0}if(V(n,t&&!r),I(n,0),h(n,b),n.transitions)for(const o of n.transitions)o.stop();cn(n);var s=n.parent;s!==null&&n.f&y&&s.first!==null&&vn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.parent=n.fn=n.nodes=null}function vn(n){var t=n.parent,r=n.prev,u=n.next;r!==null&&(r.next=u),u!==null&&(u.prev=r),t!==null&&(t.first===n&&(t.first=u),t.last===n&&(t.last=r))}function yt(n,t){var r=[];pn(n,r,!0),Pn(r,()=>{$(n),t&&t()})}function Pn(n,t){var r=n.length;if(r>0){var u=()=>--r||t();for(var l of n)l.out(u)}else t()}function pn(n,t,r){if(!(n.f&q)){if(n.f^=q,n.transitions!==null)for(const s of n.transitions)(s.is_global||r)&&t.push(s);for(var u=n.first;u!==null;){var l=u.next,e=(u.f&un)!==0||(u.f&y)!==0;pn(u,t,e?r:!1),u=l}}}function mt(n){hn(n,!0)}function hn(n,t){if(n.f&q){n.f^=q,j(n)&&P(n);for(var r=n.first;r!==null;){var u=r.next,l=(r.f&un)!==0||(r.f&y)!==0;hn(r,l?t:!1),r=u}if(n.transitions!==null)for(const e of n.transitions)(e.is_global||t)&&e.in()}}const gt=()=>{};function Tt(n){return n()}function Bn(n){for(var t=0;t<n.length;t++)n[t]()}let Y=!1,H=[];function wn(){Y=!1;const n=H.slice();H=[],Bn(n)}function kt(n){Y||(Y=!0,queueMicrotask(wn)),H.push(n)}function Hn(){Y&&wn()}function Un(n){let t=k|g;i===null&&(t|=O);const r={deps:null,deriveds:null,equals:en,f:t,first:null,fn:n,last:null,reactions:null,v:null,version:0};if(f!==null&&f.f&k){var u=f;u.deriveds===null?u.deriveds=[r]:u.deriveds.push(r)}return r}function Ot(n){const t=Un(n);return t.equals=ln,t}function En(n){V(n);var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)zn(t[r])}}function yn(n){En(n);var t=kn(n),r=(x||n.f&O)&&n.deps!==null?R:E;h(n,r),n.equals(t)||(n.v=t,n.version=Tn())}function zn(n){En(n),I(n,0),h(n,b),n.first=n.last=n.deps=n.reactions=n.fn=null}const mn=0,Kn=1;let L=mn,N=!1,d=!1,G=!1;function J(n){d=n}function Q(n){G=n}let T=[],F=0,f=null;function X(n){f=n}let i=null,a=null,_=0,m=null;function $n(n){m=n}let gn=0,x=!1,c=null;function Tn(){return gn++}function U(){return c!==null&&c.l===null}function j(n){var s;var t=n.f;if(t&g)return!0;if(t&R){var r=n.deps;if(r!==null)for(var u=(t&O)!==0,l=0;l<r.length;l++){var e=r[l];if(j(e)&&yn(e),e.version>n.version)return!0;u&&!x&&!((s=e==null?void 0:e.reactions)!=null&&s.includes(n))&&(e.reactions??(e.reactions=[])).push(n)}h(n,E)}return!1}function Gn(n,t,r){throw n}function kn(n){var t=a,r=_,u=m,l=f,e=x;a=null,_=0,m=null,f=n.f&(y|K)?null:n,x=!d&&(n.f&O)!==0;try{var s=(0,n.fn)(),o=n.deps;if(a!==null){var v,p;if(o!==null){var S=_===0?a:o.slice(0,_).concat(a),A=S.length>16?new Set(S):null;for(p=_;p<o.length;p++)v=o[p],(A!==null?!A.has(v):!S.includes(v))&&On(n,v)}if(o!==null&&_>0)for(o.length=_+a.length,p=0;p<a.length;p++)o[_+p]=a[p];else n.deps=o=a;if(!x)for(p=_;p<o.length;p++){v=o[p];var w=v.reactions;w===null?v.reactions=[n]:w[w.length-1]!==n&&!w.includes(n)&&w.push(n)}}else o!==null&&_<o.length&&(I(n,_),o.length=_);return s}finally{a=t,_=r,m=u,f=l,x=e}}function On(n,t){const r=t.reactions;let u=0;if(r!==null){u=r.length-1;const l=r.indexOf(n);l!==-1&&(u===0?t.reactions=null:(r[l]=r[u],r.pop()))}u===0&&t.f&k&&(h(t,R),t.f&(O|M)||(t.f^=M),I(t,0))}function I(n,t){var r=n.deps;if(r!==null)for(var u=t===0?null:r.slice(0,t),l=new Set,e=t;e<r.length;e++){var s=r[e];l.has(s)||(l.add(s),(u===null||!u.includes(s))&&On(n,s))}}function V(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var u=r.next;$(r,t),r=u}}function P(n){var t=n.f;if(!(t&b)){h(n,E);var r=n.ctx,u=i,l=c;i=n,c=r;try{t&rn||V(n),cn(n);var e=kn(n);n.teardown=typeof e=="function"?e:null,n.version=gn}catch(s){Gn(s)}finally{i=u,c=l}}}function Sn(){F>1e3&&(F=0,Mn()),F++}function An(n){var t=n.length;if(t!==0){Sn();var r=d;d=!0;try{for(var u=0;u<t;u++){var l=n[u];if(l.first===null&&!(l.f&y))nn([l]);else{var e=[];xn(l,e),nn(e)}}}finally{d=r}}}function nn(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var u=n[r];!(u.f&(b|q))&&j(u)&&(P(u),u.deps===null&&u.first===null&&u.nodes===null&&(u.teardown===null?vn(u):u.fn=null))}}function Vn(){if(N=!1,F>1001)return;const n=T;T=[],An(n),N||(F=0)}function B(n){L===mn&&(N||(N=!0,queueMicrotask(Vn)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&y){if(!(r&E))return;h(t,R)}}T.push(t)}function xn(n,t){var r=n.first,u=[];n:for(;r!==null;){var l=r.f,e=(l&(b|q))===0,s=l&y,o=(l&E)!==0,v=r.first;if(e&&(!s||!o)){if(s&&h(r,E),l&D){if(!s&&j(r)&&(P(r),v=r.first),v!==null){r=v;continue}}else if(l&tn)if(s||o){if(v!==null){r=v;continue}}else u.push(r)}var p=r.next;if(p===null){let w=r.parent;for(;w!==null;){if(n===w)break n;var S=w.next;if(S!==null){r=S;continue n}w=w.parent}}r=p}for(var A=0;A<u.length;A++)v=u[A],t.push(v),xn(v,t)}function dn(n,t=!0){var r=L,u=T;try{Sn();const e=[];L=Kn,T=e,N=!1,t&&An(u);var l=n==null?void 0:n();return Hn(),(T.length>0||e.length>0)&&dn(),F=0,l}finally{L=r,T=u}}async function St(){await Promise.resolve(),dn()}function Fn(n){var t=n.f;if(t&b)return n.v;if(f!==null){var r=f.deps;a===null&&r!==null&&r[_]===n?_++:(r===null||_===0||r[_-1]!==n)&&(a===null?a=[n]:a[a.length-1]!==n&&a.push(n)),m!==null&&i!==null&&i.f&E&&!(i.f&y)&&m.includes(n)&&(h(i,g),B(i))}if(t&k){var u=n;if(j(u)&&yn(u),t&M){if(r=u.deps,r!==null)for(var l=0;l<r.length;l++){var e=r[l],s=e.reactions;s===null?e.reactions=[u]:s.includes(u)||s.push(u)}u.f^=M}}return n.v}function At(n){const t=f;try{return f=null,n()}finally{f=t}}const Wn=~(g|R|E);function h(n,t){n.f=n.f&Wn|t}function Zn(n){return typeof n=="object"&&n!==null&&typeof n.f=="number"}function xt(n,t=1){var r=+Fn(n);return In(n,r+t),r}function dt(n,t=!1,r){c={p:c,c:null,e:null,m:!1,s:n,x:null,l:null},t||(c.l={s:null,u:null,r1:[],r2:sn(!1)})}function Ft(n){const t=c;if(t!==null){const u=t.e;if(u!==null){t.e=null;for(var r=0;r<u.length;r++)an(u[r])}c=t.p,t.m=!0}return{}}function qt(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(W in n)z(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&W in r&&z(r)}}}function z(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let u in n)try{z(n[u],t)}catch{}const r=Dn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const u=qn(r);for(let l in u){const e=u[l].get;if(e)try{e.call(n)}catch{}}}}}function Dt(n){return Zn(n)?Fn(n):n}export{qn as $,yt as A,an as B,_n as C,sn as D,un as E,tt as F,ft as G,bn as H,ln as I,xt as J,et as K,lt as L,Un as M,Ot as N,Xn as O,st as P,rt as Q,ut as R,W as S,i as T,Dn as U,St as V,q as W,pn as X,Pn as Y,$ as Z,ot as _,ct as a,Dt as a0,At as b,c,Tt as d,qt as e,In as f,Fn as g,ht as h,Ft as i,nt as j,Jn as k,wt as l,at as m,gt as n,dn as o,dt as p,kt as q,Bn as r,Cn as s,_t as t,vt as u,it as v,Qn as w,pt as x,Et as y,mt as z};
