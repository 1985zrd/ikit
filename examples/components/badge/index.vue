<template>
  <div class="badge">
      <Base />
      <Single />
      <Overflow />
      <RedDot />
      <State />
      <Dynamic />
      <Custom />
    <MarkdownRender mdFileName="badge" />
  </div>
</template>
<script>
import Base from './components/base'
import Single from './components/single'
import Overflow from './components/overflow'
import RedDot from './components/redDot'
import State from './components/state'
import Dynamic from './components/dynamic'
import Custom from './components/custom'
export default {
  name: 'badgeDemo',
  components: {
    Base,
    Single,
    Overflow,
    RedDot,
    State,
    Dynamic,
    Custom
  }
}
</script>
