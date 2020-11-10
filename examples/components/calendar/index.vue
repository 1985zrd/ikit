<template>
  <div class="calendar">
    <BasicCalendar />
    <!-- <CardCalendar /> -->
    <NoticeCalendar />
    <!-- <SelectCalendar /> -->
    <MarkdownRender mdFileName="calendar" />
  </div>
</template>

<script>
import BasicCalendar from './demo/BasicCalendar'
// import CardCalendar from './demo/CardCalendar'
import NoticeCalendar from './demo/NoticeCalendar'
// import SelectCalendar from './demo/SelectCalendar'
export default {
  name: 'calendar-demo',
  components: {
    BasicCalendar,
    // CardCalendar,
    NoticeCalendar
    // SelectCalendar
  }
}
</script>
