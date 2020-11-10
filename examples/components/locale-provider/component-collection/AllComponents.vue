<template>
  <codeBox :title="title"
           :description="description"
           :code="allComponents">
    <div class="change-locale">
      <span :style="{ marginRight: '16px' }">Change locale of components: </span>
      <ik-radio-group :defaultValue="null"
                      @change="changeLocale">
        <ik-radio-button key="en"
                         :value="null">English</ik-radio-button>
        <ik-radio-button key="cn"
                         value="zhCN">中文</ik-radio-button>
      </ik-radio-group>
    </div>
    <ik-locale-provider :locale="locale">
      <div class="locale-components"
           :key="(!!locale).toString()">
        <!-- HACK: just refresh in production environment-->
        <div class="example">
          <ik-pagination :defaultCurrent="1"
                         :total="50"
                         showSizeChanger />
        </div>
        <div class="example">
          <ik-select showSearch
                     style="width: 200px">
            <ik-select-option value="jack">jack</ik-select-option>
            <ik-select-option value="lucy">lucy</ik-select-option>
          </ik-select>
          <ik-date-picker />
          <ik-time-picker />
          <ik-range-picker style=" width: 200px " />
        </div>
        <div class="example">
          <ik-button type="primary"
                     @click="showModal">Show Modal</ik-button>
          <ik-button @click="info">Show info</ik-button>
          <ik-button @click="confirm">Show confirm</ik-button>
        </div>
        <div :style="{ width: '800px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
          <ik-calendar :value="moment()" />
        </div>
        <ik-modal title="Locale Modal"
                  v-model="visible">
          <p>Locale Modal</p>
        </ik-modal>
      </div>
    </ik-locale-provider>
  </codeBox>
</template>
<script>
import { Modal } from '~/index'
import { allComponents } from '../codeExample'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('en')
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'filter1',
        value: 'filter1'
      }
    ]
  },
  {
    title: 'Age',
    dataIndex: 'age'
  }
]
export default {
  data () {
    return {
      visible: false,
      locale: null,
      allComponents,
      title: '所有组件',
      description: '此处列出 Ant Design 中需要国际化支持的组件，你可以在演示里切换语言。'
    }
  },
  methods: {
    moment,
    showModal () {
      this.visible = true
    },
    hideModal () {
      this.visible = false
    },
    info () {
      Modal.info({
        title: 'some info',
        content: 'some info'
      })
    },
    confirm () {
      Modal.confirm({
        title: 'some info',
        content: 'some info'
      })
    },
    changeLocale (e) {
      const localeValue = e.target.value
      this.locale = localeValue
      if (!localeValue) {
        moment.locale('en')
      } else {
        moment.locale('zh-cn')
      }
    }
  }
}
</script>

<style scoped>
.locale-components {
  border-top: 1px solid #d9d9d9;
  padding-top: 16px;
}

.example {
  margin: 16px 0;
}

.example > * {
  margin-right: 8px;
}

.change-locale {
  margin-bottom: 16px;
}
</style>
