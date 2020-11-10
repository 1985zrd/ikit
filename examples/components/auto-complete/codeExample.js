export const basic = `
<template>
  <ik-auto-complete
    :dataSource="dataSource"
    style="width: 200px"
    @select="onSelect"
    @search="handleSearch"
    placeholder="input here"
  />
</template>
<script>
  export default {
    data() {
      return {
        dataSource: [],
      };
    },
    methods: {
      handleSearch(value) {
        this.dataSource = !value ? [] : [value, value + value, value + value + value];
      },
      onSelect(value) {
        console.log('onSelect', value);
      },
    },
  };
</script>
`

export const searchIdentifiedCategory = `
<template>
  <div class="certain-category-search-wrapper" style="width: 250px">
    <ik-auto-complete
      class="certain-category-search"
      dropdownClassName="certain-category-search-dropdown"
      :dropdownMatchSelectWidth="false"
      :dropdownStyle="{width: '300px'}"
      size="large"
      style="width: 100%"
      placeholder="input here"
      optionLabelProp="value"
    >
      <template slot="dataSource">
        <ik-select-opt-group v-for="group in dataSource" :key="group.title">
          <span slot="label">
            {{group.title}}
            <a
              style="float: right"
              href="https://www.google.com/search?q=antd"
              target="_blank"
              rel="noopener noreferrer"
              >更多
            </a>
          </span>
          <ik-select-option v-for="opt in group.children" :key="opt.title" :value="opt.title">
            {{opt.title}}
            <span class="certain-search-item-count">{{opt.count}} 人 关注</span>
          </ik-select-option>
        </ik-select-opt-group>
        <ik-select-option disabled key="all" class="show-all">
          <a href="https://www.google.com/search?q=antd" target="_blank" rel="noopener noreferrer">
            查看所有结果
          </a>
        </ik-select-option>
      </template>
      <ik-input>
        <ik-icon slot="suffix" type="search" class="certain-category-icon" />
      </ik-input>
    </ik-auto-complete>
  </div>
</template>
<script>
  const dataSource = [
    {
      title: '话题',
      children: [
        {
          title: 'AntDesign',
          count: 10000,
        },
        {
          title: 'AntDesign UI',
          count: 10600,
        },
      ],
    },
    {
      title: '问题',
      children: [
        {
          title: 'AntDesign UI 有多好',
          count: 60100,
        },
        {
          title: 'AntDesign 是啥',
          count: 30010,
        },
      ],
    },
    {
      title: '文章',
      children: [
        {
          title: 'AntDesign 是一个设计语言',
          count: 100000,
        },
      ],
    },
  ];
  export default {
    data() {
      return {
        dataSource,
      };
    },
  };
</script>
<style>
  .certain-category-search-dropdown .ant-select-dropdown-menu-item-group-title {
    color: #666;
    font-weight: bold;
  }

  .certain-category-search-dropdown .ant-select-dropdown-menu-item-group {
    border-bottom: 1px solid #f6f6f6;
  }

  .certain-category-search-dropdown .ant-select-dropdown-menu-item {
    padding-left: 16px;
  }

  .certain-category-search-dropdown .ant-select-dropdown-menu-item.show-all {
    text-align: center;
    cursor: default;
  }

  .certain-category-search-dropdown .ant-select-dropdown-menu {
    max-height: 300px;
  }
</style>
<style scoped>
  .certain-category-search-wrapper
    >>> .certain-category-search.ant-select-auto-complete
    .ant-input-affix-wrapper
    .ant-input-suffix {
    right: 12px;
  }
  .certain-category-search-wrapper >>> .certain-search-item-count {
    position: absolute;
    color: #999;
    right: 16px;
  }
  .certain-category-search-wrapper
    >>> .certain-category-search.ant-select-focused
    .certain-category-icon {
    color: #108ee9;
  }
  .certain-category-search-wrapper >>> .certain-category-icon {
    color: #6e6e6e;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    font-size: 16px;
  }
</style>
`

