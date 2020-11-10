<template>
  <codeBox title="单选组合"
           description="一组互斥的 Radio 配合使用。"
           :code="radioMutaul">
    <div>
      <ik-radio-group @change="onChange" v-model="value">
        <ik-radio :value="1">A</ik-radio>
        <ik-radio :value="2">B</ik-radio>
        <ik-radio :value="3">C</ik-radio>
        <ik-radio :value="4">D</ik-radio>
      </ik-radio-group>
    </div>
  </codeBox>
</template>
<script>
import { radioMutaul } from '../radio'
export default {
  name: 'radioMutaul',
  data () {
    return {
      radioMutaul,
      value: 2
    }
  },
  methods: {
    onChange (e) {
      console.log('radio checked', e.target.value)
    }
  }
}
</script>
