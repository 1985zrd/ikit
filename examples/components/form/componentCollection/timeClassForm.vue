<template>
  <codeBox :title="title" :description="description" :code="text">
    <ik-form :form="form" @submit="handleSubmit">
      <ik-form-item v-bind="formItemLayout" label="DatePicker">
        <ik-date-picker v-decorator="['date-picker', config]" />
      </ik-form-item>
      <ik-form-item v-bind="formItemLayout" label="DatePicker[showTime]">
        <ik-date-picker
          v-decorator="['date-time-picker', config]"
          show-time
          format="YYYY-MM-DD HH:mm:ss"
        />
      </ik-form-item>
      <ik-form-item v-bind="formItemLayout" label="MonthPicker">
        <ik-month-picker v-decorator="['month-picker', config]" />
      </ik-form-item>
      <ik-form-item v-bind="formItemLayout" label="RangePicker">
        <ik-range-picker v-decorator="['range-picker', rangeConfig]" />
      </ik-form-item>
      <ik-form-item v-bind="formItemLayout" label="RangePicker[showTime]">
        <ik-range-picker
          v-decorator="['range-time-picker', rangeConfig]"
          show-time
          format="YYYY-MM-DD HH:mm:ss"
        />
      </ik-form-item>
      <ik-form-item v-bind="formItemLayout" label="TimePicker">
        <a-time-picker v-decorator="['time-picker', config]" />
      </ik-form-item>
      <ik-form-item
        :wrapper-col="{
          xs: { span: 24, offset: 0 },
          sm: { span: 16, offset: 8 },
        }"
      >
        <ik-button type="primary" html-type="submit">Submit</ik-button>
      </ik-form-item>
    </ik-form>
  </codeBox>
</template>
<script>
// import mixin from '../formMixins'
import { timeClassFormCode } from '../codeExample'
export default {
  // mixins: [mixin],
  name: 'timeClassForm',
  data () {
    return {
      title: '时间类控件',
      description: '时间类组件的 value 类型为 moment 对象，所以在提交服务器前需要预处理。 setFieldsValue 来动态设置其他控件的值。',
      text: timeClassFormCode,
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 }
        }
      },
      config: {
        rules: [{ type: 'object', required: true, message: 'Please select time!' }]
      },
      rangeConfig: {
        rules: [{ type: 'array', required: true, message: 'Please select time!' }]
      }
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'time_related_controls' })
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, fieldsValue) => {
        if (err) {
          return
        }

        // Should format date value before submit.
        const rangeValue = fieldsValue['range-picker']
        const rangeTimeValue = fieldsValue['range-time-picker']
        const values = {
          ...fieldsValue,
          'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
          'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
          'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
          'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
          'range-time-picker': [
            rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
            rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss')
          ],
          'time-picker': fieldsValue['time-picker'].format('HH:mm:ss')
        }
        console.log('Received values of form: ', values)
      })
    }
  }
}
</script>
