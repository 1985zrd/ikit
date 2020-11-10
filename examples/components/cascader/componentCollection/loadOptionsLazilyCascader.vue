<template>
  <codeBox :title="title"
           :description="description"
           :code="loadOptionsLazilyCascaderCode">
    <ik-cascader :options="options"
                 @change="onChange"
                 :loadData="loadData"
                 placeholder="Please select"
                 changeOnSelect />
  </codeBox>
</template>
<script>
import { loadOptionsLazilyCascaderCode } from '../demoCode.js'
export default {
  name: 'loadOptionsLazilyCascader',
  data () {
    return {
      title: '动态加载选项',
      description: '使用 loadData 实现动态加载选项。注意：loadData 与 showSearch 无法一起使用。',
      loadOptionsLazilyCascaderCode,
      options: [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          isLeaf: false
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          isLeaf: false
        }
      ]
    }
  },
  methods: {
    onChange (value) {
      console.log(value)
    },
    loadData (selectedOptions) {
      const targetOption = selectedOptions[selectedOptions.length - 1]
      targetOption.loading = true

      // load options lazily
      setTimeout(() => {
        targetOption.loading = false
        targetOption.children = [
          {
            label: `${targetOption.label} Dynamic 1`,
            value: 'dynamic1'
          },
          {
            label: `${targetOption.label} Dynamic 2`,
            value: 'dynamic2'
          }
        ]
        this.options = [...this.options]
      }, 1000)
    }
  }
}
</script>
