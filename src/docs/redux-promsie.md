# Api

```js
import { createActions, handleActions, combineActions } from 'redux-promise';
```

**action**

```js
{
  type: 'string',
  payload: {}
}
```

## 创建action(s)

### `createAction`

* type 
type表示action的type,是唯一必传参数，返回一个action创建函数，该函数接受的参数即是payload的值

```js
export const increment = createAction('INCREMENT')；

increment()  // { type: 'INCREMENT' }
increment(1) // { type: 'INCREMENT', payload: 1 }
increment({}) // { type 'INCREMENT', payload: {} }
```

* payloadCreator
payloadCreator,是creteAction的第二个可选参数(函数)，用来创建payload，creatAction的入参即是payloadCreator的参数，返回payload的值

```js
export const increment = createAction('INCREMENT', arg => arg *2 )；
increment(2) // { type: 'INCREMENT', payload: 4}
```

* metaCreator
metaCreator是creatAction的第三个可选参数(函数)，用来创建meta信息

```js
export const increment = createAction('INCREMENT', arg => arg *2, () => ({ name: 'name' }})))；
increment(1)
/*
  {
    type: 'INCREMENT',
    payload: 2,
    meta: { name: 'name' }
  }
*/
```
### `createActions`

* actionMap
actionMap是createActions唯一必须参数，可递归嵌套并返回

```js
const { math: { increment, decrement }} = createActions({
  'math/increment': (key, value) => ({ [key]: value }),
  'math/decrement': (key, value) => ({ [key]: value }),
})
```

### `handleActions`

```js
const reducer = handleActions({
  'math/increment': (state, action) => ({...state, ...action.payload })
  'math/decrement': (state, action) => ({...state, ...action.payload })
}, { count: 0 })

const reducer = handleActions(
  new Map([
    [
      'math/increment': (state, action) => ({...state, ...action.payload })
    ], [
      'math/decrement': (state, action) => ({...state, ...action.payload })
    ]
  ])
  , { count: 0 })
```

### `combineActions`

```js
// TODO
```