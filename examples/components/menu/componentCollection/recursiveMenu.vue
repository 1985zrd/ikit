<template>
  <codeBox :title="title"
           :description="description"
           :code="recursiveMenu">
    <div style="width: 256px">
      <ik-button type="primary"
                 @click="toggleCollapsed"
                 style="margin-bottom: 16px">
        <ik-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
      </ik-button>
      <ik-menu :defaultSelectedKeys="['1']"
               :defaultOpenKeys="['2']"
               mode="inline"
               theme="dark"
               :inlineCollapsed="collapsed">
        <!-- <ik-menu-item key="1">
        <ik-icon type="pie-chart" />
        <span>Option 1</span>
      </ik-menu-item>
      <ik-sub-menu key="sub1">
        <span slot="title">
          <ik-icon type="mail" />
          <span>Navigation 2</span>
        </span>
        <ik-sub-menu key="sub1-2">
          <span slot="title">
            <ik-icon type="mail" />
            <span>Navigation 3</span>
          </span>
          <ik-menu-item key="5">
            <ik-icon type="pie-chart" />
            <span>Option 2.1.1</span>
          </ik-menu-item>
        </ik-sub-menu>
      </ik-sub-menu> -->
        <template v-for="item in list">
          <ik-menu-item v-if="!item.children"
                        :key="item.key">
            <ik-icon type="icontime"
                     isIk />
            <span>{{item.title}}</span>
          </ik-menu-item>
          <sub-menu v-else
                    :menu-info="item"
                    :key="item.key" />
        </template>
      </ik-menu>
    </div>
  </codeBox>
</template>

<script>
import { recursiveMenu } from './../codeExample'
import SubMenu from './components/SubMenu'

export default {
  components: {
    'sub-menu': SubMenu
  },
  data () {
    return {
      recursiveMenu,
      title: '单文件递归菜单',
      description: '使用单文件方式递归生成菜单。</br>因组件内部会动态更改ik-sub-menu的属性，如果拆分成单文件，无法将属性挂载到ik-sub-menu上，你需要自行声明属性并挂载。为了方便，避免属性的声明，我们推荐使用函数式组件。',
      collapsed: false,
      list: [
        {
          key: '1',
          title: 'Option 1'
        },
        {
          key: '2',
          title: 'Navigation 2',
          children: [
            {
              key: '2.1',
              title: 'Navigation 3',
              children: [{ key: '2.1.1', title: 'Option 2.1.1' }]
            }
          ]
        }
      ]
    }
  },
  methods: {
    toggleCollapsed () {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
