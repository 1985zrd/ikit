export const basic = `
<template>
  <div>
    <ik-statistic title="Active Users" :value="112893" style="margin-right: 50px" />
    <ik-statistic title="Account Balance (CNY)" :precision="2" :value="112893" />
  </div>
</template>
`

export const unit = `
<template>
  <ik-row :gutter="16">
    <ik-col :span="12">
      <ik-statistic title="Feedback" :value="1128" style="margin-right: 50px">
        <template v-slot:suffix>
          <ik-icon type="like" />
        </template>
      </ik-statistic>
    </ik-col>
    <ik-col :span="12">
      <ik-statistic title="Unmerged" :value="93" valueClass="demo-class">
        <template v-slot:suffix>
          <span> / 100</span>
        </template>
      </ik-statistic>
    </ik-col>
  </ik-row>
</template>
`

export const useInCard = `
<template>
  <div style="background: #ECECEC; padding: 30px">
    <ik-row :gutter="16">
      <ik-col :span="12">
        <ik-card>
          <ik-statistic
            title="Feedback"
            :value="11.28"
            :precision="2"
            suffix="%"
            :valueStyle="{color: '#3f8600'}"
            style="margin-right: 50px"
          >
            <template v-slot:prefix>
              <ik-icon type="arrow-up" />
            </template>
          </ik-statistic>
        </ik-card>
      </ik-col>
      <ik-col :span="12">
        <ik-card>
          <ik-statistic
            title="Idle"
            :value="9.3"
            :precision="2"
            suffix="%"
            valueClass="demo-class"
            :valueStyle="{ color: '#cf1322' }"
          >
            <template v-slot:prefix>
              <ik-icon type="arrow-down" />
            </template>
          </ik-statistic>
        </ik-card>
      </ik-col>
    </ik-row>
  </div>
</template>
`

export const countdown = `
<template>
  <div style="background: #ECECEC; padding: 30px">
    <ik-row :gutter="16">
      <ik-col :span="12">
        <ik-card>
          <ik-statistic
            title="Feedback"
            :value="11.28"
            :precision="2"
            suffix="%"
            :valueStyle="{color: '#3f8600'}"
            style="margin-right: 50px"
          >
            <template v-slot:prefix>
              <ik-icon type="arrow-up" />
            </template>
          </ik-statistic>
        </ik-card>
      </ik-col>
      <ik-col :span="12">
        <ik-card>
          <ik-statistic
            title="Idle"
            :value="9.3"
            :precision="2"
            suffix="%"
            valueClass="demo-class"
            :valueStyle="{ color: '#cf1322' }"
          >
            <template v-slot:prefix>
              <ik-icon type="arrow-down" />
            </template>
          </ik-statistic>
        </ik-card>
      </ik-col>
    </ik-row>
  </div>
</template>
`
