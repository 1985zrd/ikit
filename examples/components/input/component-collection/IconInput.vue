<template>
  <codeBox title="前缀和后缀" description="在输入框上添加前缀或后缀图标。" :code="iconInputCode">
    <div class="components-input-demo-presuffix">
      <ik-input placeholder="Basic usage" v-model="userName" ref="userNameInput">
        <ik-icon slot="prefix" type="user" />
        <ik-tooltip slot="suffix" title="Extra information">
          <ik-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
        </ik-tooltip>
      </ik-input>
    </div>
  </codeBox>
</template>

<script>
import { iconInputCode } from './../codeExample'
export default {
  data () {
    return {
      iconInputCode,
      userName: ''
    }
  },
  methods: {
    emitEmpty () {
      this.$refs.userNameInput.focus()
      this.userName = ''
    }
  }
}
</script>
<style scoped>
.components-input-demo-presuffix .anticon-close-circle {
  cursor: pointer;
  color: #ccc;
  transition: color 0.3s;
  font-size: 12px;
}
.components-input-demo-presuffix .anticon-close-circle:hover {
  color: #999;
}
.components-input-demo-presuffix .anticon-close-circle:active {
  color: #666;
}
</style>
