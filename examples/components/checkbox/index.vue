<template>
  <div>
    <basiCheckbox></basiCheckbox>
    <checkAllBox></checkAllBox>
    <disablCheckbox></disablCheckbox>
    <controllCheckbox></controllCheckbox>
    <groupCheckbox></groupCheckbox>
    <useWithGridCheckbox></useWithGridCheckbox>
    <MarkdownRender mdFileName="checkbox" />
  </div>
</template>
<script>
import basiCheckbox from './componentCollection/basiCheckbox'
import checkAllBox from './componentCollection/checkAllBox'
import disablCheckbox from './componentCollection/disablCheckbox'
import controllCheckbox from './componentCollection/controllCheckbox'
import groupCheckbox from './componentCollection/groupCheckbox'
import useWithGridCheckbox from './componentCollection/useWithGridCheckbox'
export default {
  name: 'checkboxDemo',
  components: {
    basiCheckbox,
    checkAllBox,
    disablCheckbox,
    controllCheckbox,
    groupCheckbox,
    useWithGridCheckbox
  }
}
</script>
