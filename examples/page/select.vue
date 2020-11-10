<template>
  <div>
    <ik-select mode="multiple"
               :size="size"
               placeholder="测试select"
               :defaultValue="['a1', 'b2']"
               style="width: 500px"
               @change="handleChange"
               @popupScroll="popupScroll">
      <ik-select-option v-for="i in 25"
                        :key="(i + 9).toString(36) + i">
        {{(i + 9).toString(36) + i}}
      </ik-select-option>
    </ik-select>
  </div>
</template>
<script>
import Select from '../components/select'
export default {
  data () {
    return {
      size: 'default'
    }
  },
  methods: {
    handleChange (value) {
      console.log(`Selected: ${value}`)
    },
    popupScroll () {
      console.log('popupScroll')
    }
  }
}
</script>
