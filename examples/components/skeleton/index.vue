<template>
  <div>
      <setData />
      <Base />
      <Presets />
      <Loading />
    <MarkdownRender mdFileName="skeleton" />
  </div>
</template>
<script>
import Base from './components/base'
import setData from './components/setData'
import Presets from './components/presets'
import Loading from './components/loading'
export default {
  name: 'skeletonDemo',
  components: {
    Base,
    setData,
    Presets,
    Loading
  }
}
</script>
