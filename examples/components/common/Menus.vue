<script>
import { Menu } from '~/index'
const { Item, ItemGroup, SubMenu } = Menu
const isArray = Array.isArray
let key = 0
export default {
  name: 'Menus',
  props: ['data', 'theme', 'defaultSelectedKeys'],
  data () {
    return {
      defaultOpenKeys: ['组件']
    }
  },
  methods: {
    renderMenu (data, h) {
      let desc = (data.meta || {}).title || '描述丢失！'
      if (isArray(data)) {
        return data.map(item =>
          this.renderMenu(item, h)
        )
      } else {
        if (data.items) {
          return h(!data.name ? ItemGroup : SubMenu, {
            props: {
              title: desc
            },
            key: this.generateKeyAndSetDefaultOpenKey(data)
          }, this.renderMenu(data.items, h))
        } else {
          return h(Item, {
            props: {
              title: desc
            },
            key: this.generateKeyAndSetDefaultOpenKey(data),
            on: {
              click: this.handleClick.bind(this, data)
            }
          }, desc)
          // 使用下面的jsx语法时, renderMenu方法的第二个形参不能是 'h', 否则报如下错误, 原理未知
          // TypeError: Duplicate declaration "h" (This is an error on an internal node. Probably an internal error.)
          // return <ik-menu-item key={this.generateKeyAndSetDefaultOpenKey(data)} onClick={this.handleClick.bind(this, data)}>{data.desc}</ik-menu-item>
        }
      }
    },
    handleClick (data) {
      if (this.$router.currentRoute.path !== data.path) {
        this.$router.push(data.path)
        this.selectedKeys = data.name
      }
    },
    generateKeyAndSetDefaultOpenKey (data) {
      // return this.defaultOpenKeys.includes(data.name) ? data.name : key++
      return data.name || key++
    }
  },
  render (h, c) {
    return h(Menu, {
      props: {
        mode: 'inline',
        theme: this.theme,
        defaultOpenKeys: this.defaultOpenKeys,
        defaultSelectedKeys: [this.defaultSelectedKeys]
      },
      key: key++
    }, this.renderMenu(this.data, h))
  }
}
</script>
