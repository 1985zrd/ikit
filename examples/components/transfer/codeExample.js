export const basic = `
<template>
  <div>
    <ik-transfer
      :dataSource="mockData"
      :titles="['Source', 'Target']"
      :targetKeys="targetKeys"
      :selectedKeys="selectedKeys"
      @change="handleChange"
      @selectChange="handleSelectChange"
      @scroll="handleScroll"
      :render="item=>item.title"
      :disabled="disabled"
    />
    <ik-switch
      unCheckedChildren="enabled"
      checkedChildren="disabled"
      :checked="disabled"
      @change="handleDisable"
      style="margin-top: 16px"
    />
  </div>
</template>
<script>
  export default {
    data() {
      const mockData = [];
      for (let i = 0; i < 20; i++) {
        mockData.push({
          key: i.toString(),
          title: \`content$\{i + 1}\`,
          description: \`description of content$\{i + 1}\`,
          disabled: i % 3 < 1,
        });
      }

      const oriTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);
      return {
        mockData,
        targetKeys: oriTargetKeys,
        selectedKeys: ['1', '4'],
        disabled: false,
      };
    },
    methods: {
      handleChange(nextTargetKeys, direction, moveKeys) {
        this.targetKeys = nextTargetKeys;

        console.log('targetKeys: ', nextTargetKeys);
        console.log('direction: ', direction);
        console.log('moveKeys: ', moveKeys);
      },
      handleSelectChange(sourceSelectedKeys, targetSelectedKeys) {
        this.selectedKeys = [...sourceSelectedKeys, ...targetSelectedKeys];

        console.log('sourceSelectedKeys: ', sourceSelectedKeys);
        console.log('targetSelectedKeys: ', targetSelectedKeys);
      },
      handleScroll(direction, e) {
        console.log('direction:', direction);
        console.log('target:', e.target);
      },
      handleDisable(disabled) {
        this.disabled = disabled;
      },
    },
  };
</script>
`

export const withSearch = `
<template>
  <ik-transfer
    :dataSource="mockData"
    showSearch
    :filterOption="filterOption"
    :targetKeys="targetKeys"
    @change="handleChange"
    @search="handleSearch"
    :render="item=>item.title"
  >
  </ik-transfer>
</template>
<script>
  export default {
    data() {
      return {
        mockData: [],
        targetKeys: [],
      };
    },
    mounted() {
      this.getMock();
    },
    methods: {
      getMock() {
        const targetKeys = [];
        const mockData = [];
        for (let i = 0; i < 20; i++) {
          const data = {
            key: i.toString(),
            title: \`content$\{i + 1}\`,
            description: \`description of content$\{i + 1}\`,
            chosen: Math.random() * 2 > 1,
          };
          if (data.chosen) {
            targetKeys.push(data.key);
          }
          mockData.push(data);
        }
        this.mockData = mockData;
        this.targetKeys = targetKeys;
      },
      filterOption(inputValue, option) {
        return option.description.indexOf(inputValue) > -1;
      },
      handleChange(targetKeys, direction, moveKeys) {
        console.log(targetKeys, direction, moveKeys);
        this.targetKeys = targetKeys;
      },
      handleSearch(dir, value) {
        console.log('search:', dir, value);
      },
    },
  };
</script>
`

export const advanced = `
<template>
  <ik-transfer
    :dataSource="mockData"
    showSearch
    :listStyle="{
      width: '250px',
      height: '300px',
    }"
    :operations="['to right', 'to left']"
    :targetKeys="targetKeys"
    @change="handleChange"
    :render="item=>\`$\{item.title}-$\{item.description}\`"
  >
    <ik-button
      size="small"
      style="float:right;margin: 5px"
      @click="getMock"
      slot="footer"
    >
      reload
    </ik-button>
    <span slot="notFoundContent">
      没数据
    </span>
  </ik-transfer>
</template>
<script>
  export default {
    data() {
      return {
        mockData: [],
        targetKeys: [],
      };
    },
    mounted() {
      this.getMock();
    },
    methods: {
      getMock() {
        const targetKeys = [];
        const mockData = [];
        for (let i = 0; i < 20; i++) {
          const data = {
            key: i.toString(),
            title: \`content$\{i + 1}\`,
            description: \`description of content$\{i + 1}\`,
            chosen: Math.random() * 2 > 1,
          };
          if (data.chosen) {
            targetKeys.push(data.key);
          }
          mockData.push(data);
        }
        this.mockData = mockData;
        this.targetKeys = targetKeys;
      },
      handleChange(targetKeys, direction, moveKeys) {
        console.log(targetKeys, direction, moveKeys);
        this.targetKeys = targetKeys;
      },
    },
  };
</script>
`

export const customRow = `
<template>
  <ik-transfer
    :dataSource="mockData"
    :listStyle="{
      width: '300px',
      height: '300px',
    }"
    :targetKeys="targetKeys"
    @change="handleChange"
    :render="renderItem"
  >
  </ik-transfer>
</template>
<script>
  export default {
    data() {
      return {
        mockData: [],
        targetKeys: [],
      };
    },
    mounted() {
      this.getMock();
    },
    methods: {
      getMock() {
        const targetKeys = [];
        const mockData = [];
        for (let i = 0; i < 20; i++) {
          const data = {
            key: i.toString(),
            title: \`content$\{i + 1}\`,
            description: \`description of content$\{i + 1}\`,
            chosen: Math.random() * 2 > 1,
          };
          if (data.chosen) {
            targetKeys.push(data.key);
          }
          mockData.push(data);
        }
        this.mockData = mockData;
        this.targetKeys = targetKeys;
      },
      renderItem(item) {
        const customLabel = (
          <span class="custom-item">
            {item.title} - {item.description}
          </span>
        );

        return {
          label: customLabel, // for displayed item
          value: item.title, // for title and filter matching
        };
      },
      handleChange(targetKeys, direction, moveKeys) {
        console.log(targetKeys, direction, moveKeys);
        this.targetKeys = targetKeys;
      },
    },
  };
</script>
`
