<template>
  <codeBox :title="title" :description="description" :code="hotTagsCode">
    <div>
      <strong :style="{ marginRight: 8 }">Categories:</strong>
      <template v-for=" tag in tags">
        <ik-checkable-tag
          :key="tag"
          :checked="selectedTags.indexOf(tag) > -1"
          @change="(checked) => handleChange(tag, checked)"
        >
          {{tag}}
        </ik-checkable-tag>
      </template>
    </div>
  </codeBox>
</template>
<script>
import { hotTagsCode } from '../codeExample'
export default {
  data () {
    return {
      title: '热门标签',
      description: '选择你感兴趣的话题。',
      hotTagsCode,
      checked1: false,
      checked2: false,
      checked3: false,
      tags: ['Movies', 'Books', 'Music', 'Sports'],
      selectedTags: []
    }
  },
  methods: {
    handleChange (tag, checked) {
      const { selectedTags } = this
      const nextSelectedTags = checked
        ? [...selectedTags, tag]
        : selectedTags.filter(t => t !== tag)
      console.log('You are interested in: ', nextSelectedTags)
      this.selectedTags = nextSelectedTags
    }
  }
}
</script>
