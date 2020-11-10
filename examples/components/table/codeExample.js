const loadDataCode = `
<template>
  <ik-table
    :columns="columns"
    :rowKey="record => record.login.uuid"
    :dataSource="data"
    :pagination="pagination"
    :loading="loading"
    @change="handleTableChange"
  >
    <template slot="name" slot-scope="name">
      {{name.first}} {{name.last}}
    </template>
  </ik-table>
</template>
<script>
import reqwest from 'reqwest';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    width: '20%',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [{ text: 'Male', value: 'male' }, { text: 'Female', value: 'female' }],
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

export default {
  mounted() {
    this.fetch();
  },
  data() {
    return {
      data: [],
      pagination: {},
      loading: false,
      columns,
    };
  },
  methods: {
    handleTableChange(pagination, filters, sorter) {
      console.log(pagination);
      const pager = { ...this.pagination };
      pager.current = pagination.current;
      this.pagination = pager;
      this.fetch({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters,
      });
    },
    fetch(params = {}) {
      console.log('params:', params);
      this.loading = true;
      reqwest({
        url: 'https://randomuser.me/api',
        method: 'get',
        data: {
          results: 10,
          ...params,
        },
        type: 'json',
      }).then(data => {
        const pagination = { ...this.pagination };
        // Read total count from server
        // pagination.total = data.totalCount;
        pagination.total = 200;
        this.loading = false;
        this.data = data.results;
        this.pagination = pagination;
      });
    },
  },
};
</script>
`
const basicUsageCode = `
<template>
  <ik-table :columns="columns" :dataSource="data">
    <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>
    <span slot="customTitle"><ik-icon type="smile-o" /> Name</span>
    <span slot="tags" slot-scope="tags">
      <ik-tag
        v-for="tag in tags"
        :color="tag==='loser' ? 'orange' : (tag.length > 5 ? 'blue' : 'green')"
        :key="tag"
      >
        {{tag.toUpperCase()}}
      </ik-tag>
    </span>
    <span slot="action" slot-scope="text, record">
      <a href="javascript:;">Invite 一 {{record.name}}</a>
      <ik-divider type="vertical" />
      <a href="javascript:;">Delete</a>
      <ik-divider type="vertical" />
      <a href="javascript:;" class="ant-dropdown-link"> More actions <ik-icon type="down" /> </a>
    </span>
  </ik-table>
</template>
<script>
const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' },
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default {
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>
`

const basicUsageStripeCode = `
<template>
  <ik-table :columns="columns" :dataSource="data" :stripe='true' :largeFont='true'>
    <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>
    <span slot="customTitle"><ik-icon type="smile-o" /> Name</span>
    <span slot="tags" slot-scope="tags">
      <ik-tag
        v-for="tag in tags"
        :color="tag==='loser' ? 'orange' : (tag.length > 5 ? 'blue' : 'green')"
        :key="tag"
      >
        {{tag.toUpperCase()}}
      </ik-tag>
    </span>
    <span slot="action" slot-scope="text, record">
      <a href="javascript:;">Invite 一 {{record.name}}</a>
      <ik-divider type="vertical" />
      <a href="javascript:;">Delete</a>
      <ik-divider type="vertical" />
      <a href="javascript:;" class="ant-dropdown-link"> More actions <ik-icon type="down" /> </a>
    </span>
  </ik-table>
</template>
<script>
const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' },
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default {
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>
`

const borderCode = `
<template>
  <ik-table :columns="columns" :dataSource="data" bordered>
    <template slot="name" slot-scope="text">
      <a href="javascript:;">{{text}}</a>
    </template>
    <template slot="title" slot-scope="currentPageData">
      Header
    </template>
    <template slot="footer" slot-scope="currentPageData">
      Footer
    </template>
  </ik-table>
</template>
<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Cash Assets',
    className: 'column-money',
    dataIndex: 'money',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park',
  },
];

export default {
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>
<style>
th.column-money,
td.column-money {
  text-align: right !important;
}
</style>
`

