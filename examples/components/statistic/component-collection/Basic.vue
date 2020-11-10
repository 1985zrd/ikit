<template>
  <codeBox :title="title"
           :description="description"
           :code="basic">
    <ik-statistic title="Active Users"
                 :value="112893"
                 style="margin-right: 50px" />
    <ik-statistic title="Account Balance (CNY)"
                 :precision="2"
                 :value="112893" />
  </codeBox>
</template>
<script>
import { basic } from '../codeExample'
export default {
  data () {
    return {
      title: '基本',
      description: '简单展示',
      basic
    }
  }
}
</script>
