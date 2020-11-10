<template>
  <codeBox :title="title"
           :description="description"
           :code="searchUncertainzCategory">
    <div class="global-search-wrapper"
         style="width: 300px">
      <ik-auto-complete class="global-search"
                       size="large"
                       style="width: 100%"
                       @select="onSelect"
                       @search="handleSearch"
                       placeholder="input here"
                       optionLabelProp="text">
        <template slot="dataSource">
          <ik-select-option v-for="item in dataSource"
                           :key="item.category"
                           :text="item.category">
            {{item.query}} 在
            <a :href="`https://s.taobao.com/search?q=${item.query}`"
               target="_blank"
               rel="noopener noreferrer">
              {{item.category}}
            </a>
            区块中
            <span className="global-search-item-count">约 {{item.count}} 个结果</span>
          </ik-select-option>
        </template>
        <ik-input>
          <ik-button slot="suffix"
                    class="search-btn"
                    size="large"
                    type="primary">
            <ik-icon type="search" />
          </ik-button>
        </ik-input>
      </ik-auto-complete>
    </div>
  </codeBox>
</template>
<script>
import { searchUncertainzCategory } from '../codeExample'
export default {
  data () {
    return {
      title: '查询模式 - 不确定类目',
      description: '查询模式 - 不确定类目',
      searchUncertainzCategory,
      dataSource: []
    }
  },
  methods: {
    onSelect (value) {
      console.log('onSelect', value)
    },

    handleSearch (value) {
      this.dataSource = value ? this.searchResult(value) : []
    },

    getRandomInt (max, min = 0) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },

    searchResult (query) {
      return new Array(this.getRandomInt(5))
        .join('.')
        .split('.')
        .map((item, idx) => ({
          query,
          category: `${query}${idx}`,
          count: this.getRandomInt(200, 100)
        }))
    }
  }
}
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

.global-search.ant-select-auto-complete
  .ant-input-affix-wrapper
  .ant-input:not(:last-child) {
  padding-right: 62px;
}

.global-search.ant-select-auto-complete
  .ant-input-affix-wrapper
  .ant-input-suffix {
  right: 0;
}

.global-search.ant-select-auto-complete
  .ant-input-affix-wrapper
  .ant-input-suffix
  button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.global-search-item-count {
  position: absolute;
  right: 16px;
}
</style>
