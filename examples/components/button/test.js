const buttonType = `
<template>
  <div>
    <ik-button type="primary">Primary</ik-button>
    <ik-button>Default</ik-button>
    <ik-button type="dashed">Dashed</ik-button>
    <ik-button type="danger">Danger</ik-button>
    <ik-config-provider :autoInsertSpaceInButton="false">
      <ik-button type="primary">按钮</ik-button>
    </ik-config-provider>
    <ik-button type="primary">按钮</ik-button>
    <ik-button type="link">Link</ik-button>
  </div>
</template>
`
const buttonBasicHtml = `
<template>
  <div id="components-button-demo-button-group">
    <h4>Basic</h4>
    <ik-button-group>
      <ik-button>Cancel</ik-button>
      <ik-button type="primary">OK</ik-button>
    </ik-button-group>
    <ik-button-group>
      <ik-button disabled>L</ik-button>
      <ik-button disabled>M</ik-button>
      <ik-button disabled>R</ik-button>
    </ik-button-group>
    <ik-button-group>
      <ik-button type="primary">L</ik-button>
      <ik-button>M</ik-button>
      <ik-button>M</ik-button>
      <ik-button type="dashed">R</ik-button>
    </ik-button-group>

    <h4>With Icon</h4>
    <ik-button-group>
      <ik-button type="primary"> <ik-icon type="left" />Go back </ik-button>
      <ik-button type="primary"> Go forward<ik-icon type="right" /> </ik-button>
    </ik-button-group>
    <ik-button-group>
      <ik-button type="primary" icon="cloud" />
      <ik-button type="primary" icon="cloud-download" />
    </ik-button-group>
  </div>
</template>
<style>
  #components-button-demo-button-group h4 {
    margin: 16px 0;
    font-size: 14px;
    line-height: 1;
    font-weight: normal;
  }
  #components-button-demo-button-group h4:first-child {
    margin-top: 0;
  }
  #components-button-demo-button-group .ant-btn-group {
    margin-right: 8px;
  }
</style>
`
const buttonDisabled = `
<template>
  <div>
    <ik-button type="primary">Primary</ik-button>
    <ik-button type="primary" disabled>Primary(disabled)</ik-button>
    <br />
    <ik-button>Default</ik-button>
    <ik-button disabled>Default(disabled)</ik-button>
    <br />
    <ik-button type="dashed">Dashed</ik-button>
    <ik-button type="dashed" disabled>Dashed(disabled)</ik-button>
    <br />
    <ik-button type="link">Link</ik-button>
    <ik-button type="link" disabled>Link(disabled)</ik-button>
    <div :style="{ padding: '8px 8px 0 8px', background: 'rgb(190, 200, 200)' }">
      <ik-button ghost>Ghost</ik-button>
      <ik-button ghost disabled>Ghost(disabled)</ik-button>
    </div>
  </div>
</template>
`
const buttonGhost = `
<template>
  <div :style="{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }">
    <ik-button type="primary" ghost>Primary</ik-button>
    <ik-button ghost>Default</ik-button>
    <ik-button type="dashed" ghost>Dashed</ik-button>
    <ik-button type="danger" ghost>Danger</ik-button>
    <ik-button type="link" ghost>Link</ik-button>
  </div>
</template>
`
const buttonIcon = `
<template>
  <div>
    <ik-button type="primary" shape="circle" icon="search"></ik-button>
    <ik-button type="primary" icon="search">Search</ik-button>
    <ik-button shape="circle" icon="search" />
    <ik-button icon="search">Search</ik-button>
    <ik-button shape="circle" icon="search" />
    <ik-button icon="search">Search</ik-button>
    <ik-button type="dashed" shape="circle" icon="search" />
    <ik-button type="dashed" icon="search">Search</ik-button>
    <ik-button type="dashed"><my-icon type="icon--convertible" style="fontSize: 16px;"/>Search</ik-button>
    <ik-button :noBorder="true" icon="login">医学影像</ik-button>
    <ik-button :noBorder="true"><ik-icon type="iconlink" style="fontSize: 16px;" isIk/>使用ikang图标</ik-button>
  </div>
</template>
`
const buttonLoadingHtml = `
<template>
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
</template>
<script>
  export default {
    data() {
      return {
        loading: false,
        iconLoading: false,
      };
    },
    methods: {
      enterLoading() {
        this.loading = true;
      },
      enterIconLoading() {
        this.iconLoading = { delay: 1000 };
      },
    },
  };
</script>
`
const buttonAny = `
<template>
  <div>
    <ik-button type="primary">Primary</ik-button>
    <ik-button>secondary</ik-button>
    <ik-dropdown>
      <ik-menu slot="overlay" @click="handleMenuClick">
        <ik-menu-item key="1">1st item</ik-menu-item>
        <ik-menu-item key="2">2nd item</ik-menu-item>
        <ik-menu-item key="3">3rd item</ik-menu-item>
      </ik-menu>
      <ik-button> Actions <ik-icon type="down" /> </ik-button>
    </ik-dropdown>
  </div>
</template>
<script>
  export default {
    methods: {
      handleMenuClick(e) {
      },
    },
  };
</script>
`
const buttonSize = `
<template>
  <div>
    <ik-radio-group :value="size" @change="handleSizeChange">
      <ik-radio-button value="large">Large</ik-radio-button>
      <ik-radio-button value="default">Default</ik-radio-button>
      <ik-radio-button value="small">Small</ik-radio-button>
    </ik-radio-group>
    <br /><br />
    <ik-button type="primary" :size="size">Primary</ik-button>
    <ik-button :size="size">Normal</ik-button>
    <ik-button type="dashed" :size="size">Dashed</ik-button>
    <ik-button type="danger" :size="size">Danger</ik-button>
    <ik-button type="link" :size="size">Link</ik-button>
    <br />
    <ik-button type="primary" shape="circle" icon="download" :size="size" />
    <ik-button type="primary" shape="round" icon="download" :size="size">Download</ik-button>
    <ik-button type="primary" icon="download" :size="size">Download</ik-button>
    <br />
    <ik-button-group :size="size">
      <ik-button type="primary"> <ik-icon type="left" />Backward </ik-button>
      <ik-button type="primary"> Forward<ik-icon type="right" /> </ik-button>
    </ik-button-group>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        size: 'large',
      };
    },
    methods: {
      handleSizeChange(e) {
        this.size = e.target.value;
      },
    },
  };
</script>
`
const buttonBlock = `
<template>
  <div>
    <ik-button type="primary" block>Primary</ik-button>
    <ik-button block>Default</ik-button>
    <ik-button type="dashed" block>Dashed</ik-button>
    <ik-button type="danger" block>Danger</ik-button>
    <ik-button type="link" block>Link</ik-button>
  </div>
</template>
`

