<template>
  <codeBox :title="title" :description="description" :code="onChangeCode">
    <ik-affix :offsetTop="120" @change="change">
      <ik-button>120px to affix top</ik-button>
    </ik-affix>
  </codeBox>
</template>
<script>
import { onChangeCode } from '../codeExample'
export default {
  data () {
    return {
      title: '固定状态改变的回调',
      description: '可以获得是否固定的状态。',
      onChangeCode
    }
  },
  methods: {
    change (affixed) {
      console.log(affixed)
    }
  }
}
</script>
