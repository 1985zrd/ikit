<template>
  <codeBox :title="title"
    :description="description"
    :code="loadingCode">
    <ik-skeleton type="list" :loading="loading">
      <h3 slot="content">loading为true</h3>
    </ik-skeleton>
    <ik-switch v-model="loading" style="margin-top: 10px;"></ik-switch>
  </codeBox>
</template>
<script>
import { loadingCode } from '../code.js'
export default {
  name: 'loadingSkeleton',
  data () {
    return {
      title: 'loading',
      description: '加载占位图包含子组件。',
      loadingCode,
      loading: false
    }
  }
}
</script>
