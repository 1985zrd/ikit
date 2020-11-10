<template>
  <codeBox :title="title"
           :description="description"
           :code="setData">
    <ik-skeleton
      :width="width"
      :height="height"
      :primaryColor="primaryColor"
      :secondaryColor="secondaryColor"
      :animate="animate"
      :data="shapeList"
      style="border: 1px solid #eee"
    ></ik-skeleton>
    <div style="padding: 20px">
      <ik-form layout="inline">
        <ik-form-item
          label="宽"
        >
          <ik-input-number v-model="width" @change="widthChange" />
        </ik-form-item>
        <ik-form-item
          label="高"
        >
          <ik-input-number v-model="height" @change="heightChange" />
        </ik-form-item>
        <ik-form-item
          label="primaryColor"
        >
          <ik-button :style="{background: primaryColor}" @click="primaryColorShowHandler"></ik-button>
        </ik-form-item>
        <ik-form-item
          label="secondaryColor"
        >
          <ik-button :style="{background: secondaryColor}" @click="secondaryColorShowHandler"></ik-button>
          <!-- <sketch-picker v-model="secondaryColor"></sketch-picker> -->
        </ik-form-item>
        <ik-form-item
          label="是否开启动画"
        >
          <ik-switch :defaultChecked="animate" @change="animateChange"></ik-switch>
        </ik-form-item>
      </ik-form>
      <ik-row align="middle" style="margin-top: 10px">
        <ik-col :span="24">
          <ik-select v-model="shape" style="width: 90px">
            <ik-select-option value="rect">矩形</ik-select-option>
            <ik-select-option value="circle">圆</ik-select-option>
            <ik-select-option value="polygon">多边形</ik-select-option>
          </ik-select>
          <ik-button @click="addShape" type="primary" style="margin-left: 10px">添加图形</ik-button>
          <ik-button style="margin-left: 10px"
            v-clipboard:copy="JSON.stringify(shapeList)"
            v-clipboard:success="onCopied"
          >复制数据</ik-button>
        </ik-col>
        <ik-col :span="3" class="shape-list">
          <h4>图形列表：</h4>
          <ik-radio-group v-model="currentShapeIndex">
            <ik-radio v-for="(item, index) in shapeList" :key="index" :value="index">图形{{ index + 1 }}-{{ item.type | shapeType }}
              <ik-icon @click="delShape(index)" type="iconclose" isIk/>
            </ik-radio>
          </ik-radio-group>
        </ik-col>
        <ik-col :span="8" :offset="2" class="current-shape">
          <h4>当前图形设置：</h4>
          <ik-row v-show="currentType === 'rect' || currentType === 'circle'">
            <ik-col :span="9">x轴位置：</ik-col>
            <ik-col :span="15">
              <ik-input-number v-model="currentShape.x"/>
            </ik-col>
          </ik-row>
          <ik-row v-show="currentType === 'rect' || currentType === 'circle'">
            <ik-col :span="9">y轴位置：</ik-col>
            <ik-col :span="15">
              <ik-input-number v-model="currentShape.y"/>
            </ik-col>
          </ik-row>
          <ik-row v-show="currentType === 'circle'">
            <ik-col :span="9">圆的半径：</ik-col>
            <ik-col :span="15">
              <ik-input-number v-model="currentShape.r"/>
            </ik-col>
          </ik-row>
          <ik-row v-show="currentType === 'rect'">
            <ik-col :span="9">宽：</ik-col>
            <ik-col :span="15">
              <ik-input-number v-model="currentShape.width"/>
            </ik-col>
          </ik-row>
          <ik-row v-show="currentType === 'rect'">
            <ik-col :span="9">高：</ik-col>
            <ik-col :span="15">
              <ik-input-number v-model="currentShape.height"/>
            </ik-col>
          </ik-row>
          <ik-row v-show="currentType === 'rect'">
            <ik-col :span="9">圆角：</ik-col>
            <ik-col :span="15">
              <ik-input-number v-model="currentShape.radius"/>
            </ik-col>
          </ik-row>
          <ik-row v-show="currentType === 'polygon'">
            <ik-col :span="9" >多边形坐标点：</ik-col>
            <ik-col :span="15">
              <ik-input v-model="currentShape.points" placeholder="格式：0 0, 100 100, 0 100"/>
            </ik-col>
          </ik-row>
        </ik-col>
      </ik-row>
      <ik-modal v-model="primaryColorShow" @ok="primaryColorOk">
        <sketch-picker v-model="primaryColorCopy"></sketch-picker>
      </ik-modal>
      <ik-modal v-model="secondaryColorShow" @ok="secondaryColorOk">
        <sketch-picker v-model="secondaryColorCopy"></sketch-picker>
      </ik-modal>
    </div>
  </codeBox>
