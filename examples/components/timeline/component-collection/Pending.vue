<template>
  <codeBox :title="title" :description="description" :code="PendingCode">
    <div>
      <ik-timeline pending="Recording..." :reverse="reverse">
        <ik-timeline-item>Create a services site 2015-09-01</ik-timeline-item>
        <ik-timeline-item>Solve initial network problems 2015-09-01</ik-timeline-item>
        <ik-timeline-item>Technical testing 2015-09-01</ik-timeline-item>
      </ik-timeline>
      <ik-button type="primary" style="margin-top: 16px" @click="handleClick">Toggle Reverse</ik-button>
    </div>
  </codeBox>
</template>
<script>
import { PendingCode } from '../codeExample'
export default {
  data () {
    return {
      reverse: false,
      title: '最后一个及排序',
      description: '当任务状态正在发生，还在记录过程中，可用幽灵节点来表示当前的时间节点，当 pending 为真值时展示幽灵节点，如果 pending 是 React 元素可用于定制该节点内容，同时 pendingDot 将可以用于定制其轴点。reverse 属性用于控制节点排序，为 false 时按正序排列，为 true 时按倒序排列。',
      PendingCode
    }
  },
  methods: {
    handleClick () {
      this.reverse = !this.reverse
    }
  }
}
</script>
