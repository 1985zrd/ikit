<template>
  <codeBox :title="title"
           :description="description"
           :code="customDisplayCascaderCode">
    <span>
      {{text}} &nbsp;
      <ik-cascader :options="options"
                   @change="onChange">
        <a href="#">Change city</a>
      </ik-cascader>
    </span>
  </codeBox>
</template>
<script>
import { customDisplayCascaderCode } from '../demoCode.js'
export default {
  name: 'customDisplayCascader',
  data () {
    return {
      title: '可以自定义显示',
      description: '切换按钮和结果分开。',
      customDisplayCascaderCode,
      text: 'Unselect',
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
    onChange (value, selectedOptions) {
      this.text = selectedOptions.map(o => o.label).join(', ')
    }
  }
}
</script>
