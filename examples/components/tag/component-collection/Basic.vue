<template>
  <codeBox :title="title" :description="description" :code="basicCode">
    <div>
      <ik-tag>Tag 1</ik-tag>
      <ik-tag><a href="https://github.com/vueComponent/ant-design">Link</a></ik-tag>
      <ik-tag closable @close="log">Tag 2</ik-tag>
      <ik-tag closable @close="preventDefault">Prevent Default</ik-tag>
    </div>
  </codeBox>
</template>
<script>
import { basicCode } from '../codeExample'
export default {
  data () {
    return {
      title: '基本用法',
      description: '基本标签的用法，可以通过添加 `closable` 变为可关闭标签。可关闭标签具有 `onClose` `afterClose` 两个事件。',
      basicCode
    }
  },
  methods: {
    log (e) {
      console.log(e)
    },
    preventDefault (e) {
      e.preventDefault()
      console.log('Clicked! But prevent default.')
    }
  }
}
</script>
