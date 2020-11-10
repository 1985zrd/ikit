<template>
  <div class="example-input">
    <IconDisplay class="markdown" />
    <basic></basic>
    <ikangIcon></ikangIcon>
    <customIcon></customIcon>
    <useIconfont></useIconfont>
    <twoToneIcon></twoToneIcon>
    <MarkdownRender mdFileName="icon" />
  </div>
</template>

<script>
import IconDisplay from './component-collection/IconDisplay/index'
import basic from './component-collection/Basic'
import ikangIcon from './component-collection/IkangIcon'
import customIcon from './component-collection/CustomIcon'
import useIconfont from './component-collection/UseIconfont'
import twoToneIcon from './component-collection/TwoToneIcon'

export default {
  components: { IconDisplay, basic, customIcon, useIconfont, twoToneIcon, ikangIcon }
}
</script>
