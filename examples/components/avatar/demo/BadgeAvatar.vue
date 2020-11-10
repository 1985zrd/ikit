<template>
  <codeBox title="带徽标的头像"
           description="通常用于消息提示。"
           :code="code">
    <div>
      <span style="margin-right:20px">
        <ik-badge :count="1">
          <ik-avatar shape="square"
                     icon="user" />
        </ik-badge>
      </span>
      <span>
        <ik-badge dot>
          <ik-avatar shape="square"
                     icon="user" />
        </ik-badge>
      </span>
    </div>
  </codeBox>
</template>
<script>
import { badgeAvatar } from '../avatar.js'
export default {
  data () {
    return {
      code: badgeAvatar
    }
  }
}
</script>
