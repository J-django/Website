import{T as y,E as a}from"./example-2dfd9c54.js";import{T as c,a as r,b as d,C as n}from"./code-5d017d2d.js";import{f as V,g as _,a as b,o as g,c as j,b as e,w as l,e as t,s}from"./index-340af4a6.js";const P=t("i",{class:"bi bi-search"},null,-1),C=t("i",{class:"bi bi-search"},null,-1),T=t("th",null,"属性名",-1),w=t("th",null,"说明",-1),E=t("th",null,"类型",-1),U=t("th",null,"默认值",-1),F=t("td",null,"type",-1),k=t("td",null,"类型",-1),B={style:{display:"flex","flex-wrap":"wrap",gap:"4px"}},N=t("td",null,"placeholder",-1),A=t("td",null,"提示",-1),D=t("td",null,"string",-1),S=t("td",null,"—",-1),z=t("td",null,"disabled",-1),q=t("td",null,"禁用",-1),G=t("td",null,"boolean",-1),H=t("td",null,"false",-1),J=t("td",null,"clear",-1),K=t("td",null,"清空",-1),L=t("td",null,"boolean",-1),M=t("td",null,"false",-1),O=t("td",null,"rows",-1),Q=t("td",null,"行数",-1),R=t("td",null,"number",-1),W=t("td",null,"3",-1),X=t("td",null,"cols",-1),Y=t("td",null,"列数",-1),Z=t("td",null,"number",-1),$=t("td",null,"5",-1),tt=t("td",null,"enterkeyhint",-1),et={style:{display:"flex","flex-wrap":"wrap",gap:"4px"}},lt=t("td",null,"—",-1),nt=t("th",null,"事件名",-1),ot=t("th",null,"说明",-1),dt=t("th",null,"类型",-1),ut=t("td",null,"change",-1),st=t("td",null,"输入框失去焦点或按Enter后触发",-1),at=t("td",null,"input",-1),it=t("td",null,"输入框值改变时触发",-1),_t=t("td",null,"clear",-1),pt=t("th",null,"插槽名",-1),ct=t("th",null,"说明",-1),rt=t("td",null,"prefix-icon",-1),ht=t("td",null,"前缀",-1),mt=t("td",null,"suffix-icon",-1),ft=t("td",null,"后缀",-1),Vt=V({__name:"guide-input",setup(xt){const h=_(""),m=_(""),f=_(""),x=_(""),v=_(""),I=_("");return(vt,o)=>{const i=b("jy-input"),p=b("jy-code");return g(),j("div",null,[e(y,{title:"Input 输入框",id:"Id_Input",size:"large"}),e(a,{title:"基础 Foundation",id:"Id_Input_Foundation"},{default:l(()=>[e(i,{placeholder:"Please Input",modelValue:h.value,"onUpdate:modelValue":o[0]||(o[0]=u=>h.value=u)},null,8,["modelValue"]),e(p,{code:`<template>
	<jy-input placeholder="Please Input" v-model="input" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
const input = ref<string>("");
<\/script>`})]),_:1}),e(a,{title:"禁用 Disabled",id:"Id_Input_Disabled"},{default:l(()=>[e(i,{placeholder:"Please Input",modelValue:m.value,"onUpdate:modelValue":o[1]||(o[1]=u=>m.value=u),disabled:""},null,8,["modelValue"]),e(p,{code:`<template>
	<jy-input placeholder="Please Input" v-model="input" disabled />
</template>

<script lang="ts" setup>
import { ref } from "vue";
const input = ref<string>("");
<\/script>`})]),_:1}),e(a,{title:"清空 Clear",id:"Id_Input_Clear"},{default:l(()=>[e(i,{placeholder:"Please Input Clear",modelValue:f.value,"onUpdate:modelValue":o[2]||(o[2]=u=>f.value=u),clear:""},null,8,["modelValue"]),e(p,{code:`<template>
	<jy-input placeholder="Please Input Clear" v-model="input" clear />
</template>

<script lang="ts" setup>
import { ref } from "vue";
const input = ref<string>("");
<\/script>`})]),_:1}),e(a,{title:"文本域 Textarea",id:"Id_Input_Textarea"},{default:l(()=>[e(i,{type:"textarea",placeholder:"Please Input",modelValue:x.value,"onUpdate:modelValue":o[3]||(o[3]=u=>x.value=u)},null,8,["modelValue"]),e(p,{code:`<template>
	<jy-input type="textarea" placeholder="Please Input" v-model="input" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
const input = ref<string>("");
<\/script>`})]),_:1}),e(a,{title:"图标 Icon",id:"Id_Input_Icon"},{default:l(()=>[e(i,{placeholder:"Please Input",modelValue:v.value,"onUpdate:modelValue":o[4]||(o[4]=u=>v.value=u)},{"prefix-icon":l(()=>[P]),_:1},8,["modelValue"]),e(i,{placeholder:"Please Input",modelValue:I.value,"onUpdate:modelValue":o[5]||(o[5]=u=>I.value=u)},{"suffix-icon":l(()=>[C]),_:1},8,["modelValue"]),e(p,{code:`<template>
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
<\/script>`})]),_:1}),e(a,{title:"属性 Attributes",id:"Id_Input_Attributes"},{default:l(()=>[e(c,null,{thead:l(()=>[e(r,null,{default:l(()=>[T,w,E,U]),_:1})]),tbody:l(()=>[e(d,null,{default:l(()=>[F,k,t("td",null,[t("div",B,[e(n,{text:"text"}),s("/"),e(n,{text:"textarea"})])]),t("td",null,[e(n,{text:"text"})])]),_:1}),e(d,null,{default:l(()=>[N,A,D,S]),_:1}),e(d,null,{default:l(()=>[z,q,G,H]),_:1}),e(d,null,{default:l(()=>[J,K,L,M]),_:1}),e(d,null,{default:l(()=>[O,Q,R,W]),_:1}),e(d,null,{default:l(()=>[X,Y,Z,$]),_:1}),e(d,null,{default:l(()=>[tt,t("td",null,[s("Enter键类型"),e(n,{text:"ios端可用"})]),t("td",null,[t("div",et,[e(n,{text:"enter"}),s("/"),e(n,{text:"done"}),s("/"),e(n,{text:"go"}),s("/"),e(n,{text:"next"}),s("/"),e(n,{text:"previous"}),s("/"),e(n,{text:"search"}),s("/"),e(n,{text:"send"})])]),lt]),_:1})]),_:1})]),_:1}),e(a,{title:"事件 Events",id:"Id_Input_Events"},{default:l(()=>[e(c,null,{thead:l(()=>[e(r,null,{default:l(()=>[nt,ot,dt]),_:1})]),tbody:l(()=>[e(d,null,{default:l(()=>[ut,st,t("td",null,[e(n,{text:"Function(value) => void"})])]),_:1}),e(d,null,{default:l(()=>[at,it,t("td",null,[e(n,{text:"Function(value) => void"})])]),_:1}),e(d,null,{default:l(()=>[_t,t("td",null,[s(" 当"),e(n,{text:"clear"}),s("属性存在并且点击时触发 ")]),t("td",null,[e(n,{text:"Function() => void"})])]),_:1})]),_:1})]),_:1}),e(a,{title:"插槽 Slots",id:"Id_Input_Slots"},{default:l(()=>[e(c,null,{thead:l(()=>[e(r,null,{default:l(()=>[pt,ct]),_:1})]),tbody:l(()=>[e(d,null,{default:l(()=>[rt,ht]),_:1}),e(d,null,{default:l(()=>[mt,ft]),_:1})]),_:1})]),_:1})])}}});export{Vt as default};
