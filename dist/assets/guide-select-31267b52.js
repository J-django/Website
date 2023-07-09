import{T as y,E as s}from"./example-dd8d5b01.js";import{T as f,a as x,b as d,C as a}from"./code-f0071630.js";import{f as j,h as c,a as _,o as b,c as S,b as t,w as o,e,s as r}from"./index-da3afd77.js";const T=e("th",null,"属性名",-1),V=e("th",null,"说明",-1),g=e("th",null,"类型",-1),C=e("th",null,"默认值",-1),I=e("td",null,"placeholder",-1),M=e("td",null,"提示",-1),O=e("td",null,"string",-1),E=e("td",null,"—",-1),F=e("td",null,"disabled",-1),B=e("td",null,"禁用",-1),N=e("td",null,"boolean",-1),U=e("td",null,"false",-1),k=e("td",null,"clear",-1),w=e("td",null,"清空",-1),A=e("td",null,"boolean",-1),D=e("td",null,"false",-1),z=e("th",null,"说明",-1),q=e("th",null,"类型",-1),G=e("td",null,"change",-1),H=e("td",null,"选中值改变时触发",-1),J=e("td",null,"clear",-1),W=j({__name:"guide-select",setup(K){const v=c(""),h=c(""),m=c("");return(L,n)=>{const l=_("jy-option"),u=_("jy-select"),p=_("jy-code");return b(),S("div",null,[t(y,{title:"Select 选择器",id:"Id_Select",size:"large"}),t(s,{title:"基础 Foundation",id:"Id_Select_Foundation"},{default:o(()=>[t(u,{placeholder:"Open This Select Menu",modelValue:v.value,"onUpdate:modelValue":n[0]||(n[0]=i=>v.value=i)},{default:o(()=>[t(l,{value:"option12",text:"option1"}),t(l,{value:"option23",text:"option2"}),t(l,{value:"option34",text:"option3"}),t(l,{value:"option45",text:"option4"})]),_:1},8,["modelValue"]),t(p,{code:`<template>
	<jy-select placeholder="Open This Select Menu" v-model="select1">
		<jy-option value="option1" text="option1" />
		<jy-option value="option2" text="option2" />
		<jy-option value="option3" text="option3" />
		<jy-option value="option4" text="option4" />
	</jy-select>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const select1 = ref();
<\/script>`},null,8,["code"])]),_:1}),t(s,{title:"禁用 Disabled",id:"Id_Select_Disabled"},{default:o(()=>[t(u,{placeholder:"Open This Select Menu",modelValue:h.value,"onUpdate:modelValue":n[1]||(n[1]=i=>h.value=i),disabled:""},{default:o(()=>[t(l,{value:"option12",text:"option1"}),t(l,{value:"option23",text:"option2"}),t(l,{value:"option34",text:"option3"}),t(l,{value:"option45",text:"option4"})]),_:1},8,["modelValue"]),t(p,{code:`<template>
	<jy-select placeholder="Open This Select Menu" v-model="select2" disabled>
		<jy-option value="option12" text="option1" />
		<jy-option value="option23" text="option2" />
		<jy-option value="option34" text="option3" />
		<jy-option value="option45" text="option4" />
	</jy-select>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const select2 = ref();
<\/script>`},null,8,["code"])]),_:1}),t(s,{title:"清空 Clear",id:"Id_Select_Clear"},{default:o(()=>[t(u,{placeholder:"Open This Select Menu",modelValue:m.value,"onUpdate:modelValue":n[2]||(n[2]=i=>m.value=i),clear:""},{default:o(()=>[t(l,{value:"option12",text:"option1"}),t(l,{value:"option23",text:"option2"}),t(l,{value:"option34",text:"option3"}),t(l,{value:"option45",text:"option4"})]),_:1},8,["modelValue"]),t(p,{code:`<template>
	<jy-select placeholder="Open This Select Menu" v-model="select3" clear>
		<jy-option value="option12" text="option1" />
		<jy-option value="option23" text="option2" />
		<jy-option value="option34" text="option3" />
		<jy-option value="option45" text="option4" />
	</jy-select>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const select3 = ref();
<\/script>`},null,8,["code"])]),_:1}),t(s,{title:"属性 Attributes",id:"Id_Select_Attributes"},{default:o(()=>[t(f,null,{thead:o(()=>[t(x,null,{default:o(()=>[T,V,g,C]),_:1})]),tbody:o(()=>[t(d,null,{default:o(()=>[I,M,O,E]),_:1}),t(d,null,{default:o(()=>[F,B,N,U]),_:1}),t(d,null,{default:o(()=>[k,w,A,D]),_:1})]),_:1})]),_:1}),t(s,{title:"事件 Events",id:"Id_Select_Events"},{default:o(()=>[t(f,null,{thead:o(()=>[t(x,null,{default:o(()=>[e("th",null,[r("事件名"),t(a,{text:"@/v-on"})]),z,q]),_:1})]),tbody:o(()=>[t(d,null,{default:o(()=>[G,H,e("td",null,[t(a,{text:"Function(value) => void"})])]),_:1}),t(d,null,{default:o(()=>[J,e("td",null,[r(" 当"),t(a,{text:"clear"}),r("属性存在并且点击时触发 ")]),e("td",null,[t(a,{text:"Function() => void"})])]),_:1})]),_:1})]),_:1})])}}});export{W as default};
