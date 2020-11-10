import DatePicker from './src/DatePicker'
import RangePicker from './src/RangePicker'
import WeekPicker from './src/WeekPicker'
import MonthPicker from './src/MonthPicker'

DatePicker.install = function (Vue) {
  Vue.component(DatePicker.name, DatePicker)
  Vue.component(RangePicker.name, RangePicker)
  Vue.component(WeekPicker.name, WeekPicker)
  Vue.component(MonthPicker.name, MonthPicker)
}
DatePicker.RangePicker = RangePicker
DatePicker.WeekPicker = WeekPicker
DatePicker.MonthPicker = MonthPicker

export default [DatePicker, RangePicker, WeekPicker, MonthPicker]
