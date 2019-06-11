import React, { Fragment } from 'react';
import { Icon } from 'antd';
import WrappedUpload from '../../../components/WrappedUpload';

const ACTION = 'https://www.mocky.io/v2/5cc8019d300000980a055e76';
// eslint-disable-next-line arrow-body-style
const Upload = () => {
  return (
    <Fragment>
      <WrappedUpload />
      <WrappedUpload
        type="list"
        uploadProps={{
          action: ACTION,
          listType: 'picture',
          // showUploadList: false,
        }}
      />
      <WrappedUpload
        type="drag"
        uploadProps={{
          action: ACTION,
          listType: 'picture',
          showUploadList: false,
        }}
      />
    </Fragment>
  );
};

export default Upload;
