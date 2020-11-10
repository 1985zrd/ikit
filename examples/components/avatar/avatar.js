const basicAvatar = `
<template>
  <div>
    <div>
      <ik-avatar :size="70" icon="user" />
      <ik-avatar :size="60" icon="user" />
      <ik-avatar size="large" icon="user" />
      <ik-avatar icon="user" />
      <ik-avatar size="small" icon="user" />
    </div>
    <br />
    <div>
      <ik-avatar shape="square" :size="70" icon="user" />
      <ik-avatar shape="square" :size="60" icon="user" />
      <ik-avatar shape="square" size="large" icon="user" />
      <ik-avatar shape="square" icon="user" />
      <ik-avatar shape="square" size="small" icon="user" />
    </div>
  </div>
</template>
`
const badgeAvatar = `
<template>
  <div>
    <span style="margin-right:24px">
      <ik-badge :count="1"><ik-avatar shape="square" icon="user"/></ik-badge>
    </span>
    <span>
      <ik-badge dot><ik-avatar shape="square" icon="user"/></ik-badge>
    </span>
  </div>
</template>
`
const typeAvatar = `
<template>
  <div>
    <ik-avatar icon="user" />
    <ik-avatar>U</ik-avatar>
    <ik-avatar>USER</ik-avatar>
    <ik-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <ik-avatar style="color: #f56a00; backgroundColor: #fde3cf">U</ik-avatar>
    <ik-avatar style="backgroundColor:#87d068" icon="user" />
  </div>
</template>
`
const shapeAvatar = `
<template>
  <div>
    <ik-avatar shape="square" size="large" :style="{backgroundColor: color, verticalAlign: 'middle'}"
      >{{avatarValue}}</ik-avatar
    >
    <ik-button size="small" :style="{ marginLeft: 16, verticalAlign: 'middle' }" @click="changeValue"
      >改变</ik-button
    >
  </div>
</template>
<script>
  const UserList = ['U', 'Lucy', 'Tom', 'Edward']
  const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae']
  export default {
    data() {
      return {
        avatarValue: UserList[0],
        color: colorList[0]
      }
    },
    methods: {
      changeValue() {
        const index = UserList.indexOf(this.avatarValue)
        this.avatarValue = index < UserList.length - 1 ? UserList[index + 1] : UserList[0]
        this.color = index < colorList.length - 1 ? colorList[index + 1] : colorList[0]
      }
    }
  }
</script>
`

export {
  basicAvatar,
  badgeAvatar,
  typeAvatar,
  shapeAvatar
}
