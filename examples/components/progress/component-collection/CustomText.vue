<template>
  <codeBox :title="title" :description="description" :code="customText">
    <ik-progress type="circle" :percent="75" :format="percent => `${percent} Days`" />
    <ik-progress type="circle" :percent="100" :format="() => 'Done'" />
    <ik-progress type="circle" :percent="75">
      <template v-slot:format="percent">
        <span style="color: red">{{percent}}</span>
      </template>
    </ik-progress>
  </codeBox>
</template>
<script>
import { customText } from '../codeExample'
export default {
  data () {
    return {
      title: '自定义文字格式',
      description: 'format 属性指定格式。',
      customText
    }
  }
}
</script>
<style scoped>
  div.ant-progress-circle,
  div.ant-progress-line {
    margin-right: 8px;
    margin-bottom: 8px;
  }
</style>
