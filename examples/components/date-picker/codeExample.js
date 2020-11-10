const basicDatePickerText = `
<template>
  <div>
    <ik-date-picker @change="onChange" />
    <br />
    <ik-month-picker @change="onChange" placeholder="Select month" />
    <br />
    <ik-range-picker @change="onChange" />
    <br />
    <ik-week-picker @change="onChange" placeholder="Select week" />
  </div>
</template>
<script>
  export default {
    methods: {
      onChange(date, dateString) {
        console.log(date, dateString);
      },
    }
  };
</script>
`
const customizeDatePickerText = `
<template>
  <div>
    <ik-date-picker>
      <template slot="dateRender" slot-scope="current, today">
        <div class="ant-calendar-date" :style="getCurrentStyle(current, today)">
          {{current.date()}}
        </div>
      </template>
    </ik-date-picker>
    <ik-range-picker>
      <template slot="dateRender" slot-scope="current">
        <div class="ant-calendar-date" :style="getCurrentStyle(current)">
          {{current.date()}}
        </div>
      </template>
    </ik-range-picker>
    <ik-week-picker>
      <template slot="dateRender" slot-scope="current">
        <div class="ant-calendar-date" :style="getCurrentStyle(current)">
          {{current.date()}}
        </div>
      </template>
    </ik-week-picker>
  </div>
</template>
<script>
  export default {
    methods: {
      getCurrentStyle(current, today) {
        const style = {};
        if (current.date() === 1) {
          style.border = '1px solid #1890ff';
          style.borderRadius = '50%';
        }
        return style;
      },
    },
  };
</script>
`
const notSelectableDatePickerText = `
<template>
  <div>
    <ik-date-picker
      format="YYYY-MM-DD HH:mm:ss"
      :disabledDate="disabledDate"
      :disabledTime="disabledDateTime"
      :showTime="{ defaultValue: moment('00:00:00', 'HH:mm:ss') }"
    />
    <br />
    <ik-month-picker :disabledDate="disabledDate" placeholder="Select month" />
    <br />
    <ik-range-picker
      :disabledDate="disabledDate"
      :disabledTime="disabledRangeTime"
      :showTime="{
        hideDisabledOptions: true, 
        defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')]
      }"
      format="YYYY-MM-DD HH:mm:ss"
    />
  </div>
</template>
<script>
  import moment from 'moment';
  export default {
    methods: {
      moment,
      range(start, end) {
        const result = [];
        for (let i = start; i < end; i++) {
          result.push(i);
        }
        return result;
      },

      disabledDate(current) {
        // Can not select days before today and today
        return current && current < moment().endOf('day');
      },

      disabledDateTime() {
        return {
          disabledHours: () => this.range(0, 24).splice(4, 20),
          disabledMinutes: () => this.range(30, 60),
          disabledSeconds: () => [55, 56],
        };
      },

      disabledRangeTime(_, type) {
        if (type === 'start') {
          return {
            disabledHours: () => this.range(0, 60).splice(4, 20),
            disabledMinutes: () => this.range(30, 60),
            disabledSeconds: () => [55, 56],
          };
        }
        return {
          disabledHours: () => this.range(0, 60).splice(20, 4),
          disabledMinutes: () => this.range(0, 31),
          disabledSeconds: () => [55, 56],
        };
      },
    },
  };
</script>
`
const disableDatePickerText = `
<template>
  <div>
    <ik-date-picker :defaultValue="moment('2015-06-06', dateFormat)" disabled />
    <br />
    <ik-month-picker :defaultValue="moment('2015-06', 'YYYY-MM')" disabled />
    <br />
    <ik-range-picker
      :defaultValue="[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]"
      disabled
    />
  </div>
</template>
<script>
  import moment from 'moment';
  export default {
    data() {
      this.dateFormat = 'YYYY-MM-DD';
      return {};
    },
    methods: {
      moment,
    },
  };
</script>
`
const additionalDatePickerText = `
<template>
  <div>
    <ik-date-picker>
      <template slot="renderExtraFooter">
        extra footer
      </template>
    </ik-date-picker>
    <ik-date-picker showTime>
      <template slot="renderExtraFooter">
        extra footer
      </template>
    </ik-date-picker>
    <ik-range-picker>
      <template slot="renderExtraFooter">
        extra footer
      </template>
    </ik-range-picker>
    <ik-range-picker showTime>
      <template slot="renderExtraFooter">
        extra footer
      </template>
    </ik-range-picker>
    <ik-month-picker placeholder="Select month">
      <template slot="renderExtraFooter">
        extra footer
      </template>
    </ik-month-picker>
  </div>
</template>
`
const dateFormatDatePickerText = `
<template>
  <div>
    <ik-date-picker :defaultValue="moment('2015/01/01', dateFormat)" :format="dateFormat" />
    <br />
    <ik-month-picker :defaultValue="moment('2015/01', monthFormat)" :format="monthFormat" />
    <br />
    <ik-range-picker
      :defaultValue="[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]"
      :format="dateFormat"
    />
  </div>
</template>
<script>
  import moment from 'moment';
  export default {
    data() {
      return {
        dateFormat: 'YYYY/MM/DD',
        monthFormat: 'YYYY/MM',
      };
    },
    methods: {
      moment,
    },
  };
</script>
`
const controlledDatePickerText = `
<template>
  <div>
    <ik-date-picker
      :mode="mode1"
      showTime
      @openChange="handleOpenChange1"
      @panelChange="handlePanelChange1"
    />
    <br />
    <ik-range-picker
      :placeholder="['Start month', 'End month']"
      format="YYYY-MM"
      :value="value"
      :mode="mode2"
      @panelChange="handlePanelChange2"
      @change="handleChange"
    />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        mode1: 'time',
        mode2: ['month', 'month'],
        value: [],
      };
    },
    methods: {
      handleOpenChange1(open) {
        if (open) {
          this.mode1 = 'time';
        }
      },
      handleChange(value) {
        this.value = value;
      },
      handlePanelChange1(value, mode) {
        this.mode1 = mode;
      },
      handlePanelChange2(value, mode) {
        this.value = value;
        this.mode2 = [
          mode[0] === 'date' ? 'month' : mode[0],
          mode[1] === 'date' ? 'month' : mode[1],
        ];
      },
    },
  };
</script>
`
const presetRangeDatePickerText = `
<template>
  <div>
    <ik-range-picker
      :ranges="{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }"
      @change="onChange"
    />
    <br />
    <ik-range-picker
      :ranges="{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }"
      showTime
      format="YYYY/MM/DD HH:mm:ss"
      @change="onChange"
    />
  </div>
</template>
<script>
  import moment from 'moment';
  export default {
    data() {
      return {
        dateFormat: 'YYYY/MM/DD',
        monthFormat: 'YYYY/MM',
      };
    },
    methods: {
      moment,
      onChange(dates, dateStrings) {
        console.log('From: ', dates[0], ', to: ', dates[1]);
        console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
      },
    },
  };
</script>
`
const sizeDatePickerText = `
<template>
  <div>
    <ik-radio-group v-model="size">
      <ik-radio-button value="large">Large</ik-radio-button>
      <ik-radio-button value="default">Default</ik-radio-button>
      <ik-radio-button value="small">Small</ik-radio-button>
    </ik-radio-group>
    <br /><br />
    <ik-date-picker :size="size" />
    <br />
    <ik-month-picker :size="size" placeholder="Select Month" />
    <br />
    <ik-range-picker :size="size" />
    <br />
    <ik-week-picker :size="size" placeholder="Select Week" />
  </div>
</template>
<script>
  import moment from 'moment';
  export default {
    data() {
      return {
        size: 'default',
      };
    },
  };
</script>
`
const customRangeDatePickerText = `
<template>
  <div>
    <ik-date-picker
      :disabledDate="disabledStartDate"
      showTime
      format="YYYY-MM-DD HH:mm:ss"
      v-model="startValue"
      placeholder="Start"
      @openChange="handleStartOpenChange"
    />
    <ik-date-picker
      :disabledDate="disabledEndDate"
      showTime
      format="YYYY-MM-DD HH:mm:ss"
      placeholder="End"
      v-model="endValue"
      :open="endOpen"
      @openChange="handleEndOpenChange"
    />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        startValue: null,
        endValue: null,
        endOpen: false,
      };
    },
    watch: {
      startValue(val) {
        console.log('startValue', val);
      },
      endValue(val) {
        console.log('endValue', val);
      },
    },
    methods: {
      disabledStartDate(startValue) {
        const endValue = this.endValue;
        if (!startValue || !endValue) {
          return false;
        }
        return startValue.valueOf() > endValue.valueOf();
      },
      disabledEndDate(endValue) {
        const startValue = this.startValue;
        if (!endValue || !startValue) {
          return false;
        }
        return startValue.valueOf() >= endValue.valueOf();
      },
      handleStartOpenChange(open) {
        if (!open) {
          this.endOpen = true;
        }
      },
      handleEndOpenChange(open) {
        this.endOpen = open;
      },
    },
  };
</script>
`
const timeSelectionDatePickerText = `
<template>
  <div>
    <ik-date-picker showTime placeholder="Select Time" @change="onChange" @ok="onOk" />
    <br />
    <ik-range-picker
      :showTime="{ format: 'HH:mm' }"
      format="YYYY-MM-DD HH:mm"
      :placeholder="['Start Time', 'End Time']"
      @change="onChange"
      @ok="onOk"
    />
  </div>
</template>
<script>
  export default {
    methods: {
      onChange(value, dateString) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
      },
      onOk(value) {
        console.log('onOk: ', value);
      },
    },
  };
</script>
`
const customRenderingDatePickerText = `
<template>
  <div>
    <ik-date-picker placeholder="Select Time" v-model="time1" @change="onChange" @ok="onOk">
      <span>{{time1?time1:'SelectTime'}}</span>
    </ik-date-picker>
    <br />
    <ik-range-picker v-model="time2">
      <span>
        {{time2?time2:'请选择'}}
      </span>
    </ik-range-picker>
  </div>
</template>
<script>
  import moment from 'moment';
  export default {
    data() {
      return {
        time1: undefined,
        time2: undefined,
      };
    },
    methods: {
      onChange(value, dateString) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
      },
      onOk(value) {
        console.log('onOk: ', value);
      },
      clearTime() {
        this.time1 = undefined;
      },
    },
  };
</script>
`
const suffixIconDatePickerText = `
<template>
  <div>
    <ik-date-picker @change="onChange">
      <ik-icon slot="suffixIcon" type="smile" />
    </ik-date-picker>
    <br />
    <ik-month-picker @change="onChange" placeholder="Select month">
      <ik-icon slot="suffixIcon" type="smile" />
    </ik-month-picker>
    <br />
    <ik-range-picker @change="onChange">
      <ik-icon slot="suffixIcon" type="smile" />
    </ik-range-picker>
    <br />
    <ik-week-picker @change="onChange" placeholder="Select week">
      <ik-icon slot="suffixIcon" type="smile" />
    </ik-week-picker>
    <br />
    <ik-date-picker suffixIcon="ab" @change="onChange" />
    <br />
    <ik-month-picker suffixIcon="ab" @change="onChange" placeholder="Select month" />
    <br />
    <ik-range-picker suffixIcon="ab" @change="onChange" />
    <br />
    <ik-week-picker suffixIcon="ab" @change="onChange" placeholder="Select week" />
  </div>
</template>
<script>
  export default {
    methods: {
      onChange(date, dateString) {
        console.log(date, dateString);
      },
    },
  };
</script>
`
export {
  basicDatePickerText,
  customizeDatePickerText,
  notSelectableDatePickerText,
  disableDatePickerText,
  additionalDatePickerText,
  dateFormatDatePickerText,
  controlledDatePickerText,
  presetRangeDatePickerText,
  sizeDatePickerText,
  customRangeDatePickerText,
  timeSelectionDatePickerText,
  customRenderingDatePickerText,
  suffixIconDatePickerText
}
