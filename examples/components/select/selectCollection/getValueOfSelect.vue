<template>
  <codeBox :title="title"
           :description="description"
           :code="getValueOfSelectCode">
    <ik-select labelInValue
               :defaultValue="{ key: 'lucy' }"
               style="width: 120px"
               @change="handleChange">
      <ik-select-option value="jack">Jack (100)</ik-select-option>
      <ik-select-option value="lucy">Lucy (101)</ik-select-option>
    </ik-select>
  </codeBox>
</template>
<script>
import { getValueOfSelectCode } from '../demoCode.js'
export default {
  name: 'getValueOfSelect',
  data () {
    return {
      title: '获得选项的文本',
      description: '默认情况下 onChange 里只能拿到 value，如果需要拿到选中的节点文本 label，可以使用 labelInValue 属性。选中项的 label 会被包装到 value 中传递给 onChange 等函数，此时 value 是一个对象。',
      getValueOfSelectCode
    }
  },
  methods: {
    handleChange (value) {
      console.log(value) // { key: "lucy", label: "Lucy (101)" }
    }
  }
}
</script>
