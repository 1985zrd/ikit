<template>
  <codeBox :title="title" :description="description" :code="controlCode">
    <div>
      <template v-for="(tag, index) in tags">
        <ik-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
          <ik-tag :key="tag" :closable="index !== 0" :afterClose="() => handleClose(tag)">
            {{`${tag.slice(0, 20)}...`}}
          </ik-tag>
        </ik-tooltip>
        <ik-tag v-else :key="tag" :closable="index !== 0" :afterClose="() => handleClose(tag)">
          {{tag}}
        </ik-tag>
      </template>
      <ik-input
        v-if="inputVisible"
        ref="input"
        type="text"
        size="small"
        :style="{ width: '78px' }"
        :value="inputValue"
        @change="handleInputChange"
        @blur="handleInputConfirm"
        @keyup.enter="handleInputConfirm"
      />
      <ik-tag v-else @click="showInput" style="background: #fff; borderStyle: dashed;">
        <ik-icon type="plus" /> New Tag
      </ik-tag>
    </div>
  </codeBox>
</template>
<script>
import { controlCode } from '../codeExample'
export default {
  data () {
    return {
      title: '动态添加和删除',
      description: '用数组生成一组标签，可以动态添加和删除，通过监听删除动画结束的事件 `afterClose` 实现。',
      controlCode,
      tags: ['Unremovable', 'Tag 2', 'Tag 3Tag 3Tag 3Tag 3Tag 3Tag 3Tag 3'],
      inputVisible: false,
      inputValue: ''
    }
  },
  methods: {
    handleClose (removedTag) {
      const tags = this.tags.filter(tag => tag !== removedTag)
      console.log(tags)
      this.tags = tags
    },

    showInput () {
      this.inputVisible = true
      this.$nextTick(function () {
        this.$refs.input.focus()
      })
    },

    handleInputChange (e) {
      this.inputValue = e.target.value
    },

    handleInputConfirm () {
      const inputValue = this.inputValue
      let tags = this.tags
      if (inputValue && tags.indexOf(inputValue) === -1) {
        tags = [...tags, inputValue]
      }
      console.log(tags)
      Object.assign(this, {
        tags,
        inputVisible: false,
        inputValue: ''
      })
    }
  }
}
</script>
