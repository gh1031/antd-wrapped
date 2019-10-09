import React, { FC } from 'react';
import PropTypes from 'prop-types';
import {
  Form, Input, Select, DatePicker,
} from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import WrappedForm from '@/components/WrappedForm';
import { addDemand } from '@/src/api/demand';
import { toTimeStamp } from '@/src/utils/date';
import { notEmptyArray } from '@/src/utils/lang';
import Operation from './Operation';
import WrappedUpload from '@/components/WrappedUpload';

interface IProps {
  form: WrappedFormUtils
}

const { RangePicker } = DatePicker;

const { renderOptions } = WrappedForm;

const rooms = [{ title: 301, key: 301 }, { title: 302, key: 302 }, { title: 303, key: 303 }];

const AddDemand: FC<IProps> = ({ form }): React.ReactElement => {
  const handleSubmit = () => {
    const { validateFieldsAndScroll } = form;
    validateFieldsAndScroll(async (error, values): Promise<any> => {
      if (error) return;
      if (notEmptyArray(values._time)) {
        values.gmtStart = toTimeStamp(values._time[0]);
        values.gmtEnd = toTimeStamp(values._time[1]);
      }
      values.rooms = values.rooms.join();
      delete values._time;
      await addDemand(values);
    });
  };

  const meta = {
    formItemLayout: {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 14,
      },
    },
    formItems: [{
      label: '酒店名称',
      field: 'hotel',
      key: 'hotel',
      component: Input,
    }, {
      label: '酒店图片',
      field: 'pictures',
      key: 'pictures',
      component: WrappedUpload,
      componentProps: {
        type: 'list',
      },
    }, {
      label: '酒店地址',
      field: 'address',
      key: 'address',
      component: Input,
    }, {
      label: '详细地址',
      field: 'addressDetail',
      key: 'addressDetail',
      component: Input,
    }, {
      label: '房间号',
      field: 'rooms',
      key: 'rooms',
      component: Select,
      children: renderOptions(rooms, {}),
      componentProps: {
        mode: 'multiple',
      },
    }, {
      label: '房间总数',
      field: 'totalRooms',
      key: 'totalRooms',
      component: Input,
    }, {
      label: '单价',
      field: 'price',
      key: 'price',
      component: Input,
    }, {
      label: '开始时间',
      field: '_time',
      key: '_time',
      component: RangePicker,
      componentProps: {
        style: {
          width: '100%',
        },
      },
    }, {
      label: ' ',
      field: 'operate',
      key: 'operate',
      component: Operation,
      componentProps: {
        onSubmit: handleSubmit,
      },
      formItemProps: {
        colon: false,
      },
    }],
  };

  return (
    <Form>
      <WrappedForm meta={meta} form={form} />
    </Form>
  );
};

AddDemand.propTypes = {
  form: PropTypes.object,
};
AddDemand.defaultProps = {

};

export default Form.create()(AddDemand);
