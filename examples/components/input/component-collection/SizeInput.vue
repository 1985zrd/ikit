<template>
  <codeBox title="三种大小 " description="我们为 < Input/ > 输入框定义了三种尺寸（大、默认、小），高度分别为 40px、32px 和 24px。" :code="searchInputCode">
    <div class="components-input-demo-size">
      <ik-input size="large" placeholder="large size" />
      <ik-input placeholder="default size" />
      <ik-input size="small" placeholder="small size" />
    </div>
  </codeBox>
</template>

<script>
import { searchInputCode } from './../codeExample'
export default {
  data () {
    return {
      searchInputCode
    }
  }
}
</script>
<style scoped>
.components-input-demo-size input {
  width: 200px;
  margin: 0 8px 8px 0;
}
</style>
