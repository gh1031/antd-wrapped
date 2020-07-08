import React, { Fragment } from 'react';
import RemoteSelect from '@/components/wrappedSelect';

const NoContent = () => (
  <Fragment>
    <RemoteSelect style={{ width: 300 }} fetchApi={() => {}} optionKey="antd" />
  </Fragment>
);

export default NoContent;
