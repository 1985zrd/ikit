const basicTabsCode = `
<template>
  <div>
    <ik-tabs defaultActiveKey="1" @change="callback">
      <ik-tab-pane tab="Tab 1" key="1">Content of Tab Pane 1</ik-tab-pane>
      <ik-tab-pane tab="Tab 2" key="2" forceRender>Content of Tab Pane 2</ik-tab-pane>
      <ik-tab-pane tab="Tab 3" key="3">Content of Tab Pane 3</ik-tab-pane>
    </ik-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
    methods: {
      callback(key) {
        console.log(key);
      },
    },
  };
</script>
`
const disabledTabsCode = `
<template>
  <ik-tabs defaultActiveKey="1">
    <ik-tab-pane tab="Tab 1" key="1">Tab 1</ik-tab-pane>
    <ik-tab-pane tab="Tab 2" disabled key="2">Tab 2</ik-tab-pane>
    <ik-tab-pane tab="Tab 3" key="3">Tab 3</ik-tab-pane>
  </ik-tabs>
</template>
`

const iconTabsCode = `
<template>
  <ik-tabs defaultActiveKey="2">
    <ik-tab-pane key="1">
      <span slot="tab">
      <ik-icon type="icontime" isIk/>
        Tab 1
      </span>
      Tab 1
    </ik-tab-pane>
    <ik-tab-pane key="2">
      <span slot="tab">
      <ik-icon type="icontime" isIk/>
        Tab 2
      </span>
      Tab 2
    </ik-tab-pane>
  </ik-tabs>
</template>
`

const slideTabsCode = `
<template>
  <div style="width: 500px">
    <ik-radio-group v-model="mode" :style="{ marginBottom: '8px' }">
      <ik-radio-button value="top">Horizontal</ik-radio-button>
      <ik-radio-button value="left">Vertical</ik-radio-button>
    </ik-radio-group>
    <ik-tabs
      defaultActiveKey="1"
      :tabPosition="mode"
      :style="{ height: '200px'}"
      @prevClick="callback"
      @nextClick="callback"
    >
      <ik-tab-pane tab="Tab 1" key="1">Content of tab 1</ik-tab-pane>
      <ik-tab-pane tab="Tab 2" key="2">Content of tab 2</ik-tab-pane>
      <ik-tab-pane tab="Tab 3" key="3">Content of tab 3</ik-tab-pane>
      <ik-tab-pane tab="Tab 4" key="4">Content of tab 4</ik-tab-pane>
      <ik-tab-pane tab="Tab 5" key="5">Content of tab 5</ik-tab-pane>
      <ik-tab-pane tab="Tab 6" key="6">Content of tab 6</ik-tab-pane>
      <ik-tab-pane tab="Tab 7" key="7">Content of tab 7</ik-tab-pane>
      <ik-tab-pane tab="Tab 8" key="8">Content of tab 8</ik-tab-pane>
      <ik-tab-pane tab="Tab 9" key="9">Content of tab 9</ik-tab-pane>
      <ik-tab-pane tab="Tab 10" key="10">Content of tab 10</ik-tab-pane>
      <ik-tab-pane tab="Tab 11" key="11">Content of tab 11</ik-tab-pane>
    </ik-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        mode: 'top',
      };
    },
    methods: {
      callback(val) {
        console.log(val);
      },
    },
  };
</script>
`

const additionalTabsCode = `
<template>
  <ik-tabs>
    <ik-tab-pane tab="Tab 1" key="1">Content of tab 1</ik-tab-pane>
    <ik-tab-pane tab="Tab 2" key="2">Content of tab 2</ik-tab-pane>
    <ik-tab-pane tab="Tab 3" key="3">Content of tab 3</ik-tab-pane>
    <ik-button slot="tabBarExtraContent">Extra Action</ik-button>
  </ik-tabs>
</template>
`

const sizeTabsCode = `
<template>
  <div>
    <ik-radio-group v-model="size" style="margin-bottom: 16px">
      <ik-radio-button value="small">Small</ik-radio-button>
      <ik-radio-button value="default">Default</ik-radio-button>
      <ik-radio-button value="large">Large</ik-radio-button>
    </ik-radio-group>
    <ik-tabs defaultActiveKey="2" :size="size">
      <ik-tab-pane tab="Tab 1" key="1">Content of tab 1</ik-tab-pane>
      <ik-tab-pane tab="Tab 2" key="2">Content of tab 2</ik-tab-pane>
      <ik-tab-pane tab="Tab 3" key="3">Content of tab 3</ik-tab-pane>
    </ik-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        size: 'small',
      };
    },
  };
</script>
`

const positionTabsCode = `
<template>
  <div style="width: 500px">
    <ik-radio-group v-model="tabPosition" style="margin:8px">
      <ik-radio-button value="top">top</ik-radio-button>
      <ik-radio-button value="bottom">bottom</ik-radio-button>
      <ik-radio-button value="left">left</ik-radio-button>
      <ik-radio-button value="right">right</ik-radio-button>
    </ik-radio-group>
    <ik-tabs defaultActiveKey="1" :tabPosition="tabPosition">
      <ik-tab-pane tab="Tab 1" key="1">Content of Tab 1</ik-tab-pane>
      <ik-tab-pane tab="Tab 2" key="2">Content of Tab 2</ik-tab-pane>
      <ik-tab-pane tab="Tab 3" key="3">Content of Tab 3</ik-tab-pane>
    </ik-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tabPosition: 'top',
      };
    },
    methods: {
      callback(val) {
        console.log(val);
      },
    },
  };
</script>
`

