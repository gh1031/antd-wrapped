**API**



| 参数 | 说明                    | 类型     | 默认值 | 必传 |
| ---- | ----------------------- | -------- | ------ | ---- |
| meta | 元信息                  | `Object` | -      |      |
| form | Form.create()传入的对象 | `Object` | -      |      |



**Meta对象**

| 属性           | 类型   | 说明           |
| -------------- | ------ | -------------- |
| columns        | Number | 表单的几列布局 |
| formItemLayout | Object | 表单布局       |
| formItems       | Array  | 表单项         |

**elements对象**



| 属性              | 说明                                  | 必选 |
| ----------------- | ------------------------------------- | ---- |
| label             | 标签文本                              | 是   |
| field             | 表单项唯一标志                        | 是   |
| component         | 表单组件类型                          | 是   |
| componentProps    | 传给组件属性对象                      | 否   |
| formItemProps     | 传给表单属性对象                      | 否   |
| required          | 表单是否必填                          | 否   |
| useFieldDecorator | 是否使用`getFieldDecorator`，默认使用 | 否   |
| colon             | 是否使用冒号                          | 否   |
| disabled          | 禁止表单                              | 否   |
| p laceholder      | 提示符                                | 否   |
| children          | 子元素                                | 否   |
|                   |                                       |      |
|                   |                                       |      |





**Example**

```js

```

