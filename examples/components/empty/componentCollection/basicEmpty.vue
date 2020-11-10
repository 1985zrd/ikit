<template>
  <div class="content">
    <codeBox :title="title" :description="description" :code="basicEmpty">
      <ik-empty />
    </codeBox>
  </div>
</template>

<script>
import { basicEmpty } from './../codeExample'

export default {
  data () {
    return {
      basicEmpty,
      title: '基本',
      description: '简单的展示'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
