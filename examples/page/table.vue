<template>
  <div class="table">
    <ik-table :columns="columns" :dataSource="data">
      <a slot="name" slot-scope="text" href="javascript:;">
        <router-link :to='`/button?name=`+ text'>{{ text }}</router-link>
      </a>
      <span slot="customTitle"><ik-icon type="smile-o" /> Name</span>
      <span slot="tags" slot-scope="tags">
        <ik-tag
          v-for="tag in tags"
          :color="
            tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'
          "
          :key="tag"
        >
          {{ tag.toUpperCase() }}
        </ik-tag>
      </span>
      <span slot="action" slot-scope="text, record">
        <a href="javascript:;">Invite 一 {{ record.name }}</a>
        <ik-divider type="vertical" />
        <a href="javascript:;"  @click={deleteFn}>Delete</a>
        <ik-divider type="vertical" />
        <a href="javascript:;" class="ant-dropdown-link">
          More actions <ik-icon type="down" />
        </a>
      </span>
    </ik-table>
  </div>
</template>

<script type="text/ecmascript-6">
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
  name: 'table-demo',
  data () {
    return {
      data,
      columns
    }
  },
  components: {},
  methods: {
    deleteFn (text, record) {
      console.lgo('删除方法', text, record)
    }
  }
}
</script>

<style lang="less" scoped>
.table {
}
</style>
