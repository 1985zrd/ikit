<template>
  <div class="header-bar">
    <ik-row>
      <ik-col :span="12">
        <img class="header-bar_logo"
             src="@/assets/img/ikitlogo.svg"
             alt="">
        <!-- <span class="header-bar_des">ikit-vue</span> -->
      </ik-col>
      <ik-col :offset="10"
              :span="2"
              style="text-align: right;">
        <ik-button class="setting"
                   @click="settingHandler"
                   type="link">
          <!-- <ik-icon type="setting" /> -->
          设置
        </ik-button>
      </ik-col>
      <ik-drawer title="主题色和Menu风格设置"
                placement="right"
                :closable="true"
                @close="onClose"
                :visible="visible">
        <div style="margin-bottom: 10px;">
          <ik-row>
            <ik-col :span="8">
              <h3>主题色</h3>
            </ik-col>
            <ik-col :offset="2"
                    :span="6">
              <ik-button @click="resetTheme"
                         size="small">重置</ik-button>
            </ik-col>
            <ik-col :offset="2"
                    :span="6">
              <ik-button @click="settingTheme"
                         size="small"
                         type="primary">确定</ik-button>
            </ik-col>
          </ik-row>
        </div>
        <sketch-picker v-model="colors"></sketch-picker>
        <h3 style="margin-top: 20px;">Menu风格</h3>
        <ik-radio-group v-model="theme">
          <ik-radio value="light">亮</ik-radio>
          <ik-radio value="dark">暗</ik-radio>
        </ik-radio-group>
      </ik-drawer>
    </ik-row>
  </div>
</template>
<script>
import { Sketch } from 'vue-color'
import { updateTheme } from '../../changeTheme/settingConfig'
export default {
  name: 'ikHeader',
  components: {
    'sketch-picker': Sketch
  },
  data () {
    return {
      visible: false,
      oldColor: ''
    }
  },
  mounted () {
    this.oldColor = this.colors
  },
  computed: {
    theme: {
      get: function () {
        return this.$store.state.theme
      },
      set: function (val) {
        this.$store.dispatch('SET_THEME', val)
      }
    },
    colors: {
      get: function () {
        return this.$store.state.themeColor
      },
      set: function (val) {
        this.$store.dispatch('SET_THEME_COLOR', typeof val === 'string' ? val : val.hex)
      }
    },
    defaultThemeColor: function () {
      return this.$store.state.defaultThemeColor
    }
  },
  watch: {
    visible: function (val) {
      if (!val && this.oldColor !== this.colors) {
        this.$store.dispatch('SET_THEME_COLOR', this.oldColor)
      }
    }
  },
  methods: {
    settingHandler () {
      this.visible = true
    },
    onClose () {
      this.visible = false
    },
    settingTheme () {
      this.setTheme(this.colors)
    },
    resetTheme () {
      this.setTheme(this.defaultThemeColor)
    },
    setTheme (color) {
      this.oldColor = color
      this.onClose()
      this.$store.dispatch('SET_THEME_COLOR', color)
      updateTheme({
        color: color,
        loading: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.header-bar {
  padding: 0 50px 0 26px;
  height: 64px;
  overflow: hidden;
  color: #fff;
  &_logo {
    float: left;
    margin-top: 11px;
    height: 42px;
  }
  // &_des {
  //   vertical-align: middle;
  //   margin-left: 30px;
  //   font-size: 22px;
  //   color: #fc7d3d;
  // }
  .setting {
    color: #424754 !important;
    text-align: right;
    &:hover {
      color: #1890ff !important;
    }
  }
}
</style>
