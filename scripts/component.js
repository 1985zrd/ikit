/*
 * @Description: 组件快速生成脚本
 */

const fs = require('fs')
const path = require('path')
const basePath = path.resolve(__dirname, '../packages')
const utils = require('./_utils')
const readline = require('readline')
const childProcess = require('child_process')

// 首字母大写
const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('请输入组件名称：', comName => {
  if (!comName || comName.trim() === '') {
    console.log('名称不能为空！')
    return
  }
  rl.question('请输入组件文件类型（vue/js）：', type => {
    if (!type || type.trim() === '' || (type.trim() !== 'vue' && type.trim() !== 'js')) {
      console.log('请输入正确的文件类型！')
      return
    }
    comName = comName.trim()
    const method = type.trim() === 'vue' ? 'getComVueTep' : 'getComJsTep'
    const Tep = utils[method](comName) // 获取vue文件模板
    const installTep = utils.getInstallTep(comName) // 获取index.js文件模板
    fs.mkdirSync(`${basePath}/${comName}`) // mkdir

    process.chdir(`${basePath}/${comName}`) // cd components
    console.log('...正在创建组件目录')
    fs.writeFileSync(`index.js`, installTep) // 创建index.js
    fs.mkdirSync(`${basePath}/${comName}/src`) // 创建src
    process.chdir(`${basePath}/${comName}/src`) // cd src
    const capitalizeName = capitalize(comName) // 首字母大写的组件名称
    fs.writeFileSync(`${capitalizeName}.${type}`, Tep) // vue
    process.chdir(`${basePath}/theme`) // 到theme目录
    fs.writeFileSync(`${comName}.less`, '') // 创建对应的less文件
    fs.appendFileSync('index.less', `\n@import './${comName}.less';`)
    console.log(`
      ****************************************************

                            创建成功！！
                  创建示例请运行npm run example

      ****************************************************
      `)
    rl.close()
    process.exit(0)
  })
})
