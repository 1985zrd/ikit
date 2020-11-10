<template>
  <codeBox title="栅格卡片"
           :description="description"
           :code="latticeCard">
    <template>
      <div style="background-color: #ececec; padding: 20px;">
        <ik-row :gutter="16">
          <ik-col :span="8">
            <ik-card title="Card title" :bordered="false">
              <p>card content</p>
            </ik-card>
          </ik-col>
          <ik-col :span="8">
            <ik-card title="Card title" :bordered="false">
              <p>card content</p>
            </ik-card>
          </ik-col>
          <ik-col :span="8">
            <ik-card title="Card title" :bordered="false">
              <p>card content</p>
            </ik-card>
          </ik-col>
        </ik-row>
      </div>
    </template>
  </codeBox>
</template>
<script>
import { latticeCard } from '../card'
export default {
  data () {
    return {
      latticeCard,
      description: `在系统概览页面常常和栅格进行配合。`
    }
  }
}
</script>
<style>

</style>
