export const basic = `
<template>
  <ik-anchor>
    <ik-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
    <ik-anchor-link href="#components-anchor-demo-static" title="Static demo" />
    <ik-anchor-link href="#API" title="API">
      <ik-anchor-link href="#Anchor-Props" title="Anchor Props" />
      <ik-anchor-link href="#Link-Props" title="Link Props" />
    </ik-anchor-link>
  </ik-anchor>
</template>
`

export const staticPosition = `
<template>
  <ik-anchor :affix="false">
    <ik-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
    <ik-anchor-link href="#components-anchor-demo-static" title="Static demo" />
    <ik-anchor-link href="#API" title="API">
      <ik-anchor-link href="#Anchor-Props" title="Anchor Props" />
      <ik-anchor-link href="#Link-Props" title="Link Props" />
    </ik-anchor-link>
  </ik-anchor>
</template>
`

export const customClick = `
<template>
  <ik-anchor :affix="false" @click="handleClick">
    <ik-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
    <ik-anchor-link href="#components-anchor-demo-static" title="Static demo" />
    <ik-anchor-link href="#API" title="API">
      <ik-anchor-link href="#Anchor-Props" title="Anchor Props" />
      <ik-anchor-link href="#Link-Props" title="Link Props" />
    </ik-anchor-link>
  </ik-anchor>
</template>
<script>
  export default {
    methods: {
      handleClick(e, link) {
        e.preventDefault();
        console.log(link);
      },
    },
  };
</script>
`
