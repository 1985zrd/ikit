export const basicCollapse = `
<template>
  <div>
    <ik-collapse v-model="activeKey">
      <ik-collapse-panel header="This is panel header 1" key="1">
        <p>{{text}}</p>
      </ik-collapse-panel>
      <ik-collapse-panel header="This is panel header 2" key="2" :disabled="false">
        <p>{{text}}</p>
      </ik-collapse-panel>
      <ik-collapse-panel header="This is panel header 3" key="3" disabled>
        <p>{{text}}</p>
      </ik-collapse-panel>
    </ik-collapse>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        text: 'A dog is a type of domesticated animal.Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.',
        activeKey: ['1'],
      };
    },
    watch: {
      activeKey(key) {
        console.log(key);
      },
    },
  };
</script>
`

export const accordionCollapse = `
<template>
  <div>
    <ik-collapse accordion>
      <ik-collapse-panel header="This is panel header 1" key="1">
        <p>{{text}}</p>
      </ik-collapse-panel>
      <ik-collapse-panel header="This is panel header 2" key="2" :disabled="false">
        <p>{{text}}</p>
      </ik-collapse-panel>
      <ik-collapse-panel header="This is panel header 3" key="3">
        <p>{{text}}</p>
      </ik-collapse-panel>
    </ik-collapse>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        text: 'A dog is a type of domesticated animal.Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.',
      };
    },
  };
</script>
`

export const nestedCollapse = `
<template>
<div>
  <ik-collapse @change="changeActivekey">
    <ik-collapse-panel header="This is panel header 1" key="1">
      <ik-collapse defaultActiveKey="4">
        <ik-collapse-panel header="This is panel nest panel" key="4">
          <p>{{text}}</p>
        </ik-collapse-panel>
      </ik-collapse>
    </ik-collapse-panel>
    <ik-collapse-panel header="This is panel header 2" key="2" :disabled="false">
      <p>{{text}}</p>
    </ik-collapse-panel>
    <ik-collapse-panel header="This is panel header 3" key="3">
      <p>{{text}}</p>
    </ik-collapse-panel>
  </ik-collapse>
</div>
</template>
<script>
export default {
  data() {
    return {
      text: 'A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.',
    };
  },
  methods: {
    changeActivekey(key) {
      console.log(key);
    },
  },
};
</script>
`

export const conciseCollapse = `
<template>
  <div>
    <ik-collapse defaultActiveKey="1" :bordered="false">
      <ik-collapse-panel header="This is panel header 1" key="1">
        <p>{{text}}</p>
      </ik-collapse-panel>
      <ik-collapse-panel header="This is panel header 2" key="2" :disabled="false">
        <p>{{text}}</p>
      </ik-collapse-panel>
      <ik-collapse-panel header="This is panel header 3" key="3">
        <p>{{text}}</p>
      </ik-collapse-panel>
    </ik-collapse>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        text: 'A dog is a type of domesticated animal.Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.',
      };
    },
  };
</script>
`

export const customCollapse = `
<template>
  <div>
    <ik-collapse defaultActiveKey="1" :bordered="false">
      <template v-slot:expandIcon="props">
        <ik-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
      </template>
      <ik-collapse-panel header="This is panel header 1" key="1" :style="customStyle">
        <p>{{text}}</p>
      </ik-collapse-panel>
      <ik-collapse-panel header="This is panel header 2" key="2" :style="customStyle">
        <p>{{text}}</p>
      </ik-collapse-panel>
      <ik-collapse-panel header="This is panel header 3" key="3" :style="customStyle">
        <p>{{text}}</p>
      </ik-collapse-panel>
    </ik-collapse>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        text: 'A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.',
        customStyle:
          'background: #f7f7f7;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden',
      };
    },
  };
</script>
`

export const hideArrowCollapse = `
<template>
  <div>
    <ik-collapse defaultActiveKey="1" @change="changeActivekey">
      <ik-collapse-panel header="This is panel header with arrow icon" key="1">
        <p>{{text}}</p>
      </ik-collapse-panel>
      <ik-collapse-panel header="This is panel header with no arrow icon" key="2" :showArrow="false">
        <p>{{text}}</p>
      </ik-collapse-panel>
    </ik-collapse>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        text: 'A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.',
      };
    },
    methods: {
      changeActivekey(key) {
        console.log(key);
      },
    },
  };
</script>
`

export const IconRightCollapse = `
<template>
  <div>
    <ik-collapse iconRight defaultActiveKey="1" @change="changeActivekey">
      <ik-collapse-panel header="This is panel header with arrow icon" key="1">
        <p>{{text}}</p>
      </ik-collapse-panel>
      <ik-collapse-panel header="This is panel header with no arrow icon" key="2">
        <p>{{text}}</p>
      </ik-collapse-panel>
    </ik-collapse>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        text: 'A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.',
      };
    },
    methods: {
      changeActivekey(key) {
        console.log(key);
      },
    },
  };
</script>
`
