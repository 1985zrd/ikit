<template>
  <codeBox :title="title"
           :description="description"
           :code="customRow">
    <ik-transfer :dataSource="mockData"
                :listStyle="{
      width: '300px',
      height: '300px',
    }"
                :targetKeys="targetKeys"
                @change="handleChange"
                :render="renderItem">
    </ik-transfer>
  </codeBox>
</template>
<script>
import { customRow } from '../codeExample'
export default {
  data () {
    return {
      title: '自定义渲染行数据',
      description: '自定义渲染每一个 Transfer Item，可用于渲染复杂数据。',
      customRow,
      mockData: [],
      targetKeys: []
    }
  },
  mounted () {
    this.getMock()
  },
  methods: {
    getMock () {
      const targetKeys = []
      const mockData = []
      for (let i = 0; i < 20; i++) {
        const data = {
          key: i.toString(),
          title: `content${i + 1}`,
          description: `description of content${i + 1}`,
          chosen: Math.random() * 2 > 1
        }
        if (data.chosen) {
          targetKeys.push(data.key)
        }
        mockData.push(data)
      }
      this.mockData = mockData
      this.targetKeys = targetKeys
    },
    renderItem (item) {
      const customLabel = (
        <span class="custom-item">
          {item.title} - {item.description}
        </span>
      )

      return {
        label: customLabel, // for displayed item
        value: item.title // for title and filter matching
      }
    },
    handleChange (targetKeys, direction, moveKeys) {
      console.log(targetKeys, direction, moveKeys)
      this.targetKeys = targetKeys
    }
  }
}
</script>
