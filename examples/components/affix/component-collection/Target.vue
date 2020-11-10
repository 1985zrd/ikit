<template>
  <codeBox :title="title" :description="description" :code="targetCode">
    <div id="components-affix-demo-target" class="scrollable-container" ref="container">
      <div class="background">
        <ik-affix :target="() => this.$refs.container">
          <ik-button type="primary">
            Fixed at the top of container
          </ik-button>
        </ik-affix>
      </div>
    </div>
  </codeBox>
</template>
<style>
  #components-affix-demo-target.scrollable-container {
    height: 100px;
    overflow-y: scroll;
  }
  #components-affix-demo-target .background {
    padding-top: 60px;
    height: 300px;
    background-image: url('https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg');
  }
</style>
<script>
import { targetCode } from '../codeExample'
export default {
  data () {
    return {
      title: '滚动容器',
      description: '用 `target` 设置 `Affix` 需要监听其滚动事件的元素，默认为 `window`。',
      targetCode
    }
  }
}
</script>
