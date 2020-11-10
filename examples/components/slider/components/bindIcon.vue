<template>
  <codeBox :title="title"
    :description="description"
    :code="bindIcon">
    <div class="icon-wrapper">
      <ik-icon :style="{color: preColor}" type="frown-o" />
      <ik-slider :min="0" :max="20" @change="handleChange" :value="value" />
      <ik-slider :min="0" :max="20" v-model="value" />
      <ik-icon :style="{color: nextColor}" type="smile-o" />
    </div>
  </codeBox>
</template>
<script>
import { bindIcon } from '../code.js'
export default {
  name: 'bindIconSlider',
  data () {
    return {
      title: '带 icon 的滑块 ',
      description: '滑块左右可以设置图标来表达业务含义。',
      bindIcon,
      value: 0,
      min: 0,
      max: 20
    }
  },
  methods: {
    handleChange (value) {
      this.value = value
    }
  },
  computed: {
    preColor () {
      const { max, min, value } = this
      const mid = ((max - min) / 2).toFixed(5)
      return value >= mid ? '' : 'rgba(0, 0, 0, .45)'
    },
    nextColor () {
      const { max, min, value } = this
      const mid = ((max - min) / 2).toFixed(5)
      return value >= mid ? 'rgba(0, 0, 0, .45)' : ''
    }
  }
}
</script>
<style scoped>
.icon-wrapper {
  position: relative;
  padding: 0px 30px;
}

.icon-wrapper .anticon {
  position: absolute;
  top: -2px;
  width: 16px;
  height: 16px;
  line-height: 1;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.25);
}

.icon-wrapper .anticon:first-child {
  left: 0;
}

.icon-wrapper .anticon:last-child {
  right: 0;
}
</style>
