<template>
  <codeBox :title="title"
           :description="description"
           :code="sizeCascaderCode">
    <ik-cascader size="large"
                 :options="options"
                 @change="onChange" />
    <br />
    <br />
    <ik-cascader :options="options"
                 @change="onChange" />
    <br />
    <br />
    <ik-cascader size="small"
                 :options="options"
                 @change="onChange" />
    <br />
    <br />
  </codeBox>
</template>
<script>
import { sizeCascaderCode } from '../demoCode.js'
export default {
  name: 'sizeCascader',
  data () {
    return {
      title: '大小',
      description: '不同大小的级联选择器。',
      sizeCascaderCode,
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
