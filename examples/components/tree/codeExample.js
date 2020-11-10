export const controlledTree = `
<template>
  <ik-tree
    checkable
    @expand="onExpand"
    :expandedKeys="expandedKeys"
    :autoExpandParent="autoExpandParent"
    v-model="checkedKeys"
    @select="onSelect"
    :selectedKeys="selectedKeys"
    :treeData="treeData"
  />
</template>
<script>
  const treeData = [
    {
      title: '0-0',
      key: '0-0',
      children: [
        {
          title: '0-0-0',
          key: '0-0-0',
          children: [
            { title: '0-0-0-0', key: '0-0-0-0' },
            { title: '0-0-0-1', key: '0-0-0-1' },
            { title: '0-0-0-2', key: '0-0-0-2' },
          ],
        },
        {
          title: '0-0-1',
          key: '0-0-1',
          children: [
            { title: '0-0-1-0', key: '0-0-1-0' },
            { title: '0-0-1-1', key: '0-0-1-1' },
            { title: '0-0-1-2', key: '0-0-1-2' },
          ],
        },
        {
          title: '0-0-2',
          key: '0-0-2',
        },
      ],
    },
    {
      title: '0-1',
      key: '0-1',
      children: [
        { title: '0-1-0-0', key: '0-1-0-0' },
        { title: '0-1-0-1', key: '0-1-0-1' },
        { title: '0-1-0-2', key: '0-1-0-2' },
      ],
    },
    {
      title: '0-2',
      key: '0-2',
    },
  ];

  export default {
    data() {
      return {
        expandedKeys: ['0-0-0', '0-0-1'],
        autoExpandParent: true,
        checkedKeys: ['0-0-0'],
        selectedKeys: [],
        treeData,
      };
    },
    watch: {
      checkedKeys(val) {
        console.log('onCheck', val);
      },
    },
    methods: {
      onExpand(expandedKeys) {
        console.log('onExpand', expandedKeys);
        // if not set autoExpandParent to false, if children expanded, parent can not collapse.
        // or, you can remove all expanded children keys.
        this.expandedKeys = expandedKeys;
        this.autoExpandParent = false;
      },
      onCheck(checkedKeys) {
        console.log('onCheck', checkedKeys);
        this.checkedKeys = checkedKeys;
      },
      onSelect(selectedKeys, info) {
        console.log('onSelect', info);
        this.selectedKeys = selectedKeys;
      },
    },
  };
</script>
`

export const basic = `
<template>
  <ik-tree
    checkable
    @expand="onExpand"
    :expandedKeys="expandedKeys"
    :autoExpandParent="autoExpandParent"
    v-model="checkedKeys"
    @select="onSelect"
    :selectedKeys="selectedKeys"
    :treeData="treeData"
  />
</template>
<script>
  const treeData = [
    {
      title: '0-0',
      key: '0-0',
      children: [
        {
          title: '0-0-0',
          key: '0-0-0',
          children: [
            { title: '0-0-0-0', key: '0-0-0-0' },
            { title: '0-0-0-1', key: '0-0-0-1' },
            { title: '0-0-0-2', key: '0-0-0-2' },
          ],
        },
        {
          title: '0-0-1',
          key: '0-0-1',
          children: [
            { title: '0-0-1-0', key: '0-0-1-0' },
            { title: '0-0-1-1', key: '0-0-1-1' },
            { title: '0-0-1-2', key: '0-0-1-2' },
          ],
        },
        {
          title: '0-0-2',
          key: '0-0-2',
        },
      ],
    },
    {
      title: '0-1',
      key: '0-1',
      children: [
        { title: '0-1-0-0', key: '0-1-0-0' },
        { title: '0-1-0-1', key: '0-1-0-1' },
        { title: '0-1-0-2', key: '0-1-0-2' },
      ],
    },
    {
      title: '0-2',
      key: '0-2',
    },
  ];

  export default {
    data() {
      return {
        expandedKeys: ['0-0-0', '0-0-1'],
        autoExpandParent: true,
        checkedKeys: ['0-0-0'],
        selectedKeys: [],
        treeData,
      };
    },
    watch: {
      checkedKeys(val) {
        console.log('onCheck', val);
      },
    },
    methods: {
      onExpand(expandedKeys) {
        console.log('onExpand', expandedKeys);
        // if not set autoExpandParent to false, if children expanded, parent can not collapse.
        // or, you can remove all expanded children keys.
        this.expandedKeys = expandedKeys;
        this.autoExpandParent = false;
      },
      onCheck(checkedKeys) {
        console.log('onCheck', checkedKeys);
        this.checkedKeys = checkedKeys;
      },
      onSelect(selectedKeys, info) {
        console.log('onSelect', info);
        this.selectedKeys = selectedKeys;
      },
    },
  };
</script>
`

