import{a as P,u as $}from"./api-client-1XAoszYe.js";import{d as j,k as q,a as D,v as E,c as N,w as n,b as a,o as m,e as o,f as v,t as c,u as d,n as _}from"./index-D2pX98g5.js";import"./base-url-qR72hEjy.js";const U={async getClasses(){const u=await P.get("/school/class/list/");return console.log(u.data),u.data}},F={key:0},I={key:1},Y=j({__name:"ClassesView",setup(u){const{t}=q(),l=D(""),f=E(()=>[{title:t("name"),value:"name"},{title:t("description"),value:"description"},{title:t("classCode"),value:"code"},{title:t("active"),value:"is_active"},{title:t("teachers"),value:"teachers"},{title:t("students"),value:"students"}]),{isPending:g,isError:h,data:y,error:C}=$({queryKey:["classes"],queryFn:async()=>await U.getClasses()});return(i,r)=>{const b=a("v-text-field"),k=a("v-spacer"),w=a("v-card-title"),x=a("v-divider"),V=a("v-data-table"),B=a("v-card");return m(),N(B,{flat:"",width:"100%"},{default:n(()=>[o(w,{class:"d-flex align-center pb-4"},{default:n(()=>[o(b,{modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=e=>l.value=e),density:"compact",label:i.$t("search"),"prepend-inner-icon":"mdi-magnify",variant:"solo-filled",flat:"","hide-details":"","single-line":""},null,8,["modelValue","label"]),o(k)]),_:1}),o(x),o(V,{search:l.value,"onUpdate:search":r[1]||(r[1]=e=>l.value=e),headers:f.value,items:d(y),loading:d(g),class:"px-4","items-per-page-text":i.$t("itemsPerPage")},{"item.teachers":n(({item:e})=>{var s;return[v("span",null,c((s=e.teachers)==null?void 0:s.map(p=>p.name).join(", ")),1)]}),"item.students":n(({item:e})=>{var s;return[v("span",null,c((s=e.students)==null?void 0:s.map(p=>p.name).join(", ")),1)]}),"no-data":n(()=>{var e;return[d(h)?(m(),_("div",F,c((e=d(C))==null?void 0:e.message),1)):(m(),_("div",I,c(i.$t("noDataYet")),1))]}),_:1},8,["search","headers","items","loading","items-per-page-text"])]),_:1})}}});export{Y as default};
