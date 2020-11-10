<template>
  <codeBox :title="title"
           :description="description"
           :code="suffixCascaderCode">
    <ik-cascader style="margin-top: 1rem"
                 :options="options"
                 @change="onChange"
                 placeholder="Please select">
      <ik-icon type="smile"
              slot="suffixIcon"
              class="test" />
    </ik-cascader>
    <ik-cascader suffixIcon="ab"
                 style="margin-top: 1rem"
                 :options="options"
                 @change="onChange"
                 placeholder="Please select" />
  </codeBox>
</template>
<script>
import { suffixCascaderCode } from '../demoCode.js'
export default {
  name: 'suffixCascader',
  data () {
    return {
      title: '后缀图标',
      description: '省市区级联。',
      suffixCascaderCode,
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
