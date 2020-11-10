<template>
  <codeBox :title="title" :description="description" :code="text">
    <div id="components-form-demo-advanced-search">
      <ik-form class="ant-advanced-search-form" :form="form" @submit="handleSearch">
        <ik-row :gutter="24">
          <ik-col
            v-for="i in 10"
            :key="i"
            :span="8"
            :style="{ display: i < count ? 'block' : 'none' }"
          >
            <ik-form-item :label="`Field ${i}`">
              <ik-input
                v-decorator="[
                  `field-${i}`,
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Input something!',
                      },
                    ],
                  },
                ]"
                placeholder="placeholder"
              />
            </ik-form-item>
          </ik-col>
        </ik-row>
        <ik-row>
          <ik-col :span="24" :style="{ textAlign: 'right' }">
            <ik-button type="primary" html-type="submit">Search</ik-button>
            <ik-button :style="{ marginLeft: '8px' }" @click="handleReset">Clear</ik-button>
            <a :style="{ marginLeft: '8px', fontSize: '12px' }" @click="toggle">
              Collapse
              <ik-icon :type="expand ? 'up' : 'down'" />
            </a>
          </ik-col>
        </ik-row>
      </ik-form>
      <div class="search-result-list">Search Result List</div>
    </div>
  </codeBox>
</template>
<script>
// import mixin from '../formMixins'
import { searchFormCode } from '../codeExample'
export default {
  // mixins: [mixin],
  name: 'searchForm',
  data () {
    return {
      title: '高级搜索',
      description: '三列栅格式的表单排列方式，常用于数据表格的高级搜索。有部分定制的样式代码，由于输入标签长度不确定，需要根据具体情况自行调整。',
      text: searchFormCode,
      expand: false,
      form: this.$form.createForm(this, { name: 'advanced_search' })
    }
  },
  computed: {
    count () {
      return this.expand ? 11 : 7
    }
  },
  methods: {
    handleSearch (e) {
      e.preventDefault()
      this.form.validateFields((error, values) => {
        console.log('error', error)
        console.log('Received values of form: ', values)
      })
    },

    handleReset () {
      this.form.resetFields()
    },

    toggle () {
      this.expand = !this.expand
    }
  }
}
</script>
<style lang="scss" scoped>
.ant-advanced-search-form {
  padding: 24px;
  background: #fbfbfb;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
}

.ant-advanced-search-form .ant-form-item {
  display: flex;
}

.ant-advanced-search-form .ant-form-item-control-wrapper {
  flex: 1;
}

#components-form-demo-advanced-search .ant-form {
  max-width: none;
}
#components-form-demo-advanced-search .search-result-list {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}
</style>
