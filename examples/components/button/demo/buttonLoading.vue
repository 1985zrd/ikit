<template>
  <codeBox title="加载中状态"
           description="添加 loading 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。"
           :code="buttonLoadingHtml">
    <div>
        <ik-button type="primary" loading>
          Loading
        </ik-button>
        <ik-button type="primary" size="small" loading>
          Loading
        </ik-button>
        <br />
        <ik-button type="primary" :loading="loading" @mouseenter="enterLoading">
          mouseenter me!
        </ik-button>
        <ik-button type="primary" icon="poweroff" :loading="iconLoading" @click="enterIconLoading">
          延迟1s
        </ik-button>
        <br />
        <ik-button type="primary" loading />
        <ik-button shape="circle" loading />
        <ik-button type="primary" shape="circle" loading />
      </div>
  </codeBox>
</template>
<script>
import { buttonLoadingHtml } from '../test'
export default {
  name: 'buttonLoading',
  data () {
    return {
      loading: false,
      iconLoading: false,
      buttonLoadingHtml
    }
  },
  methods: {
    enterLoading () {
      this.loading = true
    },
    enterIconLoading () {
      this.iconLoading = { delay: 1000 }
    }
  }
}
</script>
