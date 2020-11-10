
<template>
  <div>
    <Basic></Basic>
    <Color></Color>
    <Pending></Pending>
    <Custom></Custom>
    <Alternate></Alternate>
    <Right></Right>
    <MarkdownRender mdFileName="timeline" />
  </div>
</template>

<script>
import Basic from './component-collection/Basic'
import Color from './component-collection/Color'
import Pending from './component-collection/Pending'
import Custom from './component-collection/Custom'
import Alternate from './component-collection/Alternate'
import Right from './component-collection/Right'

export default {
  name: 'timeline-dome',
  components: {
    Basic,
    Color,
    Pending,
    Custom,
    Alternate,
    Right
  }
}
</script>
