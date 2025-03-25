import{d as E,L as F,O as K,Q as N,J as U,C as c,w as u,E as z,G as s,i as r,f as _,c as g,e as v,n,$ as w,D as d,a8 as j,a9 as D,a1 as h,a2 as S,t as A,F as V,S as $,ad as H}from"./BmJ-u5qE.js";import{_ as L,a as M,b as G,c as J,d as Q}from"./BXZrnUDh.js";const q={slots:{root:"flex items-center gap-2",list:"relative flex p-1 group",indicator:"absolute transition-[translate,width] duration-200",trigger:["group relative inline-flex items-center shrink-0 min-w-0 data-[state=inactive]:text-(--ui-text-muted) hover:data-[state=inactive]:not-disabled:text-(--ui-text) font-medium rounded-[calc(var(--ui-radius)*1.5)] disabled:cursor-not-allowed disabled:opacity-75 focus:outline-hidden","transition-colors"],content:"focus:outline-none w-full",leadingIcon:"shrink-0",leadingAvatar:"shrink-0",leadingAvatarSize:"",label:"truncate"},variants:{color:{primary:"",secondary:"",success:"",info:"",warning:"",error:"",neutral:""},variant:{pill:{list:"bg-(--ui-bg-elevated) rounded-[calc(var(--ui-radius)*2)]",trigger:"flex-1 w-full",indicator:"rounded-[calc(var(--ui-radius)*1.5)] shadow-xs"},link:{list:"border-(--ui-border)",indicator:"rounded-full"}},orientation:{horizontal:{root:"flex-col",list:"w-full",indicator:"left-0 w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position)",trigger:"justify-center"},vertical:{list:"flex-col",indicator:"top-0 h-(--reka-tabs-indicator-size) translate-y-(--reka-tabs-indicator-position)"}},size:{xs:{trigger:"px-2 py-1 text-xs gap-1",leadingIcon:"size-4",leadingAvatarSize:"3xs"},sm:{trigger:"px-2.5 py-1.5 text-xs gap-1.5",leadingIcon:"size-4",leadingAvatarSize:"3xs"},md:{trigger:"px-3 py-1.5 text-sm gap-1.5",leadingIcon:"size-5",leadingAvatarSize:"2xs"},lg:{trigger:"px-3 py-2 text-sm gap-2",leadingIcon:"size-5",leadingAvatarSize:"2xs"},xl:{trigger:"px-3 py-2 text-base gap-2",leadingIcon:"size-6",leadingAvatarSize:"xs"}}},compoundVariants:[{orientation:"horizontal",variant:"pill",class:{indicator:"inset-y-1"}},{orientation:"horizontal",variant:"link",class:{list:"border-b -mb-px",indicator:"-bottom-px h-px"}},{orientation:"vertical",variant:"pill",class:{indicator:"inset-x-1",list:"items-center"}},{orientation:"vertical",variant:"link",class:{list:"border-s -ms-px",indicator:"-start-px w-px"}},{color:"primary",variant:"pill",class:{indicator:"bg-(--ui-primary)",trigger:"data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-primary)"}},{color:"secondary",variant:"pill",class:{indicator:"bg-(--ui-secondary)",trigger:"data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-secondary)"}},{color:"success",variant:"pill",class:{indicator:"bg-(--ui-success)",trigger:"data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-success)"}},{color:"info",variant:"pill",class:{indicator:"bg-(--ui-info)",trigger:"data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-info)"}},{color:"warning",variant:"pill",class:{indicator:"bg-(--ui-warning)",trigger:"data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-warning)"}},{color:"error",variant:"pill",class:{indicator:"bg-(--ui-error)",trigger:"data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-error)"}},{color:"neutral",variant:"pill",class:{indicator:"bg-(--ui-bg-inverted)",trigger:"data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-border-inverted)"}},{color:"primary",variant:"link",class:{indicator:"bg-(--ui-primary)",trigger:"data-[state=active]:text-(--ui-primary) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-primary)"}},{color:"secondary",variant:"link",class:{indicator:"bg-(--ui-secondary)",trigger:"data-[state=active]:text-(--ui-secondary) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-secondary)"}},{color:"success",variant:"link",class:{indicator:"bg-(--ui-success)",trigger:"data-[state=active]:text-(--ui-success) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-success)"}},{color:"info",variant:"link",class:{indicator:"bg-(--ui-info)",trigger:"data-[state=active]:text-(--ui-info) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-info)"}},{color:"warning",variant:"link",class:{indicator:"bg-(--ui-warning)",trigger:"data-[state=active]:text-(--ui-warning) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-warning)"}},{color:"error",variant:"link",class:{indicator:"bg-(--ui-error)",trigger:"data-[state=active]:text-(--ui-error) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-error)"}},{color:"neutral",variant:"link",class:{indicator:"bg-(--ui-bg-inverted)",trigger:"data-[state=active]:text-(--ui-text-highlighted) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-border-inverted)"}}],defaultVariants:{color:"primary",variant:"pill",size:"md"}},R=H;var I;const W=$({extend:$(q),...((I=R.ui)==null?void 0:I.tabs)||{}}),X=E({__name:"Tabs",props:{as:{},items:{},color:{},variant:{},size:{},orientation:{default:"horizontal"},content:{type:Boolean,default:!0},labelKey:{default:"label"},class:{},ui:{},defaultValue:{default:"0"},modelValue:{},activationMode:{},unmountOnHide:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(C,{emit:B}){const i=C,O=B,P=F(),T=K(N(i,"as","modelValue","defaultValue","orientation","activationMode","unmountOnHide"),O),e=U(()=>W({color:i.color,variant:i.variant,size:i.size,orientation:i.orientation}));return(o,Y)=>{var f;return r(),c(s(Q),z(s(T),{class:e.value.root({class:[i.class,(f=i.ui)==null?void 0:f.root]})}),{default:u(()=>{var b;return[_(s(G),{class:n(e.value.list({class:(b=i.ui)==null?void 0:b.list}))},{default:u(()=>{var l;return[_(s(L),{class:n(e.value.indicator({class:(l=i.ui)==null?void 0:l.indicator}))},null,8,["class"]),(r(!0),g(V,null,w(o.items,(a,t)=>{var p;return r(),c(s(M),{key:t,value:a.value||String(t),disabled:a.disabled,class:n(e.value.trigger({class:(p=i.ui)==null?void 0:p.trigger}))},{default:u(()=>{var m;return[d(o.$slots,"leading",{item:a,index:t},()=>{var x,y,k;return[a.icon?(r(),c(j,{key:0,name:a.icon,class:n(e.value.leadingIcon({class:(x=i.ui)==null?void 0:x.leadingIcon}))},null,8,["name","class"])):a.avatar?(r(),c(D,z({key:1,size:((y=i.ui)==null?void 0:y.leadingAvatarSize)||e.value.leadingAvatarSize(),ref_for:!0},a.avatar,{class:e.value.leadingAvatar({class:(k=i.ui)==null?void 0:k.leadingAvatar})}),null,16,["size","class"])):v("",!0)]}),s(h)(a,i.labelKey)||P.default?(r(),g("span",{key:0,class:n(e.value.label({class:(m=i.ui)==null?void 0:m.label}))},[d(o.$slots,"default",{item:a,index:t},()=>[S(A(s(h)(a,i.labelKey)),1)])],2)):v("",!0),d(o.$slots,"trailing",{item:a,index:t})]}),_:2},1032,["value","disabled","class"])}),128))]}),_:3},8,["class"]),o.content?(r(!0),g(V,{key:0},w(o.items,(l,a)=>{var t;return r(),c(s(J),{key:a,value:l.value||String(a),class:n(e.value.content({class:(t=i.ui)==null?void 0:t.content}))},{default:u(()=>[d(o.$slots,l.slot||"content",{item:l,index:a},()=>[S(A(l.content),1)])]),_:2},1032,["value","class"])}),128)):v("",!0)]}),_:3},16,["class"])}}}),ai=Object.assign(X,{__name:"UTabs"});export{ai as _};
