<template>
  <div class="breadcrumb">
    <basicCrumb></basicCrumb>
    <iconCrumb></iconCrumb>
    <separatorCrumb></separatorCrumb>
    <vueRuterCrumb></vueRuterCrumb>
    <MarkdownRender mdFileName="breadcrumb"/>
  </div>
</template>

<script>
import basicCrumb from './componentCollection/basicCrumb'
import iconCrumb from './componentCollection/iconCrumb'
import separatorCrumb from './componentCollection/separatorCrumb'
import vueRuterCrumb from './componentCollection/vueRuterCrumb'

export default {
  components: {
    basicCrumb,
    iconCrumb,
    separatorCrumb,
    vueRuterCrumb
  }
}
</script>

<style lang="scss">
  .breadcrumb .content{
  padding: 40px 0 0;
  }
</style>
