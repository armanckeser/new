var rt=Object.defineProperty;var Ue=n=>{throw TypeError(n)};var at=(n,e,r)=>e in n?rt(n,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[e]=r;var O=(n,e,r)=>at(n,typeof e!="symbol"?e+"":e,r),st=(n,e,r)=>e.has(n)||Ue("Cannot "+r);var C=(n,e,r)=>(st(n,e,"read from private field"),r?r.call(n):e.get(n)),A=(n,e,r)=>e.has(n)?Ue("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,r);import{b as He,y as ot,c as N,a as u,h as it,t as w,i as Q,f as qe,s as se,g as Ke,l as Ve,p as j}from"../chunks/BtDHiD8b.js";import{b as lt,h as je,f as Ge,a as dt,c as Qe,as as ct,aL as ut,aK as mt,y as ft,v as ht,d as vt,i as I,g as U,j as H,s as x,t as M,k as h,n as ie,l as f,m,B as X,D as Oe,a1 as G,K as F,C as $e}from"../chunks/D-GudfH0.js";import{s as W}from"../chunks/Bvun-cop.js";import{w as Ce,d as gt,g as pt,c as Be,o as bt}from"../chunks/BxPCU_fG.js";import{s as ge,b as le,e as Ae,i as Je,a as we,d as ye}from"../chunks/CdeBztw9.js";import{s as xe}from"../chunks/PwPRnE0L.js";import{I as Se,s as Ie,c as J,C as _t}from"../chunks/DMsDALAn.js";import{c as ae}from"../chunks/DQ-odtxE.js";import{b as xt}from"../chunks/mdajRbeO.js";import{i as wt,p as yt}from"../chunks/BD9vZuTv.js";import{b as Z}from"../chunks/t58y04yz.js";import{l as Ee,s as Me,p as D,r as de}from"../chunks/Cn3rMp7d.js";import{o as kt}from"../chunks/HYHGeEgt.js";function $t(n,e,r,i,t){var a=n,o="",s;lt(()=>{if(o===(o=e()??"")){je&&Ge();return}s!==void 0&&(vt(s),s=void 0),o!==""&&(s=dt(()=>{if(je){Qe.data;for(var d=Ge(),c=d;d!==null&&(d.nodeType!==8||d.data!=="");)c=d,d=ct(d);if(d===null)throw ut(),mt;He(Qe,c),a=ft(d);return}var b=o+"",v=ot(b);He(ht(v),v.lastChild),a.before(v)}))})}function Ct(n,e){const r=Ee(e,["children","$$slots","$$events","$$legacy"]);Se(n,Me({name:"chevron-right"},()=>r,{iconNode:[["path",{d:"m9 18 6-6-6-6"}]],children:(t,a)=>{var o=N(),s=I(o);Ie(s,e,"default",{}),u(t,o)},$$slots:{default:!0}}))}function St(n,e){const r=Ee(e,["children","$$slots","$$events","$$legacy"]);Se(n,Me({name:"chevron-up"},()=>r,{iconNode:[["path",{d:"m18 15-6-6-6 6"}]],children:(t,a)=>{var o=N(),s=I(o);Ie(s,e,"default",{}),u(t,o)},$$slots:{default:!0}}))}function It(n,e){const r=Ee(e,["children","$$slots","$$events","$$legacy"]);Se(n,Me({name:"computer"},()=>r,{iconNode:[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h2"}],["path",{d:"M12 18h6"}]],children:(t,a)=>{var o=N(),s=I(o);Ie(s,e,"default",{}),u(t,o)},$$slots:{default:!0}}))}function Et(n,e){const r=Ee(e,["children","$$slots","$$events","$$legacy"]);Se(n,Me({name:"git-branch"},()=>r,{iconNode:[["line",{x1:"6",x2:"6",y1:"3",y2:"15"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M18 9a9 9 0 0 1-9 9"}]],children:(t,a)=>{var o=N(),s=I(o);Ie(s,e,"default",{}),u(t,o)},$$slots:{default:!0}}))}let We,Ye;function Mt(n){if(typeof document>"u")return;clearTimeout(We),clearTimeout(Ye);const e=document.createElement("style"),r=document.createTextNode(`* {
     -webkit-transition: none !important;
     -moz-transition: none !important;
     -o-transition: none !important;
     -ms-transition: none !important;
     transition: none !important;
  }`);e.appendChild(r);const i=()=>document.head.appendChild(e),t=()=>document.head.removeChild(e);if(typeof window.getComputedStyle<"u"){i(),n(),window.getComputedStyle(e).opacity,t();return}if(typeof window.requestAnimationFrame<"u"){i(),n(),window.requestAnimationFrame(t);return}i(),We=window.setTimeout(()=>{n(),Ye=window.setTimeout(t,120)},120)}const Pt={getItem:n=>null,setItem:(n,e)=>{}},pe=typeof document<"u",Tt=["dark","light","system"],ke="mode-watcher-mode",Fe=Lt(),Re=zt(),Xe=Ce(void 0),Ze=Ce(!0),et=Nt();function Lt(){const n="system",e=pe?localStorage:Pt,r=e.getItem(ke);let i=De(r)?r:n;const{subscribe:t,set:a}=Ce(i,()=>{if(!pe)return;const s=d=>{if(d.key!==ke)return;const c=d.newValue;De(c)?a(i=c):a(i=n)};return addEventListener("storage",s),()=>removeEventListener("storage",s)});function o(s){a(i=s),e.setItem(ke,i)}return{subscribe:t,set:o}}function zt(){let e=!0;const{subscribe:r,set:i}=Ce(void 0,()=>{if(!pe)return;const o=d=>{e&&i(d.matches?"light":"dark")},s=window.matchMedia("(prefers-color-scheme: light)");return s.addEventListener("change",o),()=>s.removeEventListener("change",o)});function t(){if(!pe)return;const o=window.matchMedia("(prefers-color-scheme: light)");i(o.matches?"light":"dark")}function a(o){e=o}return{subscribe:r,query:t,tracking:a}}function Nt(){const{subscribe:n}=gt([Fe,Re,Xe,Ze],([e,r,i,t])=>{if(!pe)return;const a=e==="system"?r:e;function o(){const s=document.documentElement,d=document.querySelector('meta[name="theme-color"]');a==="light"?(s.classList.remove("dark"),s.style.colorScheme="light",d&&i&&d.setAttribute("content",i.light)):(s.classList.add("dark"),s.style.colorScheme="dark",d&&i&&d.setAttribute("content",i.dark))}return t?Mt(o):o(),a});return{subscribe:n}}function De(n){return typeof n!="string"?!1:Tt.includes(n)}function oe(){Fe.set(pt(et)==="dark"?"light":"dark")}function Vt(n){Fe.set(n)}function Bt(n,e){const r=document.documentElement,i=localStorage.getItem("mode-watcher-mode")||n,t=i==="light"||i==="system"&&window.matchMedia("(prefers-color-scheme: light)").matches;if(r.classList[t?"remove":"add"]("dark"),r.style.colorScheme=t?"light":"dark",e){const a=document.querySelector('meta[name="theme-color"]');a&&a.setAttribute("content",i==="light"?e.light:e.dark)}localStorage.setItem("mode-watcher-mode",i)}var At=w('<meta name="theme-color">'),Rt=w("<!> <!>",1);function Dt(n,e){U(e,!1);let r=D(e,"track",8,!0),i=D(e,"defaultMode",8,"system"),t=D(e,"themeColors",24,()=>{}),a=D(e,"disableTransitions",8,!0);Xe.set(t()),Ze.set(a()),kt(()=>{const s=et.subscribe(()=>{});Re.tracking(r()),Re.query();const d=localStorage.getItem(ke);return Vt(De(d)?d:i()),()=>{s()}});const o=`"${i()}"${t()?`, ${JSON.stringify(t())}`:""}`;wt(),it(s=>{var d=Rt(),c=I(d);{var b=_=>{var P=At();M(()=>ge(P,"content",t().dark)),u(_,P)};Q(c,_=>{t()&&_(b)})}var v=x(c,2);$t(v,()=>'<script nonce="%sveltekit.nonce%">('+Bt.toString()+")("+o+");<\/script>"),u(s,d)}),H()}var qt=w("<nav><!></nav>");function Ot(n,e){let r=D(e,"ref",15),i=de(e,["$$slots","$$events","$$legacy","ref","class","children"]);var t=qt();let a;var o=h(t);W(o,()=>e.children??ie),f(t),Z(t,s=>r(s),()=>r()),M(()=>a=le(t,a,{class:e.class,"aria-label":"breadcrumb",...i})),u(n,t)}var Ft=w("<li><!></li>");function Ut(n,e){U(e,!0);let r=D(e,"ref",15,null),i=de(e,["$$slots","$$events","$$legacy","ref","class","children"]);var t=Ft();let a;var o=h(t);W(o,()=>e.children??ie),f(t),Z(t,s=>r(s),()=>r()),M(s=>a=le(t,a,{class:s,...i}),[()=>J("inline-flex items-center gap-1.5",e.class)]),u(n,t),H()}var Ht=w("<li><!></li>");function Kt(n,e){U(e,!0);let r=D(e,"ref",15,null),i=de(e,["$$slots","$$events","$$legacy","ref","class","children"]);var t=Ht();let a;var o=h(t);{var s=c=>{var b=N(),v=I(b);W(v,()=>e.children??ie),u(c,b)},d=c=>{Ct(c,{})};Q(o,c=>{e.children?c(s):c(d,!1)})}f(t),Z(t,c=>r(c),()=>r()),M(c=>a=le(t,a,{role:"presentation","aria-hidden":"true",class:c,...i}),[()=>J("[&>svg]:size-3.5",e.class)]),u(n,t),H()}var jt=w("<a><!></a>");function Gt(n,e){U(e,!0);let r=D(e,"ref",15,null),i=D(e,"href",3,void 0),t=de(e,["$$slots","$$events","$$legacy","ref","class","href","child","children"]);const a=X(()=>({class:J("hover:text-foreground transition-colors",e.class),href:i(),...t}));var o=N(),s=I(o);{var d=b=>{var v=N(),_=I(v);W(_,()=>e.child,()=>({props:m(a)})),u(b,v)},c=b=>{var v=jt();let _;var P=h(v);W(P,()=>e.children??ie),f(v),Z(v,p=>r(p),()=>r()),M(()=>_=le(v,_,{...m(a)})),u(b,v)};Q(s,b=>{e.child?b(d):b(c,!1)})}u(n,o),H()}var Qt=w("<ol><!></ol>");function Jt(n,e){U(e,!0);let r=D(e,"ref",15,null),i=de(e,["$$slots","$$events","$$legacy","ref","class","children"]);var t=Qt();let a;var o=h(t);W(o,()=>e.children??ie),f(t),Z(t,s=>r(s),()=>r()),M(s=>a=le(t,a,{class:s,...i}),[()=>J("text-muted-foreground flex flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5",e.class)]),u(n,t),H()}var Wt=w("<span><!></span>");function Yt(n,e){U(e,!0);let r=D(e,"ref",15,null),i=de(e,["$$slots","$$events","$$legacy","ref","class","children"]);var t=Wt();let a;var o=h(t);W(o,()=>e.children??ie),f(t),Z(t,s=>r(s),()=>r()),M(s=>a=le(t,a,{role:"link","aria-disabled":"true","aria-current":"page",class:s,...i}),[()=>J("text-foreground font-normal",e.class)]),u(n,t),H()}function Xt(n,e){F(e,!m(e))}var Zt=w('<span class="mr-2 text-muted-foreground">└─</span>'),en=w('<a class="flex w-full items-center px-2 py-1.5 hover:bg-accent/10 text-sm font-mono" role="menuitem"><!> </a>'),tn=w('<div id="mobile-pwd-dropdown" class="absolute left-0 top-full z-50 mt-1 min-w-[200px] rounded-md border border-border bg-background py-1 shadow-md" role="menu"><div class="px-2 py-1 text-xs font-semibold text-muted-foreground">Current Path</div> <div class="h-px bg-border my-1"></div> <!></div>'),nn=w('<span class="text-muted-foreground">/</span>'),rn=w("<!> <!>",1),an=w(`<div class="flex items-center space-x-2 font-mono text-sm"><button class="group glass h-6 w-6 rounded-full p-1 transition-all duration-300 hover:bg-accent/10" aria-label="Toggle theme"><div class="h-full w-full rounded-full bg-accent 
			transition-colors duration-300 
			group-hover:brightness-110"></div></button> <div class="relative lg:hidden"><button id="mobile-pwd-trigger" class="border-b border-zinc-200 dark:border-zinc-800 text-primary hover:text-accent transition-colors" aria-haspopup="true">pwd</button> <!></div> <div class="hidden lg:block"><!></div></div>`);function sn(n,e){U(e,!0);let r=G(!1);function i(){F(r,!1)}function t(p){const y=document.getElementById("mobile-pwd-dropdown"),E=document.getElementById("mobile-pwd-trigger");y&&!y.contains(p.target)&&E&&!E.contains(p.target)&&i()}Oe(()=>(m(r)?document.addEventListener("click",t):document.removeEventListener("click",t),()=>{document.removeEventListener("click",t)}));const a=X(()=>{const p=yt.url.pathname.split("/").filter(Boolean);let y="";return[{text:"home",href:`${xt}/`,isLast:p.length===0}].concat(p.map((z,T)=>(y+=`/${z}`,{text:z,href:y,isLast:T===p.length-1})))});var o=an(),s=h(o);s.__click=function(...p){oe==null||oe.apply(this,p)};var d=x(s,2),c=h(d);c.__click=[Xt,r];var b=x(c,2);{var v=p=>{var y=tn(),E=x(h(y),4);Ae(E,17,()=>m(a),Je,(z,T,V)=>{var S=en();ge(S,"style",`padding-left: calc(0.5rem + ${V*.75}rem)`),S.__click=i;var B=h(S);{var L=l=>{var k=Zt();u(l,k)};Q(B,l=>{V>0&&l(L)})}var g=x(B);f(S),M(()=>{ge(S,"href",m(T).href),se(g,` ${m(T).text??""}`)}),u(z,S)}),f(y),u(p,y)};Q(b,p=>{m(r)&&p(v)})}f(d);var _=x(d,2),P=h(_);ae(P,()=>Ot,(p,y)=>{y(p,{children:(E,z)=>{var T=N(),V=I(T);ae(V,()=>Jt,(S,B)=>{B(S,{children:(L,g)=>{var l=N(),k=I(l);Ae(k,17,()=>m(a),Je,($,R)=>{var Y=rn(),ce=I(Y);ae(ce,()=>Ut,(K,te)=>{te(K,{children:(ue,_e)=>{var q=N(),ne=I(q);{var me=re=>{var he=N(),Te=I(he);ae(Te,()=>Yt,(Le,ze)=>{ze(Le,{class:"text-muted-foreground",children:(Ne,nt)=>{$e();var ve=Ke();M(()=>se(ve,m(R).text)),u(Ne,ve)},$$slots:{default:!0}})}),u(re,he)},fe=re=>{var he=N(),Te=I(he);ae(Te,()=>Gt,(Le,ze)=>{ze(Le,{get href(){return m(R).href},class:"border-b border-zinc-200 dark:border-zinc-800 text-primary hover:text-accent transition-colors",children:(Ne,nt)=>{$e();var ve=Ke();M(()=>se(ve,m(R).text)),u(Ne,ve)},$$slots:{default:!0}})}),u(re,he)};Q(ne,re=>{m(R).isLast?re(me):re(fe,!1)})}u(ue,q)},$$slots:{default:!0}})});var Pe=x(ce,2);{var ee=K=>{var te=N(),ue=I(te);ae(ue,()=>Kt,(_e,q)=>{q(_e,{children:(ne,me)=>{var fe=nn();u(ne,fe)},$$slots:{default:!0}})}),u(K,te)};Q(Pe,K=>{m(R).isLast||K(ee)})}u($,Y)}),u(L,l)},$$slots:{default:!0}})}),u(E,T)},$$slots:{default:!0}})}),f(_),f(o),M(()=>ge(c,"aria-expanded",m(r))),u(n,o),H()}qe(["click"]);const be=new Map;function tt(n){return n.replace(/\s+/g," ")}function on(n){const[e,...r]=tt(n).split(" "),i=r.join(" ");if(!n.includes(" "))return Array.from(be.entries()).filter(([a])=>a.startsWith(n)).map(([a,{help:o}])=>({type:"command",text:a,help:o}));const t=be.get(e);return t!=null&&t.complete?t.complete(i).map(a=>({type:"suggestion",text:a,help:""})):[]}be.set("cd",{execute:async n=>{!n||n==="~"?Be("/"):Be(n)},complete:n=>[],help:"Change current page. Usage: cd [path]"});be.set("rss",{execute:async()=>{Be("/rss.xml")},help:"Show RSS feed. Usage: rss"});var ln=w('<div class="flex-1 mx-2 border-b border-border svelte-1v3itio"></div> <span class="text-right text-muted-foreground"> </span>',1),dn=w('<button><span class="text-primary"> </span> <!></button>'),cn=w("<div></div>"),un=w('<div class="hidden sm:flex items-center gap-2 w-full min-w-0 font-mono text-sm svelte-1v3itio"><div class="shrink-0 text-blue-600 dark:text-blue-400 svelte-1v3itio">❯</div> <div class="flex flex-col w-full min-w-0 svelte-1v3itio"><div role="textbox" tabindex="-1" aria-haspopup="listbox" aria-controls="command-suggestions" contenteditable="true" placeholder="type a command..."></div> <!></div></div>');function mn(n,e){var _,P,p,y,E,z,T,V,S,B,L;U(e,!0);class r{constructor(){A(this,_,G(null));A(this,P,G(""));A(this,p,X(()=>this.full_command.split(" ")[0]));A(this,y,X(()=>this.full_command.split(" ").slice(1)));A(this,E,G(!1));A(this,z,G(j({start:0,end:0})));A(this,T,X(()=>this.offsets.start<this.offsets.end));A(this,V,X(()=>{var l;return!this.hasSelection&&this.offsets.end===(((l=this.ref)==null?void 0:l.textContent)||"").length}));O(this,"reset",()=>{this.full_command="",this.ref.innerHTML="",this.offsets={start:0,end:0}});O(this,"updateFullCommand",l=>{l&&(this.ref.textContent=l),this.full_command=tt(this.ref.textContent||"")})}get ref(){return m(C(this,_))}set ref(l){F(C(this,_),j(l))}get full_command(){return m(C(this,P))}set full_command(l){F(C(this,P),j(l))}get command(){return m(C(this,p))}get arguments(){return m(C(this,y))}get isComposing(){return m(C(this,E))}set isComposing(l){F(C(this,E),j(l))}get offsets(){return m(C(this,z))}set offsets(l){F(C(this,z),j(l))}get hasSelection(){return m(C(this,T))}get needsBlinkingCursor(){return m(C(this,V))}updateSelection(){const l=window.getSelection();if(!l||!this.ref.contains(l.anchorNode))return;const k=l.getRangeAt(0),$=k.cloneRange();$.selectNodeContents(this.ref),$.setEnd(k.startContainer,k.startOffset);const R=$.toString().length;$.setEnd(k.endContainer,k.endOffset);const Y=$.toString().length;R>Y||(this.offsets={start:R,end:Y})}}_=new WeakMap,P=new WeakMap,p=new WeakMap,y=new WeakMap,E=new WeakMap,z=new WeakMap,T=new WeakMap,V=new WeakMap;class i{constructor(l){O(this,"commandState");A(this,S,G(!1));A(this,B,G(-1));A(this,L,X(()=>on(t.full_command)));O(this,"reset",()=>{this.selectedIndex=-1,this.hide()});O(this,"show",()=>{this.isVisible=!0});O(this,"hide",()=>{this.isVisible=!1});O(this,"incrementIndex",()=>{this.selectedIndex=(this.selectedIndex+1)%this.filteredCompletions.length});O(this,"decrementIndex",()=>{this.selectedIndex=(this.selectedIndex-1+this.filteredCompletions.length)%this.filteredCompletions.length});O(this,"clampIndex",()=>{this.selectedIndex=Math.max(-1,Math.min(this.selectedIndex,this.filteredCompletions.length-1))});this.commandState=l}get isVisible(){return m(C(this,S))}set isVisible(l){F(C(this,S),j(l))}get selectedIndex(){return m(C(this,B))}set selectedIndex(l){F(C(this,B),j(l))}get filteredCompletions(){return m(C(this,L))}}S=new WeakMap,B=new WeakMap,L=new WeakMap;const t=new r,a=new i(t);Oe(()=>{const g=()=>t.updateSelection();return document.addEventListener("selectionchange",g),()=>document.removeEventListener("selectionchange",g)});function o(g){if(!t.isComposing)switch(g.key){case"Tab":case"ArrowDown":case"ArrowUp":{if(g.preventDefault(),!a.isVisible){a.show();break}g.shiftKey||g.key==="ArrowUp"?a.decrementIndex():a.incrementIndex();const l=a.filteredCompletions[a.selectedIndex];if(!l)return;l.type==="command"?t.ref.innerHTML=l.text:t.ref.innerHTML=t.command+" "+l.text;const k=document.createRange(),$=window.getSelection();k.selectNodeContents(t.ref),k.collapse(!1),$==null||$.removeAllRanges(),$==null||$.addRange(k);break}case"Enter":{g.preventDefault(),t.updateFullCommand();const l=be.get(t.command);l==null||l.execute(...t.arguments),t.reset(),a.reset();break}case"Escape":{g.preventDefault(),a.hide();break}default:t.updateFullCommand(),a.reset()}}var s=un(),d=x(h(s),2),c=h(d);ge(c,"spellcheck",!1),c.__keydown=o,c.__input=()=>{t.updateFullCommand()},Z(c,g=>t.ref=g,()=>t==null?void 0:t.ref);var b=x(c,2);{var v=g=>{var l=cn();Ae(l,23,()=>a.filteredCompletions,({text:k,help:$,type:R})=>k,(k,$,R)=>{let Y=()=>m($).text,ce=()=>m($).help,Pe=()=>m($).type;var ee=dn(),K=h(ee),te=h(K,!0);f(K);var ue=x(K,2);{var _e=q=>{var ne=ln(),me=x(I(ne),2),fe=h(me,!0);f(me),M(()=>se(fe,ce())),u(q,ne)};Q(ue,q=>{ce()&&q(_e)})}f(ee),M(q=>{we(ee,ye(q),"svelte-1v3itio"),se(te,Y())},[()=>J("flex items-center w-full px-4 py-2","cursor-pointer transition-colors","hover:bg-accent/10 hover:text-accent-foreground",m(R)===a.selectedIndex?"bg-accent/20 text-accent-foreground border-l-4 border-accent":"bg-transparent","duration-200 ease-in-out",Pe()==="command"?"pl-4":"pl-6")]),u(k,ee)}),f(l),M(k=>we(l,ye(k),"svelte-1v3itio"),[()=>J("flex flex-col","absolute top-full z-50","w-full min-w-[25rem] max-w-[40rem] overflow-y-auto overflow-x-auto","border border-border shadow-lg","bg-background font-mono text-sm")]),u(g,l)};Q(b,g=>{a.isVisible&&g(v)})}f(d),f(s),M(g=>we(c,ye(g),"svelte-1v3itio"),[()=>J("caret-container relative w-full min-w-0 outline-none min-h-[1.5em] whitespace-nowrap text-nowrap block line-height-[1.2em]","focus:[box-shadow:none]","text-foreground dark:text-foreground","empty:before:content-[attr(placeholder)] before:text-muted-foreground",'before:opacity-100 empty:focus:before:content-[""]',t.needsBlinkingCursor?"focus:after:inline":"focus:after:hidden caret-accent",'focus:after:animate-[blink_1s_step-end_infinite] focus:after:content-[""] focus:after:absolute focus:after:top-[0.2em] focus:after:w-[0.6em] focus:after:h-[1.2em] focus:after:bg-accent',"[&>br]:hidden")]),Ve("compositionstart",c,()=>t.isComposing=!0),Ve("compositionend",c,()=>t.isComposing=!1),Ve("blur",c,()=>{var g;a.hide(),((g=t.ref.textContent)==null?void 0:g.trim())===""&&(t.ref.innerHTML="")}),u(n,s),H()}qe(["keydown","input"]);var fn=w('<header aria-label="Application header"><div class="grid h-full grid-cols-2 sm:grid-cols-3 justify-between items-center gap-4 font-mono text-sm"><div class="flex items-center gap-2 shrink-0"><a href="/" class="shrink-0" aria-label="Go to home"><!></a> <span class="text-accent shrink-0" aria-hidden="true">│</span> <!></div> <!> <div class="flex items-center gap-2 shrink-0 justify-self-end"><div class="flex items-center gap-2 text-highlight dark:text-highlight"><!> <button class="transition-colors hover:text-accent outline outline-[0.5px] outline-zinc-200 dark:outline-zinc-800 rounded-md px-1 py-0.5" aria-label="Toggle theme"><span class="dark:hidden">stable</span> <span class="hidden dark:inline">nightly</span></button> <div class="hidden whitespace-nowrap items-center gap-1 md:flex"><div class="flex items-center"><!> <span class="dark:hidden">0</span> <span class="hidden dark:inline">1</span></div> <span class="text-red-400">!0</span> <span class="text-blue-400 ">?0</span></div></div> <div class="hidden items-center gap-2 md:flex" aria-live="off" aria-label="Current time"><span class="text-accent" aria-hidden="true">│</span> <!> <span class="animate-fade-in"> </span></div></div></div></header>');function hn(n,e){U(e,!0);let r=G("00:00:00"),i=G(void 0);Oe(()=>{const L=()=>{F(r,j(new Date().toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"})))};return L(),F(i,j(setInterval(L,1e3))),()=>{m(i)&&clearInterval(m(i))}});var t=fn(),a=h(t),o=h(a);xe(o,"view-transition-name","nav");var s=h(o);xe(s,"view-transition-name","logo");var d=h(s);It(d,{class:"h-4 w-4","aria-hidden":"true"}),f(s);var c=x(s,4);sn(c,{}),f(o);var b=x(o,2);mn(b,{});var v=x(b,2);xe(v,"view-transition-name","header-meta");var _=h(v),P=h(_);Et(P,{class:"h-4 w-4","aria-hidden":"true"});var p=x(P,2);p.__click=function(...L){oe==null||oe.apply(this,L)};var y=x(p,2),E=h(y),z=h(E);St(z,{class:"h-3 w-3 p-0","aria-hidden":"true"}),$e(4),f(E),$e(4),f(y),f(_);var T=x(_,2),V=x(h(T),2);_t(V,{class:"h-4 w-4","aria-hidden":"true"});var S=x(V,2),B=h(S,!0);f(S),f(T),f(v),f(a),f(t),M(L=>{we(t,ye(L),"svelte-1iqdwol"),xe(t,"view-transition-name","header"),se(B,m(r))},[()=>J("sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur","supports-[backdrop-filter]:bg-background/75","transition-colors duration-300 ease-in-out","h-14 px-4 sm:px-8")]),u(n,t),H()}qe(["click"]);var vn=w('<!> <div class="min-h-screen flex flex-col w-full"><!> <main class="flex-1"><!></main></div>',1);function Pn(n,e){U(e,!0);const r={duration:600,easing:"cubic-bezier(0.16, 1, 0.3, 1)"};bt(c=>{if(document.startViewTransition)return new Promise(b=>{const v=document.startViewTransition(async()=>{b(),await c.complete});v.ready&&v.ready.then(()=>{document.documentElement.style.setProperty("--view-transition-duration",`${r.duration}ms`),document.documentElement.style.setProperty("--view-transition-easing",r.easing)})})});var i=vn(),t=I(i);Dt(t,{});var a=x(t,2),o=h(a);hn(o,{});var s=x(o,2),d=h(s);W(d,()=>e.children),f(s),f(a),u(n,i),H()}export{Pn as component};
