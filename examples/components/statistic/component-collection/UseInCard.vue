<template>
  <codeBox :title="title"
           :description="description"
           :code="useInCard">
    <div style="background: #ECECEC; padding: 30px">
      <ik-row :gutter="16">
        <ik-col :span="12">
          <ik-card>
            <ik-statistic title="Feedback"
                         :value="11.28"
                         :precision="2"
                         suffix="%"
                         :valueStyle="{color: '#3f8600'}"
                         style="margin-right: 50px">
              <template v-slot:prefix>
                <ik-icon type="arrow-up" />
              </template>
            </ik-statistic>
          </ik-card>
        </ik-col>
        <ik-col :span="12">
          <ik-card>
            <ik-statistic title="Idle"
                         :value="9.3"
                         :precision="2"
                         suffix="%"
                         valueClass="demo-class"
                         :valueStyle="{ color: '#cf1322' }">
              <template v-slot:prefix>
                <ik-icon type="arrow-down" />
              </template>
            </ik-statistic>
          </ik-card>
        </ik-col>
      </ik-row>
    </div>
  </codeBox>
</template>
<script>
import { useInCard } from '../codeExample'
export default {
  data () {
    return {
      title: '在卡片中使用',
      description: '在卡片中展示统计数值。',
      useInCard
    }
  }
}
</script>
