<template>
  <codeBox :title="title"
           :description="description"
           :code="customStyles">
    <div id="components-back-top-demo-custom">
      <ik-back-top>
        <div class="ant-back-top-inner">UP</div>
      </ik-back-top>
      Scroll down to see the bottom-right
      <strong style="color: #1088e9"> blue </strong>
      button.
    </div>
  </codeBox>
</template>
<script>
import { customStyles } from '../codeExample'
export default {
  data () {
    return {
      title: '自定义样式',
      description: '可以自定义回到顶部按钮的样式，限制宽高：40px * 40px。',
      customStyles
    }
  }
}
</script>
<style scoped>
#components-back-top-demo-custom .ant-back-top {
  bottom: 100px;
}
#components-back-top-demo-custom .ant-back-top-inner {
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 4px;
  background-color: #1088e9;
  color: #fff;
  text-align: center;
  font-size: 20px;
}
</style>
