<template>
  <codeBox title="密码框 " description="密码框" :code="passwordInputCode">
    <ik-input-password placeholder="input password" />
  </codeBox>
</template>
<script>
import { passwordInputCode } from './../codeExample'
export default {
  data () {
    return {
      passwordInputCode
    }
  }
}
</script>
