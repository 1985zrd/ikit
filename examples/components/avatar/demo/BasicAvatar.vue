<template>
  <codeBox title="基本"
           description="头像有三种尺寸，两种形状可选。"
           :code="code">
    <div>
      <div>
        <ik-avatar :size="70"
                   icon="user" />
        <ik-avatar style="margin-left:20px"
                   :size="60"
                   icon="user" />
        <ik-avatar style="margin-left:20px"
                   size="large"
                   icon="user" />
        <ik-avatar style="margin-left:20px"
                   icon="user" />
        <ik-avatar style="margin-left:20px"
                   size="small"
                   icon="user" />
      </div>
      <br />
      <div>
        <ik-avatar shape="square"
                   :size="70"
                   icon="user" />
        <ik-avatar style="margin-left:20px"
                   shape="square"
                   :size="60"
                   icon="user" />
        <ik-avatar style="margin-left:20px"
                   shape="square"
                   size="large"
                   icon="user" />
        <ik-avatar style="margin-left:20px"
                   shape="square"
                   icon="user" />
        <ik-avatar style="margin-left:20px"
                   shape="square"
                   size="small"
                   icon="user" />
      </div>
    </div>
  </codeBox>
</template>
<script>
import { basicAvatar } from '../avatar.js'
export default {
  data () {
    return {
      code: basicAvatar
    }
  }
}
</script>
