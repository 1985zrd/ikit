const simpleCode = `
<template>
  <div>
    <ik-steps :current="1" labelPlacement="vertical">
      <ik-step>
        <span slot="description">Finished</span>
      </ik-step>
      <ik-step description="In Progress" />
      <ik-step description="Waiting" />
    </ik-steps>
    <br>
    <br>
    <br>
    <ik-steps :current="1">
      <ik-step>
        <!-- <span slot="title">Finished</span> -->
        <template slot="title">
          Finished
        </template>
        <span slot="description">This is a description.</span>
      </ik-step>
      <ik-step title="In Progress" description="This is a description." />
      <ik-step title="Waiting" description="This is a description." />
    </ik-steps>
  </div>
</template>
`
const smallSizeCode = `
<template>
  <ik-steps :current="1" size="small">
    <ik-step title="Finished" />
    <ik-step title="In Progress" />
    <ik-step title="Waiting" />
  </ik-steps>
</template>
`
const iconCode = `
<template>
  <ik-steps>
    <ik-step status="finish" title="Login">
      <ik-icon type="user" slot="icon" />
    </ik-step>
    <ik-step status="finish" title="Verification">
      <ik-icon type="solution" slot="icon" />
    </ik-step>
    <ik-step status="process" title="Pay">
      <ik-icon type="loading" slot="icon" />
    </ik-step>
    <ik-step status="wait" title="Done">
      <ik-icon type="smile-o" slot="icon" />
    </ik-step>
  </ik-steps>
</template>
`
const stepNextCode = `
<template>
  <div>
    <ik-steps :current="current">
      <ik-step v-for="item in steps" :key="item.title" :title="item.title" />
    </ik-steps>
    <div class="steps-content">{{steps[current].content}}</div>
    <div class="steps-action">
      <ik-button v-if="current < steps.length - 1" type="primary" @click="next">
        Next
      </ik-button>
      <ik-button
        v-if="current == steps.length - 1"
        type="primary"
        @click="$message.success('Processing complete!')"
      >
        Done
      </ik-button>
      <ik-button v-if="current>0" style="margin-left: 8px" @click="prev">
        Previous
      </ik-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      current: 0,
      steps: [
        {
          title: 'First',
          content: 'First-content'
        },
        {
          title: 'Second',
          content: 'Second-content'
        },
        {
          title: 'Last',
          content: 'Last-content'
        }
      ]
    }
  },
  methods: {
    next () {
      this.current++
    },
    prev () {
      this.current--
    }
  }
}
</script>
<style scoped>
  .steps-content {
    margin-top: 16px;
    border: 1px dashed #e9e9e9;
    border-radius: 6px;
    background-color: #fafafa;
    min-height: 200px;
    text-align: center;
    padding-top: 80px;
  }

  .steps-action {
    margin-top: 24px;
  }
</style>
`
const verticalCode = `
<template>
  <ik-steps direction="vertical" :current="1">
    <ik-step title="Finished" description="This is a description." />
    <ik-step title="In Progress" description="This is a description." />
    <ik-step title="Waiting" description="This is a description." />
  </ik-steps>
</template>
`
const verticalSmallCode = `
<template>
  <ik-steps direction="vertical" size="small" :current="1">
    <ik-step title="Finished" description="This is a description." />
    <ik-step title="In Progress" description="This is a description." />
    <ik-step title="Waiting" description="This is a description." />
  </ik-steps>
</template>
`
const errorCode = `
<template>
  <ik-steps :current="1" status="error">
    <ik-step title="Finished" description="This is a description." />
    <ik-step title="In Progress" description="This is a description." />
    <ik-step title="Waiting" description="This is a description." />
  </ik-steps>
</template>
`
const progressDotCode = `
<template>
  <ik-steps progressDot :current="1">
    <ik-step title="Finished" description="This is a description." />
    <ik-step title="In Progress" description="This is a description." />
    <ik-step title="Waiting" description="This is a description." />
  </ik-steps>
</template>
`
const customizedProgressDotCode = `
<template>
  <div>
    <ik-steps :current="1">
      <a-popover slot="progressDot" slot-scope="{index, status, prefixCls}">
        <template slot="content">
          <span>step {{index}} status: {{status}}</span>
        </template>
        <span :class="\`\${prefixCls}-icon-dot\`"></span>
      </a-popover>
      <ik-step title="Finished" description="You can hover on the dot." />
      <ik-step title="In Progress" description="You can hover on the dot." />
      <ik-step title="Waiting" description="You can hover on the dot." />
      <ik-step title="Waiting" description="You can hover on the dot." />
    </ik-steps>
  </div>
</template>
`
export {
  simpleCode,
  smallSizeCode,
  iconCode,
  stepNextCode,
  verticalCode,
  verticalSmallCode,
  errorCode,
  progressDotCode,
  customizedProgressDotCode
}
