import{a as B,u as N}from"./api-client-v2akKp4R.js";import{d as S,a as j,c as q,w as s,b as t,o as d,e as n,f as m,t as u,u as i,m as p}from"./index-DMjYued5.js";import"./base-url-qR72hEjy.js";const D={async getClasses(){const c=await B.get("/school/class/list/");return console.log(c.data),c.data}},E={key:0},U={key:1},K=S({__name:"ClassesView",setup(c){const o=j(""),_=[{title:"Name",value:"name"},{title:"Description",value:"description"},{title:"Class Code",value:"code"},{title:"Is Active",value:"is_active"},{title:"Teachers",value:"teachers"},{title:"Students",value:"students"}],{isPending:v,isError:f,data:h,error:g}=N({queryKey:["classes"],queryFn:async()=>await D.getClasses()});return(y,l)=>{const C=t("v-text-field"),x=t("v-spacer"),w=t("v-card-title"),V=t("v-divider"),b=t("v-data-table"),k=t("v-card");return d(),q(k,{flat:"",width:"100%"},{default:s(()=>[n(w,{class:"d-flex align-center pb-4"},{default:s(()=>[n(C,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=e=>o.value=e),density:"compact",label:"Search","prepend-inner-icon":"mdi-magnify",variant:"solo-filled",flat:"","hide-details":"","single-line":""},null,8,["modelValue"]),n(x)]),_:1}),n(V),n(b,{search:o.value,"onUpdate:search":l[1]||(l[1]=e=>o.value=e),headers:_,items:i(h),loading:i(v),class:"px-4"},{"item.teachers":s(({item:e})=>{var a;return[m("span",null,u((a=e.teachers)==null?void 0:a.map(r=>r.name).join(", ")),1)]}),"item.students":s(({item:e})=>{var a;return[m("span",null,u((a=e.students)==null?void 0:a.map(r=>r.name).join(", ")),1)]}),"no-data":s(()=>{var e;return[i(f)?(d(),p("div",E,u((e=i(g))==null?void 0:e.message),1)):(d(),p("div",U," No data yet... "))]}),_:1},8,["search","items","loading"])]),_:1})}}});export{K as default};
