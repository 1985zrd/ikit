<template>
  <codeBox :title="title" :description="description" :code="selectableCode">
    <ik-table :rowSelection="rowSelection" :columns="columns" :dataSource="data">
      <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>
    </ik-table>
  </codeBox>
</template>
<script>
import { selectableCode } from '../codeExample'
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    scopedSlots: { customRender: 'name' }
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
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park'
  }
]

export default {
  data () {
    return {
      data,
      columns,
      selectableCode,
      title: '可选择',
      description: '第一列是联动的选择框。默认点击 checkbox 触发选择行为'
    }
  },
  computed: {
    rowSelection () {
      const { selectedRowKeys } = this
      return {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            'selectedRows: ',
            selectedRows
          )
        },
        getCheckboxProps: record => ({
          props: {
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name
          }
        })
      }
    }
  }
}
</script>
