<template>
  <codeBox :title="title" :description="description" :code="customizedProgressDotCode">
    <div>
      <ik-steps :current="1">
        <a-popover slot="progressDot" slot-scope="{index, status, prefixCls}">
          <template slot="content">
            <span>step {{index}} status: {{status}}</span>
          </template>
          <span :class="`${prefixCls}-icon-dot`"></span>
        </a-popover>
        <ik-step title="Finished" description="You can hover on the dot." />
        <ik-step title="In Progress" description="You can hover on the dot." />
        <ik-step title="Waiting" description="You can hover on the dot." />
        <ik-step title="Waiting" description="You can hover on the dot." />
      </ik-steps>
    </div>
  </codeBox>
</template>
<script>
import { customizedProgressDotCode } from '../codeExample'
export default {
  data () {
    return {
      title: '自定义点状步骤条',
      description: '为点状步骤条增加自定义展示。',
      customizedProgressDotCode
    }
  }
}
</script>
