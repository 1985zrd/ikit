const fromLinkageText = `
<template>
  <ik-form :form="form" @submit="handleSubmit">
    <ik-form-item label="Note" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <ik-input
        v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
      />
    </ik-form-item>
    <ik-form-item label="Gender" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <ik-select
        v-decorator="[
          'gender',
          { rules: [{ required: true, message: 'Please select your gender!' }] },
        ]"
        placeholder="Select a option and change input text above"
        @change="handleSelectChange"
      >
        <ik-select-option value="male">
          male
        </ik-select-option>
        <ik-select-option value="female">
          female
        </ik-select-option>
      </ik-select>
    </ik-form-item>
    <ik-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <ik-button type="primary" html-type="submit">
        Submit
      </ik-button>
    </ik-form-item>
  </ik-form>
</template>

<script>
export default {
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: \`Hi, \${value === 'male' ? 'man' : 'lady'}!\`,
      });
    },
  },
};
</script>
`
const basicDatePickerText = `
<template>
  <ik-form layout="inline" :form="form" @submit="handleSubmit">
    <ik-form-item :validate-status="userNameError() ? 'error' : ''" :help="userNameError() || ''">
      <ik-input
        v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] },
        ]"
        placeholder="Username"
      >
        <ik-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
      </ik-input>
    </ik-form-item>
    <ik-form-item :validate-status="passwordError() ? 'error' : ''" :help="passwordError() || ''">
      <ik-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
        type="password"
        placeholder="Password"
      >
        <ik-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
      </ik-input>
    </ik-form-item>
    <ik-form-item>
      <ik-button type="primary" html-type="submit" :disabled="hasErrors(form.getFieldsError())">
        Log in
      </ik-button>
    </ik-form-item>
  </ik-form>
</template>

<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
export default {
  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: 'horizontal_login' }),
    };
  },
  mounted() {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields();
    });
  },
  methods: {
    // Only show error after a field is touched.
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('userName') && getFieldError('userName');
    },
    // Only show error after a field is touched.
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('password') && getFieldError('password');
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
  },
};
</script>
`
const formItemLayouts = `
<template>
  <ik-form :form="form">
    <ik-form-item
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      label="Name"
    >
      <ik-input
        v-decorator="[
          'username',
          { rules: [{ required: true, message: 'Please input your name' }] },
        ]"
        placeholder="Please input your name"
      />
    </ik-form-item>
    <ik-form-item
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      label="Nickname"
    >
      <ik-input
        v-decorator="[
          'nickname',
          { rules: [{ required: checkNick, message: 'Please input your nickname' }] },
        ]"
        placeholder="Please input your nickname"
      />
    </ik-form-item>
    <ik-form-item :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol">
      <ik-checkbox :checked="checkNick" @change="handleChange">
        Nickname is required
      </ik-checkbox>
    </ik-form-item>
    <ik-form-item :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol">
      <ik-button type="primary" @click="check">
        Check
      </ik-button>
    </ik-form-item>
  </ik-form>
</template>

<script>
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};
export default {
  data() {
    return {
      checkNick: false,
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this, { name: 'dynamic_rule' }),
    };
  },
  methods: {
    check() {
      this.form.validateFields(err => {
        if (!err) {
          console.info('success');
        }
      });
    },
    handleChange(e) {
      this.checkNick = e.target.checked;
      this.$nextTick(() => {
        this.form.validateFields(['nickname'], { force: true });
      });
    },
  },
};
</script>
`
const formLayoutCode = `
<template>
  <div>
    <ik-form :layout="formLayout">
      <ik-form-item
        label="Form Layout"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <ik-radio-group default-value="horizontal" @change="handleFormLayoutChange">
          <ik-radio-button value="horizontal">
            Horizontal
          </ik-radio-button>
          <ik-radio-button value="vertical">
            Vertical
          </ik-radio-button>
          <ik-radio-button value="inline">
            Inline
          </ik-radio-button>
        </ik-radio-group>
      </ik-form-item>
      <ik-form-item
        label="Field A"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <ik-input placeholder="input placeholder" />
      </ik-form-item>
      <ik-form-item
        label="Field B"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <ik-input placeholder="input placeholder" />
      </ik-form-item>
      <ik-form-item :wrapper-col="buttonItemLayout.wrapperCol">
        <ik-button type="primary">
          Submit
        </ik-button>
      </ik-form-item>
    </ik-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLayout: 'horizontal',
    };
  },
  computed: {
    formItemLayout() {
      const { formLayout } = this;
      return formLayout === 'horizontal'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
        : {};
    },
    buttonItemLayout() {
      const { formLayout } = this;
      return formLayout === 'horizontal'
        ? {
            wrapperCol: { span: 14, offset: 4 },
          }
        : {};
    },
  },
  methods: {
    handleFormLayoutChange(e) {
      this.formLayout = e.target.value;
    },
  },
};
</script>
`
const customCheckFormCode = `
<template>
  <ik-form>
    <ik-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="Fail"
      validate-status="error"
      help="Should be combination of numbers & alphabets"
    >
      <ik-input id="error" placeholder="unavailable choice" />
    </ik-form-item>

    <ik-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="Warning"
      validate-status="warning"
    >
      <ik-input id="warning" placeholder="Warning" />
    </ik-form-item>

    <ik-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="Validating"
      has-feedback
      validate-status="validating"
      help="The information is being validated..."
    >
      <ik-input id="validating" placeholder="I'm the content is being validated" />
    </ik-form-item>

    <ik-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="Success"
      has-feedback
      validate-status="success"
    >
      <ik-input id="success" placeholder="I'm the content" />
    </ik-form-item>

    <ik-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="Warning"
      has-feedback
      validate-status="warning"
    >
      <ik-input id="warning2" placeholder="Warning" />
    </ik-form-item>

    <ik-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="Fail"
      has-feedback
      validate-status="error"
      help="Should be combination of numbers & alphabets"
    >
      <ik-input id="error2" placeholder="unavailable choice" />
    </ik-form-item>

    <ik-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="Success"
      has-feedback
      validate-status="success"
    >
      <ik-date-picker style="width: 100%" />
    </ik-form-item>

    <ik-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="Warning"
      has-feedback
      validate-status="warning"
    >
      <a-time-picker style="width: 100%" />
    </ik-form-item>

    <ik-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="Error"
      has-feedback
      validate-status="error"
    >
      <ik-select default-value="1">
        <ik-select-option value="1">
          Option 1
        </ik-select-option>
        <ik-select-option value="2">
          Option 2
        </ik-select-option>
        <ik-select-option value="3">
          Option 3
        </ik-select-option>
      </ik-select>
    </ik-form-item>

    <ik-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="Validating"
      has-feedback
      validate-status="validating"
      help="The information is being validated..."
    >
      <ik-cascader :default-value="['1']" :options="[]" />
    </ik-form-item>

    <ik-form-item
      label="inline"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      style="margin-bottom:0;"
    >
      <ik-form-item
        validate-status="error"
        help="Please select the correct date"
        :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }"
      >
        <ik-date-picker style="width: 100%" />
      </ik-form-item>
      <span :style="{ display: 'inline-block', width: '24px', textAlign: 'center' }">
        -
      </span>
      <ik-form-item :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
        <ik-date-picker style="width: 100%" />
      </ik-form-item>
    </ik-form-item>

    <ik-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="Success"
      has-feedback
      validate-status="success"
    >
      <ik-input-number style="width: 100%" />
    </ik-form-item>
  </ik-form>
</template>
<script>
export default {
  data() {
    return {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };
  },
};
</script>
`
const processFormDataYourselfFormCode = `
<template>
  <ik-form>
    <ik-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="Prime between 8 & 12"
      :validate-status="number.validateStatus"
      :help="number.errorMsg || tips"
    >
      <ik-input-number :min="8" :max="12" :value="number.value" @change="handleNumberChange" />
    </ik-form-item>
  </ik-form>
</template>
<script>
function validatePrimeNumber(number) {
  if (number === 11) {
    return {
      validateStatus: 'success',
      errorMsg: null,
    };
  }
  return {
    validateStatus: 'error',
    errorMsg: 'The prime between 8 and 12 is 11!',
  };
}
export default {
  data() {
    return {
      labelCol: { span: 7 },
      wrapperCol: { span: 12 },
      number: {
        value: 11,
      },
      tips:
        'A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.',
    };
  },
  methods: {
    handleNumberChange(value) {
      this.number = {
        ...validatePrimeNumber(value),
        value,
      };
    },
  },
};
</script>
`
const searchFormCode = `
<template>
  <div id="components-form-demo-advanced-search">
    <ik-form class="ant-advanced-search-form" :form="form" @submit="handleSearch">
      <ik-row :gutter="24">
        <ik-col
          v-for="i in 10"
          :key="i"
          :span="8"
          :style="{ display: i < count ? 'block' : 'none' }"
        >
          <ik-form-item :label="\`Field \${i}\`">
            <ik-input
              v-decorator="[
                \`field-\${i}\`,
                {
                  rules: [
                    {
                      required: true,
                      message: 'Input something!',
                    },
                  ],
                },
              ]"
              placeholder="placeholder"
            />
          </ik-form-item>
        </ik-col>
      </ik-row>
      <ik-row>
        <ik-col :span="24" :style="{ textAlign: 'right' }">
          <ik-button type="primary" html-type="submit">
            Search
          </ik-button>
          <ik-button :style="{ marginLeft: '8px' }" @click="handleReset">
            Clear
          </ik-button>
          <a :style="{ marginLeft: '8px', fontSize: '12px' }" @click="toggle">
            Collapse <ik-icon :type="expand ? 'up' : 'down'" />
          </a>
        </ik-col>
      </ik-row>
    </ik-form>
    <div class="search-result-list">
      Search Result List
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      expand: false,
      form: this.$form.createForm(this, { name: 'advanced_search' }),
    };
  },
  computed: {
    count() {
      return this.expand ? 11 : 7;
    },
  },
  methods: {
    handleSearch(e) {
      e.preventDefault();
      this.form.validateFields((error, values) => {
        console.log('error', error);
        console.log('Received values of form: ', values);
      });
    },

    handleReset() {
      this.form.resetFields();
    },

    toggle() {
      this.expand = !this.expand;
    },
  },
};
</script>
<style>
.ant-advanced-search-form {
  padding: 24px;
  background: #fbfbfb;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
}

.ant-advanced-search-form .ant-form-item {
  display: flex;
}

.ant-advanced-search-form .ant-form-item-control-wrapper {
  flex: 1;
}

#components-form-demo-advanced-search .ant-form {
  max-width: none;
}
#components-form-demo-advanced-search .search-result-list {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}
</style>
`
const customFormCode = `
<template>
  <ik-form layout="inline" :form="form" @submit="handleSubmit">
    <ik-form-item label="Price">
      <price-input
        v-decorator="[
          'price',
          {
            initialValue: { number: 0, currency: 'rmb' },
            rules: [{ validator: checkPrice }],
          },
        ]"
      />
    </ik-form-item>
    <ik-form-item>
      <ik-button type="primary" html-type="submit">
        Submit
      </ik-button>
    </ik-form-item>
  </ik-form>
</template>

<script>
const hasProp = (instance, prop) => {
  const $options = instance.$options || {};
  const propsData = $options.propsData || {};
  return prop in propsData;
};
const PriceInput = {
  props: ['value'],
  render (h) {
    return (
      <span>
        <ik-input
          type='text'
          value={this.number}
          onChange={this.handleNumberChange}
          style="width: 63%; margin-right: 2%;"
        />
        <ik-select
          value={this.currency}
          style="width: 32%"
          onChange={this.handleCurrencyChange}
        >
          <ik-select-option value='rmb'>RMB</ik-select-option>
          <ik-select-option value='dollar'>Dollar</ik-select-option>
        </ik-select>
      </span>
    )
  },
  data () {
    const value = this.value || {}
    return {
      number: value.number || 0,
      currency: value.currency || 'rmb'
    }
  },
  watch: {
    value (val = {}) {
      this.number = val.number || 0
      this.currency = val.currency || 'rmb'
    }
  },
  methods: {
    handleNumberChange (e) {
      const number = parseInt(e.target.value || 0, 10)
      if (isNaN(number)) {
        return
      }
      if (!hasProp(this, 'value')) {
        this.number = number
      }
      this.triggerChange({ number })
    },
    handleCurrencyChange (currency) {
      if (!hasProp(this, 'value')) {
        this.currency = currency
      }
      this.triggerChange({ currency })
    },
    triggerChange (changedValue) {
      // Should provide an event to pass value to Form.
      this.$emit('change', Object.assign({}, this.$data, changedValue))
    }
  }
}

export default {
  components: {
    PriceInput,
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'customized_form_controls' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    checkPrice(rule, value, callback) {
      if (value.number > 0) {
        callback();
        return;
      }
      callback('Price must greater than zero!');
    },
  },
};
</script>
`
const dynamicFormCode = `
<template>
  <ik-form :form="form" @submit="handleSubmit">
    <ik-form-item
      v-for="(k, index) in form.getFieldValue('keys')"
      :key="k"
      v-bind="index === 0 ? formItemLayout : formItemLayoutWithOutLabel"
      :label="index === 0 ? 'Passengers' : ''"
      :required="false"
    >
      <ik-input
        v-decorator="[
         \`names[\${k}]\`,
          {
            validateTrigger: ['change', 'blur'],
            rules: [
              {
                required: true,
                whitespace: true,
                message: 'Please input passenger\\'s name or delete this field.',
              },
            ],
          },
        ]"
        placeholder="passenger name"
        style="width: 60%; margin-right: 8px"
      />
      <ik-icon
        v-if="form.getFieldValue('keys').length > 1"
        class="dynamic-delete-button"
        type="minus-circle-o"
        :disabled="form.getFieldValue('keys').length === 1"
        @click="() => remove(k)"
      />
    </ik-form-item>
    <ik-form-item v-bind="formItemLayoutWithOutLabel">
      <ik-button type="dashed" style="width: 60%" @click="add">
        <ik-icon type="plus" /> Add field
      </ik-button>
    </ik-form-item>
    <ik-form-item v-bind="formItemLayoutWithOutLabel">
      <ik-button type="primary" html-type="submit">
        Submit
      </ik-button>
    </ik-form-item>
  </ik-form>
</template>

<script>
let id = 0;
export default {
  data() {
    return {
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 4 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 20 },
        },
      },
      formItemLayoutWithOutLabel: {
        wrapperCol: {
          xs: { span: 24, offset: 0 },
          sm: { span: 20, offset: 4 },
        },
      },
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'dynamic_form_item' });
    this.form.getFieldDecorator('keys', { initialValue: [], preserve: true });
  },
  methods: {
    remove(k) {
      const { form } = this;
      // can use data-binding to get
      const keys = form.getFieldValue('keys');
      // We need at least one passenger
      if (keys.length === 1) {
        return;
      }

      // can use data-binding to set
      form.setFieldsValue({
        keys: keys.filter(key => key !== k),
      });
    },

    add() {
      const { form } = this;
      // can use data-binding to get
      const keys = form.getFieldValue('keys');
      const nextKeys = keys.concat(id++);
      // can use data-binding to set
      // important! notify form to detect changes
      form.setFieldsValue({
        keys: nextKeys,
      });
    },

    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
  },
};
</script>
<style>
.dynamic-delete-button {
  cursor: pointer;
  position: relative;
  top: 4px;
  font-size: 24px;
  color: #999;
  transition: all 0.3s;
}
.dynamic-delete-button:hover {
  color: #777;
}
.dynamic-delete-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
`
const popUpNewFormCode = `
<template>
  <div>
    <ik-button type="primary" @click="showModal">
      New Collection
    </ik-button>
    <collection-create-form
      ref="collectionForm"
      :visible="visible"
      @cancel="handleCancel"
      @create="handleCreate"
    />
  </div>
</template>

<script>
const CollectionCreateForm = {
  props: ['visible'],
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'form_in_modal' });
  },
  render () {
    return (
      <ik-modal
        visible={this.visible}
        title='Create a new collection'
        okText='Create'
        onCancel={() => { this.$emit('cancel') }}
        onOk={() => { this.$emit('create') }}
      >
        <ik-form layout='vertical' form={this.form}>
          <ik-form-item label='Title'>
            <ik-input
              v-decorator={[
                'title',
                {
                  rules: [{ required: true, message: 'Please input the title of collection!' }]
                }
              ]}
            />
          </ik-form-item>
          <ik-form-item label='Description'>
            <ik-input
              type='textarea'
              v-decorator={['description']}
            />
          </ik-form-item>
          <ik-form-item class='collection-create-form_last-form-item'>
            <ik-radio-group
              v-decorator={[
                'modifier',
                {
                  initialValue: 'private'
                }
              ]}
            >
              <ik-radio value='public'>Public</ik-radio>
              <ik-radio value='private'>Private</ik-radio>
            </ik-radio-group>
          </ik-form-item>
        </ik-form>
      </ik-modal>
    )
  }
};

export default {
  components: { CollectionCreateForm },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleCancel() {
      this.visible = false;
    },
    handleCreate() {
      const form = this.$refs.collectionForm.form;
      form.validateFields((err, values) => {
        if (err) {
          return;
        }
        console.log('Received values of form: ', values);
        form.resetFields();
        this.visible = false;
      });
    },
  },
};
</script>
`
const dataStorageFormCode = `
<template>
  <div id="components-form-demo-global-state">
    <customized-form :username="fields.username" @change="handleFormChange" />
    <pre class="language-bash">
      {{ JSON.stringify(fields, null, 2) }}
    </pre>
  </div>
</template>

<script>
const CustomizedForm = {
  props: ['username'],
  render () {
    return (
      <ik-form layout='inline' form={this.form}>
        <ik-form-item label='Username'>
          <ik-input
            v-decorator={[
              'username',
              {
                rules: [{ required: true, message: 'Username is required!' }]
              }
            ]}
          />
        </ik-form-item>
      </ik-form>
    )
  },
  created() {
    this.form = this.$form.createForm(this, {
      name: 'global_state',
      onFieldsChange: (_, changedFields) => {
        this.$emit('change', changedFields);
      },
      mapPropsToFields: () => {
        return {
          username: this.$form.createFormField({
            ...this.username,
            value: this.username.value,
          }),
        };
      },
      onValuesChange(_, values) {
        console.log(values);
      },
    });
  },
  watch: {
    username() {
      this.form.updateFields({
        username: this.$form.createFormField({
          ...this.username,
          value: this.username.value,
        }),
      });
    },
  },
};

export default {
  components: {
    CustomizedForm,
  },
  data() {
    return {
      fields: {
        username: {
          value: 'benjycui',
        },
      },
    };
  },
  methods: {
    handleFormChange(changedFields) {
      console.log('changedFields', changedFields);
      this.fields = { ...this.fields, ...changedFields };
    },
  },
};
</script>
<style>
#components-form-demo-global-state .language-bash {
  max-width: 400px;
  border-radius: 6px;
  margin-top: 24px;
}
</style>
`
const dataStorageVuxFormCode = `
<template>
  <div id="components-form-demo-vuex">
    <ik-form :form="form" @submit="handleSubmit">
      <ik-form-item label="Username">
        <ik-input
          v-decorator="[
            'username',
            {
              rules: [{ required: true, message: 'Username is required!' }],
            },
          ]"
        />
      </ik-form-item>
      <ik-button type="primary" html-type="submit">
        Submit
      </ik-button>
    </ik-form>
  </div>
</template>

<script>
export default {
  computed: {
    username() {
      return this.$store.state.username;
    },
  },
  watch: {
    username(val) {
      console.log('this.$store.state.username: ', val);
      this.form.setFieldsValue({ username: val });
    },
  },
  created() {
    this.form = this.$form.createForm(this, {
      onFieldsChange: (_, changedFields) => {
        this.$emit('change', changedFields);
      },
      mapPropsToFields: () => {
        return {
          username: this.$form.createFormField({
            value: this.username,
          }),
        };
      },
      onValuesChange: (_, values) => {
        console.log(values);
        // Synchronize to vuex store in real time
        // this.$store.commit('update', values)
      },
    });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          this.$store.commit('update', values);
        }
      });
    },
  },
};
</script>
<style>
#components-form-demo-vuex .language-bash {
  max-width: 400px;
  border-radius: 6px;
  margin-top: 24px;
}
</style>
`
const loginBoxFormCode = `
<template>
  <ik-form
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
    @submit="handleSubmit"
  >
    <ik-form-item>
      <ik-input
        v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] },
        ]"
        placeholder="Username"
      >
        <ik-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
      </ik-input>
    </ik-form-item>
    <ik-form-item>
      <ik-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
        type="password"
        placeholder="Password"
      >
        <ik-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </ik-input>
    </ik-form-item>
    <ik-form-item>
      <ik-checkbox
        v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
      >
        Remember me
      </ik-checkbox>
      <a class="login-form-forgot" href="">
        Forgot password
      </a>
      <ik-button type="primary" html-type="submit" class="login-form-button">
        Log in
      </ik-button>
      Or
      <a href="">
        register now!
      </a>
    </ik-form-item>
  </ik-form>
</template>

<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
  },
};
</script>
<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
`
const registerNewUserCode = `
<template>
  <ik-form :form="form" @submit="handleSubmit">
    <ik-form-item v-bind="formItemLayout" label="E-mail">
      <ik-input
        v-decorator="[
          'email',
          {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          },
        ]"
      />
    </ik-form-item>
    <ik-form-item v-bind="formItemLayout" label="Password">
      <ik-input
        v-decorator="[
          'password',
          {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                validator: validateToNextPassword,
              },
            ],
          },
        ]"
        type="password"
      />
    </ik-form-item>
    <ik-form-item v-bind="formItemLayout" label="Confirm Password">
      <ik-input
        v-decorator="[
          'confirm',
          {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: compareToFirstPassword,
              },
            ],
          },
        ]"
        type="password"
        @blur="handleConfirmBlur"
      />
    </ik-form-item>
    <ik-form-item v-bind="formItemLayout">
      <span slot="label">
        Nickname&nbsp;
        <ik-tooltip title="What do you want others to call you?">
          <ik-icon type="question-circle-o" />
        </ik-tooltip>
      </span>
      <ik-input
        v-decorator="[
          'nickname',
          {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          },
        ]"
      />
    </ik-form-item>
    <ik-form-item v-bind="formItemLayout" label="Habitual Residence">
      <ik-cascader
        v-decorator="[
          'residence',
          {
            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
            rules: [
              { type: 'array', required: true, message: 'Please select your habitual residence!' },
            ],
          },
        ]"
        :options="residences"
      />
    </ik-form-item>
    <ik-form-item v-bind="formItemLayout" label="Phone Number">
      <ik-input
        v-decorator="[
          'phone',
          {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          },
        ]"
        style="width: 100%"
      >
        <ik-select
          slot="addonBefore"
          v-decorator="['prefix', { initialValue: '86' }]"
          style="width: 70px"
        >
          <ik-select-option value="86">
            +86
          </ik-select-option>
          <ik-select-option value="87">
            +87
          </ik-select-option>
        </ik-select>
      </ik-input>
    </ik-form-item>
    <ik-form-item v-bind="formItemLayout" label="Website">
      <ik-auto-complete
        v-decorator="['website', { rules: [{ required: true, message: 'Please input website!' }] }]"
        placeholder="website"
        @change="handleWebsiteChange"
      >
        <template slot="dataSource">
          <ik-select-option v-for="website in autoCompleteResult" :key="website">
            {{ website }}
          </ik-select-option>
        </template>
        <ik-input />
      </ik-auto-complete>
    </ik-form-item>
    <ik-form-item
      v-bind="formItemLayout"
      label="Captcha"
      extra="We must make sure that your are a human."
    >
      <ik-row :gutter="8">
        <ik-col :span="12">
          <ik-input
            v-decorator="[
              'captcha',
              { rules: [{ required: true, message: 'Please input the captcha you got!' }] },
            ]"
          />
        </ik-col>
        <ik-col :span="12">
          <ik-button>Get captcha</ik-button>
        </ik-col>
      </ik-row>
    </ik-form-item>
    <ik-form-item v-bind="tailFormItemLayout">
      <ik-checkbox v-decorator="['agreement', { valuePropName: 'checked' }]">
        I have read the
        <a href="">
          agreement
        </a>
      </ik-checkbox>
    </ik-form-item>
    <ik-form-item v-bind="tailFormItemLayout">
      <ik-button type="primary" html-type="submit">
        Register
      </ik-button>
    </ik-form-item>
  </ik-form>
</template>

<script>
const residences = [
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
];

export default {
  data() {
    return {
      confirmDirty: false,
      residences,
      autoCompleteResult: [],
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      },
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'register' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    },
    handleWebsiteChange(value) {
      let autoCompleteResult;
      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(domain => \`\${ value }\${ domain }\`);
      }
      this.autoCompleteResult = autoCompleteResult;
    },
  },
};
</script>
`
const timeClassFormCode = `
<template>
  <ik-form :form="form" @submit="handleSubmit">
    <ik-form-item v-bind="formItemLayout" label="DatePicker">
      <ik-date-picker v-decorator="['date-picker', config]" />
    </ik-form-item>
    <ik-form-item v-bind="formItemLayout" label="DatePicker[showTime]">
      <ik-date-picker
        v-decorator="['date-time-picker', config]"
        show-time
        format="YYYY-MM-DD HH:mm:ss"
      />
    </ik-form-item>
    <ik-form-item v-bind="formItemLayout" label="MonthPicker">
      <ik-month-picker v-decorator="['month-picker', config]" />
    </ik-form-item>
    <ik-form-item v-bind="formItemLayout" label="RangePicker">
      <ik-range-picker v-decorator="['range-picker', rangeConfig]" />
    </ik-form-item>
    <ik-form-item v-bind="formItemLayout" label="RangePicker[showTime]">
      <ik-range-picker
        v-decorator="['range-time-picker', rangeConfig]"
        show-time
        format="YYYY-MM-DD HH:mm:ss"
      />
    </ik-form-item>
    <ik-form-item v-bind="formItemLayout" label="TimePicker">
      <a-time-picker v-decorator="['time-picker', config]" />
    </ik-form-item>
    <ik-form-item
      :wrapper-col="{
        xs: { span: 24, offset: 0 },
        sm: { span: 16, offset: 8 },
      }"
    >
      <ik-button type="primary" html-type="submit">
        Submit
      </ik-button>
    </ik-form-item>
  </ik-form>
</template>
<script>
export default {
  data() {
    return {
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
      config: {
        rules: [{ type: 'object', required: true, message: 'Please select time!' }],
      },
      rangeConfig: {
        rules: [{ type: 'array', required: true, message: 'Please select time!' }],
      },
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'time_related_controls' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, fieldsValue) => {
        if (err) {
          return;
        }

        // Should format date value before submit.
        const rangeValue = fieldsValue['range-picker'];
        const rangeTimeValue = fieldsValue['range-time-picker'];
        const values = {
          ...fieldsValue,
          'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
          'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
          'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
          'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
          'range-time-picker': [
            rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
            rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
          ],
          'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
        };
        console.log('Received values of form: ', values);
      });
    },
  },
};
</script>
`
const otherTypesFormCode = `
<template>
  <ik-form id="components-form-demo-validate-other" :form="form" v-bind="formItemLayout" @submit="handleSubmit">
    <ik-form-item label="Plain Text">
      <span class="ant-form-text">
        China
      </span>
    </ik-form-item>
    <ik-form-item label="Select" has-feedback>
      <ik-select
        v-decorator="[
          'select',
          { rules: [{ required: true, message: 'Please select your country!' }] },
        ]"
        placeholder="Please select a country"
      >
        <ik-select-option value="china">
          China
        </ik-select-option>
        <ik-select-option value="usa">
          U.S.A
        </ik-select-option>
      </ik-select>
    </ik-form-item>

    <ik-form-item label="Select[multiple]">
      <ik-select
        v-decorator="[
          'select-multiple',
          {
            rules: [
              { required: true, message: 'Please select your favourite colors!', type: 'array' },
            ],
          },
        ]"
        mode="multiple"
        placeholder="Please select favourite colors"
      >
        <ik-select-option value="red">
          Red
        </ik-select-option>
        <ik-select-option value="green">
          Green
        </ik-select-option>
        <ik-select-option value="blue">
          Blue
        </ik-select-option>
      </ik-select>
    </ik-form-item>

    <ik-form-item label="InputNumber">
      <ik-input-number v-decorator="['input-number', { initialValue: 3 }]" :min="1" :max="10" />
      <span class="ant-form-text">
        machines
      </span>
    </ik-form-item>

    <ik-form-item label="Switch">
      <ik-switch v-decorator="['switch', { valuePropName: 'checked' }]" />
    </ik-form-item>

    <ik-form-item label="Slider">
      <ik-slider
        v-decorator="['slider']"
        :marks="{ 0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F' }"
      />
    </ik-form-item>

    <ik-form-item label="Radio.Group">
      <ik-radio-group v-decorator="['radio-group']">
        <ik-radio value="a">
          item 1
        </ik-radio>
        <ik-radio value="b">
          item 2
        </ik-radio>
        <ik-radio value="c">
          item 3
        </ik-radio>
      </ik-radio-group>
    </ik-form-item>

    <ik-form-item label="Radio.Button">
      <ik-radio-group v-decorator="['radio-button']">
        <ik-radio-button value="a">
          item 1
        </ik-radio-button>
        <ik-radio-button value="b">
          item 2
        </ik-radio-button>
        <ik-radio-button value="c">
          item 3
        </ik-radio-button>
      </ik-radio-group>
    </ik-form-item>

    <ik-form-item label="Checkbox.Group">
      <ik-checkbox-group
        v-decorator="['checkbox-group', { initialValue: ['A', 'B'] }]"
        style="width: 100%;"
      >
        <ik-row>
          <ik-col :span="8">
            <ik-checkbox value="A">
              A
            </ik-checkbox>
          </ik-col>
          <ik-col :span="8">
            <ik-checkbox disabled value="B">
              B
            </ik-checkbox>
          </ik-col>
          <ik-col :span="8">
            <ik-checkbox value="C">
              C
            </ik-checkbox>
          </ik-col>
          <ik-col :span="8">
            <ik-checkbox value="D">
              D
            </ik-checkbox>
          </ik-col>
          <ik-col :span="8">
            <ik-checkbox value="E">
              E
            </ik-checkbox>
          </ik-col>
        </ik-row>
      </ik-checkbox-group>
    </ik-form-item>

    <ik-form-item label="Rate">
      <a-rate v-decorator="['rate', { initialValue: 3.5 }]" allow-half />
    </ik-form-item>

    <ik-form-item label="Upload" extra="longgggggggggggggggggggggggggggggggggg">
      <ik-upload
        v-decorator="[
          'upload',
          {
            valuePropName: 'fileList',
            getValueFromEvent: normFile,
          },
        ]"
        name="logo"
        action="/upload.do"
        list-type="picture"
      >
        <ik-button> <ik-icon type="upload" /> Click to upload </ik-button>
      </ik-upload>
    </ik-form-item>

    <ik-form-item label="Dragger">
      <div class="dropbox">
        <ik-upload-dragger
          v-decorator="[
            'dragger',
            {
              valuePropName: 'fileList',
              getValueFromEvent: normFile,
            },
          ]"
          name="files"
          action="/upload.do"
        >
          <p class="ant-upload-drag-icon">
            <ik-icon type="inbox" />
          </p>
          <p class="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p class="ant-upload-hint">
            Support for a single or bulk upload.
          </p>
        </ik-upload-dragger>
      </div>
    </ik-form-item>

    <ik-form-item :wrapper-col="{ span: 12, offset: 6 }">
      <ik-button type="primary" html-type="submit">
        Submit
      </ik-button>
    </ik-form-item>
  </ik-form>
</template>

<script>
export default {
  data: () => ({
    formItemLayout: {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    },
  }),
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'validate_other' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    normFile(e) {
      console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    },
  },
};
</script>
<style>
#components-form-demo-validate-other .dropbox {
  height: 180px;
  line-height: 1.5;
}
</style>
`
export {
  fromLinkageText,
  basicDatePickerText,
  formItemLayouts,
  formLayoutCode,
  customCheckFormCode,
  processFormDataYourselfFormCode,
  searchFormCode,
  customFormCode,
  dynamicFormCode,
  popUpNewFormCode,
  dataStorageFormCode,
  dataStorageVuxFormCode,
  loginBoxFormCode,
  registerNewUserCode,
  timeClassFormCode,
  otherTypesFormCode
}
