<template>
  <codeBox title="按钮样式"
           description="按钮样式的单选组合。"
           :code="radioStyle">
    <div>
      <div>
        <ik-radio-group @change="onChange" v-model="value">
          <ik-radio-button value="a">Hangzhou</ik-radio-button>
          <ik-radio-button value="b">Shanghai</ik-radio-button>
          <ik-radio-button value="c">Beijing</ik-radio-button>
          <ik-radio-button value="d">Chengdu</ik-radio-button>
        </ik-radio-group>
      </div>
      <div :style="{ marginTop: '16px' }">
        <ik-radio-group @change="onChange" defaultValue="a">
          <ik-radio-button value="a">Hangzhou</ik-radio-button>
          <ik-radio-button value="b" disabled>Shanghai</ik-radio-button>
          <ik-radio-button value="c">Beijing</ik-radio-button>
          <ik-radio-button value="d">Chengdu</ik-radio-button>
        </ik-radio-group>
      </div>
      <div :style="{ marginTop: '16px' }">
        <ik-radio-group disabled @change="onChange" defaultValue="a">
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
import { radioStyle } from '../radio'
export default {
  name: 'radioStyle',
  data () {
    return {
      radioStyle,
      value: 'a'
    }
  },
  methods: {
    onChange (e) {
      console.log(`checked = ${e.target.value}`)
    }
  }
}
</script>
