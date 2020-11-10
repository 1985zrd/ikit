<template>
  <div>
    <basicCascader></basicCascader>
    <choiceChangeCascader></choiceChangeCascader>
    <customOptionsCascader></customOptionsCascader>
    <customDisplayCascader></customDisplayCascader>
    <defaultCascader></defaultCascader>
    <disableOptionCascader></disableOptionCascader>
    <hoverCascader></hoverCascader>
    <loadOptionsLazilyCascader></loadOptionsLazilyCascader>
    <searchCascader></searchCascader>
    <sizeCascader></sizeCascader>
    <customFieldNamesCascader></customFieldNamesCascader>
    <suffixCascader></suffixCascader>
    <MarkdownRender mdFileName="cascader"></MarkdownRender>
  </div>
</template>
<script>
import basicCascader from './componentCollection/basicCascader'
import choiceChangeCascader from './componentCollection/choiceChangeCascader'
import customOptionsCascader from './componentCollection/customOptionsCascader'
import customDisplayCascader from './componentCollection/customDisplayCascader'
import defaultCascader from './componentCollection/defaultCascader'
import disableOptionCascader from './componentCollection/disableOptionCascader'
import hoverCascader from './componentCollection/hoverCascader'
import loadOptionsLazilyCascader from './componentCollection/loadOptionsLazilyCascader'
import searchCascader from './componentCollection/searchCascader'
import sizeCascader from './componentCollection/sizeCascader'
import customFieldNamesCascader from './componentCollection/customFieldNamesCascader'
import suffixCascader from './componentCollection/suffixCascader'
export default {
  name: 'cascaderDemo',
  components: {
    basicCascader,
    choiceChangeCascader,
    customOptionsCascader,
    customDisplayCascader,
    defaultCascader,
    disableOptionCascader,
    hoverCascader,
    loadOptionsLazilyCascader,
    searchCascader,
    sizeCascader,
    customFieldNamesCascader,
    suffixCascader
  }
}
</script>
