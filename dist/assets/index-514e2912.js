import{f as x,h as d,G as y,k as h,I as l,a as c,o as k,c as B,e as i,b as n,w as C,s as S,n as V,v as w,p as I,d as g,_ as j}from"./index-da3afd77.js";const N=s=>(I("data-v-721acce6"),s=s(),g(),s),E={class:"feedBack-box"},q={class:"feedBack-content"},z=N(()=>i("label",{class:"title",for:"feedBack-inner"},"问题描述：",-1)),A=x({__name:"index",props:{data:{type:Array,default:[]},text:{type:String,default:""},value:{type:String,default:""},clear:{type:Boolean,default:!1}},emits:["change"],setup(s,{emit:G}){const u=d(),e=y({status:"",disabled:!1}),t=d("");h(()=>t.value,a=>{a&&(e.status="",e.disabled=!1)});const r=l.throttle(()=>{t.value?(_(),f()):p()},3e3),_=()=>{e.status="submitted",e.disabled=!0},p=()=>{e.status="required",e.disabled=!0},f=l.debounce(()=>{t.value="",e.status="",e.disabled=!1},3e3);return(a,o)=>{const b=c("jy-input"),m=c("jy-button");return k(),B("div",E,[i("div",q,[z,n(b,{id:"feedBack-inner",disabled:e.disabled&&e.status=="submitted",type:"textarea",rows:"10",placeholder:"请描述您遇到的问题或需要改进的地方",modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=v=>t.value=v)},null,8,["disabled","modelValue"]),n(m,{class:V(["submit",[e.status]]),disabled:e.disabled,ref_key:"submit",ref:u,onClick:w(r)},{default:C(()=>[S("提交")]),_:1},8,["class","disabled","onClick"])])])}}});const T=j(A,[["__scopeId","data-v-721acce6"]]);export{T as default};