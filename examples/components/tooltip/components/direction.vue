<template>
  <codeBox :title="title"
    :description="description"
    :code="direction">
    <ik-tooltip placement="topLeft" title="Prompt Text">
      <ik-button>Align edge / 边缘对齐</ik-button>
    </ik-tooltip>
    <ik-tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
      <ik-button>Arrow points to center / 箭头指向中心</ik-button>
    </ik-tooltip>
  </codeBox>
</template>
<script>
import { direction } from '../code.js'
export default {
  name: 'directionTooltip',
  data () {
    return {
      title: '箭头指向 ',
      description: '设置了 arrowPointAtCenter 后，箭头将指向目标元素的中心。',
      direction
    }
  }
}
</script>
<style scoped>
.ant-btn {
  margin-right: 20px;
}
</style>
