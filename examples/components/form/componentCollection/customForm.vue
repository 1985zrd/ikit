<template>
  <codeBox :title="title" :description="description" :code="text">
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
        <ik-button type="primary" html-type="submit">Submit</ik-button>
      </ik-form-item>
    </ik-form>
  </codeBox>
</template>
<script>
import { customFormCode } from '../codeExample'
import mixin from '../formMixins'
const hasProp = (instance, prop) => {
  const $options = instance.$options || {}
  const propsData = $options.propsData || {}
  return prop in propsData
}
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
  mixins: [mixin],
  name: 'customForm',
  data () {
    return {
      title: '自定义表单控件',
      description: '自定义或第三方的表单控件，也可以与 Form 组件一起使用。只要该组件遵循以下的约定：提供受控属性 value 或其它与 valuePropName-参数) 的值同名的属性。提供 onChange 事件或 trigger-参数) 的值同名的事件。不能是函数式组件。',
      text: customFormCode
    }
  },
  components: {
    PriceInput
  },
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'customized_form_controls' })
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    checkPrice (rule, value, callback) {
      const tip = 'Price must greater than zero!'
      if (value.number > 0) {
        callback()
        return
      }
      callback(tip)
    }
  }
}
</script>
