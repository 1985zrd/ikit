<template>
  <codeBox title="定制日期单元格"
           description="使用 dateRender 可以自定义日期单元格的内容和样式。"
           :code="text">
    <div>
      <ik-date-picker>
        <template slot="dateRender"
                  slot-scope="current, today">
          <div class="ant-calendar-date"
               :style="getCurrentStyle(current, today)">
            {{current.date()}}
          </div>
        </template>
      </ik-date-picker>
      <br />
      <br />
      <ik-range-picker>
        <template slot="dateRender"
                  slot-scope="current">
          <div class="ant-calendar-date"
               :style="getCurrentStyle(current)">
            {{current.date()}}
          </div>
        </template>
      </ik-range-picker>
      <br />
      <br />
      <ik-week-picker>
        <template slot="dateRender"
                  slot-scope="current">
          <div class="ant-calendar-date"
               :style="getCurrentStyle(current)">
            {{current.date()}}
          </div>
        </template>
      </ik-week-picker>
    </div>
  </codeBox>
</template>
<script>
import { customizeDatePickerText } from '../codeExample'
export default {
  data () {
    return {
      text: customizeDatePickerText
    }
  },
  methods: {
    getCurrentStyle (current, today) {
      const style = {}
      if (current.date() === 1) {
        style.border = '1px solid #808080'
        style.borderRadius = '50%'
      }
      return style
    }
  }
}
</script>
