<template>
  <codeBox title="基本使用" description="基本使用。" :code="basicInputCode">
    <ik-input placeholder="Basic usage" />
  </codeBox>
</template>

<script>
import { basicInputCode } from './../codeExample'

export default {
  data () {
    return {
      basicInputCode
    }
  }
}
</script>

<style>
</style>
