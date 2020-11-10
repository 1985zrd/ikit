const twelveTimePicker = `
<template>
  <div>
    <ik-time-picker use12Hours @change="onChange" />
    <ik-time-picker use12Hours format="h:mm:ss A" @change="onChange" />
    <ik-time-picker use12Hours format="h:mm a" @change="onChange" />
  </div>
</template>
<script>
  export default {
    methods: {
      onChange(time, timeString) {
        console.log(time, timeString)
      }
    }
  }
</script>
`
const appendTimePicker = `
<template>
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
</template>
<script>
export default {
  data () {
    return {
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
`

const basicTimePicker = `
<template>
  <ik-time-picker @change="onChange" :defaultOpenValue="moment('00:00:00', 'HH:mm:ss')" />
</template>
<script>
  import moment from 'moment'
  export default {
    methods: {
      moment,
      onChange(time, timeString) {
        console.log(time, timeString)
      }
    }
  }
</script>
`

const disabledTimePicker = `
<template>
  <ik-time-picker :defaultValue="moment('12:08:23', 'HH:mm:ss')" disabled />
</template>
<script>
  import moment from 'moment'
  export default {
    methods: {
      moment
    }
  }
</script>
`

const selectTimePicker = `
<template>
  <ik-time-picker :defaultValue="moment('12:08', 'HH:mm')" format="HH:mm" />
</template>
<script>
  import moment from 'moment'
  export default {
    methods: {
      moment
    }
  }
</script>
`

const stepTimePicker = `
<template>
  <ik-time-picker :minuteStep="15" :secondStep="10" />
</template>
`

const threeTimePicker = `
<template>
  <div>
    <ik-time-picker :defaultValue="moment('12:08:23', 'HH:mm:ss')" size="large" />
    <ik-time-picker :defaultValue="moment('12:08:23', 'HH:mm:ss')" />
    <ik-time-picker :defaultValue="moment('12:08:23', 'HH:mm:ss')" size="small" />
  </div>
</template>
<script>
  import moment from 'moment'
  export default {
    methods: {
      moment
    }
  }
</script>
`

const controlledTimePicker = `
<template>
  <div>
    <p>use value and @change</p>
    <ik-time-picker @change="onChange" :value="value" />
    <br />
    <br />
    <p>v-model</p>
    <ik-time-picker v-model="value" />
    <br />
    <br />
    <p>Do not change</p>
    <ik-time-picker :value="value2" />
  </div>
</template>
<script>
  import moment from 'moment'
  export default {
    data() {
      return {
        value: null,
        value2: moment()
      }
    },
    methods: {
      onChange(time) {
        console.log(time)
        this.value = time
      }
    }
  }
</script>
`

const iconTimePicker = `
<template>
  <ik-time-picker @change="onChange" :defaultOpenValue="moment('00:00:00', 'HH:mm:ss')">
    <ik-icon type="smile" slot="suffixIcon" />
  </ik-time-picker>
</template>
<script>
  import moment from 'moment'
  export default {
    methods: {
      moment,
      onChange(time, timeString) {
        console.log(time, timeString)
      }
    }
  }
</script>
`

export {
  twelveTimePicker,
  appendTimePicker,
  basicTimePicker,
  disabledTimePicker,
  selectTimePicker,
  stepTimePicker,
  threeTimePicker,
  controlledTimePicker,
  iconTimePicker
}
