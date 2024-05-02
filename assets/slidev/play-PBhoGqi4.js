function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingControls-DL3_FFjK.js","assets/modules/unplugin-icons-CCNumgRB.js","assets/modules/vue-D-wO8WxY.js","assets/modules/shiki-BSXOk28D.js","assets/modules/shiki-BSchMNmt.css","assets/slidev/DrawingPreview-CAqmim01.js","assets/index-BYZ0yBO1.js","assets/index-DOZjrwcx.css","assets/slidev/ContextMenu-Bs1KU_VQ.js","assets/slidev/bottom-BdemTt_4.js","assets/casareal-m-urd6fx.js","assets/slidev/context-DslTPXew.js","assets/bottom-Ccsir54o.css","assets/ContextMenu-CBhuBRPj.css","assets/DrawingControls-C5T1oZL5.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{b as h,c as w,o as x,y as C,z as j,u as E,A as P,B as M,_ as I,w as $,D as O,E as R}from"../index-BYZ0yBO1.js";import{d as k,ag as N,o,c as r,B as e,b as v,e as s,f as A,i as S,g as a,ah as T,z,k as D,af as g,ab as U,N as y,l as c,F as B,t as H,h as L}from"../modules/vue-D-wO8WxY.js";import{Q as F,G,C as Q,r as W,a as K,S as X,b as Y,N as q,o as J}from"./ContextMenu-Bs1KU_VQ.js";import{P as Z}from"./PrintStyle-BkGWLIBl.js";import{u as ee}from"./DrawingPreview-CAqmim01.js";import"../modules/shiki-BSXOk28D.js";import"../modules/unplugin-icons-CCNumgRB.js";import"./bottom-BdemTt_4.js";import"../casareal-m-urd6fx.js";import"./context-DslTPXew.js";const le="/jjug-2022-fall-slide/assets/logo-BYkHSa_O.png",oe={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},te=k({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(m,{emit:n}){const i=m,l=N(i,"modelValue",n);function t(){l.value=!1}return(f,u)=>(o(),r(T,null,[e(l)?(o(),v("div",oe,[s("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:u[0]||(u[0]=p=>t())}),s("div",{class:S(["m-auto rounded-md bg-main shadow",i.class]),"dark:border":"~ main"},[A(f.$slots,"default")],2)])):a("v-if",!0)],1024))}}),se=h(te,[["__file","/home/runner/work/jjug-2022-fall-slide/jjug-2022-fall-slide/node_modules/@slidev/client/internals/Modal.vue"]]),ae={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},ne=["innerHTML"],ie=s("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[s("div",{class:"flex gap-1 children:my-auto"},[s("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),s("img",{class:"w-5 h-5",src:le,alt:"Slidev logo"}),s("div",{style:{color:"#2082A6"}},[s("b",null,"Sli"),U("dev ")])])],-1),re=k({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(m,{emit:n}){const l=N(m,"modelValue",n),t=z(()=>typeof w.info=="string");return(f,u)=>(o(),r(se,{modelValue:e(l),"onUpdate:modelValue":u[0]||(u[0]=p=>g(l)?l.value=p:null),class:"px-6 py-4"},{default:D(()=>[s("div",ae,[t.value?(o(),v("div",{key:0,class:"mb-4",innerHTML:e(w).info},null,8,ne)):a("v-if",!0),ie])]),_:1},8,["modelValue"]))}}),ue=h(re,[["__file","/home/runner/work/jjug-2022-fall-slide/jjug-2022-fall-slide/node_modules/@slidev/client/internals/InfoDialog.vue"]]),de=k({__name:"Controls",setup(m){const n=y(),i=y();return(_,l)=>(o(),v(B,null,[c(F,{modelValue:e(x),"onUpdate:modelValue":l[0]||(l[0]=t=>g(x)?x.value=t:null)},null,8,["modelValue"]),c(G),n.value?(o(),r(e(n),{key:0})):a("v-if",!0),i.value?(o(),r(e(i),{key:1,modelValue:e(C),"onUpdate:modelValue":l[1]||(l[1]=t=>g(C)?C.value=t:null)},null,8,["modelValue"])):a("v-if",!0),e(w).info?(o(),r(ue,{key:2,modelValue:e(j),"onUpdate:modelValue":l[2]||(l[2]=t=>g(j)?j.value=t:null)},null,8,["modelValue"])):a("v-if",!0),c(Q)],64))}}),ce=h(de,[["__file","/home/runner/work/jjug-2022-fall-slide/jjug-2022-fall-slide/node_modules/@slidev/client/internals/Controls.vue"]]),me=k({__name:"play",setup(m){W();const{next:n,prev:i,isEmbedded:_,isPrintMode:l}=E(),{isDrawing:t}=ee(),f=H();function u(d){var V;M.value||d.button===0&&((V=d.target)==null?void 0:V.id)==="slide-container"&&(d.pageX/window.innerWidth>.6?n():i())}K(f);const p=z(()=>P.value||M.value);y();const b=y();return I(()=>import("./DrawingControls-DL3_FFjK.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])).then(d=>b.value=d.default),(d,V)=>(o(),v(B,null,[e(l)?(o(),r(Z,{key:0})):a("v-if",!0),s("div",{id:"page-root",ref_key:"root",ref:f,class:S(["grid",e(R)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[c(X,{class:"w-full h-full",style:L({background:"var(--slidev-slide-container-background, black)"}),width:e(l)?e($).width.value:void 0,scale:e(O),"is-main":!0,onPointerdown:u,onContextmenu:e(J)},{default:D(()=>[c(Y,{"render-context":"slide"})]),controls:D(()=>[e(l)?a("v-if",!0):(o(),v("div",{key:0,class:S(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[p.value?"!opacity-100 right-0":"opacity-0 p-2",e(t)?"pointer-events-none":""]])},[c(q,{class:"m-auto",persist:p.value},null,8,["persist"])],2)),!e(w).drawings.presenterOnly&&!e(_)&&b.value?(o(),r(e(b),{key:1,class:"ml-0"})):a("v-if",!0)]),_:1},8,["style","width","scale","onContextmenu"]),a("v-if",!0)],2),e(l)?a("v-if",!0):(o(),r(ce,{key:1}))],64))}}),Ve=h(me,[["__file","/home/runner/work/jjug-2022-fall-slide/jjug-2022-fall-slide/node_modules/@slidev/client/pages/play.vue"]]);export{Ve as default};
