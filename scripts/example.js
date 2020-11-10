/*
 * @Description: 页面快速生成脚本
 */

const fs = require('fs')
const path = require('path')
const basePath = path.resolve(__dirname, '../examples')
const utils = require('./_utils.js')
const readline = require('readline')

let comName
let VueTep
let capitalizeName

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('请输入示例组件名称：', name => {
  if (!name || name.length === 0 || name.trim() === '') {
    console.log('名称不能为空！')
  }
  comName = name.trim()
  capitalizeName = utils.capitalize(comName) // 首字母大写
  VueTep = utils.getVueExampleTep(comName)
  fs.mkdirSync(`${basePath}/components/${comName}`)
  process.chdir(`${basePath}/components/${comName}`) // cd comName
  fs.writeFileSync(`index.vue`, VueTep) // 创建index.vue
  fs.writeFileSync(`codeExample.js`, '')
  fs.mkdirSync(`${basePath}/components/${comName}/component-collection`)
  console.log('*****模板生成成功*****')
  rl.question('是否配置对应路由？（y/n）', createRoute => {
    if (createRoute === 'n' || createRoute === 'no') {
      console.log('*****完成*****')
      rl.close()
      process.exit(0)
    }
    process.chdir(`${basePath}/router`) // cd router
    let navConfig = fs.readFileSync('nav.config.json')
    navConfig = navConfig.toString() // buffer转成字符串
    navConfig = JSON.parse(navConfig) // 转成JSON
    console.log('*****nav.config读取成功*****')
    rl.question('选择组件类型(0：General 1:Layout 2: Navigation 3:Data Entry 4:Data Display 5:Feedback 6:Other)： ', type => {
      navConfig['组件'][Number(type)].items.push({
        type: 'page',
        meta: {
          title: `${capitalizeName}`,
          desc: `${capitalizeName}`
        },
        name: `${comName}`,
        path: `/${comName}`
      })
      let newBuf = Buffer.from(JSON.stringify(navConfig))
      fs.writeFileSync('nav.config.json', newBuf)
      console.log('*****路由写入成功*****')
      rl.close()
      process.exit(0)
    })
  })
})
