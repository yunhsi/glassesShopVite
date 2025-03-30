import{X as l,Y as k,Z as d,a0 as S,ai as L,$ as h,aj as $,aq as b,a as x,ac as m,af as f,ag as u,at as v,ba as T,r as i}from"./vendor-CrjBpg2X.js";import{_ as A,u as B,a as y,b as D}from"./index-BV9TEh6D.js";import{d as N}from"./pinia-CU3xBjd1.js";import{S as P}from"./sweetalert2-BY1s0Tb6.js";const j={key:0,class:"price"},z={__name:"Price",props:{product:{type:Object,default:()=>{}}},setup(t){return(o,r)=>(l(),k(b,null,[d("span",{class:L(["originPrice",{onsale:t.product.origin_price!=t.product.price}])}," NTD "+S(t.product.origin_price.toLocaleString()),3),t.product.origin_price!=t.product.price?(l(),k("span",j,[r[0]||(r[0]=h("   ")),r[1]||(r[1]=d("i",{class:"pi pi-arrow-right"},null,-1)),h("   NTD "+S(t.product.price.toLocaleString()),1)])):$("",!0)],64))}},O=A(z,[["__scopeId","data-v-25a2655e"]]),E={class:"d-flex gap-1 p-1 justify-content-end position-absolute start-0 end-0"},M=["src"],q={class:"mt-1"},R={__name:"ProductCard",props:{product:{type:Object,default:()=>({})},rootClass:{type:String,default:""}},setup(t){const o=B(),r=t,p=x(()=>{const s=(r.product.price/r.product.origin_price-1)*100;return Math.round(s)}),g=async(s,c=1)=>{const n={product_id:s,qty:c};await o.postCart(n)};return(s,c)=>{const n=m("VTag"),w=m("VButton"),V=m("VCard"),_=m("router-link");return l(),f(_,{to:`/product/${t.product.id}`},{default:u(()=>[v(V,{class:L(["hvr-float product-card m-4",t.rootClass])},{header:u(()=>[d("div",E,[t.product.unit?(l(),f(n,{key:0,severity:"danger",value:"HOT"})):$("",!0),t.product.price!=t.product.origin_price?(l(),f(n,{key:1,severity:"warn",value:`SALE ${p.value}%`},null,8,["value"])):$("",!0)]),d("img",{src:t.product.image,loading:"lazy",alt:""},null,8,M)]),title:u(()=>[h(S(t.product.title),1)]),subtitle:u(()=>[v(O,{product:t.product},null,8,["product"])]),footer:u(()=>[d("div",q,[v(w,{label:"加入購物車",severity:"danger",outlined:"",size:"small",class:"w-100",onClick:c[0]||(c[0]=T(a=>g(t.product.id),["stop","prevent"]))})])]),_:1},8,["class"])]),_:1},8,["to"])}}},C={getProducts(t){return y.get(`/products?page=${t}`).then(o=>o.data)},getAllProducts(){return y.get("/products/all").then(t=>t.data.products)},getProduct(t){return y.get(`/product/${t}`).then(o=>o.data)}},X=N("useProduct",()=>{const t=D(),o=i([]),r=i([]),p=i({}),g=i(),s=i(),c=i(),n=i();return{productsData:o,allProductsData:r,recommendationProducts:g,saleProducts:s,glassesProducts:c,sunGlassesProducts:n,productData:p,getProducts:async a=>{t.isLoading=!0;try{o.value=await C.getProducts(a)}catch(e){P.fire({icon:"error",title:`${e.message}`})}finally{t.isLoading=!1}},getAllProducts:async()=>{t.isLoading=!0;try{const a=await C.getAllProducts();r.value=a.filter(e=>e.is_enabled===!0),g.value=r.value.filter(e=>e.unit===!0),s.value=r.value.filter(e=>e.price!=e.origin_price),c.value=r.value.filter(e=>e.category==="光學眼鏡"),n.value=r.value.filter(e=>e.category==="太陽眼鏡")}catch(a){P.fire({icon:"error",title:`${a.message}`})}finally{t.isLoading=!1}},getProduct:async a=>{t.isLoading=!0;try{const e=await C.getProduct(a);p.value=e.product}catch(e){P.fire({icon:"error",title:`${e.message}`})}finally{t.isLoading=!1}}}});export{O as P,R as _,X as u};
