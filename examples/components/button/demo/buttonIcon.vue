<template>
  <codeBox :title="title"
           :description="description"
           :code="buttonIcon">
    <div>
        <ik-button type="primary" shape="circle" icon="search"></ik-button>
        <ik-button type="primary" icon="search">Search</ik-button>
        <ik-button shape="circle" icon="search" />
        <ik-button icon="search">Search</ik-button>
        <ik-button shape="circle" icon="search" />
        <ik-button icon="search">Search</ik-button>
        <ik-button type="dashed" shape="circle" icon="search" />
        <ik-button type="dashed" icon="search">Search</ik-button>
        <ik-button type="dashed"><my-icon type="icon--convertible" style="fontSize: 16px;"/>Car</ik-button>
        <ik-button :noBorder="true" icon="login">医学影像</ik-button>
        <ik-button :noBorder="true"><ik-icon type="iconlink" style="fontSize: 16px;" isIk/>使用ikang图标</ik-button>
      </div>
  </codeBox>
</template>
<script>
import { buttonIcon } from '../test'
export default {
  name: 'buttonIcon',
  data () {
    return {
      buttonIcon,
      title: '图标按钮',
      description: `<p>当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。</p>
                   <p>如果想控制 Icon 具体的位置，只能直接使用 Icon 组件，而非 icon 属性。</p>
                   <p>可以组合自定义Icon使用</p>`
    }
  }
}
</script>
