import{d as _,L as U,z,J as i,c as m,C as n,e as s,g as v,w as B,E as L,n as t,G as P,t as V,a5 as S,a8 as A,i as a,ai as h,ad as E}from"./BmJ-u5qE.js";import{r as N}from"./C75Qo3i_.js";const $={slots:{base:["group relative block p-4 sm:p-6 border border-(--ui-border) rounded-[calc(var(--ui-radius)*1.5)] bg-(--ui-bg)","transition-colors"],icon:"size-6 mb-2 block",title:"text-(--ui-text-highlighted) font-semibold",description:"text-[15px] text-(--ui-text-muted)",externalIcon:["size-4 align-top absolute right-2 top-2 text-(--ui-text-dimmed) pointer-events-none","transition-colors"]},variants:{color:{primary:{icon:"text-(--ui-primary)"},secondary:{icon:"text-(--ui-secondary)"},success:{icon:"text-(--ui-success)"},info:{icon:"text-(--ui-info)"},warning:{icon:"text-(--ui-warning)"},error:{icon:"text-(--ui-error)"},neutral:{icon:"text-(--ui-text-highlighted)"}},to:{true:""},title:{true:{description:"mt-1"}}},compoundVariants:[{color:"primary",to:!0,class:{base:"hover:bg-(--ui-primary)/10 hover:border-(--ui-primary)",externalIcon:"group-hover:text-(--ui-primary)"}},{color:"secondary",to:!0,class:{base:"hover:bg-(--ui-secondary)/10 hover:border-(--ui-secondary)",externalIcon:"group-hover:text-(--ui-secondary)"}},{color:"success",to:!0,class:{base:"hover:bg-(--ui-success)/10 hover:border-(--ui-success)",externalIcon:"group-hover:text-(--ui-success)"}},{color:"info",to:!0,class:{base:"hover:bg-(--ui-info)/10 hover:border-(--ui-info)",externalIcon:"group-hover:text-(--ui-info)"}},{color:"warning",to:!0,class:{base:"hover:bg-(--ui-warning)/10 hover:border-(--ui-warning)",externalIcon:"group-hover:text-(--ui-warning)"}},{color:"error",to:!0,class:{base:"hover:bg-(--ui-error)/10 hover:border-(--ui-error)",externalIcon:"group-hover:text-(--ui-error)"}},{color:"neutral",to:!0,class:{base:"hover:bg-(--ui-bg-elevated)/50 hover:border-(--ui-border-inverted)",externalIcon:"group-hover:text-(--ui-text-highlighted)"}}],defaultVariants:{color:"primary"}},j=E;var x,f;const D=h({extend:h($),...((f=(x=j.uiPro)==null?void 0:x.prose)==null?void 0:f.card)||{}}),G=_({inheritAttrs:!1,__name:"Card",props:{to:{},target:{},icon:{},title:{},color:{},class:{},ui:{}},setup(y){const e=y,k=U(),C=z(),r=i(()=>D({color:e.color,to:!!e.to,title:!!e.title})),l=i(()=>e.target||(e.to&&typeof e.to=="string"&&e.to.startsWith("http")?"_blank":void 0)),I=i(()=>(e.title||"Card link").trim());return(o,c)=>{var d,p,g,b;const w=S,u=A;return a(),m("div",{class:t(r.value.base({class:e.class}))},[o.to?(a(),n(w,L({key:0,"aria-label":I.value},{to:o.to,target:l.value,...o.$attrs},{class:"focus:outline-none",tabindex:"-1",raw:""}),{default:B(()=>c[0]||(c[0]=[v("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)])),_:1},16,["aria-label"])):s("",!0),o.icon?(a(),n(u,{key:1,name:o.icon,class:t(r.value.icon({class:(d=e.ui)==null?void 0:d.icon}))},null,8,["name","class"])):s("",!0),o.to&&l.value==="_blank"?(a(),n(u,{key:2,name:P(C).ui.icons.external,class:t(r.value.externalIcon({class:(p=e.ui)==null?void 0:p.externalIcon}))},null,8,["name","class"])):s("",!0),v("p",{class:t(r.value.title({class:(g=e.ui)==null?void 0:g.title}))},V(o.title),3),k.default?(a(),m("p",{key:3,class:t(r.value.description({class:(b=e.ui)==null?void 0:b.description}))},[N(o.$slots,"default",{mdcUnwrap:"p"})],2)):s("",!0)],2)}}}),W=Object.assign(G,{__name:"ProseCard"});export{W as default};
