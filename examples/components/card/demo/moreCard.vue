<template>
  <codeBox title="支持更多内容配置"
           :description="description"
           :code="moreCard">
    <template>
      <ik-card hoverable style="width: 300px">
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          slot="cover"
        />
        <template class="ant-card-actions" slot="actions">
          <ik-icon type="setting" />
          <ik-icon type="edit" />
          <ik-icon type="ellipsis" />
        </template>
        <ik-card-meta title="Card title" description="This is the description">
          <ik-avatar
            slot="avatar"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </ik-card-meta>
      </ik-card>
    </template>
  </codeBox>
</template>
<script>
import { moreCard } from '../card'
export default {
  data () {
    return {
      moreCard,
      description: `一种支持封面、头像、标题和描述信息的卡片。`
    }
  }
}
</script>
<style>

</style>
