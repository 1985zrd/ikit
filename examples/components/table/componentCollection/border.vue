<template>
  <codeBox :title="title" :description="description" :code="borderCode">
    <ik-table :columns="columns" :dataSource="data" bordered>
        <template slot="name" slot-scope="text">
          <a href="javascript:;">{{text}}</a>
        </template>
        <template slot="title">Header</template>
        <template slot="footer">Footer</template>
      </ik-table>
  </codeBox>
</template>
<script>
import { borderCode } from '../codeExample'
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: 'Cash Assets',
    className: 'column-money',
    dataIndex: 'money'
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
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park'
  }
]

export default {
  data () {
    return {
      data,
      columns,
      title: '带边框',
      description: '添加表格边框线，页头和页脚。',
      borderCode
    }
  }
}
</script>

<style>
th.column-money,
td.column-money {
  text-align: right !important;
}
</style>
