<template>
<codeBox :title="title"
           :description="description"
           :code="unit">
  <ik-row :gutter="16">
    <ik-col :span="12">
      <ik-statistic title="Feedback" :value="1128" style="margin-right: 50px">
        <template v-slot:suffix>
          <ik-icon type="like" />
        </template>
      </ik-statistic>
    </ik-col>
    <ik-col :span="12">
      <ik-statistic title="Unmerged" :value="93" valueClass="demo-class">
        <template v-slot:suffix>
          <span> / 100</span>
        </template>
      </ik-statistic>
    </ik-col>
  </ik-row>
</codeBox>
</template>
<script>
import { unit } from '../codeExample'
export default {
  data () {
    return {
      title: '单位',
      description: '通过前缀和后缀添加单位。',
      unit
    }
  }
}
</script>
