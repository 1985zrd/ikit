import manifest from './manifest'
import Category from './Category'
import { FilledIcon, OutlinedIcon, TwoToneIcon } from './themeIcons'
import { categories } from './fields'
import './index.scss'

const IconDisplay = {
  cagetories: categories,
  newIconNames: [
    // direction
    'border-bottom',
    'border-horizontal',
    'border-inner',
    'border-outter',
    'border-left',
    'border-right',
    'border-top',
    'border-verticle',
    'pic-center',
    'pic-left',
    'pic-right',
    'radius-bottomleft',
    'radius-bottomright',
    'radius-upleft',
    'radius-upleft',
    'fullscreen',
    'fullscreen-exit',
    // suggestion
    'issues-close',
    'stop',

    // edit
    'scissor',
    'snippets',
    'diff',
    'highlight',
    'align-center',
    'align-left',
    'align-right',
    'bg-colors',
    'bold',
    'italic',
    'underline',
    'redo',
    'undo',
    'zoom-in',
    'zoom-out',
    'font-colors',
    'font-size',
    'line-height',
    'colum-height',
    'colum-width',
    'dash',
    'small-dash',
    'sort-ascending',
    'sort-descending',
    'drag',
    'ordered-list',
    'radius-setting',

    // data
    'radar-chart',
    'heat-map',
    'fall',
    'rise',
    'stock',
    'box-plot',
    'fund',
    'sliders',

    // other
    'alert',
    'audit',
    'batch-folding',
    'branches',
    'build',
    'border',
    'crown',
    'experiment',
    'fire',
    'money-collect',
    'property-safety',
    'read',
    'reconciliation',
    'rest',
    'security-scan',
    'insurance',
    'interation',
    'safety-certificate',
    'project',
    'thunderbolt',
    'block',
    'cluster',
    'deployment-unit',
    'dollar',
    'euro',
    'pound',
    'file-done',
    'file-exclamation',
    'file-protect',
    'file-search',
    'file-sync',
    'gateway',
    'gold',
    'robot',
    'strikethrough',
    'shopping',

    // logo
    'alibaba',
    'yahoo'
  ],

  themeTypeMapper: {
    filled: 'fill',
    outlined: 'outline',
    twoTone: 'twotone',
    ikangIcon: 'ikangIcon'
  },
  data () {
    return {
      theme: 'ikangIcon'
    }
  },
  methods: {
    getComputedDisplayList () {
      return Object.keys(IconDisplay.cagetories)
        .map(category => ({
          category,
          icons: IconDisplay.cagetories[category].filter(
            name => manifest[IconDisplay.themeTypeMapper[this.theme]].indexOf(name) !== -1
          )
        }))
        .filter(({ icons }) => Boolean(icons.length))
    },

    handleChangeTheme (e) {
      this.theme = e.target.value
    },

    renderCategories (list) {
      return list.map(({ category, icons }) => {
        return (
          <Category
            key={category}
            title={category}
            icons={icons}
            theme={this.theme}
            newIcons={IconDisplay.newIconNames}
            isIk={this.theme === 'ikangIcon'}
          />
        )
      })
    }
  },

  render () {
    const list = this.getComputedDisplayList()
    return (
      <div>
        <h3>选择图标主题风格</h3>
        <ik-radio-group value={this.theme} onChange={this.handleChangeTheme}>
          <ik-radio-button value="ikangIcon">
            <ik-icon type="iconrate" isIk/> ikang专属图标
          </ik-radio-button>
          <ik-radio-button value="outlined">
            <ik-icon component={OutlinedIcon} /> 线框风格
          </ik-radio-button>
          <ik-radio-button value="filled">
            <ik-icon component={FilledIcon} /> 实底风格
          </ik-radio-button>
          <ik-radio-button value="twoTone">
            <ik-icon component={TwoToneIcon} style /> 双色风格
          </ik-radio-button>
        </ik-radio-group>
        {this.renderCategories(list)}
      </div>
    )
  }
}

export default IconDisplay
