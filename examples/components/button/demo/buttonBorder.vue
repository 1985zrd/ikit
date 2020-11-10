<template>
  <codeBox title="noBorder无边框 & noHover 没有hover效果"
           description="按钮默认是有边框的（link外），添加 noBorder 属性即可让按钮没有边框，同时按钮按下时样式也会改变。没有hover效果默认没背景色、黑色字、灰色边框。"
           :code="buttonNoBorder">
    <div>
        <ik-button type="primary">Primary</ik-button>
        <ik-button type="primary" :noBorder="true">Primary(noBorder)</ik-button>
        <br />
        <ik-button>Default</ik-button>
        <ik-button :noBorder="true">Default(noBorder)</ik-button>
        <br />
        <ik-button type="dashed">Dashed</ik-button>
        <ik-button type="dashed" :noBorder="true">Dashed(noBorder)</ik-button>
        <br />
        <br />
        <ik-button :noHover="true">noHover</ik-button>
        <br />
        <br />
        <ik-button :noBorder="true" :noHover="true" icon="iconedit" :isIk="true">noHover & noBorder</ik-button>
        <ik-button :noBorder="true" :noHover="true" icon="play-circle">noHover & noBorder</ik-button>
      </div>
  </codeBox>
</template>
<script>
import { buttonNoBorder } from '../test.js'
export default {
  name: 'buttonNoBorder',
  data () {
    return {
      buttonNoBorder
    }
  }
}
</script>
