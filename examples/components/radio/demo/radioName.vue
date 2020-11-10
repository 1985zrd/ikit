<template>
  <codeBox :title="title"
           :description="description"
           :code="radioName">
    <ik-radio-group name="radioGroup" :defaultValue="2">
        <ik-radio :value="1">A</ik-radio>
        <ik-radio :value="2">B</ik-radio>
        <ik-radio :value="3">C</ik-radio>
        <ik-radio :value="4">D</ik-radio>
      </ik-radio-group>
  </codeBox>
</template>
<script>
import { radioName } from '../radio'
export default {
  name: 'radioName',
  data () {
    return {
      radioName,
      title: '单选组合 - 配合 name 使用',
      description: '可以为 RadioGroup 配置 name 参数，为组合内的 input 元素赋予相同的 name 属性，使浏览器把 RadioGroup 下的 Radio 真正看作是一组（例如可以通过方向键始终在同一组内更改选项）。'
    }
  }
}
</script>
