const basicSelectCode = `
<template>
  <div>
    <ik-select defaultValue="lucy" style="width: 120px" @change="handleChange">
      <ik-select-option value="jack">Jack</ik-select-option>
      <ik-select-option value="lucy">Lucy</ik-select-option>
      <ik-select-option value="disabled" disabled>Disabled</ik-select-option>
      <ik-select-option value="Yiminghe">yiminghe</ik-select-option>
    </ik-select>
    <ik-select defaultValue="lucy" style="width: 120px" disabled>
      <ik-select-option value="lucy">Lucy</ik-select-option>
    </ik-select>
    <ik-select defaultValue="lucy" style="width: 120px" loading>
      <ik-select-option value="lucy">Lucy</ik-select-option>
    </ik-select>
  </div>
</template>
<script>
  export default {
    methods: {
      handleChange(value) {
        console.log(\`selected \${value}\`);
      },
    },
  };
</script>
`
const sizeSelectCode = `
<template>
  <div>
    <ik-radio-group v-model="size">
      <ik-radio-button value="large">Large</ik-radio-button>
      <ik-radio-button value="default">Default</ik-radio-button>
      <ik-radio-button value="small">Small</ik-radio-button>
    </ik-radio-group>
    <br /><br />
    <ik-select :size="size" defaultValue="a1" style="width: 200px" @change="handleChange">
      <ik-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
        {{(i + 9).toString(36) + i}}
      </ik-select-option>
    </ik-select>
    <br />
    <ik-select
      mode="multiple"
      :size="size"
      placeholder="Please select"
      :defaultValue="['a1', 'b2']"
      style="width: 200px"
      @change="handleChange"
      @popupScroll="popupScroll"
    >
      <ik-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
        {{(i + 9).toString(36) + i}}
      </ik-select-option>
    </ik-select>
    <br />
    <ik-select
      mode="tags"
      :size="size"
      placeholder="Please select"
      :defaultValue="['a1', 'b2']"
      style="width: 200px"
      @change="handleChange"
    >
      <ik-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
        {{(i + 9).toString(36) + i}}
      </ik-select-option>
    </ik-select>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        size: 'default',
      };
    },
    methods: {
      handleChange(value) {
        console.log(\`Selected: \${value}\`);
      },
      popupScroll() {
        console.log('popupScroll');
      },
    },
  };
</script>
`
const tagSelectCode = `
<template>
  <ik-select mode="tags" style="width: 100%" @change="handleChange" placeholder="Tags Mode">
    <ik-select-option v-for="i in 25" :key="(i + 9).toString(36) + i"
      >{{(i + 9).toString(36) + i}}</ik-select-option
    >
  </ik-select>
</template>
<script>
  export default {
    methods: {
      handleChange(value) {
        console.log(\`selected \${value}\`);
      },
    },
  };
</script>
`
const automaticTokenizationSelectCode = `
<template>
  <ik-select mode="tags" style="width: 100%" :tokenSeparators="[',']" @change="handleChange">
    <ik-select-option v-for="i in 25" :key="(i + 9).toString(36) + i"
      >{{(i + 9).toString(36) + i}}</ik-select-option
    >
  </ik-select>
</template>
<script>
  export default {
    methods: {
      handleChange(value) {
        console.log(\`selected \${value}\`);
      },
    },
  };
</script>
`
const getValueOfSelectCode = `
<template>
  <ik-select
    labelInValue
    :defaultValue="{ key: 'lucy' }"
    style="width: 120px"
    @change="handleChange"
  >
    <ik-select-option value="jack">Jack (100)</ik-select-option>
    <ik-select-option value="lucy">Lucy (101)</ik-select-option>
  </ik-select>
</template>
<script>
  export default {
    methods: {
      handleChange(value) {
        console.log(value); // { key: "lucy", label: "Lucy (101)" }
      },
    },
  };
</script>
`
const multipleSelectCode = `
<template>
  <ik-select
    mode="multiple"
    :defaultValue="['a1', 'b2']"
    style="width: 100%"
    @change="handleChange"
    placeholder="Please select"
  >
    <ik-select-option v-for="i in 25" :key="(i + 9).toString(36) + i"
      >{{(i + 9).toString(36) + i}}</ik-select-option
    >
  </ik-select>
</template>
<script>
  export default {
    methods: {
      handleChange(value) {
        console.log(\`selected \${value}\`);
      },
    },
  };
</script>
`
const coordInateSelectCode = `
<template>
  <div>
    <ik-select :defaultValue="provinceData[0]" style="width: 120px" @change="handleProvinceChange">
      <ik-select-option v-for="province in provinceData" :key="province"
        >{{province}}</ik-select-option
      >
    </ik-select>
    <ik-select v-model="secondCity" style="width: 120px">
      <ik-select-option v-for="city in cities" :key="city">{{city}}</ik-select-option>
    </ik-select>
  </div>
</template>
<script>
  const provinceData = ['Zhejiang', 'Jiangsu'];
  const cityData = {
    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
  };
  export default {
    data() {
      return {
        provinceData,
        cityData,
        cities: cityData[provinceData[0]],
        secondCity: cityData[provinceData[0]][0],
      };
    },
    methods: {
      handleProvinceChange(value) {
        this.cities = cityData[value];
        this.secondCity = cityData[value][0];
      },
    },
  };
</script>
`
const optionGroupSelectCode = `
<template>
  <ik-select defaultValue="lucy" style="width: 200px" @change="handleChange">
    <ik-select-opt-group>
      <span slot="label"><ik-icon type="user" />Manager</span>
      <ik-select-option value="jack">Jack</ik-select-option>
      <ik-select-option value="lucy">Lucy</ik-select-option>
    </ik-select-opt-group>
    <ik-select-opt-group label="Engineer">
      <ik-select-option value="Yiminghe">yiminghe</ik-select-option>
    </ik-select-opt-group>
  </ik-select>
</template>
<script>
  export default {
    methods: {
      handleChange(value) {
        console.log(\`selected \${value}\`);
      },
    },
  };
</script>
`
const searchBoxSelectCode = `
<template>
  <ik-select
    showSearch
    :value="value"
    placeholder="input search text"
    style="width: 200px"
    :defaultActiveFirstOption="false"
    :showArrow="false"
    :filterOption="false"
    @search="handleSearch"
    @change="handleChange"
    :notFoundContent="null"
  >
    <ik-select-option v-for="d in data" :key="d.value">{{d.text}}</ik-select-option>
  </ik-select>
</template>
<script>
  import jsonp from 'fetch-jsonp';
  import querystring from 'querystring';

  let timeout;
  let currentValue;

  function fetch(value, callback) {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    currentValue = value;

    function fake() {
      const str = querystring.encode({
        code: 'utf-8',
        q: value,
      });
      jsonp(\`https://suggest.taobao.com/sug?\${str}\`)
        .then(response => response.json())
        .then(d => {
          if (currentValue === value) {
            const result = d.result;
            const data = [];
            result.forEach(r => {
              data.push({
                value: r[0],
                text: r[0],
              });
            });
            callback(data);
          }
        });
    }

    timeout = setTimeout(fake, 300);
  }
  export default {
    data() {
      return {
        data: [],
        value: undefined,
      };
    },
    methods: {
      handleSearch(value) {
        fetch(value, data => (this.data = data));
      },
      handleChange(value) {
        console.log(value);
        this.value = value;
        fetch(value, data => (this.data = data));
      },
    },
  };
</script>
`
const selectWithSearchSelectCode = `
<template>
  <ik-select
    showSearch
    placeholder="Select a person"
    optionFilterProp="children"
    style="width: 200px"
    @focus="handleFocus"
    @blur="handleBlur"
    @change="handleChange"
    :filterOption="filterOption"
  >
    <ik-select-option value="jack">Jack</ik-select-option>
    <ik-select-option value="lucy">Lucy</ik-select-option>
    <ik-select-option value="tom">Tom</ik-select-option>
  </ik-select>
</template>
<script>
  export default {
    methods: {
      handleChange(value) {
        console.log(\`selected \${value}\`);
      },
      handleBlur() {
        console.log('blur');
      },
      handleFocus() {
        console.log('focus');
      },
      filterOption(input, option) {
        return (
          option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
        );
      },
    },
  };
</script>
`
const searchAndSelectUsersCode = `
<template>
  <ik-select
    mode="multiple"
    labelInValue
    :value="value"
    placeholder="Select users"
    style="width: 100%"
    :filterOption="false"
    @search="fetchUser"
    @change="handleChange"
    :notFoundContent="fetching ? undefined : null"
  >
    <ik-spin v-if="fetching" slot="notFoundContent" size="small" />
    <ik-select-option v-for="d in data" :key="d.value">{{d.text}}</ik-select-option>
  </ik-select>
</template>
<script>
  import jsonp from 'fetch-jsonp';
  import querystring from 'querystring';
  import debounce from 'lodash/debounce';

  export default {
    data() {
      this.lastFetchId = 0;
      this.fetchUser = debounce(this.fetchUser, 800);
      return {
        data: [],
        value: [],
        fetching: false,
      };
    },
    methods: {
      fetchUser(value) {
        console.log('fetching user', value);
        this.lastFetchId += 1;
        const fetchId = this.lastFetchId;
        this.data = [];
        this.fetching = true;
        fetch('https://randomuser.me/api/?results=5')
          .then(response => response.json())
          .then(body => {
            if (fetchId !== this.lastFetchId) {
              // for fetch callback order
              return;
            }
            const data = body.results.map(user => ({
              text: \`\${user.name.first} \${user.name.last}\`,
              value: user.login.username,
            }));
            this.data = data;
            this.fetching = false;
          });
      },
      handleChange(value) {
        Object.assign(this, {
          value,
          data: [],
          fetching: false,
        });
      },
    },
  };
</script>
`
const suffixSelectCode = `
<template>
  <div>
    <ik-select defaultValue="lucy" style="width: 120px" @change="handleChange">
      <ik-icon slot="suffixIcon" type="smile" />
      <ik-select-option value="jack">Jack</ik-select-option>
      <ik-select-option value="lucy">Lucy</ik-select-option>
      <ik-select-option value="disabled" disabled>Disabled</ik-select-option>
      <ik-select-option value="Yiminghe">yiminghe</ik-select-option>
    </ik-select>
    <ik-select defaultValue="lucy" style="width: 120px" disabled>
      <ik-icon slot="suffixIcon" type="meh" />
      <ik-select-option value="lucy">Lucy</ik-select-option>
    </ik-select>
  </div>
</template>
<script>
  export default {
    methods: {
      handleChange(value) {
        console.log(\`selected \${value}\`);
      },
    },
  };
</script>

`
const hideAlreadySelectCode = `
<template>
  <ik-select
    mode="multiple"
    placeholder="Inserted are removed"
    :value="selectedItems"
    @change="handleChange"
    style="width: 100%"
  >
    <ik-select-option v-for="item in filteredOptions" :key="item" :value="item">
      {{item}}
    </ik-select-option>
  </ik-select>
</template>
<script>
  const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];
  export default {
    data() {
      return {
        selectedItems: [],
      };
    },
    computed: {
      filteredOptions() {
        return OPTIONS.filter(o => !this.selectedItems.includes(o));
      },
    },
    methods: {
      handleChange(selectedItems) {
        this.selectedItems = selectedItems;
      },
    },
  };
</script>
`
const customDropdownSelectCode = `
<template>
  <ik-select defaultValue="lucy" style="width: 120px">
    <div slot="dropdownRender" slot-scope="menu">
      <v-nodes :vnodes="menu" />
      <hr/>
      <div style="padding: 8px; cursor: pointer;"><ik-icon type="plus" /> Add item</div>
    </div>
    <ik-select-option value="jack">Jack</ik-select-option>
    <ik-select-option value="lucy">Lucy</ik-select-option>
  </ik-select>
</template>
<script>
  export default {
    data: () => ({ console: console }),
    components: {
      VNodes: {
        functional: true,
        render: (h, ctx) => ctx.props.vnodes,
      },
    },
  };
</script>
`
export {
  basicSelectCode,
  sizeSelectCode,
  tagSelectCode,
  automaticTokenizationSelectCode,
  getValueOfSelectCode,
  multipleSelectCode,
  coordInateSelectCode,
  optionGroupSelectCode,
  searchBoxSelectCode,
  selectWithSearchSelectCode,
  searchAndSelectUsersCode,
  suffixSelectCode,
  hideAlreadySelectCode,
  customDropdownSelectCode
}
