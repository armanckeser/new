import{l as M,z as A,y as x,A as D,E as K,B as Y,C as B,b,q as C,S as F,D as U,F as y,G as j,L as z,I as G,g as _,f as $,J as H,K as h,M as O,N as J,m as V,c as E,a as Z}from"./runtime.D0lpmTkX.js";import{h as Q,m as W,r as X,i as T,g as k,n as L,o as ee,p as re,q as ne}from"./disclose-version.Azd5gFdR.js";function se(e){throw new Error("lifecycle_outside_component")}function oe(e,r,n,s=null,a=!1){var i=null,f=null,t=null,l=a?K:0;M(()=>{if(t===(t=!!r()))return;let o=!1;if(Q){const d=e.data===W;t===d&&(X(k),T(!1),o=!0)}t?(i?A(i):i=x(()=>n(e)),f&&D(f,()=>{f=null})):(f?A(f):s&&(f=x(()=>s(e))),i&&D(i,()=>{i=null})),o&&T(!0)},l)}function q(e,r){var s;var n=e&&((s=e[F])==null?void 0:s.t);return e===r||n===r}function ce(e={},r,n,s){Y(()=>{var a,i;return B(()=>{a=i,i=[],b(()=>{e!==n(...i)&&(r(e,...i),a&&q(n(...a),e)&&r(null,...a))})}),()=>{C(()=>{i&&q(n(...i),e)&&r(null,...i)})}})}const ie={get(e,r){if(!e.exclude.includes(r))return _(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,n){return r in e.special||(e.special[r]=ae({get[r](){return e.props[r]}},r,L)),e.special[r](n),H(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function pe(e,r){return new Proxy({props:e,exclude:r,special:{},version:U(0)},ie)}const ue={get(e,r){let n=e.props.length;for(;n--;){let s=e.props[n];if(h(s)&&(s=s()),typeof s=="object"&&s!==null&&r in s)return s[r]}},getOwnPropertyDescriptor(e,r){let n=e.props.length;for(;n--;){let s=e.props[n];if(h(s)&&(s=s()),typeof s=="object"&&s!==null&&r in s)return y(s,r)}},has(e,r){for(let n of e.props)if(h(n)&&(n=n()),n!=null&&r in n)return!0;return!1},ownKeys(e){const r=[];for(let n of e.props){h(n)&&(n=n());for(const s in n)r.includes(s)||r.push(s)}return r}};function _e(...e){return new Proxy({props:e},ue)}function ae(e,r,n,s){var I;var a=(n&ee)!==0,i=(n&re)!==0,f=(n&ne)!==0,t=e[r],l=(I=y(e,r))==null?void 0:I.set,o=s,d=!0,S=()=>(f&&d&&(d=!1,o=b(s)),o);t===void 0&&s!==void 0&&(l&&i&&j(),t=S(),l&&l(t));var c;if(i)c=()=>{var u=e[r];return u===void 0?S():(d=!0,u)};else{var w=(a?O:J)(()=>e[r]);w.f|=z,c=()=>{var u=_(w);return u!==void 0&&(o=void 0),u===void 0?o:u}}if(!(n&L))return c;if(l){var N=e.$$legacy;return function(u,p){return arguments.length>0?((!i||!p||N)&&l(p?c():u),u):c()}}var P=!1,m=V(t),v=O(()=>{var u=c(),p=_(m);return P?(P=!1,p):m.v=u});return a||(v.equals=G),function(u,p){var g=_(v);if(arguments.length>0){const R=p?_(v):u;return v.equals(R)||(P=!0,$(m,R),_(v)),u}return g}}function de(e){E===null&&se(),E.l!==null?te(E).m.push(e):Z(()=>{const r=b(e);if(typeof r=="function")return r})}function te(e){var r=e.l;return r.u??(r.u={a:[],b:[],m:[]})}export{ce as b,oe as i,pe as l,de as o,ae as p,_e as s};
