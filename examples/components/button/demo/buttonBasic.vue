<template>
  <codeBox title="按钮组合"
           :description="description"
           :code="buttonBasicHtml">
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
  </codeBox>
</template>
<script>
import { buttonBasicHtml } from '../test.js'
export default {
  name: 'buttonBasic',
  data () {
    return {
      buttonBasicHtml,
      description: `<p>可以将多个 Button 放入 Button.Group 的容器中。</p>
    <p>通过设置 size 为 large small 分别把按钮组合设为大、小尺寸。若不设置 size，则尺寸为中。</p>`
    }
  }
}
</script>
<style scope>
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
  margin-right: 20px;
}
#components-button-demo-button-group .ant-btn-group .ant-btn{
  margin-right: 0;
}
</style>
