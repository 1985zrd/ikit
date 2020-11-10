const basicEmpty = `
<template>
  <ik-empty />
</template>`

const globalEmpty = `
<template>
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

        // <h3>TreeSelect</h3>
        // <a-tree-select :style="style" :treeData="[]" />

        <h3>Cascader</h3>
        <ik-cascader :style="style" :options="[]" :showSearch="true" />

        // <h3>Transfer</h3>
        // <a-transfer :dataSource="[]" />

        <h3>Table</h3>
        <ik-table style="margin-top: 8px" :columns="columns" :dataSource="[]" />
        <h3>List</h3>
        <ik-list :dataSource="[]" />
      </div>
    </ik-config-provider>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        customize: false,
        style: { width: '200px' },
        columns: [
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
          },
        ],
      };
    },
  };
</script>
<style>
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
</style>`

const customeEmpty = `
<template>
  <ik-empty
    image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
  >
    <span slot="description"> Customize <a href="#API">Description</a> </span>
    <ik-button type="primary">Create Now</ik-button>
  </ik-empty>
</template>`

export {
  basicEmpty,
  globalEmpty,
  customeEmpty
}
