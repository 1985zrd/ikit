<template>
  <div class="Avatar">
    <BasicAvatar />
    <BadgeAvatar />
    <TypeAvatar />
    <ShapeAvatar />
    <MarkdownRender mdFileName="avatar"></MarkdownRender>
  </div>
</template>

<script>
import BasicAvatar from './demo/BasicAvatar'
import BadgeAvatar from './demo/BadgeAvatar'
import TypeAvatar from './demo/TypeAvatar'
import ShapeAvatar from './demo/ShapeAvatar'
export default {
  name: 'Avatar-demo',
  components: {
    BasicAvatar,
    BadgeAvatar,
    TypeAvatar,
    ShapeAvatar
  }
}
</script>
