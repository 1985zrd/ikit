<template>
  <codeBox :title="title"
    :description="description"
    :code="event">
    <div class="code-box-demo">
      <ik-slider :defaultValue="30" @change="onChange" @afterChange="onAfterChange" />
      <ik-slider
      range
      :step="10"
      :defaultValue="[20, 50]"
      @change="onChange"
      @afterChange="onAfterChange"
      />
    </div>
  </codeBox>
</template>
<script>
import { event } from '../code.js'
export default {
  name: 'eventSlider',
  data () {
    return {
      title: '事件',
      description: '当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入。在 onmouseup 时，会触发 onAfterChange 事件，并把当前值作为参数传入。',
      event
    }
  },
  methods: {
    onChange (value) {
      console.log('change: ', value)
    },
    onAfterChange (value) {
      console.log('afterChange: ', value)
    }
  }
}
</script>
<style scoped>
  .code-box-demo .ant-slider {
    margin-bottom: 16px;
  }
</style>
