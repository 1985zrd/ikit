
<template>
  <div>
    <Basic></Basic>
    <Checkable></Checkable>
    <Large></Large>
    <Colorful></Colorful>
    <Control></Control>
    <HotTags></HotTags>
    <Controlled></Controlled>
    <MarkdownRender mdFileName="tag" />
  </div>
</template>

<script>
import Basic from './component-collection/Basic'
import Checkable from './component-collection/Checkable'
import Large from './component-collection/Large'
import Colorful from './component-collection/Colorful'
import Control from './component-collection/Control'
import HotTags from './component-collection/HotTags'
import Controlled from './component-collection/Controlled'

export default {
  name: 'timeline-dome',
  components: {
    Basic,
    Checkable,
    Large,
    Colorful,
    Control,
    HotTags,
    Controlled
  }
}
</script>
