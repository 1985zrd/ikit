<template>
  <codeBox :title="title"
    :description="description"
    :code="position">
    <div id="components-ik-tooltip-demo-placement">
      <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
        <ik-tooltip placement="topLeft">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <ik-button>TL</ik-button>
        </ik-tooltip>
        <ik-tooltip placement="top">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <ik-button>Top</ik-button>
        </ik-tooltip>
        <ik-tooltip placement="topRight">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <ik-button>TR</ik-button>
        </ik-tooltip>
      </div>
      <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
        <ik-tooltip placement="leftTop">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <ik-button>LT</ik-button>
        </ik-tooltip>
        <ik-tooltip placement="left">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <ik-button>Left</ik-button>
        </ik-tooltip>
        <ik-tooltip placement="leftBottom">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <ik-button>LB</ik-button>
        </ik-tooltip>
      </div>
      <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24 }px`}">
        <ik-tooltip placement="rightTop">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <ik-button>RT</ik-button>
        </ik-tooltip>
        <ik-tooltip placement="right">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <ik-button>Right</ik-button>
        </ik-tooltip>
        <ik-tooltip placement="rightBottom">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <ik-button>RB</ik-button>
        </ik-tooltip>
      </div>
      <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
        <ik-tooltip placement="bottomLeft">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <ik-button>BL</ik-button>
        </ik-tooltip>
        <ik-tooltip placement="bottom">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <ik-button>Bottom</ik-button>
        </ik-tooltip>
        <ik-tooltip placement="bottomRight">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <ik-button>BR</ik-button>
        </ik-tooltip>
      </div>
    </div>
  </codeBox>
</template>
<script>
import { position } from '../code.js'
export default {
  name: 'positionTooltip',
  data () {
    return {
      title: '位置',
      description: '位置有 12 个方向。',
      position,
      buttonWidth: 70
    }
  }
}
</script>
<style scoped>
  #components-ik-tooltip-demo-placement .ant-btn {
    width: 70px;
    text-align: center;
    padding: 0;
    margin-right: 8px;
    margin-bottom: 8px;
  }
</style>
