<template>
  <codeBox :title="title"
           :description="description"
           :code="countdown">
    <ik-row :gutter="16">
      <ik-col :span="12">
        <ik-statistic-countdown title="Countdown"
                               :value="deadline"
                               @finish="onFinish"
                               style="margin-right: 50px" />
      </ik-col>
      <ik-col :span="12">
        <ik-statistic-countdown title="Million Seconds"
                               :value="deadline"
                               format="HH:mm:ss:SSS"
                               style="margin-right: 50px" />
      </ik-col>
      <ik-col :span="24"
             style="margin-top: 32px;">
        <ik-statistic-countdown title="Day Level"
                               :value="deadline"
                               format="D 天 H 时 m 分 s 秒" />
      </ik-col>
    </ik-row>
  </codeBox>
</template>
<script>
import { countdown } from '../codeExample'
export default {
  data () {
    return {
      title: '倒计时',
      description: '倒计时组件。',
      countdown,
      deadline: Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30
    }
  },
  methods: {
    onFinish () {
      console.log('over')
    }
  }
}
</script>
