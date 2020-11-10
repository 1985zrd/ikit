<template>
  <div class="calendar">
    <ik-calendar @panelChange="onPanelChange" />
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'calendar-demo',
  data () {
    return {}
  },
  methods: {
    onPanelChange (value, mode) {
      console.log(value, mode)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
