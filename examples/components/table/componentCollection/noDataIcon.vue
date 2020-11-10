<template>
  <codeBox :title="title" :description="description" :code="noDataIconCode">
    <ik-config-provider>
      <template v-slot:renderEmpty>
        <div class="table-empty">
          <img src="../images/noData.svg" alt="">
          <p>暂无数据</p>
        </div>
      </template>
      <div class="config-provider">
        <h3>Table</h3>
        <ik-table style="margin-top: 8px" :columns="columns" :dataSource="[]" />
      </div>
    </ik-config-provider>
  </codeBox>
</template>

<script>
import { noDataIconCode } from '../codeExample'

export default {
  data () {
    return {
      noDataIconCode,
      title: '自定义空状态',
      description: '自定义空状态',
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age'
        }
      ]
    }
  },
  methods: {}
}
</script>
<style lang="scss">
  .table-empty{
    text-align: center;
    padding:20px 0;
    p{
      margin-top: 20px;
    }
  }
</style>
