import React, { useState } from 'react';
import {
  Upload,
  Button,
  Icon,
  message,
  Modal,
} from 'antd';
import PropTypes from 'prop-types';
import { isValidateImg } from './valideFile';
import { noop } from '@/components/utils/lang';
import './index.less';

const { Dragger } = Upload;

function WrappedUpload(props) {
  let widgetProps = {};
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState({
    previewVisible: false,
    previewSrc: '',
  });
  const [fileList, setFileList] = useState([]);
  const {
    type,
    icon,
    uploadProps,
    buttonType,
    buttonText,
    onSuccess,
    children,
    ...rest
  } = props;
  const iconType = loading ? 'loading' : (icon || 'upload');
  const beforeUpload = file => new Promise(async (resolve, reject) => {
    if (!isValidateImg(file, rest)) {
      reject();
    }
    resolve();
  });
  const handleChange = ({ file }) => {
    setLoading(true);
    setFileList(fileList => ([...fileList.filter(exectFile => exectFile.uid !== file.uid), file]));
    if (file.status === 'done' || file.status === 'error') {
      setLoading(false);
    }

    if (file.status === 'done') {
      const { response } = file;
      if (
        response.success
        || response.code === '0'
        || response.status === 'done'
      ) {
        if (onSuccess) {
          onSuccess(response);
          message.success('上传成功！');
        }
      } else {
        Modal.error({
          title: '上传失败',
          content: file.response.message,
        });
      }
    } else if (file.status === 'error') {
      message.error(`${file.name} 上传失败！`, 3);
    }
  };

  /**
   * list type method start scope
   */
  const handleRemove = () => new Promise((resolve) => {
    setFileList(fileList => ([...fileList.filter(exectFile => exectFile.status !== 'removed')]));
    resolve();
  });
  const handlePreview = (file) => {
    setPreview({
      previewVisible: true,
      previewSrc: (file.response.url || file.thumbUrl),
    });
  };
  const handleCancel = () => setPreview({ previewVisible: false });

  if (type === 'list') {
    uploadProps.listType = 'picture-card';
    uploadProps.fileList = fileList;
    uploadProps.onRemove = handleRemove;
    uploadProps.onPreview = handlePreview;
  }
  const renderList = () => (
    <Upload {...widgetProps}>
      <Icon type={iconType} />
      <div className="ant-upload-text">{buttonText}</div>
      <Modal
        className="wrapped-modal"
        footer={null}
        onCancel={handleCancel}
        visible={preview.previewVisible}
      >
        <img alt="preview" src={preview.previewSrc} />
      </Modal>
    </Upload>
  );
  /**
   * list type method end scope
   */

  /**
   * button type method start scope
   */
  const renderButton = () => (
    <Upload {...widgetProps}>
      <Button type={buttonType} disabled={loading}>
        <Icon type={iconType} />
        <span>{buttonText}</span>
      </Button>
    </Upload>
  );
  /**
   * button type method end scope
   */

  const renderDrag = () => (
    <Dragger {...widgetProps}>
      {children
        || (
          <div className="wrapped-drag">
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">点击此区域或拖到文件至此区域</p>
          </div>
        )
      }
    </Dragger>
  );

  const render = (type) => {
    switch (type) {
      case 'drag': return renderDrag();
      case 'list': return renderList();
      default: return renderButton();
    }
  };

  widgetProps = {
    ...uploadProps,
    onChange: handleChange,
    beforeUpload,
  };

  return render(type);
}

WrappedUpload.propTypes = {
  type: PropTypes.string,
  uploadProps: PropTypes.object,
  icon: PropTypes.string,
  buttonType: PropTypes.string,
  buttonText: PropTypes.string,
  onSuccess: PropTypes.func,
};
WrappedUpload.defaultProps = {
  type: '',
  icon: '',
  buttonType: 'primary',
  buttonText: '点击上传',
  uploadProps: {},
  onSuccess: noop,
};

export default WrappedUpload;
