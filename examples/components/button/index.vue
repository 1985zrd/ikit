<template>
  <div class="components-button-demo">
    <ButtonType class="button-type demo-item"></ButtonType>
    <ButtonBasic class="button-basic demo-item"></ButtonBasic>
    <ButtonDisabled class="button-disabled demo-item"></ButtonDisabled>
    <ButtonGhost class="button-ghost demo-item"></ButtonGhost>
    <ButtonIcon class="button-icon demo-item"></ButtonIcon>
    <ButtonLoading class="button-loading demo-item"></ButtonLoading>
    <!-- <ButtonAny class="button-any demo-item"></ButtonAny> -->
    <ButtonSize class="button-size demo-item"></ButtonSize>
    <ButtonBlock class="button-block demo-item"></ButtonBlock>
    <ButtonBorder class="button-block demo-item"></ButtonBorder>
    <ButtonAlign class="button-block demo-item"></ButtonAlign>
    <ButtonIkIcon class="button-block demo-item"></ButtonIkIcon>
    <MarkdownRender mdFileName="button" />
  </div>
</template>
<script>
import ButtonType from './demo/buttonType'
import ButtonBasic from './demo/buttonBasic'
import ButtonDisabled from './demo/buttonDisabled'
import ButtonGhost from './demo/buttonGhost'
import ButtonIcon from './demo/buttonIcon'
import ButtonLoading from './demo/buttonLoading'
// import ButtonAny from './demo/buttonAny'
import ButtonSize from './demo/buttonSize'
import ButtonBlock from './demo/buttonBlock'
import ButtonBorder from './demo/buttonBorder'
import ButtonAlign from './demo/buttonAlign'
import ButtonIkIcon from './demo/buttonIkIcon'
export default {
  name: 'button-demo',
  components: {
    ButtonType,
    ButtonBasic,
    ButtonDisabled,
    ButtonGhost,
    ButtonIcon,
    ButtonLoading,
    // ButtonAny,
    ButtonSize,
    ButtonBlock,
    ButtonBorder,
    ButtonAlign,
    ButtonIkIcon
  }
}
</script>

<style lang="less">
.components-button-demo .ant-btn {
  margin-right: 20px;
  margin-bottom: 20px;
}
</style>
