import CopyableIcon from './CopyableIcon'

const Category = {
  props: ['icons', 'title', 'newIcons', 'theme', 'isIk'],
  data () {
    return {
      justCopied: null
    }
  },
  methods: {
    onCopied (type, text) {
      this.$message.success(
        <span>
          <code class="copied-code">{text}</code> copied 🎉
        </span>
      )
      this.justCopied = type
      setTimeout(() => {
        this.justCopied = null
      }, 2000)
    }
  },
  render () {
    const { icons, title, theme, newIcons, isIk } = this.$props
    const items = icons.map(name => {
      let newTheme = theme === 'ikangIcon' ? '' : theme
      return (
        <CopyableIcon
          key={name}
          type={name}
          theme={newTheme}
          isNew={newIcons.indexOf(name) >= 0}
          justCopied={this.justCopied}
          onCopied={this.onCopied}
          isIk={isIk}
        />
      )
    })
    return (
      <div>
        <h3>{title}</h3>
        <ul class={'anticons-list'}>{items}</ul>
      </div>
    )
  }
}

export default Category
