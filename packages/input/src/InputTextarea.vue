<template>
  <a-input-textarea v-bind="$attrs" v-on="$listeners"> </a-input-textarea>
</template>
<script>
import { Input } from 'ant-design-vue'
export default {
  name: 'ik-textarea',
  inheritAttrs: false,
  components: {
    'a-input-textarea': Input.TextArea
  }
}
</script>
