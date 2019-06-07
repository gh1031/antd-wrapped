**API**

| 参数      | 说明           | 类型       | 默认值         | 必传 |
| --------- | -------------- | ---------- | -------------- | ---- |
| fetchApi  | 联想搜索地址   | `promise`  |                | 是   |
| optionKey | 入参key        | `string`   |                | 是   |
| onSelect  | 选中下拉项触发 | `function` |                | 否   |
| showArrow | 展示下拉图标   | `boolean`  | false          | 否   |
| delay     | 搜索延迟       | `number`   | 800ms          | 否   |
| style     | 内联样式       | `object`   | { width: 200 } | 否   |
|           |                |            |                |      |

**Example**

```js
const fetchApi = () => {
  return axios.post(url, body)
}

<RemoteSelect
	fetchApi={fetchApi}
	optionKey="id"
/>
```