const formMergingCode = `
<template>
  <ik-table :columns="columns" :dataSource="data" bordered>
    <template slot="name" slot-scope="text">
      <a href="javascript:;">{{text}}</a>
    </template>
  </ik-table>
</template>
<script>
// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    attrs: {},
  };
  if (index === 4) {
    obj.attrs.colSpan = 0;
  }
  return obj;
};

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '5',
    name: 'Jake White',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park',
  },
];

export default {
  data() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        customRender: (text, row, index) => {
          if (index < 4) {
            return <a href="javascript:;">{text}</a>;
          }
          return {
            children: <a href="javascript:;">{text}</a>,
            attrs: {
              colSpan: 5,
            },
          };
        },
      },
      {
        title: 'Age',
        dataIndex: 'age',
        customRender: renderContent,
      },
      {
        title: 'Home phone',
        colSpan: 2,
        dataIndex: 'tel',
        customRender: (value, row, index) => {
          const obj = {
            children: value,
            attrs: {},
          };
          if (index === 2) {
            obj.attrs.rowSpan = 2;
          }
          // These two are merged into above cell
          if (index === 3) {
            obj.attrs.rowSpan = 0;
          }
          if (index === 4) {
            obj.attrs.colSpan = 0;
          }
          return obj;
        },
      },
      {
        title: 'Phone',
        colSpan: 0,
        dataIndex: 'phone',
        customRender: renderContent,
      },
      {
        title: 'Address',
        dataIndex: 'address',
        customRender: renderContent,
      },
    ];
    return {
      data,
      columns,
    };
  },
};
</script>
`
const noDataIconCode = `
<template>
  <ik-config-provider>
    <template v-slot:renderEmpty>
      <div class="table-empty">
        <img src="../images/noData.svg" alt="">
        <p>暂无数据</p>
      </div>
    </template>
    <div class="config-provider">
      <h3>Table</h3>
      <ik-table style="margin-top: 8px" :columns="columns" :dataSource="[]" />
    </div>
  </ik-config-provider>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
  .table-empty{
    text-align: center;
    padding:20px 0;
    p{
      margin-top: 20px;
    }
  }
</style>
`
const customFilterMenuCode = `
<template>
  <ik-table :dataSource="data" :columns="columns">
    <div
      slot="filterDropdown"
      slot-scope="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }"
      style="padding: 8px"
    >
      <ik-input
        v-ant-ref="c => searchInput = c"
        :placeholder="\`Search \${column.dataIndex}\`"
        :value="selectedKeys[0]"
        @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
        @pressEnter="() => handleSearch(selectedKeys, confirm)"
        style="width: 188px; margin-bottom: 8px; display: block;"
      />
      <ik-button
        type="primary"
        @click="() => handleSearch(selectedKeys, confirm)"
        icon="search"
        size="small"
        style="width: 90px; margin-right: 8px"
        >Search</ik-button
      >
      <ik-button @click="() => handleReset(clearFilters)" size="small" style="width: 90px"
        >Reset</ik-button
      >
    </div>
    <ik-icon
      slot="filterIcon"
      slot-scope="filtered"
      type="search"
      :style="{ color: filtered ? '#108ee9' : undefined }"
    />
    <template slot="customRender" slot-scope="text">
      <span v-if="searchText">
        <template
          v-for="(fragment, i) in text.toString().split(new RegExp(\`(?<=\${searchText})|(?=\${searchText})\`, 'i'))"
        >
          <mark
            v-if="fragment.toLowerCase() === searchText.toLowerCase()"
            :key="i"
            class="highlight"
            >{{fragment}}</mark
          >
          <template v-else
            >{{fragment}}</template
          >
        </template>
      </span>
      <template v-else
        >{{text}}</template
      >
    </template>
  </ik-table>
</template>

<script>
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

export default {
  data() {
    return {
      data,
      searchText: '',
      searchInput: null,
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          scopedSlots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender',
          },
          onFilter: (value, record) => record.name.toString().toLowerCase().includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              }, 0);
            }
          },
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
          scopedSlots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender',
          },
          onFilter: (value, record) => record.age.toString().toLowerCase().includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          },
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
          scopedSlots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender',
          },
          onFilter: (value, record) => record.address.toString().toLowerCase().includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          },
        },
      ],
    };
  },
  methods: {
    handleSearch(selectedKeys, confirm) {
      confirm();
      this.searchText = selectedKeys[0];
    },

    handleReset(clearFilters) {
      clearFilters();
      this.searchText = '';
    },
  },
};
</script>
<style scoped>
.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}
</style>
`

