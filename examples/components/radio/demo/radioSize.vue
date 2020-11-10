<template>
  <codeBox title="大小"
           description="大中小三种组合，可以和表单输入框进行对应配合。"
           :code="radioSize">
    <div>
        <div>
          <ik-radio-group defaultValue="a" size="large">
            <ik-radio-button value="a">Hangzhou</ik-radio-button>
            <ik-radio-button value="b">Shanghai</ik-radio-button>
            <ik-radio-button value="c">Beijing</ik-radio-button>
            <ik-radio-button value="d">Chengdu</ik-radio-button>
          </ik-radio-group>
        </div>
        <div :style="{ marginTop: '16px' }">
          <ik-radio-group defaultValue="a">
            <ik-radio-button value="a">Hangzhou</ik-radio-button>
            <ik-radio-button value="b">Shanghai</ik-radio-button>
            <ik-radio-button value="c">Beijing</ik-radio-button>
            <ik-radio-button value="d">Chengdu</ik-radio-button>
          </ik-radio-group>
        </div>
        <div :style="{ marginTop: '16px' }">
          <ik-radio-group defaultValue="a" size="small">
            <ik-radio-button value="a">Hangzhou</ik-radio-button>
            <ik-radio-button value="b">Shanghai</ik-radio-button>
            <ik-radio-button value="c">Beijing</ik-radio-button>
            <ik-radio-button value="d">Chengdu</ik-radio-button>
          </ik-radio-group>
        </div>
      </div>
  </codeBox>
</template>
<script>
import { radioSize } from '../radio'
export default {
  name: 'radioSize',
  data () {
    return {
      radioSize
    }
  }
}
</script>
