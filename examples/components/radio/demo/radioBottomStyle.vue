<template>
  <codeBox title="填底的按钮样式"
           description="实色填底的单选按钮样式。"
           :code="radioBottomStyle">
    <div>
        <div>
          <ik-radio-group defaultValue="a" buttonStyle="solid">
            <ik-radio-button value="a">Hangzhou</ik-radio-button>
            <ik-radio-button value="b">Shanghai</ik-radio-button>
            <ik-radio-button value="c">Beijing</ik-radio-button>
            <ik-radio-button value="d">Chengdu</ik-radio-button>
          </ik-radio-group>
        </div>
        <div :style="{ marginTop: '16px' }">
          <ik-radio-group defaultValue="c" buttonStyle="solid">
            <ik-radio-button value="a">Hangzhou</ik-radio-button>
            <ik-radio-button value="b" disabled>Shanghai</ik-radio-button>
            <ik-radio-button value="c">Beijing</ik-radio-button>
            <ik-radio-button value="d">Chengdu</ik-radio-button>
          </ik-radio-group>
        </div>
      </div>
  </codeBox>
</template>
<script>
import { radioBottomStyle } from '../radio'
export default {
  name: 'radioBottomStyle',
  data () {
    return {
      radioBottomStyle
    }
  }
}
</script>
