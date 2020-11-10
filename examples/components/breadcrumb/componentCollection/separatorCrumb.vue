<template>
  <codeBox :title="title" :description="description" :code="separatorCrumb">
    <div>
      <ik-breadcrumb separator=">">
        <ik-breadcrumb-item>Home</ik-breadcrumb-item>
        <ik-breadcrumb-item href="">Application Center</ik-breadcrumb-item>
        <ik-breadcrumb-item href="">Application List</ik-breadcrumb-item>
        <ik-breadcrumb-item>An Application</ik-breadcrumb-item>
      </ik-breadcrumb>
      <ik-breadcrumb>
        <span slot="separator" style="color: red">></span>
        <ik-breadcrumb-item>Home</ik-breadcrumb-item>
        <ik-breadcrumb-item href="">Application Center</ik-breadcrumb-item>
        <ik-breadcrumb-item href="">Application List</ik-breadcrumb-item>
        <ik-breadcrumb-item>An Application</ik-breadcrumb-item>
      </ik-breadcrumb>
    </div>
  </codeBox>
</template>

<script>
import { separatorCrumb } from './../codeExample'

export default {
  data () {
    return {
      separatorCrumb,
      title: '分隔符',
      description: '使用separator=">"可以自定义分隔符，或者使用slot="separator"自定义更复杂的分隔符'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
