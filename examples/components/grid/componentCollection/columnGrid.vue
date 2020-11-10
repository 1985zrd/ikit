<template>
  <codeBox title="栅格排序 " :description="description" :code="columnGridCode">
    <ik-row>
      <ik-col :span="18" :push="6">col-18 col-push-6</ik-col>
      <ik-col :span="6" :pull="18">col-6 col-pull-18</ik-col>
    </ik-row>
  </codeBox>
</template>

<script>
import { columnGridCode } from './../codeExample'
export default {
  data () {
    return {
      columnGridCode,
      description: '列排序。<br/> 通过使用 push 和 pull 类就可以很容易的改变列（column）的顺序。'
    }
  }
}
</script>
