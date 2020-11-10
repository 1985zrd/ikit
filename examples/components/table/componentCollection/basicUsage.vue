<template>
  <codeBox :title="title" :description="description" :code="basicUsageCode">
      <ik-table :columns="columns" :dataSource="data">
        <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>
        <span slot="customTitle">
          <ik-icon type="smile-o" />Name
        </span>
        <span slot="tags" slot-scope="tags">
          <ik-tag
            v-for="tag in tags"
            :color="tag==='loser' ? 'orange' : (tag.length > 5 ? 'blue' : 'green')"
            :key="tag"
          >{{tag.toUpperCase()}}</ik-tag>
        </span>
        <span slot="action" slot-scope="text, record">
          <a href="javascript:;">Invite 一 {{record.name}}</a>
          <ik-divider type="vertical" />
          <a href="javascript:;">Delete</a>
          <ik-divider type="vertical" />
          <a href="javascript:;" class="ant-dropdown-link">
            More actions
            <ik-icon type="down" />
          </a>
        </span>
      </ik-table>
  </codeBox>
</template>

<script>
import { basicUsageCode } from '../codeExample'
const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' }
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' }
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' }
  }
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]

export default {
  data () {
    return {
      data,
      columns,
      title: '基本用法',
      description: '简单的表格，最后一列是各种操作。',
      basicUsageCode
    }
  }
}
</script>
