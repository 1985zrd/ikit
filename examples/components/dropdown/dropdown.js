const basicDropdown = `
<template>
  <ik-dropdown>
    <a style="color:#FF6800" href="###"> Hover me <ik-icon type="down" /> </a>
    <ik-menu slot="overlay">
      <ik-menu-item>
        <a href="javascript:;">1st menu item</a>
      </ik-menu-item>
      <ik-menu-item>
        <a href="javascript:;">2nd menu item</a>
      </ik-menu-item>
      <ik-menu-item>
        <a href="javascript:;">3rd menu item</a>
      </ik-menu-item>
    </ik-menu>
  </ik-dropdown>
</template>
`
const rightClickDropdown = `
<template>
  <ik-dropdown :trigger="['contextmenu']">
    <span style="user-select: none">Right Click on Me</span>
    <ik-menu slot="overlay">
      <ik-menu-item key="1">1st menu item</ik-menu-item>
      <ik-menu-item key="2">2nd menu item</ik-menu-item>
      <ik-menu-item key="3">3rd menu item</ik-menu-item>
    </ik-menu>
  </ik-dropdown>
</template>
`
const buttonDropdown = `
<template>
  <div>
    <ik-dropdown-button @click="handleButtonClick">
      Dropdown
      <ik-menu slot="overlay" @click="handleMenuClick">
        <ik-menu-item key="1"><ik-icon type="user" />1st menu item</ik-menu-item>
        <ik-menu-item key="2"><ik-icon type="user" />2nd menu item</ik-menu-item>
        <ik-menu-item key="3"><ik-icon type="user" />3rd item</ik-menu-item>
      </ik-menu>
    </ik-dropdown-button>
    <ik-dropdown-button @click="handleButtonClick" disabled style="margin-left: 8px">
      Dropdown
      <ik-menu slot="overlay" @click="handleMenuClick">
        <ik-menu-item key="1"><ik-icon type="user" />1st menu item</ik-menu-item>
        <ik-menu-item key="2"><ik-icon type="user" />2nd menu item</ik-menu-item>
        <ik-menu-item key="3"><ik-icon type="user" />3rd item</ik-menu-item>
      </ik-menu>
    </ik-dropdown-button>
    <ik-dropdown>
      <ik-menu slot="overlay" @click="handleMenuClick">
        <ik-menu-item key="1"><ik-icon type="user" />1st menu item</ik-menu-item>
        <ik-menu-item key="2"><ik-icon type="user" />2nd menu item</ik-menu-item>
        <ik-menu-item key="3"><ik-icon type="user" />3rd item</ik-menu-item>
      </ik-menu>
      <ik-button style="margin-left: 8px"> Button <ik-icon type="down" /> </ik-button>
    </ik-dropdown>
  </div>
</template>

<script>
  export default {
    methods: {
      handleButtonClick(e) {
        console.log('click left button', e)
      },
      handleMenuClick(e) {
        console.log('click', e)
      }
    }
  }
</script>
`
const eventDropdown = `
<template>
  <ik-dropdown>
    <a style="color:#FF6800" href="###"> Hover me, Click menu item <ik-icon type="down" /> </a>
    <ik-menu slot="overlay" @click="onClick">
      <ik-menu-item key="1">1st menu item</ik-menu-item>
      <ik-menu-item key="2">2nd menu item</ik-menu-item>
      <ik-menu-item key="3">3rd menu item</ik-menu-item>
    </ik-menu>
  </ik-dropdown>
</template>

<script>
  export default {
    methods: {
      onClick({ key }) {
        console.log('Click on item' + key)
      }
    }
  }
</script>
`
const dividerDropdown = `
<template>
  <ik-dropdown>
    <a style="color:#FF6800" href="###"> Hover me <ik-icon type="down" /> </a>
    <ik-menu slot="overlay">
      <ik-menu-item key="0">
        <a target="_blank" rel="noopener noreferrer" href="###">1st menu item</a>
      </ik-menu-item>
      <ik-menu-item key="1">
        <a target="_blank" rel="noopener noreferrer" href="###">2nd menu item</a>
      </ik-menu-item>
      <ik-menu-divider />
      <ik-menu-item key="3" disabled>3rd menu item（disabled）</ik-menu-item>
    </ik-menu>
  </ik-dropdown>
</template>
`
const linkDropdown = `
<template>
  <ik-dropdown v-model="visible">
    <a style="color:#FF6800" href="###"> Hover me <ik-icon type="down" /> </a>
    <ik-menu slot="overlay" @click="handleMenuClick">
      <ik-menu-item key="1">Clicking me will not close the menu.</ik-menu-item>
      <ik-menu-item key="2">Clicking me will not close the menu also.</ik-menu-item>
      <ik-menu-item key="3">Clicking me will close the menu</ik-menu-item>
    </ik-menu>
  </ik-dropdown>
</template>

<script>
  export default {
    data() {
      return {
        visible: false
      }
    },
    methods: {
      handleMenuClick(e) {
        if (e.key === '3') {
          this.visible = false
        }
      }
    }
  }
</script>
`
const placeDropdown = `
<template>
  <div id="components-dropdown-demo-placement">
    <template v-for="(placement, index) in placements">
      <ik-dropdown :placement="placement"
                    :key="index">
        <ik-button>{{placement}}</ik-button>
        <ik-menu slot="overlay">
          <ik-menu-item>
            <a target="_blank"
                rel="noopener noreferrer"
                href="###">1st menu item</a>
          </ik-menu-item>
          <ik-menu-item>
            <a target="_blank"
                rel="noopener noreferrer"
                href="###">2nd menu item</a>
          </ik-menu-item>
          <ik-menu-item>
            <a target="_blank"
                rel="noopener noreferrer"
                href="###">3rd menu item</a>
          </ik-menu-item>
        </ik-menu>
      </ik-dropdown>
    </template>
  </div>
</template>
<script>

export default {
  data () {
    return {
      placements: [
        'bottomLeft',
        'bottomCenter',
        'bottomRight',
        'topLeft',
        'topCenter',
        'topRight',
      ]
    }
  }
}
</script>
<style>
#components-dropdown-demo-placement .ant-btn {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
`
const subDropdown = `
<template>
  <ik-dropdown>
    <a style="color:#FF6800" href="###"> Cascading menu <ik-icon type="down" /> </a>
    <ik-menu slot="overlay">
      <ik-menu-item>1st menu item</ik-menu-item>
      <ik-menu-item>2nd menu item</ik-menu-item>
      <ik-sub-menu title="sub menu" key="test">
        <ik-menu-item>3rd menu item</ik-menu-item>
        <ik-menu-item>4th menu item</ik-menu-item>
      </ik-sub-menu>
      <ik-sub-menu title="disabled sub menu" disabled>
        <ik-menu-item>5d menu item</ik-menu-item>
        <ik-menu-item>6th menu item</ik-menu-item>
      </ik-sub-menu>
    </ik-menu>
  </ik-dropdown>
</template>
`
const clickDropdown = `
<template>
  <ik-dropdown :trigger="['click']">
    <a style="color:#FF6800" href="###"> Click me <ik-icon type="down" /> </a>
    <ik-menu slot="overlay">
      <ik-menu-item key="0">
        <a href="###">1st menu item</a>
      </ik-menu-item>
      <ik-menu-item key="1">
        <a href="###">2nd menu item</a>
      </ik-menu-item>
      <ik-menu-divider />
      <ik-menu-item key="3">3rd menu item</ik-menu-item>
    </ik-menu>
  </ik-dropdown>
</template>
`

export {
  basicDropdown,
  rightClickDropdown,
  buttonDropdown,
  clickDropdown,
  eventDropdown,
  dividerDropdown,
  linkDropdown,
  subDropdown,
  placeDropdown
}
