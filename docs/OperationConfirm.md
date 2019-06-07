
**API**

|参数|说明|类型|默认值|必传|
|-|:--|-|-|-|
|okText|确认按钮文字|`string`|确定|否|
|cancelText|取消按钮文字|`string`|取消|否|
|title|弹出框描述文案|`string`|确认删除吗？|否|
|onCancel|点击取消的回调|`function`|无|否|
|onConfirm|点击确认的回调|`function`|无|是|

**Example**

```js
const onConfirm = () => {
  axios.post(url, body)
}
<OperationConfirm onConfirm={onCOnfirm}>
```



