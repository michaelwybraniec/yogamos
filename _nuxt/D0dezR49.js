import{_ as C}from"./l6UNlU7f.js";import{d as b,L as g,r as h,J as v,bn as A,C as p,w as x,G as i,n as B,i as m,aq as P,b6 as U,ai as l,ad as k}from"./BmJ-u5qE.js";import"./Bil-mh6w.js";import"./Dh_KuIkc.js";const w={slots:{root:"my-5",trigger:"text-base"}},S=k;var u,f;const j=l({extend:l(w),...((f=(u=S.uiPro)==null?void 0:u.prose)==null?void 0:f.accordion)||{}}),q=b({__name:"Accordion",props:{type:{default:"multiple"},class:{}},setup(d){const _=d,s=g(),a=h(1),y=v(()=>{var o,e;return a.value,((e=(o=s.default)==null?void 0:o.call(s))==null?void 0:e.flatMap(r).filter(Boolean))||[]});function r(o,e){var n,t,c;return typeof o.type=="symbol"?(n=o.children)==null?void 0:n.map(r):{index:e,label:((t=o.props)==null?void 0:t.label)||`${e}`,icon:(c=o.props)==null?void 0:c.icon,component:o}}return A(()=>a.value++),(o,e)=>{const n=C;return m(),p(n,{type:o.type,items:y.value,"unmount-on-hide":!1,class:B(_.class),ui:i(U)(i(j)())},{content:x(({item:t})=>[(m(),p(P(t.component)))]),_:1},8,["type","items","class","ui"])}}}),J=Object.assign(q,{__name:"ProseAccordion"});export{J as default};
