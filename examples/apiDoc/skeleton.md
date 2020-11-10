
## API [#](#API)

### Skeleton [#](#Skeleton)

|属性|说明|类型|默认值|
|---|---|---|---|
|type|预设类型|string` {'code', 'list'}`|-|
|width|骨架屏显示的宽，相当于画布的宽|number | 1000|
|height|骨架屏显示的高，相当于画布的高|number | 400|
|animate|是否开启动画|boolean | true|
|time|动画所需时间(s)，animate为true时有效|number | 2|
|loading|为 `true` 时，显示占位图。反之则直接展示slot为content的子组件或空|boolean|false|
|primaryColor|主颜色|string | #EAEDF1 |
|secondaryColor|动画颜色|string | rgba(255, 255, 255, 0.3)|
|preserveAspectRatio|显示方式|string`{'xMinYMin meet', 'xMinYMin slice'...}` | xMinYMin meet|
|data|可以通过data来生成图像，见上面参数设置| array | -|
|content|设置子元素slot为content。loading属性为true时，显示slot为content的子元素| slot | -|

