<template>
  <codeBox :title="title" :description="description" :code="basicCode">
    <div>
      <ik-switch defaultChecked @change="onChange" />
    </div>
  </codeBox>
</template>
<script>
import { basicCode } from '../codeExample'
export default {
  data () {
    return {
      title: '基本用法',
      description: '最简单的用法。',
      basicCode
    }
  },
  methods: {
    onChange (checked) {
      console.log(`ik-switch to ${checked}`)
    }
  }
}
</script>
