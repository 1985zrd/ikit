<template>
  <codeBox :title="title"
           :description="description"
           :code="choiceChangeCascaderCode">
    <ik-cascader :options="options"
                 @change="onChange"
                 changeOnSelect />
  </codeBox>
</template>
<script>
import { choiceChangeCascaderCode } from '../demoCode.js'
export default {
  name: 'choiceChangeCascader',
  data () {
    return {
      title: '选择即改变',
      description: '这种交互允许只选中父级选项。',
      choiceChangeCascaderCode,
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
