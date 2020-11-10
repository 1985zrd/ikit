<template>
  <codeBox :title="title"
           :description="description"
           :code="disableOptionCascaderCode">
    <ik-cascader :options="options"
                 @change="onChange" />
  </codeBox>
</template>
<script>
import { disableOptionCascaderCode } from '../demoCode.js'
export default {
  name: 'disableOptionCascader',
  data () {
    return {
      title: '禁用选项',
      description: '通过指定 options 里的 disabled 字段。',
      disableOptionCascaderCode,
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
          disabled: true,
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
