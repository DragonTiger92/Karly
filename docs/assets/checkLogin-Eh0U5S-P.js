import{g as a,a as o,p as n}from"./header-qYaCn0IU.js";import{g as s,b as c,s as r,d as f,a as g}from"./setDefaultData-8dNE6q3B.js";function p(t,e){typeof t=="string"&&(t=a(t)),t.insertAdjacentHTML("beforebegin",e)}function b(t,e){typeof t=="string"&&(t=a(t)),t.insertAdjacentHTML("afterbegin",e)}function h(t,e){typeof t=="string"&&(t=a(t)),t.insertAdjacentHTML("beforeend",e)}function d(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function y(t,e="image",i=0){return Array.isArray(t[e])?`https://square-zebra.pockethost.io/api/files/${t.collectionId}/${t.id}/${t[e][i]}`:`https://square-zebra.pockethost.io/api/files/${t.collectionId}/${t.id}/${t[e]}`}async function $(){if(await s("pocketbase_auth")){const{model:t}=await s("pocketbase_auth"),e=o(".header_member_service li a");e[0].textContent=`${t.name} 님`,e[0].style.color="var(--black)",e[0].style.fontWeight="700",e[1].textContent="로그아웃",e[1].href="/Karly/src/pages/main/",e[1].addEventListener("click",function(){n.authStore.clear(),c("pocketbase_auth"),r("view",f),r("auth",g)})}}export{d as a,p as b,$ as c,b as d,y as g,h as i};