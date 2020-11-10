<template>
  <codeBox :title="title"
           :description="description"
           :code="customFieldNamesCascaderCode
">
    <ik-cascader :fieldNames="{ label: 'name', value: 'code', children: 'items' }"
                 :options="options"
                 @change="onChange"
                 placeholder="Please select" />
  </codeBox>
</template>
<script>
import { customFieldNamesCascaderCode } from '../demoCode.js'
const options = [
  {
    code: 'zhejiang',
    name: 'Zhejiang',
    items: [
      {
        code: 'hangzhou',
        name: 'Hangzhou',
        items: [
          {
            code: 'xihu',
            name: 'West Lake'
          }
        ]
      }
    ]
  },
  {
    code: 'jiangsu',
    name: 'Jiangsu',
    items: [
      {
        code: 'nanjing',
        name: 'Nanjing',
        items: [
          {
            code: 'zhonghuamen',
            name: 'Zhong Hua Men'
          }
        ]
      }
    ]
  }
]
export default {
  name: 'customFieldNamesCascader',
  data () {
    return {
      title: '自定义字段名',
      description: '自定义字段名',
      options,
      customFieldNamesCascaderCode
    }
  },
  methods: {
    onChange (value) {
      console.log(value)
    }
  }
}
</script>
