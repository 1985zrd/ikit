<template>
  <a-input-group v-bind="$attrs"
                 v-on="$listeners">
    <slot></slot>
  </a-input-group>
</template>
<script>
import { Input } from 'ant-design-vue'
export default {
  name: 'ik-input-group',
  inheritAttrs: false,
  components: {
    'a-input-group': Input.Group
  }
}
</script>
