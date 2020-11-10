<template>
  <codeBox :title="title"
    :description="description"
    :code="vertical">
    <div style="height: 300px">
      <div style="float:left;height: 300px;marginLeft: 70px">
        <ik-slider vertical :defaultValue="30" />
      </div>
      <div style="float:left;height: 300px;marginLeft: 70px">
        <ik-slider vertical range :step="10" :defaultValue="[20, 50]" />
      </div>
      <div style="float:left;height: 300px;marginLeft: 70px">
        <ik-slider vertical range :marks="marks" :defaultValue="[26, 37]" />
      </div>
    </div>
  </codeBox>
</template>
<script>
import { vertical } from '../code.js'
export default {
  name: 'verticalSlider',
  data () {
    return {
      title: '垂直',
      description: '垂直方向的 Slider。',
      vertical,
      marks: {
        0: '0°C',
        26: '26°C',
        37: '37°C',
        100: {
          style: {
            color: '#f50'
          },
          label: <strong>100°C</strong>
        }
      }
    }
  }
}
</script>
