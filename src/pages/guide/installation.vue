<template>
    <dj-anchor level="1" text="安装" id="Id_Installation" />
    <dj-anchor level="2" text="Node.js 安装" id="Id_NodeJs_Installation" />
    <dj-code language="bash" :code="`# npm
npm install django-ui

# pnpm
pnpm add django-ui`" />
    <dj-anchor level="2" text="CDN 安装" id="Id_Cdn_Installation" />
    <dj-code language="vue" :code="`<script src=\x22https://unpkg.com/django-ui\x22></script>
<script src=\x22https://unpkg.com/django-ui/style.css\x22></script>`" />
</template>