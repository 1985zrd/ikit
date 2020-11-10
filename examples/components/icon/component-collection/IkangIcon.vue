<template>
  <codeBox title="ikang专属图标"
           :description="description"
           :code="ikangIcon">
    <div class="icons-list">
      <ik-icon type="iconupload" isIk/>
      <ik-icon type="icontime"
               isIk />
      <ik-icon type="icondelete"
               isIk />
      <ik-icon type="iconlink"
               isIk />
      <ik-icon type="icontime"
               isIk />
    </div>
  </codeBox>
</template>

<script>
import { ikangIcon } from './../codeExample'

export default {
  data () {
    return {
      ikangIcon,
      description: 'ikang专属图标，需添加isIk属性'
    }
  }
}
</script>

<style scoped>
.icons-list >>> .anticon {
  margin-right: 12px;
  font-size: 24px;
}
</style>
