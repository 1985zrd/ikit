
<template>
  <div>
    <Basic></Basic>
    <OnChange></OnChange>
    <Target></Target>
    <MarkdownRender mdFileName="affix"/>
  </div>
</template>

<script>
import Basic from './component-collection/Basic'
import OnChange from './component-collection/OnChange'
import Target from './component-collection/Target'

export default {
  name: 'switch-dome',
  components: {
    Basic,
    OnChange,
    Target
  }
}
</script>
