import React, { Fragment } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { actions as countAction } from 'view/store/reducer';
import PropTypes from 'prop-types';

// console.log(countAction.math);

const ReduxPromise = (props) => {
  // console.log(props)
  const { increaseCount, decreateCount } = props;
  let { count } = props;
  return (
    <Fragment>
      <section>{count}</section>
      <Button type="primary" onClick={() => { ++count; increaseCount({ count }); }}>增加</Button>
      <Button type="primary" onClick={() => { --count; decreateCount({ count }); }}>减少</Button>
    </Fragment>
  );
};

ReduxPromise.propTypes = {
  count: PropTypes.number.isRequired,
  increaseCount: PropTypes.func.isRequired,
  decreateCount: PropTypes.func.isRequired,
};

export default connect(({ count }) => ({ count }), countAction.math)(ReduxPromise);
