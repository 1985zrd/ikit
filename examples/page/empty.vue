<template>
  <div class='empty'>
    <ik-empty></ik-empty>
    <br />
    <br />
    <br />
    <ik-empty
      :image='notFind'
    >
      <span slot='description'>
        <a href='#API'>页面不存在</a>
      </span>
      <ik-button type='primary'>按钮</ik-button>
    </ik-empty>
    <br />
    <br />
    <br />
    <br />
    <ik-config-provider>
      <template v-if='customize' v-slot:renderEmpty>
        <div style='text-align: center'>
          <ik-icon type='smile' style='font-size: 20px' />
          <p>数据为空</p>
        </div>
      </template>
      <div class='config-provider'>
        <h3>Select</h3>
        <ik-select :style='style' :options='[]' />
        <h3>List</h3>
        <ik-list :dataSource='[]' />
        <h3>Table</h3>
        <ik-table style='margin-top: 8px' :columns='columns' :dataSource='[]' />
      </div>
    </ik-config-provider>
  </div>
</template>

<script type='text/ecmascript-6'>
import notFind from '../assets/img/empty/404.svg'
export default {
  name: 'empty-demo',
  data () {
    return {
      notFind: notFind,
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
  },
  components: {},
  methods: {}
}
</script>

<style lang='less' scoped>
.empty {
}
</style>
