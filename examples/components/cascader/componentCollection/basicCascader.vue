<template>
  <codeBox :title="title"
           :description="description"
           :code="basicCascaderCode">
    <ik-cascader :options="options"
                 @change="onChange"
                 placeholder="Please select" />
  </codeBox>
</template>
<script>
import { basicCascaderCode } from '../demoCode.js'
export default {
  name: 'basicCascader',
  data () {
    return {
      title: '基本',
      description: '省市区级联。',
      basicCascaderCode,
      options: [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake'
                }
              ]
            }
          ]
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [
                {
                  value: 'zhonghuamen',
                  label: 'Zhong Hua Men'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    onChange (value) {
      console.log(value)
    }
  }
}
</script>
