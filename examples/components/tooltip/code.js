const base = `
<template>
  <ik-tooltip>
    <template slot="title">
      prompt text
    </template>
    Tooltip will show when mouse enter.
  </ik-tooltip>
</template>
`
const position = `
<template>
  <div id="components-ik-tooltip-demo-placement">
    <div :style="{ marginLeft: 70px, whiteSpace: 'nowrap' }">
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
    <div :style="{ width: 70px, float: 'left' }">
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
    <div :style="{ width: 70px, marginLeft: 304px}">
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
    <div :style="{ marginLeft: 70px, clear: 'both', whiteSpace: 'nowrap' }">
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
</template>
<script>
  export default {
    data() {
      return {
        buttonWidth: 70,
      };
    },
  };
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
`
const direction = `
<template>
  <div>
    <ik-tooltip placement="topLeft" title="Prompt Text">
      <ik-button>Align edge / 边缘对齐</ik-button>
    </ik-tooltip>
    <ik-tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
      <ik-button>Arrow points to center / 箭头指向中心</ik-button>
    </ik-tooltip>
  </div>
</template>
`
const autoPosition = `
<template>
  <div :style="wrapStyles">
    <ik-tooltip placement="left" title="Prompt Text" :getPopupContainer="getPopupContainer">
      <ik-button>Adjust automatically / 自动调整</ik-button>
    </ik-tooltip>
    <br />
    <ik-tooltip
      style="marginTop: 10px"
      placement="left"
      title="Prompt Text"
      :getPopupContainer="getPopupContainer"
      :autoAdjustOverflow="false"
    >
      <ik-button>Ingore / 不处理</ik-button>
    </ik-tooltip>
  </div>
</template>
<script>
  const wrapStyles = {
    overflow: 'hidden',
    position: 'relative',
    padding: '24px',
    border: '1px solid #e9e9e9',
  };
  export default {
    data() {
      return {
        wrapStyles,
      };
    },
    methods: {
      getPopupContainer(trigger) {
        return trigger.parentElement;
      },
    },
  };
</script>
`
export {
  base,
  position,
  direction,
  autoPosition
}