const editableCellCode = `
<template>
  <div>
    <ik-button class="editable-add-btn" @click="handleAdd">Add</ik-button>
    <ik-table bordered :dataSource="dataSource" :columns="columns">
      <template slot="name" slot-scope="text, record">
        <editable-cell :text="text" @change="onCellChange(record.key, 'name', $event)" />
      </template>
      <template slot="operation" slot-scope="text, record">
        <a-popconfirm
          v-if="dataSource.length"
          title="Sure to delete?"
          @confirm="() => onDelete(record.key)"
        >
          <a href="javascript:;">Delete</a>
        </a-popconfirm>
      </template>
    </ik-table>
  </div>
</template>
<script>
import EditableCell from './EditableCell';
/*
 * EditableCell Code https://github.com/vueComponent/ant-design-vue/blob/master/components/table/demo/EditableCell.vue
 */
export default {
  components: {
    EditableCell,
  },
  data() {
    return {
      dataSource: [
        {
          key: '0',
          name: 'Edward King 0',
          age: '32',
          address: 'London, Park Lane no. 0',
        },
        {
          key: '1',
          name: 'Edward King 1',
          age: '32',
          address: 'London, Park Lane no. 1',
        },
      ],
      count: 2,
      columns: [
        {
          title: 'name',
          dataIndex: 'name',
          width: '30%',
          scopedSlots: { customRender: 'name' },
        },
        {
          title: 'age',
          dataIndex: 'age',
        },
        {
          title: 'address',
          dataIndex: 'address',
        },
        {
          title: 'operation',
          dataIndex: 'operation',
          scopedSlots: { customRender: 'operation' },
        },
      ],
    };
  },
  methods: {
    onCellChange(key, dataIndex, value) {
      const dataSource = [...this.dataSource];
      const target = dataSource.find(item => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.dataSource = dataSource;
      }
    },
    onDelete(key) {
      const dataSource = [...this.dataSource];
      this.dataSource = dataSource.filter(item => item.key !== key);
    },
    handleAdd() {
      const { count, dataSource } = this;
      const newData = {
        key: count,
        name: \`Edward King \${count}\`,
        age: 32,
        address: \`London, Park Lane no. \${count}\`,
      };
      this.dataSource = [...dataSource, newData];
      this.count = count + 1;
    },
  },
};
</script>
<style>
.editable-cell {
  position: relative;
}

.editable-cell-input-wrapper,
.editable-cell-text-wrapper {
  padding-right: 24px;
}

.editable-cell-text-wrapper {
  padding: 5px 24px 5px 5px;
}

.editable-cell-icon,
.editable-cell-icon-check {
  position: absolute;
  right: 0;
  width: 20px;
  cursor: pointer;
}

.editable-cell-icon {
  line-height: 18px;
  display: none;
}

.editable-cell-icon-check {
  line-height: 28px;
}

.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}

.editable-cell-icon:hover,
.editable-cell-icon-check:hover {
  color: #108ee9;
}

.editable-add-btn {
  margin-bottom: 8px;
}
</style>
`

const editableRowCode = `
<template>
  <ik-table :columns="columns" :dataSource="data" bordered>
    <template
      v-for="col in ['name', 'age', 'address']"
      :slot="col"
      slot-scope="text, record, index"
    >
      <div :key="col">
        <ik-input
          v-if="record.editable"
          style="margin: -5px 0"
          :value="text"
          @change="e => handleChange(e.target.value, record.key, col)"
        />
        <template v-else
          >{{text}}</template
        >
      </div>
    </template>
    <template slot="operation" slot-scope="text, record, index">
      <div class="editable-row-operations">
        <span v-if="record.editable">
          <a @click="() => save(record.key)">Save</a>
          <a-popconfirm title="Sure to cancel?" @confirm="() => cancel(record.key)">
            <a>Cancel</a>
          </a-popconfirm>
        </span>
        <span v-else>
          <a @click="() => edit(record.key)">Edit</a>
        </span>
      </div>
    </template>
  </ik-table>
</template>
<script>
const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    width: '25%',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'age',
    dataIndex: 'age',
    width: '15%',
    scopedSlots: { customRender: 'age' },
  },
  {
    title: 'address',
    dataIndex: 'address',
    width: '40%',
    scopedSlots: { customRender: 'address' },
  },
  {
    title: 'operation',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' },
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: \`Edrward \${i}\`,
    age: 32,
    address: \`London Park no. \${i}\`,
  });
}
export default {
  data() {
    this.cacheData = data.map(item => ({ ...item }));
    return {
      data,
      columns,
    };
  },
  methods: {
    handleChange(value, key, column) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        target[column] = value;
        this.data = newData;
      }
    },
    edit(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        target.editable = true;
        this.data = newData;
      }
    },
    save(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        delete target.editable;
        this.data = newData;
        this.cacheData = newData.map(item => ({ ...item }));
      }
    },
    cancel(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        Object.assign(target, this.cacheData.filter(item => key === item.key)[0]);
        delete target.editable;
        this.data = newData;
      }
    },
  },
};
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>
`

