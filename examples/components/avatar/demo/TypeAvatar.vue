<template>
  <codeBox title="类型"
           description="支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。"
           :code="code">
    <div>
      <ik-avatar icon="user"
                 style="margin-right:20px" />
      <ik-avatar style="margin-right:20px">U</ik-avatar>
      <ik-avatar style="margin-right:20px">USER</ik-avatar>
      <ik-avatar style="margin-right:20px"
                 src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <ik-avatar style="color: #f56a00; backgroundColor: #fde3cf;margin-right:20px">U</ik-avatar>
      <ik-avatar style="backgroundColor:#87d068"
                 icon="user" />
    </div>
  </codeBox>
</template>
<script>
import { typeAvatar } from '../avatar.js'
export default {
  data () {
    return {
      code: typeAvatar
    }
  }
}
</script>
