<template>
  <codeBox title="自动调整字符大小"
           description="对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。"
           :code="code">
    <div>
      <ik-avatar shape="square"
                 size="large"
                 :style="{backgroundColor: color, verticalAlign: 'middle', 'margin-right':'10px'}">{{avatarValue}}</ik-avatar>
      <ik-button size="small"
                 :style="{ marginLeft: 16, verticalAlign: 'middle' }"
                 @click="changeValue">改变</ik-button>
    </div>
  </codeBox>
</template>
<script>
import { shapeAvatar } from '../avatar.js'
const UserList = ['U', 'Lucy', 'Tom', 'Edward']
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae']

export default {
  data () {
    return {
      avatarValue: UserList[0],
      color: colorList[0],
      code: shapeAvatar
    }
  },
  methods: {
    changeValue () {
      const index = UserList.indexOf(this.avatarValue)
      this.avatarValue = index < UserList.length - 1 ? UserList[index + 1] : UserList[0]
      this.color = index < colorList.length - 1 ? colorList[index + 1] : colorList[0]
    }
  }
}
</script>