const treeDataDisplayCode = `
<template>
  <ik-table :columns="columns" :dataSource="data" :rowSelection="rowSelection" />
</template>
<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: '12%',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: '30%',
    key: 'address',
  },
];

const data = [
  {
    key: 1,
    name: 'John Brown sr.',
    age: 60,
    address: 'New York No. 1 Lake Park',
    children: [
      {
        key: 11,
        name: 'John Brown',
        age: 42,
        address: 'New York No. 2 Lake Park',
      },
      {
        key: 12,
        name: 'John Brown jr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
        children: [
          {
            key: 121,
            name: 'Jimmy Brown',
            age: 16,
            address: 'New York No. 3 Lake Park',
          },
        ],
      },
      {
        key: 13,
        name: 'Jim Green sr.',
        age: 72,
        address: 'London No. 1 Lake Park',
        children: [
          {
            key: 131,
            name: 'Jim Green',
            age: 42,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 1311,
                name: 'Jim Green jr.',
                age: 25,
                address: 'London No. 3 Lake Park',
              },
              {
                key: 1312,
                name: 'Jimmy Green sr.',
                age: 18,
                address: 'London No. 4 Lake Park',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(\`selectedRowKeys: \${selectedRowKeys}\`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};

export default {
  data() {
    return {
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
`

const deployableCode = `
<template>
  <ik-table :columns="columns" :dataSource="data">
    <a slot="action" slot-scope="text" href="javascript:;">Delete</a>
    <p slot="expandedRowRender" slot-scope="record" style="margin: 0">{{record.description}}</p>
  </ik-table>
</template>
<script>
const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Address', dataIndex: 'address', key: 'address' },
  { title: 'Action', dataIndex: '', key: 'x', scopedSlots: { customRender: 'action' } },
];

const data = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
  },
];

export default {
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>
`

const fixedhacCode = `
<template>
  <ik-table :columns="columns" :dataSource="data" :scroll="{ x: 1500, y: 300 }">
    <a slot="action" slot-scope="text" href="javascript:;">action</a>
  </ik-table>
</template>
<script>
const columns = [
  { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
  { title: 'Column 1', dataIndex: 'address', key: '1', width: 150 },
  { title: 'Column 2', dataIndex: 'address', key: '2', width: 150 },
  { title: 'Column 3', dataIndex: 'address', key: '3', width: 150 },
  { title: 'Column 4', dataIndex: 'address', key: '4', width: 150 },
  { title: 'Column 5', dataIndex: 'address', key: '5', width: 150 },
  { title: 'Column 6', dataIndex: 'address', key: '6', width: 150 },
  { title: 'Column 7', dataIndex: 'address', key: '7', width: 150 },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    scopedSlots: { customRender: 'action' },
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: \`Edrward \${i}\`,
    age: 32,
    address: \`London Park no. \${i}\`,
  });
}

export default {
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>
`

const fixcolumnCode = `
<template>
  <ik-table :columns="columns" :dataSource="data" :scroll="{ x: 1300 }">
    <a slot="action" slot-scope="text" href="javascript:;">action</a>
  </ik-table>
</template>
<script>
const columns = [
  { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
  { title: 'Column 1', dataIndex: 'address', key: '1' },
  { title: 'Column 2', dataIndex: 'address', key: '2' },
  { title: 'Column 3', dataIndex: 'address', key: '3' },
  { title: 'Column 4', dataIndex: 'address', key: '4' },
  { title: 'Column 5', dataIndex: 'address', key: '5' },
  { title: 'Column 6', dataIndex: 'address', key: '6' },
  { title: 'Column 7', dataIndex: 'address', key: '7' },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    scopedSlots: { customRender: 'action' },
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 40,
    address: 'London Park',
  },
];

export default {
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>
`

