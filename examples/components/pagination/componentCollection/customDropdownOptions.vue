<template>
  <codeBox :title="title" :description="description" :code="customDropDownCode">
    <ik-pagination
      :pageSizeOptions="pageSizeOptions"
      :total="total"
      showSizeChanger
      :pageSize="pageSize"
      v-model="current"
      @showSizeChange="onShowSizeChange"
    >
      <template slot="buildOptionText" slot-scope="props">
        <span v-if="props.value!='50'">{{props.value}}条/页</span>
        <span v-if="props.value=='50'">全部</span>
      </template>
    </ik-pagination>
  </codeBox>
</template>

<script>
import { customDropDownCode } from '../codeExample'
export default {
  data () {
    return {
      pageSizeOptions: ['10', '20', '30', '40', '50'],
      current: 1,
      pageSize: 10,
      total: 50,
      customDropDownCode,
      title: '自定义下拉选项',
      description: '自定义下拉选项，例如添加全部选项。'
    }
  },
  methods: {
    onShowSizeChange (current, pageSize) {
      this.pageSize = pageSize
    }
  }
}
</script>
