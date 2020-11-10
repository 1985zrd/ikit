<template>
  <codeBox :title="title"
           :description="description"
           :code="hoverCascaderCode">
    <ik-cascader :options="options"
                 :displayRender="displayRender"
                 expandTrigger="hover"
                 @change="onChange"
                 placeholder="Please select" />
  </codeBox>
</template>
<script>
import { hoverCascaderCode } from '../demoCode.js'
export default {
  name: 'hoverCascader',
  data () {
    return {
      title: '移入展开',
      description: '通过移入展开下级菜单，点击完成选择。',
      hoverCascaderCode,
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
    },
    displayRender ({ labels }) {
      return labels[labels.length - 1]
    }
  }
}
</script>
