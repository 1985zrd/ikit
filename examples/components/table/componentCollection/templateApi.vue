<template>
  <codeBox :title="title" :description="description" :code="templateApiCode">
    <ik-table :dataSource="data">
      <ik-table-column-group>
        <span slot="title" style="color: #1890ff">Name</span>
        <ik-table-column data-index="firstName" key="firstName">
          <span slot="title" style="color: #1890ff">First Name</span>
        </ik-table-column>
        <ik-table-column title="Last Name" data-index="lastName" key="lastName" />
      </ik-table-column-group>
      <ik-table-column title="Age" data-index="age" key="age" />
      <ik-table-column title="Address" data-index="address" key="address" />
      <ik-table-column title="Tags" data-index="tags" key="tags">
        <template slot-scope="tags">
          <span>
            <ik-tag v-for="tag in tags" color="blue" :key="tag">{{tag}}</ik-tag>
          </span>
        </template>
      </ik-table-column>
      <ik-table-column title="Action" key="action">
        <template slot-scope="text, record">
          <span>
            <a href="javascript:;">Action 一 {{record.firstName}}</a>
            <ik-divider type="vertical" />
            <a href="javascript:;">Delete</a>
          </span>
        </template>
      </ik-table-column>
    </ik-table>
  </codeBox>
</template>
<script>
import { templateApiCode } from '../codeExample'
const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]

export default {
  data () {
    return {
      data,
      templateApiCode,
      title: 'template 风格的 API',
      description: '使用 template 风格的 API,这个只是一个描述 columns 的语法糖，所以你不能用其他组件去包裹 Column 和 ColumnGroup。'
    }
  }
}
</script>
