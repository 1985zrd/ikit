<template>
  <codeBox :title="title"
           :description="description"
           :code="topAnnouncement">
    <ik-alert message="Warning text"
             banner />
    <br />
    <ik-alert message="Very long warning text warning text text text text text text text"
             banner
             closable />
    <br />
    <ik-alert :showIcon="false"
             message="Warning text without icon"
             banner />
    <br />
    <ik-alert type="error"
             message="Error text"
             banner />
  </codeBox>
</template>
<script>
import { topAnnouncement } from '../codeExample'
export default {
  data () {
    return {
      title: '顶部公告',
      description: '页面顶部通告形式，默认有图标且type 为 "warning"。',
      topAnnouncement
    }
  }
}
</script>
