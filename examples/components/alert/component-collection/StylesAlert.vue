<template>
  <codeBox :title="title"
           :description="description"
           :code="stylesAlert">
    <ik-alert message="Success Text" type="success" />
    <br>
    <ik-alert message="Info Text" type="info" />
    <br>
    <ik-alert message="Warning Text" type="warning" />
    <br>
    <ik-alert message="Error Text" type="error" />
  </codeBox>
</template>
<script>
import { stylesAlert } from '../codeExample'
export default {
  data () {
    return {
      title: '四种样式',
      description: '共有四种样式 success、info、warning、error。',
      stylesAlert
    }
  }
}
</script>