const buttonNoBorder = `
<template>
  <div>
    <ik-button type="primary">Primary</ik-button>
    <ik-button type="primary" :noBorder="true">Primary(noBorder)</ik-button>
    <ik-button>Default</ik-button>
    <ik-button :noBorder="true">Default(noBorder)</ik-button>
    <ik-button type="dashed">Dashed</ik-button>
    <ik-button type="dashed" :noBorder="true">Dashed(noBorder)</ik-button>
    <ik-button :noHover="true">noHover</ik-button>
    <ik-button :noBorder="true" :noHover="true" icon="play-circle">noHover & noBorder</ik-button>
  </div>
</template>
`

const buttonAlign = `
<template>
  <div>
    <ik-button type="primary" icon="edit" align="vertical">Primary(align)</ik-button>
    <ik-button icon="diff" align="vertical">Default(align)</ik-button>
    <ik-button type="dashed" icon="diff" align="vertical">Dashed(align)</ik-button>
    <ik-button type="link" icon="diff" align="vertical">医学影像</ik-button>
    <ik-button :noBorder="true" icon="diff" align="vertical">医学影像</ik-button>
    <ik-button :noBorder="true" :noHover="true" icon="diff" align="vertical">医学影像</ik-button>
  </div>
</template>
`

const buttonIkang = `
<template>
  <div>
    <ik-button icon="iconedit" :isIk="true">ikang专属图标-编辑</ik-button>
    <ik-button icon="iconrequired" :isIk="true">ikang专属图标-雪花</ik-button>
  </div>
</template>
`

export {
  buttonType,
  buttonBasicHtml,
  buttonDisabled,
  buttonGhost,
  buttonIcon,
  buttonLoadingHtml,
  buttonAny,
  buttonSize,
  buttonBlock,
  buttonNoBorder,
  buttonAlign,
  buttonIkang
}
