import React from 'react';
import { WrappedUpload } from '@/lib';

const ACTION = 'https://www.mocky.io/v2/5cc8019d300000980a055e76';
const style = {
  width: 400,
  height: 200,
};

// eslint-disable-next-line arrow-body-style
const Upload = () => {
  return (
    <div>
      <div style={style}>
        <WrappedUpload />
      </div>
      <br />
      <div style={style}>
        <WrappedUpload
          type="list"
          uploadProps={{
            action: ACTION,
            listType: 'picture',
            // showUploadList: false,
          }}
        />
      </div>
      <div style={style}>
        <WrappedUpload
          type="drag"
          uploadProps={{
            action: ACTION,
            listType: 'picture',
            showUploadList: false,
          }}
        />
      </div>
    </div>
  );
};

export default Upload;
