
<template>
  <div style="padding: 20px;">
    <div style="margin-top: 20px;">
      <h2>Radio</h2>
      <ik-radio :defaultChecked="radio"  :disabled="radio1">radio按钮</ik-radio>
      <ik-radio :defaultChecked="true">radio按钮</ik-radio>
      <ik-button @click="clickHandler2">主要按钮</ik-button>
      <h3>RadioGroup</h3>
      <div>
        <ik-radio-group defaultValue="a" size="large">
          <ik-radio-button value="a">Hangzhou</ik-radio-button>
          <ik-radio-button value="b" disabled >Shanghai</ik-radio-button>
          <ik-radio-button value="c">Beijing</ik-radio-button>
          <ik-radio-button value="d">Chengdu</ik-radio-button>
        </ik-radio-group>
        <br />
        <ik-radio-group defaultValue="a" size="large" buttonStyle="solid">
          <ik-radio-button value="a">Hangzhou</ik-radio-button>
          <ik-radio-button value="b" disabled >Shanghai</ik-radio-button>
          <ik-radio-button value="c">Beijing</ik-radio-button>
          <ik-radio-button value="d">Chengdu</ik-radio-button>
        </ik-radio-group>
        <br />
        <ik-radio-group name="radioGroup" :defaultValue="1">
          <ik-radio :value="1">A</ik-radio>
          <ik-radio :value="2">B</ik-radio>
          <ik-radio :value="3">C</ik-radio>
          <ik-radio :value="4">D</ik-radio>
        </ik-radio-group>
        <br />
        <ik-radio-group :options="options" @change="onChange2" v-model="value2" />
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' }
]
export default {
  name: 'radio-demo',
  data () {
    return {
      options,
      radio: false,
      radio1: false,
      value2: 'Apple'
    }
  },
  watch: {
    radio: function (val, oldval) {
      console.log(val)
    }
  },
  methods: {
    clickHandler2 (e) {
      let disabled = this.radio1
      this.radio1 = !disabled
    },
    onChange2 (e) {
      console.log('radio2 checked', e.target.value)
    }
  }
}
</script>
