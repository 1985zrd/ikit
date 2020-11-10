<template>
  <codeBox :title="title"
           :description="description"
           :code="basic">
    <ik-locale-provider locale="zhCN">
      <ik-pagination :defaultCurrent="1"
                     :total="50"
                     showSizeChanger />
    </ik-locale-provider>
  </codeBox>
</template>
<script>
import { basic } from '../codeExample'
export default {
  data () {
    return {
      title: '国际化',
      description: '用 LocaleProvider 包裹你的应用，并引用对应的语言包（中文内置了语言包，locale值设为"zhCN"即可）。',
      basic
    }
  }
}
</script>
