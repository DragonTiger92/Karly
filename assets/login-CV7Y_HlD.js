import"./style-4crV3qMT.js";import{g as s,p as h}from"./header-BGP4sVp0.js";/* empty css               */import{g,s as o,d as f}from"./setDefaultData--EtDcv58.js";import{h as m,a as p}from"./validation-B2HY0c-Z.js";import{s as _}from"./setDocumentTitle-CYsy-ZvK.js";const w=s("html"),l=s(".user_id_input"),d=s(".user_password_input"),u=s(".login_alert_container"),r=s(".error_message"),a=s("#user_password_error"),L=s(".login_btn");_("칼리 | 로그인");async function y(t,e){try{if(await h.collection("users").authWithPassword(t,e)){let{model:n,token:v}=await g("pocketbase_auth");o("auth",{isAuth:!!n,user:n,token:v}),o("view",f),window.location.href="/Karly/"}}catch{c("visible","hidden")}}function c(t,e){u.style.visibility=t,w.style.overflowY=e}u.addEventListener("click",function(t){t.target.tagName==="BUTTON"&&c("hidden","scroll")});L.addEventListener("click",function(t){t.preventDefault(),y(l.value,d.value)});l.addEventListener("input",t=>{let e=t.target.value;m(e)?r.classList.remove("is_invalid"):r.classList.add("is_invalid")});d.addEventListener("input",t=>{let e=t.target.value,i=p(e);e&&e.length<6?(a.classList.add("is_invalid"),a.textContent="최소 6자 이상 입력"):e.length>16?(a.classList.add("is_invalid"),a.textContent="최대 16자 까지 입력"):i?a.classList.remove("is_invalid"):a.textContent="특수문자 포함 최소 6자 - 최대 16자"});