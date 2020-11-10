<template>
  <div class="skeloton">
    <ik-tooltip placement="topLeft">
      <template slot="title">
        <span>prompt text</span>
      </template>
      <ik-button>点我</ik-button>
    </ik-tooltip>
    <ik-tooltip placement="bottom">
      <template slot="title">
        <span>prompt text</span>
      </template>
      <ik-button>点我</ik-button>
    </ik-tooltip>
    <ik-badge>
      <ik-icon slot="count" type="clock-circle" style="color: #f5222d" />
      <ik-button>badge</ik-button>
    </ik-badge>
    <ik-badge :count="num" title="Custom hover text">
      <ik-button>badge</ik-button>
    </ik-badge>
    <ik-badge dot>
      <ik-button>badge</ik-button>
    </ik-badge>
    <ik-badge status="success" text="Success" />

    <ik-slider range :defaultValue="[20, 50]"></ik-slider>
    <div style="float:left;height: 300px;marginLeft: 70px">
      <ik-slider vertical range :step="10" :defaultValue="[20, 50]" />
    </div>
    <div style="float:left;height: 300px;marginLeft: 70px">
      <ik-slider vertical range :marks="marks" :defaultValue="[26, 37]" />
    </div>

    <h2>skeleton page</h2>
    <ik-skeleton type="code"></ik-skeleton>
    <ik-skeleton type="list"></ik-skeleton>
    <ik-skeleton>
      <!-- <rect x="0" y="15" rx="4" ry="4" width="600" height="100" />
      <polygon points="0 120,100 160,100 220,0 220" />
      <polygon points="100,10 40,180 190,60 10,60 160,180" />
      <template slot="content">
        <h3>title</h3>
        <p>hahaha1111111</p>
      </template> -->
    </ik-skeleton>
    <ik-skeleton>
      <rect x="145" y="19" rx="4" ry="400" width="374" height="19" />
      <rect x="145" y="56" rx="3" ry="3" width="577" height="26" />
      <rect x="37" y="180" rx="3" ry="3" width="763" height="13" />
      <rect x="40" y="237" rx="3" ry="3" width="916" height="18" />
      <rect x="40" y="290" rx="3" ry="3" width="909" height="18" />
      <circle cx="66" cy="64" r="63" />
    </ik-skeleton>
    <!-- <ContentLoader
      :height='160'
      :width='1000'
      :speed='2'
      :primaryColor='"#f3f3f3"'
      :secondaryColor='"#000"'
    >
      <rect x="70" y="15" rx="4" ry="4" width="117" height="6" />
      <rect x="70" y="35" rx="3" ry="3" width="85" height="6" />
      <rect x="0" y="80" rx="3" ry="3" width="350" height="6" />
      <rect x="0" y="100" rx="3" ry="3" width="380" height="6" />
      <rect x="0" y="120" rx="3" ry="3" width="201" height="6" />
      <circle cx="30" cy="30" r="30" />
    </ContentLoader> -->
  </div>
</template>
<script>
// import { ContentLoader } from 'vue-content-loader'
export default {
  components: {
    // ContentLoader
  },
  data () {
    return {
      num: -1,
      marks: {
        0: '0°C',
        26: '26°C',
        37: '37°C',
        100: {
          style: {
            color: '#f50'
          },
          label: <strong>100°C</strong>
        }
      }
    }
  },
  mounted () {
    // setInterval(() => {
    //   this.num--
    // }, 1000)
  }
}
</script>
<style lang="scss" scoped>
.skeloton {
  // width: 400px;
}
.badge-example {
  display: block;
  border: 1px solid #eee;
  width: 100px;
  height: 100px;
}
</style>
