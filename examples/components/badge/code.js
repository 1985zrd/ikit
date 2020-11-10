const base = `
<template>
  <div>
    <ik-badge count="5">
      <a href="#" class="head-example"></a>
    </ik-badge>
    <ik-badge count="0" showZero>
      <a href="#" class="head-example"></a>
    </ik-badge>
    <ik-badge>
      <ik-icon slot="count" type="clock-circle" style="color: #f5222d" />
      <a href="#" class="head-example"></a>
    </ik-badge>
    <ik-badge gray count="5">
      <a href="#" class="head-example"></a>
    </ik-badge>
  </div>
</template>
`
const single = `
<template>
  <div>
    <ik-badge count="25" />
    <ik-badge
      count="4"
      :numberStyle="{backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset'}"
    />
    <ik-badge count="109" :numberStyle="{backgroundColor: '#52c41a'} " />
  </div>
</template>
`
const overflow = `
<template>
  <div>
    <ik-badge :count="99">
      <a href="#" class="head-example"></a>
    </ik-badge>
    <ik-badge :count="100">
      <a href="#" class="head-example"></a>
    </ik-badge>
    <ik-badge :count="99" :overflowCount="10">
      <a href="#" class="head-example"></a>
    </ik-badge>
    <ik-badge :count="1000" :overflowCount="999">
      <a href="#" class="head-example"></a>
    </ik-badge>
  </div>
</template>
`
const redDot = `
<template>
  <div id="components-badge-demo-dot">
    <ik-badge dot>
      <ik-icon type="notification" />
    </ik-badge>
    <ik-badge :count="0" dot>
      <ik-icon type="notification" />
    </ik-badge>
    <ik-badge dot>
      <a href="#">Link something</a>
    </ik-badge>
  </div>
</template>
<style scoped>
  #components-badge-demo-dot .anticon-notification {
    width: 16px;
    height: 16px;
    line-height: 16px;
    font-size: 16px;
  }
</style>
`
const state = `
<template>
  <div>
    <ik-badge status="success" />
    <ik-badge status="error" />
    <ik-badge status="default" />
    <ik-badge status="processing" />
    <ik-badge status="warning" />
    <br />
    <ik-badge status="success" text="Success" />
    <br />
    <ik-badge status="error" text="Error" />
    <br />
    <ik-badge status="default" text="Default" />
    <br />
    <ik-badge status="processing" text="Processing" />
    <br />
    <ik-badge status="warning" text="warning" />
  </div>
</template>
`
const dynamic = `
<template>
  <div>
    <div>
      <ik-badge :count="count">
        <a href="#" class="head-example" />
      </ik-badge>
      <ik-button-group>
        <ik-button @click="decline">
          <ik-icon type="minus" />
        </ik-button>
        <ik-button @click="increase">
          <ik-icon type="plus" />
        </ik-button>
      </ik-button-group>
    </div>
    <div style="margin-top: 10px">
      <ik-badge :dot="show">
        <a href="#" class="head-example" />
      </ik-badge>
      <ik-switch v-model="show" />
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        count: 5,
        show: true,
      };
    },
    methods: {
      decline() {
        let count = this.count - 1;
        if (count < 0) {
          count = 0;
        }
        this.count = count;
      },
      increase() {
        this.count++;
      },
    },
  };
</script>
`
const custom = `
<template>
  <ik-badge :count="5" title="Custom hover text">
    <a href="#" class="head-example" />
  </ik-badge>
</template>
<style scoped>
  .head-example {
    width: 42px;
    height: 42px;
    border-radius: 4px;
    background: #eee;
    display: inline-block;
  }
</style>
`

export {
  base,
  single,
  overflow,
  redDot,
  state,
  dynamic,
  custom
}
