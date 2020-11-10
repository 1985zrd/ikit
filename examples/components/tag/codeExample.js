const basicCode = `
<template>
  <div>
    <ik-tag>Tag 1</ik-tag>
    <ik-tag><a href="https://github.com/vueComponent/ant-design">Link</a></ik-tag>
    <ik-tag closable @close="log">Tag 2</ik-tag>
    <ik-tag closable @close="preventDefault">Prevent Default</ik-tag>
  </div>
</template>
<script>
export default {
  methods: {
    log (e) {
      console.log(e)
    },
    preventDefault (e) {
      e.preventDefault()
      console.log('Clicked! But prevent default.')
    }
  }
}
</script>
`
const checkableCode = `
<template>
  <div>
    <ik-checkable-tag v-model="checked1" @change="handleChange">Tag1</ik-checkable-tag>
    <ik-checkable-tag v-model="checked2" @change="handleChange">Tag2</ik-checkable-tag>
    <ik-checkable-tag v-model="checked3" @change="handleChange">Tag3</ik-checkable-tag>
  </div>
</template>
<script>
export default {
  data () {
    return {
      checked1: false,
      checked2: false,
      checked3: false
    }
  },
  methods: {
    handleChange (checked) {
      console.log(checked)
    }
  }
}
</script>
`

const largeCode = `
<template>
  <div>
    <h4 style="margin-bottom: 16px">normal:</h4>
    <div>
      <ik-tag color="blue">blue</ik-tag>
      <ik-tag color="green">green</ik-tag>
      <ik-tag color="orange">orange</ik-tag>
      <ik-tag color="red">red</ik-tag>
      <ik-tag>default</ik-tag>
    </div>
    <h4 style="margin: '16px 0'">large:</h4>
    <div>
      <ik-tag color="blue" large>blue</ik-tag>
      <ik-tag color="green" large>green</ik-tag>
      <ik-tag color="orange" large>orange</ik-tag>
      <ik-tag color="red" large>red</ik-tag>
      <ik-tag large>default</ik-tag>
    </div>
  </div>
</template>
`
const colorfulCode = `
<template>
  <div>
    <h4 style="margin-bottom: 16px">Presets:</h4>
    <div>
      <ik-tag color="pink">pink</ik-tag>
      <ik-tag color="red">red</ik-tag>
      <ik-tag color="orange">orange</ik-tag>
      <ik-tag color="green">green</ik-tag>
      <ik-tag color="cyan">cyan</ik-tag>
      <ik-tag color="blue">blue</ik-tag>
      <ik-tag color="purple">purple</ik-tag>
    </div>
    <h4 style="margin: '16px 0'">Custom:</h4>
    <div>
      <ik-tag color="#f50">#f50</ik-tag>
      <ik-tag color="#2db7f5">#2db7f5</ik-tag>
      <ik-tag color="#87d068">#87d068</ik-tag>
      <ik-tag color="#108ee9">#108ee9</ik-tag>
    </div>
  </div>
</template>
`
const controlCode = `
<template>
  <div>
    <template v-for="(tag, index) in tags">
      <ik-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
        <ik-tag :key="tag" :closable="index !== 0" :afterClose="() => handleClose(tag)">
          {{\`\${tag.slice(0, 20)}...\`}}
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
</template>
<script>
export default {
  data () {
    return {
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
`
const hotTagsCode = `
<template>
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
</template>
<script>
export default {
  data () {
    return {
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
`
const controlledCode = `
<template>
  <div>
    <ik-tag closable v-model="visible">
      Movies
    </ik-tag>
    <br />
    <ik-button size="small" @click="()=>{this.visible = !this.visible}">
      Toggle
    </ik-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      visible: true
    }
  }
}
</script>
`
export {
  basicCode,
  checkableCode,
  largeCode,
  colorfulCode,
  controlCode,
  hotTagsCode,
  controlledCode
}
