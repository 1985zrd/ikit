<template>
  <div class="empty">
    <basicEmpty></basicEmpty>
    <globalEmpty></globalEmpty>
    <customeEmpty></customeEmpty>
    <MarkdownRender mdFileName="empty"/>
  </div>
</template>

<script>
import basicEmpty from './componentCollection/basicEmpty'
import globalEmpty from './componentCollection/globalEmpty'
import customeEmpty from './componentCollection/customeEmpty'

export default {
  components: {
    basicEmpty,
    globalEmpty,
    customeEmpty
  }
}
</script>

<style lang="scss">
  .empty .content{
  padding: 40px 0 0;
  }
</style>
