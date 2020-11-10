<template>
  <codeBox :title="title"
    :description="description"
    :code="base">
    <ik-tooltip>
      <template slot="title">
        prompt text
      </template>
      Tooltip will show when mouse enter.
    </ik-tooltip>
  </codeBox>
</template>
<script>
import { base } from '../code.js'
export default {
  name: 'baseTooltip',
  data () {
    return {
      title: '基本',
      description: '最简单的用法。',
      base
    }
  }
}
</script>
