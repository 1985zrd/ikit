<template>
  <codeBox :title="title"
           :description="description"
           :code="defaultCascaderCode">
    <ik-cascader :options="options"
                 @change="onChange"
                 :defaultValue="['zhejiang', 'hangzhou', 'xihu']" />
  </codeBox>
</template>
<script>
import { defaultCascaderCode } from '../demoCode.js'
export default {
  name: 'defaultCascader',
  data () {
    return {
      title: '默认值',
      description: '默认值通过数组的方式指定。',
      defaultCascaderCode,
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
