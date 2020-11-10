<template>
  <codeBox title="左右偏移" :description="description" :code="offsetGridCode">
    <div>
      <ik-row>
        <ik-col :span="8">col-8</ik-col>
        <ik-col :span="8" :offset="8">col-8</ik-col>
      </ik-row>
      <ik-row>
        <ik-col :span="6" :offset="6">col-6 col-offset-6</ik-col>
        <ik-col :span="6" :offset="6">col-6 col-offset-6</ik-col>
      </ik-row>
      <ik-row>
        <ik-col :span="12" :offset="6">col-12 col-offset-6</ik-col>
      </ik-row>
    </div>
  </codeBox>
</template>

<script>
import { offsetGridCode } from './../codeExample'
export default {
  data () {
    return {
      offsetGridCode,
      description: '列偏移。<br/>使用 offset 可以将列向右侧偏。例如，:offset="4" 将元素向右侧偏移了 4 个列（column）的宽度。'
    }
  }
}
</script>
