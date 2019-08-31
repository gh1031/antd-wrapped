## 安装

```bash
npm Setting antd-wrapped
# 或
yarn add antd-warpped
```

```js
import { RemoteSelect } from 'antd-wrapped'
const App = () => {
  const fetchApi = () => axios.post(url, body);
  return <RemoteSelect fetchApi={fetchApi} optionKey="id" />
}
ReactDom.render(App, document.getElementById('app'));
```

