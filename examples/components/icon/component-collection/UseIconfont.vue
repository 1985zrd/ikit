<template>
  <codeBox title="使用iconfont.cn"
           :description="description"
           :code="useIconfont">
    <div class="icons-list">
      <icon-font type="icon-facebook" />
      <icon-font type="icon-twitter" />
    </div>
  </codeBox>
</template>

<script>
import { useIconfont } from './../codeExample'
import { Icon } from '~/index'

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
})

export default {
  data () {
    return {
      useIconfont,
      description: '对于使用 iconfont.cn 的用户，通过设置 createFromIconfontCN 方法参数对象中的 scriptUrl 字段， 即可轻松地使用已有项目中的图标。'
    }
  },
  components: {
    IconFont
  }
}
</script>

<style scoped>
.icons-list >>> .anticon {
  margin-right: 12px;
  font-size: 24px;
}
</style>
