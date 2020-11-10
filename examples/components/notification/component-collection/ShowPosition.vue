<template>
    <codeBox :title="title"
           :description="description"
           :code="showPosition">
    <ik-select v-model="selected" :style="{ width: '120px', marginRight: '10px' }">
      <ik-select-option v-for="val in options" :key="val" :value="val">{{val}}</ik-select-option>
    </ik-select>
    <ik-button type="primary" @click="openNotification">Open the notification box</ik-button>
  </codeBox>
</template>
<script>
import { showPosition } from './../codeExample'
const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']

export default {
  data () {
    return {
      showPosition,
      title: '位置',
      description: '可以设置通知从右上角、右下角、左下角、左上角弹出。',
      options,
      selected: 'topRight'
    }
  },
  watch: {
    selected (val) {
      this.$notification.config({
        placement: val
      })
    }
  },
  methods: {
    openNotification (val) {
      this.$notification.open({
        message: 'Notification Title',
        description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
      })
    }
  }
}
</script>
