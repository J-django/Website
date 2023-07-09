import{T as y,E as i}from"./example-dd8d5b01.js";import{T as c,a as r,b as o,C as n}from"./code-f0071630.js";import{f as V,h as _,a as b,o as g,c as j,b as l,w as e,e as t,s as d}from"./index-da3afd77.js";const P=t("i",{class:"bi bi-search"},null,-1),F=t("i",{class:"bi bi-search"},null,-1),C=t("th",null,"属性名",-1),E=t("th",null,"说明",-1),T=t("th",null,"类型",-1),w=t("th",null,"默认值",-1),U=t("td",null,"type",-1),k=t("td",null,"类型",-1),B={style:{display:"flex","flex-wrap":"wrap",gap:"4px"}},N=t("td",null,"placeholder",-1),A=t("td",null,"提示",-1),D=t("td",null,"string",-1),S=t("td",null,"—",-1),z=t("td",null,"disabled",-1),q=t("td",null,"禁用",-1),G=t("td",null,"boolean",-1),H=t("td",null,"false",-1),J=t("td",null,"clear",-1),K=t("td",null,"清空",-1),L=t("td",null,"boolean",-1),M=t("td",null,"false",-1),O=t("td",null,"rows",-1),Q=t("td",null,"行数",-1),R=t("td",null,"number",-1),W=t("td",null,"3",-1),X=t("td",null,"cols",-1),Y=t("td",null,"列数",-1),Z=t("td",null,"number",-1),$=t("td",null,"5",-1),tt=t("td",null,"enterkeyhint",-1),lt={style:{display:"flex","flex-wrap":"wrap",gap:"4px"}},et=t("td",null,"—",-1),nt=t("th",null,"说明",-1),ot=t("th",null,"类型",-1),dt=t("td",null,"change",-1),ut=t("td",null,"输入框失去焦点或按Enter后触发",-1),st=t("td",null,"input",-1),it=t("td",null,"输入框值改变时触发",-1),at=t("td",null,"focus",-1),_t=t("td",null,"输入框获得焦点时触发",-1),pt=t("td",null,"blur",-1),ct=t("td",null,"输入框失去焦点时触发",-1),rt=t("td",null,"clear",-1),ht=t("th",null,"说明",-1),ft=t("td",null,"prefix-icon",-1),mt=t("td",null,"suffix-icon",-1),xt=t("th",null,"名称",-1),vt=t("th",null,"说明",-1),It=t("th",null,"类型",-1),bt=t("td",null,"focus",-1),yt=t("td",null,"输入框获得焦点",-1),Vt=t("td",null,"blur",-1),gt=t("td",null,"输入框失去焦点",-1),jt=t("td",null,"clear",-1),Pt=t("td",null,"清空输入框内容",-1),Ut=V({__name:"guide-input",setup(Ft){const h=_(""),f=_(""),m=_(""),x=_(""),v=_(""),I=_("");return(Ct,u)=>{const a=b("jy-input"),p=b("jy-code");return g(),j("div",null,[l(y,{title:"Input 输入框",id:"Id_Input",size:"large"}),l(i,{title:"基础 Foundation",id:"Id_Input_Foundation"},{default:e(()=>[l(a,{placeholder:"Please Input",modelValue:h.value,"onUpdate:modelValue":u[0]||(u[0]=s=>h.value=s)},null,8,["modelValue"]),l(p,{code:`<template>
	<jy-input placeholder="Please Input" v-model="input" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
const input = ref<string>("");
<\/script>`})]),_:1}),l(i,{title:"禁用 Disabled",id:"Id_Input_Disabled"},{default:e(()=>[l(a,{placeholder:"Please Input",modelValue:f.value,"onUpdate:modelValue":u[1]||(u[1]=s=>f.value=s),disabled:""},null,8,["modelValue"]),l(p,{code:`<template>
	<jy-input placeholder="Please Input" v-model="input" disabled />
</template>

<script lang="ts" setup>
import { ref } from "vue";
const input = ref<string>("");
<\/script>`})]),_:1}),l(i,{title:"清空 Clear",id:"Id_Input_Clear"},{default:e(()=>[l(a,{placeholder:"Please Input Clear",modelValue:m.value,"onUpdate:modelValue":u[2]||(u[2]=s=>m.value=s),clear:""},null,8,["modelValue"]),l(p,{code:`<template>
	<jy-input placeholder="Please Input Clear" v-model="input" clear />
</template>

<script lang="ts" setup>
import { ref } from "vue";
const input = ref<string>("");
<\/script>`})]),_:1}),l(i,{title:"文本域 Textarea",id:"Id_Input_Textarea"},{default:e(()=>[l(a,{type:"textarea",placeholder:"Please Input",modelValue:x.value,"onUpdate:modelValue":u[3]||(u[3]=s=>x.value=s)},null,8,["modelValue"]),l(p,{code:`<template>
	<jy-input type="textarea" placeholder="Please Input" v-model="input" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
const input = ref<string>("");
<\/script>`})]),_:1}),l(i,{title:"图标 Icon",id:"Id_Input_Icon"},{default:e(()=>[l(a,{placeholder:"Please Input",modelValue:v.value,"onUpdate:modelValue":u[4]||(u[4]=s=>v.value=s)},{"prefix-icon":e(()=>[P]),_:1},8,["modelValue"]),l(a,{placeholder:"Please Input",modelValue:I.value,"onUpdate:modelValue":u[5]||(u[5]=s=>I.value=s)},{"suffix-icon":e(()=>[F]),_:1},8,["modelValue"]),l(p,{code:`<template>
	<jy-input placeholder="Please Input" v-model="input1">
		<template #prefix-icon>
			<i class="bi bi-search"></i>
		</template>
	</jy-input>
	<jy-input placeholder="Please Input" v-model="input2">
		<template #suffix-icon>
			<i class="bi bi-search"></i>
		</template>
	</jy-input>
</template

<script lang="ts" setup>
import { ref } from "vue";
const input1 = ref<string>("");
const input2 = ref<string>("");
<\/script>`})]),_:1}),l(i,{title:"属性 Attributes",id:"Id_Input_Attributes"},{default:e(()=>[l(c,null,{thead:e(()=>[l(r,null,{default:e(()=>[C,E,T,w]),_:1})]),tbody:e(()=>[l(o,null,{default:e(()=>[U,k,t("td",null,[t("div",B,[l(n,{text:"text"}),d("/"),l(n,{text:"textarea"})])]),t("td",null,[l(n,{text:"text"})])]),_:1}),l(o,null,{default:e(()=>[N,A,D,S]),_:1}),l(o,null,{default:e(()=>[z,q,G,H]),_:1}),l(o,null,{default:e(()=>[J,K,L,M]),_:1}),l(o,null,{default:e(()=>[O,Q,R,W]),_:1}),l(o,null,{default:e(()=>[X,Y,Z,$]),_:1}),l(o,null,{default:e(()=>[tt,t("td",null,[d("Enter键类型"),l(n,{text:"ios端可用"})]),t("td",null,[t("div",lt,[l(n,{text:"enter"}),d("/"),l(n,{text:"done"}),d("/"),l(n,{text:"go"}),d("/"),l(n,{text:"next"}),d("/"),l(n,{text:"previous"}),d("/"),l(n,{text:"search"}),d("/"),l(n,{text:"send"})])]),et]),_:1})]),_:1})]),_:1}),l(i,{title:"事件 Events",id:"Id_Input_Events"},{default:e(()=>[l(c,null,{thead:e(()=>[l(r,null,{default:e(()=>[t("th",null,[d("事件名"),l(n,{text:"@/v-on"})]),nt,ot]),_:1})]),tbody:e(()=>[l(o,null,{default:e(()=>[dt,ut,t("td",null,[l(n,{text:"Function(value) => void"})])]),_:1}),l(o,null,{default:e(()=>[st,it,t("td",null,[l(n,{text:"Function(value) => void"})])]),_:1}),l(o,null,{default:e(()=>[at,_t,t("td",null,[l(n,{text:"Function() => void"})])]),_:1}),l(o,null,{default:e(()=>[pt,ct,t("td",null,[l(n,{text:"Function() => void"})])]),_:1}),l(o,null,{default:e(()=>[rt,t("td",null,[d(" 当"),l(n,{text:'clear="true"'}),d("并且点击时触发 ")]),t("td",null,[l(n,{text:"Function() => void"})])]),_:1})]),_:1})]),_:1}),l(i,{title:"插槽 Slots",id:"Id_Input_Slots"},{default:e(()=>[l(c,null,{thead:e(()=>[l(r,null,{default:e(()=>[t("th",null,[d("插槽名"),l(n,{text:"#"})]),ht]),_:1})]),tbody:e(()=>[l(o,null,{default:e(()=>[ft,t("td",null,[d("输入框前缀"),l(n,{text:'type="textarea"'}),d("时无效")])]),_:1}),l(o,null,{default:e(()=>[mt,t("td",null,[d("输入框后缀"),l(n,{text:'type="textarea"'}),d("时无效")])]),_:1})]),_:1})]),_:1}),l(i,{title:"暴露 Exposes",id:"Id_Input_Exposes"},{default:e(()=>[l(c,null,{thead:e(()=>[l(r,null,{default:e(()=>[xt,vt,It]),_:1})]),tbody:e(()=>[l(o,null,{default:e(()=>[bt,yt,t("td",null,[l(n,{text:"Function() => void"})])]),_:1}),l(o,null,{default:e(()=>[Vt,gt,t("td",null,[l(n,{text:"Function() => void"})])]),_:1}),l(o,null,{default:e(()=>[jt,Pt,t("td",null,[l(n,{text:"Function() => void"})])]),_:1})]),_:1})]),_:1})])}}});export{Ut as default};
