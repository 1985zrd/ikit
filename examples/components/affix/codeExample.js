const basicCode = `
<template>
  <div>
    <ik-affix :offsetTop="this.top">
      <ik-button type="primary" @click="()=>{this.top += 10}">Affix top</ik-button>
    </ik-affix>
    <br />
    <ik-affix :offsetBottom="this.bottom">
      <ik-button type="primary" @click="()=>{this.bottom += 10}">Affix bottom</ik-button>
    </ik-affix>
  </div>
</template>

<script>
export default {
  data () {
    return {
      top: 10,
      bottom: 10
    }
  }
}
</script>
`

const onChangeCode = `
<template>
  <ik-affix :offsetTop="120" @change="change">
    <ik-button>120px to affix top</ik-button>
  </ik-affix>
</template>
<script>
export default {
  methods: {
    change (affixed) {
      console.log(affixed)
    }
  }
}
</script>
`
const targetCode = `
<template>
  <div id="components-affix-demo-target" class="scrollable-container" ref="container">
    <div class="background">
      <ik-affix :target="() => this.$refs.container">
        <ik-button type="primary">
          Fixed at the top of container
        </ik-button>
      </ik-affix>
    </div>
  </div>
</template>
<style>
  #components-affix-demo-target.scrollable-container {
    height: 100px;
    overflow-y: scroll;
  }
  #components-affix-demo-target .background {
    padding-top: 60px;
    height: 300px;
    background-image: url('https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg');
  }
</style>
`

export {
  basicCode,
  onChangeCode,
  targetCode
}
