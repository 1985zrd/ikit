<template>
  <codeBox title="预加载的卡片"
           :description="description"
           :code="loadCard">
    <template>
      <div>
        <ik-card :loading="loading" title="Card title">
          whatever content
        </ik-card>
        <ik-button @click="handleClick" style="marginTop: 16px">Toggle loading</ik-button>
      </div>
    </template>
  </codeBox>
</template>
<script>
import { loadCard } from '../card'
export default {
  data () {
    return {
      loadCard,
      description: `数据读入前会有文本块样式`,
      loading: true
    }
  },
  methods: {
    handleClick () {
      this.loading = !this.loading
    }
  }
}
</script>
<style>

</style>
