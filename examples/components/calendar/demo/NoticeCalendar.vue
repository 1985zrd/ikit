<template>
  <codeBox :title="title"
           :description="description"
           :code="noticeCalendar">
    <ik-calendar>
      <ul class="events"
          slot="dateCellRender"
          slot-scope="value">
        <li v-for="item in getListData(value)"
            :key="item.content">
          <ik-badge :status="item.type"
                   :text="item.content" />
        </li>
      </ul>
      <template slot="monthCellRender"
                slot-scope="value">
        <div v-if="getMonthData(value)"
             class="notes-month">
          <section>{{getMonthData(value)}}</section>
          <span>Backlog number</span>
        </div>
      </template>
    </ik-calendar>
  </codeBox>
</template>
<script>
import { noticeCalendar } from '../calendar.js'

export default {
  name: 'NoticeCalendar',
  data () {
    return {
      title: '通知事项日历',
      description: '一个复杂的应用示例，用 dateCellRender 和 monthCellRender 函数来自定义需要渲染的数据。',
      noticeCalendar
    }
  },
  methods: {
    getListData (value) {
      let listData
      switch (value.date()) {
        case 8:
          listData = [
            { type: 'warning', content: 'This is warning event.' },
            { type: 'success', content: 'This is usual event.' }
          ]
          break
        case 10:
          listData = [
            { type: 'warning', content: 'This is warning event.' },
            { type: 'success', content: 'This is usual event.' },
            { type: 'error', content: 'This is error event.' }
          ]
          break
        case 15:
          listData = [
            { type: 'warning', content: 'This is warning event' },
            { type: 'success', content: 'This is very long usual event。。....' },
            { type: 'error', content: 'This is error event 1.' },
            { type: 'error', content: 'This is error event 2.' },
            { type: 'error', content: 'This is error event 3.' },
            { type: 'error', content: 'This is error event 4.' }
          ]
          break
        default:
      }
      return listData || []
    },

    getMonthData (value) {
      if (value.month() === 8) {
        return 1394
      }
    }
  }
}
</script>
<style scoped>
.events {
  list-style: none;
  margin: 0;
  padding: 0;
}
.events .ant-badge-status {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  text-overflow: ellipsis;
  font-size: 12px;
}
.notes-month {
  text-align: center;
  font-size: 28px;
}
.notes-month section {
  font-size: 28px;
}
</style>
