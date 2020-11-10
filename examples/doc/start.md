`iKit` 致力于在界面效果方面**提升开发效率**，**减少重复劳动**。

> 在开始之前，推荐先学习 [Vue](https://cn.vuejs.org/) 和 [ES2015](http://babeljs.io/docs/learn-es2015/)，并正确安装和配置了 [Node.js](https://nodejs.org/) v8.9 或以上。官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经完全掌握了 Vue 的正确开发方式。如果你刚开始学习前端或者 Vue，将 UI 框架作为你的第一步可能不是最好的主意。


## 引入 iKit

### 1. 安装脚手架工具

[vue-cli](https://github.com/vuejs/vue-cli)

```bash
$ npm install -g @vue/cli
# OR
$ yarn global add @vue/cli
```

### 2. 创建一个项目

使用命令行进行初始化。

```bash
$ vue create ikit-demo
```

并配置项目。

若安装缓慢报错，可尝试用 `cnpm` 或别的镜像源自行安装：`rm -rf node_modules && cnpm install`。

### 3. 使用组件

```bash
$ npm i --save git+ssh://git@gitlab.it.ikang.com:fe/iKit.git
```

**完整引入**

```jsx
import Vue from 'vue';
import ikit from 'ikit';
import 'ikit/lib/ikit.css';
Vue.config.productionTip = false;

Vue.use(ikit);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
```

以上代码便完成了 iKit 的引入。需要注意的是，样式文件需要单独引入。

**局部导入组件**

```jsx
import Vue from 'vue';
import { Button, message } from 'ikit';
import App from './App';

Vue.config.productionTip = false;

Vue.component(Button.name, Button);
Vue.component(Button.Group.name, Button.Group);
/* 或 */
Vue.use(Button);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
```

> 你可以在左侧菜单选用更多组件。


## 兼容性

Ant Design Vue 支持所有的现代浏览器和 IE9+。

对于 IE 系列浏览器，需要提供 [es5-shim](https://github.com/es-shims/es5-shim) 和 [es6-shim](https://github.com/paulmillr/es6-shim) 等 Polyfills 的支持。

如果你使用了 babel，强烈推荐使用 [babel-polyfill](https://babeljs.io/docs/usage/polyfill/) 和 [babel-plugin-transform-runtime](https://babeljs.io/docs/plugins/transform-runtime/) 来替代以上两个 shim。


## 按需加载

借助 `babel-plugin-import`，我们可以只引入需要的组件，以达到减小项目体积的目的。

### 使用 babel-plugin-import

```bash
$ yarn add babel-plugin-import --dev
```

#### 使用 vue-cli 2 的小伙伴

修改`.babelrc`文件，配置 babel-plugin-import

```diff
  {
    "presets": [
      ["env", {
        "modules": false,
        "targets": {
          "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
        }
      }],
      "stage-2"
    ],
-   "plugins": ["transform-vue-jsx", "transform-runtime"]
+   "plugins": [
+     "transform-vue-jsx",
+     "transform-runtime",
+     ["import", { "libraryName": "ikit", "style": "css" }]
+   ]
  }
```

#### 使用 vue-cli 3 的小伙伴

修改`babel.config.js`文件，配置 babel-plugin-import

```diff
 module.exports = {
  presets: ["@vue/app"],
+  plugins: [
+    [
+      "import",
+      { libraryName: "ikit", style: true }
+    ]
+  ]
};
```

然后移除前面在 `src/main.js` 里全量添加的 `import 'ikit/lib/ikit.css';` 样式代码，并且按下面的格式引入模块。

```diff
  // src/main.js
  import Vue from 'vue'
- import ikit from 'ikit';
+ import { Button } from 'ikit';
- import 'ikit/lib/ikit.css'
  import App from './App'

  Vue.component(Button.name, Button)

  Vue.config.productionTip = false

  new Vue({
    render: h => h(App)
  }).$mount("#app");
```

最后重启 `npm run serve` ikit 组件的 js 和 css 代码都会按需加载。
