**API**

| 参数        | 说明           | 类型                           | 默认值   | 必传 |
| ----------- | -------------- | ------------------------------ | -------- | ---- |
| mode        | 菜单布局类型   | `string`                       | `inline` | 否   |
| theme       | 菜单主题       | `string`                       | `light`  | 否   |
| menus       | 菜单数据源     | `array`                        |          | 是   |
| onClick     | 点击时触发     | `function`                     |          | 否   |
| renderTitle | 菜单项渲染函数 | `function (menu) => ReactNode` |          | 否   |

**Example**

```js
const menus = [
  {
    path: '',
    title: '',
    icon?: '',
    children?: []
  },
  //...
]
<WrappedMenus menus={menus} />

```

