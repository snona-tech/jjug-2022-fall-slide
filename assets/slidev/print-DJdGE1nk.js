import{d as _,aa as u,z as h,b as s,e as t,x as a,B as c,F as f,a8 as g,o as l,ab as v,l as x,g as b}from"../modules/vue-D-wO8WxY.js";import{u as N,j as y,c as m,b as k}from"../index-BYZ0yBO1.js";import{N as j}from"./NoteDisplay-Cexny-oy.js";import"../modules/shiki-BSXOk28D.js";const w={id:"page-root"},B={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},V={class:"opacity-50"},D={class:"text-lg"},H={class:"font-bold flex gap-2"},S={class:"opacity-50"},z=t("div",{class:"flex-auto"},null,-1),C={key:0,class:"border-main mb-8"},F=_({__name:"print",setup(M){const{slides:d,total:p}=N();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),y({title:`Notes - ${m.title}`});const i=h(()=>d.value.map(o=>{var n;return(n=o.meta)==null?void 0:n.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,n)=>(l(),s("div",w,[t("div",B,[t("div",L,[t("h1",T,a(c(m).title),1),t("div",V,a(new Date().toLocaleString()),1)]),(l(!0),s(f,null,g(i.value,(e,r)=>(l(),s("div",{key:r,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",D,[t("div",H,[t("div",S,a(e==null?void 0:e.no)+"/"+a(c(p)),1),v(" "+a(e==null?void 0:e.title)+" ",1),z])]),x(j,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),r<i.value.length-1?(l(),s("hr",C)):b("v-if",!0)]))),128))])]))}}),q=k(F,[["__file","/home/runner/work/jjug-2022-fall-slide/jjug-2022-fall-slide/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{q as default};
