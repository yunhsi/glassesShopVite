const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-CsaXFbvr.js","assets/swiper-DHUr7kwH.js","assets/vendor-CrjBpg2X.js","assets/vendor-DOHx2y_O.css","assets/swiper-D8V4Mzyy.css","assets/ProductCarousel-DxcO9-t8.js","assets/useProductStore-wSpqj0q7.js","assets/pinia-CU3xBjd1.js","assets/sweetalert2-BY1s0Tb6.js","assets/useProductStore-qyhGPBQH.css","assets/Footer-CTerlqLT.js","assets/Footer-7A7DgN2g.css","assets/vue-router-Bw7KlpfK.js","assets/axios-DWwaMX5J.js","assets/primevue-BM8wTknw.js","assets/aos-BOscYbde.js","assets/aos-DvB2Xm2x.css","assets/vee-validate-IgkeztmY.js","assets/fontawesome-C_6R3L64.js","assets/bootstrap-CLVcmDPs.js","assets/bootstrap-DnVUw_vK.css","assets/Home-DNDkCWUK.css","assets/Products-DxdzPU-_.js","assets/NoData-CJzbMBLZ.js","assets/NoData-9git3qCH.css","assets/Breadcrumb-BUBkoKkZ.js","assets/Breadcrumb-CGp19ded.css","assets/Product-76o-qV8h.js","assets/Product-DholMIyd.css","assets/Notes-BB5L5gg-.js","assets/Step1-4qO1Cbqr.js","assets/CheckoutSteps-yHq-0buY.js","assets/CheckoutSteps-l7tcBWc_.css","assets/Step1-CT98Ac4B.css","assets/Step2-Dsi2JzN4.js","assets/OrderInfo-BRbxsrtM.js","assets/OrderInfo-p0u5baBD.css","assets/Step3-BxS7Ybgh.js","assets/PaymentInfo-CdZHlEqW.js","assets/PaymentInfo-BDOx0yWX.css","assets/Step4-DhnU5IYA.js","assets/Orders-DhSzPOeI.js","assets/Orders-BdbE2DdG.css"])))=>i.map(i=>d[i]);
import{r as u,aU as oe,a as H,A as Y,aX as X,w as z,ac as _,X as l,Y as h,at as d,ag as f,$ as re,af as V,S as T,Z as y,a0 as P,au as se,ai as U,aj as j,ae as ne,aM as ae,aT as ce,ah as ie,aq as le,aY as ue,aZ as de,a_ as me,a$ as pe,b0 as fe,b1 as _e,b2 as ge,b3 as he,b4 as ve,b5 as ye,b6 as Ve,b7 as be}from"./vendor-CrjBpg2X.js";import{c as we,s as Le,d as A}from"./pinia-CU3xBjd1.js";import{c as Se,a as Ce,u as $e}from"./vue-router-Bw7KlpfK.js";import{a as Ee}from"./axios-DWwaMX5J.js";import{u as Oe,P as ke,i as Te,T as Pe,s as Ae,a as Ie,b as De,c as xe,d as Me,e as Be,f as Re,g as qe,h as Fe,j as Ne,k as ze,l as Ue,m as je,n as Ge,o as We,p as He,q as Ye,r as Xe,t as Ze,v as Ke}from"./primevue-BM8wTknw.js";import{S as w}from"./sweetalert2-BY1s0Tb6.js";import{A as Je}from"./aos-BOscYbde.js";import{d as S,c as Qe,l as et,s as tt,F as ot,a as rt,E as st,z as nt,r as at,e as ct,m as it,b as lt,n as ut}from"./vee-validate-IgkeztmY.js";import{l as dt,F as mt}from"./fontawesome-C_6R3L64.js";import"./bootstrap-CLVcmDPs.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const Z=we();Z.use(Le);const pt="modulepreload",ft=function(e){return"/glassesShopVite/"+e},G={},g=function(t,o,c){let r=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),i=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.allSettled(o.map(a=>{if(a=ft(a),a in G)return;G[a]=!0;const v=a.endsWith(".css"),C=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${C}`))return;const m=document.createElement("link");if(m.rel=v?"stylesheet":pt,v||(m.as="script"),m.crossOrigin="",m.href=a,i&&m.setAttribute("nonce",i),document.head.appendChild(m),v)return new Promise((D,x)=>{m.addEventListener("load",D),m.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${a}`)))})}))}function n(s){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=s,window.dispatchEvent(i),!i.defaultPrevented)throw s}return r.then(s=>{for(const i of s||[])i.status==="rejected"&&n(i.reason);return t().catch(n)})},_t=[{path:"/",name:"Home",component:()=>g(()=>import("./Home-CsaXFbvr.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]))},{path:"/products",name:"Products",component:()=>g(()=>import("./Products-DxdzPU-_.js"),__vite__mapDeps([22,2,3,12,6,7,8,9,23,24,25,26,10,11,13,14,15,16,17,18,19,20])),props:e=>({event:e.query.event,category:e.query.category})},{path:"/product/:productId",name:"Product",component:()=>g(()=>import("./Product-76o-qV8h.js"),__vite__mapDeps([27,12,2,3,6,7,8,9,5,1,4,25,26,10,11,13,14,15,16,17,18,19,20,28]))},{path:"/notes",name:"Notes",component:()=>g(()=>import("./Notes-BB5L5gg-.js"),__vite__mapDeps([29,25,2,3,26,10,11,7,12,13,14,8,15,16,17,18,19,20]))},{path:"/cart",name:"Step1",component:()=>g(()=>import("./Step1-4qO1Cbqr.js"),__vite__mapDeps([30,31,2,3,32,10,11,7,8,12,13,14,15,16,17,18,19,20,33]))},{path:"/order",name:"Step2",component:()=>g(()=>import("./Step2-Dsi2JzN4.js"),__vite__mapDeps([34,12,2,3,31,32,35,36,10,11,7,13,14,8,15,16,17,18,19,20]))},{path:"/order/:orderId",name:"Step3",component:()=>g(()=>import("./Step3-BxS7Ybgh.js"),__vite__mapDeps([37,12,2,3,31,32,35,36,38,7,8,39,10,11,13,14,15,16,17,18,19,20]))},{path:"/checkout/:orderId",name:"Step4",component:()=>g(()=>import("./Step4-DhnU5IYA.js"),__vite__mapDeps([40,12,2,3,31,32,35,36,38,7,8,39,10,11,13,14,15,16,17,18,19,20]))},{path:"/orders",name:"Orders",component:()=>g(()=>import("./Orders-DhSzPOeI.js"),__vite__mapDeps([41,2,3,12,38,7,8,39,23,24,25,26,10,11,13,14,15,16,17,18,19,20,42])),props:e=>({status:e.query.status})},{path:"/:catchAll(.*)",redirect:"/"}],K=Se({history:Ce(),routes:_t,scrollBehavior(e,t,o){return o||{top:0}}});K.beforeEach((e,t,o)=>{if(!e.meta.requiresAuth)return o()});const gt=A("useTheme",()=>{const e=u(!1);return oe(()=>{e.value?document.documentElement.classList.add("dark-mode"):document.documentElement.classList.remove("dark-mode")}),{isDarkMode:e}},{persist:!0}),W={default:"https://vue-course-api.hexschool.io/api/yunhsi"},ht=(e="default")=>{const t=Ee.create({baseURL:W[e]||W.default,headers:{"Content-Type":"application/json"}});return t.interceptors.response.use(o=>o,o=>{var n,s;const c=o.response.status,r=((s=(n=o.response)==null?void 0:n.data)==null?void 0:s.message)||"請求失敗";return console.error(`API 錯誤 (狀態碼: ${c}):`,r),Promise.reject(o)}),t},L=ht(),R={async getCarts(){return L.get("/cart").then(e=>e.data.data)},async postCart(e){return L.post("/cart",{data:e}).then(t=>t.data)},async deleteCart(e){return L.delete(`/cart/${e}`).then(t=>t.data)}},F=A("useCommon",()=>{const e=Oe();return{isLoading:u(!1),showMsg:(c,r)=>{e.add({severity:c,summary:"訊息提示",detail:r,life:1e3})}}}),vt=A("useCart",()=>{const e=F(),t=u(),o=async()=>{e.isLoading=!0;try{t.value=await R.getCarts()}catch(n){w.fire({icon:"error",title:`${n.message}`})}finally{e.isLoading=!1}};return{carsData:t,getCarts:o,postCart:async n=>{e.isLoading=!0;try{const s=await R.postCart(n);e.showMsg("success",s.message),await o()}catch(s){w.fire({icon:"error",title:`${s.message}`})}finally{e.isLoading=!1}},deleteCart:async n=>{e.isLoading=!0;try{const s=await R.deleteCart(n);e.showMsg("success",s.message),await o()}catch(s){w.fire({icon:"error",title:`${s.message}`})}finally{e.isLoading=!1}}}}),q={getOrders(e){return L.get(`/orders?page=${e}`).then(t=>t.data)},getOrder(e){return L.get(`/order/${e}`).then(t=>t.data)},createOrder(e){return L.post("/order",{data:e}).then(t=>t.data)}},yt=A("useOrder",()=>{const e=F(),t=u(),o=u(),c=u(),r=async i=>{e.isLoading=!0;try{t.value=await q.getOrders(i)}catch(a){w.fire({icon:"error",title:`${a.message}`})}finally{e.isLoading=!1}};return{ordersData:t,orderData:o,orderId:c,getOrders:r,getOrder:async i=>{e.isLoading=!0;try{const a=await q.getOrder(i);o.value=a.order}catch(a){w.fire({icon:"error",title:`${a.message}`})}finally{e.isLoading=!1}},createOrder:async i=>{e.isLoading=!0;try{const a=await q.createOrder(i);c.value=a.orderId,await r()}catch(a){w.fire({icon:"error",title:`${a.message}`})}finally{e.isLoading=!1}}}}),I=(e,t)=>{const o=e.__vccOpts||e;for(const[c,r]of t)o[c]=r;return o},Vt={class:"d-flex align-items-center gap-2"},bt=["href","onClick"],wt={class:"ml-2"},Lt={key:0,class:"pi pi-sun"},St={key:1,class:"pi pi-moon"},Ct={__name:"NavBar",props:{rootClass:String},setup(e){const t=gt(),o=vt(),c=yt(),r=H(()=>t.isDarkMode?"淺色":"深色"),n=u(null),s=u([{label:"首頁",route:"/"},{label:"商品分類",items:[{label:"全部商品",route:"/products"},{label:"光學眼鏡",route:"/products?category=glasses"},{label:"太陽眼鏡",route:"/products?category=sunglasses"},{separator:!0},{label:"熱門推薦",route:"/products?event=hot"},{label:"優惠活動",route:"/products?event=onsale"}]},{label:"購物說明",route:"/notes"}]),i=u(),a=u([{label:"未完成的訂單",route:"/orders?status=0"},{label:"已完成的訂單",route:"/orders?status=1"},{separator:!0},{label:`切換${r.value}模式`}]),v=u(),C=u();Y(async()=>{window.addEventListener("scroll",m),await o.getCarts(),await c.getOrders(1)}),X(()=>{window.removeEventListener("scroll",m)});const m=()=>{window.scrollY>80?n.value.classList.add("scrolled"):n.value.classList.remove("scrolled"),i.value.target&&document.querySelector(".otherMenusBtn").click()};z(o,()=>{v.value=o.carsData.carts.length}),z(c,()=>{C.value=c.ordersData.orders.filter(E=>!E.is_paid).length});const D=E=>{i.value.toggle(E)},x=()=>{setTimeout(()=>{t.isDarkMode=!t.isDarkMode},100)};return(E,N)=>{const O=_("router-link"),M=_("VButton"),J=_("VOverlayBadge"),Q=_("VBadge"),ee=_("VMenu"),te=_("VMenubar");return l(),h("nav",{ref_key:"navDom",ref:n,class:U(["fixed-top py-1",e.rootClass])},[d(te,{model:s.value,class:"container"},{start:f(()=>[d(O,{to:"/",class:"navbar-brand"},{default:f(()=>N[0]||(N[0]=[re("!wear")])),_:1})]),item:f(({item:p,props:$,hasSubmenu:B,root:k})=>[p.route?(l(),V(O,T({key:0,to:p.route,class:"d-flex align-items-center"},$.action),{default:f(()=>[y("span",null,P(p.label),1)]),_:2},1040,["to"])):(l(),h("a",se(T({key:1},$.action)),[y("span",null,P(p.label),1),B?(l(),h("i",{key:0,class:U(["pi pi-angle-down ml-auto",{"pi-angle-down":k,"pi-angle-right":!k}])},null,2)):j("",!0)],16))]),end:f(()=>[y("div",Vt,[d(O,{to:"/cart",prefetch:""},{default:f(()=>[v.value?(l(),V(J,{key:0,severity:"danger"},{default:f(()=>[d(M,{type:"button",icon:"pi pi-shopping-cart",severity:"contrast",variant:"text",rounded:""})]),_:1})):(l(),V(M,{key:1,type:"button",icon:"pi pi-shopping-cart",severity:"contrast",variant:"text",rounded:""}))]),_:1}),d(M,{type:"button",icon:"pi pi-ellipsis-v","aria-haspopup":"true","aria-controls":"overlay_menu",severity:"contrast",variant:"text",rounded:"",class:"otherMenusBtn",onClick:D}),d(ee,{id:"overlay_menu",ref_key:"otherMenusDom",ref:i,model:a.value,popup:!0},{item:f(({item:p,props:$})=>[p.route?(l(),V(O,{key:0,to:p.route,custom:"",prefetch:""},{default:f(({href:B,navigate:k})=>[y("a",T({href:B},$.action,{onClick:k}),[y("span",wt,P(p.label),1),C.value&&p.label=="未完成的訂單"?(l(),V(Q,{key:0,value:C.value,severity:"danger",size:"small"},null,8,["value"])):j("",!0)],16,bt)]),_:2},1032,["to"])):(l(),h("a",T({key:1},$.action,{onClick:x}),[y("span",null,P(p.label),1),r.value=="淺色"?(l(),h("i",Lt)):(l(),h("i",St))],16))]),_:1},8,["model"])])]),_:1},8,["model"])],2)}}},$t=I(Ct,[["__scopeId","data-v-0f3a7645"]]),Et={__name:"GoTop",setup(e){const t=u(null);Y(()=>{t.value=document.querySelector(".go-top"),window.addEventListener("scroll",o)}),X(()=>{window.removeEventListener("scroll",o)});const o=()=>{window.scrollY>200?t.value.classList.add("scrolled"):t.value.classList.remove("scrolled")},c=()=>{window.scrollTo(0,0)};return(r,n)=>{const s=_("VIcon");return l(),h("div",{class:"go-top text-secondary hvr-sink",onClick:c},[d(s,{icon:["fas","angle-up"],class:"text-center"}),n[0]||(n[0]=y("small",null,"TOP",-1))])}}},Ot=I(Et,[["__scopeId","data-v-c9161d16"]]),kt={},Tt={class:"spinWrapper"};function Pt(e,t){const o=_("VProgressSpinner");return l(),h("div",Tt,[d(o,{fill:"transparent","animation-duration":".5s"})])}const At=I(kt,[["render",Pt],["__scopeId","data-v-84eabaa5"]]),It={};function Dt(e,t){const o=_("VToast");return l(),V(o,{breakpoints:{"414px":{width:"100%",right:"0",left:"0"}}})}const xt=I(It,[["render",Dt]]),Mt={__name:"App",setup(e){const t=F(),o=$e(),c=H(()=>o.path==="/"?"":"border-bottom");return(r,n)=>{const s=$t,i=_("router-view");return l(),h(le,null,[ne(d(At,null,null,512),[[ae,ce(t).isLoading]]),d(xt),d(s,{"root-class":c.value},null,8,["root-class"]),d(i,null,{default:f(({Component:a})=>[(l(),V(ie(a)))]),_:1}),d(Ot)],64)}}};function Bt(){Je.init({once:!1})}function Rt(e){e.use(ke,{theme:{preset:Te,options:{darkModeSelector:".dark-mode"}}}),e.use(Pe),e.component("VButton",Ae),e.component("VMenubar",Ie),e.component("VOverlayBadge",De),e.component("VBadge",xe),e.component("VMenu",Me),e.component("VCard",Be),e.component("VTag",Re),e.component("VProgressSpinner",qe),e.component("VToast",Fe),e.component("VInputText",Ne),e.component("VInputNumber",ze),e.component("VInputGroup",Ue),e.component("VInputGroupAddon",je),e.component("VSelect",Ge),e.component("VBreadcrumb",We),e.component("VFloatLabel",He),e.component("VAccordion",Ye),e.component("VAccordionPanel",Xe),e.component("VAccordionHeader",Ze),e.component("VAccordionContent",Ke)}S("required",at);S("email",ct);S("min",it);S("max",lt);S("numeric",ut);S("onlyChinese",e=>/^[\u4e00-\u9fa5]+$/.test(e)?!0:"請輸入中文");Qe({generateMessage:et({zh_TW:nt}),validateOnInput:!0});tt("zh_TW");function qt(e){e.component("VField",ot),e.component("VForm",rt),e.component("ErrorMessage",st)}dt.add(ue,de,me,pe,fe,_e,ge,he,ve,ye);function Ft(e){e.component("VIcon",mt)}const b=Ve(Mt),Nt=be();b.use(Z);b.use(K);b.use(Nt);Bt();Rt(b);qt(b);Ft(b);b.mount("#app");export{I as _,L as a,F as b,gt as c,yt as d,vt as u};