const cardTabsCode = `
<template>
  <ik-tabs @change="callback" type="card">
    <ik-tab-pane tab="Tab 1" key="1">Content of Tab Pane 1</ik-tab-pane>
    <ik-tab-pane tab="Tab 2" key="2">Content of Tab Pane 2</ik-tab-pane>
    <ik-tab-pane tab="Tab 3" key="3">Content of Tab Pane 3</ik-tab-pane>
  </ik-tabs>
</template>
<script>
  export default {
    data() {
      return {};
    },
    methods: {
      callback(key) {
        console.log(key);
      },
    },
  };
</script>
`

const closableTabsCode = `
<template>
  <ik-tabs v-model="activeKey" type="editable-card" @edit="onEdit">
    <ik-tab-pane v-for="pane in panes" :tab="pane.title" :key="pane.key" :closable="pane.closable">
      {{pane.content}}
    </ik-tab-pane>
  </ik-tabs>
</template>
<script>
  export default {
    data() {
      const panes = [
        { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
        { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
        { title: 'Tab 3', content: 'Content of Tab 3', key: '3', closable: false },
      ];
      return {
        activeKey: panes[0].key,
        panes,
        newTabIndex: 0,
      };
    },
    methods: {
      callback(key) {
        console.log(key);
      },
      onEdit(targetKey, action) {
        this[action](targetKey);
      },
      add() {
        const panes = this.panes;
        const activeKey = \`newTab\${this.newTabIndex++}\`;
        panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
        this.panes = panes;
        this.activeKey = activeKey;
      },
      remove(targetKey) {
        let activeKey = this.activeKey;
        let lastIndex;
        this.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
          if (lastIndex >= 0) {
            activeKey = panes[lastIndex].key;
          } else {
            activeKey = panes[0].key;
          }
        }
        this.panes = panes;
        this.activeKey = activeKey;
      },
    },
  };
</script>
`

const cardBoxTabsCode = `
<template>
  <div class="card-container">
    <ik-tabs type="card">
      <ik-tab-pane tab="Tab Title 1" key="1">
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
      </ik-tab-pane>
      <ik-tab-pane tab="Tab Title 2" key="2">
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
      </ik-tab-pane>
      <ik-tab-pane tab="Tab Title 3" key="3">
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
      </ik-tab-pane>
    </ik-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
    methods: {
      callback(key) {
        console.log(key);
      },
    },
  };
</script>
<style>
  .card-container {
    background: #f5f5f5;
    overflow: hidden;
    padding: 24px;
  }
  .card-container > .ant-tabs-card > .ant-tabs-content {
    height: 120px;
    margin-top: -16px;
  }

  .card-container > .ant-tabs-card > .ant-tabs-content > .ant-tabs-tabpane {
    background: #fff;
    padding: 16px;
  }

  .card-container > .ant-tabs-card > .ant-tabs-bar {
    border-color: #fff;
  }

  .card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {
    border-color: transparent;
    background: transparent;
  }

  .card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {
    border-color: #fff;
    background: #fff;
  }
</style>
`

const customAddTabsCode = `
<template>
  <div>
    <div :style="{ marginBottom: '16px' }">
      <ik-button @click="add">ADD</ik-button>
    </div>
    <ik-tabs hideAdd v-model="activeKey" type="editable-card" @edit="onEdit">
      <ik-tab-pane v-for="pane in panes" :tab="pane.title" :key="pane.key" :closable="pane.closable">
        {{pane.content}}
      </ik-tab-pane>
    </ik-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      const panes = [
        { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
        { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
      ];
      return {
        activeKey: panes[0].key,
        panes,
        newTabIndex: 0,
      };
    },
    methods: {
      callback(key) {
        console.log(key);
      },
      onEdit(targetKey, action) {
        this[action](targetKey);
      },
      add() {
        const panes = this.panes;
        const activeKey = \`newTab\${this.newTabIndex++}\`;
        panes.push({
          title: \`New Tab \${activeKey}\`,
          content: \`Content of new Tab \${activeKey}\`,
          key: activeKey,
        });
        this.panes = panes;
        this.activeKey = activeKey;
      },
      remove(targetKey) {
        let activeKey = this.activeKey;
        let lastIndex;
        this.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
          if (lastIndex >= 0) {
            activeKey = panes[lastIndex].key;
          } else {
            activeKey = panes[0].key;
          }
        }
        this.panes = panes;
        this.activeKey = activeKey;
      },
    },
  };
</script>
`

export {
  basicTabsCode, disabledTabsCode, iconTabsCode, slideTabsCode, additionalTabsCode, sizeTabsCode,
  positionTabsCode, cardTabsCode, closableTabsCode, cardBoxTabsCode, customAddTabsCode
}
