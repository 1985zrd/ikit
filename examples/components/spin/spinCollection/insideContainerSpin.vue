<template>
  <codeBox title="容器"
           description="放入一个容器中。"
           :code="insideContainerSpinCode">
    <div class="example">
        <ik-spin />
    </div>
  </codeBox>
</template>
<script>
import { insideContainerSpinCode } from '../demoCode.js'
export default {
  name: 'insideContainerSpin',
  data () {
    return {
      insideContainerSpinCode
    }
  }
}
</script>
<style scoped>
  .example {
    text-align: center;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 30px 50px;
    margin: 20px 0;
  }
</style>
