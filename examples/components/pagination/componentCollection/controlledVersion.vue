<template>
  <codeBox :title="title" :description="description" :code="controlledVersionCode">
    <ik-pagination @change="onChange" :current="current" :total="50" />
  </codeBox>
</template>

<script>
import { controlledVersionCode } from '../codeExample'
export default {
  data () {
    return {
      current: 3,
      controlledVersionCode,
      title: '受控',
      description: '受控制的页码。'
    }
  },
  methods: {
    onChange (current) {
      this.current = current
    }
  }
}
</script>
