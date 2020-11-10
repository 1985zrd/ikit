<template>
  <codeBox title="搜索框" description="带有搜索按钮的输入框。" :code="searchInputCode">
    <ik-input-search placeholder="input search text" style="width: 200px" @search="onSearch" />
    <br />
    <br />
    <ik-input-search placeholder="input search text" @search="onSearch" enterButton />
    <br />
    <br />
    <ik-input-search placeholder="input search text" @search="onSearch" enterButton="Search" size="large" />
    <br />
    <br />
    <ik-input-search placeholder="input search text" @search="onSearch" size="large">
      <ik-button slot="enterButton">Custom</ik-button>
    </ik-input-search>
  </codeBox>
</template>

<script>
import { searchInputCode } from './../codeExample'
export default {
  data () {
    return {
      searchInputCode
    }
  },
  methods: {
    onSearch (value) {
      console.log(value)
    }
  }
}
</script>
