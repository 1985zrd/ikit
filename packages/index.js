// 导入按钮组件
import Button, { ButtonGroup } from './button'
import Checkbox, { CheckboxGroup } from './checkbox'
import Radio, { RadioButton, RadioGroup } from './radio'
import Form, { FormItem } from './form'
import Input, { InputTextArea, InputSearch, InputGroup, InputPassword } from './input'
import Row from './row'
import Col from './col'
import List from './list'
import Select from './select/index.js'
import Spin from './spin'
import Pagination from './pagination/index'
import Breadcrumb, { BreadcrumbItem } from './breadcrumb/index'
import Menu, { MenuItem, SubMenu, MenuDivider, ItemGroup } from './menu/index'
import ConfigProvider from './config-provider/index'
import Empty from './empty/index'
import Table, { Column, ColumnGroup } from './table/index'
import InputNumber from './input-number'
import Tabs, { TabPane } from './tabs'
import Layout from './layout'
import Cascader from './cascader'
import Avatar from './avatar'
import Card from './card'
import Upload from './upload'
import Icon from './icon'
import DatePicker from './date-picker'
import Message from './message'
import Modal from './modal'
// import selectArea from './selectArea'
import LocaleProvider from './locale-provider'
import AutoComplete from './auto-complete'
import Divider from './divider'
import Tag, { CheckableTag } from './tag'
import Timeline, { TimelineItem } from './timeline'
import Slider from './slider'
import Affix from './affix'
import Tooltip from './tooltip'
import Badge from './badge'
import Switch from './switch'
import Dropdown from './dropdown'
import Anchor, { AnchorLink } from './anchor'
import TreeSelect, { TreeSelectNode } from './tree-select'
import Tree, { TreeNode, DirectoryTree } from './tree'
import Rate from './rate'
import Popover from './popover'
import Popconfirm from './popconfirm'
import BackTop from './back-top'
import Transfer from './transfer'
import Drawer from './drawer'
import Statistic, { Countdown } from './statistic'
import Progress from './progress'
import Comment from './comment'
import Notification from './notification'
import Collapse, { CollapsePanel } from './collapse'
import Alert from './alert'
import Calendar from './calendar'
import Steps, { Step } from './steps'
import TimePicker from './time-picker'

import Skeleton from './skeleton'

import { version } from '../package.json'

import './theme/index.less'

// 存储组件列表
const components = [
  Button,
  ButtonGroup,
  Radio,
  RadioButton,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Form,
  FormItem,
  Spin,
  Row,
  ...List,
  Col,
  Input,
  InputTextArea,
  InputSearch,
  InputGroup,
  InputPassword,
  ...Select,
  Steps,
  Step,
  Breadcrumb,
  BreadcrumbItem,
  Pagination,
  Menu,
  MenuItem,
  SubMenu,
  MenuDivider,
  ItemGroup,
  ConfigProvider,
  Empty,
  Table,
  Column,
  ColumnGroup,
  InputNumber,
  Tabs,
  TabPane,
  ...Layout,
  Cascader,
  Avatar,
  ...Card,
  ...Upload,
  Icon,
  ...DatePicker,
  Message,
  Modal,
  // selectArea,
  LocaleProvider,
  AutoComplete,
  Divider,
  Tag,
  CheckableTag,
  Timeline,
  TimelineItem,
  Slider,
  Affix,
  Tooltip,
  Badge,
  Switch,
  ...Dropdown,
  Anchor,
  AnchorLink,
  TreeSelect,
  TreeSelectNode,
  Tree,
  TreeNode,
  DirectoryTree,
  Rate,
  Popover,
  Popconfirm,
  BackTop,
  Transfer,
  Drawer,
  Statistic,
  Countdown,
  Progress,
  Comment,
  // Descriptions,
  Notification,
  Skeleton,
  Notification,
  Collapse,
  CollapsePanel,
  Alert,
  Calendar,
  TimePicker
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  Vue.prototype.$message = Message
  Vue.prototype.$confirm = Modal.confirm
  Vue.prototype.$info = Modal.info
  Vue.prototype.$success = Modal.success
  Vue.prototype.$error = Modal.error
  Vue.prototype.$warning = Modal.warning
  Vue.prototype.$destroyAll = Modal.destroyAll
  Vue.prototype.$notification = Notification
}
// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  Button,
  ButtonGroup,
  Radio,
  RadioButton,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Form,
  FormItem,
  Spin,
  Icon,
  Steps,
  Step,
  Menu,
  MenuItem,
  SubMenu,
  MenuDivider,
  ItemGroup,
  Table,
  Column,
  ColumnGroup,
  Input,
  InputNumber,
  Tabs,
  Message,
  Modal,
  Slider,
  Affix,
  Tooltip,
  Badge,
  Switch,
  Dropdown,
  Tag,
  CheckableTag,
  Timeline,
  TimelineItem,
  Anchor,
  TreeSelect,
  Tree,
  Rate,
  Popover,
  Popconfirm,
  BackTop,
  Transfer,
  Drawer,
  Statistic,
  Progress,
  Comment,
  // Descriptions,
  Notification,
  Skeleton,
  version,
  Collapse,
  Alert,
  Calendar,
  TimePicker
}

export default {
  version: version,
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install
  // 以下是具体的组件列表
  // ...components
}