const fixedHeadCode = `
<template>
  <ik-table
    :columns="columns"
    :dataSource="data"
    :pagination="{ pageSize: 50 }"
    :scroll="{ y: 240 }"
  />
</template>
<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: \`Edward King \${i}\`,
    age: 32,
    address: \`London, Park Lane no. \${i}\`,
  });
}

export default {
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>
`

const headerGroupingCode = `
<template>
  <ik-table
    :columns="columns"
    :dataSource="data"
    bordered
    size="middle"
    :scroll="{ x: '130%', y: 240 }"
  />
</template>
<script>
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: i + 1,
    street: 'Lake Park',
    building: 'C',
    number: 2035,
    companyAddress: 'Lake Street 42',
    companyName: 'SoftLake Co',
    gender: 'M',
  });
}

export default {
  data() {
    const filterIcon = (
      <ik-icon type="iconshaixuan" style="font-size:14px;" isIk />
    )
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: 100,
        fixed: 'left',
        filterIcon,
        filters: [
          {
            text: 'Joe',
            value: 'Joe',
          },
          {
            text: 'John',
            value: 'John',
          },
        ],
        onFilter: (value, record) => record.name.indexOf(value) === 0,
      },
      {
        title: 'Other',
        children: [
          {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            width: 200,
            sorter: (a, b) => a.age - b.age,
          },
          {
            title: 'Address',
            children: [
              {
                title: 'Street',
                dataIndex: 'street',
                key: 'street',
                width: 200,
              },
              {
                title: 'Block',
                children: [
                  {
                    title: 'Building',
                    dataIndex: 'building',
                    key: 'building',
                    width: 100,
                  },
                  {
                    title: 'Door No.',
                    dataIndex: 'number',
                    key: 'number',
                    width: 100,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: 'Company',
        children: [
          {
            title: 'Company Address',
            dataIndex: 'companyAddress',
            key: 'companyAddress',
          },
          {
            title: 'Company Name',
            dataIndex: 'companyName',
            key: 'companyName',
          },
        ],
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
        width: 80,
        fixed: 'right',
      },
    ];
    return {
      data,
      columns,
      filterIcon
    };
  },
};
</script>
`

const filteringAndSortingCode = `
<template>
  <ik-table :columns="columns" :dataSource="data" @change="onChange" />
</template>
<script>

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

export default {
  data() {
    const filterIcon = (
      <ik-icon type="iconshaixuan" style="font-size:14px;" isIk />
    )
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        filters: [
          {
            text: 'Joe',
            value: 'Joe',
          },
          {
            text: 'Jim',
            value: 'Jim',
          },
          {
            text: 'Submenu',
            value: 'Submenu',
            children: [
              {
                text: 'Green',
                value: 'Green',
              },
              {
                text: 'Black',
                value: 'Black',
              },
            ],
          },
        ],
        filterIcon,
        // specify the condition of filtering result
        // here is that finding the name started with \`value\`
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend'],
      },
      {
        title: 'Age',
        dataIndex: 'age',
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: 'Address',
        dataIndex: 'address',
        filterIcon,
        filters: [
          {
            text: 'London',
            value: 'London',
          },
          {
            text: 'New York',
            value: 'New York',
          },
        ],
        filterMultiple: false,
        onFilter: (value, record) => record.address.indexOf(value) === 0,
        sorter: (a, b) => a.address.length - b.address.length,
        sortDirections: ['descend', 'ascend'],
      },
    ];
    return {
      data,
      columns,
    };
  },
  methods: {
    onChange,
  },
};
</script>
`

