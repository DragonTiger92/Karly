import{i as a}from"./header-BGP4sVp0.js";const{localStorage:r}=window;function i(e,t){return new Promise((s,n)=>{a(e)?(r.setItem(e,JSON.stringify(t)),s()):n({message:"key는 문자 타입 이어야 합니다."})})}function u(e){return new Promise((t,s)=>{a(e)?t(JSON.parse(r.getItem(e))):s({message:"key는 문자 타입 이어야 합니다."})})}function g(e){return new Promise((t,s)=>{r.removeItem(e),t()})}const l={isAuth:!1,user:null,token:""},m={user:null,id:[]};export{l as a,g as b,m as d,u as g,i as s};