import{d as B,ai as m,bO as w,z,r as N,c as f,e as V,f as b,g,n as r,G as a,t as _,D,E,Y as H,i as y,ad as O}from"./BmJ-u5qE.js";import S from"./4wt-vTbj.js";const U={slots:{root:"relative my-5 group",header:"flex items-center gap-1.5 border border-(--ui-border-muted) bg-(--ui-bg) border-b-0 relative rounded-t-[calc(var(--ui-radius)*1.5)] px-4 py-3",filename:"text-(--ui-text) text-sm/6",icon:"size-4 shrink-0",copy:"absolute top-[11px] right-[11px] lg:opacity-0 lg:group-hover:opacity-100 transition",base:"group font-mono text-sm/6 border border-(--ui-border-muted) bg-(--ui-bg-muted) rounded-[calc(var(--ui-radius)*1.5)] px-4 py-3 whitespace-pre-wrap break-words overflow-x-auto focus:outline-none"},variants:{filename:{true:{root:"[&>pre]:rounded-t-none [&>pre]:my-0 my-5"}}}},$=O;var h,v;const j=m({extend:m(U),...((v=(h=$.uiPro)==null?void 0:h.prose)==null?void 0:v.pre)||{}}),A=B({__name:"Pre",props:{icon:{},code:{},language:{},filename:{},highlights:{},hideHeader:{type:Boolean},meta:{},class:{},ui:{}},setup(C){const e=C,s=j(),P=w(),n=z(),i=N(!1);function k(){P.copy(e.code||""),i.value=!0,setTimeout(()=>{i.value=!1},2e3)}return(o,G)=>{var t,c,l,p,u,d;const x=H;return y(),f("div",{class:r(a(s).root({class:[(t=e.ui)==null?void 0:t.root],filename:!!o.filename}))},[o.filename&&!o.hideHeader?(y(),f("div",{key:0,class:r(a(s).header({class:(c=e.ui)==null?void 0:c.header}))},[b(S,{icon:o.icon,filename:o.filename,class:r(a(s).icon({class:(l=e.ui)==null?void 0:l.icon}))},null,8,["icon","filename","class"]),g("span",{class:r(a(s).filename({class:(p=e.ui)==null?void 0:p.filename}))},_(o.filename),3)],2)):V("",!0),b(x,{icon:i.value?a(n).ui.icons.copyCheck:a(n).ui.icons.copy,color:"neutral",variant:"outline",size:"sm","aria-label":"Copy code to clipboard",class:r(a(s).copy({class:(u=e.ui)==null?void 0:u.copy})),tabindex:"-1",onClick:k},null,8,["icon","class"]),g("pre",E({class:a(s).base({class:[e.class,(d=e.ui)==null?void 0:d.base]})},o.$attrs),[D(o.$slots,"default")],16)],2)}}}),Y=Object.assign(A,{__name:"ProsePre"});export{Y as default};
