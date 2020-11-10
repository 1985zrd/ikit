
## 使用 [#](#使用)

LocaleProvider 使用 Vue 的 [provide/inject](https://cn.vuejs.org/v2/api/#provide-inject) 特性，只需在应用外围包裹一次即可全局生效。

```html
<template>
  <ik-locale-provider>
    <App />
  </ik-locale-provider>
</template>
<script>
  import moment from 'moment';
  import 'moment/locale/zh-cn';

  moment.locale('zh-cn');
  export default {
    data() {
      return {};
    },
  };
</script>
```

### 其他国际化需求 [#](#其他国际化需求)

本模块仅用于组件的内建文案，若有业务文案的国际化需求，建议使用 [vue-i18n](https://github.com/kazupon/vue-i18n)

## 代码演示 [#](#代码演示)
