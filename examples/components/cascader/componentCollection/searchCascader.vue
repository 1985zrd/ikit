<template>
  <codeBox :title="title"
           :description="description"
           :code="searchCascaderCode">
    <ik-cascader :options="options"
                 :showSearch="{filter}"
                 @change="onChange"
                 placeholder="Please select" />
  </codeBox>
</template>
<script>
import { searchCascaderCode } from '../demoCode.js'
export default {
  name: 'searchCascader',
  data () {
    return {
      title: '搜索',
      description: '可以直接搜索选项并选择。Cascader[showSearch] 暂不支持服务端搜索，更多信息见 #5547',
      searchCascaderCode,
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
                },
                {
                  value: 'xiasha',
                  label: 'Xia Sha',
                  disabled: true
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
                  label: 'Zhong Hua men'
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
      console.log(value, selectedOptions)
    },
    filter (inputValue, path) {
      return path.some(
        option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
      )
    }
  }
}
</script>