const nestedSubTableCode = `
<template>
  <ik-table :columns="columns" :dataSource="data" class="components-table-demo-nested">
    <a slot="operation" slot-scope="text" href="javascript:;">Publish</a>
    <ik-table
      slot="expandedRowRender"
      slot-scope="text"
      :columns="innerColumns"
      :dataSource="innerData"
      :pagination="false"
    >
      <span slot="status" slot-scope="text"> <ik-badge status="success" />Finished </span>
      <span slot="operation" slot-scope="text" class="table-operation">
        <a href="javascript:;">Pause</a>
        <a href="javascript:;">Stop</a>
        <a-dropdown>
          <ik-menu slot="overlay">
            <ik-menu-item>
              Action 1
            </ik-menu-item>
            <ik-menu-item>
              Action 2
            </ik-menu-item>
          </ik-menu>
          <a href="javascript:;"> More <ik-icon type="down" /> </a>
        </a-dropdown>
      </span>
    </ik-table>
  </ik-table>
</template>
<script>
const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Platform', dataIndex: 'platform', key: 'platform' },
  { title: 'Version', dataIndex: 'version', key: 'version' },
  { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
  { title: 'Creator', dataIndex: 'creator', key: 'creator' },
  { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
  { title: 'Action', key: 'operation', scopedSlots: { customRender: 'operation' } },
];

const data = [];
for (let i = 0; i < 3; ++i) {
  data.push({
    key: i,
    name: 'Screem',
    platform: 'iOS',
    version: '10.3.4.5654',
    upgradeNum: 500,
    creator: 'Jack',
    createdAt: '2014-12-24 23:12:00',
  });
}

const innerColumns = [ 
  { title: 'Date', dataIndex: 'date', key: 'date' },
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Status', key: 'state', scopedSlots: { customRender: 'status' } },
  { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
  {
    title: 'Action',
    dataIndex: 'operation',
    key: 'operation',
    scopedSlots: { customRender: 'operation' },
  },
];

const innerData = [];
for (let i = 0; i < 3; ++i) {
  innerData.push({
    key: i,
    date: '2014-12-24 23:12:00',
    name: 'This is production name',
    upgradeNum: 'Upgraded: 56',
  });
}

export default {
  data() {
    return {
      data,
      columns,
      innerColumns,
      innerData,
    };
  },
};
</script>
`

const controllableFilteringAndSortingCode = `
<template>
  <div>
    <div class="table-operations">
      <ik-button @click="setAgeSort">Sort age</ik-button>
      <ik-button @click="clearFilters">Clear filters</ik-button>
      <ik-button @click="clearAll">Clear filters and sorters</ik-button>
    </div>
    <ik-table :columns="columns" :dataSource="data" @change="handleChange" />
  </div>
</template>
<script>
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

export default {
  const filterIcon = (
    <ik-icon type="iconshaixuan" style="font-size:14px;" isIk />
  )
  data() {
    return {
      data,
      filterIcon,
      filteredInfo: null,
      sortedInfo: null,
    };
  },
  computed: {
    columns() {
      let { sortedInfo, filteredInfo } = this;
      sortedInfo = sortedInfo || {};
      filteredInfo = filteredInfo || {};
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          filterIcon,
          filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
          filteredValue: filteredInfo.name || null,
          onFilter: (value, record) => record.name.includes(value),
          sorter: (a, b) => a.name.length - b.name.length,
          sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
          sorter: (a, b) => a.age - b.age,
          sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
          filterIcon,
          filters: [{ text: 'London', value: 'London' }, { text: 'New York', value: 'New York' }],
          filteredValue: filteredInfo.address || null,
          onFilter: (value, record) => record.address.includes(value),
          sorter: (a, b) => a.address.length - b.address.length,
          sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
        },
      ];
      return columns;
    },
  },
  methods: {
    handleChange(pagination, filters, sorter) {
      console.log('Various parameters', pagination, filters, sorter);
      this.filteredInfo = filters;
      this.sortedInfo = sorter;
    },
    clearFilters() {
      this.filteredInfo = null;
    },
    clearAll() {
      this.filteredInfo = null;
      this.sortedInfo = null;
    },
    setAgeSort() {
      this.sortedInfo = {
        order: 'descend',
        columnKey: 'age',
      };
    },
  },
};
</script>
<style scoped>
.table-operations {
  margin-bottom: 16px;
}

.table-operations > button {
  margin-right: 8px;
}
</style>
`

const sectionAndOperationCode = `
<template>
  <div>
    <div style="margin-bottom: 16px">
      <ik-button type="primary" @click="start" :disabled="!hasSelected" :loading="loading">
        Reload
      </ik-button>
      <span style="margin-left: 8px">
        <template v-if="hasSelected">
          {{\`Selected \${selectedRowKeys.length} items\`}}
        </template>
      </span>
    </div>
    <ik-table
      :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
      :columns="columns"
      :dataSource="data"
    />
  </div>
</template>
<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: \`Edward King \${i}\`,
    age: 32,
    address: \`London, Park Lane no. \${i}\`,
  });
}

export default {
  data() {
    return {
      data,
      columns,
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
    };
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0;
    },
  },
  methods: {
    start() {
      this.loading = true;
      // ajax request after empty completing
      setTimeout(() => {
        this.loading = false;
        this.selectedRowKeys = [];
      }, 1000);
    },
    onSelectChange(selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
    },
  },
};
</script>
`