</template>
<script>
import { Input } from '~/index'
import { setData } from '../code.js'
import { Sketch } from 'vue-color'
export default {
  name: 'setDataSkeleton',
  components: {
    'sketch-picker': Sketch
  },
  data () {
    return {
      title: '参数设置',
      description: '通过参数控制图形。如果用slot方式，可参考http://danilowoz.com/create-content-loader/',
      setData,
      width: 1000,
      height: 400,
      primaryColor: '#EAEDF1',
      secondaryColor: 'rgba(255, 255, 255, 0.3)',
      animate: true,
      primaryColorCopy: '',
      secondaryColorCopy: '',
      primaryColorShow: false,
      secondaryColorShow: false,
      shape: 'rect',
      shapeList: [
        {
          type: 'rect',
          'x': 0, // x轴坐标
          'y': 0, // y轴坐标
          'r': 100, // 圆的半径
          'width': 200, // 矩形的宽
          'height': 20, // 矩形的高
          'radius': 4, // 矩形圆角
          'points': '0 0, 100 0, 0 100' // 多边形的坐标点
        }
      ],
      currentShapeIndex: 0
    }
  },
  computed: {
    currentShape: function () {
      return this.shapeList[this.currentShapeIndex]
    },
    currentType: function () {
      return this.shapeList[this.currentShapeIndex].type
    }
  },
  methods: {
    widthChange (value) {
      this.width = value
    },
    heightChange (value) {
      this.height = value
    },
    animateChange (value) {
      this.animate = value
    },
    primaryColorShowHandler () {
      this.primaryColorShow = true
      this.primaryColorCopy = this.primaryColor
    },
    primaryColorOk () {
      this.primaryColor = typeof this.primaryColorCopy === 'string' ? this.primaryColorCopy : this.primaryColorCopy.hex
      this.primaryColorShow = false
    },
    secondaryColorShowHandler () {
      this.secondaryColorShow = true
      this.secondaryColorCopy = this.secondaryColor
    },
    secondaryColorOk () {
      this.secondaryColor = typeof this.secondaryColorCopy === 'string' ? this.secondaryColorCopy : this.secondaryColorCopy.hex
      this.secondaryColorShow = false
    },
    shapeIndexChange (value) {
      console.log(value)
    },
    addShape () {
      this.shapeList.push({
        type: this.shape,
        'x': 0, // x轴坐标
        'y': 0, // y轴坐标
        'r': 100, // 圆的半径
        'width': 200, // 矩形的宽
        'height': 20, // 矩形的高
        'radius': 4, // 矩形的圆角
        'points': '0 0, 100 0, 0 100' // 多边形的坐标点
      })
    },
    delShape (index) {
      if (this.shapeList.length === 1) {
        this.$message.info('如果不想通过data属性创建骨架屏，可以不设置data属性，通过slot创建。')
        return
      }
      this.shapeList.splice(index, 1)
    },
    onCopied () {
      this.$message.success(
        <span>
          复制成功 🎉
        </span>
      )
    }
  },
  filters: {
    shapeType: function (value) {
      let obj = {
        rect: '矩形',
        circle: '圆',
        polygon: '多边形'
      }
      return obj[value]
    }
  }
}
</script>
<style scoped lang="scss">
.select-color {
  display: block;
  width: 32px;
  height: 16px;
}
.vc-sketch {
  margin: 0 auto;
}
.shape-list label {
  margin-top: 10px;
}
.current-shape {
  line-height: 32px;
  .ant-row {
    margin-top: 10px;
  }
}
h4 {
  line-height: 32px;
}
.anticon {
  margin-left: 4px;
  cursor: pointer;
}
</style>
