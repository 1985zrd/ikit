<template>
  <codeBox title="按钮尺寸"
           :description="description"
           :code="buttonSize">
    <div>
        <ik-radio-group :value="size"
                       @change="handleSizeChange">
          <ik-radio-button value="large">Large</ik-radio-button>
          <ik-radio-button value="default">Default</ik-radio-button>
          <ik-radio-button value="small">Small</ik-radio-button>
        </ik-radio-group>
        <br /><br />
        <ik-button type="primary"
                  :size="size">Primary</ik-button>
        <ik-button :size="size">Normal</ik-button>
        <ik-button type="dashed"
                  :size="size">Dashed</ik-button>
        <ik-button type="danger"
                  :size="size">Danger</ik-button>
        <ik-button type="link"
                  :size="size">Link</ik-button>
        <br />
        <ik-button type="primary"
                  shape="circle"
                  icon="download"
                  :size="size" />
        <ik-button type="primary"
                  shape="round"
                  icon="download"
                  :size="size">Download</ik-button>
        <ik-button type="primary"
                  icon="download"
                  :size="size">Download</ik-button>
        <br />
        <ik-button-group :size="size">
          <ik-button type="primary">
            <ik-icon type="left" />Backward </ik-button>
          <ik-button type="primary"> Forward
            <ik-icon type="right" />
          </ik-button>
        </ik-button-group>
      </div>
  </codeBox>
</template>
<script>
import { buttonSize } from '../test'
export default {
  data () {
    return {
      size: 'large',
      buttonSize,
      description: `<p>按钮有大、中、小三种尺寸。</p>
                    <p>通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。</p>`
    }
  },
  methods: {
    handleSizeChange (e) {
      this.size = e.target.value
    }
  }
}
</script>