export const customTreeNode = `
<template>
  <ik-tree
    checkable
    :treeData="treeData"
    :defaultExpandedKeys="['0-0-0', '0-0-1']"
    :defaultSelectedKeys="['0-0-0', '0-0-1']"
    :defaultCheckedKeys="['0-0-0', '0-0-1']"
    @select="this.onSelect"
    @check="this.onCheck"
    :replaceFields="replaceFields"/>
</template>
<script>
  const treeData = [
    {
      name: 'parent 1',
      key: '0-0',
      child: [
        {
          name: '张晨成',
          key: '0-0-0',
          disabled: true,
          child: [
            { name: 'leaf', key: '0-0-0-0', disableCheckbox: true },
            { name: 'leaf', key: '0-0-0-1' },
          ],
        },
        {
          name: 'parent 1-1',
          key: '0-0-1',
          child: [{ key: '0-0-1-0', name:'zcvc' }],
        },
      ],
    },
  ];

  export default {
    data() {
      return {
        treeData,
        replaceFields:{
        children:'child',
        title:'name'
        }
      };
    },
    methods: {
      onSelect(selectedKeys, info) {
        console.log('selected', selectedKeys, info);
      },
      onCheck(checkedKeys, info) {
        console.log('onCheck', checkedKeys, info);
      },
    },
  };
</script>
`

export const customIcon = `
<template>
  <ik-tree :treeData="treeData" showIcon defaultExpandAll :defaultSelectedKeys="['0-0-0']">
    <ik-icon type="down" slot="switcherIcon" />
    <ik-icon slot="smile" type="smile-o" />
    <ik-icon slot="meh" type="smile-o" />
    <template slot="custom" slot-scope="{selected}">
      <ik-icon :type="selected ? 'frown':'frown-o'" />
    </template>
  </ik-tree>
</template>
<script>
  const treeData = [
    {
      title: 'parent 1',
      key: '0-0',
      slots: {
        icon: 'smile',
      },
      children: [
        { title: 'leaf', key: '0-0-0', slots: { icon: 'meh' } },
        { title: 'leaf', key: '0-0-1', scopedSlots: { icon: 'custom' } },
      ],
    },
  ];

  export default {
    data() {
      return {
        treeData,
      };
    },
    methods: {
      onSelect(selectedKeys, info) {
        console.log('selected', selectedKeys, info);
      },
      onCheck(checkedKeys, info) {
        console.log('onCheck', checkedKeys, info);
      },
    },
  };
</script>
`

