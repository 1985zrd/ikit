<template>
  <codeBox :title="title"
    :description="description"
    :code="state">
    <ik-badge status="success" />
    <ik-badge status="error" />
    <ik-badge status="default" />
    <ik-badge status="processing" />
    <ik-badge status="warning" />
    <br />
    <ik-badge status="success" text="Success" />
    <br />
    <ik-badge status="error" text="Error" />
    <br />
    <ik-badge status="default" text="Default" />
    <br />
    <ik-badge status="processing" text="Processing" />
    <br />
    <ik-badge status="warning" text="warning" />
  </codeBox>
</template>
<script>
import { state } from '../code.js'
export default {
  name: 'stateBadge',
  data () {
    return {
      title: '小红点',
      description: '没有数字。标注状态。',
      state
    }
  }
}
</script>
