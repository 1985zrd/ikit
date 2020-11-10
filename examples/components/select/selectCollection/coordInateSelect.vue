<template>
  <codeBox :title="title"
           :description="description"
           :code="coordInateSelectCode">
    <ik-select :defaultValue="provinceData[0]"
               style="width: 120px"
               @change="handleProvinceChange">
      <ik-select-option v-for="province in provinceData"
                        :key="province">{{province}}</ik-select-option>
    </ik-select>
    <ik-select v-model="secondCity"
               style="width: 120px">
      <ik-select-option v-for="city in cities"
                        :key="city">{{city}}</ik-select-option>
    </ik-select>
  </codeBox>
</template>
<script>
import { coordInateSelectCode } from '../demoCode.js'
const provinceData = ['Zhejiang', 'Jiangsu']
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang']
}
export default {
  name: 'coordInateSelect',
  data () {
    return {
      title: '联动',
      description: '省市联动是典型的例子。推荐使用 Cascader 组件。',
      coordInateSelectCode,
      provinceData,
      cityData,
      cities: cityData[provinceData[0]],
      secondCity: cityData[provinceData[0]][0]
    }
  },
  methods: {
    handleProvinceChange (value) {
      this.cities = cityData[value]
      this.secondCity = cityData[value][0]
    }
  }
}
</script>
