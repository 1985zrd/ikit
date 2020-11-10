<template>
  <codeBox :title="title" :description="description" :code="iconCrumb">
    <ik-breadcrumb>
      <ik-breadcrumb-item href="">
        <ik-icon type="home" />
      </ik-breadcrumb-item>
      <ik-breadcrumb-item href="">
        <ik-icon type="user" />
        <span>Application List</span>
      </ik-breadcrumb-item>
      <ik-breadcrumb-item>
        Application
      </ik-breadcrumb-item>
    </ik-breadcrumb>
  </codeBox>
</template>

<script>
import { iconCrumb } from './../codeExample'

export default {
  data () {
    return {
      iconCrumb,
      title: '带有图标的',
      description: '图标放在文字前面'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
