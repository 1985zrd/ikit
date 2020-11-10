export const basic = `
<template>
  <ik-rate v-model="value" />
</template>
<script>
  export default {
    data() {
      return {
        value: 2,
      };
    },
  };
</script>
`

export const halfAStar = `
<template>
  <ik-rate :defaultValue="2.5" allowHalf />
</template>
`

export const hasTextStar = `
<template>
  <span>
    <ik-rate :tooltips="desc" v-model="value" />
    <span class="ant-rate-text">{{desc[value - 1]}}</span>
  </span>
</template>
<script>
  export default {
    data() {
      return {
        value: 3,
        desc: ['terrible', 'bad', 'normal', 'good', 'wonderful'],
      };
    },
  };
</script>
`

export const readonly = `
<template>
  <ik-rate :defaultValue="2" disabled />
</template>
`

export const clear = `
<template>
  <div>
    <ik-rate :defaultValue="3" /> allowClear: true
    <br />
    <ik-rate :allowClear="false" :defaultValue="3" /> allowClear: false
    <br />
  </div>
</template>
`

export const customIcon = `
<template>
  <div>
    <ik-rate allowHalf>
      <ik-icon slot="character" type="heart" />
    </ik-rate>
    <br />
    <ik-rate character="A" allowHalf style="fontSize: 36px" />
    <br />
    <ik-rate character="好" allowHalf />
    <br />
  </div>
</template>
`
