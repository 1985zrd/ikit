const basicPagingCode = `
<template>
  <ik-pagination v-model="current" :total="50" />
</template>
<script>
  export default {
    data() {
      return {
        current: 2,
      }
    }
  }
</script>
`
const morePagingCode = `
<template>
  <ik-pagination :defaultCurrent="6" :total="500" />
</template>
`
const changeTheNumberOfPageCode = `
<template>
<div>
  <ik-pagination
    showSizeChanger
    @showSizeChange="onShowSizeChange"
    :defaultCurrent="3"
    :total="500"
  />
  <br />
  <ik-pagination
    showSizeChanger
    :pageSize.sync="pageSize"
    @showSizeChange="onShowSizeChange"
    :total="500"
    v-model="current"
  />
</div>
</template>
<script>
export default {
  data() {
    return {
      pageSize: 20,
      current: 4,
    };
  },
  watch: {
    pageSize(val) {
      console.log('pageSize', val);
    },
    current(val) {
      console.log('current', val);
    },
  },
  methods: {
    onShowSizeChange(current, pageSize) {
      console.log(current, pageSize);
    },
  },
};
</script>
`

const customDropDownCode = `
<template>
<ik-pagination
  :pageSizeOptions="pageSizeOptions"
  :total="total"
  showSizeChanger
  :pageSize="pageSize"
  v-model="current"
  @showSizeChange="onShowSizeChange"
>
  <template slot="buildOptionText" slot-scope="props">
    <span v-if="props.value!=='50'">{{props.value}}条/页</span>
    <span v-if="props.value==='50'">全部</span>
  </template>
</ik-pagination>
</template>
<script>
export default {
  data() {
    return {
      pageSizeOptions: ['10', '20', '30', '40', '50'],
      current: 1,
      pageSize: 10,
      total: 50,
    };
  },
  methods: {
    onShowSizeChange(current, pageSize) {
      this.pageSize = pageSize;
    },
  },
};
</script>
`
const jumpPageCode = `
<template>
<ik-pagination showQuickJumper :defaultCurrent="2" :total="500" @change="onChange" />
</template>
<script>
export default {
  methods: {
    onChange(pageNumber) {
      console.log('Page: ', pageNumber);
    },
  },
};
</script>`

const miniVersionCode = `
<template>
<div id="components-pagination-demo-mini">
  <ik-pagination size="small" :total="50" />
  <ik-pagination size="small" :total="50" showSizeChanger showQuickJumper />
  <ik-pagination size="small" :total="50" :showTotal="total => \`
Total $ {
  total
}
items \`" />
</div>
</template>
<style scoped>
#components-pagination-demo-mini .ant-pagination:not(:last-child) {
  margin-bottom: 24px;
}
</style> `

const conciseVersionCode = `
<template>
<ik-pagination simple :defaultCurrent="2" :total="50" />
</template>`
const controlledVersionCode = `
<template>
<ik-pagination @change="onChange" :current="current" :total="50" />
</template>
<script>
export default {
  data() {
    return {
      current: 3,
    };
  },
  methods: {
    onChange(current) {
      this.current = current;
    },
  },
};
</script>
`
const totalCode = `
<template>
<div>
  <ik-pagination
    :total="85"
    :showTotal="total => \`
Total $ {
  total
}
items \`"
    :pageSize="20"
    :defaultCurrent="1"
  />
  <br />
  <ik-pagination
    :total="85"
    :showTotal="(total, range) => \`
$ {
  range[0]
} - $ {
  range[1]
} of $ {
  total
}
items \`"
    :pageSize="20"
    :defaultCurrent="1"
  />
</div>
</template>
`
const nextAndPreCode = `
<template>
<ik-pagination :total="500" :itemRender="itemRender" />
</template>
<script>
export default {
  methods: {
    itemRender(current, type, originalElement) {
      if (type === 'prev') {
        return <a>Previous</a>;
      } else if (type === 'next') {
        return <a>Next</a>;
      }
      return originalElement;
    },
  },
};
</script>
`

export {
  basicPagingCode,
  morePagingCode,
  changeTheNumberOfPageCode,
  customDropDownCode,
  jumpPageCode,
  miniVersionCode,
  conciseVersionCode,
  controlledVersionCode,
  totalCode,
  nextAndPreCode
}
