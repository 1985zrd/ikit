<template>
  <div class="inputNumber">
    <basicInputNumber></basicInputNumber>
    <sizeInputNumber></sizeInputNumber>
    <disabledInputNumber></disabledInputNumber>
    <decimalInputNumber></decimalInputNumber>
    <formatterInputNumber></formatterInputNumber>
    <MarkdownRender mdFileName="inputNumber" />
  </div>
</template>

<script>
import basicInputNumber from './component-collection/BasicInputNumber'
import sizeInputNumber from './component-collection/SizeInputNumber'
import disabledInputNumber from './component-collection/DisabledInputNumber'
import decimalInputNumber from './component-collection/DecimalInputNumber'
import formatterInputNumber from './component-collection/FormatterInputNumber'
export default {
  components: { basicInputNumber, sizeInputNumber, disabledInputNumber, decimalInputNumber, formatterInputNumber }
}
</script>

<style>
</style>
