<template>
  <codeBox :title="title"
           :description="description"
           :code="code">
    <div>
      <ik-time-picker @openChange="handleOpenChange"
                      :open="open">
        <ik-button slot="addon"
                   slot-scope="panel"
                   size="small"
                   type="primary"
                   @click="handleClose">Ok {{panel.prefixCls}}</ik-button>
      </ik-time-picker>
      <ik-time-picker style="margin-left:20px"
                      :open.sync="open2">
        <ik-button slot="addon"
                   size="small"
                   type="primary"
                   @click="handleClose">Ok</ik-button>
      </ik-time-picker>
    </div>
  </codeBox>
</template>
<script>
import { appendTimePicker } from '../timePicker.js'
export default {
  data () {
    return {
      title: '附加内容',
      description: '在 TimePicker 选择框底部显示自定义的内容。',
      code: appendTimePicker,
      open: false,
      open2: false
    }
  },
  methods: {
    handleOpenChange (open) {
      console.log('open', open)
      this.open = open
    },
    handleClose () {
      this.open = false
      this.open2 = false
    }
  }
}
</script>
