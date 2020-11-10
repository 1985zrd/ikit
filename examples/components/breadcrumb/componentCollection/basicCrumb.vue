<template>
  <div class="content">
    <codeBox :title="title" :description="description" :code="basicCrumb">
      <ik-breadcrumb>
        <ik-breadcrumb-item>Home</ik-breadcrumb-item>
        <ik-breadcrumb-item><a href="">Application Center</a></ik-breadcrumb-item>
        <ik-breadcrumb-item><a href="">Application List</a></ik-breadcrumb-item>
        <ik-breadcrumb-item>An Application</ik-breadcrumb-item>
      </ik-breadcrumb>
    </codeBox>
  </div>
</template>

<script>
import { basicCrumb } from './../codeExample'

export default {
  data () {
    return {
      basicCrumb,
      title: '基本',
      description: '最简单的用法'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
