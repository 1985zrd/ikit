<template>
  <codeBox :title="title" :description="description" :code="nestedSubTableCode">
    <ik-table :columns="columns" :dataSource="data" class="components-table-demo-nested">
      <a slot="operation" href="javascript:;">Publish</a>
      <ik-table
        slot="expandedRowRender"
        :columns="innerColumns"
        :dataSource="innerData"
        :pagination="false"
      >
        <span slot="status">
          <ik-badge status="success" />Finished
        </span>
        <span slot="operation" class="table-operation">
          <a href="javascript:;">Pause</a>
          <a href="javascript:;">Stop</a>
          <ik-dropdown>
            <ik-menu slot="overlay">
              <ik-menu-item>Action 1</ik-menu-item>
              <ik-menu-item>Action 2</ik-menu-item>
            </ik-menu>
            <a href="javascript:;">
              More
              <ik-icon type="down" />
            </a>
          </ik-dropdown>
        </span>
      </ik-table>
    </ik-table>
  </codeBox>
</template>
<script>
import { nestedSubTableCode } from '../codeExample'
const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Platform', dataIndex: 'platform', key: 'platform' },
  { title: 'Version', dataIndex: 'version', key: 'version' },
  { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
  { title: 'Creator', dataIndex: 'creator', key: 'creator' },
  { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
  {
    title: 'Action',
    key: 'operation',
    scopedSlots: { customRender: 'operation' }
  }
]

const data = []
for (let i = 0; i < 3; ++i) {
  data.push({
    key: i,
    name: 'Screem',
    platform: 'iOS',
    version: '10.3.4.5654',
    upgradeNum: 500,
    creator: 'Jack',
    createdAt: '2014-12-24 23:12:00'
  })
}

const innerColumns = [
  { title: 'Date', dataIndex: 'date', key: 'date' },
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Status', key: 'state', scopedSlots: { customRender: 'status' } },
  { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
  {
    title: 'Action',
    dataIndex: 'operation',
    key: 'operation',
    scopedSlots: { customRender: 'operation' }
  }
]

const innerData = []
for (let i = 0; i < 3; ++i) {
  innerData.push({
    key: i,
    date: '2014-12-24 23:12:00',
    name: 'This is production name',
    upgradeNum: 'Upgraded: 56'
  })
}

export default {
  data () {
    return {
      data,
      columns,
      innerColumns,
      innerData,
      nestedSubTableCode,
      title: '嵌套子表格',
      description: '展示每行数据更详细的信息。'
    }
  }
}
</script>
