export const basic = `
<template>
  <ik-tree-select
    showSearch
    style="width: 300px"
    :value="value"
    :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
    placeholder="Please select"
    allowClear
    treeDefaultExpandAll
    @change="onChange"
  >
    <ik-tree-select-node value="parent 1" title="parent 1" key="0-1">
      <ik-tree-select-node value="parent 1-0" title="parent 1-0" key="0-1-1">
        <ik-tree-select-node :selectable="false" value="leaf1" title="my leaf" key="random" />
        <ik-tree-select-node value="leaf2" title="your leaf" key="random1" />
      </ik-tree-select-node>
      <ik-tree-select-node value="parent 1-1" title="parent 1-1" key="random2">
        <ik-tree-select-node value="sss" key="random3">
          <b style="color: #08c" slot="title">sss</b>
        </ik-tree-select-node>
      </ik-tree-select-node>
    </ik-tree-select-node>
  </ik-tree-select>
</template>

<script>
  export default {
    data() {
      return {
        treeExpandedKeys: [],
        value: undefined,
      };
    },
    methods: {
      onChange(value) {
        console.log(value);
        this.value = value;
      },
    },
  };
</script>
`

export const canCheck = `
<template>
  <ik-tree-select
    style="width: 300px"
    :treeData="treeData"
    :value="value"
    @change="onChange"
    treeCheckable
    :showCheckedStrategy="SHOW_PARENT"
    searchPlaceholder="Please select"
  />
</template>

<script>
  import { TreeSelect } from 'ikit';
  const SHOW_PARENT = TreeSelect.SHOW_PARENT;

  const treeData = [
    {
      title: 'Node1',
      value: '0-0',
      key: '0-0',
      children: [
        {
          title: 'Child Node1',
          value: '0-0-0',
          key: '0-0-0',
        },
      ],
    },
    {
      title: 'Node2',
      value: '0-1',
      key: '0-1',
      children: [
        {
          title: 'Child Node3',
          value: '0-1-0',
          key: '0-1-0',
          disabled: true,
        },
        {
          title: 'Child Node4',
          value: '0-1-1',
          key: '0-1-1',
        },
        {
          title: 'Child Node5',
          value: '0-1-2',
          key: '0-1-2',
        },
      ],
    },
  ];
  export default {
    data() {
      return {
        value: ['0-0-0'],
        treeData,
        SHOW_PARENT,
      };
    },
    methods: {
      onChange(value) {
        console.log('onChange ', value);
        this.value = value;
      },
    },
  };
</script>
`

export const multiSelect = `
<template>
  <ik-tree-select
    showSearch
    style="width: 300px"
    :value="value"
    :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
    placeholder="Please select"
    allowClear
    multiple
    treeDefaultExpandAll
    @change="onChange"
    @search="onSearch"
    @select="onSelect"
  >
    <ik-tree-select-node value="parent 1" title="parent 1" key="0-1">
      <ik-tree-select-node value="parent 1-0" title="parent 1-0" key="0-1-1">
        <ik-tree-select-node value="leaf1" title="my leaf" key="random" />
        <ik-tree-select-node value="leaf2" title="your leaf" key="random1" />
      </ik-tree-select-node>
      <ik-tree-select-node value="parent 1-1" title="parent 1-1" key="random2">
        <ik-tree-select-node value="sss" key="random3">
          <b style="color: #08c" slot="title">sss</b>
        </ik-tree-select-node>
      </ik-tree-select-node>
    </ik-tree-select-node>
  </ik-tree-select>
</template>

<script>
  export default {
    data() {
      return {
        value: undefined,
      };
    },
    methods: {
      onChange(value) {
        console.log(value);
        this.value = value;
      },
      onSearch() {
        console.log(...arguments);
      },
      onSelect() {
        console.log(...arguments);
      },
    },
  };
</script>
`

export const dataGenerated = `
<template>
  <ik-tree-select
    style="width: 300px"
    :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
    :treeData="treeData"
    placeholder="Please select"
    treeDefaultExpandAll
    v-model="value"
  >
    <span style="color: #08c" slot="title" slot-scope="{key, value}" v-if="key='0-0-1'">
      Child Node1 {{value}}
    </span>
  </ik-tree-select>
</template>

<script>
  const treeData = [
    {
      title: 'Node1',
      value: '0-0',
      key: '0-0',
      children: [
        {
          value: '0-0-1',
          key: '0-0-1',
          scopedSlots: {
            // custom title
            title: 'title',
          },
        },
        {
          title: 'Child Node2',
          value: '0-0-2',
          key: '0-0-2',
        },
      ],
    },
    {
      title: 'Node2',
      value: '0-1',
      key: '0-1',
    },
  ];
  export default {
    data() {
      return {
        value: undefined,
        treeData,
      };
    },
    watch: {
      value(value) {
        console.log(value);
      },
    },
  };
</script>
`

export const suffixIcon = `
<template>
  <ik-tree-select
    showSearch
    style="width: 300px"
    :value="value"
    :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
    placeholder="Please select"
    allowClear
    treeDefaultExpandAll
    @change="onChange"
  >
    <ik-icon slot="suffixIcon" type="smile" />
    <ik-tree-select-node value="parent 1" title="parent 1" key="0-1">
      <ik-tree-select-node value="parent 1-0" title="parent 1-0" key="0-1-1">
        <ik-tree-select-node value="leaf1" title="my leaf" key="random" />
        <ik-tree-select-node value="leaf2" title="your leaf" key="random1" />
      </ik-tree-select-node>
      <ik-tree-select-node value="parent 1-1" title="parent 1-1" key="random2">
        <ik-tree-select-node value="sss" key="random3">
          <b style="color: #08c" slot="title">sss</b>
        </ik-tree-select-node>
      </ik-tree-select-node>
    </ik-tree-select-node>
  </ik-tree-select>
</template>

<script>
  export default {
    data() {
      return {
        value: undefined,
      };
    },
    methods: {
      onChange(value) {
        console.log(value);
        this.value = value;
      },
    },
  };
</script>
`
