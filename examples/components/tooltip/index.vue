<template>
  <div>
    <Base />
    <Position />
    <Direction />
    <AutoPosition />
    <MarkdownRender mdFileName="tooltip" />
  </div>
</template>
<script>
import Base from './components/base'
import Position from './components/position'
import Direction from './components/direction'
import AutoPosition from './components/autoPosition'
export default {
  name: 'tooltipDemo',
  components: {
    Base,
    Position,
    Direction,
    AutoPosition
  }
}
</script>
