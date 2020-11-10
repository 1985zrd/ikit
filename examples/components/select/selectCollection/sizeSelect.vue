<template>
  <codeBox :title="title"
           :description="description"
           :code="sizeSelectCode">
    <ik-radio-group v-model="size">
      <ik-radio-button value="large">Large</ik-radio-button>
      <ik-radio-button value="default">Default</ik-radio-button>
      <ik-radio-button value="small">Small</ik-radio-button>
    </ik-radio-group>
    <br />
    <br />
    <ik-select :size="size"
               defaultValue="a1"
               style="width: 200px"
               @change="handleChange">
      <ik-select-option v-for="i in 25"
                        :key="(i + 9).toString(36) + i">{{(i + 9).toString(36) + i}}</ik-select-option>
    </ik-select>
    <br />
    <ik-select mode="multiple"
               :size="size"
               placeholder="Please select"
               :defaultValue="['a1', 'b2']"
               style="width: 200px ; margin-top:20px"
               @change="handleChange"
               @popupScroll="popupScroll">
      <ik-select-option v-for="i in 25"
                        :key="(i + 9).toString(36) + i">{{(i + 9).toString(36) + i}}</ik-select-option>
    </ik-select>
    <br />
    <ik-select mode="tags"
               :size="size"
               placeholder="Please select"
               :defaultValue="['a1', 'b2']"
               style="width: 200px; margin-top:20px"
               @change="handleChange">
      <ik-select-option v-for="i in 25"
                        :key="(i + 9).toString(36) + i">{{(i + 9).toString(36) + i}}</ik-select-option>
    </ik-select>
  </codeBox>
</template>
<script>
import { sizeSelectCode } from '../demoCode.js'
export default {
  name: 'sizeSelect',
  data () {
    return {
      title: '三种大小',
      description: '三种大小的选择框，当 size 分别为 large 和 small 时，输入框高度为 40px 和 24px ，默认高度为 32px。',
      sizeSelectCode,
      size: 'default'
    }
  },
  methods: {
    handleChange (value) {
      console.log(`Selected: ${value}`)
    },
    popupScroll () {
      console.log('popupScroll')
    }
  }
}
</script>