export const dragTree = `
<template>
  <ik-tree
    class="draggable-tree"
    :defaultExpandedKeys="expandedKeys"
    draggable
    @dragenter="onDragEnter"
    @drop="onDrop"
    :treeData="gData"
  />
</template>

<script>
  const x = 3;
  const y = 2;
  const z = 1;
  const gData = [];

  const generateData = (_level, _preKey, _tns) => {
    const preKey = _preKey || '0';
    const tns = _tns || gData;

    const children = [];
    for (let i = 0; i < x; i++) {
      const key = \`$\{preKey}-$\{i}\`;
      tns.push({ title: key, key });
      if (i < y) {
        children.push(key);
      }
    }
    if (_level < 0) {
      return tns;
    }
    const level = _level - 1;
    children.forEach((key, index) => {
      tns[index].children = [];
      return generateData(level, key, tns[index].children);
    });
  };
  generateData(z);
  export default {
    data() {
      return {
        gData,
        expandedKeys: ['0-0', '0-0-0', '0-0-0-0'],
      };
    },
    methods: {
      onDragEnter(info) {
        console.log(info);
        // expandedKeys 需要受控时设置
        // this.expandedKeys = info.expandedKeys
      },
      onDrop(info) {
        console.log(info);
        const dropKey = info.node.eventKey;
        const dragKey = info.dragNode.eventKey;
        const dropPos = info.node.pos.split('-');
        const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
        const loop = (data, key, callback) => {
          data.forEach((item, index, arr) => {
            if (item.key === key) {
              return callback(item, index, arr);
            }
            if (item.children) {
              return loop(item.children, key, callback);
            }
          });
        };
        const data = [...this.gData];

        // Find dragObject
        let dragObj;
        loop(data, dragKey, (item, index, arr) => {
          arr.splice(index, 1);
          dragObj = item;
        });
        if (!info.dropToGap) {
          // Drop on the content
          loop(data, dropKey, item => {
            item.children = item.children || [];
            // where to insert 示例添加到尾部，可以是随意位置
            item.children.push(dragObj);
          });
        } else if (
          (info.node.children || []).length > 0 && // Has children
          info.node.expanded && // Is expanded
          dropPosition === 1 // On the bottom gap
        ) {
          loop(data, dropKey, item => {
            item.children = item.children || [];
            // where to insert 示例添加到尾部，可以是随意位置
            item.children.unshift(dragObj);
          });
        } else {
          let ar;
          let i;
          loop(data, dropKey, (item, index, arr) => {
            ar = arr;
            i = index;
          });
          if (dropPosition === -1) {
            ar.splice(i, 0, dragObj);
          } else {
            ar.splice(i + 1, 0, dragObj);
          }
        }
        this.gData = data;
      },
    },
  };
</script>
`

export const asyncDataTree = `
<template>
  <ik-tree :loadData="onLoadData" :treeData="treeData" />
</template>

<script>
  export default {
    data() {
      return {
        treeData: [
          { title: 'Expand to load', key: '0' },
          { title: 'Expand to load', key: '1' },
          { title: 'Tree Node', key: '2', isLeaf: true },
        ],
      };
    },
    methods: {
      onLoadData(treeNode) {
        return new Promise(resolve => {
          if (treeNode.dataRef.children) {
            resolve();
            return;
          }
          setTimeout(() => {
            treeNode.dataRef.children = [
              { title: 'Child Node', key: \`$\{treeNode.eventKey}-0\` },
              { title: 'Child Node', key: \`$\{treeNode.eventKey}-1\` },
            ];
            this.treeData = [...this.treeData];
            resolve();
          }, 1000);
        });
      },
    },
  };
</script>
`

export const cableLine = `
<template>
  <ik-tree showLine :defaultExpandedKeys="['0-0-0']" @select="onSelect">
    <ik-tree-node key="0-0">
      <span slot="title" style="color: #1890ff">parent 1</span>
      <ik-tree-node title="parent 1-0" key="0-0-0">
        <ik-tree-node title="leaf" key="0-0-0-0" />
        <ik-tree-node title="leaf" key="0-0-0-1" />
        <ik-tree-node title="leaf" key="0-0-0-2" />
      </ik-tree-node>
      <ik-tree-node title="parent 1-1" key="0-0-1">
        <ik-tree-node title="leaf" key="0-0-1-0" />
      </ik-tree-node>
      <ik-tree-node title="parent 1-2" key="0-0-2">
        <ik-tree-node title="leaf" key="0-0-2-0" />
        <ik-tree-node title="leaf" key="0-0-2-1" />
      </ik-tree-node>
    </ik-tree-node>
  </ik-tree>
</template>

<script>
  export default {
    methods: {
      onSelect(selectedKeys, info) {
        console.log('selected', selectedKeys, info);
      },
    },
  };
</script>
`

