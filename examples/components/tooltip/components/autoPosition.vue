<template>
  <codeBox :title="title"
    :description="description"
    :code="autoPosition">
    <div :style="wrapStyles">
      <ik-tooltip placement="left" title="Prompt Text" :getPopupContainer="getPopupContainer">
        <ik-button>Adjust automatically / 自动调整</ik-button>
      </ik-tooltip>
      <br />
      <ik-tooltip
        style="marginTop: 10px"
        placement="left"
        title="Prompt Text"
        :getPopupContainer="getPopupContainer"
        :autoAdjustOverflow="false"
      >
        <ik-button>Ingore / 不处理</ik-button>
      </ik-tooltip>
    </div>
  </codeBox>
</template>
<script>
import { autoPosition } from '../code.js'
const wrapStyles = {
  overflow: 'hidden',
  position: 'relative',
  padding: '24px',
  border: '1px solid #e9e9e9'
}
export default {
  name: 'autoPositionTooltip',
  data () {
    return {
      title: '基本',
      description: '最简单的用法。',
      autoPosition,
      wrapStyles
    }
  },
  methods: {
    getPopupContainer (trigger) {
      return trigger.parentElement
    },
    test () {
      alert(1)
    }
  }
}
</script>
