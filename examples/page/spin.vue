
<template>
  <div style="padding: 20px;">
    <div style="margin-top: 20px;">
      <h2>Spin</h2>
      <ik-spin  :indicator="indicator"/>
      <div style="padding: 20px; border: 1px solid rgba(0,0,0,0.3)">
        <ik-spin :spinning="isLoading" tip="loading...">
          <div class="spin-content">
            可以点击‘切换’按钮，控制本区域的spin展示。
          </div>
        </ik-spin>

      </div>
      <ik-button @click="changeHandler">切换</ik-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'spin-demo',
  data () {
    return {
      isLoading: false,
      indicator: <ik-icon type="loading" style="font-size: 24px" spin />
    }
  },
  methods: {
    changeHandler () {
      this.isLoading = !this.isLoading
    }
  }
}
</script>
