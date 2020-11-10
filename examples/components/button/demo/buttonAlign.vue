<template>
  <codeBox title="icon和文字垂直排列"
           description="添加 align 属性，让icon和文字垂直排列。"
           :code="buttonAlign">
    <div>
        <ik-button type="primary" size="large" icon="edit" align="vertical">Primary(align)</ik-button>
        <ik-button type="primary" icon="edit" align="vertical">Primary(align)</ik-button>
        <ik-button type="primary" size="small" icon="edit" align="vertical">Primary(align)</ik-button>
        <br />
        <ik-button icon="diff" align="vertical">Default(align)</ik-button>
        <br />
        <ik-button type="dashed" icon="diff" align="vertical">Dashed(align)</ik-button>
        <br />
        <ik-button type="link" icon="diff" align="vertical">医学影像</ik-button>
        <ik-button :noBorder="true" icon="diff" align="vertical">医学影像</ik-button>
        <ik-button :noBorder="true" :noHover="true" icon="diff" align="vertical">医学影像</ik-button>
      </div>
  </codeBox>
</template>
<script>
import { buttonAlign } from '../test.js'
export default {
  name: 'buttonAlign',
  data () {
    return {
      buttonAlign
    }
  }
}
</script>
