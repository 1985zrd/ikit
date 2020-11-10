<template>
  <codeBox title="Flex 布局 " :description="description" :code="flexLayoutGridCode">
    <div>
      <p>sub-element align left</p>
      <ik-row type="flex" justify="start">
        <ik-col :span="4">col-4</ik-col>
        <ik-col :span="4">col-4</ik-col>
        <ik-col :span="4">col-4</ik-col>
        <ik-col :span="4">col-4</ik-col>
      </ik-row>

      <p>sub-element align center</p>
      <ik-row type="flex" justify="center">
        <ik-col :span="4">col-4</ik-col>
        <ik-col :span="4">col-4</ik-col>
        <ik-col :span="4">col-4</ik-col>
        <ik-col :span="4">col-4</ik-col>
      </ik-row>

      <p>sub-element align right</p>
      <ik-row type="flex" justify="end">
        <ik-col :span="4">col-4</ik-col>
        <ik-col :span="4">col-4</ik-col>
        <ik-col :span="4">col-4</ik-col>
        <ik-col :span="4">col-4</ik-col>
      </ik-row>

      <p>sub-element monospaced arrangement</p>
      <ik-row type="flex" justify="space-between">
        <ik-col :span="4">col-4</ik-col>
        <ik-col :span="4">col-4</ik-col>
        <ik-col :span="4">col-4</ik-col>
        <ik-col :span="4">col-4</ik-col>
      </ik-row>

      <p>sub-element align full</p>
      <ik-row type="flex" justify="space-around">
        <ik-col :span="4">col-4</ik-col>
        <ik-col :span="4">col-4</ik-col>
        <ik-col :span="4">col-4</ik-col>
        <ik-col :span="4">col-4</ik-col>
      </ik-row>
    </div>
  </codeBox>
</template>

<script>
import { flexLayoutGridCode } from './../codeExample'
export default {
  data () {
    return {
      flexLayoutGridCode,
      description: 'Flex 布局基础。<br/>使用 row-flex 定义 flex 布局，其子元素根据不同的值 start,center,end,space-between,space-around，分别定义其在父节点里面的排版方式。'
    }
  }
}
</script>
