<template>
  <codeBox :title="title" :description="description" :code="fixcolumnCode">
    <ik-table :columns="columns" :dataSource="data" :scroll="{ x: 1300 }">
      <a slot="action" href="javascript:;">action</a>
    </ik-table>
  </codeBox>
</template>
<script>
import { fixcolumnCode } from '../codeExample'
const columns = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left'
  },
  { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
  { title: 'Column 1', dataIndex: 'address', key: '1' },
  { title: 'Column 2', dataIndex: 'address', key: '2' },
  { title: 'Column 3', dataIndex: 'address', key: '3' },
  { title: 'Column 4', dataIndex: 'address', key: '4' },
  { title: 'Column 5', dataIndex: 'address', key: '5' },
  { title: 'Column 6', dataIndex: 'address', key: '6' },
  { title: 'Column 7', dataIndex: 'address', key: '7' },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    scopedSlots: { customRender: 'action' }
  }
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 40,
    address: 'London Park'
  }
]

export default {
  data () {
    return {
      data,
      columns,
      title: '固定列',
      fixcolumnCode,
      description: `<p>对于列数很多的数据，可以固定前后的列，横向滚动查看其它数据，需要和scroll.x配合使用。</p>
      <p>若列头与内容不对齐或出现重复，请指定固定列的宽度width。建议指定scroll.x为大于表格宽度的固定值或百分比。</p>
      <p>注意，且非固定列宽度之和不要超过scroll.x。</p>`
    }
  }
}
</script>
