<template>
  <codeBox title="受控的checkbox"
           description="联动checkbox"
           :code="controllCheckboxCode">
    <div>
        <p :style="{ marginBottom: '20px' }">
          <ik-checkbox :checked="checked" :disabled="disabled" @change="onChange">{{label}}</ik-checkbox>
        </p>
        <p>
          <ik-button
            type="primary"
            size="small"
            @click="toggleChecked"
          >{{!checked ? 'Check' : 'Uncheck'}}</ik-button>
          <ik-button
            :style="{ marginLeft: '10px' }"
            type="primary"
            size="small"
            @click="toggleDisable"
          >{{!disabled ? 'Disable' : 'Enable'}}</ik-button>
        </p>
      </div>
  </codeBox>
</template>
<script>
import { controllCheckboxCode } from '../demoCode.js'
export default {
  name: 'controllCheckbox',
  data () {
    return {
      controllCheckboxCode,
      checked: true,
      disabled: false
    }
  },
  computed: {
    label () {
      const { checked, disabled } = this
      return `${checked ? 'Checked' : 'Unchecked'}-${disabled ? 'Disabled' : 'Enabled'}`
    }
  },
  methods: {
    toggleChecked () {
      this.checked = !this.checked
    },
    toggleDisable () {
      this.disabled = !this.disabled
    },
    onChange (e) {
      this.checked = e.target.checked
    }
  }
}
</script>
