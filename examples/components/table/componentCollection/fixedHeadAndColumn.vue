<template>
  <codeBox :title="title" :description="description" :code="fixedhacCode">
    <ik-table :columns="columns" :dataSource="data" :scroll="{ x: 1500, y: 300 }">
      <a slot="action" href="javascript:;">action</a>
    </ik-table>
  </codeBox>
</template>
<script>
import { fixedhacCode } from '../codeExample'
const columns = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left'
  },
  { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
  { title: 'Column 1', dataIndex: 'address', key: '1', width: 150 },
  { title: 'Column 2', dataIndex: 'address', key: '2', width: 150 },
  { title: 'Column 3', dataIndex: 'address', key: '3', width: 150 },
  { title: 'Column 4', dataIndex: 'address', key: '4', width: 150 },
  { title: 'Column 5', dataIndex: 'address', key: '5', width: 150 },
  { title: 'Column 6', dataIndex: 'address', key: '6', width: 150 },
  { title: 'Column 7', dataIndex: 'address', key: '7', width: 150 },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    scopedSlots: { customRender: 'action' }
  }
]

const data = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`
  })
}

export default {
  data () {
    return {
      data,
      columns,
      fixedhacCode,
      title: '固定头和列',
      description: `<p>适合同时展示有大量数据和数据列。若猎头与内容不对齐或出现重复，请指定固定列的宽度width建议指定scroll.x为大于表格宽度的固定值或百分比。</p>
      <p>注意，且非固定列宽度之和不要超过scroll.x。</p>`
    }
  }
}
</script>
