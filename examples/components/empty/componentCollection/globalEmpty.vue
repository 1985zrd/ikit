<template>
  <codeBox :title="title" :description="description" :code="globalEmpty">
    <div>
      <ik-switch
        unCheckedChildren="default"
        checkedChildren="customize"
        :checked="customize"
        @change="(val) => customize = val"
      />

      <ik-divider />
      <ik-config-provider>
        <template v-if="customize" v-slot:renderEmpty>
          <div class="table-empty">
            <img src="../images/noData.svg" alt="">
            <p>暂无数据</p>
          </div>
        </template>
        <div class="config-provider">
          <h3>Select</h3>
          <ik-select :style="style" :options="[]" />

          <!-- <h3>TreeSelect</h3>
          <a-tree-select :style="style" :treeData="[]" /> -->

          <h3>Cascader</h3>
          <ik-cascader :style="style" :options="[]" :showSearch="true" />

          <!-- <h3>Transfer</h3>
          <a-transfer :dataSource="[]" /> -->

          <h3>Table</h3>
          <ik-table style="margin-top: 8px" :columns="columns" :dataSource="[]" />
          <h3>List</h3>
          <ik-list :dataSource="[]" />
        </div>
      </ik-config-provider>
    </div>
  </codeBox>
</template>

<script>
import { globalEmpty } from './../codeExample'

export default {
  data () {
    return {
      globalEmpty,
      title: '全局化配置',
      description: '自定义全局组件的 Empty 样式。',
      customize: true,
      style: { width: '200px' },
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
  }
}
</script>

<style lang="scss" scoped>
  .code-box-demo .config-provider h3 {
    font-size: inherit;
    margin: 16px 0 8px 0;
  }
  .table-empty{
    text-align: center;
    padding:20px 0;
    p{
      margin-top: 20px;
    }
  }
</style>
