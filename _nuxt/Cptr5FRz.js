import{d as x,r as k,i as w,s as o,t as l,v as t,K as c,L as p,M as a,N as C,O as _,P as f}from"./B0lGBkba.js";const V={class:"flex flex-col h-screen"},B=t("div",{class:"absolute left-0 right-0 top-0 bg-gray-800 text-white flex justify-center items-center font-bold uppercase py-4"}," Graphistools ",-1),U={class:"grid max-h-screen grid-cols-1 md:grid-cols-2 gap-0 flex-1"},j={class:"border-b md:border-r overflow-auto p-4 md:p-8 pt-20 md:pt-20"},L={class:"border-4 inline-block"},M={class:"flex"},N={class:"border-t bg-gray-50 md:border-l p-4 md:p-8 overflow-y-auto pt-4 md:pt-20"},z={class:"grid grid-cols-1 gap-4"},A=t("h2",{class:"text-lg font-bold uppercase"},"Couleurs",-1),D=["onUpdate:modelValue"],E=["onUpdate:modelValue"],F=["onClick"],K=x({__name:"index",setup(G){const s=k(["#f97316","#84cc16","#06b6d4","#d946ef"]),u=w(()=>s.value.length*2+1),h=(e,d)=>d%2===0&&e%2===0?"transparent":d%2===0?s.value[(e-1)/2]:s.value[(d-1)/2],g=e=>e===0||e===u.value-1||e%2===1?"32px":"8px",v=e=>e===0||e===u.value-1||e%2===1?"32px":"8px",m=e=>{s.value.splice(e,1)},b=()=>{s.value.push("#000000")};return(e,d)=>(o(),l("div",V,[B,t("div",U,[t("div",j,[t("div",L,[(o(!0),l(c,null,p(a(u),(y,r)=>(o(),l("div",{key:r},[t("div",M,[(o(!0),l(c,null,p(a(u),(n,i)=>(o(),l("div",{key:i,style:C({"background-color":h(r,i),width:g(i),height:v(r)})},null,4))),128))])]))),128))])]),t("div",N,[t("div",z,[A,(o(!0),l(c,null,p(a(s),(y,r)=>(o(),l("div",{key:r,class:"flex gap-2"},[_(t("input",{"onUpdate:modelValue":n=>a(s)[r]=n,class:"border w-32 shadow rounded",type:"color"},null,8,D),[[f,a(s)[r]]]),_(t("input",{"onUpdate:modelValue":n=>a(s)[r]=n,class:"border w-full shadow rounded px-2",type:"text"},null,8,E),[[f,a(s)[r]]]),t("button",{class:"bg-red-100 text-red-400 rounded px-2",onClick:n=>m(r)}," X ",8,F)]))),128)),t("button",{class:"bg-green-200 text-green-800 rounded px-2 py-2",onClick:b}," + Ajouter une couleur ")])])])]))}});export{K as default};
