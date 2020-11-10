<template functional>
  <ik-sub-menu :key="props.menuInfo.key">
    <span slot="title">
      <ik-icon type="icontime"
               isIk /><span>{{ props.menuInfo.title }}</span>
    </span>
    <template v-for="item in props.menuInfo.children">
      <ik-menu-item v-if="!item.children"
                    :key="item.key">
        <ik-icon type="icontime"
                 isIk />
        <span>{{ item.title }}</span>
      </ik-menu-item>
      <sub-menu v-else
                :key="item.key"
                :menu-info="item" />
    </template>
  </ik-sub-menu>
</template>
<script>
export default {
  props: ['menuInfo']
}
</script>
