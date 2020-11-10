<template>
  <div class="row">
    <ik-row>
      <ik-col :span="6">
        <ik-button @click="handleClick">11</ik-button>
      </ik-col>
      <ik-col :span="6">
        <ik-button type="primary"
                   icon="search"
                   :disabled="true">主要按钮</ik-button>
      </ik-col>
      <ik-col :span="6">
        <ik-button type="primary"
                   icon="search"
                   size="large">主要按钮</ik-button>
      </ik-col>
      <ik-col :span="6">4</ik-col>
    </ik-row>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'grid-demo',
  methods: {
    handleClick () {
      console.log(1)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
