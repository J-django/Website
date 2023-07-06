import{T as y,E as o}from"./example-2dfd9c54.js";import{T as b,a as r,b as s,C as i}from"./code-5d017d2d.js";import{f as p,a as d,o as f,c as g,b as t,w as e,s as n,e as l}from"./index-340af4a6.js";const m=l("i",{class:"bi bi-gear-wide-connected"},null,-1),j=l("i",{class:"bi bi-person-badge-fill"},null,-1),h=l("i",{class:"bi bi-check-lg"},null,-1),w=l("i",{class:"bi bi-exclamation-triangle-fill"},null,-1),D=l("i",{class:"bi bi-bug-fill"},null,-1),x=l("i",{class:"bi bi-gear-wide-connected"},null,-1),B=l("i",{class:"bi bi-person-badge-fill"},null,-1),I=l("i",{class:"bi bi-check-lg"},null,-1),P=l("i",{class:"bi bi-exclamation-triangle-fill"},null,-1),S=l("i",{class:"bi bi-bug-fill"},null,-1),C=l("th",null,"属性名",-1),W=l("th",null,"说明",-1),T=l("th",null,"类型",-1),k=l("th",null,"默认值",-1),v=l("td",null,"type",-1),E=l("td",null,"类型",-1),N={style:{display:"flex","flex-wrap":"wrap",gap:"4px"}},V=l("td",null,"text",-1),A=l("td",null,"文本内容",-1),F=l("td",null,"string",-1),G=l("td",null,"—",-1),z=l("td",null,"color",-1),q=l("td",null,"自定义颜色",-1),H=l("td",null,"string",-1),J=l("td",null,"—",-1),K=l("th",null,"插槽名",-1),L=l("th",null,"说明",-1),M=l("td",null,"default",-1),O=l("td",null,"默认内容",-1),Q=l("td",null,"icon",-1),R=l("td",null,"图标",-1),et=p({__name:"guide-button",setup(U){return(X,Y)=>{const a=d("jy-button"),u=d("jy-code"),_=d("jy-button-group"),c=d("jy-row");return f(),g("div",null,[t(y,{title:"Button 按钮",id:"Id_Button",size:"large"}),t(o,{title:"基础 Foundation",id:"Id_Button_Foundation"},{default:e(()=>[t(a,null,{default:e(()=>[n("Default")]),_:1}),t(a,{type:"primary"},{default:e(()=>[n("Primary")]),_:1}),t(a,{type:"success"},{default:e(()=>[n("Success")]),_:1}),t(a,{type:"warning"},{default:e(()=>[n("Warning")]),_:1}),t(a,{type:"danger"},{default:e(()=>[n("Danger")]),_:1}),t(u,{code:`<template>
	<jy-button>Default</jy-button>
	<jy-button type="primary">Primary</jy-button>
	<jy-button type="success">Success</jy-button>
	<jy-button type="warning">Warning</jy-button>
	<jy-button type="danger">Danger</jy-button>
</template>`})]),_:1}),t(o,{title:"禁用 Disabled",id:"Id_Button_Disabled"},{default:e(()=>[t(a,{disabled:""},{default:e(()=>[n("Default")]),_:1}),t(a,{type:"primary",disabled:""},{default:e(()=>[n("Primary")]),_:1}),t(a,{type:"success",disabled:""},{default:e(()=>[n("Success")]),_:1}),t(a,{type:"warning",disabled:""},{default:e(()=>[n("Warning")]),_:1}),t(a,{type:"danger",disabled:""},{default:e(()=>[n("Danger")]),_:1}),t(u,{code:`<template>
	<jy-button disabled>Default</jy-button>
	<jy-button type="primary" disabled>Primary</jy-button>
	<jy-button type="success" disabled>Success</jy-button>
	<jy-button type="warning" disabled>Warning</jy-button>
	<jy-button type="danger" disabled>Danger</jy-button>
</template>`})]),_:1}),t(o,{title:"按钮组 Button Group",id:"Id_Button_Group"},{default:e(()=>[t(c,null,{default:e(()=>[t(_,null,{default:e(()=>[t(a,null,{default:e(()=>[n("default")]),_:1}),t(a,{type:"primary"},{default:e(()=>[n("Primary")]),_:1}),t(a,{type:"success"},{default:e(()=>[n("success")]),_:1}),t(a,{type:"warning"},{default:e(()=>[n("warning")]),_:1}),t(a,{type:"danger"},{default:e(()=>[n("danger")]),_:1})]),_:1})]),_:1}),t(u,{code:`<template>
	<jy-button-group>
		<jy-button>default</jy-button>
		<jy-button type="primary">Primary</jy-button>
		<jy-button type="success">success</jy-button>
		<jy-button type="warning">warning</jy-button>
		<jy-button type="danger">danger</jy-button>
	</jy-button-group>
</template>`})]),_:1}),t(o,{title:"图标 Button Icon",id:"Id_Button_Icon"},{default:e(()=>[t(c,null,{default:e(()=>[t(a,null,{icon:e(()=>[m]),default:e(()=>[n(" Default ")]),_:1}),t(a,{type:"primary"},{icon:e(()=>[j]),default:e(()=>[n(" Primary ")]),_:1}),t(a,{type:"success"},{icon:e(()=>[h]),default:e(()=>[n(" Success ")]),_:1}),t(a,{type:"warning"},{icon:e(()=>[w]),default:e(()=>[n(" Warning ")]),_:1}),t(a,{type:"danger"},{icon:e(()=>[D]),default:e(()=>[n(" Danger ")]),_:1})]),_:1}),t(c,null,{default:e(()=>[t(_,null,{default:e(()=>[t(a,null,{icon:e(()=>[x]),default:e(()=>[n(" Default ")]),_:1}),t(a,{type:"primary"},{icon:e(()=>[B]),default:e(()=>[n(" Primary ")]),_:1}),t(a,{type:"success"},{icon:e(()=>[I]),default:e(()=>[n(" Success ")]),_:1}),t(a,{type:"warning"},{icon:e(()=>[P]),default:e(()=>[n(" Warning ")]),_:1}),t(a,{type:"danger"},{icon:e(()=>[S]),default:e(()=>[n(" Danger ")]),_:1})]),_:1})]),_:1}),t(u,{code:`<template>
	<jy-button>
		<template #icon>
			<i class="bi bi-gear-wide-connected"></i>
		</template>
		Default
	</jy-button>
	<jy-button type="primary">
		<template #icon>
			<i class="bi bi-person-badge-fill"></i>
		</template>
		Primary
	</jy-button>
	<jy-button type="success">
		<template #icon>
			<i class="bi bi-check-lg"></i>
		</template>
		Success
	</jy-button>
	<jy-button type="warning">
		<template #icon>
			<i class="bi bi-exclamation-triangle-fill"></i>
		</template>
		Warning
	</jy-button>
	<jy-button type="danger">
		<template #icon>
			<i class="bi bi-bug-fill"></i>
		</template>
		Danger
	</jy-button>
	<jy-button-group>
		<jy-button>
			<template #icon>
				<i class="bi bi-gear-wide-connected"></i>
			</template>
			Default
		</jy-button>
		<jy-button type="primary">
			<template #icon>
				<i class="bi bi-person-badge-fill"></i>
			</template>
			Primary
		</jy-button>
		<jy-button type="success">
			<template #icon>
				<i class="bi bi-check-lg"></i>
			</template>
			Success
		</jy-button>
		<jy-button type="warning">
			<template #icon>
				<i class="bi bi-exclamation-triangle-fill"></i>
			</template>
			Warning
		</jy-button>
		<jy-button type="danger">
			<template #icon>
				<i class="bi bi-bug-fill"></i>
			</template>
			Danger
		</jy-button>
	</jy-button-group>
</template>`})]),_:1}),t(o,{title:"自定义颜色 Custom Color",id:"Id_Button_Custom_Color"},{default:e(()=>[t(a,{color:"#b80d57"},{default:e(()=>[n("Default")]),_:1}),t(a,{color:"#b80d57",disabled:""},{default:e(()=>[n("Default")]),_:1}),t(u,{code:`<template>
	<jy-button color="#b80d57">Default</jy-button>
	<jy-button color="#b80d57" disabled>Default</jy-button>
</template>`})]),_:1}),t(o,{title:"属性 Attributes",id:"Id_Button_Attributes"},{default:e(()=>[t(b,null,{thead:e(()=>[t(r,null,{default:e(()=>[C,W,T,k]),_:1})]),tbody:e(()=>[t(s,null,{default:e(()=>[v,E,l("td",null,[l("div",N,[t(i,{text:"default"}),n("/"),t(i,{text:"primary"}),n("/"),t(i,{text:"success"}),n("/"),t(i,{text:"warning"}),n("/"),t(i,{text:"danger"})])]),l("td",null,[t(i,{text:"default"})])]),_:1}),t(s,null,{default:e(()=>[V,A,F,G]),_:1}),t(s,null,{default:e(()=>[z,q,H,J]),_:1})]),_:1})]),_:1}),t(o,{title:"插槽 Slots",id:"Id_Button_Slots"},{default:e(()=>[t(b,null,{thead:e(()=>[t(r,null,{default:e(()=>[K,L]),_:1})]),tbody:e(()=>[t(s,null,{default:e(()=>[M,O]),_:1}),t(s,null,{default:e(()=>[Q,R]),_:1})]),_:1})]),_:1})])}}});export{et as default};
