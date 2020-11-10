<template>
  <a-input-search v-bind="$attrs" v-on="$listeners">
    <slot name="enterButton"></slot>
  </a-input-search>
</template>
<script>
import { Input } from 'ant-design-vue'
export default {
  name: 'ik-input-search',
  inheritAttrs: false,
  components: {
    'a-input-search': Input.Search
  }
}
</script>
