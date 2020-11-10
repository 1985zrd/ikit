const basicCascaderCode = `
<template>
  <ik-cascader :options="options" @change="onChange" placeholder="Please select" />
</template>
<script>
  export default {
    data() {
      return {
        options: [
          {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
              {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                  {
                    value: 'xihu',
                    label: 'West Lake',
                  },
                ],
              },
            ],
          },
          {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
              {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                  {
                    value: 'zhonghuamen',
                    label: 'Zhong Hua Men',
                  },
                ],
              },
            ],
          },
        ],
      };
    },
    methods: {
      onChange(value) {
        console.log(value);
      },
    },
  };
</script>
`
const choiceChangeCascaderCode = `
<template>
<ik-cascader :options="options" @change="onChange" changeOnSelect />
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake',
                },
              ],
            },
          ],
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [
                {
                  value: 'zhonghuamen',
                  label: 'Zhong Hua Men',
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    onChange(value) {
      console.log(value);
    },
  },
};
</script>`
const customOptionsCascaderCode = `
<template>
<ik-cascader
  :options="options"
  :defaultValue="['zhejiang', 'hangzhou', 'xihu']"
  style="width: 100%"
>
  <template slot="displayRender" slot-scope="{labels, selectedOptions}">
    <span v-for="(label, index) in labels" :key="selectedOptions[index].value">
      <span v-if="index === labels.length - 1">
        {{label}} (<a @click="e => handleAreaClick(e, label, selectedOptions[index])"
          >{{selectedOptions[index].code}}</a
        >)
      </span>
      <span v-else @click="onChange">
        {{label}} /
      </span>
    </span>
  </template>
</ik-cascader>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake',
                  code: 752100,
                },
              ],
            },
          ],
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [
                {
                  value: 'zhonghuamen',
                  label: 'Zhong Hua Men',
                  code: 453400,
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    onChange(value) {
      console.log(value);
    },
    handleAreaClick(e, label, option) {
      e.stopPropagation();
      console.log('clicked', label, option);
    },
  },
};
</script>`
const customDisplayCascaderCode = `
<template>
<span>
  {{text}} &nbsp;
  <ik-cascader :options="options" @change="onChange">
    <a href="#">Change city</a>
  </ik-cascader>
</span>
</template>
<script>
export default {
  data() {
    return {
      text: 'Unselect',
      options: [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake',
                },
              ],
            },
          ],
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [
                {
                  value: 'zhonghuamen',
                  label: 'Zhong Hua Men',
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    onChange(value, selectedOptions) {
      this.text = selectedOptions.map(o => o.label).join(', ');
    },
  },
};
</script>`
const defaultCascaderCode = `
<template>
  <ik-cascader
    :options="options"
    @change="onChange"
    :defaultValue="['zhejiang', 'hangzhou', 'xihu']"
  />
</template>
<script>
  export default {
    data() {
      return {
        options: [
          {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
              {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                  {
                    value: 'xihu',
                    label: 'West Lake',
                  },
                ],
              },
            ],
          },
          {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
              {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                  {
                    value: 'zhonghuamen',
                    label: 'Zhong Hua Men',
                  },
                ],
              },
            ],
          },
        ],
      };
    },
    methods: {
      onChange(value) {
        console.log(value);
      },
    },
  };
</script>
`
const disableOptionCascaderCode = `
<template>
  <ik-cascader :options="options" @change="onChange" />
</template>
<script>
  export default {
    data() {
      return {
        options: [
          {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
              {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                  {
                    value: 'xihu',
                    label: 'West Lake',
                  },
                ],
              },
            ],
          },
          {
            value: 'jiangsu',
            label: 'Jiangsu',
            disabled: true,
            children: [
              {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                  {
                    value: 'zhonghuamen',
                    label: 'Zhong Hua Men',
                  },
                ],
              },
            ],
          },
        ],
      };
    },
    methods: {
      onChange(value) {
        console.log(value);
      },
    },
  };
</script>
`
const hoverCascaderCode = `
<template>
  <ik-cascader
    :options="options"
    :displayRender="displayRender"
    expandTrigger="hover"
    @change="onChange"
    placeholder="Please select"
  />
</template>
<script>
  export default {
    data() {
      return {
        options: [
          {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
              {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                  {
                    value: 'xihu',
                    label: 'West Lake',
                  },
                ],
              },
            ],
          },
          {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
              {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                  {
                    value: 'zhonghuamen',
                    label: 'Zhong Hua Men',
                  },
                ],
              },
            ],
          },
        ],
      };
    },
    methods: {
      onChange(value) {
        console.log(value);
      },
      displayRender({ labels }) {
        return labels[labels.length - 1];
      },
    },
  };
</script>

`
const loadOptionsLazilyCascaderCode = `
<template>
  <ik-cascader
    :options="options"
    @change="onChange"
    :loadData="loadData"
    placeholder="Please select"
    changeOnSelect
  />
</template>
<script>
  export default {
    data() {
      return {
        options: [
          {
            value: 'zhejiang',
            label: 'Zhejiang',
            isLeaf: false,
          },
          {
            value: 'jiangsu',
            label: 'Jiangsu',
            isLeaf: false,
          },
        ],
      };
    },
    methods: {
      onChange(value) {
        console.log(value);
      },
      loadData(selectedOptions) {
        const targetOption = selectedOptions[selectedOptions.length - 1];
        targetOption.loading = true;

        // load options lazily
        setTimeout(() => {
          targetOption.loading = false;
          targetOption.children = [
            {
              label: \`\${targetOption.label} Dynamic 1\`,
              value: 'dynamic1',
            },
            {
              label: \`\${targetOption.label} Dynamic 2\`,
              value: 'dynamic2',
            },
          ];
          this.options = [...this.options];
        }, 1000);
      },
    },
  };
</script>
`
const searchCascaderCode = `
<template>
  <ik-cascader
    :options="options"
    :showSearch="{filter}"
    @change="onChange"
    placeholder="Please select"
  />
</template>
<script>
  export default {
    data() {
      return {
        options: [
          {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
              {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                  {
                    value: 'xihu',
                    label: 'West Lake',
                  },
                  {
                    value: 'xiasha',
                    label: 'Xia Sha',
                    disabled: true,
                  },
                ],
              },
            ],
          },
          {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
              {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                  {
                    value: 'zhonghuamen',
                    label: 'Zhong Hua men',
                  },
                ],
              },
            ],
          },
        ],
      };
    },
    methods: {
      onChange(value, selectedOptions) {
        console.log(value, selectedOptions);
      },
      filter(inputValue, path) {
        return path.some(
          option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1,
        );
      },
    },
  };
</script>
`
const sizeCascaderCode = `
<template>
  <div>
    <ik-cascader size="large" :options="options" @change="onChange" /><br /><br />
    <ik-cascader :options="options" @change="onChange" /><br /><br />
    <ik-cascader size="small" :options="options" @change="onChange" /><br /><br />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        options: [
          {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
              {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                  {
                    value: 'xihu',
                    label: 'West Lake',
                  },
                ],
              },
            ],
          },
          {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
              {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                  {
                    value: 'zhonghuamen',
                    label: 'Zhong Hua Men',
                  },
                ],
              },
            ],
          },
        ],
      };
    },
    methods: {
      onChange(value) {
        console.log(value);
      },
    },
  };
</script>

`
const customFieldNamesCascaderCode = `
<template>
  <ik-cascader
    :fieldNames="{ label: 'name', value: 'code', children: 'items' }"
    :options="options"
    @change="onChange"
    placeholder="Please select"
  />
</template>
<script>
  const options = [
    {
      code: 'zhejiang',
      name: 'Zhejiang',
      items: [
        {
          code: 'hangzhou',
          name: 'Hangzhou',
          items: [
            {
              code: 'xihu',
              name: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      code: 'jiangsu',
      name: 'Jiangsu',
      items: [
        {
          code: 'nanjing',
          name: 'Nanjing',
          items: [
            {
              code: 'zhonghuamen',
              name: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];
  export default {
    data() {
      return {
        options,
      };
    },
    methods: {
      onChange(value) {
        console.log(value);
      },
    },
  };
</script>

`
const suffixCascaderCode = `
<template>
  <div>
    <ik-cascader
      style="margin-top: 1rem"
      :options="options"
      @change="onChange"
      placeholder="Please select"
    >
      <ik-icon type="smile" slot="suffixIcon" class="test" />
    </ik-cascader>
    <ik-cascader
      suffixIcon="ab"
      style="margin-top: 1rem"
      :options="options"
      @change="onChange"
      placeholder="Please select"
    />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        options: [
          {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
              {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                  {
                    value: 'xihu',
                    label: 'West Lake',
                  },
                ],
              },
            ],
          },
          {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
              {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                  {
                    value: 'zhonghuamen',
                    label: 'Zhong Hua Men',
                  },
                ],
              },
            ],
          },
        ],
      };
    },
    methods: {
      onChange(value) {
        console.log(value);
      },
    },
  };
</script>
`
const apiCascaderCode = `
<ik-cascader :options="options" @change="onChange" />
`
export {
  basicCascaderCode,
  choiceChangeCascaderCode,
  customOptionsCascaderCode,
  customDisplayCascaderCode,
  defaultCascaderCode,
  disableOptionCascaderCode,
  hoverCascaderCode,
  loadOptionsLazilyCascaderCode,
  searchCascaderCode,
  sizeCascaderCode,
  customFieldNamesCascaderCode,
  suffixCascaderCode,
  apiCascaderCode
}
