<template>
  <codeBox :title="title" :description="description" :code="loadDataCode">
    <ik-table
      :columns="columns"
      :rowKey="record => record.login.uuid"
      :dataSource="data"
      :pagination="pagination"
      :loading="loading"
      @change="handleTableChange"
      >
      <template slot="name" slot-scope="name">{{name.first}} {{name.last}}</template>
    </ik-table>
  </codeBox>
</template>

<script>
import { loadDataCode } from '../codeExample'
import reqwest from 'reqwest'
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    width: '20%',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' }
    ],
    width: '20%'
  },
  {
    title: 'Email',
    dataIndex: 'email'
  }
]

export default {
  mounted () {
    this.fetch()
  },
  data () {
    return {
      data: [],
      pagination: {},
      loading: false,
      columns,
      loadDataCode,
      title: '远程加载地址',
      description: `<p>这个例子通过简单的 ajax 读取方式，演示了如何从服务端读取并展现数据，具有筛选、排序等功能以及页面 loading 效果。开发者可以自行接入其他数据处理方式。</p>
      <p>另外，本例也展示了筛选排序功能如何交给服务端实现，列不需要指定具体的onFilter和sorter函数，而是在把筛选和排序的参数发到服务端来处理。</p>
      <p>https://randomuser.me 模拟接口，展示数据可能不准确，请打开网络面板查看请求。</p>`
    }
  },
  methods: {
    handleTableChange (pagination, filters, sorter) {
      console.log(pagination)
      const pager = { ...this.pagination }
      pager.current = pagination.current
      this.pagination = pager
      this.fetch({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters
      })
    },
    fetch (params = {}) {
      console.log('params:', params)
      this.loading = true
      reqwest({
        url: 'https://randomuser.me/api',
        type: 'jsonp',
        data: {
          results: 10,
          ...params
        }
      }).then(data => {
        const pagination = { ...this.pagination }
        // Read total count from server
        // pagination.total = data.totalCount;
        pagination.total = 200
        this.loading = false
        this.data = data.results
        this.pagination = pagination
      })
    }
  }
}
</script>

<style scoped  lang="">
</style>
