<template>
  <codeBox :title="title"
           :description="description"
           :code="verticalMenu">
    <div>
      <ik-menu style="width: 256px"
               :inlineIndent='36'
               mode="vertical"
               @click="handleClick">
        <ik-menu-item key="1">
          <ik-icon type="icontime"
                   isIk />Navigation One
        </ik-menu-item>
        <ik-menu-item key="2">
          <ik-icon type="icontime"
                   isIk />Navigation Two
        </ik-menu-item>
        <ik-sub-menu key="sub1">
          <span slot="title">
            <ik-icon type="icontime"
                     isIk />
            <span>Navigation Three</span>
          </span>
          <ik-menu-item key="3">Option 3</ik-menu-item>
          <ik-menu-item key="4">Option 4</ik-menu-item>
          <ik-sub-menu key="sub1-2"
                       title="Submenu">
            <ik-menu-item key="5">Option 5</ik-menu-item>
            <ik-menu-item key="6">Option 6</ik-menu-item>
          </ik-sub-menu>
        </ik-sub-menu>
        <ik-sub-menu key="sub2">
          <span slot="title">
            <ik-icon type="icontime"
                     isIk />
            <span>Navigation Four</span>
          </span>
          <ik-menu-item key="7">Option 7</ik-menu-item>
          <ik-menu-item key="8">Option 8</ik-menu-item>
          <ik-menu-item key="9">Option 9</ik-menu-item>
          <ik-menu-item key="10">Option 10</ik-menu-item>
        </ik-sub-menu>
      </ik-menu>
    </div>
  </codeBox>
</template>

<script>
import { verticalMenu } from './../codeExample'

export default {
  data () {
    return {
      verticalMenu,
      title: '垂直菜单',
      description: '子菜单是弹出的形式'
    }
  },
  methods: {
    handleClick (e) {
      console.log('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
