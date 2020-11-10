# ikit 
### IKang 内部UI框架

- 版本       version 0.1.3
- 环境依赖   node v10.0.0+ 

---

### 项目地址

http://ikit.ikang.com

---

### 仓库地址
http://gitlab.it.ikang.com/fe/iKit

---

### 项目启动/打包
```
#安装依赖      
npm i

#启动dev server 
npm run serve

#打包          
npm run build

#格式化ESLint  
npm run lint

#创建组件
npm run com

#创建示例
npm run example

```
### 目录结构


```
|____config                   //webpack插件配置文件夹
|____lib                      //库文件
|____examples
|  |____apiDoc                //组件属性，方法说明
|  |____App.vue               
|  |____assets                //示例静态资源
|  |____changeTheme           //切换主题配置
|  |____doc                   //官网文档
|  |____components            //组件使用示例
|  |____favicon.ico 
|  |____index.html
|  |____main.js
|  |____router                //示例网站路由
|  |____store                 //vuex       
|  |____utils                 //示例工具包
|____scripts                  //js脚本文件
├── packages                  // 组件文件夹
│   |____ index.js            // 入口文件
│   |____affix                // 固钉
│   |____auto-complete        // 自动完成
│   |____avatar               // 头像
│   |____badge                // 徽标数
│   |____breadcrumb           // 面包屑
│   |____button               // 按钮
│   |____card                 // 卡片
│   |____cascader             // 连级选择器
│   |____checkbox             // 多选框
│   |____col                  // 栅格
│   |____config-provider      // 全局化配置
│   |____date-picker          // 日期选择框
│   |____dropdown             // 下拉菜单  
│   |____empty                // 空状态
│   |____form                 // 表单
│   |____icon                 // 图标
│   |____input                // 输入框
│   |____input-number         // 数字输入框
│   |____layout               // 布局
│   |____list                 // 列表
│   |____locale-provider      // 国际化
│   |____menu                 // 菜单
│   |____message              // 全局提示
│   |____modal                // 对话框
│   |____pagination           // 分页
│   |____radio                // 单选
│   |____row                  // 栅格
│   |____select               // 选择器
│   |____slider               // 滑动输入条
│   |____spin                 // 加载中
│   |____switch               // 样式
│   |____table                // 表格
│   |____tabs                 // 标签页
│   |____tag                  // 标签
│   |____theme                // 样式文件夹
│   | |____common             // 公用变量文件夹
│   | | |____colors.less      // 颜色变量
│   | | |____tinyColor.less   // 方法
│   | | |____var.less         // 样式
|____.babelrc
|____.eslintrc
|____vue.config.js            //vue-cli3 webpack配置文件
|____package-lock.json
|____package.json
```

---

### 更新日志