export const searchedTree = `
<template>
  <div>
    <ik-input-search style="margin-bottom: 8px" placeholder="Search" @change="onChange" />
    <ik-tree
      @expand="onExpand"
      :expandedKeys="expandedKeys"
      :autoExpandParent="autoExpandParent"
      :treeData="gData"
    >
      <template slot="title" slot-scope="{title}">
        <span v-if="title.indexOf(searchValue) > -1">
          {{title.substr(0, title.indexOf(searchValue))}}
          <span style="color: #f50">{{searchValue}}</span>
          {{title.substr(title.indexOf(searchValue) + searchValue.length)}}
        </span>
        <span v-else>{{title}}</span>
      </template>
    </ik-tree>
  </div>
</template>

<script>
  const x = 3;
  const y = 2;
  const z = 1;
  const gData = [];

  const generateData = (_level, _preKey, _tns) => {
    const preKey = _preKey || '0';
    const tns = _tns || gData;

    const children = [];
    for (let i = 0; i < x; i++) {
      const key = \`$\{preKey}-$\{i}\`;
      tns.push({ title: key, key, scopedSlots: { title: 'title' } });
      if (i < y) {
        children.push(key);
      }
    }
    if (_level < 0) {
      return tns;
    }
    const level = _level - 1;
    children.forEach((key, index) => {
      tns[index].children = [];
      return generateData(level, key, tns[index].children);
    });
  };
  generateData(z);

  const dataList = [];
  const generateList = data => {
    for (let i = 0; i < data.length; i++) {
      const node = data[i];
      const key = node.key;
      dataList.push({ key, title: key });
      if (node.children) {
        generateList(node.children, node.key);
      }
    }
  };
  generateList(gData);

  const getParentKey = (key, tree) => {
    let parentKey;
    for (let i = 0; i < tree.length; i++) {
      const node = tree[i];
      if (node.children) {
        if (node.children.some(item => item.key === key)) {
          parentKey = node.key;
        } else if (getParentKey(key, node.children)) {
          parentKey = getParentKey(key, node.children);
        }
      }
    }
    return parentKey;
  };
  export default {
    data() {
      return {
        expandedKeys: [],
        searchValue: '',
        autoExpandParent: true,
        gData,
      };
    },
    methods: {
      onExpand(expandedKeys) {
        this.expandedKeys = expandedKeys;
        this.autoExpandParent = false;
      },
      onChange(e) {
        const value = e.target.value;
        const expandedKeys = dataList
          .map(item => {
            if (item.key.indexOf(value) > -1) {
              return getParentKey(item.key, gData);
            }
            return null;
          })
          .filter((item, i, self) => item && self.indexOf(item) === i);
        Object.assign(this, {
          expandedKeys,
          searchValue: value,
          autoExpandParent: true,
        });
      },
    },
  };
</script>
`

export const directoryTree = `
<template>
  <ik-directory-tree multiple defaultExpandAll @select="onSelect" @expand="onExpand">
    <ik-tree-node title="parent 0" key="0-0">
      <ik-tree-node title="leaf 0-0" key="0-0-0" isLeaf />
      <ik-tree-node title="leaf 0-1" key="0-0-1" isLeaf />
    </ik-tree-node>
    <ik-tree-node title="parent 1" key="0-1">
      <ik-tree-node title="leaf 1-0" key="0-1-0" isLeaf />
      <ik-tree-node title="leaf 1-1" key="0-1-1" isLeaf />
    </ik-tree-node>
  </ik-directory-tree>
</template>
<script>
  export default {
    methods: {
      onSelect(keys) {
        console.log('Trigger Select', keys);
      },
      onExpand() {
        console.log('Trigger Expand');
      },
    },
  };
</script>
`
