import React from 'react';
import {
  Upload,
  Button,
  Icon,
} from 'antd';
import PropTypes from 'prop-types';
import { isValidateImg } from './valideFile';

const ACTION = 'https://www.mocky.io/v2/5cc8019d300000980a055e76';
function WrappedUpload(props) {
  let widgetProps = {};
  const {
    type,
    uploadProps,
    buttonType,
    ...rest
  } = props;

  const beforeUpload = file => new Promise(async (resolve, reject) => {
    if (!isValidateImg(file, rest)) {
      reject();
    }
    // if (!isValidateFile(file, rest)) {
    //   reject();
    // }
    resolve();
  });

  // const handleChange = (file, fileList, evt) => {
  // console.log(file, fileList, evt);
  // if (file.status === 'done') {
  //   if (onSuccess) {

  //   }
  // }
  // };

  const renderButton = () => (
    <Button type={buttonType}>
      <Icon type="upload" />
      <span>点击上传</span>
    </Button>
  );
  const renderDrag = () => {};
  const renderList = () => {};
  const render = (type) => {
    switch (type) {
      case 'drag': return renderDrag();
      case 'list': return renderList();
      default: return renderButton();
    }
  };

  widgetProps = {
    ...uploadProps,
    beforeUpload,
    // onChange: handleChange,
  };

  return (
    <Upload {...widgetProps} className="test">
      {render(type)}
    </Upload>
  );
}


WrappedUpload.propTypes = {
  type: PropTypes.string,
  uploadProps: PropTypes.object,
  buttonType: PropTypes.string,
};
WrappedUpload.defaultProps = {
  type: '',
  uploadProps: {
    action: ACTION,
  },
  buttonType: 'primary',
};
export default WrappedUpload;
