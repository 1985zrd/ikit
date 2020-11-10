<template>
  <codeBox :title="title"
    :description="description"
    :code="bindInput">
    <ik-row>
      <ik-col :span="12">
        <ik-slider :min="1" :max="20" v-model="inputValue1" />
      </ik-col>
      <ik-col :span="4">
        <ik-input-number :min="1" :max="20" style="marginLeft: 16px" v-model="inputValue1" />
      </ik-col>
    </ik-row>
    <ik-row>
      <ik-col :span="12">
        <ik-slider :min="0" :max="1" v-model="inputValue" :step="0.01" />
      </ik-col>
      <ik-col :span="4">
        <ik-input-number
          :min="0"
          :max="1"
          :step="0.01"
          style="marginLeft: 16px"
          v-model="inputValue"
        />
      </ik-col>
    </ik-row>
  </codeBox>
</template>
<script>
import { bindInput } from '../code.js'
export default {
  name: 'bindInputSlider',
  data () {
    return {
      title: '带输入框的滑块',
      description: '和 数字输入框 组件保持同步。',
      bindInput,
      inputValue: 0,
      inputValue1: 1
    }
  }
}
</script>
<style scoped>
  .code-box-demo .ant-slider {
    margin-bottom: 16px;
  }
</style>
