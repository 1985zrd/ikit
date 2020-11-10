<template>
  <li v-clipboard:copy="text"
      v-clipboard:success="onCopied"
      :class="justCopied === type ? 'copied' : ''">
    <ik-icon :type="type"
             isIk
             v-if="isIk || type.indexOf('icon') === 0" />
    <ik-icon :type="type"
             :theme="theme"
             v-else />

    <span class="anticon-class">
      <ik-badge :dot="isNew">
        {{ type }}
      </ik-badge>
    </span>
  </li>
</template>
<script>
export default {
  props: ['type', 'isNew', 'theme', 'justCopied', 'isIk'],
  data () {
    const { type, theme, isIk } = this
    return {
      text:
        (isIk === true || type.indexOf('icon') === 0) ? (`<ik-icon type="${type}" isIk/>`) : (theme === 'outlined' ? `<ik-icon type="${type}" />` : `<ik-icon type="${type}" theme="${theme}" />`)
    }
  },
  methods: {
    onCopied () {
      this.$emit('copied', this.type, this.text)
    }
  }
}
</script>
