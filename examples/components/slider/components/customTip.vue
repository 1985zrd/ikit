<template>
  <codeBox :title="title"
    :description="description"
    :code="customTip">
    <ik-slider :tipFormatter="formatter" />
    <ik-slider :tipFormatter="null" />
  </codeBox>
</template>
<script>
import { customTip } from '../code.js'
export default {
  name: 'customTipSlider',
  data () {
    return {
      title: '自定义提示',
      description: '使用 tipFormatter 可以格式化 Tooltip 的内容，设置 tipFormatter={null}，则隐藏 Tooltip。',
      customTip
    }
  },
  methods: {
    formatter (value) {
      return `${value}%`
    }
  }
}
</script>
