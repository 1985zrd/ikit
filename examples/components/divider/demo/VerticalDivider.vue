<template>
  <codeBox title="垂直分割线"
           description="使用 type='vertical' 设置为行内的垂直分割线。"
           :code="code">
    <div>
      Text
      <ik-divider type="vertical" />
      <a href="#">Link</a>
      <ik-divider type="vertical" />
      <a href="#">Link</a>
    </div>
  </codeBox>
</template>
<script>
import { verticalDivider } from '../divider'
export default {
  data () {
    return {
      code: verticalDivider
    }
  }
}
</script>
