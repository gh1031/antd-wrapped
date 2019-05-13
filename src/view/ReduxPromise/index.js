import React, { Fragment } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { actions as countAction } from 'view/store/reducer';

console.log(countAction.math)

const ReduxPromise = (props) => {
  console.log(props)
  let { count, increaseCount, decreateCount } = props;
  return (
    <Fragment>
      <section>{count}</section>
      <Button type="primary" onClick={() => { ++count; increaseCount({ count })}}>增加</Button>
      <Button type="primary" onClick={() => { --count; decreateCount({ count })}}>减少</Button>
    </Fragment>
  )
}

export default connect(({ count }) => ({ count }), countAction.math)(ReduxPromise);
