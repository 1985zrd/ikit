const basicCalendar = `
<template>
  <ik-calendar @panelChange="onPanelChange" />
</template>
<script>
  export default {
    methods: {
      onPanelChange(value, mode) {
        console.log(value, mode)
      }
    }
  }
</script>
`
const cardCalendar = `
<template>
  <div :style="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
    <ik-calendar :fullscreen="false" @panelChange="onPanelChange" />
  </div>
</template>
<script>
  export default {
    methods: {
      onPanelChange(value, mode) {
        console.log(value, mode)
      }
    }
  }
</script>
`

const noticeCalendar = `
<template>
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
</template>
<script>

export default {
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
`

const selectCalendar = `
<template>
  <div>
    <ik-alert :message="'You selected date:' + selectedValue? selectedValue.format('YYYY-MM-DD'):''" />
    <div :style="{ display: 'inline-block', width: '500px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
      <ik-calendar :value="value"
                    @select="onSelect"
                    @panelChange="onPanelChange" />
    </div>
    <div :style="{ display: 'inline-block', width: '500px',marginLeft: '20px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
      <ik-calendar v-model="value1" />
    </div>
  </div>
</template>
<script>
import moment from 'moment'

export default {
  data () {
    return {
      value: moment('2017-01-25'),
      selectedValue: moment('2017-01-25'),
      value1: moment('2017-01-25')
    }
  },
  methods: {
    onSelect (value) {
      this.value = value
      this.selectedValue = value
    },
    onPanelChange (value) {
      this.value = value
    }
  }
}
</script>

`
export {
  basicCalendar,
  cardCalendar,
  noticeCalendar,
  selectCalendar
}
