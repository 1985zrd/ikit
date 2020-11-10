import { Modal } from 'ant-design-vue'
import Icon from '../../icon'

function changeIcon (iconObj, props, callback) {
  const config = {
    icon: h => {
      return <Icon type={iconObj.type} style={iconObj.style || {}} isIk />
    },
    ...props
  }
  return callback(config)
}

export default {
  name: 'ik-modal',
  props: {
    titleCenter: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    }
  },
  inheritAttrs: false,
  functional: true,
  // confirm: Modal.confirm,
  confirm: props => changeIcon({
    type: 'iconconfirm',
    style: { color: '#F2960C' }
  }, props, Modal.confirm),
  info: props => changeIcon({
    type: 'iconinfo',
    style: { color: '#1890FF' }
  }, props, Modal.info),
  success: props => changeIcon({
    type: 'iconsuccess'
  }, props, Modal.success),
  error: props => changeIcon({
    type: 'iconclear-or-error'
  }, props, Modal.error),
  warning: props => changeIcon({
    type: 'iconwarn'
  }, props, Modal.warning),
  destroyAll: Modal.destroyAll,
  render (h, c) {
    // 定义按钮默认属性
    let btnDefault = {
      size: 'large'
    }
    let cancelBtnProps = c.props.cancelButtonProps || {}
    let okBtnProps = c.props.okButtonProps || {}

    // 根据传进来的btn属性组合取消按钮的渲染属性
    let cancelButtonProps = {
      props: {
        ...btnDefault,
        ...(cancelBtnProps.props || {})
      },
      on: {
        ...(cancelBtnProps.on || {})
      }
    }
    // 根据传进来的btn属性组合确定按钮的渲染属性
    let okButtonProps = {
      props: {
        ...btnDefault,
        ...(okBtnProps.props || [])
      },
      on: {
        ...(okBtnProps.on || [])
      }
    }

    // 自定义关闭按钮
    const closeIcon = (
      <span class="ant-modal-close-x">
        <Icon type="iconclose" style="font-size:19px;color:#A5A8AE;" isIk />
      </span>
    )

    const newTitle = (
      <div>
        <strong>{c.props.title}</strong>
        <span>{c.props.subTitle}</span>
      </div>
    )

    return (
      <Modal
        {...c.data}
        title={newTitle}
        cancelButtonProps={cancelButtonProps}
        okButtonProps={okButtonProps}
        class={{ 'ant-modal-title-center': c.props.titleCenter }}
        scopedSlots={c.scopedSlots}>
        {closeIcon}
        {c.children}
      </Modal>)
  }
}
