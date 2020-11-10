<template>
  <div style="padding: 20px;">
    <div>
      <h2>Button and Icon</h2>
      <ik-radio-group :value="size"
                      @change="handleSizeChange">
        <ik-radio-button value="large">Large</ik-radio-button>
        <ik-radio-button value="default">Default</ik-radio-button>
        <ik-radio-button value="small">Small</ik-radio-button>
      </ik-radio-group>
      <br />
      <br />
      <ik-button type="primary"
                 :size="size"
                 block>Primary block</ik-button>
      <ik-button :size="size">Normal</ik-button>
      <ik-button type="dashed"
                 :size="size">Dashed</ik-button>
      <ik-button type="danger"
                 :size="size">Danger</ik-button>
      <ik-button type="link"
                 :size="size">Link</ik-button>
      <br />
      <h3>ghost</h3>
      <ik-button type="primary"
                 shape="circle"
                 :loading="true"
                 :size="size" />
      <ik-button type="primary"
                 shape="round"
                 icon="download"
                 :size="size"
                 ghost>Download</ik-button>
      <h3 style="margin-top: 20px;">align(vertical垂直|horizontal默认水平)</h3>
      <ik-button
                 align='vertical'
                 icon="download"
                 :size="size">医学影像</ik-button>
      <h3 style="margin-top: 20px;">noBorder(vertical垂直|horizontal默认水平)</h3>
      <ik-button :noBorder="true"
                 align='vertical'
                 icon="download"
                 :size="size">医学影像</ik-button>
      <h3 style="margin-top: 20px;">noHover()</h3>
      <ik-button :noHover="true"
                 align='vertical'
                 icon="download"
                  @click="changeTheme('#1c41ff')"
                 :size="size">医学影像</ik-button>
      <ik-button :noHover="true"
                  :noBorder="true"
                 align='vertical'
                 icon="download"
                 @click="changeTheme('#1cff37')"
                 class="green"
                 :size="size">医学影像</ik-button>
      <br />
      <h3>ButtonGroup</h3>
      <ik-button-group :size="size">
        <ik-button>
          <ik-icon type="close" />
          Backward
        </ik-button>
        <ik-button>
          Forward
          <ik-icon type="right" />
        </ik-button>
      </ik-button-group>
    </div>
    <!-- <PrismCode :code="str" type="html"></PrismCode> -->
  </div>
</template>
<script>
import { updateTheme } from '../changeTheme/settingConfig'
export default {
  name: 'ikButtonTest',
  data () {
    return {
      size: 'default',
      str: `
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
    }
  },
  methods: {
    handleSizeChange (e) {
      this.size = e.target.value
    },
    changeTheme (themeColor) {
      // updateTheme(themeColor)
    }
  },
  mounted () {
    // updateTheme('#ff0000')
  }
}
</script>

<style lang="scss">
.green {
  color: #FF6800!important;
}
</style>
