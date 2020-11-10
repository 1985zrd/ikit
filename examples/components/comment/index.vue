<template>
  <div class="comment">
    <Basic></Basic>
    <List></List>
    <Nested></Nested>
    <Reply></Reply>
    <MarkdownRender mdFileName="comment"></MarkdownRender>
  </div>
</template>

<script>
import Basic from './component-collection/Basic'
import List from './component-collection/List'
import Nested from './component-collection/Nested'
import Reply from './component-collection/Reply'
export default {
  name: 'comment-demo',
  data () {
    return {}
  },
  components: { Basic, List, Nested, Reply },
  methods: {}
}
</script>

<style lang="scss" scoped>
.comment {
}
</style>