export const customInput = `
<template>
  <ik-auto-complete
    :dataSource="dataSource"
    style="width: 200px"
    @search="handleSearch"
    @select="onSelect"
  >
    <ik-textarea
      placeholder="input here"
      class="custom"
      style="height: 50px"
      @keypress="handleKeyPress"
    />
  </ik-auto-complete>
</template>
<script>
  export default {
    data() {
      return {
        dataSource: [],
      };
    },
    methods: {
      onSelect(value) {
        console.log('onSelect', value);
      },
      handleSearch(value) {
        this.dataSource = !value ? [] : [value, value + value, value + value + value];
      },
      handleKeyPress(ev) {
        console.log('handleKeyPress', ev);
      },
    },
  };
</script>
`

export const ignoreCase = `
<template>
  <ik-auto-complete
    :dataSource="dataSource"
    style="width: 200px"
    placeholder="input here"
    :filterOption="filterOption"
  />
</template>
<script>
  export default {
    data() {
      return {
        dataSource: ['Burns Bay Road', 'Downing Street', 'Wall Street'],
      };
    },
    methods: {
      filterOption(input, option) {
        return (
          option.componentOptions.children[0].text.toUpperCase().indexOf(input.toUpperCase()) >= 0
        );
      },
    },
  };
</script>
`

export const customOptions = `
<template>
  <ik-auto-complete style="width: 200px" @search="handleSearch" placeholder="input here">
    <template slot="dataSource">
      <ik-select-option v-for="email in result" :key="email">{{email}}</ik-select-option>
    </template>
  </ik-auto-complete>
</template>
<script>
  export default {
    data() {
      return {
        result: [],
      };
    },
    methods: {
      handleSearch(value) {
        let result;
        if (!value || value.indexOf('@') >= 0) {
          result = []
        } else {
          result = ['gmail.com', '163.com', 'qq.com'].map(domain => \`$\{value}@$\{domain}\`)
        }
        this.result = result
      },
    },
  }
</script>
`

export const searchUncertainzCategory = `
<template>
  <div class="global-search-wrapper" style="width: 300px">
    <ik-auto-complete
      class="global-search"
      size="large"
      style="width: 100%"
      @select="onSelect"
      @search="handleSearch"
      placeholder="input here"
      optionLabelProp="text"
    >
      <template slot="dataSource">
        <ik-select-option v-for="item in dataSource" :key="item.category" :text="item.category">
          {{item.query}} 在
          <a
            :href="\`https://s.taobao.com/search?q=$\{item.query}\`"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{item.category}}
          </a>
          区块中
          <span className="global-search-item-count">约 {{item.count}} 个结果</span>
        </ik-select-option>
      </template>
      <ik-input>
        <ik-button slot="suffix" class="search-btn" size="large" type="primary">
          <ik-icon type="search" />
        </ik-button>
      </ik-input>
    </ik-auto-complete>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        dataSource: [],
      };
    },
    methods: {
      onSelect(value) {
        console.log('onSelect', value);
      },

      handleSearch(value) {
        this.dataSource = value ? this.searchResult(value) : [];
      },

      getRandomInt(max, min = 0) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },

      searchResult(query) {
        return new Array(this.getRandomInt(5))
          .join('.')
          .split('.')
          .map((item, idx) => ({
            query,
            category: \`$\{query}$\{idx}\`,
            count: this.getRandomInt(200, 100),
          }));
      },
    },
  };
</script>

<style>
  .global-search-wrapper {
    padding-right: 50px;
  }

  .global-search {
    width: 100%;
  }

  .global-search.ant-select-auto-complete .ant-select-selection--single {
    margin-right: -46px;
  }

  .global-search.ant-select-auto-complete .ant-input-affix-wrapper .ant-input:not(:last-child) {
    padding-right: 62px;
  }

  .global-search.ant-select-auto-complete .ant-input-affix-wrapper .ant-input-suffix {
    right: 0;
  }

  .global-search.ant-select-auto-complete .ant-input-affix-wrapper .ant-input-suffix button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .global-search-item-count {
    position: absolute;
    right: 16px;
  }
</style>
`
