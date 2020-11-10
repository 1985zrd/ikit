<template>
  <codeBox :title="title"
           :description="description"
           :code="presets">
    <ik-skeleton :type="value"></ik-skeleton>
    <ik-radio-group v-model="value" size="small" buttonStyle="solid" style="margin-top: 10px">
      <ik-radio-button value="list">List</ik-radio-button>
      <ik-radio-button value="code">Code</ik-radio-button>
    </ik-radio-group>
  </codeBox>
</template>
<script>
import { presets } from '../code.js'
export default {
  name: 'presetsSkeleton',
  data () {
    return {
      title: 'type 预设',
      description: '目前只提供了code、list',
      presets,
      value: 'code'
    }
  }
}
</script>
