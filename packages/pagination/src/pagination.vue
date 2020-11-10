
<template>
  <a-pagination class='ik-pagination' v-bind='$attrs' v-on='$listeners'>
    <slot name='buildOptionText' :data='{value:$attrs.total}'></slot>
    <slot></slot>
  </a-pagination>
</template>

<script type='text/ecmascript-6'>
import { Pagination } from 'ant-design-vue'
export default {
  name: 'ik-pagination',
  inheritAttrs: false,
  components: {
    'a-pagination': Pagination
  },
  methods: {}
}
</script>
