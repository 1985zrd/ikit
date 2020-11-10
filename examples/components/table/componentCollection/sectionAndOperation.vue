<template>
  <codeBox :title="title" :description="description" :code="sectionAndOperationCode">
    <div style="margin-bottom: 16px">
      <ik-button type="primary" @click="start" :disabled="!hasSelected" :loading="loading">
        Reload
      </ik-button>
      <span style="margin-left: 8px">
        <template v-if="hasSelected">
          {{`Selected ${selectedRowKeys.length} items`}}
        </template>
      </span>
    </div>
    <ik-table
      :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
      :columns="columns"
      :dataSource="data"
    />
  </codeBox>
</template>
<script>
import { sectionAndOperationCode } from '../codeExample'
const columns = [
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  }
]

const data = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`
  })
}

export default {
  data () {
    return {
      data,
      columns,
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      sectionAndOperationCode,
      title: '选择和操作',
      description: '选择后进行操作，完成后清空选择，通过 rowSelection.selectedRowKeys 来控制选中项。'
    }
  },
  computed: {
    hasSelected () {
      return this.selectedRowKeys.length > 0
    }
  },
  methods: {
    start () {
      this.loading = true
      // ajax request after empty completing
      setTimeout(() => {
        this.loading = false
        this.selectedRowKeys = []
      }, 1000)
    },
    onSelectChange (selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys)
      this.selectedRowKeys = selectedRowKeys
    }
  }
}
</script>
