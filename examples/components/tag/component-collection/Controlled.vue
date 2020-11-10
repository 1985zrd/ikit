<template>
  <codeBox :title="title" :description="description" :code="controlledCode">
    <div>
      <ik-tag closable v-model="visible">
        Movies
      </ik-tag>
      <br />
      <br />
      <ik-button size="small" @click="()=>{this.visible = !this.visible}">
        Toggle
      </ik-button>
    </div>
  </codeBox>
</template>
<script>
import { controlledCode } from '../codeExample'
export default {
  data () {
    return {
      title: '控制关闭状态',
      description: '属性控制关闭状态。',
      controlledCode,
      visible: true
    }
  }
}
</script>