const customSectionCode = `
<template>
  <ik-table :rowSelection="rowSelection" :columns="columns" :dataSource="data" />
</template>
<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: \`Edward King \${i}\`,
    age: 32,
    address: \`London, Park Lane no. \${i}\`,
  });
}

export default {
  data() {
    return {
      data,
      columns,
      selectedRowKeys: [], // Check here to configure the default column
    };
  },
  computed: {
    rowSelection() {
      const { selectedRowKeys } = this;
      return {
        selectedRowKeys,
        onChange: this.onSelectChange,
        hideDefaultSelections: true,
        selections: [
          {
            key: 'all-data',
            text: 'Select All Data',
            onSelect: () => {
              this.selectedRowKeys = [...Array(46).keys()]; // 0...45
            },
          },
          {
            key: 'odd',
            text: 'Select Odd Row',
            onSelect: changableRowKeys => {
              let newSelectedRowKeys = [];
              newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                if (index % 2 !== 0) {
                  return false;
                }
                return true;
              });
              this.selectedRowKeys = newSelectedRowKeys;
            },
          },
          {
            key: 'even',
            text: 'Select Even Row',
            onSelect: changableRowKeys => {
              let newSelectedRowKeys = [];
              newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                if (index % 2 !== 0) {
                  return true;
                }
                return false;
              });
              this.selectedRowKeys = newSelectedRowKeys;
            },
          },
        ],
        onSelection: this.onSelection,
      };
    },
  },
  methods: {
    onSelectChange(selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
    },
  },
};
</script>
`

const selectableCode = `
<template>
  <ik-table :rowSelection="rowSelection" :columns="columns" :dataSource="data">
    <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>
  </ik-table>
</template>
<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
];

export default {
  data() {
    return {
      data,
      columns,
    };
  },
  computed: {
    rowSelection() {
      const { selectedRowKeys } = this;
      return {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(\`selectedRowKeys: \${selectedRowKeys}\`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: record => ({
          props: {
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
          },
        }),
      };
    },
  },
};
</script>
`

const conpactTypeCode = `
<template>
  <div id="components-table-demo-size">
    <h4>Middle size table</h4>
    <ik-table :columns="columns" :dataSource="data" size="middle" />
    <h4>Small size table</h4>
    <ik-table :columns="columns" :dataSource="data" size="small" />
  </div>
</template>
<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

export default {
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>
<style>
#components-table-demo-size h4 {
  margin-bottom: 16px;
}
</style>
`

const templateApiCode = `
<template>
  <ik-table :dataSource="data">
    <ik-table-column-group>
      <span slot="title" style="color: #1890ff">Name</span>
      <ik-table-column dataIndex="firstName" key="firstName">
        <span slot="title" style="color: #1890ff">First Name</span>
      </ik-table-column>
      <ik-table-column title="Last Name" dataIndex="lastName" key="lastName" />
    </ik-table-column-group>
    <ik-table-column title="Age" dataIndex="age" key="age" />
    <ik-table-column title="Address" dataIndex="address" key="address" />
    <ik-table-column title="Tags" dataIndex="tags" key="tags">
      <template slot-scope="tags">
        <span>
          <ik-tag v-for="tag in tags" color="blue" :key="tag">{{tag}}</ik-tag>
        </span>
      </template>
    </ik-table-column>
    <ik-table-column title="Action" key="action">
      <template slot-scope="text, record">
        <span>
          <a href="javascript:;">Action 一 {{record.firstName}}</a>
          <ik-divider type="vertical" />
          <a href="javascript:;">Delete</a>
        </span>
      </template>
    </ik-table-column>
  </ik-table>
</template>
<script>
const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default {
  data() {
    return {
      data,
    };
  },
};
</script>
`

export {
  noDataIconCode,
  loadDataCode,
  basicUsageCode,
  basicUsageStripeCode,
  borderCode,
  formMergingCode,
  customFilterMenuCode,
  editableCellCode,
  editableRowCode,
  treeDataDisplayCode,
  deployableCode,
  fixedhacCode,
  fixcolumnCode,
  fixedHeadCode,
  headerGroupingCode,
  filteringAndSortingCode,
  nestedSubTableCode,
  controllableFilteringAndSortingCode,
  sectionAndOperationCode,
  customSectionCode,
  selectableCode,
  conpactTypeCode,
  templateApiCode
}
