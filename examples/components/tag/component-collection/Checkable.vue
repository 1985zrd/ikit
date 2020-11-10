<template>
  <codeBox :title="title" :description="description" :code="checkableCode">
    <div>
      <ik-checkable-tag v-model="checked1" @change="handleChange">Tag1</ik-checkable-tag>
      <ik-checkable-tag v-model="checked2" @change="handleChange">Tag2</ik-checkable-tag>
      <ik-checkable-tag v-model="checked3" @change="handleChange">Tag3</ik-checkable-tag>
    </div>
  </codeBox>
</template>
<script>
import { checkableCode } from '../codeExample'
export default {
  data () {
    return {
      title: '可选择',
      description: '可通过 `CheckableTag` 实现类似 Checkbox 的效果，点击切换选中效果。 该组件为完全受控组件，不支持非受控用法。',
      checkableCode,
      checked1: false,
      checked2: false,
      checked3: false
    }
  },
  methods: {
    handleChange (checked) {
      console.log(checked)
    }
  }
}
</script>
